import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ClientLogos from "@/components/ClientLogos";
import FAQ, { DEFAULT_FAQ } from "@/components/FAQ";
import SetupHelpForm from "@/components/SetupHelpForm";
import { whatsappHref } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Free Trial With Setup Help | FeedbackPro",
  description:
    "Try FeedbackPro free for 30 days and our team will set it up with you: QR codes at your counters and tables, or a tablet kiosk. For multi-branch businesses in Pakistan.",
};

const REGISTER = "https://cloud.feedbackpro.io/account/register";

const steps = [
  {
    title: "Day 1: we set it up with you",
    text: "We create your account together, build your survey in English and Urdu, print your QR codes and, if you like, install FeedbackPro on an Android tablet.",
  },
  {
    title: "Days 1–30: customers rate their visit",
    text: "Customers scan the QR code or tap the tablet and rate their visit in under 10 seconds. You see results live and get an email the moment someone is unhappy.",
  },
  {
    title: "Before the trial ends: we review results with you",
    text: "A 30-minute walkthrough of your dashboard: score by counter, staff member and shift, and the top reasons customers are unhappy.",
  },
];

const learn = [
  "Satisfaction score by counter, staff member and shift",
  "The top 3 reasons customers are unhappy, in their own words",
  "Every below-average rating emailed to you instantly",
];

const faq = [
  {
    q: "Is this different from the free trial?",
    a: "No. It's the same free trial as on our pricing page (1 device, 2 surveys, 100 responses, 1 month). Our team simply helps you set it up and read the results.",
  },
  ...DEFAULT_FAQ.filter((f) => !f.q.startsWith("How do we pay")),
  {
    q: "What happens after 30 days?",
    a: "You decide. Roll out to more branches on Standard or the annual Popular plan, or stop. There's no contract.",
  },
  {
    q: "Who supports us?",
    a: "S-Tech's own team in Lahore, Karachi and Islamabad, with 25 years of supporting banks, hospitals and government offices.",
  },
];

export default function SetupHelpPage() {
  const wa = whatsappHref();
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-[#F2F6FF] dark:bg-[#0f1523]">
          <div className="hero-grid absolute inset-0 pointer-events-none" />
          <div className="relative max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div data-track-location="setup_help_hero">
              <p className="text-[#2563eb] dark:text-[#60a5fa] text-sm font-semibold uppercase tracking-widest mb-4">
                For multi-branch businesses
              </p>
              <h1
                className="text-4xl md:text-5xl font-bold text-[#00174b] dark:text-white leading-[1.1] tracking-tight mb-6"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                Try FeedbackPro free for 30 days, <span className="text-[#2563eb]">and we&apos;ll set it up with you.</span>
              </h1>
              <p className="text-lg text-[#3B4862] dark:text-[#8fa3c8] leading-relaxed mb-6 max-w-xl">
                Running more than one branch? Our team helps you go live the same day with QR codes at your counters
                and tables, or a tablet at your busiest counter. Before the trial ends, we walk you through what your
                customers said.
              </p>
              <p className="text-sm text-[#697890] mb-6">
                The same free trial as on our pricing page · No card needed
              </p>
              <div className="flex flex-wrap gap-3">
                {wa && (
                  <a href={wa} target="_blank" rel="noopener noreferrer" className="bg-[#22c55e] hover:bg-[#16a34a] text-white font-semibold text-sm px-6 py-3 rounded-lg transition-colors">
                    Chat on WhatsApp
                  </a>
                )}
                <a href={REGISTER} className="border border-[#BCC5E3] dark:border-[#2d3a55] hover:border-[#00174b] text-[#00174b] dark:text-[#c5d4ee] bg-[#FAFBFF] dark:bg-transparent font-semibold text-sm px-6 py-3 rounded-lg transition-colors">
                  Start the free trial myself
                </a>
              </div>
            </div>

            <div id="setup-form" className="rounded-xl border border-[#BCC5E3] dark:border-[#2d3a55] bg-[#FAFBFF] dark:bg-[#141d2e] p-6 md:p-8 shadow-[0_4px_20px_rgba(37,99,235,0.08)]">
              <h2 className="text-2xl font-bold text-[#00174b] dark:text-white mb-1" style={{ fontFamily: "var(--font-manrope)" }}>
                Get setup help
              </h2>
              <p className="text-sm text-[#3B4862] dark:text-[#8fa3c8] mb-6">We&apos;ll contact you on WhatsApp within one working hour.</p>
              <SetupHelpForm />
            </div>
          </div>
        </section>

        <ClientLogos />

        {/* Problem + how it works */}
        <section className="py-20 px-6 bg-[#FAFBFF] dark:bg-[#141d2e]">
          <div className="max-w-6xl mx-auto">
            <p className="max-w-2xl text-xl text-[#3B4862] dark:text-[#8fa3c8] leading-relaxed mb-14">
              Most unhappy customers never complain. They leave, and they tell others. By the time a complaint reaches
              head office or Facebook, the branch has been losing customers for weeks.
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#00174b] dark:text-white mb-10" style={{ fontFamily: "var(--font-manrope)" }}>
              How it works
            </h2>
            <ol className="grid md:grid-cols-3 gap-6">
              {steps.map((s, i) => (
                <li key={s.title} className="fp-card rounded-lg border border-[#BCC5E3] dark:border-[#2d3a55] bg-white dark:bg-[#1a2235] p-7">
                  <div className="w-10 h-10 rounded-full border-2 border-[#2563eb] text-[#2563eb] font-bold flex items-center justify-center mb-4">{i + 1}</div>
                  <h3 className="font-bold text-lg text-[#00174b] dark:text-white mb-2" style={{ fontFamily: "var(--font-manrope)" }}>{s.title}</h3>
                  <p className="text-[#3B4862] dark:text-[#8fa3c8] leading-relaxed">{s.text}</p>
                </li>
              ))}
            </ol>

            <div className="mt-16 rounded-xl bg-[#00174b] text-white p-8 md:p-10 grid md:grid-cols-2 gap-8 items-center">
              <h2 className="text-3xl font-bold" style={{ fontFamily: "var(--font-manrope)" }}>What you&apos;ll learn in 30 days</h2>
              <ul className="flex flex-col gap-3">
                {learn.map((l) => (
                  <li key={l} className="flex gap-3 text-white/85">
                    <span className="text-[#22c55e] font-bold">✓</span>
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <FAQ items={faq} />

        <section className="py-16 px-6 bg-[#F2F6FF] dark:bg-[#0f1523] text-center">
          <a href="#setup-form" className="inline-block bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold px-8 py-4 rounded-lg transition-colors">
            Get setup help
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
