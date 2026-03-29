import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const dynamicParams = false

export function generateStaticParams() {
  const postsDir = path.join(process.cwd(), 'content', 'blog')
  if (!fs.existsSync(postsDir)) return []
  return fs
    .readdirSync(postsDir)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => ({ slug: f.replace('.mdx', '') }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const filePath = path.join(process.cwd(), 'content', 'blog', `${slug}.mdx`)
  const { data } = matter(fs.readFileSync(filePath, 'utf-8'))
  return {
    title: `${data.title} | FeedbackPro Blog`,
    description: data.excerpt,
    openGraph: {
      title: data.title,
      description: data.excerpt,
      images: data.featuredImage ? [{ url: data.featuredImage }] : [],
    },
  }
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const filePath = path.join(process.cwd(), 'content', 'blog', `${slug}.mdx`)
  const { data } = matter(fs.readFileSync(filePath, 'utf-8'))
  const { default: Post } = await import(`@/content/blog/${slug}.mdx`)

  return (
    <>
      {/* Back link */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm font-medium mb-10 hover:opacity-70 transition-opacity"
        style={{ color: 'var(--color-fp-blue)' }}
      >
        ← Back to blog
      </Link>

      {/* Post header */}
      <header className="mb-10">
        {data.category && (
          <span
            className="inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4"
            style={{
              background: 'var(--color-fp-blue-light)',
              color: 'var(--color-fp-blue)',
            }}
          >
            {data.category}
          </span>
        )}

        <h1
          className="text-3xl md:text-4xl font-extrabold leading-tight mb-4"
          style={{ fontFamily: 'var(--font-manrope)', color: 'var(--color-fp-navy)' }}
        >
          {data.title}
        </h1>

        <p className="text-sm" style={{ color: 'var(--color-fp-muted-2)' }}>
          {formatDate(data.date)}
        </p>

        {data.featuredImage && (
          <div className="relative mt-8 h-72 md:h-96 rounded-2xl overflow-hidden">
            <Image
              src={data.featuredImage}
              alt={data.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>
        )}
      </header>

      {/* MDX content */}
      <Post />
    </>
  )
}
