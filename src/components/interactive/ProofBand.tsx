"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calculator } from "lucide-react";
import Link from "next/link";
import { QBricksText } from "@/components/ui/QBricksText";

const stats = [
  {
    value: "$650B",
    label: "of annual revenue — in perpetuity — required for a 10% return on the AI infrastructure buildout, per J.P. Morgan analysts.",
    href: "/resources/whitepapers/ai-compute-numbers",
    source: "Why the AI numbers don't add up",
  },
  {
    value: "100×",
    label: "the compute a reasoning model can need over single-shot inference — while most \"AI spend\" still feeds data preparation.",
    href: "/resources/whitepapers/ai-compute-numbers",
    source: "Why the AI numbers don't add up",
  },
  {
    value: "2×",
    label: "the cost of every Microsoft Fabric capacity upgrade step — a blunt instrument for what is usually one inefficient pipeline.",
    href: "/resources/whitepapers/fabric-compute",
    source: "The hidden cost of Fabric compute",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-90px" },
} as const;

export function ProofBand() {
  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-q-black py-20 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_50%_0%,rgba(232,32,15,0.1),transparent_65%)]" />
      <div className="container-x relative z-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <motion.p {...fadeUp} className="eyebrow mb-4">The numbers</motion.p>
            <motion.h2 {...fadeUp} transition={{ duration: 0.7 }} className="text-3xl font-black tracking-tight text-white md:text-4xl">
              The economics only work when trusted data stops being the most expensive line on the bill.
            </motion.h2>
          </div>
          <motion.div {...fadeUp} transition={{ delay: 0.1 }}>
            <Link href="/resources" className="inline-flex items-center gap-2 text-sm font-bold text-q-brand-ember transition-colors hover:text-white">
              From our white papers <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div key={stat.value + stat.source} {...fadeUp} transition={{ duration: 0.6, delay: index * 0.08 }}>
              <Link
                href={stat.href}
                className="group flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-q-brand/40"
              >
                <p className="text-5xl font-black tracking-tight text-q-brand-ember">{stat.value}</p>
                <p className="mt-4 flex-1 leading-relaxed text-q-gray-300">{stat.label}</p>
                <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.16em] text-q-gray-500 transition-colors group-hover:text-q-brand-ember">
                  White paper · {stat.source}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Calculator teaser */}
        <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.1 }} className="mt-6">
          <Link
            href="/resources/cost-calculator"
            className="premium-card group flex flex-col gap-6 p-7 transition-all duration-300 hover:border-q-brand/40 md:flex-row md:items-center md:justify-between md:p-8"
          >
            <div className="flex items-start gap-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-q-brand/35 bg-q-brand/10 text-q-brand-ember">
                <Calculator className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-2xl font-black tracking-tight text-white">Where <QBricksText /> takes cost out</h3>
                <p className="mt-2 max-w-2xl text-q-gray-400">
                  Model the saving on your own numbers across the four cost lines an organisation carries to keep data fit for use.
                </p>
              </div>
            </div>
            <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-q-brand px-7 py-3.5 text-sm font-black text-white transition-all group-hover:-translate-y-0.5 group-hover:bg-q-brand-ember">
              Open the calculator <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
