import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/interactive/Hero";
import { Metrics } from "@/components/interactive/Metrics";
import { Agentic } from "@/components/interactive/Agentic";
import { FeaturesBento } from "@/components/interactive/FeaturesBento";
import { DeveloperExperience } from "@/components/interactive/DeveloperExperience";
import { Integrations } from "@/components/interactive/Integrations";
import { ArchitectureMap } from "@/components/interactive/ArchitectureMap";
import { UseCases } from "@/components/interactive/UseCases";

export default function Home() {
  return (
    <main className="min-h-screen bg-q-black selection:bg-q-brand/30 selection:text-white">
      <Hero />
      <Metrics />
      <Agentic />
      <FeaturesBento />
      <DeveloperExperience />
      <Integrations />
      <ArchitectureMap />
      <UseCases />

      <section id="demo" className="section-y relative overflow-hidden border-t border-white/5 bg-q-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(232,32,15,0.22),transparent_42%),linear-gradient(to_bottom,rgba(255,255,255,0.035),#000)]" />
        <div className="container-x relative z-10">
          <div className="premium-card mx-auto max-w-4xl p-8 text-center md:p-10">
            <h2 className="flex flex-wrap items-center justify-center gap-3 text-[clamp(2.2rem,4vw,4rem)] font-black leading-[0.95] tracking-[-0.06em] text-white sm:gap-4 lg:gap-6">
              See record-to-report in minutes.
            </h2>
            <p className="mx-auto mt-7 max-w-3xl text-xl leading-relaxed text-q-gray-300">
              A focused demo mapped to one of your real use cases. We will show single-file deployment, governed Data Contracts and the audit trail that comes with them.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact" className="group inline-flex items-center justify-center gap-2 rounded-full bg-q-brand px-8 py-4 text-base font-black text-white transition-all hover:-translate-y-1 hover:bg-q-brand-ember">
                Request a demo <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
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
