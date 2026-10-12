import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { QBricksText, brand } from "@/components/ui/QBricksText";
import { pageMeta } from "@/lib/seo";
import { focusAreas } from "./data";

export const metadata = {
  ...pageMeta({
    title: "Data products by focus area",
    description:
      "Five financial services focus areas, ranked by value, with the contracted data products QBricks builds for each: risk data and regulatory reporting, AML, credit risk, Customer 360 and reference data.",
    path: "/solutions/data-products",
  }),
  robots: { index: false, follow: false },
};

export default function DataProductsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-black/5 page-hero pb-[22vw]">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-0 h-[19vw]" aria-hidden="true">
          <Image src="/assets/brand/hero-about.webp" alt="" fill priority className="object-cover object-bottom" sizes="100vw" />
        </div>
        <div className="container-x relative z-10 text-center">
          <p className="eyebrow mb-6">Solutions for financial services</p>
          <h1 className="h-display mx-auto max-w-4xl font-black tracking-tight text-q-ink">
            Five focus areas, ranked by value.
          </h1>
          <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-q-gray-700 md:text-2xl">
            The data products banks need most, built once by <QBricksText /> and reused by every engine, model and report.
          </p>
        </div>
      </section>

      {/* The Top 5, as a ranked list */}
      <section className="border-b border-black/5 bg-white section-y-sm">
        <div className="container-x">
          <div className="mx-auto max-w-5xl">
            <p className="eyebrow mb-3">The Top 5</p>
            <h2 className="h-sub max-w-3xl">Beyond KYC: five data products, ranked by value.</h2>

            <ol className="mt-12 divide-y divide-black/10 border-y border-black/10">
              {focusAreas.map((area) => (
                <li key={area.id}>
                  <Link
                    href={`#${area.id}`}
                    className="group grid gap-x-8 gap-y-3 py-7 md:grid-cols-[3.5rem_1fr_1fr_auto] md:items-center"
                  >
                    <span className="text-3xl font-black leading-none tracking-tight text-q-brand-ember">{area.number}</span>
                    <div>
                      <h3 className="text-xl font-black leading-tight tracking-tight text-q-ink group-hover:text-q-brand-deep">{brand(area.title)}</h3>
                      <p className="mt-1.5 text-sm text-q-gray-500">{brand(area.scope)}</p>
                    </div>
                    <p className="leading-relaxed text-q-gray-700">{brand(area.oneLiner)}</p>
                    <span className="justify-self-start rounded-full border border-q-brand/30 bg-q-brand/[0.08] px-3.5 py-1.5 text-xs font-bold text-q-brand-dark md:justify-self-end">
                      {area.value}
                    </span>
                  </Link>
                </li>
              ))}
            </ol>

            <p className="mt-6 text-sm text-q-gray-500">
              Shared foundation: areas 1, 2 and 5 reuse the same entity resolution, lineage and data quality controls. On the watch list: ESG data for CSRD and SFDR.
            </p>
          </div>
        </div>
      </section>

      {/* One section per focus area */}
      {focusAreas.map((area) => (
        <section key={area.id} id={area.id} className="scroll-mt-28 border-b border-black/5 bg-white section-y-sm">
          <div className="container-x">
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
              <div>
                <p className="eyebrow mb-3">
                  {area.number} · {area.value}
                </p>
                <h2 className="h-sub">{brand(area.title)}</h2>
                <p className="mt-4 text-sm text-q-gray-500">{brand(area.scope)}</p>
              </div>
              <p className="leading-relaxed text-q-gray-700 lg:pt-1">{brand(area.intro)}</p>
            </div>

            <div className="mt-10 lg:mt-12">
              <p className="mb-4 text-sm font-bold text-q-gray-500">Sample data products</p>
              <div className="grid gap-4 md:grid-cols-3">
                {area.products.map((product, index) => (
                  <div key={product.name} className="rounded-3xl border border-black/10 bg-black/[0.035] p-6">
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl border border-q-brand/25 bg-q-brand/[0.12] text-lg font-black text-q-brand-ember">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-black leading-tight text-q-ink">{brand(product.name)}</h3>
                    <p className="mt-3 leading-relaxed text-q-gray-600">{brand(product.text)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Close */}
      <section className="bg-white section-y-sm">
        <div className="container-x">
          <div className="premium-card relative overflow-hidden p-8 md:p-12 lg:p-16">
            <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 lg:block" aria-hidden="true">
              <Image src="/assets/brand/section-features.webp" alt="" fill className="object-cover object-right-top" sizes="50vw" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#f7f7f8] via-[#f7f7f8]/70 to-transparent" />
            </div>
            <div className="relative z-10 max-w-xl">
              <p className="eyebrow mb-3">One foundation</p>
              <h2 className="h-sub">Build the data products once. Every area reuses them.</h2>
              <p className="mt-6 leading-relaxed text-q-gray-700">
                The resolved party, the ledger, the instrument and the reference data are the same products whichever area you start in. <QBricksText /> contracts, reconciles, versions and proves them; your engines, platforms and models stay where they are.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">
                  Request a demo <ArrowRight className="h-5 w-5" />
                </Link>
                <Link href="/solutions" className="btn-secondary">
                  All solutions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
