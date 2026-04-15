"use client"

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";

function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const emailRef = useRef<HTMLInputElement>(null)
  const messageRef = useRef<HTMLTextAreaElement>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')

    const email = emailRef.current?.value ?? ''
    const message = messageRef.current?.value ?? ''

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, message }),
      })

      if (!res.ok) throw new Error('Request failed')

      setStatus('sent')
      if (emailRef.current) emailRef.current.value = ''
      if (messageRef.current) messageRef.current.value = ''
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        ref={emailRef}
        type="email"
        required
        placeholder="Your email address"
        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white/50 transition-colors"
      />
      <textarea
        ref={messageRef}
        required
        rows={4}
        placeholder="Your message"
        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white/50 transition-colors resize-none"
      />
      <button
        type="submit"
        disabled={status === 'sending' || status === 'sent'}
        className="w-full bg-[#2563eb] hover:bg-[#1d4ed8] disabled:opacity-60 text-white text-sm font-semibold py-2.5 rounded-lg transition-colors"
      >
        {status === 'sending' ? 'Sending…' : status === 'sent' ? 'Check your email ✓' : 'Send message'}
      </button>
      {status === 'error' && (
        <p className="text-red-400 text-xs">Something went wrong — please try again or email us directly.</p>
      )}
    </form>
  )
}

export default function Footer() {
  return (
    <footer className="bg-[#00174b] text-white pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <Image
                src="/logo-fbp.svg"
                alt="FeedbackPro"
                width={216}
                height={72}
                className="h-11 w-auto"
              />
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs mb-4">
              The all-in-one feedback platform for businesses of all sizes. Collect,
              analyze, and act on customer and employee feedback — anywhere.
            </p>
            <p className="text-white/40 text-xs mb-4">A product of <a href="https://www.stech.com.pk" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors">S-Tech</a></p>
            <a
              href="https://play.google.com/store/apps/details?id=com.stech.feedbackpro"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get FeedbackPro on Google Play"
              className="inline-block mb-8"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                alt="Get it on Google Play"
                style={{ height: "44px", width: "auto" }}
                className="opacity-90 hover:opacity-100 transition-opacity"
              />
            </a>

            {/* Links row under brand */}
            <div className="flex gap-10">
              <div>
                <p className="text-white/50 text-xs uppercase tracking-widest font-semibold mb-4">
                  Product
                </p>
                <ul className="flex flex-col gap-3">
                  {["Features", "Pricing", "How It Works"].map((link) => (
                    <li key={link}>
                      <a
                        href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                        className="text-white/70 hover:text-white text-sm transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                  <li>
                    <Link href="/blog" className="text-white/70 hover:text-white text-sm transition-colors">
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-white/50 text-xs uppercase tracking-widest font-semibold mb-4">
                  Legal
                </p>
                <ul className="flex flex-col gap-3">
                  <li>
                    <Link href="/privacy-policy" className="text-white/70 hover:text-white text-sm transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms-and-conditions" className="text-white/70 hover:text-white text-sm transition-colors">
                      Terms &amp; Conditions
                    </Link>
                  </li>
                  <li>
                    <Link href="/refund-policy" className="text-white/70 hover:text-white text-sm transition-colors">
                      Refund Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div id="contact" className="lg:col-span-3">
            <p className="text-white/50 text-xs uppercase tracking-widest font-semibold mb-4">
              Get in Touch
            </p>
            <ContactForm />
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} FeedbackPro by S-Tech. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="tel:+923111178324" className="text-white/50 hover:text-white text-xs transition-colors">
              (+92) 311 11 78324
            </a>
            <a href="mailto:hello@feedbackpro.io" className="text-white/50 hover:text-white text-xs transition-colors">
              hello@feedbackpro.io
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
