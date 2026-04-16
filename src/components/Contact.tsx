"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

const services = [
  "Pediatric & Adolescent Care",
  "Adult ADHD Strategy",
  "Integrative Medication Management",
  "Not sure — I'd like guidance",
];

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-8%" });
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="relative py-24 md:py-36 overflow-hidden"
      style={{ background: "var(--jj-alabaster)" }}
    >
      {/* Ambient gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 15% 60%, rgba(141,170,145,0.07) 0%, transparent 55%), radial-gradient(ellipse at 85% 30%, rgba(200,184,162,0.06) 0%, transparent 50%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[44%_56%] gap-16 lg:gap-20">

          {/* ── Left: Intro ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col justify-center"
          >
            <motion.div variants={fadeUp} className="section-label mb-8">
              Get in Touch
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl lg:text-[2.8rem] leading-[1.12] tracking-[-0.022em] mb-7"
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                color: "var(--jj-charcoal)",
              }}
            >
              Begin Your Path to{" "}
              <em style={{ fontStyle: "italic", color: "var(--jj-sage)" }}>
                Clarity
              </em>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-base leading-[1.85] mb-10"
              style={{
                color: "var(--jj-stone)",
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 300,
              }}
            >
              Whether you&apos;re seeking a first evaluation or looking to refine an
              existing care plan, we welcome you. Share a little about yourself
              and we&apos;ll be in touch within one business day.
            </motion.p>

            {/* Info points */}
            <motion.div variants={fadeUp} className="flex flex-col gap-5 mb-10">
              {[
                { label: "Response Time", value: "Within 1 business day" },
                { label: "Location", value: "Northern Virginia" },
                { label: "Telehealth", value: "Available statewide (VA)" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div
                    className="w-5 h-[1px] flex-shrink-0 mt-[0.65rem]"
                    style={{ background: "var(--jj-sage)" }}
                  />
                  <div>
                    <p
                      className="text-[0.62rem] tracking-[0.18em] uppercase mb-0.5"
                      style={{ color: "var(--jj-sage)" }}
                    >
                      {item.label}
                    </p>
                    <p
                      className="text-sm"
                      style={{
                        color: "var(--jj-charcoal)",
                        fontFamily: "var(--font-inter), sans-serif",
                        fontWeight: 400,
                      }}
                    >
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Patient Portal CTA */}
            <motion.div
              variants={fadeUp}
              className="p-6"
              style={{
                background: "var(--jj-cream)",
                border: "1px solid rgba(141,170,145,0.2)",
              }}
            >
              <p
                className="text-[0.62rem] tracking-[0.2em] uppercase mb-2"
                style={{ color: "var(--jj-sage)" }}
              >
                Existing Patients
              </p>
              <p
                className="text-sm leading-relaxed mb-4"
                style={{
                  color: "var(--jj-stone)",
                  fontFamily: "var(--font-inter), sans-serif",
                  fontWeight: 300,
                }}
              >
                Secure access to your records, messaging, and appointments is
                coming soon through our integrated patient portal.
              </p>
              <span className="portal-btn inline-flex">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                  style={{ opacity: 0.6 }}
                >
                  <rect
                    x="0.5"
                    y="3"
                    width="12"
                    height="9.5"
                    rx="1"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                  <path
                    d="M4 3V2a2.5 2.5 0 0 1 5 0v1"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                </svg>
                <span>Patient Portal (Coming Soon)</span>
              </span>
            </motion.div>
          </motion.div>

          {/* ── Right: Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.9,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -10 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-8"
                >
                  {/* Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-1">
                      <label
                        htmlFor="name"
                        className="text-[0.6rem] tracking-[0.22em] uppercase"
                        style={{
                          color:
                            focused === "name"
                              ? "var(--jj-sage)"
                              : "var(--jj-stone)",
                          transition: "color 0.3s ease",
                        }}
                      >
                        Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="jj-input"
                        placeholder="Your name"
                        value={form.name}
                        onChange={handleChange}
                        onFocus={() => setFocused("name")}
                        onBlur={() => setFocused(null)}
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label
                        htmlFor="email"
                        className="text-[0.6rem] tracking-[0.22em] uppercase"
                        style={{
                          color:
                            focused === "email"
                              ? "var(--jj-sage)"
                              : "var(--jj-stone)",
                          transition: "color 0.3s ease",
                        }}
                      >
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="jj-input"
                        placeholder="you@email.com"
                        value={form.email}
                        onChange={handleChange}
                        onFocus={() => setFocused("email")}
                        onBlur={() => setFocused(null)}
                      />
                    </div>
                  </div>

                  {/* Phone + Service */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-1">
                      <label
                        htmlFor="phone"
                        className="text-[0.6rem] tracking-[0.22em] uppercase"
                        style={{
                          color:
                            focused === "phone"
                              ? "var(--jj-sage)"
                              : "var(--jj-stone)",
                          transition: "color 0.3s ease",
                        }}
                      >
                        Phone (optional)
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        className="jj-input"
                        placeholder="(703) 000-0000"
                        value={form.phone}
                        onChange={handleChange}
                        onFocus={() => setFocused("phone")}
                        onBlur={() => setFocused(null)}
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label
                        htmlFor="service"
                        className="text-[0.6rem] tracking-[0.22em] uppercase"
                        style={{
                          color:
                            focused === "service"
                              ? "var(--jj-sage)"
                              : "var(--jj-stone)",
                          transition: "color 0.3s ease",
                        }}
                      >
                        Area of Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        className="jj-input"
                        value={form.service}
                        onChange={handleChange}
                        onFocus={() => setFocused("service")}
                        onBlur={() => setFocused(null)}
                        style={{
                          color: form.service
                            ? "var(--jj-charcoal)"
                            : "var(--jj-stone)",
                        }}
                      >
                        <option value="" disabled>
                          Select a service
                        </option>
                        {services.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="message"
                      className="text-[0.6rem] tracking-[0.22em] uppercase"
                      style={{
                        color:
                          focused === "message"
                            ? "var(--jj-sage)"
                            : "var(--jj-stone)",
                        transition: "color 0.3s ease",
                      }}
                    >
                      Tell Us About Yourself *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="jj-textarea"
                      placeholder="Share what brings you here today — as much or as little as you're comfortable with."
                      value={form.message}
                      onChange={handleChange}
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused(null)}
                    />
                  </div>

                  {/* Disclaimer */}
                  <p
                    className="text-xs leading-relaxed"
                    style={{
                      color: "var(--jj-stone)",
                      fontFamily: "var(--font-inter), sans-serif",
                      fontWeight: 300,
                      opacity: 0.7,
                    }}
                  >
                    This form is not a crisis line. If you are experiencing a
                    psychiatric emergency, please call 988 or go to your nearest
                    emergency room.
                  </p>

                  {/* Submit */}
                  <button type="submit" className="cta-primary self-start">
                    <span>Send Message</span>
                    <span style={{ opacity: 0.7 }}>→</span>
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-start justify-center min-h-[400px] gap-6 py-12"
                >
                  <div
                    className="w-12 h-12 flex items-center justify-center"
                    style={{
                      border: "1px solid var(--jj-sage)",
                      borderRadius: "50%",
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      style={{ color: "var(--jj-sage)" }}
                    >
                      <path
                        d="M4 10l5 5 7-7"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3
                      className="text-2xl mb-3"
                      style={{
                        fontFamily: "var(--font-playfair), Georgia, serif",
                        color: "var(--jj-charcoal)",
                      }}
                    >
                      Thank you, {form.name.split(" ")[0]}.
                    </h3>
                    <p
                      className="text-base leading-relaxed max-w-sm"
                      style={{
                        color: "var(--jj-stone)",
                        fontFamily: "var(--font-inter), sans-serif",
                        fontWeight: 300,
                      }}
                    >
                      Your message has been received. We&apos;ll be in touch within
                      one business day to schedule your consultation.
                    </p>
                  </div>
                  <div
                    className="w-12 h-[1px]"
                    style={{ background: "var(--jj-sage-border)" }}
                  />
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm(initialForm);
                    }}
                    className="cta-secondary"
                  >
                    <span>Send Another Message</span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
