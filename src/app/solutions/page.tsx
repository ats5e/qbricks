import { UseCases } from "@/components/interactive/UseCases";
import { ArchitectureMap } from "@/components/interactive/ArchitectureMap";
import { FeaturesBento } from "@/components/interactive/FeaturesBento";

export const metadata = {
  title: "Solutions — QBricks",
  description: "QBricks solutions for AML, KYC, fraud, contextual MDM, credit risk and ESG risk in regulated financial services.",
};

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-q-black pt-24">
      <div className="container-x relative z-10 pt-16 pb-12">
        <h1 className="mx-auto max-w-4xl text-center text-[clamp(3rem,6vw,5.5rem)] font-black leading-[0.95] tracking-[-0.05em] text-white">
          Data foundation solutions for regulated banking.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-center text-xl leading-relaxed text-q-gray-400">
          From AML and KYC to Credit Risk and ESG, deploy governed data products that satisfy both business needs and regulatory scrutiny.
        </p>
      </div>
      <UseCases />
      <ArchitectureMap />
      <FeaturesBento />
    </main>
  );
}
