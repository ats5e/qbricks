import { UseCases } from "@/components/interactive/UseCases";
import { ArchitectureMap } from "@/components/interactive/ArchitectureMap";
import { FeaturesBento } from "@/components/interactive/FeaturesBento";

export const metadata = {
  title: "Solutions | QBricks",
  description: "QBricks solutions for AML, KYC, fraud, contextual MDM, credit risk and ESG risk.",
};

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-q-black pt-24">
      <UseCases />
      <ArchitectureMap />
      <FeaturesBento />
    </main>
  );
}
