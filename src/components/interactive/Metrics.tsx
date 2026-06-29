"use client";

import { motion } from "framer-motion";
import { AlertTriangle, ArrowRight, CheckCircle2, FileSearch, Gauge, Layers3, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { QIcon } from "@/components/ui/QIcon";

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
  "Streaming data, materialised views",
  "A.I. ready data available in hours not years",
  "Low compute costs. No cloud requirement",
];

const valueCards = [
  { icon: ShieldCheck, title: "Regulatory confidence", text: "Every transformation, agent action and exception is traceable for risk, compliance and internal audit." },
  { icon: Gauge, title: "Speed without chaos", text: "Single-file deployment turns complex infrastructure and workloads into a controlled, repeatable release pattern." },
  { icon: FileSearch, title: "Data teams can prove it", text: "Contracts, products, lineage and knowledge graphs create a shared language between business and technology." },
];

export function Metrics() {
  return (
    <section id="the-problem" className="section-y relative bg-q-black">
      <div className="absolute inset-0 -z-0 overflow-hidden">
        <Image src="/assets/bg-pathway-city.png" alt="" fill className="object-cover object-center opacity-30 mix-blend-screen" sizes="100vw" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_5%,rgba(232,32,15,0.18),transparent_30%),linear-gradient(to_bottom,#000_0%,rgba(0,0,0,0.78)_38%,#000_100%)]" />
      </div>

      <div className="container-x relative z-10">
        <div className="mx-auto max-w-5xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="eyebrow mb-5"
          >
            The executive problem
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75 }}
            className="text-[clamp(2.4rem,5.6vw,5.6rem)] font-black leading-[0.95] tracking-tight text-white"
          >
            Everyone is racing to deploy A.I. The issue? The supporting data is not ready.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-q-gray-300"
          >
            A 2025 MIT report found that around <strong className="font-black text-white">95% of A.I.-related use cases were failing</strong>, not because the models were weak, but because the underlying data quality and metadata foundation could not be trusted.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, delay: 0.15 }}
            className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-q-gray-400"
          >
            To date, the answer to the data quality issue has been to throw money at the problem. Money for data remediation, for data engineers, for data management platforms, for pipeline building and on-going pipeline management, all underpinned by the cloud and compute costs.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, delay: 0.2 }}
            className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-q-gray-400"
          >
            Organisations are now recognising that all of these costs outweigh the potential savings that can be made by adopting A.I.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, delay: 0.25 }}
            className="mx-auto mt-6 max-w-3xl text-xl font-black leading-relaxed text-white"
          >
            A different approach is needed. QBricks.
          </motion.p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="premium-card p-6 md:p-8"
          >
            <div className="mb-7 flex items-center gap-3">
              <div className="rounded-2xl border border-red-400/20 bg-red-500/10 p-3 text-red-300">
                <AlertTriangle className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-q-gray-500">Without QBricks</p>
                <h3 className="text-2xl font-black text-white">Data Management Solutions</h3>
              </div>
            </div>
            <ul className="space-y-4">
              {before.map((item) => (
                <li key={item} className="flex items-start gap-3 text-q-gray-300">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-red-400/80" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="hidden w-20 items-center justify-center lg:flex">
            <div className="relative flex h-full w-full items-center justify-center">
              <div className="absolute h-px w-full bg-gradient-to-r from-white/10 via-q-brand to-white/10" />
              <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-q-brand/40 bg-q-brand/15 text-q-brand-ember shadow-[0_0_42px_rgba(232,32,15,0.32)]">
                <QIcon className="h-6 w-6" />
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="premium-card border-emerald-400/20 p-6 md:p-8"
          >
            <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-emerald-400/10 blur-[90px]" />
            <div className="relative mb-7 flex items-center gap-3">
              <div className="rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-3 text-emerald-300">
                <Layers3 className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-emerald-300/80">With QBricks</p>
                <h3 className="text-2xl font-black text-white">Governed foundation</h3>
              </div>
            </div>
            <ul className="relative space-y-4">
              {after.map((item) => (
                <li key={item} className="flex items-start gap-3 text-white">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" />
                  <span>{item}</span>
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
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
              >
                <Icon className="mb-5 h-7 w-7 text-q-brand-ember" />
                <h4 className="text-xl font-black text-white">{card.title}</h4>
                <p className="mt-3 leading-relaxed text-q-gray-400">{card.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
