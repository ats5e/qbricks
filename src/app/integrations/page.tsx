import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { EcosystemDiagram } from "@/components/diagrams/EcosystemDiagram";
import { DualFlowDiagram } from "@/components/diagrams/DualFlowDiagram";
import { Integrations } from "@/components/interactive/Integrations";
import { PlatformSpotlights } from "@/components/interactive/PlatformSpotlights";
import { QBricksText } from "@/components/ui/QBricksText";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Integrations",
  description:
    "QBricks works with Databricks, Microsoft Fabric, Snowflake and your own on-premise databases across modern data stacks.",
  path: "/integrations",
});



export default function IntegrationsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative overflow-hidden border-b border-black/5 pt-44 pb-[22vw]">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-0 h-[19vw]" aria-hidden="true">
          <Image src="/assets/brand/hero-integrations.webp" alt="" fill priority className="object-cover object-bottom" sizes="100vw" />
        </div>

        <div className="container-x relative z-10 text-center">
          <p className="eyebrow mb-6">Integrations</p>
          <h1 className="h-display mx-auto max-w-5xl font-black tracking-tight text-q-ink">
            Works with the platforms your organisation already runs on.
          </h1>
          <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-q-gray-700 md:text-2xl">
            Cloud-agnostic data governance for Databricks, Microsoft Fabric, Snowflake and your own on-premise databases.
            <br />
            <QBricksText /> is built to fit your modern data stack perfectly.
          </p>
        </div>
      </section>

      <EcosystemDiagram />

      <Integrations showDescriptions hideHeading />

      <PlatformSpotlights />

      <DualFlowDiagram />

      <div className="container-x relative z-10 pb-20 pt-10 text-center">
        <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-q-brand px-8 py-4 font-black text-white transition-all hover:-translate-y-1 hover:bg-q-brand-ember">
          Request a demo <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </main>
  );
}
