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
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/favicon.svg",
  },
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
        <script dangerouslySetInnerHTML={{ __html: `(function(){var t=localStorage.getItem('theme');if(t==='dark'||(t===null&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark');}})();` }} />
      </head>
      <body className="min-h-screen flex flex-col bg-(--background) text-(--foreground)">
        {children}
        {/* Vbout visitor tracking */}
        <Script id="vbout-tracking" strategy="afterInteractive">{`
          var _vbset = _vbset || [];
          _vbset.push(['_account', 'VBT-07081-12251']);
          _vbset.push(['_domain', 'https://feedbackpro.io']);
          _vbset.push(['__vbvar__', ['_doubleOptin', '1']]); // 1 = Enabled, 0 = Disabled
          (function() {
            var vbt = document.createElement('script'); vbt.type = 'text/javascript'; vbt.async = true;
            vbt.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'www.vbt.io/tracker?_account='+_vbset[0][1]+'&_domain='+_vbset[1][1];
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(vbt, s);
          })();
        `}</Script>
      </body>
    </html>
  );
}
