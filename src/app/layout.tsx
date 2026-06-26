import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "QBricks – Governed, AI-Ready Data Without Pipelines | Infinium",
  description: "QBricks turns systems of record into trusted, AI-ready data products in hours. Contract-enforced governance, agentic metadata, local compute – no Spark, no lock-in. Built for financial crime. Works with Databricks, Fabric and Snowflake.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} dark antialiased`}>
      <body className="relative bg-q-black font-sans text-q-gray-200 selection:bg-q-brand/30 selection:text-white tracking-tight">
        <svg className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.025] mix-blend-overlay" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
