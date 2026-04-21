"use client";

const items = [
  "Georgetown University Alumna",
  "PMHNP-BC Board Certified",
  "17+ Years of Clinical Excellence",
  "Trauma-Informed Care",
  "ADHD & Mood Disorder Specialist",
  "Pediatric & Adult Psychiatry",
  "Northern Virginia",
  "Evidence-Based Medicine",
  "Integrative Wellness",
];

const doubled = [...items, ...items];

export default function CredentialTicker() {
  return (
    <div
      className="overflow-hidden py-5 relative"
      style={{
        background: "var(--jj-charcoal)",
        borderTop: "1px solid rgba(249,248,246,0.06)",
        borderBottom: "1px solid rgba(249,248,246,0.06)",
      }}
    >
      {/* Gradient fade edges */}
      <div className="ticker-fade-left" />
      <div className="ticker-fade-right" />

      <div className="ticker-track">
        {doubled.map((item, i) => (
          <div
            key={i}
            className="flex items-center flex-shrink-0"
            style={{ gap: "2.5rem" }}
          >
            <span
              className="text-[0.62rem] tracking-[0.24em] uppercase whitespace-nowrap ticker-item"
              style={{
                color: i % items.length === 2
                  ? "var(--jj-gold)"
                  : "rgba(249,248,246,0.35)",
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 400,
              }}
            >
              {item}
            </span>
            <span
              className="ticker-diamond"
              style={{
                color: "var(--jj-sage)",
                fontSize: "0.35rem",
              }}
            >
              ◆
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
