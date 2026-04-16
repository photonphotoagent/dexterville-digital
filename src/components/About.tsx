"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: -28, scale: 1.03 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1] as const,
      delay: 0.2,
    },
  },
};

const credentials = [
  "Board-Certified Psychiatric Mental Health Nurse Practitioner (PMHNP-BC)",
  "Georgetown University — Master of Science in Nursing",
  "Trauma-Informed Care Specialist",
  "ADHD & Mood Disorder Expert",
  "17+ Years of Clinical Excellence",
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      ref={ref}
      id="about"
      className="relative overflow-hidden py-24 md:py-36"
      style={{ background: "var(--jj-cream)" }}
    >
      {/* Ambient gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 10% 50%, rgba(141,170,145,0.06) 0%, transparent 55%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[44%_56%] gap-16 lg:gap-20 items-center">

          {/* ── Left: Portrait Placeholder ── */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            {/* Portrait frame */}
            <div
              className="relative w-full aspect-[3/4] texture-portrait"
              style={{ borderRadius: "2px" }}
            >
              {/* Name plate */}
              <div
                className="absolute bottom-0 left-0 right-0 px-8 py-5"
                style={{
                  background:
                    "linear-gradient(to top, rgba(45,52,54,0.72) 0%, transparent 100%)",
                }}
              >
                <p
                  className="text-[0.58rem] tracking-[0.28em] uppercase mb-1"
                  style={{ color: "rgba(249,248,246,0.7)" }}
                >
                  Board-Certified
                </p>
                <p
                  className="text-xl"
                  style={{
                    color: "var(--jj-alabaster)",
                    fontFamily: "var(--font-playfair), Georgia, serif",
                  }}
                >
                  Jennifer Jordan, PMHNP-BC
                </p>
              </div>
            </div>

            {/* Sage offset square */}
            <div
              className="absolute -bottom-5 -right-5 w-24 h-24 -z-10"
              style={{
                background: "rgba(141,170,145,0.15)",
                borderRadius: "2px",
              }}
            />
            <div
              className="absolute -top-5 -left-5 w-16 h-16 -z-10"
              style={{
                border: "1px solid rgba(141,170,145,0.3)",
                borderRadius: "2px",
              }}
            />
          </motion.div>

          {/* ── Right: Bio Text ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col"
          >
            <motion.div variants={fadeUp} className="section-label mb-8">
              About Jennifer
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl lg:text-[2.8rem] leading-[1.12] tracking-[-0.02em] mb-8"
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                color: "var(--jj-charcoal)",
              }}
            >
              A Partnership Grounded in{" "}
              <em style={{ fontStyle: "italic", color: "var(--jj-sage)" }}>
                Clinical Excellence
              </em>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-base leading-[1.85] mb-6"
              style={{
                color: "var(--jj-stone)",
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 300,
              }}
            >
              Jennifer Jordan, PMHNP-BC, is a board-certified psychiatric nurse
              practitioner with over 17 years of experience. A Georgetown
              University alumna, Jennifer&apos;s career has spanned the full spectrum
              of mental healthcare—from inpatient crisis stabilization to
              outpatient wellness.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-base leading-[1.85] mb-10"
              style={{
                color: "var(--jj-stone)",
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 300,
              }}
            >
              She believes in a partnership between provider and patient,
              grounded in trauma-informed care and clinical excellence. Jennifer
              brings the same depth of presence to every evaluation, ensuring
              each patient feels truly seen and understood.
            </motion.p>

            {/* Credentials */}
            <motion.div variants={fadeUp} className="flex flex-col gap-3 mb-10">
              {credentials.map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <div
                    className="w-5 h-[1px] flex-shrink-0 mt-[0.6rem]"
                    style={{ background: "var(--jj-sage)" }}
                  />
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      color: "var(--jj-charcoal)",
                      fontFamily: "var(--font-inter), sans-serif",
                      fontWeight: 400,
                    }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp}>
              <a href="#contact" className="cta-primary inline-flex">
                <span>Begin Your Journey</span>
                <span style={{ opacity: 0.7 }}>→</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
