import CostLines from "./CostLines";
import Calculator from "./Calculator";
import { QBricksText } from "@/components/ui/QBricksText";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Where QBricks takes cost out",
  description:
    "An illustrative cost calculator: model where QBricks takes cost out of your data estate on your own numbers.",
  path: "/resources/cost-calculator",
  absolute: true,
});

export default function CostCalculatorPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden page-hero pb-16 md:pb-24">
        <div className="absolute inset-0 -z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.2),#fff_88%)]" />
        </div>

        <div className="container-x relative z-10 text-center">
          <p className="eyebrow mb-6">Illustrative cost calculator</p>
          <h1 className="h-display mx-auto max-w-5xl font-black tracking-tight text-q-ink">
            Re-allocate your data remediation team to more rewarding activities
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-q-gray-700 md:text-2xl">
            Model the saving on your own numbers across the four cost lines an organisation carries to keep data fit for use.
          </p>
          <p className="mx-auto mt-6 max-w-2xl rounded-2xl border border-black/10 bg-black/[0.04] px-6 py-4 text-sm font-bold leading-relaxed text-q-gray-700">
            These numbers are indicative and illustrative only. Actual results may vary depending on a client&apos;s individual environment.
          </p>
        </div>
      </section>

      {/* Cost Lines Section */}
      <section className="section-y-sm bg-white border-t border-black/5">
        <div className="container-x">
          <div className="mb-12 max-w-3xl">
            <h2 className="h-sub">Where <QBricksText /> takes cost out</h2>
            <p className="mt-4 text-lg text-q-gray-600">
              Four cost lines an organisation carries to keep data fit for use, removed or collapsed.
            </p>
          </div>
          <CostLines />
        </div>
      </section>

      {/* Calculator & CTA Section */}
      <section className="section-y bg-white border-t border-black/5">
        <div className="container-x">
          <Calculator />
        </div>
      </section>
    </main>
  );
}
