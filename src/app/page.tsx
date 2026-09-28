import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Hero } from "@/components/interactive/Hero";
import { Metrics } from "@/components/interactive/Metrics";
import { Integrations } from "@/components/interactive/Integrations";
import { ProofBand } from "@/components/interactive/ProofBand";

export default function Home() {
  return (
    <main className="min-h-screen bg-q-black selection:bg-q-brand/30 selection:text-white">
      <Hero />
      <Metrics />
      <ProofBand />
      <Integrations />

      <section id="demo" className="section-y relative border-t border-white/5 bg-q-black">
        <div className="container-x relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="h-section">
              Bring Us A Representative Workload
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-q-gray-300">
              We will show you where QBricks helps, where it does not, and what adoption would require.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact" className="group inline-flex items-center justify-center gap-2 rounded-full bg-q-brand px-8 py-4 text-base font-black text-white transition-all hover:-translate-y-1 hover:bg-q-brand-ember">
                Evaluate your workload <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/product" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.055] px-8 py-4 text-base font-black text-white transition-all hover:-translate-y-1 hover:bg-white/[0.08]">
                <CheckCircle2 className="h-5 w-5 text-emerald-300" />
                Explore the platform
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
