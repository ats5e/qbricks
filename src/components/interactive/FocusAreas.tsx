"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { focusAreas } from "@/app/solutions/data-products/data";
import { QBricksText, brand } from "@/components/ui/QBricksText";

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

/** Ranked strip of the five focus areas; each card jumps to its section. */
export function FocusAreaRanking() {
  return (
    <section className="border-b border-black/5 bg-white py-16 lg:py-24">
      <div className="container-x">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="eyebrow mb-4">Ranked by value</p>
          <h2 className="h-section font-black tracking-tight text-q-ink">Five focus areas, in the order the value lands.</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5 lg:gap-3">
          {focusAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.a
                key={area.id}
                href={`#${area.id}`}
                {...reveal}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="premium-card group flex flex-col p-6 transition-all hover:-translate-y-1 hover:border-black/20 hover:bg-black/[0.045] lg:grid lg:gap-0 lg:[grid-row:span_4] lg:[grid-template-rows:subgrid]"
              >
                <div className="mb-5 flex items-start justify-between">
                  <span className="text-4xl font-black leading-none tracking-tight text-q-brand-ember">{area.number}</span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black/5 text-q-gray-600 transition-colors group-hover:bg-q-brand/15 group-hover:text-q-brand-deep">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <h3 className="mb-3 text-lg font-black leading-tight tracking-tight text-q-ink">{brand(area.short)}</h3>
                <p className="mb-5 text-sm leading-relaxed text-q-gray-600">{brand(area.oneLiner)}</p>
                <div className="mt-auto flex items-center justify-between gap-3 lg:mt-0">
                  <span className="rounded-full border border-q-brand/30 bg-q-brand/[0.08] px-3 py-1 text-xs font-bold text-q-brand-dark">{area.value}</span>
                  <ArrowDown className="h-4 w-4 text-q-gray-400 transition-all group-hover:translate-y-0.5 group-hover:text-q-brand-deep" />
                </div>
              </motion.a>
            );
          })}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-q-gray-500">
          Shared foundation: areas 1, 2 and 5 reuse the same entity resolution, lineage and data quality controls. On the watch list: ESG data for CSRD and SFDR.
        </p>
      </div>
    </section>
  );
}

/** One long-form section per focus area: how QBricks supports it, and a few of its data products. */
export function FocusAreaSections() {
  return (
    <>
      {focusAreas.map((area, index) => {
        const Icon = area.icon;
        const tinted = index % 2 === 1;
        return (
          <section
            key={area.id}
            id={area.id}
            className={`scroll-mt-28 border-b border-black/5 py-16 lg:py-28 ${tinted ? "bg-q-gray-100/60" : "bg-white"}`}
          >
            <div className="container-x">
              <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
                {/* Narrative */}
                <motion.div {...reveal} transition={{ duration: 0.55 }} className="lg:col-span-5">
                  <div className="mb-6 flex items-center gap-4">
                    <span className="text-6xl font-black leading-none tracking-tight text-q-brand-ember lg:text-7xl">{area.number}</span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-q-brand/25 bg-q-brand/[0.1] text-q-brand-deep">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <p className="eyebrow mb-3">{area.scope}</p>
                  <h2 className="h-section font-black tracking-tight text-q-ink">{brand(area.title)}</h2>
                  <p className="mt-6 text-lg leading-relaxed text-q-gray-700">{brand(area.intro)}</p>

                  <div className="mt-8 rounded-2xl border border-q-brand/25 bg-white p-5">
                    <span className="mb-3 block text-sm font-bold text-q-brand-dark">
                      <QBricksText /> leads in
                    </span>
                    <ul className="space-y-2">
                      {area.leads.map((lead) => (
                        <li key={lead} className="flex items-start gap-2 text-sm font-bold text-q-ink">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-q-brand-deep" />
                          {brand(lead)}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6">
                    <span className="mb-3 block text-sm font-bold text-q-gray-500">Shared foundation products</span>
                    <div className="flex flex-wrap gap-2">
                      {area.foundation.map((item) => (
                        <span key={item} className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-xs font-semibold text-q-gray-700">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Data products */}
                <div className="lg:col-span-7">
                  <div className="mb-5 flex items-end justify-between gap-4">
                    <div>
                      <p className="eyebrow mb-1">Sample data products</p>
                      <p className="text-sm text-q-gray-500">
                        {area.products.length} of {area.productCount} in the full architecture paper, each described as an ODPS product under an ODCS contract.
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2 sm:[grid-auto-rows:1fr]">
                    {area.products.map((product, i) => (
                      <motion.div
                        key={product.name}
                        {...reveal}
                        transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
                        className="group relative flex flex-col rounded-3xl border border-black/10 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-black/20 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
                      >
                        <div className="mb-4 flex items-start justify-between gap-3">
                          <h3 className="text-lg font-black leading-tight tracking-tight text-q-ink">{brand(product.name)}</h3>
                          <span className="shrink-0 rounded-full bg-q-brand px-2.5 py-1 text-[11px] font-bold leading-none text-white">ODPS</span>
                        </div>
                        <p className="text-sm leading-relaxed text-q-gray-700">{brand(product.text)}</p>
                        <dl className="mt-auto grid grid-cols-2 gap-x-4 gap-y-3 border-t border-black/10 pt-4 text-xs">
                          <div>
                            <dt className="font-bold text-q-gray-500">Grain</dt>
                            <dd className="mt-0.5 font-semibold text-q-ink">{product.grain}</dd>
                          </div>
                          <div>
                            <dt className="font-bold text-q-gray-500">Refresh</dt>
                            <dd className="mt-0.5 font-semibold text-q-ink">{product.cadence}</dd>
                          </div>
                          <div className="col-span-2">
                            <dt className="font-bold text-q-gray-500">Consumed by</dt>
                            <dd className="mt-0.5 font-semibold text-q-ink">{product.consumers}</dd>
                          </div>
                        </dl>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <span className="mb-3 block text-sm font-bold text-q-gray-500">Nine disciplines in this area</span>
                    <ol className="grid gap-x-6 gap-y-2 text-sm sm:grid-cols-3">
                      {area.disciplines.map((d, i) => (
                        <li key={d} className="flex items-baseline gap-2 text-q-gray-700">
                          <span className="w-5 shrink-0 text-xs font-bold text-q-brand-deep">{String(i + 1).padStart(2, "0")}</span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}

/** Closing band: the shared foundation and a call to action. */
export function FocusAreaClose() {
  return (
    <section className="bg-white py-16 lg:py-28">
      <div className="container-x">
        <div className="premium-card relative overflow-hidden p-8 md:p-12 lg:p-16">
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 lg:block" aria-hidden="true">
            <Image src="/assets/brand/section-features.webp" alt="" fill className="object-cover object-right-top" sizes="50vw" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#f7f7f8] via-[#f7f7f8]/70 to-transparent" />
          </div>
          <div className="relative z-10 max-w-xl">
            <p className="eyebrow mb-4">One foundation</p>
            <h2 className="h-section font-black tracking-tight text-q-ink">Build the data products once. Every area reuses them.</h2>
            <p className="mt-6 text-lg leading-relaxed text-q-gray-700">
              The resolved party, the ledger, the instrument and the reference data are the same products whichever area you start in. <QBricksText /> and EOS contract, reconcile, version and prove them; your engines, platforms and models stay where they are.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                Start with your focus area <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="/solutions" className="btn-secondary">
                All solutions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
