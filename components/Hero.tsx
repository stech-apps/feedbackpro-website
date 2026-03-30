"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-[#F2F6FF] dark:bg-[#0f1523]">
      {/* Subtle grid background */}
      <div className="hero-grid absolute inset-0 pointer-events-none" />
      {/* Soft blue glow top right */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 70% 0%, rgba(37,99,235,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#e0f5fb] dark:bg-[#1093bb]/20 border border-[#a5e0f0] dark:border-[#1093bb]/40 text-[#1093bb] dark:text-[#38bdf8] text-xs font-semibold px-3 py-1.5 rounded-full mb-6 tracking-wide uppercase">
              <span className="w-1.5 h-1.5 bg-[#1093bb] dark:bg-[#38bdf8] rounded-full animate-pulse" />
              All-In-One Feedback Platform
            </div>

            {/* Headline */}
            <h1
              className="text-5xl md:text-6xl font-bold text-[#00174b] dark:text-white leading-[1.1] tracking-tight mb-6"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Collect feedback{" "}
              <span className="text-[#2563eb]">everywhere.</span>
              <br />
              Act on it anywhere.
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-[#3B4862] dark:text-[#8fa3c8] leading-relaxed mb-8 max-w-xl">
              Design beautiful surveys in minutes. Collect responses on web, mobile phones, and Android
              tablets — even offline. Get actionable insights that help your business grow.
            </p>

            {/* Hero image — mobile only */}
            <div className="lg:hidden mb-8 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/hero-tablet.png"
                alt="FeedbackPro tablet survey app"
                width={600}
                height={450}
                className="w-full h-auto"
                priority
              />
            </div>

            {/* CTA form */}
            <form
              className="flex flex-col sm:flex-row gap-3 max-w-lg mb-6"
              onSubmit={(e) => { e.preventDefault(); window.location.href = 'https://cloud.feedbackpro.io/account/register'; }}
            >
              <input
                type="email"
                placeholder="Enter your work email"
                className="flex-1 px-4 py-3 border border-[#BCC5E3] dark:border-[#2d3a55] bg-[#FAFBFF] dark:bg-[#1a2235] rounded-lg text-[#0F1523] dark:text-[#f0f4ff] text-sm placeholder:text-[#697890] dark:placeholder:text-[#4d6080] focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent"
              />
              <button
                type="submit"
                className="bg-[#00174b] hover:bg-[#003ea8] text-white font-semibold text-sm px-6 py-3 rounded-lg transition-colors whitespace-nowrap"
              >
                Start free trial →
              </button>
            </form>

            {/* Trust signals */}
            <p className="text-xs text-[#697890] dark:text-[#4d6080]">
              Free for 1 month · No credit card required · 100 responses included
            </p>

            {/* Google Play badge */}
            <div className="mt-5">
              <a href="https://play.google.com/store/apps/details?id=com.stech.feedbackpro" target="_blank" rel="noopener noreferrer" aria-label="Get FeedbackPro on Google Play">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  alt="Get it on Google Play"
                  style={{ height: "56px", width: "auto" }}
                />
              </a>
              <p className="text-xs text-[#697890] dark:text-[#4d6080] mt-1">
                Android tablet kiosk app — collect responses offline
              </p>
            </div>

            {/* Stats strip */}
            <div className="mt-12 grid grid-cols-2 gap-6 border-t border-[#BCC5E3] dark:border-[#2d3a55] pt-10">
              {[
                { value: "5 min", label: "Average survey setup time" },
                { value: "8+", label: "Question types supported" },
                { value: "99.9%", label: "Uptime guarantee" },
                { value: "4.8/5", label: "Average customer rating" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    className="text-3xl font-bold text-[#00174b] dark:text-white mb-1"
                    style={{ fontFamily: "var(--font-manrope)" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm text-[#3B4862] dark:text-[#8fa3c8]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: hero image */}
          <div className="hidden lg:block relative">
            <Image
              src="/images/hero-tablet.png"
              alt="FeedbackPro tablet survey app"
              width={600}
              height={450}
              className="w-full h-auto rounded-2xl shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
