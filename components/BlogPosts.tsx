import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Image from 'next/image'
import Link from 'next/link'

interface PostMeta {
  slug: string
  title: string
  date: string
  excerpt: string
  featuredImage: string
  category: string
}

function getLatestPosts(count = 3): PostMeta[] {
  const postsDir = path.join(process.cwd(), 'content', 'blog')
  if (!fs.existsSync(postsDir)) return []

  return fs
    .readdirSync(postsDir)
    .filter((f) => f.endsWith('.mdx'))
    .map((file) => {
      const slug = file.replace('.mdx', '')
      const raw = fs.readFileSync(path.join(postsDir, file), 'utf-8')
      const { data } = matter(raw)
      return {
        slug,
        title: data.title ?? '',
        date: data.date ?? '',
        excerpt: data.excerpt ?? '',
        featuredImage: data.featuredImage ?? '',
        category: data.category ?? '',
        draft: data.draft ?? false,
      }
    })
    .filter((p) => !p.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count)
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

export default function BlogPosts() {
  const posts = getLatestPosts(3)

  if (posts.length === 0) return null

  return (
    <section className="py-24 px-6" style={{ background: 'var(--color-fp-bg)' }}>
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <span
              className="inline-block text-sm font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--color-fp-blue)' }}
            >
              From the Blog
            </span>
            <h2
              className="text-3xl md:text-4xl font-extrabold"
              style={{ fontFamily: 'var(--font-manrope)', color: 'var(--color-fp-navy)' }}
            >
              Latest Insights
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden md:inline-flex items-center gap-1 text-sm font-semibold transition-opacity hover:opacity-70"
            style={{ color: 'var(--color-fp-blue)' }}
          >
            View all posts →
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
              <article
                className="fp-card h-full rounded-2xl overflow-hidden"
                style={{
                  background: 'var(--color-fp-surface)',
                  border: '1px solid var(--color-fp-border)',
                }}
              >
                {/* Featured image */}
                {post.featuredImage && (
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={post.featuredImage}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                )}

                <div className="p-6">
                  {/* Category */}
                  {post.category && (
                    <span
                      className="inline-block text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full mb-3"
                      style={{
                        background: 'var(--color-fp-blue-light)',
                        color: 'var(--color-fp-blue)',
                      }}
                    >
                      {post.category}
                    </span>
                  )}

                  {/* Title */}
                  <h3
                    className="text-base font-bold leading-snug mb-2 group-hover:text-[var(--color-fp-blue)] transition-colors"
                    style={{ fontFamily: 'var(--font-manrope)', color: 'var(--color-fp-navy)' }}
                  >
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p
                    className="text-sm leading-relaxed line-clamp-2 mb-4"
                    style={{ color: 'var(--color-fp-muted)' }}
                  >
                    {post.excerpt}
                  </p>

                  {/* Date + CTA */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs" style={{ color: 'var(--color-fp-muted-2)' }}>
                      {formatDate(post.date)}
                    </span>
                    <span
                      className="text-sm font-semibold"
                      style={{ color: 'var(--color-fp-blue)' }}
                    >
                      Read →
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Mobile "view all" */}
        <div className="mt-10 text-center md:hidden">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm font-semibold"
            style={{ color: 'var(--color-fp-blue)' }}
          >
            View all posts →
          </Link>
        </div>
      </div>
    </section>
  )
}
