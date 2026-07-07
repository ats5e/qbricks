import { ArrowRight, CheckCircle2, PlayCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { ComputeCost } from "@/components/interactive/ComputeCost";
import { DataJourneyDiagram } from "@/components/diagrams/DataJourneyDiagram";
import { PosterVideo } from "@/components/resources/PosterVideo";
import { QBricksText } from "@/components/ui/QBricksText";

export const metadata = {
  title: "Why QBricks | QBricks",
  description: "Why one platform, vendor-native tooling and consultancy data fabric programmes do not fix the metadata foundation organisations need.",
};

const differentiators = ["Data Contracts & Data Products", "Single-file deployment", "Agentic + human-in-the-loop", "Ontologies & knowledge graphs", "Local compute", "End-to-end auditability"];

export default function WhyQBricksPage() {
  return (
    <main className="min-h-screen bg-q-black">
      <section className="relative overflow-hidden border-b border-white/5 pt-44 pb-28">
        <div className="absolute inset-0 -z-0">
          <Image src="/assets/bg-cubes-wall.png" alt="" fill priority className="object-cover object-center opacity-30 mix-blend-screen" sizes="100vw" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(232,32,15,0.22),transparent_34%),linear-gradient(to_bottom,rgba(0,0,0,0.55),#000_88%)]" />
        </div>

        <div className="container-x relative z-10 text-center">
          <p className="eyebrow mb-6">The category problem</p>
          <h1 className="mx-auto max-w-5xl text-[clamp(3.2rem,7vw,7rem)] font-black leading-[0.9] tracking-tight text-white">
            “One platform” does not fix your A.I. ready data problem.
          </h1>
          <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-q-gray-300 md:text-2xl">
            <QBricksText /> sits underneath the tools and programmes organisations already run: the governed metadata foundation that makes A.I., analytics and regulatory reporting trustworthy.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {differentiators.map((item) => (
              <div key={item} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-black text-white backdrop-blur-sm">
                <CheckCircle2 className="h-4 w-4 text-emerald-300" /> {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <DataJourneyDiagram variant="manual" />
      <DataJourneyDiagram variant="platform" />

      <section id="ten-reasons" className="section-y relative overflow-hidden border-b border-white/5 bg-q-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(232,32,15,0.16),transparent_42%)]" />

        <div className="container-x relative z-10">
          <div className="mx-auto mb-12 max-w-4xl text-center">
            <p className="eyebrow mb-5 text-q-gray-500">The answer?</p>
            <p className="eyebrow mb-5 inline-flex items-center justify-center gap-2">
              <PlayCircle className="h-4 w-4" />
              Watch
            </p>
            <h2 className="text-[clamp(2.5rem,5vw,5rem)] font-black leading-[0.96] tracking-tight text-white">
              10 reasons why <QBricksText />
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-q-gray-300">
              See how <QBricksText /> turns governed data into an A.I.-ready foundation — no pipelines, no runaway compute, delivered in open, portable formats.
            </p>
          </div>

          <div className="premium-card mx-auto max-w-6xl p-2 shadow-[0_35px_100px_rgba(0,0,0,0.65)] md:p-3">
            <div className="aspect-video overflow-hidden rounded-[1.35rem] bg-black">
              <PosterVideo
                playerSrc="https://player.mux.com/pBStRpuKR00m7Xe1neCepUPvoWhvtOJZhhGq8N5JCOqE?metadata-video-title=QBricks_10reasonswhy&video-title=QBricks_10reasonswhy"
                posterAlt="10 reasons why QBricks video cover"
                posterSrc="/assets/thumb-10-reasons.png"
                videoTitle="10 reasons why QBricks"
              />
            </div>
          </div>
        </div>
      </section>

      <ComputeCost />

      <section className="section-y bg-q-black">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-[clamp(2.2rem,4vw,3.6rem)] font-black leading-[0.98] tracking-tight text-white">
              Ready to fix your data&nbsp;foundation?
            </h2>
            <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-q-brand px-8 py-4 font-black text-white transition-all hover:-translate-y-1 hover:bg-q-brand-ember">
              Request a demo <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
