"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { QBricksText, brand } from "@/components/ui/QBricksText";

// Copy follows David's revised EOS page (28 Sept 2026).

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-90px" },
} as const;

const heroStats = [
  { label: "Ingestion", value: "<5", unit: " min", detail: "10 TB of CSV · 867 BN records" },
  { label: "Complex pipeline builds", value: "14.5", unit: "s", detail: "866M records · full 22-query TPC-H suite" },
];

const benchmarks = [
  {
    kicker: "01 · Ingestion",
    tag: "CSV and Parquet at scale",
    title: "10 TB of CSV files. 867 BN records. Less than 5 minutes",
    text: "Raw, uncompressed CSV turned into governed, query-ready data before a Spark cluster has finished spinning up.",
    range: ["0:00", "< 5:00"],
    facts: [
      { value: "10 TB", label: "Raw CSV" },
      { value: "867 BN", label: "Records" },
      { value: ">2.8 BN", label: "Records / sec" },
    ],
  },
  {
    kicker: "02 · Complex pipeline builds",
    tag: "TPC-H SF100",
    title: "866M records through the full TPC-H suite in 14.5 seconds",
    text: "TPC-H is the industry-standard analytics benchmark: one retail schema and 22 fixed queries of joins, aggregations and sub-queries. There's no network shuffle or cluster tuning to hide behind, so the result shows pure engine efficiency.",
    range: ["0.0s", "14.5s"],
    facts: [
      { value: "22", label: "Queries, fixed by spec" },
      { value: "8", label: "Tables, ~100 GB" },
      { value: "1 VM", label: "No cluster, no tuning" },
    ],
  },
];

const nodeStats = [
  { value: "−85", unit: "%", label: "Compute per migrated workload" },
  { value: "−90", unit: "%", label: "Cost per workload vs managed Spark" },
  { value: "1", unit: " VM", label: "32 vCPU / 64 GiB, ≈ $31/day, replaces the cluster (for pipelines)" },
];

const sparkRows = [
  { label: "Executor & driver compute", tag: "the work", tax: false },
  { label: "Shuffle, serialisation, replication", tag: "coordination tax", tax: true },
  { label: "Idle and autoscale headroom", tag: "coordination tax", tax: true },
  { label: "Orchestration and per-step minimums", tag: "coordination tax", tax: true },
  { label: "Cross-service data movement", tag: "coordination tax", tax: true },
];

const eosRows = [
  { label: "The work itself", tag: "remains", accent: false },
  { label: "Shuffle, replication, serialisation", tag: "removed", accent: true },
  { label: "Idle headroom, minimums, transfers", tag: "removed", accent: true },
  { label: "Compute per migrated workload", tag: "−85%", accent: true },
];

const features = [
  { n: "01", t: "Forked, not wrapped", d: "A hardened fork of Apache DataFusion, a proven vectorised query core, tuned for the single-node execution path that managed Spark can’t take." },
  { n: "02", t: "Arrow-native streaming", d: "Data moves through the engine as Arrow from end to end, with no serialisation between stages. Incremental changes are streamed as they land." },
  { n: "03", t: "Vortex columnar format", d: "State-of-the-art compression means the engine can filter and compute directly on compressed data." },
  { n: "04", t: "Built with Rust", d: "Compiled, memory-safe and free of garbage collection. No JVM and no pauses mean predictable low latency with a fraction of the memory footprint." },
  { n: "05", t: "Capped compute cost", d: "The whole pipeline estate runs on one right-sized VM as a single committed line item. Compression also shrinks your lakehouse storage bill." },
  { n: "06", t: "Governed by design", d: "Every record is checked against an Open Data Contract Standard contract. Fully auditable, with a human in the loop." },
  { n: "07", t: "Python SDK", d: "Data science teams connect with a few lines of Python and pull governed data products in seconds, with no pipeline build and no wait on engineering." },
  { n: "08", t: "Best-in-class ingestion", d: "10 TB of CSV and Parquet, 867 BN records, landed in under 5 minutes." },
  { n: "09", t: "Best-in-class pipeline builds", d: "Complex, multi-join pipelines over 866M records built in 14.5 seconds across the full TPC-H suite. Uses managed tables to deliver incremental changes." },
];

const basis =
  "Ingestion: 10 TB CSV, 867 BN records, under 5 minutes · Pipeline builds: TPC-H SF100 (~866M rows total, lineitem ~600M), 22 queries, single Azure D32als_v6 (32 vCPU / 64 GiB), pay-as-you-go ≈ $31/day at the $1.286/hr US baseline · Compute reduction: QBricks engineering estimate, up to 85% · Cost savings are subject to the QBricks gain share and aren't shown here.";

export function EosEngine() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-black/5 pb-24 pt-44">

        <div className="container-x relative z-10 text-center">

          <motion.h1 {...fadeUp} transition={{ duration: 0.7 }} className="h-display mx-auto max-w-4xl">
            Meet <span className="text-q-brand-ember">EOS</span>.
          </motion.h1>

          <motion.p {...fadeUp} transition={{ duration: 0.7, delay: 0.08 }} className="mx-auto mt-7 max-w-2xl text-xl leading-relaxed text-q-gray-700 [text-wrap:balance]">
            Built on Apache DataFusion, Arrow-native streaming and Vortex, EOS represents the next generation of SQL engines. It runs an organisation&apos;s entire pipeline estate at lightning speed and with minimal compute cost. EOS powers <QBricksText />.
          </motion.p>

          <motion.p {...fadeUp} transition={{ duration: 0.7, delay: 0.12 }} className="mx-auto mt-6 text-[clamp(1.15rem,2vw,1.4rem)] font-black tracking-tight text-q-ink">
            Streaming data. No Spark. No clusters. <span className="text-q-brand-deep">No memory tax.</span>
          </motion.p>

          <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.16 }} className="mx-auto mt-14 grid max-w-3xl gap-4 text-left sm:grid-cols-2">
            {heroStats.map((stat) => (
              <a
                key={stat.label}
                href="#benchmarks"
                className="premium-card block p-7 transition-colors hover:border-q-brand/40"
              >
                <p className="text-sm font-bold text-q-gray-600">{brand(stat.label)}</p>
                <p className="mt-3 text-[2.75rem] font-black leading-none tracking-tight text-q-ink">
                  {brand(stat.value)}
                  <span className="text-q-brand-ember">{brand(stat.unit)}</span>
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-q-gray-600">{brand(stat.detail)}</p>
              </a>
            ))}
          </motion.div>

          <motion.p {...fadeUp} transition={{ duration: 0.7, delay: 0.2 }} className="mt-5 text-sm text-q-gray-500">
            Benchmarked against recognised industry standards ·{" "}
            <Link href="/contact" className="text-q-gray-700 underline decoration-q-ink/20 underline-offset-4 transition-colors hover:text-q-ink">
              Results available on request
            </Link>
          </motion.p>

          <motion.p {...fadeUp} transition={{ duration: 0.7, delay: 0.24 }} className="mx-auto mt-10 max-w-2xl text-xl font-black leading-snug tracking-tight text-q-ink">
            From system of record to data product, available for consumption via a Python SDK, in just over{" "}
            <span className="text-q-brand-ember">5 minutes.</span>
          </motion.p>
        </div>
      </section>

      {/* Benchmarks */}
      <section id="benchmarks" className="section-y scroll-mt-24 border-b border-black/5 bg-white">
        <div className="container-x">
          <motion.p {...fadeUp} className="eyebrow mb-5">Benchmarked</motion.p>
          <motion.h2 {...fadeUp} transition={{ duration: 0.7 }} className="h-section max-w-3xl">
            From system of record to data product in minutes<span className="text-q-brand-ember">.</span>
          </motion.h2>
          <motion.p {...fadeUp} transition={{ duration: 0.7, delay: 0.08 }} className="mt-5 text-lg text-q-gray-700">
            A new era in Data Management.
          </motion.p>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {benchmarks.map((b, index) => (
              <motion.article
                key={b.kicker}
                {...fadeUp}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="premium-card flex flex-col p-8 md:p-10"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="text-sm font-bold text-q-gray-600">{brand(b.kicker)}</span>
                  <span className="rounded-full border border-black/10 px-3 py-1 text-xs font-medium text-q-gray-700">{brand(b.tag)}</span>
                </div>
                <h3 className="mt-7 text-[clamp(1.6rem,2.6vw,2.2rem)] font-black leading-[1.1] tracking-tight text-q-ink">
                  {brand(b.title)}
                  <span className="text-q-brand-ember">.</span>
                </h3>
                <p className="mt-4 leading-relaxed text-q-gray-600">{brand(b.text)}</p>

                <div className="mt-auto pt-9">
                  <div className="h-1.5 overflow-hidden rounded-full bg-black/[0.08]">
                    <motion.div
                      className="h-full rounded-full bg-q-brand"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                  <div className="mt-2 flex justify-between text-xs text-q-gray-500">
                    <span>{brand(b.range[0])}</span>
                    <span>{brand(b.range[1])}</span>
                  </div>
                </div>

                <div className="mt-7 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-black/10 bg-black/10">
                  {b.facts.map((fact) => (
                    <div key={fact.label} className="bg-white p-4 md:p-5">
                      <p className="text-xl font-black tracking-tight text-q-ink md:text-2xl">{brand(fact.value)}</p>
                      <p className="mt-1 text-[13px] text-q-gray-500">{brand(fact.label)}</p>
                    </div>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Image bar: many small pieces of work resolving into one right-sized block */}
      <div className="container-x pb-4" aria-hidden="true">
        <div className="relative aspect-[3136/1100] overflow-hidden rounded-[2rem] border border-black/[0.06] bg-white">
          <Image src="/assets/brand/eos-bar.webp" alt="" fill unoptimized className="object-cover object-[center_56%]" />
        </div>
      </div>

      {/* The distributed tax */}
      <section className="section-y border-b border-black/5 bg-white">
        <div className="container-x">
          <motion.p {...fadeUp} className="eyebrow mb-5">The distributed tax</motion.p>
          <motion.h2 {...fadeUp} transition={{ duration: 0.7 }} className="h-section max-w-3xl">
            SQL prompts replace pipelines. Single node<span className="text-q-brand-ember">.</span>
          </motion.h2>
          <motion.p {...fadeUp} transition={{ duration: 0.7, delay: 0.08 }} className="mt-5 max-w-3xl text-lg leading-relaxed text-q-gray-700">
            Spark splits your data up, runs it in parallel and recompiles it, and you pay for all of that before a single row is processed. EOS removes the coordination layer.
          </motion.p>

          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {nodeStats.map((stat, index) => (
              <motion.div key={stat.label} {...fadeUp} transition={{ duration: 0.6, delay: index * 0.08 }} className="border-l-[3px] border-q-brand pl-5">
                <p className="text-[2.5rem] font-black leading-none tracking-tight text-q-ink">
                  {brand(stat.value)}
                  <span className="text-q-brand-ember">{brand(stat.unit)}</span>
                </p>
                <p className="mt-2.5 text-sm leading-relaxed text-q-gray-600">{brand(stat.label)}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="rounded-3xl border border-black/10 bg-black/[0.03] p-8">
              <p className="text-lg font-black text-q-ink">Today with Spark</p>
              <p className="mt-1 text-sm text-q-gray-500">Distributed cluster · memory-heavy</p>
              <div className="mt-6 flex flex-col gap-2">
                {sparkRows.map((row) => (
                  <div key={row.label} className="flex items-center justify-between gap-4 rounded-xl bg-black/[0.04] px-4 py-3.5 text-[15px]">
                    <span className="text-q-ink">{brand(row.label)}</span>
                    <span className={`shrink-0 text-right text-sm ${row.tax ? "text-q-gray-500" : "text-q-gray-700"}`}>{brand(row.tag)}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm leading-relaxed text-q-gray-600">
                Every Spark billing unit comes with a fixed 16 GB of DRAM. Memory prices are rising fast, so you&apos;re locked into a rising market.
              </p>
            </motion.div>

            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="rounded-3xl border border-q-brand/40 bg-q-brand/[0.05] p-8">
              <p className="text-lg font-black text-q-ink">With EOS</p>
              <p className="mt-1 text-sm text-q-gray-500">One right-sized VM node</p>
              <div className="mt-6 flex flex-col gap-2">
                {eosRows.map((row) => (
                  <div key={row.label} className="flex items-center justify-between gap-4 rounded-xl bg-black/[0.04] px-4 py-3.5 text-[15px]">
                    <span className="text-q-ink">{brand(row.label)}</span>
                    <span className={`shrink-0 text-right text-sm font-bold ${row.accent ? "text-q-brand-dark" : "text-q-gray-700"}`}>{brand(row.tag)}</span>
                  </div>
                ))}
                <div className="rounded-xl border border-q-brand/45 bg-q-brand/[0.08] px-4 py-4 text-[15px] leading-relaxed text-q-ink">
                  Insulate your organisation from rising compute costs, memory shortages and environmental and geopolitical impact.
                </div>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-q-gray-600">One committed line item, forecastable to the euro.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why EOS is different */}
      <section className="section-y border-b border-black/5 bg-white">
        <div className="container-x">
          <motion.h2 {...fadeUp} className="h-section">
            Why EOS is different<span className="text-q-brand-ember">.</span>
          </motion.h2>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map((item, index) => (
              <motion.div
                key={item.n}
                {...fadeUp}
                transition={{ duration: 0.6, delay: (index % 3) * 0.06 }}
                className="flex h-full flex-col rounded-3xl border border-black/10 bg-black/[0.03] p-7 transition-colors duration-300 hover:border-q-brand/40"
              >
                <p className="text-sm font-black text-q-brand-deep">{brand(item.n)}</p>
                <h3 className="mt-4 text-lg font-black tracking-tight text-q-ink">{brand(item.t)}</h3>
                <p className="mt-3 text-sm leading-relaxed text-q-gray-600">{brand(item.d)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-y bg-white">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="h-section">
              See EOS on your own&nbsp;workload<span className="text-q-brand-ember">.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-q-gray-700">
              We&apos;ll run your pipeline estate on one right-sized node and show you the compute bill before and after.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-q-brand px-8 py-4 font-black text-white transition-all hover:-translate-y-1 hover:bg-q-brand-ember"
              >
                Book a demo <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/sustainability"
                className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.055] px-8 py-4 font-bold text-q-ink transition-all hover:-translate-y-1 hover:border-black/20 hover:bg-black/[0.08]"
              >
                Less compute, less carbon <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <p className="mx-auto mt-16 max-w-5xl text-center text-xs leading-relaxed text-q-gray-500">{brand(basis)}</p>
        </div>
      </section>
    </main>
  );
}
