"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const footerLinks = [
  { label: "Approach", href: "#approach" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-5%" });

  const handleClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      ref={ref}
      style={{ background: "var(--jj-charcoal)" }}
      className="relative overflow-hidden"
    >
      {/* Subtle top gradient */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(141,170,145,0.4) 40%, rgba(141,170,145,0.4) 60%, transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-10">

        {/* Top row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 pb-12"
          style={{ borderBottom: "1px solid rgba(249,248,246,0.08)" }}
        >
          {/* Brand */}
          <div className="flex flex-col max-w-xs">
            <span
              className="text-2xl mb-1"
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                color: "var(--jj-alabaster)",
              }}
            >
              Jennifer Jordan
            </span>
            <span
              className="text-[0.6rem] tracking-[0.28em] uppercase mb-6"
              style={{ color: "var(--jj-sage)" }}
            >
              PMHNP-BC
            </span>
            <p
              className="text-sm leading-relaxed"
              style={{
                color: "rgba(249,248,246,0.45)",
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 300,
              }}
            >
              Board-certified psychiatric mental health care rooted in compassion, clinical excellence, and the belief that healing is possible for everyone.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <p
              className="text-[0.62rem] tracking-[0.22em] uppercase mb-1"
              style={{ color: "rgba(249,248,246,0.35)" }}
            >
              Navigation
            </p>
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(link.href);
                }}
                className="text-sm transition-colors duration-300 hover:opacity-100"
                style={{
                  color: "rgba(249,248,246,0.55)",
                  fontFamily: "var(--font-inter), sans-serif",
                  fontWeight: 300,
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-4">
            <p
              className="text-[0.62rem] tracking-[0.22em] uppercase mb-1"
              style={{ color: "rgba(249,248,246,0.35)" }}
            >
              Contact
            </p>
            <p
              className="text-sm"
              style={{
                color: "rgba(249,248,246,0.55)",
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 300,
              }}
            >
              Northern Virginia
            </p>
            <a
              href="mailto:hello@jenniferjordanpmhnp.com"
              className="text-sm transition-colors duration-300"
              style={{
                color: "var(--jj-sage)",
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 300,
              }}
            >
              hello@jenniferjordanpmhnp.com
            </a>
            {/* Patient Portal */}
            <div className="mt-2">
              <span className="portal-btn inline-flex">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ opacity: 0.6 }}>
                  <rect x="1" y="3" width="12" height="9" rx="1" stroke="currentColor" strokeWidth="1" />
                  <path d="M4.5 3V2a2.5 2.5 0 0 1 5 0v1" stroke="currentColor" strokeWidth="1" />
                </svg>
                <span>Patient Portal</span>
                <span
                  className="text-[0.55rem] tracking-[0.2em] uppercase"
                  style={{ color: "rgba(158,158,142,0.6)" }}
                >
                  Coming Soon
                </span>
              </span>
            </div>
          </div>
        </motion.div>

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-8"
        >
          <p
            className="text-xs"
            style={{
              color: "rgba(249,248,246,0.28)",
              fontFamily: "var(--font-inter), sans-serif",
              letterSpacing: "0.04em",
            }}
          >
            &copy; {new Date().getFullYear()} Jennifer Jordan, PMHNP-BC. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "HIPAA Notice"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs transition-colors duration-300"
                style={{
                  color: "rgba(249,248,246,0.28)",
                  fontFamily: "var(--font-inter), sans-serif",
                  letterSpacing: "0.04em",
                }}
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
