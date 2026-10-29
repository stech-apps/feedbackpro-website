"use client";

import Script from "next/script";
import { useEffect } from "react";
import { captureUtms, track, withUtms } from "@/lib/track";

const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID;
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;
const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID; // e.g. AW-123456789

/**
 * Loads GA4 / Google Ads and the Meta Pixel when their IDs are set, and tracks the
 * conversion events used by the paid campaigns:
 *   trial_cta_click  – any click on a link to cloud.feedbackpro.io/account/register
 *   whatsapp_click   – any wa.me / api.whatsapp.com link
 *   phone_click      – any tel: link
 *   pricing_view     – the #pricing section scrolled into view
 * Saved UTMs are appended to the signup link so the app can record the source.
 */
export default function Analytics() {
  useEffect(() => {
    captureUtms();

    function onClick(e: MouseEvent) {
      const a = (e.target as HTMLElement | null)?.closest("a");
      if (!a) return;
      const href = a.getAttribute("href") || "";
      const location = a.closest("[data-track-location]")?.getAttribute("data-track-location") || window.location.pathname;
      if (href.includes("cloud.feedbackpro.io/account/register")) {
        a.setAttribute("href", withUtms(href));
        track("trial_cta_click", { location });
      } else if (href.includes("wa.me") || href.includes("api.whatsapp.com")) {
        track("whatsapp_click", { location });
      } else if (href.startsWith("tel:")) {
        track("phone_click", { location });
      }
    }
    document.addEventListener("click", onClick, true);

    // Hero form navigates with JS instead of a link
    function onSubmit(e: SubmitEvent) {
      const form = e.target as HTMLFormElement | null;
      if (form?.dataset.trialForm !== undefined) track("trial_cta_click", { location: "hero_form" });
    }
    document.addEventListener("submit", onSubmit, true);

    let observer: IntersectionObserver | undefined;
    const pricing = document.getElementById("pricing");
    if (pricing && "IntersectionObserver" in window) {
      observer = new IntersectionObserver((entries) => {
        if (entries.some((en) => en.isIntersecting)) {
          track("pricing_view");
          observer?.disconnect();
        }
      }, { threshold: 0.3 });
      observer.observe(pricing);
    }

    return () => {
      document.removeEventListener("click", onClick, true);
      document.removeEventListener("submit", onSubmit, true);
      observer?.disconnect();
    };
  }, []);

  const gtagId = GA4_ID || GOOGLE_ADS_ID;

  return (
    <>
      {gtagId && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gtagId}`} strategy="afterInteractive" />
          <Script id="gtag-init" strategy="afterInteractive">{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            ${GA4_ID ? `gtag('config', '${GA4_ID}');` : ""}
            ${GOOGLE_ADS_ID ? `gtag('config', '${GOOGLE_ADS_ID}');` : ""}
          `}</Script>
        </>
      )}
      {META_PIXEL_ID && (
        <Script id="meta-pixel" strategy="afterInteractive">{`
          !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
          n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
          document,'script','https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${META_PIXEL_ID}');
          fbq('track', 'PageView');
        `}</Script>
      )}
    </>
  );
}
