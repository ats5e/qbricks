"use client";

import { motion } from "framer-motion";
import { Check, FileSearch, Gauge, ShieldCheck, X } from "lucide-react";
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
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-center lg:gap-20">
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
          <div className="max-w-xl">
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

        {/* Before → after: each row pairs what an organisation carries today with what replaces it */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mt-16 overflow-hidden rounded-[2rem] border border-black/[0.08] bg-white shadow-[0_24px_60px_rgba(0,0,0,0.05)]"
        >
          <div className="grid lg:grid-cols-2">
            <div className="border-b border-black/[0.08] px-6 py-6 md:px-10 md:py-8 lg:border-b-0 lg:border-r">
              <p className="text-sm font-medium text-q-gray-500">Without <QBricksText /></p>
              <h3 className="mt-1 text-2xl font-black tracking-tight text-q-gray-600">Data Management Solutions</h3>
            </div>
            <div className="hidden bg-q-brand/[0.035] px-10 py-8 lg:block">
              <div className="flex items-center gap-3">
                <QIcon className="h-7 w-7" />
                <div>
                  <p className="text-sm font-medium text-q-brand-ember">With <QBricksText /></p>
                  <h3 className="mt-1 text-2xl font-black tracking-tight text-q-ink">Governed foundation</h3>
                </div>
              </div>
            </div>
          </div>

          <ol>
            {before.map((item, index) => (
              <li key={item} className="grid border-t border-black/[0.06] lg:grid-cols-2">
                <div className="flex items-start gap-3 px-6 pb-2 pt-5 text-q-gray-500 md:px-10 lg:border-r lg:border-black/[0.08] lg:py-5">
                  <X className="mt-1 h-4 w-4 shrink-0 text-q-gray-400" />
                  <span>{brand(item)}</span>
                </div>
                <motion.div
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: 0.15 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-start gap-3 bg-q-brand/[0.035] px-6 pb-5 pt-2 font-medium text-q-ink md:px-10 lg:py-5"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-q-brand text-white">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <span>{brand(after[index])}</span>
                </motion.div>
              </li>
            ))}
          </ol>
        </motion.div>

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
