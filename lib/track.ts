// Lightweight analytics helper. Sends one event to GA4 (gtag) and Meta Pixel (fbq)
// when they are loaded; does nothing otherwise, so it is safe to call anywhere.

type Params = Record<string, string | number | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

// GA4 event name -> Meta standard event (or custom event when there is no match)
const META_EVENTS: Record<string, { name: string; custom?: boolean }> = {
  trial_cta_click: { name: "TrialCTAClick", custom: true },
  whatsapp_click: { name: "Contact" },
  phone_click: { name: "Contact" },
  generate_lead: { name: "Lead" },
  contact_form_submit: { name: "Lead" },
  pricing_view: { name: "ViewContent" },
};

export function track(event: string, params: Params = {}) {
  if (typeof window === "undefined") return;
  try {
    window.gtag?.("event", event, params);
    const meta = META_EVENTS[event];
    if (meta && window.fbq) {
      window.fbq(meta.custom ? "trackCustom" : "track", meta.name, params);
    }
  } catch {
    /* analytics must never break the page */
  }
}

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid"];
const UTM_STORE = "fp_utm";

/** Save UTM / click-id params from the landing URL so they survive navigation. */
export function captureUtms() {
  if (typeof window === "undefined") return;
  try {
    const url = new URL(window.location.href);
    const found: Record<string, string> = {};
    UTM_KEYS.forEach((k) => {
      const v = url.searchParams.get(k);
      if (v) found[k] = v;
    });
    if (Object.keys(found).length) localStorage.setItem(UTM_STORE, JSON.stringify(found));
  } catch {
    /* storage may be blocked */
  }
}

export function getUtms(): Record<string, string> {
  try {
    return JSON.parse(localStorage.getItem(UTM_STORE) || "{}");
  } catch {
    return {};
  }
}

/** Append saved UTMs to a URL (used for the signup link on cloud.feedbackpro.io). */
export function withUtms(href: string): string {
  try {
    const url = new URL(href);
    Object.entries(getUtms()).forEach(([k, v]) => {
      if (!url.searchParams.has(k)) url.searchParams.set(k, v);
    });
    return url.toString();
  } catch {
    return href;
  }
}
