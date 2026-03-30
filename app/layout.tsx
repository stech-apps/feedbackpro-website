import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "FeedbackPro — The All-In-One Feedback Solution",
  description:
    "Easily design surveys, collect feedback on web & Android tablets (even offline!), and gain actionable insights to grow your business.",
  keywords: "feedback, surveys, customer feedback, employee feedback, offline surveys, feedback platform, global, international",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        {/* Anti-flash: set dark class before first paint based on stored preference or system preference */}
        <script dangerouslySetInnerHTML={{ __html: `(function(){if(localStorage.getItem('theme')==='dark'){document.documentElement.classList.add('dark');}})();` }} />
      </head>
      <body className="min-h-screen flex flex-col bg-(--background) text-(--foreground)">
        {children}
        {/* Vbout tracking */}
        <Script id="vbout-init" strategy="afterInteractive">{`
          var _vbset = _vbset || [];
          _vbset.push(['_account', 'VBT-07081-12251']);
          _vbset.push(['_domain', 'https://feedbackpro.io']);
        `}</Script>
        <Script
          src="https://www.vbt.io/ext/vbt.js"
          strategy="afterInteractive"
          async
        />
      </body>
    </html>
  );
}
