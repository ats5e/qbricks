import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { QBricksText, brand } from "@/components/ui/QBricksText";
import { pageMeta } from "@/lib/seo";
import { useCases } from "./data";

export const metadata = pageMeta({
  title: "Data products for financial services",
  description:
    "Five banking use cases and the contracted data products QBricks builds for each: risk data and regulatory reporting, AML transaction monitoring, credit risk, Customer 360 and reference data.",
  path: "/solutions/data-products",
});

export default function DataProductsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-black/5 page-hero pb-[22vw]">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-0 h-[19vw]" aria-hidden="true">
          <Image src="/assets/brand/hero-data-products.webp" alt="" fill priority className="object-cover object-bottom" sizes="100vw" />
        </div>
        <div className="container-x relative z-10 text-center">
          <p className="eyebrow mb-6">
            <Link href="/solutions" className="hover:underline">
              Solutions
            </Link>{" "}
            · Data products for financial services
          </p>
          <h1 className="h-display mx-auto max-w-4xl font-black tracking-tight text-q-ink">Five use cases. One data foundation.</h1>
          <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-q-gray-700 md:text-2xl">
            From regulatory reporting to revenue, these are the five places banks get the most from governed data. <QBricksText /> builds the data products once, and every engine, model and report reuses them.
          </p>
        </div>
      </section>

      {/* The Top 5 */}
      <section className="border-b border-black/5 bg-white section-y-sm">
        <div className="container-x">
          <p className="eyebrow mb-3">The Top 5</p>
          <h2 className="h-sub">Five use cases, crucial for the running of a financial organisation.</h2>

          <ol className="mt-10 divide-y divide-black/10 border-y border-black/10">
            {useCases.map((uc) => (
              <li key={uc.id}>
                <Link
                  href={`#${uc.id}`}
                  className="group grid grid-cols-[2.5rem_minmax(0,1fr)] gap-x-3 gap-y-3 py-6 md:grid-cols-[3rem_minmax(0,1fr)_minmax(0,1fr)_10.5rem] md:items-center md:gap-x-8 lg:py-7"
                >
                  <span className="pt-0.5 text-2xl font-black leading-none tracking-tight text-q-brand-ember md:pt-0 md:text-3xl">{uc.number}</span>
                  <div>
                    <h3 className="text-xl font-black leading-tight tracking-tight text-q-ink transition-colors group-hover:text-q-brand-deep">{brand(uc.title)}</h3>
                    <p className="mt-1.5 text-sm text-q-gray-500">{brand(uc.scope)}</p>
                  </div>
                  <p className="col-start-2 leading-relaxed text-q-gray-700 md:col-start-auto">{brand(uc.oneLiner)}</p>
                  <span className="col-start-2 justify-self-start rounded-full border md:col-start-auto border-q-brand/30 bg-q-brand/[0.08] px-3.5 py-1.5 text-xs font-bold text-q-brand-dark md:justify-self-end">
                    {uc.value}
                  </span>
                </Link>
              </li>
            ))}
          </ol>

          <p className="mt-6 text-sm leading-relaxed text-q-gray-500">
            Shared foundation: use cases 1, 2 and 5 reuse the same entity resolution, lineage and data quality controls. On the watch list: ESG data for CSRD and SFDR.
          </p>
        </div>
      </section>

      {/* One section per use case */}
      {useCases.map((uc) => (
        <section key={uc.id} id={uc.id} className="scroll-mt-28 border-b border-black/5 bg-white section-y-sm">
          <div className="container-x">
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
              <div>
                <p className="eyebrow mb-3">
                  {uc.number} · {uc.value}
                </p>
                <h2 className="h-sub">{brand(uc.title)}</h2>
                <p className="mt-4 text-sm text-q-gray-500">{brand(uc.scope)}</p>
                {uc.related.length > 0 && (
                  <p className="mt-3 text-sm text-q-gray-500">
                    On the solutions page:{" "}
                    {uc.related.map((r, i) => (
                      <span key={r.href}>
                        {i > 0 && " · "}
                        <Link href={r.href} className="font-semibold text-q-brand-deep hover:underline">
                          {r.label}
                        </Link>
                      </span>
                    ))}
                  </p>
                )}
              </div>
              <div className="lg:pt-1">
                <p className="mb-3 text-sm font-bold text-q-gray-500">
                  How <QBricksText /> supports it
                </p>
                <p className="text-lg leading-relaxed text-q-gray-700">{brand(uc.support)}</p>
              </div>
            </div>

            <div className="mt-10 lg:mt-12">
              <p className="mb-4 text-sm font-bold text-q-gray-500">Sample data products</p>
              <div className="grid gap-4 md:grid-cols-3 md:gap-y-0">
                {uc.products.map((product) => (
                  <div
                    key={product.name}
                    className="rounded-3xl border border-black/10 bg-black/[0.035] p-5 md:grid md:p-6 md:[grid-row:span_2] md:[grid-template-rows:subgrid]"
                  >
                    <h3 className="text-lg font-black leading-tight text-q-ink md:text-xl">{brand(product.name)}</h3>
                    <p className="mt-2 leading-relaxed text-q-gray-600 md:mt-3">{brand(product.text)}</p>
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
              <Image src="/assets/brand/section-features.webp" alt="" fill className="object-cover object-right-top" sizes="(min-width: 1024px) 60vw, 1px" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#f7f7f8] via-[#f7f7f8]/70 to-transparent" />
            </div>
            <div className="relative z-10 max-w-xl">
              <p className="eyebrow mb-3">One foundation</p>
              <h2 className="h-sub">
                <span className="block">Build the data products once.</span>
                <span className="block">Every use case reuses them.</span>
              </h2>
              <p className="mt-6 leading-relaxed text-q-gray-700">
                A resolved party and the reference data sit under every use case, so the second one starts from products that already exist. <QBricksText /> contracts, reconciles, versions and proves them; your engines, platforms and models stay where they are.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">
                  Talk to us about your use case <ArrowRight className="h-5 w-5" />
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
