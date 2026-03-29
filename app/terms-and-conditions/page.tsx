import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions | FeedbackPro',
  description: 'Terms and conditions governing use of the FeedbackPro platform.',
}

export default function TermsAndConditions() {
  return (
    <>
      <Nav />
      <main className="min-h-screen pt-28 pb-20 px-6" style={{ background: 'var(--color-fp-bg)' }}>
        <div className="max-w-3xl mx-auto">
          <h1
            className="text-4xl font-extrabold mb-2"
            style={{ fontFamily: 'var(--font-manrope)', color: 'var(--color-fp-navy)' }}
          >
            Terms &amp; Conditions
          </h1>
          <p className="text-sm mb-10" style={{ color: 'var(--color-fp-muted-2)' }}>
            Last updated: March 2026
          </p>

          <div
            className="prose prose-lg max-w-none
              prose-headings:font-bold prose-headings:tracking-tight
              prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-3
              prose-p:leading-relaxed prose-p:mb-4
              prose-li:leading-relaxed prose-li:mb-1
              prose-a:text-[#2563eb] prose-a:no-underline hover:prose-a:underline
              prose-strong:text-[#0F1523]"
            style={{
              '--tw-prose-headings': '#00174b',
              '--tw-prose-body': '#3B4862',
            } as React.CSSProperties}
          >
            <p>
              Welcome to Feedbackpro.io. By using the website and services, you agree to be bound
              by the following terms and conditions.
            </p>

            <h2>1. Use of Feedbackpro.io</h2>
            <p>
              You may only use the platform for lawful purposes in accordance with these Terms. The
              service cannot be used in any manner that violates federal, state, local, or
              international law or regulation.
            </p>

            <h2>2. Registration and Account Security</h2>
            <p>
              Creating an account requires providing accurate and complete information. You bear
              sole responsibility for maintaining account confidentiality and for all activity
              occurring under your account.
            </p>

            <h2>3. User Content</h2>
            <p>
              Feedbackpro.io allows you to create and share survey content. You are solely
              responsible for your content and warrant that it does not violate third-party rights,
              including intellectual property and privacy rights.
            </p>

            <h2>4. Intellectual Property</h2>
            <p>
              The content and materials available on Feedbackpro.io, including text, graphics,
              logos, images, and software, are owned by or licensed to Feedbackpro.io and are
              protected by intellectual property laws. You may not reproduce, distribute, modify, or
              create derivative works without prior written consent.
            </p>

            <h2>5. Limitation of Liability</h2>
            <p>
              In no event shall Feedbackpro.io, its affiliates, or their respective officers,
              directors, employees, or agents be liable for any direct, indirect, incidental,
              special, consequential, or punitive damages arising from platform use.
            </p>

            <h2>6. Indemnification</h2>
            <p>
              You agree to indemnify and hold Feedbackpro.io harmless from claims, liabilities,
              damages, or expenses arising from your use of the platform or violation of these
              Terms.
            </p>

            <h2>7. Modifications</h2>
            <p>
              Feedbackpro.io reserves the right to modify or discontinue the service or any
              features without notice. Continued use following changes constitutes acceptance of the
              updated Terms.
            </p>

            <h2>8. Governing Law and Jurisdiction</h2>
            <p>
              These Terms are governed by Pakistani law. Legal proceedings must be brought
              exclusively in Pakistani courts.
            </p>

            <h2>9. Termination</h2>
            <p>
              Feedbackpro.io may terminate or suspend your account and access at any time, with or
              without cause or notice.
            </p>

            <h2>10. Entire Agreement</h2>
            <p>
              These Terms constitute the entire agreement between you and Feedbackpro.io and
              supersede all prior agreements between the parties.
            </p>

            <h2>Contact Us</h2>
            <p>
              For any questions regarding these Terms, please contact us at{' '}
              <a href="mailto:hello@feedbackpro.io">hello@feedbackpro.io</a>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
