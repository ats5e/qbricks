import { UseCases } from "@/components/interactive/UseCases";
import { ArchitectureMap } from "@/components/interactive/ArchitectureMap";
import { FeaturesBento } from "@/components/interactive/FeaturesBento";
import Image from "next/image";

export const metadata = {
  title: "Solutions — QBricks",
  description: "QBricks solutions for AML, KYC, fraud, contextual MDM, credit risk and ESG risk in regulated financial services.",
};

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-q-black pt-24">
      <section className="relative overflow-hidden border-b border-white/5 pt-16 pb-12">
        <div className="absolute inset-0 -z-0">
          <Image src="/assets/bg-cubes-cluster.png" alt="" fill priority className="object-cover object-center opacity-30 mix-blend-screen" sizes="100vw" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(232,32,15,0.22),transparent_34%),linear-gradient(to_bottom,rgba(0,0,0,0.5),#000_88%)]" />
        </div>
        <div className="container-x relative z-10">
          <h1 className="mx-auto max-w-4xl text-center text-[clamp(3rem,6vw,5.5rem)] font-black leading-[0.95] tracking-[-0.05em] text-white">
            Data foundation solutions for regulated financial services.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-center text-xl leading-relaxed text-q-gray-400">
            From AML and KYC to Credit Risk and ESG, deploy governed data products that satisfy both business needs and regulatory scrutiny.
          </p>
        </div>
      </section>
      <UseCases />
      <ArchitectureMap />
      <FeaturesBento />
    </main>
  );
}
