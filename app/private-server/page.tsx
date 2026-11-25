import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "FeedbackPro Private Server | On-Premise, Air-Gapped Feedback System",
  description:
    "Run FeedbackPro entirely inside your own network. An on-premise, air-gapped feedback system for government, defense and high-security teams. No internet required.",
};

const BLOG_POST = "/blog/introducing-feedbackpro-private-server-secure-air-gapped-feedback-system";

const reasons = [
  {
    title: "Built for restricted networks",
    text: "Government departments, defense agencies and critical infrastructure often run fully isolated systems. Private Server lets feedback collection happen without breaking your network isolation policies.",
  },
  {
    title: "Your data stays with you",
    text: "All feedback data is stored on-premise, so you keep full control of sensitive information and can meet strict regulatory and security requirements.",
  },
  {
    title: "Works with no internet connection",
    text: "Remote sites, field operations and secure facilities often have no stable connection to the outside world. Your feedback workflows keep running regardless.",
  },
  {
    title: "Structured feedback, even when isolated",
    text: "Run structured surveys and gather insights from employees or stakeholders inside your secure network, with centralized reporting.",
  },
];

const audiences = [
  {
    title: "Government organizations",
    text: "Gather employee feedback, policy input or operational reports without exposing data to external networks.",
  },
  {
    title: "Defense and security authorities",
    text: "Collect sensitive operational feedback within fully air-gapped systems.",
  },
  {
    title: "Remote and isolated industrial sites",
    text: "Enable workforce feedback in mining, energy or field operations where internet access is unavailable or restricted.",
  },
  {
    title: "Enterprise security teams",
    text: "Run an internal feedback system where compliance rules do not permit external SaaS tools.",
  },
];

const comparison: { label: string; cloud: string; priv: string; privAvailable: boolean }[] = [
  { label: "Where it runs", cloud: "FeedbackPro cloud", priv: "Your own network, on-premise", privAvailable: true },
  { label: "Internet connection", cloud: "Required", priv: "Not required (air-gapped)", privAvailable: true },
  { label: "Where feedback data is stored", cloud: "FeedbackPro cloud", priv: "On your premises, under your control", privAvailable: true },
  { label: "Survey creation and distribution", cloud: "Yes", priv: "Yes, within your private network", privAvailable: true },
  { label: "Feedback collection and reporting", cloud: "Yes", priv: "Yes, core tools", privAvailable: true },
  { label: "Staff module", cloud: "Yes", priv: "Not available (needs internet)", privAvailable: false },
  { label: "Email alerts", cloud: "Yes", priv: "Not available (needs internet)", privAvailable: false },
  { label: "Licensing", cloud: "Monthly or annual plans", priv: "Separate license", privAvailable: true },
  { label: "Installation and support", cloud: "Sign up online", priv: "Handled by our team", privAvailable: true },
];

const tips = [
  {
    title: "Set access roles first",
    text: "Define internal access roles before you deploy, not after, so governance is clear from day one.",
  },
  {
    title: "Prefer structured surveys",
    text: "Structured surveys give cleaner, more consistent data than ad-hoc feedback.",
  },
  {
    title: "Plan a reporting rhythm",
    text: "Email alerts are not available, so agree an internal reporting cycle that keeps the right people informed.",
  },
];

const faq = [
  {
    q: "Does Private Server need an internet connection?",
    a: "No. It runs entirely inside your own network. That is what makes it suitable for air-gapped and restricted environments.",
  },
  {
    q: "What is not included?",
    a: "The staff module and email alerts. Both need an internet connection, so they are not available on Private Server. Survey distribution within your network, response collection and centralized reporting are included.",
  },
  {
    q: "Is it part of the Enterprise plan?",
    a: "No. Private Server is a separate license. Contact us and we will walk you through licensing.",
  },
  {
    q: "Who installs and supports it?",
    a: "Our team. We handle installation and support, so your IT team does not have to figure it out alone.",
  },
  {
    q: "How is this different from the tablet app's offline mode?",
    a: "Offline mode stores responses on the tablet and syncs them to the FeedbackPro cloud when the connection returns. Private Server has no cloud at all. The whole platform runs inside your own network.",
  },
];

function NetworkDiagram() {
  return (
    <svg
      viewBox="0 0 520 360"
      role="img"
      aria-label="Diagram: tablets and a dashboard connected to a server inside a secure network, with the internet crossed out"
      className="w-full h-auto text-[#00174b] dark:text-white"
    >
      {/* Internet, crossed out */}
      <g transform="translate(436 6) scale(2.2)" fill="none" stroke="#94a3b8" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 18a4.5 4.5 0 0 1-.4-9 6 6 0 0 1 11.6-1.3A4.7 4.7 0 0 1 17.5 18H7z" />
      </g>
      <line x1="432" y1="44" x2="484" y2="10" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" />
      <text x="420" y="34" textAnchor="end" fontSize="13" fontWeight="600" fill="currentColor" opacity="0.7">
        No internet needed
      </text>

      {/* Secure network boundary */}
      <rect x="10" y="62" width="500" height="288" rx="18" fill="#2563eb" fillOpacity="0.05" stroke="#2563eb" strokeWidth="2" strokeDasharray="8 6" />
      <text x="30" y="92" fontSize="14" fontWeight="700" fill="currentColor">
        Your secure network
      </text>

      {/* Tablet */}
      <rect x="40" y="170" width="72" height="104" rx="10" fill="none" stroke="#2563eb" strokeWidth="2.5" />
      <rect x="50" y="182" width="52" height="64" rx="3" fill="#2563eb" fillOpacity="0.15" />
      <circle cx="76" cy="260" r="4" fill="#2563eb" />
      <text x="76" y="296" textAnchor="middle" fontSize="12" fill="currentColor" opacity="0.8">Survey tablets</text>

      {/* Server stack */}
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x="210" y={140 + i * 44} width="100" height="34" rx="6" fill="none" stroke="#2563eb" strokeWidth="2.5" />
          <circle cx="226" cy={157 + i * 44} r="3.5" fill="#22c55e" />
          <line x1="244" y1={157 + i * 44} x2="296" y2={157 + i * 44} stroke="#2563eb" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        </g>
      ))}
      <text x="260" y="296" textAnchor="middle" fontSize="12" fill="currentColor" opacity="0.8">Private Server</text>

      {/* Dashboard */}
      <rect x="400" y="160" width="96" height="66" rx="6" fill="none" stroke="#2563eb" strokeWidth="2.5" />
      <rect x="412" y="196" width="10" height="20" fill="#2563eb" fillOpacity="0.45" />
      <rect x="430" y="184" width="10" height="32" fill="#2563eb" fillOpacity="0.7" />
      <rect x="448" y="174" width="10" height="42" fill="#2563eb" />
      <rect x="466" y="190" width="10" height="26" fill="#2563eb" fillOpacity="0.6" />
      <line x1="448" y1="226" x2="448" y2="244" stroke="#2563eb" strokeWidth="2.5" />
      <line x1="428" y1="244" x2="468" y2="244" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" />
      <text x="448" y="296" textAnchor="middle" fontSize="12" fill="currentColor" opacity="0.8">Reports</text>

      {/* Connections */}
      <path d="M112 222 H210" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M310 192 H400" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export default function PrivateServerPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-[#F2F6FF] dark:bg-[#0f1523]">
          <div className="hero-grid absolute inset-0 pointer-events-none" />
          <div className="relative max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#e0f5fb] dark:bg-[#1093bb]/20 border border-[#a5e0f0] dark:border-[#1093bb]/40 text-[#1093bb] dark:text-[#38bdf8] text-xs font-semibold px-3 py-1.5 rounded-full mb-6 tracking-wide uppercase">
                Private Server · On-premise
              </div>
              <h1
                className="text-4xl md:text-5xl font-bold text-[#00174b] dark:text-white leading-[1.1] tracking-tight mb-6"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                Feedback that <span className="text-[#2563eb]">never leaves your network.</span>
              </h1>
              <p className="text-lg md:text-xl text-[#3B4862] dark:text-[#8fa3c8] leading-relaxed mb-8 max-w-xl">
                FeedbackPro Private Server is a fully on-premise, air-gapped deployment. Create surveys, collect
                responses and run reports entirely inside your own secure network, with no internet connection
                required.
              </p>
              <div className="flex flex-wrap gap-3 mb-5">
                <a
                  href="#contact"
                  className="bg-[#00174b] hover:bg-[#003ea8] text-white font-semibold text-sm px-6 py-3 rounded-lg transition-colors"
                >
                  Talk to our team
                </a>
                <Link
                  href={BLOG_POST}
                  className="border border-[#BCC5E3] dark:border-[#2d3a55] hover:border-[#00174b] dark:hover:border-[#2563eb] text-[#00174b] dark:text-[#c5d4ee] bg-[#FAFBFF] dark:bg-transparent font-semibold text-sm px-6 py-3 rounded-lg transition-colors"
                >
                  Read the announcement →
                </Link>
              </div>
              <p className="text-xs text-[#697890] dark:text-[#4d6080]">
                Licensed separately · Installed and supported by our team
              </p>
            </div>
            <div className="rounded-2xl border border-[#BCC5E3] dark:border-[#2d3a55] bg-[#FAFBFF] dark:bg-[#141d2e] p-6 shadow-[0_4px_20px_rgba(37,99,235,0.08)]">
              <NetworkDiagram />
            </div>
          </div>
        </section>

        {/* Why */}
        <section className="py-20 px-6 bg-[#F2F6FF] dark:bg-[#0f1523]">
          <div className="max-w-6xl mx-auto">
            <p className="text-[#2563eb] dark:text-[#60a5fa] text-sm font-semibold uppercase tracking-widest mb-3">
              Why Private Server
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#00174b] dark:text-white leading-tight max-w-2xl mb-12"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              When the cloud is not an option, feedback should not be either.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reasons.map((r) => (
                <div
                  key={r.title}
                  className="fp-card bg-[#FAFBFF] dark:bg-[#141d2e] border border-[#BCC5E3] dark:border-[#2d3a55] rounded-lg p-7"
                >
                  <h3
                    className="text-lg font-bold text-[#00174b] dark:text-white mb-2"
                    style={{ fontFamily: "var(--font-manrope)" }}
                  >
                    {r.title}
                  </h3>
                  <p className="text-[#3B4862] dark:text-[#8fa3c8] text-sm leading-relaxed">{r.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who it's for */}
        <section className="py-20 px-6 bg-[#FAFBFF] dark:bg-[#141d2e]">
          <div className="max-w-6xl mx-auto">
            <p className="text-[#2563eb] dark:text-[#60a5fa] text-sm font-semibold uppercase tracking-widest mb-3">
              Who it is for
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#00174b] dark:text-white leading-tight max-w-2xl mb-12"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Teams that cannot send data outside the building
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {audiences.map((a) => (
                <div
                  key={a.title}
                  className="rounded-lg border border-[#BCC5E3] dark:border-[#2d3a55] bg-white dark:bg-[#1a2235] p-6"
                >
                  <h3
                    className="font-bold text-[#00174b] dark:text-white mb-2"
                    style={{ fontFamily: "var(--font-manrope)" }}
                  >
                    {a.title}
                  </h3>
                  <p className="text-sm text-[#3B4862] dark:text-[#8fa3c8] leading-relaxed">{a.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="py-20 px-6 bg-[#F2F6FF] dark:bg-[#0f1523]">
          <div className="max-w-4xl mx-auto">
            <p className="text-[#2563eb] dark:text-[#60a5fa] text-sm font-semibold uppercase tracking-widest mb-3">
              Cloud vs Private Server
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#00174b] dark:text-white leading-tight mb-8"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              What you get, and what you do not
            </h2>
            <div className="overflow-x-auto rounded-lg border border-[#BCC5E3] dark:border-[#2d3a55] bg-white dark:bg-[#1a2235]">
              <table className="w-full text-xs sm:text-sm text-left">
                <thead>
                  <tr className="bg-[#E5EAF7] dark:bg-[#141d2e] text-[#00174b] dark:text-white">
                    <th scope="col" className="w-[34%] px-3 sm:px-5 py-3 font-semibold"><span className="sr-only">Feature</span></th>
                    <th scope="col" className="px-3 sm:px-5 py-3 font-semibold">Cloud</th>
                    <th scope="col" className="px-3 sm:px-5 py-3 font-semibold">Private Server</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row) => (
                    <tr key={row.label} className="border-t border-[#BCC5E3] dark:border-[#2d3a55] align-top">
                      <th scope="row" className="px-3 sm:px-5 py-3 font-semibold text-[#00174b] dark:text-white">
                        {row.label}
                      </th>
                      <td className="px-3 sm:px-5 py-3 text-[#3B4862] dark:text-[#8fa3c8]">{row.cloud}</td>
                      <td
                        className={`px-3 sm:px-5 py-3 ${
                          row.privAvailable
                            ? "text-[#3B4862] dark:text-[#8fa3c8]"
                            : "text-[#b45309] dark:text-[#fbbf24] font-medium"
                        }`}
                      >
                        {row.priv}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[#697890] dark:text-[#4d6080] mt-4">
              Features that depend on an internet connection cannot run in an air-gapped environment, which is why the
              staff module and email alerts are not part of Private Server.
            </p>
          </div>
        </section>

        {/* Before you deploy */}
        <section className="py-20 px-6 bg-[#FAFBFF] dark:bg-[#141d2e]">
          <div className="max-w-6xl mx-auto">
            <h2
              className="text-3xl md:text-4xl font-bold text-[#00174b] dark:text-white leading-tight mb-10"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Worth knowing before you deploy
            </h2>
            <ol className="grid md:grid-cols-3 gap-6">
              {tips.map((t, i) => (
                <li
                  key={t.title}
                  className="fp-card rounded-lg border border-[#BCC5E3] dark:border-[#2d3a55] bg-white dark:bg-[#1a2235] p-7"
                >
                  <div className="w-10 h-10 rounded-full border-2 border-[#2563eb] text-[#2563eb] font-bold flex items-center justify-center mb-4">
                    {i + 1}
                  </div>
                  <h3
                    className="font-bold text-lg text-[#00174b] dark:text-white mb-2"
                    style={{ fontFamily: "var(--font-manrope)" }}
                  >
                    {t.title}
                  </h3>
                  <p className="text-[#3B4862] dark:text-[#8fa3c8] leading-relaxed">{t.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <FAQ items={faq} title="Private Server FAQ" />

        {/* Final CTA */}
        <section className="py-16 px-6 bg-[#F2F6FF] dark:bg-[#0f1523]">
          <div className="max-w-4xl mx-auto rounded-xl bg-[#00174b] dark:bg-[#141d2e] border border-[#00174b] dark:border-[#2d3a55] text-white p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-3" style={{ fontFamily: "var(--font-manrope)" }}>
              Talk to our team about Private Server
            </h2>
            <p className="text-white/75 max-w-xl mx-auto mb-8 leading-relaxed">
              Tell us about your environment and we will walk you through licensing, installation and support.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="#contact"
                className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Contact us
              </a>
              <Link
                href={BLOG_POST}
                className="border border-white/25 hover:border-white/60 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Read the announcement
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
