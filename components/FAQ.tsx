export type FaqItem = { q: string; a: string };

export const DEFAULT_FAQ: FaqItem[] = [
  {
    q: "Does FeedbackPro pay people to fill in surveys?",
    a: "No. FeedbackPro is software that businesses use to collect feedback from their own customers. We don't pay anyone to answer surveys, and there are no rewards for respondents.",
  },
  {
    q: "Do we need to buy a tablet?",
    a: "No. Customers can scan a QR code and give feedback on their own phone. If you want a kiosk at the counter, any Android tablet works.",
  },
  {
    q: "What if our internet is unreliable?",
    a: "The tablet app saves responses offline and syncs automatically when the connection is back.",
  },
  {
    q: "Can surveys be in Urdu?",
    a: "Yes. FeedbackPro supports Urdu fonts, so you can run surveys in Urdu, English or both.",
  },
  {
    q: "Will we know when a customer is unhappy?",
    a: "Yes. Turn on email alerts and you'll be notified the moment someone gives a below-average rating.",
  },
  {
    q: "How do we pay?",
    a: "Prices are shown in PKR for Pakistan. Choose Standard (monthly) or Popular (billed annually, 40% less). For Enterprise plans or other payment options, contact us.",
  },
];

export default function FAQ({ items = DEFAULT_FAQ, title = "Frequently asked questions" }: { items?: FaqItem[]; title?: string }) {
  return (
    <section id="faq" className="py-20 px-6 bg-[#FAFBFF] dark:bg-[#141d2e]">
      <div className="max-w-3xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold text-[#00174b] dark:text-white leading-tight mb-8 text-center"
          style={{ fontFamily: "var(--font-manrope)" }}
        >
          {title}
        </h2>
        <div className="flex flex-col gap-3">
          {items.map((item) => (
            <details
              key={item.q}
              className="group rounded-lg border border-[#BCC5E3] dark:border-[#2d3a55] bg-white dark:bg-[#1a2235] px-5 py-4"
            >
              <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-semibold text-[#0F1523] dark:text-white">
                {item.q}
                <span className="text-[#2563eb] transition-transform group-open:rotate-45 text-xl leading-none">+</span>
              </summary>
              <p className="mt-3 text-[#3B4862] dark:text-[#8fa3c8] leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
