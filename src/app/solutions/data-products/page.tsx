import Image from "next/image";
import { FocusAreaClose, FocusAreaRanking, FocusAreaSections } from "@/components/interactive/FocusAreas";
import { QBricksText } from "@/components/ui/QBricksText";
import { pageMeta } from "@/lib/seo";

export const metadata = {
  ...pageMeta({
    title: "Data products by focus area",
    description:
      "Five financial services focus areas, ranked by value, and the contracted data products QBricks builds for each: risk data and regulatory reporting, AML, credit risk, Customer 360 and reference data.",
    path: "/solutions/data-products",
  }),
  robots: { index: false, follow: false },
};

export default function DataProductsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative overflow-hidden border-b border-black/5 page-hero pb-[22vw]">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-0 h-[19vw]" aria-hidden="true">
          <Image src="/assets/brand/hero-why.webp" alt="" fill priority className="object-cover object-bottom" sizes="100vw" />
        </div>

        <div className="container-x relative z-10 text-center">
          <p className="eyebrow mb-6">Data products for financial services</p>
          <h1 className="h-display mx-auto max-w-5xl font-black tracking-tight text-q-ink">
            Five focus areas. One data product foundation.
          </h1>
          <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-q-gray-700 md:text-2xl">
            From regulatory reporting to revenue, each area is a set of contracted data products that <QBricksText /> builds once and every engine, model and report reuses.
          </p>
          <div className="mx-auto mt-12 grid max-w-3xl grid-cols-3 gap-3">
            {[
              ["5", "focus areas"],
              ["45", "disciplines"],
              ["180", "data products"],
            ].map(([n, label]) => (
              <div key={label} className="rounded-2xl border border-black/10 bg-white/80 px-4 py-5 backdrop-blur-sm">
                <div className="text-3xl font-black tracking-tight text-q-ink md:text-4xl">{n}</div>
                <div className="mt-1 text-sm font-semibold text-q-gray-600">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FocusAreaRanking />
      <FocusAreaSections />
      <FocusAreaClose />
    </main>
  );
}
