"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { QBricksText, brand } from "@/components/ui/QBricksText";

const stats = [
  {
    value: "$650B",
    label: "of annual revenue, in perpetuity, required for a 10% return on the AI infrastructure buildout, per J.P. Morgan analysts.",
    href: "/resources/whitepapers/ai-compute-numbers",
    source: "Why the AI numbers don't add up",
  },
  {
    value: "100×",
    label: "the compute a reasoning model can need over single-shot inference, while most \"AI spend\" still feeds data preparation.",
    href: "/resources/whitepapers/ai-compute-numbers",
    source: "Why the AI numbers don't add up",
  },
  {
    value: "2×",
    label: "the cost of every data fabric capacity upgrade step, a blunt instrument for what is usually one inefficient pipeline.",
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
    <section className="relative overflow-hidden border-y border-black/5 bg-white section-y-sm">
      <div className="container-x relative z-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <motion.h2 {...fadeUp} transition={{ duration: 0.7 }} className="text-3xl font-black tracking-tight text-q-ink md:text-4xl">
              The economics only work when trusted data stops being the most expensive line on the bill.
            </motion.h2>
          </div>
          <motion.div {...fadeUp} transition={{ delay: 0.1 }}>
            <Link href="/resources" className="inline-flex items-center gap-2 text-sm font-bold text-q-brand-deep transition-colors hover:text-q-ink">
              From our white papers <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div key={stat.value + stat.source} {...fadeUp} transition={{ duration: 0.6, delay: index * 0.08 }}>
              <Link
                href={stat.href}
                className="group flex h-full flex-col rounded-3xl border border-black/10 bg-black/[0.03] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-q-brand/40"
              >
                <p className="text-5xl font-black tracking-tight text-q-brand-ember">{brand(stat.value)}</p>
                <p className="mt-4 flex-1 leading-relaxed text-q-gray-700">{brand(stat.label)}</p>
                <p className="mt-5 text-xs text-q-gray-500 transition-colors group-hover:text-q-brand-deep font-medium">
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
            className="group grid overflow-hidden rounded-[2rem] border border-black/[0.08] bg-q-panel transition-shadow duration-300 hover:shadow-[0_40px_90px_rgba(0,0,0,0.08)] md:grid-cols-[1.25fr_1fr]"
          >
            <div className="flex flex-col justify-center p-7 md:p-10">
              <h3 className="text-2xl font-black tracking-tight text-q-ink md:text-3xl">Where <QBricksText /> takes cost out</h3>
              <p className="mt-3 max-w-xl text-lg text-q-gray-600">
                Model the saving on your own numbers across the four cost lines an organisation carries to keep data fit for use.
              </p>
              <span className="btn-primary mt-7 w-fit group-hover:-translate-y-0.5 group-hover:bg-q-brand-ember">
                Open the calculator <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
            <div className="relative min-h-[240px]">
              <Image src="/assets/brand/resources/wp-cfo-compute-cost.webp" alt="" fill className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" sizes="(min-width: 768px) 40vw, 100vw" />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
