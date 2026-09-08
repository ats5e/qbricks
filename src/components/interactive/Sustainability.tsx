"use client";

import { motion } from "framer-motion";
import { ArrowRight, Leaf } from "lucide-react";
import Link from "next/link";
import { QBricksText } from "@/components/ui/QBricksText";

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-90px" },
} as const;

const headlineStats = [
  { value: "−88", unit: "%", label: "Energy per year, same pipeline" },
  { value: "9", unit: "×", label: "Smaller provisioned compute" },
  { value: "40", unit: "%", label: "Of the data-centre estate is pipeline compute, the layer QBricks addresses" },
  { value: "−94", unit: "%", label: "Annual platform cost, same workload" },
];

const workedExample = [
  { dimension: "Provisioned compute", qbricks: "1 VM · 32 vCPU / 64 GiB", warehouse: "≈ 280 vCPU-equivalent", delta: "9× smaller" },
  { dimension: "Power at the wall", qbricks: "~0.29 kW", warehouse: "~2.3 kW", delta: "−87%" },
  { dimension: "Energy per year", qbricks: "~2.5 MWh", warehouse: "~20.2 MWh", delta: "−88%" },
  { dimension: "CO₂ per year", qbricks: "~0.9 tCO₂e", warehouse: "~7.5 tCO₂e", delta: "−6.6 t" },
  { dimension: "Annual platform cost", qbricks: "$11,300", warehouse: "$196,224", delta: "−94%" },
];

const scaleCards = [
  {
    value: "10–42",
    unit: "GW",
    text: "Off the 2030 global demand curve, depending on adoption, up to a fifth of forecast capacity.",
  },
  {
    value: "420",
    unit: "sites",
    text: "100 MW data centres that never need to be built in the full-potential case, 105 even in a cautious forecast.",
  },
  {
    value: "~115",
    unit: "Mt CO₂",
    text: "Avoided per year in that case, more than Belgium’s annual emissions, plus ~260 TWh of electricity and ~130 bn litres of cooling water.",
  },
];

const basis =
  "Basis: Infinium QBricks impact model, Aug 2026, modelled scenarios, not predictions. Worked example: illustrative energy model, provisioned capacity × 8,760 h; QBricks on Azure D32als_v6, ~7.5 W/vCPU incl. server overhead, PUE 1.2; warehouse ≈ 560 slots (~0.5 vCPU-eq/slot), PUE 1.1; grid average 0.37 kg CO₂/kWh. Pipeline share of estate: working assumption, stress-tested at 20–30%. Cost savings are subject to the QBricks gain share, not shown here.";

export function Sustainability() {
  return (
    <main className="min-h-screen bg-q-black">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/5 pb-24 pt-44">
        <div className="absolute inset-0 -z-0">
          <div className="absolute inset-0 bg-[radial-gradient(720px_420px_at_50%_0%,rgba(232,32,15,0.24),transparent_65%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(600px_400px_at_78%_80%,rgba(62,207,142,0.1),transparent_70%)]" />
          <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        </div>

        <div className="container-x relative z-10 text-center">
          <motion.span
            {...fadeUp}
            className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-[13px] font-bold text-q-gray-300 backdrop-blur-sm"
          >
            <Leaf className="h-3.5 w-3.5 text-emerald-300" />
            Sustainability
          </motion.span>

          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-4xl text-[clamp(2.8rem,6.4vw,5.2rem)] font-black leading-[1.02] tracking-tight text-white"
          >
            Less Compute. Less <span className="text-q-brand-ember">Carbon</span>.
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="mx-auto mt-7 max-w-2xl text-xl leading-relaxed text-q-gray-300"
          >
            Energy is watts times hours. <QBricksText /> shrinks both, the same workload on one small node instead of an over-provisioned cluster, with the memory footprint to match. The cheapest megawatt is the one you never need.
          </motion.p>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mt-9 text-[0.75rem] font-bold uppercase tracking-[0.22em] text-q-gray-500"
          >
            Emissions the grid never sees
          </motion.p>
        </div>
      </section>

      {/* Headline stats */}
      <section className="border-b border-white/5 bg-q-black py-16 lg:py-20">
        <div className="container-x">
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

      {/* Worked example */}
      <section className="section-y relative overflow-hidden border-b border-white/5 bg-q-black">
        <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_20%_0%,rgba(232,32,15,0.1),transparent_65%)]" />

        <div className="container-x relative z-10">
          <motion.p {...fadeUp} className="eyebrow mb-5">Worked example</motion.p>
          <motion.h2 {...fadeUp} transition={{ duration: 0.7 }} className="max-w-3xl text-[clamp(2rem,4vw,3.1rem)] font-black leading-[1.05] tracking-tight text-white">
            One pipeline, restated as a carbon overview
          </motion.h2>
          <motion.p {...fadeUp} transition={{ duration: 0.7, delay: 0.08 }} className="mt-5 max-w-3xl text-lg leading-relaxed text-q-gray-300">
            A bank’s FCRM pipeline, 3 runs a day, 1,095 runs a year, on a single <QBricksText /> node versus a provisioned cloud warehouse.
          </motion.p>

          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.12 }} className="premium-card mt-12 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="px-6 py-5 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-q-gray-500">Dimension</th>
                  <th className="px-6 py-5 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-q-brand-ember">QBricks · single node</th>
                  <th className="px-6 py-5 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-q-gray-500">Cloud warehouse, on-demand</th>
                  <th className="px-6 py-5 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-q-gray-500">Delta</th>
                </tr>
              </thead>
              <tbody>
                {workedExample.map((row) => (
                  <tr key={row.dimension} className="border-b border-white/[0.07] last:border-0">
                    <td className="px-6 py-4 text-[15px] font-bold text-white">{row.dimension}</td>
                    <td className="px-6 py-4 text-[15px] text-q-gray-300">{row.qbricks}</td>
                    <td className="px-6 py-4 text-[15px] text-q-gray-400">{row.warehouse}</td>
                    <td className="px-6 py-4 text-[15px] font-black text-emerald-300">{row.delta}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          <motion.p {...fadeUp} transition={{ duration: 0.6, delay: 0.16 }} className="mt-8 max-w-4xl text-[15px] leading-relaxed text-q-gray-300">
            6.6 tCO₂e a year is roughly 1.4 passenger cars, for <em className="not-italic font-black text-white">one</em> pipeline. A typical tier-2 bank runs ~300 of them: ~1.8 GWh and ~660 tCO₂e avoided every year.
          </motion.p>
        </div>
      </section>

      {/* The quiet 40% */}
      <section className="section-y relative overflow-hidden bg-q-black">
        <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_50%_0%,rgba(232,32,15,0.1),transparent_65%)]" />

        <div className="container-x relative z-10">
          <motion.h2 {...fadeUp} className="max-w-3xl text-[clamp(2rem,4vw,3.1rem)] font-black leading-[1.05] tracking-tight text-white">
            The quiet 40% of the data centre
          </motion.h2>
          <motion.p {...fadeUp} transition={{ duration: 0.7, delay: 0.08 }} className="mt-5 max-w-3xl text-lg leading-relaxed text-q-gray-300">
            Data preparation and pipelines, ETL, Spark clusters, orchestration, warehouse transforms, account for roughly 40% of today’s data-centre compute estate. <QBricksText /> removes up to 85% of that layer’s compute for every workload that migrates. At scale, that is capacity that never has to be built.
          </motion.p>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {scaleCards.map((card, index) => (
              <motion.div
                key={card.unit}
                {...fadeUp}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-q-brand/40"
              >
                <p className="text-[clamp(2rem,3.4vw,2.7rem)] font-black leading-none tracking-tight text-white">
                  {card.value} <span className="text-q-brand-ember">{card.unit}</span>
                </p>
                <p className="mt-4 text-sm leading-relaxed text-q-gray-400">{card.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.p {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="mt-10 max-w-5xl text-xs leading-relaxed text-q-gray-500">
            {basis}
          </motion.p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-y border-t border-white/5 bg-q-black">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-[clamp(2.2rem,4vw,3.6rem)] font-black leading-[0.98] tracking-tight text-white">
              Cut the compute. Cut the&nbsp;carbon.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-q-gray-300">
              We will model your own pipeline estate, the energy, the emissions and the platform cost, on one right-sized node.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-q-brand px-8 py-4 font-black text-white transition-all hover:-translate-y-1 hover:bg-q-brand-ember"
              >
                Book a demo <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/eos"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.055] px-8 py-4 font-bold text-white backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.08]"
              >
                Meet EOS, the engine behind it <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
