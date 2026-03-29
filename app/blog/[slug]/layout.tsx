export default function PostLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <article
        className="prose prose-lg max-w-none
          prose-headings:font-extrabold prose-headings:tracking-tight
          prose-h1:text-4xl prose-h2:text-2xl prose-h3:text-xl
          prose-a:text-[#2563eb] prose-a:no-underline hover:prose-a:underline
          prose-img:rounded-xl prose-img:shadow-md
          prose-code:text-[#2563eb] prose-code:bg-[#eff6ff] prose-code:px-1 prose-code:rounded
          prose-blockquote:border-[#2563eb] prose-blockquote:text-[#3B4862]"
        style={{
          '--tw-prose-headings': '#00174b',
          '--tw-prose-body': '#3B4862',
          '--tw-prose-bold': '#0F1523',
          '--tw-prose-links': '#2563eb',
          '--tw-prose-hr': '#BCC5E3',
        } as React.CSSProperties}
      >
        {children}
      </article>
    </div>
  )
}
