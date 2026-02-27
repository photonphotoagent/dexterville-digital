import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dexterville Digital — Where Ideas Become Reality",
  description:
    "Websites, education platforms, custom software, and more — built with AI at speeds that shouldn't be possible. Dexterville Digital turns ideas into reality.",
  keywords: [
    "web development",
    "education platforms",
    "custom software",
    "AI consulting",
    "Dexterville Digital",
  ],
  openGraph: {
    title: "Dexterville Digital — Where Ideas Become Reality",
    description:
      "Websites, education platforms, custom software, and more — built with AI at speeds that shouldn't be possible.",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
