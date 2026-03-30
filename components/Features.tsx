import Image from "next/image";

// Row 1: large cards with images (Design + Devices)
const largeCards = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="3" stroke="#1093bb" strokeWidth="1.5" />
        <path d="M7 9h10M7 12h7M7 15h5" stroke="#1093bb" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Customizable Surveys",
    description:
      "Design surveys that match your brand — logo, colors, and multiple question types including multiple choice, rating scales, and open-ended questions.",
    tag: "Design",
    image: "/images/customizable-surveys.png",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="7" y="2" width="10" height="18" rx="2" stroke="#1093bb" strokeWidth="1.5" />
        <circle cx="12" cy="17" r="1" fill="#1093bb" />
        <path d="M9 6h6" stroke="#1093bb" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Mobile Web Surveys",
    description:
      "Customers can respond on any smartphone browser — no app download required. Fully responsive surveys that work seamlessly on mobile.",
    tag: "Devices",
    image: "/images/mobile-survey.png",
  },
];

// Row 2: small cards (no images)
const smallCards = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" stroke="#1093bb" strokeWidth="1.5" />
        <path d="M8.5 12.5l2.5 2.5L15.5 10" stroke="#1093bb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 6v2M12 16v2M6 12H4M20 12h-2" stroke="#1093bb" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      </svg>
    ),
    title: "Works Offline",
    description:
      "Collect data in remote areas or locations with poor connectivity. FeedbackPro syncs automatically when internet is restored.",
    tag: "Reliability",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="5" y="2" width="14" height="20" rx="2" stroke="#1093bb" strokeWidth="1.5" />
        <path d="M9 7h6M9 11h6M9 15h4" stroke="#1093bb" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="17" cy="17" r="4" fill="#eff6ff" stroke="#1093bb" strokeWidth="1.5" />
        <path d="M17 15.5v1.5l1 1" stroke="#1093bb" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Android Tablet Support",
    description:
      "Purpose-built for Android tablets. Set up a kiosk mode at your reception, checkout counter, or any customer touchpoint.",
    tag: "Devices",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="#1093bb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "SMS & Email Distribution",
    description:
      "Reach customers where they are. Send bulk survey links via SMS or email with custom templates — track open rates and completions.",
    tag: "Distribution",
  },
];

// Row 3: Analytics (large) + Integration (small)
const bottomCards = {
  large: {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M3 3h18M3 9h18M3 15h18M3 21h18" stroke="#BCC5E3" strokeWidth="1" />
        <rect x="3" y="11" width="4" height="8" rx="1" fill="#1093bb" opacity="0.4" />
        <rect x="10" y="7" width="4" height="12" rx="1" fill="#1093bb" opacity="0.7" />
        <rect x="17" y="4" width="4" height="15" rx="1" fill="#1093bb" />
      </svg>
    ),
    title: "Advanced Reporting",
    description:
      "Customizable dashboards with charts, graphs, and export to CSV/Excel. Schedule automated email reports — filtered exactly how you need them.",
    tag: "Analytics",
    image: "/images/advanced-reporting.png",
  },
  small: {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="#1093bb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Transaction Integration",
    description:
      "Link customer feedback directly to their purchase history and visit data. Understand the full context behind every response.",
    tag: "Integration",
  },
};

function CardHeader({ icon, tag }: { icon: React.ReactNode; tag: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-10 bg-[#e0f5fb] dark:bg-[#1093bb]/20 rounded-lg flex items-center justify-center group-hover:bg-[#baeaf5] dark:group-hover:bg-[#1093bb]/30 transition-colors">
        {icon}
      </div>
      <span className="text-xs font-semibold text-[#1093bb] dark:text-[#38bdf8] bg-[#e0f5fb] dark:bg-[#1093bb]/20 px-2.5 py-1 rounded-full uppercase tracking-wide">
        {tag}
      </span>
    </div>
  );
}

function CardBody({ title, description }: { title: string; description: string }) {
  return (
    <>
      <h3 className="text-lg font-bold text-[#00174b] dark:text-white mb-2" style={{ fontFamily: "var(--font-manrope)" }}>
        {title}
      </h3>
      <p className="text-[#3B4862] dark:text-[#8fa3c8] text-sm leading-relaxed">{description}</p>
    </>
  );
}

const cardBase = "fp-card bg-[#FAFBFF] dark:bg-[#141d2e] border border-[#BCC5E3] dark:border-[#2d3a55] rounded-lg p-7 hover:border-[#2563eb]/30 dark:hover:border-[#2563eb]/50 group";

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-[#F2F6FF] dark:bg-[#0f1523]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <p className="text-[#2563eb] dark:text-[#60a5fa] text-sm font-semibold uppercase tracking-widest mb-3">
            Features
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#00174b] dark:text-white leading-tight max-w-2xl"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            Everything you need to collect better feedback
          </h2>
        </div>

        <div className="space-y-6">
          {/* Row 1: Customizable Surveys (2/3) + Mobile Web Surveys (1/3) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className={`${cardBase} md:col-span-2`}>
              <CardHeader icon={largeCards[0].icon} tag={largeCards[0].tag} />
              <CardBody title={largeCards[0].title} description={largeCards[0].description} />
              <div className="mt-5 rounded-lg overflow-hidden">
                <Image src={largeCards[0].image} alt={largeCards[0].title} width={800} height={450} className="w-full h-auto" />
              </div>
            </div>
            <div className={cardBase}>
              <CardHeader icon={largeCards[1].icon} tag={largeCards[1].tag} />
              <CardBody title={largeCards[1].title} description={largeCards[1].description} />
              <div className="mt-5 rounded-lg overflow-hidden">
                <Image src={largeCards[1].image} alt={largeCards[1].title} width={800} height={450} className="w-full h-auto" />
              </div>
            </div>
          </div>

          {/* Row 2: Three small cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {smallCards.map((f) => (
              <div key={f.title} className={cardBase}>
                <CardHeader icon={f.icon} tag={f.tag} />
                <CardBody title={f.title} description={f.description} />
              </div>
            ))}
          </div>

          {/* Row 3: Analytics (large) + Integration */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className={`${cardBase} md:col-span-2`}>
              <CardHeader icon={bottomCards.large.icon} tag={bottomCards.large.tag} />
              <CardBody title={bottomCards.large.title} description={bottomCards.large.description} />
              <div className="mt-5 rounded-lg overflow-hidden">
                <Image src={bottomCards.large.image} alt={bottomCards.large.title} width={800} height={450} className="w-full h-auto" />
              </div>
            </div>
            <div className={cardBase}>
              <CardHeader icon={bottomCards.small.icon} tag={bottomCards.small.tag} />
              <CardBody title={bottomCards.small.title} description={bottomCards.small.description} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
