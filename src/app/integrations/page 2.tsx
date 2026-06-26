import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { ArchitectureMap } from "@/components/interactive/ArchitectureMap";
import { Integrations } from "@/components/interactive/Integrations";

export const metadata = {
  title: "Integrations — QBricks",
  description: "QBricks works with Databricks, Microsoft Fabric, Snowflake and Quantexa across modern financial-services data stacks.",
};



export default function IntegrationsPage() {
  return (
    <main className="min-h-screen bg-q-black">
      <section className="relative overflow-hidden border-b border-white/5 pt-44 pb-28">
        <div className="absolute inset-0 -z-0">
          <Image src="/assets/pixels-dissolve.png" alt="" fill priority className="object-cover object-center opacity-38 mix-blend-screen" sizes="100vw" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(232,32,15,0.22),transparent_34%),linear-gradient(to_bottom,rgba(0,0,0,0.55),#000_88%)]" />
        </div>

        <div className="container-x relative z-10 text-center">
          <p className="eyebrow mb-6">Ecosystem</p>
          <h1 className="mx-auto max-w-5xl text-[clamp(3.2rem,7vw,7rem)] font-black leading-[0.9] tracking-[-0.075em] text-white">
            Built to fit the modern financial-services data stack.
          </h1>
          <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-q-gray-300 md:text-2xl">
            Cloud-agnostic metadata governance for Databricks, Microsoft Fabric, Snowflake and Quantexa-enabled data products.
          </p>
        </div>
      </section>

      <Integrations showDescriptions />
      
      <div className="container-x relative z-10 pb-20 pt-10 text-center">
        <a href="mailto:sales@infinium.consulting?subject=QBricks integrations demo" className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-black text-black transition-all hover:-translate-y-1 hover:bg-q-gray-200">
          Tell us your stack <ArrowRight className="h-5 w-5" />
        </a>
      </div>

      <ArchitectureMap />
    </main>
  );
}
