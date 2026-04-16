import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Jennifer Jordan, PMHNP-BC | Psychiatric Mental Health Nurse Practitioner",
  description:
    "Board-certified psychiatric nurse practitioner specializing in ADHD, mood disorders, and holistic mental wellness in Northern Virginia. Evidence-based care with a compassionate, trauma-informed approach.",
  keywords: [
    "PMHNP",
    "psychiatric nurse practitioner",
    "ADHD treatment",
    "mood disorders",
    "mental health Northern Virginia",
    "Jennifer Jordan",
    "medication management",
  ],
  openGraph: {
    title: "Jennifer Jordan, PMHNP-BC | Psychiatric Wellness",
    description:
      "A sanctuary for psychiatric evaluation, evidence-based medication management, and holistic mental wellness in Northern Virginia.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
