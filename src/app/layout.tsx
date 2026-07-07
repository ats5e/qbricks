import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const siteDescription =
  "QBricks turns systems of record into trusted, A.I.-ready data products in hours. Contract-enforced governance, agentic metadata and local compute, delivered in open, portable formats. Built for your organisation, with financial-crime use cases like AML and KYC. Works with Databricks, Microsoft Fabric, Snowflake or your own database.";

export const metadata: Metadata = {
  metadataBase: new URL("https://qbricks.ai"),
  title: {
    default: "QBricks, Governed, A.I.-Ready Data Without Pipelines | Infinium",
    template: "%s | QBricks",
  },
  description: siteDescription,
  openGraph: {
    type: "website",
    siteName: "QBricks",
    title: "QBricks — No more data pipelines.",
    description: "Governed, A.I.-ready data products — in hours, not years.",
    url: "https://qbricks.ai",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "QBricks — No more data pipelines." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "QBricks — No more data pipelines.",
    description: "Governed, A.I.-ready data products — in hours, not years.",
    images: ["/og-image.png"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "QBricks",
  legalName: "Infinium Consulting B.V.",
  url: "https://qbricks.ai",
  logo: "https://qbricks.ai/assets/qbricks-logo.png",
  email: "sales@infinium.consulting",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Edge Olympic, Fred. Roeskestraat 115",
    addressLocality: "Amsterdam",
    addressCountry: "NL",
  },
  description: "A.I.-enabled metadata management platform delivering governed, contract-enforced data products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} dark antialiased`}>
      <body className="relative bg-q-black font-sans text-q-gray-200 selection:bg-q-brand/30 selection:text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only z-[100] rounded-full bg-q-brand px-6 py-3 font-black text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <svg className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.025] mix-blend-overlay" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
        <Navbar />
        <div id="main-content">{children}</div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
