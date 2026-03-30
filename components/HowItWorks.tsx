import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Design your survey",
    description:
      "Choose from multiple question types, apply your brand colors and logo, and build the exact survey your business needs — in minutes.",
    detail: "Multiple choice · Rating scales · Open-ended · NPS",
    placeholder: "Survey Builder Screenshot",
    image: "/images/design-your-survey.png",
  },
  {
    number: "02",
    title: "Deploy everywhere",
    description:
      "Reach customers instantly via SMS, email, WhatsApp, or QR code on any mobile phone — or set up a permanent kiosk on an Android tablet.",
    detail: "Mobile · Android tablets · SMS · Email · WhatsApp · QR Code",
    placeholder: "Android Tablet Screenshot",
    image: "/images/deploy-everywhere.png",
  },
  {
    number: "03",
    title: "Act on insights",
    description:
      "View real-time dashboards, export reports to Excel, and schedule automated delivery to your team. Turn feedback into decisions.",
    detail: "Live dashboards · CSV export · Scheduled reports",
    placeholder: "Reporting Dashboard Screenshot",
    image: "/images/act-on-insights.png",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-[#FAFBFF] dark:bg-[#141d2e]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <p className="text-[#2563eb] dark:text-[#60a5fa] text-sm font-semibold uppercase tracking-widest mb-3">
            How It Works
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#00174b] dark:text-white leading-tight"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            From survey to insight in 3 steps
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-8 left-[16.67%] right-[16.67%] h-px bg-[#BCC5E3] dark:bg-[#2d3a55] z-0" />

          {steps.map((step, i) => (
            <div key={step.number} className="relative z-10">
              {/* Number circle */}
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl mb-6 border-2 ${
                  i === 1
                    ? "bg-[#00174b] dark:bg-[#2563eb] border-[#00174b] dark:border-[#2563eb] text-white"
                    : "bg-[#FAFBFF] dark:bg-[#1a2235] border-[#BCC5E3] dark:border-[#2d3a55] text-[#00174b] dark:text-white"
                }`}
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                {step.number}
              </div>

              <h3
                className="text-xl font-bold text-[#00174b] dark:text-white mb-3"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                {step.title}
              </h3>
              <p className="text-[#3B4862] dark:text-[#8fa3c8] text-sm leading-relaxed mb-4">
                {step.description}
              </p>
              <p className="text-xs text-[#1093bb] dark:text-[#38bdf8] font-medium mb-5">{step.detail}</p>

              {/* Screenshot */}
              {step.image ? (
                <div className="rounded-lg overflow-hidden">
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={600}
                    height={375}
                    className="w-full h-auto"
                  />
                </div>
              ) : (
                <div className="aspect-[16/10] bg-[#EBF0FA] dark:bg-[#1a2235] rounded-lg border border-dashed border-[#BCC5E3] dark:border-[#2d3a55] flex flex-col items-center justify-center gap-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="4" width="20" height="14" rx="2" stroke="#97A3C3" strokeWidth="1.5" />
                    <path d="M2 8h20" stroke="#97A3C3" strokeWidth="1.5" />
                    <circle cx="12" cy="14" r="2.5" stroke="#97A3C3" strokeWidth="1.5" />
                  </svg>
                  <p className="text-xs text-[#697890]">{step.placeholder}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="mt-16 bg-[#eff6ff] dark:bg-[#1e3a6e]/30 border border-[#bfdbfe] dark:border-[#2d5099] rounded-lg p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p
              className="text-lg font-bold text-[#00174b] dark:text-white mb-1"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Ready to collect better feedback?
            </p>
            <p className="text-sm text-[#3B4862] dark:text-[#8fa3c8]">
              Start your free 1-month trial. No credit card required.
            </p>
          </div>
          <a
            href="#pricing"
            className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold text-sm px-6 py-3 rounded-lg transition-colors whitespace-nowrap"
          >
            Get started free →
          </a>
        </div>
      </div>
    </section>
  );
}
