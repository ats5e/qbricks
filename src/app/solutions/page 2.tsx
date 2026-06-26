import { UseCases } from "@/components/interactive/UseCases";

export const metadata = {
  title: "Solutions — QBricks",
  description: "QBricks solutions for AML, KYC, fraud, contextual MDM, credit risk and ESG risk in regulated financial services.",
};

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-q-black pt-24">
      <UseCases />
    </main>
  );
}
