import { QBricksText } from "@/components/ui/QBricksText";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/interactive/Hero";
import { Metrics } from "@/components/interactive/Metrics";
import { Integrations } from "@/components/interactive/Integrations";
import { ProofBand } from "@/components/interactive/ProofBand";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "QBricks | Governed, AI-Ready Data Without Pipelines",
  description:
    "QBricks turns systems of record into governed, AI-ready data products in hours. Works with Databricks, Microsoft Fabric, Snowflake or your own database.",
  path: "/",
  absolute: true,
});

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-q-brand/30 selection:text-q-ink">
      <Hero />
      <Metrics />
      <ProofBand />
      <Integrations />

      <section id="demo" className="section-y relative border-t border-black/5 bg-white">
        <div className="container-x relative z-10">
          <div className="grid items-center gap-10 overflow-hidden rounded-[2rem] border border-black/[0.08] bg-white lg:grid-cols-[1fr_1.05fr] lg:gap-0">
            <div className="px-7 pt-10 md:px-12 lg:py-16">
              <h2 className="h-section text-[clamp(1.55rem,6.4vw,2rem)] lg:text-[2.5rem]">
                Bring Us A Representative Workload
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-q-gray-700">
                We will show you where <QBricksText /> helps, where it does not, and what adoption would require.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link href="/contact" className="group inline-flex items-center justify-center gap-2 rounded-full bg-q-brand px-8 py-4 text-base font-black text-white transition-all hover:-translate-y-1 hover:bg-q-brand-ember">
                  Evaluate your workload <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link href="/product" className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-black/[0.055] px-8 py-4 text-base font-black text-q-ink transition-all hover:-translate-y-1 hover:bg-black/[0.08]">
                  Explore the platform
                </Link>
              </div>
            </div>
            <div className="relative aspect-[3/2] lg:aspect-auto lg:h-full lg:min-h-[440px]">
              <Image src="/assets/brand/resources/wp-new-paradigm.webp" alt="" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
