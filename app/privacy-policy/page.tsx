import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | FeedbackPro',
  description: 'How FeedbackPro collects, uses, and protects your personal information.',
}

export default function PrivacyPolicy() {
  return (
    <>
      <Nav />
      <main className="min-h-screen pt-28 pb-20 px-6" style={{ background: 'var(--color-fp-bg)' }}>
        <div className="max-w-3xl mx-auto">
          <h1
            className="text-4xl font-extrabold mb-2"
            style={{ fontFamily: 'var(--font-manrope)', color: 'var(--color-fp-navy)' }}
          >
            Privacy Policy
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
              At Feedbackpro, we take your privacy seriously. This Privacy Policy outlines the types
              of information we collect, how we use that information, and the measures we take to
              protect your personal information. By using Feedbackpro, you agree to the terms of
              this Privacy Policy.
            </p>

            <h2>Information We Collect</h2>
            <p>When you use Feedbackpro, we may collect the following information:</p>
            <ul>
              <li>
                <strong>Personal Information (PII):</strong> When you use Feedbackpro, we may
                collect personal information such as your name, email address, and phone number. We
                only collect PII that you provide voluntarily when you sign up for an account,
                contact us for support, or create surveys using our platform.
              </li>
              <li>
                <strong>Survey data:</strong> Data is collected from the surveys you create as a
                user. This may include responses from survey participants as well as any other data
                you choose to include. The responsibility for this data lies with the user.
              </li>
              <li>
                <strong>Device information:</strong> We may collect information about the devices
                you use to access Feedbackpro, including device type, operating system, and browser
                type.
              </li>
              <li>
                <strong>Log data:</strong> We may collect log data including the date and time of
                access, pages viewed, and actions taken on the site.
              </li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We may use the information we collect for the following purposes:</p>
            <ul>
              <li>To provide and improve our services.</li>
              <li>
                To communicate with you about your account or send marketing communications you may
                find of interest.
              </li>
              <li>To analyze usage patterns and improve our services.</li>
              <li>
                To comply with legal requirements or respond to court orders and legal requests.
              </li>
            </ul>

            <h2>COPPA (Children Online Privacy Protection Act)</h2>
            <p>
              Feedbackpro is designed for use by individuals who are 13 years of age or older. We
              do not knowingly collect personal information from children under the age of 13. If we
              learn that we have collected such information, we will promptly delete it.
            </p>

            <h2>CAN SPAM Act</h2>
            <p>
              We comply with the CAN-SPAM Act. We only send marketing communications to individuals
              who have opted in to receive them, and we include an opt-out mechanism in all
              marketing communications.
            </p>

            <h2>Data Security</h2>
            <p>
              We have implemented reasonable measures to protect your personal information,
              including SSL encryption. However, no security measures are 100% effective and we
              cannot guarantee the security of your data.
            </p>

            <h2>Data Retention</h2>
            <p>
              We will retain your personal information for as long as necessary to provide our
              services or as required by law. Once you delete your account, all surveys and
              collected data will be deleted. To have your data removed, please contact us at{' '}
              <a href="mailto:hello@feedbackpro.io">hello@feedbackpro.io</a>.
            </p>

            <h2>Changes to this Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. If we make material changes, we
              will notify you by email or by posting a notice on our website prior to the change
              becoming effective.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy, please contact us at{' '}
              <a href="mailto:hello@feedbackpro.io">hello@feedbackpro.io</a>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
