/**
 * AI Blog Post Generator — FeedbackPro
 *
 * Uses the Claude API to draft a full MDX blog post from a topic or brief.
 * The post is saved with `draft: true` so it won't appear publicly until approved.
 *
 * Usage:
 *   npx tsx scripts/generate-post.ts "Your topic or brief here"
 *
 * Workflow:
 *   1. Run the script with a topic
 *   2. Review the generated file in content/blog/
 *   3. Edit if needed
 *   4. Change `draft: true` → `draft: false`
 *   5. Commit and deploy — post goes live
 *
 * Requires ANTHROPIC_API_KEY in .env.local
 *
 * TODO: Full implementation — infrastructure is in place.
 *       The @anthropic-ai/sdk package is installed and ready.
 *       To implement, uncomment the code below and fill in the prompt.
 */

// import Anthropic from '@anthropic-ai/sdk'
// import fs from 'fs'
// import path from 'path'

// async function main() {
//   const topic = process.argv[2]
//   if (!topic) {
//     console.error('Usage: npx tsx scripts/generate-post.ts "Your topic here"')
//     process.exit(1)
//   }

//   const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

//   const response = await client.messages.create({
//     model: 'claude-sonnet-4-6',
//     max_tokens: 4096,
//     messages: [
//       {
//         role: 'user',
//         content: `Write a full MDX blog post for FeedbackPro (a customer feedback platform for businesses).
//
//         Topic: ${topic}
//
//         Format the post with YAML frontmatter followed by Markdown content:
//         ---
//         title: "..."
//         date: "${new Date().toISOString().split('T')[0]}"
//         excerpt: "One sentence summary"
//         featuredImage: ""
//         category: "..."
//         draft: true
//         ---
//
//         # Title
//
//         Content here...
//
//         Guidelines:
//         - 600-900 words
//         - Practical, actionable advice
//         - Audience: business owners, managers, customer success teams
//         - Tone: professional but approachable
//         - Include 2-3 subheadings (##)
//         - End with a clear takeaway or call to action
//         - Do not include JSX or React components — plain Markdown only`,
//       },
//     ],
//   })

//   const content = response.content[0].type === 'text' ? response.content[0].text : ''

//   // Derive slug from title in frontmatter
//   const titleMatch = content.match(/title:\s*"([^"]+)"/)
//   const title = titleMatch?.[1] ?? topic
//   const slug = title
//     .toLowerCase()
//     .replace(/[^a-z0-9\s-]/g, '')
//     .replace(/\s+/g, '-')
//     .slice(0, 60)

//   const outputPath = path.join(process.cwd(), 'content', 'blog', `${slug}.mdx`)
//   fs.writeFileSync(outputPath, content, 'utf-8')

//   console.log(`\n✓ Draft saved: content/blog/${slug}.mdx`)
//   console.log('\nNext: review the file, set draft: false when ready, then deploy.')
// }

// main().catch(console.error)

console.log('generate-post.ts: implementation deferred — see comments in this file.')
console.log('The @anthropic-ai/sdk is installed and ready. Uncomment the code to activate.')
