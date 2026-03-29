import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | FeedbackPro',
  description: 'Insights on customer feedback, surveys, and business growth from the FeedbackPro team.',
}

interface PostMeta {
  slug: string
  title: string
  date: string
  excerpt: string
  featuredImage: string
  category: string
}

function getAllPosts(): PostMeta[] {
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
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="mb-14">
        <span
          className="inline-block text-sm font-semibold uppercase tracking-widest mb-4"
          style={{ color: 'var(--color-fp-blue)' }}
        >
          Blog
        </span>
        <h1
          className="text-4xl md:text-5xl font-extrabold leading-tight"
          style={{ fontFamily: 'var(--font-manrope)', color: 'var(--color-fp-navy)' }}
        >
          Insights &amp; Resources
        </h1>
        <p className="mt-4 text-lg max-w-2xl" style={{ color: 'var(--color-fp-muted)' }}>
          Tips, strategies, and product updates to help you collect better feedback and grow your business.
        </p>
      </div>

      {/* Post grid */}
      {posts.length === 0 ? (
        <p style={{ color: 'var(--color-fp-muted)' }}>No posts yet — check back soon.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
              <article
                className="fp-card h-full rounded-2xl overflow-hidden"
                style={{ background: 'var(--color-fp-surface)', border: '1px solid var(--color-fp-border)' }}
              >
                {/* Featured image */}
                {post.featuredImage && (
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.featuredImage}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                )}

                <div className="p-6">
                  {/* Category */}
                  {post.category && (
                    <span
                      className="inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-3"
                      style={{
                        background: 'var(--color-fp-blue-light)',
                        color: 'var(--color-fp-blue)',
                      }}
                    >
                      {post.category}
                    </span>
                  )}

                  {/* Title */}
                  <h2
                    className="text-lg font-bold leading-snug mb-2 group-hover:text-[var(--color-fp-blue)] transition-colors"
                    style={{ fontFamily: 'var(--font-manrope)', color: 'var(--color-fp-navy)' }}
                  >
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p
                    className="text-sm leading-relaxed line-clamp-3 mb-4"
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
                      Read article →
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
