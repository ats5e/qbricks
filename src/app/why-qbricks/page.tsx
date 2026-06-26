import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { Metrics } from "@/components/interactive/Metrics";

export const metadata = {
  title: "Why QBricks — QBricks",
  description: "Why one platform, native tooling and consultancy data fabric programmes do not fix the metadata foundation banks need.",
};

const differentiators = ["Data Contracts & Data Products", "Single-file deployment", "Agentic + human-in-the-loop", "Ontologies & knowledge graphs", "Quantexa Trust Score", "End-to-end auditability"];

export default function WhyQBricksPage() {
  return (
    <main className="min-h-screen bg-q-black">
      <section className="relative overflow-hidden border-b border-white/5 pt-44 pb-28">
        <div className="absolute inset-0 -z-0">
          <Image src="/assets/bricks-2.png" alt="" fill priority className="object-cover object-center opacity-32 mix-blend-screen grayscale" sizes="100vw" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(232,32,15,0.22),transparent_34%),linear-gradient(to_bottom,rgba(0,0,0,0.55),#000_88%)]" />
        </div>

        <div className="container-x relative z-10 text-center">
          <p className="eyebrow mb-6">The category problem</p>
          <h1 className="mx-auto max-w-5xl text-[clamp(3.2rem,7vw,7rem)] font-black leading-[0.9] tracking-[-0.075em] text-white">
            “One platform” does not fix your metadata problem.
          </h1>
          <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-q-gray-300 md:text-2xl">
            <QBricksText /> sits underneath the tools and programmes banks already run: the governed metadata foundation that makes AI, analytics and regulatory reporting trustworthy.
          </p>
        </div>
      </section>

      <Metrics />

      <section className="section-y bg-q-black">
        <div className="container-x">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-[clamp(2.2rem,4vw,4rem)] font-black tracking-[-0.05em] text-white">The <QBricksText /> differentiators</h2>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {differentiators.map((item) => (
                <div key={item} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-black text-white">
                  <CheckCircle2 className="h-4 w-4 text-emerald-300" /> {item}
                </div>
              ))}
            </div>
            <a href="mailto:sales@infinium.consulting?subject=QBricks demo request" className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-black text-black transition-all hover:-translate-y-1 hover:bg-q-gray-200">
              Request a demo <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
\nimport { QBricksText } from "@/components/ui/QBricksText";
