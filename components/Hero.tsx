"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-[#F2F6FF]">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#BCC5E3 1px, transparent 1px), linear-gradient(90deg, #BCC5E3 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          opacity: 0.25,
        }}
      />
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
            <div className="inline-flex items-center gap-2 bg-[#eff6ff] border border-[#bfdbfe] text-[#1d4ed8] text-xs font-semibold px-3 py-1.5 rounded-full mb-6 tracking-wide uppercase">
              <span className="w-1.5 h-1.5 bg-[#2563eb] rounded-full animate-pulse" />
              All-In-One Feedback Platform
            </div>

            {/* Headline */}
            <h1
              className="text-5xl md:text-6xl font-bold text-[#00174b] leading-[1.1] tracking-tight mb-6"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Collect feedback{" "}
              <span className="text-[#2563eb]">everywhere.</span>
              <br />
              Act on it anywhere.
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-[#3B4862] leading-relaxed mb-8 max-w-xl">
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
                className="flex-1 px-4 py-3 border border-[#BCC5E3] bg-[#FAFBFF] rounded-lg text-[#0F1523] text-sm placeholder:text-[#697890] focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent"
              />
              <button
                type="submit"
                className="bg-[#00174b] hover:bg-[#003ea8] text-white font-semibold text-sm px-6 py-3 rounded-lg transition-colors whitespace-nowrap"
              >
                Start free trial →
              </button>
            </form>

            {/* Trust signals */}
            <p className="text-xs text-[#697890]">
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
              <p className="text-xs text-[#697890] mt-1">
                Android tablet kiosk app — collect responses offline
              </p>
            </div>

            {/* Stats strip */}
            <div className="mt-12 grid grid-cols-2 gap-6 border-t border-[#BCC5E3] pt-10">
              {[
                { value: "5 min", label: "Average survey setup time" },
                { value: "8+", label: "Question types supported" },
                { value: "99.9%", label: "Uptime guarantee" },
                { value: "4.8/5", label: "Average customer rating" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    className="text-3xl font-bold text-[#00174b] mb-1"
                    style={{ fontFamily: "var(--font-manrope)" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm text-[#3B4862]">{stat.label}</div>
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
