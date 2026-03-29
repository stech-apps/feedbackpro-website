import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Refund Policy | FeedbackPro',
  description: 'FeedbackPro refund terms for annual subscriptions.',
}

export default function RefundPolicy() {
  return (
    <>
      <Nav />
      <main className="min-h-screen pt-28 pb-20 px-6" style={{ background: 'var(--color-fp-bg)' }}>
        <div className="max-w-3xl mx-auto">
          <h1
            className="text-4xl font-extrabold mb-2"
            style={{ fontFamily: 'var(--font-manrope)', color: 'var(--color-fp-navy)' }}
          >
            Refund Policy
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
              Thank you for using FeedbackPro. We strive to provide high-quality services that meet
              your needs. We offer a free trial so you can experience the platform before purchase.
              However, we understand there may be instances where you need to request a refund. This
              policy outlines the terms and conditions for doing so.
            </p>

            <p>
              We offer refunds on unused portions of annual subscriptions only. To initiate the
              process, please contact our support team at{' '}
              <a href="mailto:hello@feedbackpro.io">hello@feedbackpro.io</a>.
            </p>

            <h2>Eligibility for Refund</h2>
            <p>To be eligible for a refund, the following conditions apply:</p>
            <ol>
              <li>
                <strong>Request within 30 days:</strong> Your refund request must be made within 30
                days of your initial subscription purchase.
              </li>
              <li>
                <strong>Non-usage of services:</strong> Refunds will only be issued if you have not
                used the platform or accessed any features during the refund period.
              </li>
              <li>
                <strong>Non-compliance with terms:</strong> Refunds may not be granted if your
                request is in violation of our Terms of Service or if we determine there has been
                misuse or abuse of our platform.
              </li>
            </ol>

            <h2>Refund Process</h2>
            <p>To request a refund, please follow these steps:</p>
            <ol>
              <li>
                <strong>Contact support:</strong> Send an email to{' '}
                <a href="mailto:hello@feedbackpro.io">hello@feedbackpro.io</a> with your refund
                request. Include your order number and the email address associated with your
                subscription.
              </li>
              <li>
                <strong>Review and processing:</strong> Our support team will review your request
                and respond within a reasonable timeframe. We may ask for additional information to
                process your request.
              </li>
              <li>
                <strong>Refund issuance:</strong> If approved, we will initiate the refund to your
                original payment method. Please note that processing times vary by payment provider.
              </li>
            </ol>

            <h2>Contact Us</h2>
            <p>
              If you have questions about our refund policy, please contact our support team at{' '}
              <a href="mailto:hello@feedbackpro.io">hello@feedbackpro.io</a>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
