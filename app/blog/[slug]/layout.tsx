export default function PostLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <article
        className="prose prose-lg max-w-none
          prose-headings:font-extrabold prose-headings:tracking-tight
          prose-h1:text-4xl prose-h2:text-2xl prose-h3:text-xl
          prose-a:text-[var(--color-fp-blue)] prose-a:no-underline hover:prose-a:underline
          prose-img:rounded-xl prose-img:shadow-md
          prose-code:text-[var(--color-fp-blue)] prose-code:bg-[var(--color-fp-blue-light)] prose-code:px-1 prose-code:rounded
          prose-blockquote:border-[var(--color-fp-blue)] prose-blockquote:text-[var(--color-fp-muted)]"
        style={{
          '--tw-prose-headings': 'var(--color-fp-navy)',
          '--tw-prose-body': 'var(--color-fp-muted)',
          '--tw-prose-bold': 'var(--foreground)',
          '--tw-prose-links': 'var(--color-fp-blue)',
          '--tw-prose-hr': 'var(--color-fp-border)',
        } as React.CSSProperties}
      >
        {children}
      </article>
    </div>
  )
}
