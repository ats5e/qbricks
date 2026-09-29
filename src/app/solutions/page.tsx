import { UseCases } from "@/components/interactive/UseCases";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Solutions",
  description:
    "QBricks solutions for AML, KYC, fraud, contextual MDM, credit risk and ESG risk.",
  path: "/solutions",
});

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <section className="border-b border-black/5 bg-white pb-4 pt-20 lg:pt-24">
        <div className="container-x text-center">
          <p className="eyebrow mb-5">Solutions</p>
          <h1 className="h-display mx-auto max-w-4xl font-black tracking-tight text-q-ink">
            Governed data products for the use cases that matter.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-q-gray-700">
            AML, KYC, fraud, contextual MDM, credit and ESG risk, every solution inherits the same trusted, contract-enforced foundation.
          </p>
        </div>
      </section>

      <UseCases />
    </main>
  );
}
