"use client";

import { motion } from "framer-motion";
import { ArrowRight, Cpu } from "lucide-react";
import Link from "next/link";
import { QBricksText } from "@/components/ui/QBricksText";
import { PipelineGraphic } from "@/components/interactive/flowGraphics";

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-90px" },
} as const;

const headlineStats = [
  { value: "866", unit: "M", label: <>Records through the full 22-query TPC-H suite in <strong className="font-black text-white">14.5s</strong></> },
  { value: "−85", unit: "%", label: "Compute per migrated workload" },
  { value: "1", unit: " VM", label: "32 vCPU / 64 GiB, ≈ $20/day, replaces the cluster" },
  { value: "−90", unit: "%", label: "Cost per workload vs managed Spark" },
];

const sparkLines = [
  { item: "Executor & driver compute", tag: "the work itself", tax: false },
  { item: "Shuffle, serialisation, replication", tag: "coordination tax", tax: true },
  { item: "Idle + autoscale headroom", tag: "coordination tax", tax: true },
  { item: "Orchestration + per-step minimums", tag: "coordination tax", tax: true },
  { item: "Cross-service data movement", tag: "coordination tax", tax: true },
];

const eosLines = [
  { item: "The work itself, on one machine", tag: "remains", removed: false },
  { item: "Shuffle, replication, serialisation", tag: "removed", removed: true },
  { item: "Idle headroom, minimums, transfers", tag: "removed", removed: true },
  { item: "Compute per migrated workload", tag: "−85%", removed: false, accent: true },
];

const benchmarkFacts = [
  { value: "22", unit: " queries", label: "Fixed by the TPC-H spec" },
  { value: "8", unit: " tables", label: "One fixed retail schema" },
  { value: "1", unit: " VM", label: "No cluster, no tuning" },
];

const differences = [
  { n: "01", title: "Large records at speed", text: "Ingests and joins hundreds of millions of records in seconds; built-in managed views keep downstream agents and dashboards hot." },
  { n: "02", title: "Capped compute cost", text: "The entire pipeline estate runs on one right-sized VM, a single committed line item. Compression shrinks the lakehouse footprint and storage bill too." },
  { n: "03", title: "Governed by design", text: "Every record checked against an Open Data Contract Standard contract, fully auditable, human in the loop." },
  { n: "04", title: "Python SDK", text: "Data science teams connect to QBricks in a few lines of Python and ingest foundational, governed data products in seconds, no pipeline build, no waiting on engineering." },
  { n: "05", title: "Forked, not wrapped", text: "A hardened fork of Apache DataFusion, a proven, vectorised query core, tuned for the single-node execution path managed Spark can’t take." },
  { n: "06", title: "Built with Rust", text: "Compiled, memory-safe and garbage-collection free, no JVM, no pauses. Predictable low-latency speed with a fraction of the memory footprint." },
  { n: "07", title: "Arrow-native streaming", text: "Data moves through the engine as Arrow, end to end, no serialisation between stages, no format tax, incremental change streamed as it lands." },
];

const basis =
  "Basis: TPC-H SF100 (~866M rows total, lineitem ~600M), 22 queries, single Azure D32als_v6 (32 vCPU / 64 GiB), ≈ $20/day (≈ $0.83/hr) · Compute reduction: QBricks engineering estimate, up to 85% · Cost savings are subject to the QBricks gain share, not shown here.";

export function EosEngine() {
  return (
    <main className="min-h-screen bg-q-black">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/5 pb-24 pt-44">
        <div className="absolute inset-0 -z-0">
          <div className="absolute inset-0 bg-[radial-gradient(720px_420px_at_50%_0%,rgba(232,32,15,0.28),transparent_65%)]" />
          <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        </div>

        <div className="container-x relative z-10 text-center">
          <motion.span
            {...fadeUp}
            className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-[13px] font-bold text-q-gray-300 backdrop-blur-sm"
          >
            <span className="h-[7px] w-[7px] rounded-full bg-q-brand" />
            The engine inside <QBricksText />
          </motion.span>

          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-4xl text-[clamp(3rem,7vw,5.6rem)] font-black leading-[1.02] tracking-tight text-white"
          >
            Meet <span className="text-q-brand-ember">EOS</span>.
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="mx-auto mt-7 max-w-2xl text-xl leading-relaxed text-q-gray-300"
          >
            Most analytics costs come from processing data that never contributes to the answer. EOS, the SQL engine inside <QBricksText />, brings filtering, compressed storage and query execution together to avoid unnecessary work.
          </motion.p>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.11 }}
            className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-q-gray-400"
          >
            An analytical engine built to preserve optimisation opportunities from the query planner down to compressed storage.
          </motion.p>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.14 }}
            className="mx-auto mt-6 text-[clamp(1.15rem,2vw,1.45rem)] font-black tracking-tight text-white"
          >
            No Spark. No clusters. <span className="text-q-brand-ember">No memory tax.</span>
          </motion.p>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-9 text-[0.75rem] font-bold uppercase tracking-[0.22em] text-q-gray-500"
          >
            TPC-H benchmarked
          </motion.p>
        </div>
      </section>

      {/* Headline stats */}
      <section className="border-b border-white/5 bg-q-black py-16 lg:py-20">
        <div className="container-x">
          <motion.h2 {...fadeUp} className="mb-10 max-w-3xl text-[clamp(1.35rem,2.4vw,1.7rem)] font-black tracking-tight text-white">
            An efficient engine can offer significant improvements
          </motion.h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {headlineStats.map((stat, index) => (
              <motion.div
                key={stat.value + stat.unit}
                {...fadeUp}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="border-l-[3px] border-q-brand pl-5"
              >
                <p className="text-[2.5rem] font-black leading-none tracking-tight text-white">
                  {stat.value}
                  <span className="text-q-brand-ember">{stat.unit}</span>
                </p>
                <p className="mt-2.5 text-sm leading-relaxed text-q-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The distributed tax */}
      <section className="section-y relative overflow-hidden border-b border-white/5 bg-q-black">
        <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_20%_0%,rgba(232,32,15,0.1),transparent_65%)]" />

        <div className="container-x relative z-10">
          <motion.p {...fadeUp} className="eyebrow mb-5">The distributed tax</motion.p>
          <motion.h2 {...fadeUp} transition={{ duration: 0.7 }} className="max-w-3xl text-[clamp(2.2rem,4.4vw,3.4rem)] font-black leading-[1.05] tracking-tight text-white">
            One node. Not a cluster.
          </motion.h2>
          <motion.p {...fadeUp} transition={{ duration: 0.7, delay: 0.08 }} className="mt-5 max-w-3xl text-lg leading-relaxed text-q-gray-300">
            Spark decomposes, parallelises and recompiles, and meters you before a single row is processed. EOS removes the coordination layer.
          </motion.p>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 backdrop-blur-xl">
              <p className="mb-6 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-q-gray-500">
                Today with Spark · Memory heavy · distributed cluster
              </p>
              <div className="flex flex-col">
                {sparkLines.map((line) => (
                  <div key={line.item} className="flex items-center justify-between gap-4 border-b border-white/[0.07] py-3.5 text-[15px]">
                    <span className="text-white">{line.item}</span>
                    <span className={`shrink-0 text-right ${line.tax ? "font-bold text-q-brand-ember" : "text-q-gray-500"}`}>{line.tag}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm leading-relaxed text-q-gray-400">
                Every Spark billing unit carries a fixed 16 GB DRAM parcel, which requires memory. Memory that is rising fast in price. Locking you in to a rising market.
              </p>
            </motion.div>

            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="premium-card p-8">
              <p className="mb-6 flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-q-brand-ember">
                <Cpu className="h-3.5 w-3.5" />
                With EOS · one right-sized VM node
              </p>
              <div className="flex flex-col">
                {eosLines.map((line) => (
                  <div key={line.item} className="flex items-center justify-between gap-4 border-b border-white/[0.07] py-3.5 text-[15px]">
                    <span className="text-white">{line.item}</span>
                    <span className={`shrink-0 text-right font-bold ${line.removed ? "text-emerald-300" : line.accent ? "text-q-brand-ember" : "text-q-gray-500"}`}>
                      {line.tag}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm leading-relaxed text-q-gray-400">One committed line item, forecastable to the euro.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benchmark method */}
      <section id="benchmarks" className="section-y scroll-mt-24 border-b border-white/5 bg-q-black">
        <div className="container-x">
          <motion.p {...fadeUp} className="eyebrow mb-5">Benchmark method</motion.p>
          <motion.h2 {...fadeUp} transition={{ duration: 0.7 }} className="max-w-3xl text-[clamp(2rem,4vw,3.1rem)] font-black leading-[1.05] tracking-tight text-white">
            Benchmarked against industry standards
          </motion.h2>
          <motion.p {...fadeUp} transition={{ duration: 0.7, delay: 0.08 }} className="mt-5 max-w-3xl text-lg leading-relaxed text-q-gray-300">
            TPC-H is the industry-standard analytics benchmark: one fixed retail schema, 22 fixed queries. On a single machine. There is no network shuffle and no cluster tuning to hide behind, the result isolates pure engine efficiency.
          </motion.p>

          <div className="mt-12 grid gap-5 lg:grid-cols-[1.15fr_1fr]">
            <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="premium-card p-8">
              <p className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-q-gray-500">TPC-H SF100</p>
              <p className="mt-4 text-[clamp(1.8rem,3.2vw,2.6rem)] font-black leading-none tracking-tight text-white">
                866M records · <span className="text-q-brand-ember">14.5s</span>
              </p>
              <p className="mt-5 text-[15px] leading-relaxed text-q-gray-300">
                ~100 GB raw across 8 tables, the full 22-query suite end to end, a full bank analytical estate compressed onto one $20/day VM.
              </p>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {benchmarkFacts.map((fact, index) => (
                <motion.div
                  key={fact.value + fact.unit}
                  {...fadeUp}
                  transition={{ duration: 0.6, delay: 0.08 + index * 0.06 }}
                  className="rounded-3xl border border-white/10 bg-white/[0.035] px-6 py-5 backdrop-blur-xl"
                >
                  <p className="text-2xl font-black leading-none tracking-tight text-white">
                    {fact.value}
                    <span className="text-q-brand-ember">{fact.unit}</span>
                  </p>
                  <p className="mt-2 text-sm text-q-gray-400">{fact.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why EOS is different */}
      <section className="section-y relative overflow-hidden bg-q-black">
        <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_50%_0%,rgba(232,32,15,0.1),transparent_65%)]" />

        <div className="container-x relative z-10">
          <motion.h2 {...fadeUp} className="text-[clamp(2rem,4vw,3.1rem)] font-black leading-[1.05] tracking-tight text-white">
            Why EOS is different
          </motion.h2>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {differences.map((item, index) => (
              <motion.div
                key={item.n}
                {...fadeUp}
                transition={{ duration: 0.6, delay: index * 0.06 }}
                className="group flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-q-brand/40"
              >
                <p className="text-[0.7rem] font-black tracking-[0.18em] text-q-brand-ember">{item.n}</p>
                <h3 className="mt-4 text-lg font-black tracking-tight text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-q-gray-400">{item.text}</p>
              </motion.div>
            ))}

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: differences.length * 0.06 }}
              className="flex h-full flex-col justify-center rounded-3xl border border-q-brand/30 bg-q-brand/[0.08] p-7 backdrop-blur-xl"
            >
              <h3 className="text-lg font-black leading-snug tracking-tight text-white">
                A new and cost efficient way to build data pipelines, with <span className="text-q-brand-ember">DataFusion</span> at the core.
              </h3>
            </motion.div>
          </div>

          <motion.p {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="mt-10 max-w-5xl text-xs leading-relaxed text-q-gray-500">
            {basis}
          </motion.p>
        </div>
      </section>

      {/* Flow */}
      <section className="section-y border-t border-white/5 bg-q-black">
        <div className="container-x">
          <motion.p {...fadeUp} className="eyebrow mb-5">End to end, on one node</motion.p>
          <motion.h2 {...fadeUp} transition={{ duration: 0.7 }} className="max-w-3xl text-[clamp(2rem,4vw,3.1rem)] font-black leading-[1.05] tracking-tight text-white">
            Ingestion, pipeline and extraction on one right-sized VM
          </motion.h2>
          <motion.p {...fadeUp} transition={{ duration: 0.7, delay: 0.08 }} className="mt-5 max-w-3xl text-lg leading-relaxed text-q-gray-300">
            Sources land in the data lake, EOS profiles, transforms, validates and serves them, and governed data products reach analysts, agents and the Python SDK. Data contracts are attached at ingestion and enforced through extraction.
          </motion.p>
          <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="mt-10 rounded-[1.6rem] border border-white/10 bg-white/[0.02] p-2 shadow-[0_40px_120px_rgba(0,0,0,0.55)] sm:p-3">
            <PipelineGraphic />
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-y border-t border-white/5 bg-q-black">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-[clamp(2.2rem,4vw,3.6rem)] font-black leading-[0.98] tracking-tight text-white">
              See EOS on your own&nbsp;workload.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-q-gray-300">
              Bring us a representative workload. We will show you where EOS helps, where it does not, and what adoption would require.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-q-brand px-8 py-4 font-black text-white transition-all hover:-translate-y-1 hover:bg-q-brand-ember"
              >
                Evaluate your workload <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/sustainability"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.055] px-8 py-4 font-bold text-white backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.08]"
              >
                Less compute, less carbon <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
