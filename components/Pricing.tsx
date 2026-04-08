"use client";

import { useState, useEffect } from "react";

type Currency = "PKR" | "USD";

const plans = [
  {
    name: "Free Trial",
    pricePKR: "Free",
    priceUSD: "Free",
    period: "1 month",
    description: "Test the full platform before you commit",
    includesAll: null,
    features: [
      "Up to 1 device",
      "Up to 2 surveys",
      "Web & Tablet response collection",
      "Advanced analytics",
      "Satisfaction Score",
      "SMS & email distribution",
      "Email alerts for below-average responses",
      "Data export",
      "Offline mode",
      "Transaction tag integration",
      "Priority support",
    ],
    limit: "Limited to 100 responses · 1 month only",
    cta: "Start free trial",
    ctaStyle: "outline",
    popular: false,
  },
  {
    name: "Standard",
    pricePKR: "PKR 10,000",
    priceUSD: "$35",
    period: "per month",
    description: "For businesses collecting ongoing feedback",
    includesAll: "Everything in Free Trial, plus",
    features: [
      "Unlimited responses",
    ],
    limit: null,
    cta: "Get Standard",
    ctaStyle: "outline",
    popular: false,
  },
  {
    name: "Popular",
    pricePKR: "PKR 6,000",
    priceUSD: "$21",
    period: "per month",
    billing: "Billed annually",
    description: "Best value — save 40% by paying annually",
    includesAll: "Everything in Standard",
    features: [],
    limit: null,
    cta: "Get Popular",
    ctaStyle: "filled",
    popular: true,
  },
  {
    name: "Enterprise",
    pricePKR: "Custom",
    priceUSD: "Custom",
    period: "pricing",
    description: "For large organizations with multiple locations",
    includesAll: null,
    features: [
      "Unlimited responses",
      "10+ devices",
      "Unlimited surveys",
      "Custom dashboards",
      "Transaction integration",
      "Dedicated account manager",
      "SLA guarantee",
      "Custom integrations",
    ],
    limit: null,
    cta: "Contact us",
    ctaStyle: "outline",
    popular: false,
  },
];

export default function Pricing() {
  const [currency, setCurrency] = useState<Currency>("USD");

  useEffect(() => {
    const stored = localStorage.getItem("currency") as Currency | null;
    if (stored === "PKR" || stored === "USD") {
      setCurrency(stored);
      return;
    }
    fetch("/api/geo")
      .then((r) => r.json())
      .then(({ country }: { country: string }) => {
        setCurrency(country === "PK" ? "PKR" : "USD");
      })
      .catch(() => {});
  }, []);

  function handleCurrencyChange(c: Currency) {
    setCurrency(c);
    localStorage.setItem("currency", c);
  }

  return (
    <section id="pricing" className="py-24 px-6 bg-[#F2F6FF] dark:bg-[#0f1523]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#2563eb] dark:text-[#60a5fa] text-sm font-semibold uppercase tracking-widest mb-3">
            Pricing
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#00174b] dark:text-white leading-tight mb-4"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            Simple, honest pricing
          </h2>
          <p className="text-[#3B4862] dark:text-[#8fa3c8] text-lg max-w-xl mx-auto mb-6">
            Start free for a month. Upgrade when you are ready. No contracts.
          </p>

          {/* Currency toggle */}
          <div className="inline-flex items-center bg-[#E5EAF7] dark:bg-[#1a2235] rounded-lg p-1 gap-1">
            {(["PKR", "USD"] as Currency[]).map((c) => (
              <button
                key={c}
                onClick={() => handleCurrencyChange(c)}
                className={`px-5 py-1.5 rounded-md text-sm font-semibold transition-all ${
                  currency === c
                    ? "bg-[#00174b] dark:bg-[#2563eb] text-white shadow-sm"
                    : "text-[#3B4862] dark:text-[#8fa3c8] hover:text-[#0F1523] dark:hover:text-white"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-lg border p-7 flex flex-col ${
                plan.popular
                  ? "bg-[#00174b] dark:bg-[#1e3a6e] border-[#00174b] dark:border-[#2d5099] text-white shadow-xl shadow-[#00174b]/20"
                  : "bg-[#FAFBFF] dark:bg-[#141d2e] border-[#BCC5E3] dark:border-[#2d3a55]"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-[#2563eb] text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap uppercase tracking-wide">
                    Best Value
                  </span>
                </div>
              )}

              <div className="mb-6">
                <p
                  className={`text-xs font-semibold uppercase tracking-widest mb-3 ${
                    plan.popular ? "text-[#93c5fd]" : "text-[#2563eb] dark:text-[#60a5fa]"
                  }`}
                >
                  {plan.name}
                </p>
                <div className="flex items-baseline gap-1 mb-1">
                  <span
                    className={`text-3xl font-bold ${
                      plan.popular ? "text-white" : "text-[#00174b] dark:text-white"
                    }`}
                    style={{ fontFamily: "var(--font-manrope)" }}
                  >
                    {currency === "PKR" ? plan.pricePKR : plan.priceUSD}
                  </span>
                  {plan.pricePKR !== "Free" && plan.pricePKR !== "Custom" && (
                    <span
                      className={`text-sm ${
                        plan.popular ? "text-white/60" : "text-[#3B4862] dark:text-[#8fa3c8]"
                      }`}
                    >
                      /{plan.period}
                    </span>
                  )}
                </div>
                {"billing" in plan && plan.billing && (
                  <p className="text-xs text-[#93c5fd] mb-2">{plan.billing}</p>
                )}
                <p
                  className={`text-sm ${
                    plan.popular ? "text-white/70" : "text-[#3B4862] dark:text-[#8fa3c8]"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                {/* "Includes everything in X" row */}
                {plan.includesAll && (
                  <li className={`text-sm font-medium pb-2 mb-0.5 border-b ${
                    plan.popular
                      ? "text-[#93c5fd] border-white/10"
                      : "text-[#2563eb] dark:text-[#60a5fa] border-[#BCC5E3] dark:border-[#2d3a55]"
                  }`}>
                    {plan.includesAll}
                  </li>
                )}

                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <svg
                      className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#22c55e]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span
                      className={`text-sm ${
                        plan.popular ? "text-white/80" : "text-[#3B4862] dark:text-[#8fa3c8]"
                      }`}
                    >
                      {f}
                    </span>
                  </li>
                ))}

                {/* Trial limit note */}
                {plan.limit && (
                  <li className={`text-xs mt-1 ${
                    plan.popular ? "text-white/40" : "text-[#697890] dark:text-[#4d6080]"
                  }`}>
                    {plan.limit}
                  </li>
                )}
              </ul>

              {/* CTA */}
              <a
                href={plan.name === "Enterprise" ? "#contact" : "https://cloud.feedbackpro.io/account/register"}
                className={`w-full text-center text-sm font-semibold py-3 rounded-lg transition-colors ${
                  plan.ctaStyle === "filled"
                    ? "bg-[#2563eb] hover:bg-[#1d4ed8] text-white"
                    : plan.popular
                    ? "bg-white/10 hover:bg-white/20 text-white border border-white/20"
                    : "border border-[#BCC5E3] dark:border-[#2d3a55] hover:border-[#00174b] dark:hover:border-[#2563eb] text-[#00174b] dark:text-[#c5d4ee] bg-[#FAFBFF] dark:bg-transparent"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-xs text-[#697890] dark:text-[#4d6080] mt-8">
          {currency === "PKR"
            ? "All prices in Pakistani Rupees (PKR). Annual plan billed upfront. Annual subscriptions refundable within 30 days if unused."
            : "All prices in USD. Annual plan billed upfront. Annual subscriptions refundable within 30 days if unused."}
        </p>
      </div>
    </section>
  );
}
