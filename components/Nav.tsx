"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggleDark() {
    const html = document.documentElement;
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAFBFF]/95 dark:bg-[#1a2235]/95 backdrop-blur-md border-b border-[#BCC5E3] dark:border-[#2d3a55]"
          : "bg-transparent"
      }`}
      style={scrolled ? { boxShadow: "0 1px 0 rgba(37,99,235,0.08), 0 4px 16px rgba(37,99,235,0.05)" } : undefined}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-fbp.svg"
            alt="FeedbackPro"
            width={216}
            height={72}
            className="h-11 w-auto"
            priority
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {["Features", "How It Works", "Pricing"].map((item) => (
            <a
              key={item}
              href={`/#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-[#3B4862] dark:text-[#8fa3c8] hover:text-[#0F1523] dark:hover:text-white text-sm font-medium transition-colors"
            >
              {item}
            </a>
          ))}
          <Link
            href="/blog"
            className="text-[#3B4862] dark:text-[#8fa3c8] hover:text-[#0F1523] dark:hover:text-white text-sm font-medium transition-colors"
          >
            Blog
          </Link>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          {/* Dark mode toggle */}
          <button
            onClick={toggleDark}
            aria-label="Toggle dark mode"
            className="w-9 h-9 flex items-center justify-center rounded-lg text-[#3B4862] dark:text-[#8fa3c8] hover:text-[#0F1523] dark:hover:text-white hover:bg-[#EBF0FA] dark:hover:bg-[#1a2235] transition-colors"
          >
            {isDark ? (
              /* Sun icon */
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            ) : (
              /* Moon icon */
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>
          <a
            href="https://cloud.feedbackpro.io/account/login"
            className="text-sm font-medium text-[#0F1523] dark:text-[#c5d4ee] hover:text-[#2563eb] dark:hover:text-[#60a5fa] transition-colors"
          >
            Sign in
          </a>
          <a
            href="https://cloud.feedbackpro.io/account/register"
            className="bg-[#00174b] hover:bg-[#003ea8] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            Start free trial
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-[#3B4862] dark:text-[#8fa3c8] hover:text-[#0F1523] dark:hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            {menuOpen ? (
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            ) : (
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#FAFBFF] dark:bg-[#1a2235] border-b border-[#BCC5E3] dark:border-[#2d3a55] px-6 py-4 flex flex-col gap-4">
          {["Features", "How It Works", "Pricing"].map((item) => (
            <a
              key={item}
              href={`/#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-[#0F1523] dark:text-[#c5d4ee] text-sm font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <Link
            href="/blog"
            className="text-[#0F1523] dark:text-[#c5d4ee] text-sm font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Blog
          </Link>
          <a
            href="https://cloud.feedbackpro.io/account/register"
            className="bg-[#00174b] text-white text-sm font-semibold px-4 py-2.5 rounded-lg text-center"
            onClick={() => setMenuOpen(false)}
          >
            Start free trial
          </a>
          <button
            onClick={toggleDark}
            className="flex items-center gap-2 text-[#0F1523] dark:text-[#c5d4ee] text-sm font-medium"
          >
            {isDark ? (
              <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5"/>
                  <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                  <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                </svg>
                Switch to light mode
              </>
            ) : (
              <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
                Switch to dark mode
              </>
            )}
          </button>
        </div>
      )}
    </nav>
  );
}
