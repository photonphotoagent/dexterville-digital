"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";

const navLinks = [
  { label: "Approach", href: "#approach" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const menuVariants = {
  hidden: { opacity: 0, y: -16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: { duration: 0.3, ease: "easeIn" as const },
  },
};

const mobileLinkVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.08,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (y) => {
      setScrolled(y > 48);
    });
    return unsubscribe;
  }, [scrollY]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 320);
  };

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
          background: scrolled ? "rgba(249, 248, 246, 0.88)" : "transparent",
          borderBottom: scrolled
            ? "1px solid rgba(141, 170, 145, 0.18)"
            : "1px solid transparent",
          boxShadow: scrolled ? "0 2px 24px rgba(45, 52, 54, 0.04)" : "none",
          transition:
            "background 0.5s ease, border-color 0.5s ease, box-shadow 0.5s ease",
        }}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex flex-col leading-none group"
          >
            <span
              className="text-lg tracking-tight transition-opacity duration-300 group-hover:opacity-75"
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                color: "var(--jj-charcoal)",
              }}
            >
              Jennifer Jordan
            </span>
            <span
              className="text-[0.58rem] tracking-[0.28em] uppercase mt-0.5"
              style={{
                color: "var(--jj-sage)",
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 500,
              }}
            >
              PMHNP-BC
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="book-btn hidden md:inline-flex"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#contact");
            }}
          >
            <span>Book Consultation</span>
          </a>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2 -mr-2"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <motion.span
              className="block h-[1px] w-6 origin-center"
              style={{ backgroundColor: "var(--jj-charcoal)" }}
              animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            />
            <motion.span
              className="block h-[1px] w-6 origin-center"
              style={{ backgroundColor: "var(--jj-charcoal)" }}
              animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block h-[1px] w-6 origin-center"
              style={{ backgroundColor: "var(--jj-charcoal)" }}
              animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            />
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            className="mobile-menu-overlay"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Logo in menu */}
            <div className="absolute top-5 left-6">
              <span
                className="text-lg tracking-tight"
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  color: "var(--jj-charcoal)",
                }}
              >
                Jennifer Jordan
              </span>
            </div>

            {/* Close */}
            <button
              className="absolute top-6 right-6"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <span
                className="text-[0.65rem] tracking-[0.2em] uppercase"
                style={{ color: "var(--jj-stone)" }}
              >
                Close
              </span>
            </button>

            {/* Mobile Nav Links */}
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  custom={i}
                  variants={mobileLinkVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-4xl tracking-tight transition-opacity duration-300 hover:opacity-60"
                  style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    color: "var(--jj-charcoal)",
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            {/* Mobile CTA */}
            <motion.a
              href="#contact"
              className="book-btn mt-4"
              custom={navLinks.length}
              variants={mobileLinkVariants}
              initial="hidden"
              animate="visible"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#contact");
              }}
            >
              <span>Book Consultation</span>
            </motion.a>

            {/* Sage accent */}
            <div
              className="absolute bottom-10 left-1/2 -translate-x-1/2 w-12 h-[1px]"
              style={{ background: "var(--jj-sage-border)" }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
