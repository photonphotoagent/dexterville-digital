import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px 100px",
          background: "linear-gradient(135deg, #2D3436 0%, #3D4446 100%)",
          fontFamily: "Georgia, serif",
        }}
      >
        {/* Top accent line */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "2px",
              background: "#8DAA91",
            }}
          />
          <span
            style={{
              color: "#8DAA91",
              fontSize: "14px",
              letterSpacing: "0.25em",
              textTransform: "uppercase" as const,
            }}
          >
            Northern Virginia &middot; Psychiatric Wellness
          </span>
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: "72px",
            color: "#F9F8F6",
            lineHeight: 1.1,
            marginBottom: "8px",
            letterSpacing: "-0.02em",
          }}
        >
          Jennifer Jordan
        </div>

        {/* Credential */}
        <div
          style={{
            fontSize: "24px",
            color: "#C4A46B",
            letterSpacing: "0.15em",
            textTransform: "uppercase" as const,
            marginBottom: "40px",
          }}
        >
          PMHNP-BC
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: "22px",
            color: "rgba(249,248,246,0.55)",
            lineHeight: 1.6,
            maxWidth: "700px",
            marginBottom: "40px",
          }}
        >
          Board-certified psychiatric nurse practitioner. Specializing in ADHD,
          mood disorders, and trauma-informed integrative care.
        </div>

        {/* Bottom stats */}
        <div
          style={{
            display: "flex",
            gap: "48px",
            borderTop: "1px solid rgba(249,248,246,0.1)",
            paddingTop: "24px",
          }}
        >
          {[
            { val: "17+", label: "Years Experience" },
            { val: "2,000+", label: "Patients Served" },
            { val: "Georgetown", label: "University Alumna" },
          ].map((s) => (
            <div key={s.label} style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <span style={{ color: "#F9F8F6", fontSize: "20px" }}>{s.val}</span>
              <span
                style={{
                  color: "rgba(249,248,246,0.35)",
                  fontSize: "11px",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase" as const,
                }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
