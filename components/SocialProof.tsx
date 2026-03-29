const testimonials = [
  {
    quote:
      "Feedback collection used to take us weeks to set up. FeedbackPro had us live in an afternoon.",
    name: "Operations Manager",
    company: "Real Estate & Community",
  },
  {
    quote:
      "Our NPS scores improved 18 points in 3 months after switching to FeedbackPro.",
    name: "Head of Customer Experience",
    company: "Retail & Fashion",
  },
  {
    quote:
      "The offline tablet mode is a game-changer for our hospital reception desks.",
    name: "IT Director",
    company: "Healthcare",
  },
];

export default function SocialProof() {
  return (
    <section className="bg-[#00174b] py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white/5 border border-white/10 rounded-lg p-6"
          >
            <div
              className="text-[#2563eb] text-4xl font-bold leading-none mb-3"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              "
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-5">
              {t.quote}
            </p>
            <div>
              <p className="text-white text-sm font-semibold">{t.name}</p>
              <p className="text-white/50 text-xs mt-0.5">{t.company}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
