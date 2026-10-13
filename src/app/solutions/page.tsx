import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { UseCases } from "@/components/interactive/UseCases";
import { brand } from "@/components/ui/QBricksText";
import { pageMeta } from "@/lib/seo";
import { useCases } from "./data-products/data";

export const metadata = pageMeta({
  title: "Solutions",
  description:
    "QBricks solutions for AML, perpetual KYC and AMLR compliance, KYC, fraud, contextual MDM, credit risk and ESG risk.",
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
            AML, perpetual KYC and AMLR, fraud, contextual MDM, credit and ESG risk, every solution inherits the same trusted, contract-enforced foundation.
          </p>
        </div>
      </section>

      <UseCases />

      <section className="border-b border-black/5 bg-white section-y-sm">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
            <div>
              <p className="eyebrow mb-3">Data products</p>
              <h2 className="h-sub">Five banking use cases, and the data products behind them.</h2>
              <p className="mt-5 leading-relaxed text-q-gray-700">
                One level deeper: the five use cases where governed data products return most for a bank, ranked by value, with sample data products for each.
              </p>
              <Link href="/solutions/data-products" className="btn-primary mt-8">
                See the data products <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
            <ol className="divide-y divide-black/10 border-y border-black/10 lg:mt-1">
              {useCases.map((uc) => (
                <li key={uc.id}>
                  <Link href={`/solutions/data-products#${uc.id}`} className="group grid grid-cols-[2.5rem_minmax(0,1fr)_auto] items-center gap-x-3 py-4">
                    <span className="text-xl font-black leading-none tracking-tight text-q-brand-ember">{uc.number}</span>
                    <span className="font-black leading-tight tracking-tight text-q-ink transition-colors group-hover:text-q-brand-deep">{brand(uc.title)}</span>
                    <ArrowRight className="h-4 w-4 text-q-gray-400 transition-transform group-hover:translate-x-0.5 group-hover:text-q-brand-deep" />
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </main>
  );
}
