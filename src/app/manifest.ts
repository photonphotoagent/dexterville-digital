import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Jennifer Jordan, PMHNP-BC — Psychiatric Nurse Practitioner",
    short_name: "Jennifer Jordan PMHNP",
    description:
      "Board-certified psychiatric mental health nurse practitioner in Northern Virginia. ADHD, mood disorders, trauma-informed care.",
    start_url: "/",
    display: "standalone",
    background_color: "#F9F8F6",
    theme_color: "#2D3436",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
