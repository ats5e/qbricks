"use client";

import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle2, FileSearch, Gauge, Layers3, ShieldCheck } from "lucide-react";
import { QIcon } from "@/components/ui/QIcon";
import { QBricksText, brand } from "@/components/ui/QBricksText";

const before = [
  "Thousands of ungoverned notebooks",
  "Teams of data engineers",
  "Lengthy pipeline build and deployment time-lines",
  "A.I. required data locked at the Bronze layer",
  "On-going compute costs",
];

const after = [
  "Data governance enforced (ODCS). No notebooks",
  "Small engineering team (at set-up)",
  "Streaming data, automated pipeline builds, materialised views",
  "A.I. ready data available in hours not years",
  "Low compute costs. No cloud requirement",
];

const valueCards = [
  { icon: ShieldCheck, title: "Regulatory confidence", text: "Every transformation, agent action and exception can be tracked and viewed by Risk, Compliance and Internal Audit." },
  { icon: Gauge, title: "Speed without chaos", text: "Single-file deployment turns complex infrastructure and workloads into a controlled, repeatable process." },
  { icon: FileSearch, title: "Data teams can prove it", text: "Contracts, products, lineage and knowledge graphs create a fully auditable shared language between business and technology." },
];

export function Metrics() {
  return (
    <section id="the-problem" className="section-y relative bg-white">
      <div className="container-x relative z-10">
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-20">
          <div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75 }}
            className="h-section font-black tracking-tight text-q-ink"
          >
            Everyone is racing to deploy A.I. The issue? The underlying data is not ready.
          </motion.h2>
          </div>
          <div className="max-w-xl lg:pt-1.5">
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="text-lg leading-[1.7] text-q-gray-700 md:text-xl"
          >
            A 2025 MIT report found that around <strong className="font-black text-q-ink">95% of A.I.-related use cases were failing</strong>, not because the models were weak, but because the underlying data quality and metadata foundation could not be trusted.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, delay: 0.15 }}
            className="mt-5 text-lg leading-[1.7] text-q-gray-600"
          >
            To date, the answer to the data quality issue has been to throw money at the problem. Money for data remediation, for data engineers, for data management platforms, for pipeline building and on-going pipeline management, all underpinned by cloud and compute costs.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, delay: 0.2 }}
            className="mt-5 text-lg leading-[1.7] text-q-gray-600"
          >
            Organisations are now recognising that all of these costs outweigh the potential savings that can be made by adopting A.I. Industry is stuck and value from AI is under scrutiny.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, delay: 0.25 }}
            className="mt-6 text-xl font-black leading-relaxed text-q-ink"
          >
            A different approach is needed. <QBricksText />.
          </motion.p>
          </div>
        </div>

        <div className="relative mt-16 grid gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
          <div className="absolute inset-x-10 top-1/2 hidden h-px bg-gradient-to-r from-red-400/30 via-q-brand/60 to-emerald-400/40 lg:block" aria-hidden="true" />

          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="premium-card border-red-400/20 bg-[#f2ebec] p-6 md:p-8"
          >
            <div className="mb-7 flex items-center gap-3">
              <div className="rounded-2xl border border-red-400/20 bg-red-500/10 p-3 text-red-600">
                <AlertTriangle className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-q-gray-500">Without <QBricksText /></p>
                <h3 className="text-2xl font-black text-q-ink">Data Management Solutions</h3>
              </div>
            </div>
            <ul className="space-y-4">
              {before.map((item) => (
                <li key={item} className="flex items-start gap-3 border-b border-black/5 pb-4 text-q-gray-700 last:border-b-0 last:pb-0">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-red-400/85" />
                  <span>{brand(item)}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="hidden w-20 items-center justify-center lg:flex">
            <div className="relative flex h-full w-full items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.2 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex h-14 w-14 items-center justify-center rounded-full border-2 border-q-brand/85 bg-[#e2e2e8] text-q-brand-ember"
              >
                <QIcon className="h-6 w-6" />
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="premium-card border-emerald-400/25 bg-[#edf3f1] p-6 md:p-8"
          >
            <div className="relative mb-7 flex items-center gap-3">
              <div
                className="rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-3 text-emerald-600"
              >
                <Layers3 className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-emerald-600/80">With <QBricksText /></p>
                <h3 className="text-2xl font-black text-q-ink">Governed foundation</h3>
              </div>
            </div>
            <ul className="relative space-y-4">
              {after.map((item, index) => (
                <li key={item} className="flex items-start gap-3 border-b border-black/5 pb-4 text-q-ink last:border-b-0 last:pb-0">
                  <motion.span
                    initial={{ opacity: 0, scale: 0.2 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.16, ease: [0.22, 1, 0.36, 1] }}
                    className="shrink-0"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" />
                  </motion.span>
                  <span>{brand(item)}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {valueCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="rounded-3xl border border-black/10 bg-black/[0.03] p-6"
              >
                <Icon className="mb-5 h-7 w-7 text-q-brand-ember" />
                <h4 className="text-xl font-black text-q-ink">{brand(card.title)}</h4>
                <p className="mt-3 leading-relaxed text-q-gray-600">{brand(card.text)}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
