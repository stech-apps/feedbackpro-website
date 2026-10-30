"use client";

import { useState } from "react";
import { getUtms, track } from "@/lib/track";

const BUSINESS_TYPES = [
  "Hospital or clinic",
  "Diagnostic lab",
  "Restaurant or café",
  "Retail or pharmacy",
  "Bank or financial services",
  "Hotel",
  "Real estate, mall or housing society",
  "Car dealer or service centre",
  "Government",
  "Other business",
];
const BRANCHES = ["1", "2", "3–5", "6–20", "21+"];

const input =
  "w-full px-4 py-3 border border-[#BCC5E3] dark:border-[#2d3a55] bg-white dark:bg-[#1a2235] rounded-lg text-[#0F1523] dark:text-[#f0f4ff] text-sm placeholder:text-[#697890] focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent";
const label = "block text-sm font-medium text-[#0F1523] dark:text-white mb-1.5";

export default function SetupHelpForm() {
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    setError("");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch("/api/setup-help", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, utms: getUtms() }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Something went wrong.");
      track("generate_lead", { form: "setup_help", business_type: String(data.businessType), branches: String(data.branches) });
      setState("done");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setState("error");
    }
  }

  if (state === "done") {
    return (
      <div className="rounded-lg border border-[#bbf7d0] bg-[#f0fdf4] p-6 text-[#14532d]">
        <p className="font-semibold text-lg mb-1">Your signup is almost complete!</p>
        <p>Please check your email for a confirmation message. If you don&apos;t see it, check your spam folder.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <label className={label} htmlFor="name">Your name *</label>
        <input className={input} id="name" name="name" required autoComplete="name" />
      </div>
      <div>
        <label className={label} htmlFor="email">Work email *</label>
        <input className={input} id="email" name="email" type="email" required autoComplete="email" />
      </div>
      <div>
        <label className={label} htmlFor="company">Company *</label>
        <input className={input} id="company" name="company" required autoComplete="organization" />
      </div>
      <div>
        <label className={label} htmlFor="whatsapp">WhatsApp number *</label>
        <input className={input} id="whatsapp" name="whatsapp" type="tel" required placeholder="+92 3xx xxxxxxx" autoComplete="tel" />
      </div>
      <div>
        <label className={label} htmlFor="businessType">Business type *</label>
        <select className={input} id="businessType" name="businessType" required defaultValue="">
          <option value="" disabled>Select…</option>
          {BUSINESS_TYPES.map((t) => <option key={t}>{t}</option>)}
        </select>
      </div>
      <div>
        <label className={label} htmlFor="branches">Number of branches *</label>
        <select className={input} id="branches" name="branches" required defaultValue="">
          <option value="" disabled>Select…</option>
          {BRANCHES.map((b) => <option key={b}>{b}</option>)}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label className={label} htmlFor="city">City</label>
        <input className={input} id="city" name="city" placeholder="Lahore, Karachi, Islamabad…" />
      </div>
      {error && <p className="sm:col-span-2 text-sm text-red-600">{error}</p>}
      <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center gap-3">
        <button
          type="submit"
          disabled={state === "sending"}
          className="whitespace-nowrap shrink-0 bg-[#2563eb] hover:bg-[#1d4ed8] disabled:opacity-60 text-white font-semibold text-sm px-6 py-3 rounded-lg transition-colors"
        >
          {state === "sending" ? "Sending…" : "Get setup help"}
        </button>
        <p className="text-xs text-[#697890]">For businesses collecting feedback from their own customers. We don&apos;t pay people to fill in surveys.</p>
      </div>
    </form>
  );
}
