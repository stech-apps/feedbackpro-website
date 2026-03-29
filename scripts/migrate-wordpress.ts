/**
 * WordPress → MDX Migration Script
 *
 * Fetches all posts from a WordPress site via the REST API,
 * converts content to Markdown (stripping Avada/Fusion Builder markup),
 * downloads featured images locally, and writes MDX files to content/blog/.
 *
 * Usage:
 *   npx tsx scripts/migrate-wordpress.ts
 *
 * Requires WP_SITE_URL in .env.local (or as an environment variable).
 */

import fs from 'fs'
import path from 'path'
import https from 'https'
import http from 'http'
import TurndownService from 'turndown'

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

const WP_SITE_URL = process.env.WP_SITE_URL ?? 'https://feedbackpro.io'
const OUTPUT_DIR = path.join(process.cwd(), 'content', 'blog')
const IMAGES_DIR = path.join(process.cwd(), 'public', 'images', 'blog')

// ---------------------------------------------------------------------------
// WordPress REST API types (minimal)
// ---------------------------------------------------------------------------

interface WPPost {
  id: number
  slug: string
  date: string
  title: { rendered: string }
  content: { rendered: string }
  excerpt: { rendered: string }
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string
      alt_text: string
    }>
    'wp:term'?: Array<Array<{ name: string; taxonomy: string }>>
  }
}

// ---------------------------------------------------------------------------
// HTML cleanup helpers
// ---------------------------------------------------------------------------

function stripShortcodes(html: string): string {
  // Remove Fusion Builder shortcodes like [fusion_text]...[/fusion_text]
  // and self-closing [fusion_imageframe src="..." /]
  return html.replace(/\[\/?(fusion_[^\]]*|av_[^\]]*)\]/g, '')
}

function stripAvadaAttributes(html: string): string {
  // Remove style, data-*, and class attributes to clean up Avada wrapper divs
  html = html.replace(/\s+style="[^"]*"/gi, '')
  html = html.replace(/\s+data-[a-z0-9-]+=(?:"[^"]*"|'[^']*')/gi, '')
  html = html.replace(/\s+class="[^"]*"/gi, '')
  html = html.replace(/\s+id="[^"]*"/gi, '')
  return html
}

function cleanHTML(html: string): string {
  let clean = stripShortcodes(html)
  clean = stripAvadaAttributes(clean)
  // Collapse multiple blank lines
  clean = clean.replace(/\n{3,}/g, '\n\n')
  return clean.trim()
}

function decodeHTMLEntities(text: string): string {
  return text
    .replace(/&#8217;/g, '\u2019')
    .replace(/&#8216;/g, '\u2018')
    .replace(/&#8220;/g, '\u201C')
    .replace(/&#8221;/g, '\u201D')
    .replace(/&#8230;/g, '\u2026')
    .replace(/&#038;|&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#(\d+);/g, (_, dec) => String.fromCharCode(Number(dec)))
}

function stripHTMLTags(html: string): string {
  return decodeHTMLEntities(html.replace(/<[^>]+>/g, '').trim())
}

// ---------------------------------------------------------------------------
// Turndown setup
// ---------------------------------------------------------------------------

function buildTurndown(): TurndownService {
  const td = new TurndownService({
    headingStyle: 'atx',
    hr: '---',
    bulletListMarker: '-',
    codeBlockStyle: 'fenced',
  })

  // Drop purely decorative Avada elements (separators, spacers, icons)
  td.addRule('avada-decorative', {
    filter: (node) => {
      const cls = (node as Element).className ?? ''
      return (
        typeof cls === 'string' &&
        (cls.includes('fusion-separator') ||
          cls.includes('fusion-spacing') ||
          cls.includes('fusion-icon') ||
          cls.includes('fusion-social'))
      )
    },
    replacement: () => '',
  })

  // Unwrap Avada layout wrappers transparently
  td.addRule('avada-wrappers', {
    filter: (node) => {
      if (node.nodeName !== 'DIV' && node.nodeName !== 'SECTION') return false
      const cls = (node as Element).className ?? ''
      return (
        typeof cls === 'string' &&
        (cls.includes('fusion-builder') ||
          cls.includes('fusion-layout') ||
          cls.includes('fusion-column') ||
          cls.includes('fusion-text') ||
          cls.includes('fusion-row') ||
          cls.includes('fusion-section'))
      )
    },
    replacement: (_content, node, options) => {
      // Return the inner content, let turndown handle children
      return td.turndown((node as Element).innerHTML)
    },
  })

  return td
}

// ---------------------------------------------------------------------------
// Image download
// ---------------------------------------------------------------------------

async function downloadImage(url: string, destPath: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(destPath)
    const protocol = url.startsWith('https') ? https : http
    protocol
      .get(url, (response) => {
        // Follow redirects (up to 3)
        if (response.statusCode === 301 || response.statusCode === 302) {
          file.close()
          fs.unlinkSync(destPath)
          downloadImage(response.headers.location!, destPath).then(resolve).catch(reject)
          return
        }
        response.pipe(file)
        file.on('finish', () => file.close(resolve))
      })
      .on('error', (err) => {
        fs.unlink(destPath, () => {})
        reject(err)
      })
  })
}

// ---------------------------------------------------------------------------
// Fetch all WordPress posts (handles pagination)
// ---------------------------------------------------------------------------

async function fetchAllPosts(): Promise<WPPost[]> {
  const posts: WPPost[] = []
  let page = 1

  while (true) {
    const url = `${WP_SITE_URL}/wp-json/wp/v2/posts?_embed&per_page=100&page=${page}&status=publish`
    console.log(`  Fetching page ${page}: ${url}`)
    const res = await fetch(url)

    if (!res.ok) {
      if (res.status === 400 && page > 1) break // no more pages
      throw new Error(`WordPress API error: ${res.status} ${res.statusText}\nURL: ${url}`)
    }

    const batch: WPPost[] = await res.json()
    if (batch.length === 0) break
    posts.push(...batch)
    if (batch.length < 100) break
    page++
  }

  return posts
}

// ---------------------------------------------------------------------------
// Convert a single WP post to an MDX file
// ---------------------------------------------------------------------------

async function convertPost(post: WPPost, td: TurndownService): Promise<void> {
  const slug = post.slug
  const title = stripHTMLTags(post.title.rendered)
  const date = post.date.split('T')[0] // YYYY-MM-DD
  const excerpt = stripHTMLTags(post.excerpt.rendered).replace(/\[&hellip;\]|\[…\]/g, '').trim()

  // Category
  const categories = post._embedded?.['wp:term']
    ?.flat()
    .filter((t) => t.taxonomy === 'category' && t.name !== 'Uncategorized')
  const category = categories?.[0]?.name ?? ''

  // Featured image
  let featuredImage = ''
  const mediaItem = post._embedded?.['wp:featuredmedia']?.[0]
  if (mediaItem?.source_url) {
    const ext = path.extname(new URL(mediaItem.source_url).pathname) || '.jpg'
    const imgFilename = `${slug}${ext}`
    const imgDest = path.join(IMAGES_DIR, imgFilename)

    if (!fs.existsSync(imgDest)) {
      try {
        console.log(`  Downloading image: ${mediaItem.source_url}`)
        await downloadImage(mediaItem.source_url, imgDest)
        console.log(`  Saved: public/images/blog/${imgFilename}`)
      } catch (err) {
        console.warn(`  Warning: Could not download image for "${title}": ${err}`)
      }
    }
    featuredImage = `/images/blog/${imgFilename}`
  }

  // Convert content HTML → Markdown
  const cleanedHTML = cleanHTML(post.content.rendered)
  let markdown = td.turndown(cleanedHTML)
  // Clean up any leftover shortcode-like text
  markdown = markdown.replace(/\[\/?(fusion_[^\]]*|av_[^\]]*)\]/g, '').trim()
  // Collapse triple+ blank lines
  markdown = markdown.replace(/\n{3,}/g, '\n\n')

  // Build frontmatter
  const frontmatter = [
    '---',
    `title: ${JSON.stringify(title)}`,
    `date: "${date}"`,
    `excerpt: ${JSON.stringify(excerpt)}`,
    `featuredImage: "${featuredImage}"`,
    `category: ${JSON.stringify(category)}`,
    'draft: false',
    '---',
    '',
  ].join('\n')

  const mdxContent = frontmatter + markdown + '\n'
  const outputPath = path.join(OUTPUT_DIR, `${slug}.mdx`)
  fs.writeFileSync(outputPath, mdxContent, 'utf-8')
  console.log(`  ✓ Written: content/blog/${slug}.mdx`)
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  console.log('=== FeedbackPro WordPress → MDX Migration ===\n')
  console.log(`Source: ${WP_SITE_URL}`)
  console.log(`Output: content/blog/\n`)

  // Ensure output directories exist
  fs.mkdirSync(OUTPUT_DIR, { recursive: true })
  fs.mkdirSync(IMAGES_DIR, { recursive: true })

  console.log('Fetching posts from WordPress REST API...')
  const posts = await fetchAllPosts()
  console.log(`Found ${posts.length} published posts.\n`)

  if (posts.length === 0) {
    console.log('No posts found. Check that:')
    console.log('  1. WP_SITE_URL is correct in .env.local')
    console.log('  2. The WordPress REST API is publicly accessible')
    console.log(`  3. Try visiting: ${WP_SITE_URL}/wp-json/wp/v2/posts`)
    return
  }

  const td = buildTurndown()

  for (const post of posts) {
    console.log(`Processing: "${post.title.rendered}"`)
    await convertPost(post, td)
  }

  console.log(`\n✓ Migration complete. ${posts.length} posts written to content/blog/`)
  console.log('\nNext steps:')
  console.log('  1. Review the generated MDX files in content/blog/')
  console.log('  2. Run: npm run dev  →  visit /blog to preview')
  console.log('  3. Any posts needing cleanup can be edited directly in content/blog/')
}

// Load .env.local manually (tsx doesn't auto-load it)
const envPath = path.join(process.cwd(), '.env.local')
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf-8')
  for (const line of envContent.split('\n')) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue
    const eqIdx = trimmed.indexOf('=')
    if (eqIdx === -1) continue
    const key = trimmed.slice(0, eqIdx).trim()
    const val = trimmed.slice(eqIdx + 1).trim()
    if (!(key in process.env)) process.env[key] = val
  }
}

main().catch((err) => {
  console.error('\nMigration failed:', err.message)
  process.exit(1)
})
