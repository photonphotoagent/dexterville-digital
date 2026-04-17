"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const services = [
  {
    num: "01",
    icon: (
      <svg width="20" height="20" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="9.5" r="5.5" stroke="currentColor" strokeWidth="1" />
        <path d="M4 26c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <circle cx="7" cy="12" r="3.5" stroke="currentColor" strokeWidth="1" />
        <path d="M1 24c0-3.314 2.686-6 6-6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
    title: "Pediatric & Adolescent Care",
    description:
      "Developmentally sensitive psychiatric evaluation for children and teens navigating ADHD, anxiety, and mood challenges. We partner with families to build integrated care plans that support the whole child.",
    tags: ["Ages 6–17", "Family Involvement", "School Coordination"],
    accent: "var(--jj-sage)",
    accentHex: "#8DAA91",
  },
  {
    num: "02",
    icon: (
      <svg width="20" height="20" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="3" width="22" height="22" rx="2" stroke="currentColor" strokeWidth="1" />
        <path d="M9 14h10M14 9v10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <path d="M8 8l1.5 1.5M20 8l-1.5 1.5M8 20l1.5-1.5M20 20l-1.5-1.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
    title: "Adult ADHD Strategy",
    description:
      "Comprehensive ADHD assessment and individualized management for adults. From diagnostic clarity to executive function strategies, we help you build systems that work with your neurodivergent strengths.",
    tags: ["Comprehensive Eval", "Executive Coaching", "Medication Review"],
    accent: "var(--jj-gold)",
    accentHex: "#C4A46B",
  },
  {
    num: "03",
    icon: (
      <svg width="20" height="20" viewBox="0 0 28 28" fill="none">
        <path d="M14 3C8 3 3 8 3 14s5 11 11 11 11-5 11-11S20 3 14 3z" stroke="currentColor" strokeWidth="1" />
        <path d="M14 8v6l4 2" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <path d="M8 14a6 6 0 0 1 6-6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <circle cx="14" cy="14" r="2" fill="currentColor" />
      </svg>
    ),
    title: "Integrative Medication Management",
    description:
      "Evidence-based psychopharmacology woven into a holistic understanding of your life story. Ongoing optimization, lifestyle integration, and collaborative monitoring for mood disorders and beyond.",
    tags: ["Mood Disorders", "Ongoing Monitoring", "Holistic Integration"],
    accent: "var(--jj-sage-deep)",
    accentHex: "#5C7A60",
  },
];

type Service = (typeof services)[0];

function ServiceRow({
  service,
  index,
  isInView,
  isActive,
  onToggle,
}: {
  service: Service;
  index: number;
  isInView: boolean;
  isActive: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.18 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="relative"
      style={{ borderBottom: "1px solid rgba(141,170,145,0.13)" }}
    >
      {/* Active accent bar */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-[2px]"
        animate={{ scaleY: isActive ? 1 : 0 }}
        transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
        style={{ background: service.accent, transformOrigin: "top", zIndex: 2 }}
      />

      {/* Row header — button */}
      <button
        onClick={onToggle}
        className="w-full text-left flex items-center gap-5 md:gap-7 py-6 px-8 lg:px-12 group"
      >
        <span
          className="text-[0.58rem] tracking-[0.24em] uppercase font-medium flex-shrink-0 w-6"
          style={{ color: "var(--jj-gold)", fontFamily: "var(--font-inter), sans-serif" }}
        >
          {service.num}
        </span>

        <div
          className="w-5 h-[1px] flex-shrink-0 transition-all duration-500"
          style={{ background: isActive ? service.accent : "rgba(141,170,145,0.22)" }}
        />

        <h3
          className="flex-1 transition-colors duration-400"
          style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontSize: "clamp(1rem, 1.7vw, 1.38rem)",
            color: isActive ? "var(--jj-charcoal)" : "rgba(45,52,54,0.62)",
            letterSpacing: "-0.01em",
          }}
        >
          {service.title}
        </h3>

        <span
          className="flex-shrink-0 transition-opacity duration-300"
          style={{ color: service.accent, opacity: isActive ? 0.8 : 0.35 }}
        >
          {service.icon}
        </span>

        {/* Toggle — rotates + into × */}
        <motion.span
          animate={{ rotate: isActive ? 45 : 0 }}
          transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
          className="flex-shrink-0 text-xl leading-none select-none"
          style={{ color: isActive ? service.accent : "rgba(45,52,54,0.28)" }}
        >
          +
        </motion.span>
      </button>

      {/* Expandable detail */}
      <AnimatePresence initial={false}>
        {isActive && (
          <motion.div
            key="detail"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.52, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="px-8 lg:px-12 pb-9 flex flex-col md:flex-row gap-10" style={{ paddingLeft: "calc(2rem + 2.75rem + 1.25rem + 1.25rem)" }}>
              <p
                className="flex-1 text-[0.9rem] leading-[1.9] max-w-lg"
                style={{ color: "var(--jj-stone)", fontFamily: "var(--font-inter), sans-serif", fontWeight: 300 }}
              >
                {service.description}
              </p>

              <div className="flex flex-col gap-2 md:w-48 md:items-end">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[0.54rem] tracking-[0.16em] uppercase px-2.5 py-1"
                    style={{
                      color: service.accent,
                      border: `1px solid ${service.accentHex}32`,
                      background: `${service.accentHex}06`,
                      width: "fit-content",
                    }}
                  >
                    {tag}
                  </span>
                ))}
                <a href="#contact" className="cta-secondary mt-5 md:self-end">
                  <span>Begin Today</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-8%" });
  const [activeIndex, setActiveIndex] = useState(0);

  const toggle = (i: number) => setActiveIndex((prev) => (prev === i ? -1 : i));

  return (
    <section
      ref={ref}
      id="services"
      className="relative"
      style={{ background: "var(--jj-alabaster)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 96% 52%, rgba(196,164,107,0.04) 0%, transparent 55%)",
        }}
      />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-8 lg:px-12 pt-24 md:pt-36 pb-14">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="section-label mb-6"
            >
              Areas of Expertise
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="leading-[1.1] tracking-[-0.025em]"
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                color: "var(--jj-charcoal)",
                fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
              }}
            >
              Specialized Care,{" "}
              <em style={{ fontStyle: "italic", color: "var(--jj-sage)" }}>
                Individualized
              </em>{" "}
              to You
            </motion.h2>
          </div>

          <motion.a
            href="#contact"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.36 }}
            className="cta-secondary self-start md:self-end"
          >
            <span>Schedule a Consultation</span>
          </motion.a>
        </div>
      </div>

      {/* Accordion list */}
      <div
        className="max-w-7xl mx-auto"
        style={{ borderTop: "1px solid rgba(141,170,145,0.13)" }}
      >
        {services.map((service, i) => (
          <ServiceRow
            key={service.num}
            service={service}
            index={i}
            isInView={isInView}
            isActive={activeIndex === i}
            onToggle={() => toggle(i)}
          />
        ))}
      </div>

      {/* Footer note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.65 }}
        className="max-w-7xl mx-auto px-8 lg:px-12 py-9 flex items-center gap-4"
      >
        <div className="w-5 h-[1px]" style={{ background: "var(--jj-sage)" }} />
        <p
          className="text-[0.82rem]"
          style={{ color: "var(--jj-stone)", fontFamily: "var(--font-inter), sans-serif", fontWeight: 300 }}
        >
          Not sure which service fits?{" "}
          <a
            href="#contact"
            style={{ color: "var(--jj-charcoal)", borderBottom: "1px solid rgba(45,52,54,0.22)" }}
          >
            Schedule a free discovery call
          </a>
        </p>
      </motion.div>
    </section>
  );
}
