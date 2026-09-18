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
  { value: "866", unit: "M", label: <>Records through the full 22-query TPC-H suite in <strong className="font-black text-white">16.5s</strong></> },
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

const daveLayers = [
  {
    letter: "D",
    name: "DataFusion",
    role: "The query engine",
    inherit: ["SQL parsing, planning and cost-based optimisation", "Vectorised, multi-threaded execution", "Extension points for custom plans, operators and table sources"],
    built: [
      "Data contracts (ODCS) compiled into the query plan, so every run checks the contract it serves",
      "Incremental materialised views that recompute only what changed since the last load",
      "A push-down planner that decides which work runs in Databricks, Fabric, Snowflake or on-premise sources, and which runs in EOS",
    ],
  },
  {
    letter: "A",
    name: "Arrow",
    role: "The in-memory format",
    inherit: ["Columnar in-memory representation used across the analytics industry", "A library of fast compute kernels", "Zero-copy interchange with other Arrow-native tools"],
    built: [
      "Validation kernels for financial identifiers and reference data",
      "Rule kernels that evaluate many data quality rules in a single pass over the data",
    ],
  },
  {
    letter: "V",
    name: "Vortex",
    role: "The storage engine",
    inherit: ["A modern columnar file format with compressed encodings", "Efficient reads from object storage and local disk", "Hooks for custom encodings, layouts and filter pushdown"],
    built: [
      "Quality and scope filters pushed into the scan, so rows and columns a check does not need are never decoded",
      "Observatory metadata for schema drift and freshness kept alongside the data it describes",
    ],
  },
  {
    letter: "E",
    name: "Embedded",
    role: "The deployment model",
    inherit: ["The infrastructure you already run: servers, containers, schedulers and cloud services", "Their security, identity and operational controls"],
    built: [
      "One engine packaged to run on premise, in a sovereign cloud region or on an analyst workstation",
      "Local compute: processing happens where the data lives, with no data movement or egress",
      "The Agent Mesh, which schedules EOS work across these environments and builds and maintains pipelines",
    ],
  },
];

const daveOutcomes = [
  { title: "Your data stays put", text: "EOS runs next to your data, inside your perimeter. That keeps you aligned with residency rules in the EU, Saudi Arabia and the UAE, and removes egress costs." },
  { title: "You pay for less compute", text: "Contracts, rules and views are evaluated together, incrementally, and only on the data they need. Your existing platforms keep the work they do best." },
  { title: "It keeps pace with regulation", text: "Because we do not maintain a query engine or a file format, our releases go into what financial services needs next." },
];

const daveLedger = [
  { value: "0", label: "bytes moved out of your environment for processing" },
  { value: "4", label: "open-source layers inherited, so engineering goes into financial services specifics" },
  { value: "1 VM", label: "runs ingestion, pipeline and extraction end to end" },
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
                866M records · <span className="text-q-brand-ember">16.5s</span>
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

      {/* Built on the DAVE stack */}
      <section id="built-on-dave" className="section-y scroll-mt-24 relative overflow-hidden border-t border-white/5 bg-q-black">
        <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_80%_10%,rgba(232,32,15,0.1),transparent_65%)]" />

        <div className="container-x relative z-10">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_1fr] lg:items-end lg:gap-14">
            <div>
              <motion.p {...fadeUp} className="eyebrow mb-5">How we built it</motion.p>
              <motion.h2 {...fadeUp} transition={{ duration: 0.7 }} className="text-[clamp(2.2rem,4.4vw,3.4rem)] font-black leading-[1.02] tracking-tight text-white">
                How we built EOS <span className="block text-q-brand-ember">on the DAVE stack</span>
              </motion.h2>
            </div>
            <div>
              <motion.p {...fadeUp} transition={{ duration: 0.7, delay: 0.08 }} className="text-lg leading-relaxed text-q-gray-300">
                We did not write a database from scratch. EOS inherits its query engine, memory model and storage engine from proven open-source projects, so our engineering goes into the parts that are specific to financial services data.
              </motion.p>
              <motion.p {...fadeUp} transition={{ duration: 0.7, delay: 0.12 }} className="mt-4 text-base leading-relaxed text-q-gray-400">
                The approach has a name. Tim Poterba, who spent eight years building the Hail genomics platform at the Broad Institute, calls it{" "}
                <a href="https://sequenceandsilicon.substack.com/p/the-dave-stack-the-age-of-domain" target="_blank" rel="noopener noreferrer" className="font-bold text-white underline decoration-q-brand/60 underline-offset-4 transition-colors hover:text-q-brand-ember">
                  the DAVE stack
                </a>
                : DataFusion, Arrow, Vortex and an Embedded architecture. Here is what EOS takes from each layer, and what we added.
              </motion.p>
            </div>
          </div>

          <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="mt-12 overflow-hidden rounded-[2rem] border border-white/10">
            <div className="hidden grid-cols-[88px_1fr_1fr] gap-6 border-b border-white/10 bg-white/[0.03] px-7 py-4 md:grid">
              <span />
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-q-gray-500">What EOS inherits</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-q-brand-ember">What QBricks built</span>
            </div>
            {daveLayers.map((layer, index) => (
              <div
                key={layer.letter}
                className={`group grid gap-5 px-7 py-7 md:grid-cols-[88px_1fr_1fr] md:gap-6 ${index < daveLayers.length - 1 ? "border-b border-white/10" : ""}`}
              >
                <div className="flex items-start gap-4 md:block">
                  <span className="text-[3.6rem] font-black leading-none text-white transition-colors group-hover:text-q-brand-ember md:text-[4.4rem]">{layer.letter}</span>
                  <div className="md:hidden">
                    <p className="text-lg font-black text-white">{layer.name}</p>
                    <p className="text-sm text-q-gray-500">{layer.role}</p>
                  </div>
                </div>
                <div>
                  <p className="hidden text-lg font-black text-white md:block">{layer.name}</p>
                  <p className="hidden text-sm text-q-gray-500 md:block">{layer.role}</p>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-q-gray-500 md:mt-4">Inherited</p>
                  <ul className="mt-2 space-y-2">
                    {layer.inherit.map((item) => (
                      <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-q-gray-400">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-white/25" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-l-2 border-q-brand/60 pl-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-q-brand-ember md:mt-4">Built by QBricks</p>
                  <ul className="mt-2 space-y-2">
                    {layer.built.map((item) => (
                      <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-q-gray-200">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-q-brand-ember" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="mt-12">
            <p className="eyebrow mb-3">End to end, on one node</p>
            <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.02] p-2 shadow-[0_40px_120px_rgba(0,0,0,0.55)] sm:p-3">
              <PipelineGraphic />
            </div>
          </motion.div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {daveOutcomes.map((item, index) => (
              <motion.div key={item.title} {...fadeUp} transition={{ duration: 0.6, delay: index * 0.08 }} className="border-t-2 border-white/60 pt-5">
                <h3 className="text-xl font-black text-white">{item.title}</h3>
                <p className="mt-2.5 leading-relaxed text-q-gray-400">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="mt-14 grid gap-10 rounded-[2rem] border border-q-brand/25 bg-gradient-to-br from-[#160a0a]/80 to-transparent p-8 md:p-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <h3 className="text-[clamp(1.6rem,2.8vw,2.3rem)] font-black leading-[1.05] tracking-tight text-white">DAVE is a foundation, not a finished product</h3>
              <p className="mt-5 leading-relaxed text-q-gray-300">
                Open-source layers removed years of work, but they do not turn a question from a regulator into a fast, correct and auditable answer. That translation is the job of EOS: understanding financial services data well enough to decide how it is partitioned, encoded, joined and checked.
              </p>
              <p className="mt-4 leading-relaxed text-q-gray-300">
                <QBricksText /> is accountable for the whole engine, including support, security patching and release management, and provides the software bill of materials your third-party risk and DORA processes require.
              </p>
            </div>
            <dl className="grid content-start gap-5">
              {daveLedger.map((row) => (
                <div key={row.label} className="grid grid-cols-[auto_1fr] items-baseline gap-4">
                  <dt className="text-3xl font-black tracking-tight text-white">{row.value}</dt>
                  <dd className="text-sm leading-relaxed text-q-gray-400">{row.label}</dd>
                </div>
              ))}
            </dl>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="mt-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <p className="max-w-2xl text-sm leading-relaxed text-q-gray-500">
              Read the full argument, and how it applies to banks, insurers and asset managers, in our white paper. DataFusion, Arrow and Vortex are Apache Software Foundation projects. The DAVE framing is Tim Poterba’s.
            </p>
            <Link
              href="/resources/whitepapers/dave-stack"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-q-brand px-7 py-3.5 text-sm font-black text-white transition-all hover:-translate-y-0.5 hover:bg-q-brand-ember"
            >
              Read the white paper <ArrowRight className="h-4 w-4" />
            </Link>
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
