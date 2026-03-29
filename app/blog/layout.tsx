import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <main className="min-h-screen" style={{ background: 'var(--color-fp-bg)' }}>
        {children}
      </main>
      <Footer />
    </>
  )
}
