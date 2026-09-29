import { ArrowRight, CheckCircle2, PlayCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { ComputeCost } from "@/components/interactive/ComputeCost";
import { DataJourneyDiagram } from "@/components/diagrams/DataJourneyDiagram";
import { PosterVideo } from "@/components/resources/PosterVideo";
import { QBricksText, brand } from "@/components/ui/QBricksText";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Why QBricks",
  description:
    "Why one platform, vendor-native tooling and consultancy data fabric programmes do not fix the metadata foundation organisations need.",
  path: "/why-qbricks",
  absolute: true,
});

const differentiators = ["Data Contracts & Data Products", "Single-file deployment", "Agentic + human-in-the-loop", "Ontologies & knowledge graphs", "Local compute", "End-to-end auditability"];

export default function WhyQBricksPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative overflow-hidden border-b border-black/5 page-hero pb-[22vw]">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-0 h-[19vw]" aria-hidden="true">
          <Image src="/assets/brand/hero-why.webp" alt="" fill priority className="object-cover object-bottom" sizes="100vw" />
        </div>

        <div className="container-x relative z-10 text-center">
          <p className="eyebrow mb-6">The category problem</p>
          <h1 className="h-display mx-auto max-w-5xl font-black tracking-tight text-q-ink">
            Can “one platform” really fix your AI-ready data problem?
          </h1>
          <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-q-gray-700 md:text-2xl">
            <QBricksText /> sits underneath the tools and programmes organisations already run: the governed metadata foundation that makes AI, analytics and regulatory reporting trustworthy.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {differentiators.map((item) => (
              <div key={item} className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.04] px-5 py-3 text-sm font-black text-q-ink backdrop-blur-sm">
                <CheckCircle2 className="h-4 w-4 text-q-brand-deep" /> {brand(item)}
              </div>
            ))}
          </div>
        </div>
      </section>

      <DataJourneyDiagram variant="manual" />
      <DataJourneyDiagram variant="platform" />

      <section id="ten-reasons" className="section-y relative overflow-hidden border-b border-black/5 bg-white">

        <div className="container-x relative z-10">
          <div className="mx-auto mb-12 max-w-4xl text-center">
            <p className="eyebrow mb-5 text-q-gray-500">The answer?</p>
            <p className="eyebrow mb-5 inline-flex items-center justify-center gap-2">
              <PlayCircle className="h-4 w-4" />
              Watch
            </p>
            <h2 className="h-section font-black tracking-tight text-q-ink">
              10 reasons why <QBricksText />
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-q-gray-700">
              See how <QBricksText /> turns governed data into an AI-ready foundation, no pipelines, no runaway compute, delivered in open, portable formats.
            </p>
          </div>

          <div className="premium-card mx-auto max-w-6xl p-2 shadow-[0_35px_100px_rgba(0,0,0,0.195)] md:p-3">
            <div className="aspect-video overflow-hidden rounded-3xl bg-white">
              <PosterVideo
                playerSrc="https://player.mux.com/oDXZTXbzTpzcA28orBxyGhTJxouFBatpFta3nl023aYs?metadata-video-title=QBricks+Ten+Reasons+Why&video-title=QBricks+Ten+Reasons+Why"
                posterAlt="10 reasons why QBricks video cover"
                posterSrc="/assets/brand/poster-10-reasons.webp"
                videoTitle="10 reasons why QBricks"
              />
            </div>
          </div>
        </div>
      </section>

      <ComputeCost />

      <section className="section-y bg-white">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="h-section font-black tracking-tight text-q-ink">
              Ready to fix your data&nbsp;foundation?
            </h2>
            <Link href="/contact" className="btn-primary mt-8">
              Request a demo <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
