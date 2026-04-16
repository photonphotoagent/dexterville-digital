"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.2 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, ease: "easeOut" as const },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 1.04, x: 24 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1] as const,
      delay: 0.3,
    },
  },
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: "var(--jj-alabaster)" }}
    >
      {/* Ambient gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 80% 50%, rgba(141,170,145,0.07) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(200,184,162,0.06) 0%, transparent 55%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-20 md:pt-36 md:pb-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[58%_42%] gap-12 lg:gap-6 items-center">

          {/* ── Left: Text ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col"
          >
            <motion.div variants={fadeUp} className="section-label mb-8">
              Northern Virginia · Psychiatric Wellness
            </motion.div>

            <div className="overflow-hidden mb-6">
              <motion.h1
                variants={fadeUp}
                className="text-[2.6rem] sm:text-[3.6rem] md:text-[4.4rem] lg:text-[5rem] leading-[1.04] tracking-[-0.025em]"
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  color: "var(--jj-charcoal)",
                }}
              >
                Bespoke Care
                <br />
                for Mind,{" "}
                <em style={{ color: "var(--jj-sage)", fontStyle: "italic" }}>
                  Body,
                </em>
                <br />& Spirit.
              </motion.h1>
            </div>

            <motion.div
              variants={fadeIn}
              className="w-16 h-[1px] mb-8"
              style={{ background: "var(--jj-sage)" }}
            />

            <motion.p
              variants={fadeUp}
              className="text-base md:text-lg leading-relaxed max-w-md mb-10"
              style={{
                color: "var(--jj-stone)",
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 300,
              }}
            >
              A sanctuary for psychiatric evaluation, evidence-based medication
              management, and holistic mental wellness in Northern Virginia.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row items-start gap-5"
            >
              <a href="#contact" className="cta-primary">
                <span>Book Consultation</span>
                <span style={{ opacity: 0.7 }}>→</span>
              </a>
              <a href="#approach" className="cta-secondary mt-2 sm:mt-0">
                <span>Our Approach</span>
              </a>
            </motion.div>

            {/* Credential strip */}
            <motion.div
              variants={fadeIn}
              className="flex items-center gap-8 mt-14 pt-8"
              style={{ borderTop: "1px solid rgba(141,170,145,0.2)" }}
            >
              {[
                { num: "17+", label: "Years Experience" },
                { num: "Board", label: "Certified PMHNP" },
                { num: "Georgetown", label: "University Alumna" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span
                    className="text-sm font-medium"
                    style={{
                      color: "var(--jj-charcoal)",
                      fontFamily: "var(--font-inter), sans-serif",
                    }}
                  >
                    {stat.num}
                  </span>
                  <span
                    className="text-[0.62rem] tracking-[0.14em] uppercase mt-0.5"
                    style={{ color: "var(--jj-stone)" }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: Texture Placeholder ── */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative hidden lg:block"
          >
            <div
              className="relative w-full aspect-[4/5] texture-glass"
              style={{ borderRadius: "2px" }}
            >
              {/* Floating caption card */}
              <div
                className="absolute bottom-8 left-8 right-8 p-5"
                style={{
                  background: "rgba(249,248,246,0.9)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: "1px solid rgba(141,170,145,0.22)",
                }}
              >
                <p
                  className="text-[0.6rem] tracking-[0.22em] uppercase mb-2"
                  style={{ color: "var(--jj-sage)" }}
                >
                  Holistic · Evidence-Based · Compassionate
                </p>
                <p
                  className="text-sm leading-snug"
                  style={{
                    color: "var(--jj-charcoal)",
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    fontStyle: "italic",
                  }}
                >
                  &ldquo;Treating the whole person, not just the symptom.&rdquo;
                </p>
              </div>
            </div>

            {/* Offset accent blocks */}
            <div
              className="absolute -bottom-6 -right-6 w-32 h-32 texture-linen -z-10"
              style={{ borderRadius: "2px" }}
            />
            <div
              className="absolute -top-5 -left-5 w-20 h-20 -z-10"
              style={{
                border: "1px solid rgba(141,170,145,0.28)",
                borderRadius: "2px",
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-cue hidden md:flex"
      >
        <div className="scroll-cue-line" />
      </motion.div>
    </section>
  );
}
