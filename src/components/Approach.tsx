"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const pillars = [
  {
    title: "Biopsychosocial Framework",
    desc: "Every evaluation integrates biological, psychological, and social factors to form a complete picture of your wellbeing.",
  },
  {
    title: "Trauma-Informed Practice",
    desc: "Safety and trust are the foundation. We move at your pace, honoring your story without judgment.",
  },
  {
    title: "Evidence-Based Medicine",
    desc: "Clinical decisions are grounded in the latest research, thoughtfully applied to your unique presentation.",
  },
];

export default function Approach() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      ref={ref}
      id="approach"
      className="relative py-24 md:py-36 overflow-hidden"
      style={{ background: "var(--jj-cream)" }}
    >
      {/* Ambient gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 90% 20%, rgba(141,170,145,0.08) 0%, transparent 55%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[48%_52%] gap-16 lg:gap-20">

          {/* ── Left: Pull Quote ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col justify-center"
          >
            <motion.div variants={fadeUp} className="section-label mb-10">
              The Approach
            </motion.div>

            {/* Large editorial quote */}
            <motion.div variants={fadeUp} className="relative pl-6 mb-10">
              {/* Sage left border */}
              <div
                className="absolute left-0 top-0 bottom-0 w-[2px]"
                style={{ background: "var(--jj-sage)" }}
              />
              <blockquote>
                <p
                  className="text-2xl md:text-3xl lg:text-[2.1rem] leading-[1.3] tracking-[-0.01em]"
                  style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    color: "var(--jj-charcoal)",
                    fontStyle: "italic",
                  }}
                >
                  &ldquo;Treating the person,
                  <br />
                  not just the symptom.&rdquo;
                </p>
              </blockquote>
            </motion.div>

            {/* Body copy */}
            <motion.p
              variants={fadeUp}
              className="text-base leading-[1.85] mb-6"
              style={{
                color: "var(--jj-stone)",
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 300,
              }}
            >
              We navigate the complexities of ADHD and mood disorders through a
              compassionate lens, integrating evidence-based medicine with a
              deep understanding of your unique life story.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-base leading-[1.85]"
              style={{
                color: "var(--jj-stone)",
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 300,
              }}
            >
              Our practice is rooted in the belief that mental wellness is not
              a destination but a dynamic, ongoing journey—one best navigated
              with a trusted partner who knows your name, your history, and
              your goals.
            </motion.p>
          </motion.div>

          {/* ── Right: Pillars ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col justify-center gap-0"
          >
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                variants={fadeUp}
                className="group py-8 flex gap-7 items-start cursor-default"
                style={{
                  borderTop:
                    i === 0
                      ? "1px solid rgba(141,170,145,0.25)"
                      : "1px solid rgba(141,170,145,0.25)",
                  borderBottom:
                    i === pillars.length - 1
                      ? "1px solid rgba(141,170,145,0.25)"
                      : "none",
                }}
              >
                {/* Index number */}
                <span
                  className="text-[0.68rem] tracking-[0.2em] pt-1 flex-shrink-0 transition-colors duration-300 group-hover:text-sage"
                  style={{
                    color: "var(--jj-sage)",
                    fontFamily: "var(--font-inter), sans-serif",
                    fontWeight: 500,
                  }}
                >
                  0{i + 1}
                </span>

                <div className="flex flex-col gap-2">
                  <h3
                    className="text-base font-medium transition-colors duration-300"
                    style={{
                      color: "var(--jj-charcoal)",
                      fontFamily: "var(--font-inter), sans-serif",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {pillar.title}
                  </h3>
                  <p
                    className="text-sm leading-[1.75]"
                    style={{
                      color: "var(--jj-stone)",
                      fontFamily: "var(--font-inter), sans-serif",
                      fontWeight: 300,
                    }}
                  >
                    {pillar.desc}
                  </p>
                </div>

                {/* Arrow indicator */}
                <motion.span
                  className="ml-auto mt-1 flex-shrink-0 text-base transition-all duration-300 group-hover:translate-x-1"
                  style={{ color: "rgba(141,170,145,0.4)" }}
                >
                  →
                </motion.span>
              </motion.div>
            ))}

            {/* Texture accent block */}
            <motion.div
              variants={fadeUp}
              className="mt-10 w-full aspect-[16/7] texture-stone relative"
              style={{ borderRadius: "2px" }}
            >
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{ background: "rgba(249,248,246,0.0)" }}
              >
                <p
                  className="text-[0.65rem] tracking-[0.28em] uppercase text-center"
                  style={{ color: "rgba(45,52,54,0.3)" }}
                >
                  Linen · River Stone · Clarity
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
