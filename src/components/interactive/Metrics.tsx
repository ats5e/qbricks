"use client";

import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle2, FileSearch, Gauge, Layers3, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { QIcon } from "@/components/ui/QIcon";
import { QBricksText } from "@/components/ui/QBricksText";

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
            Everyone is racing to deploy A.I. The issue? The underlying data is not ready.
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
            To date, the answer to the data quality issue has been to throw money at the problem. Money for data remediation, for data engineers, for data management platforms, for pipeline building and on-going pipeline management, all underpinned by cloud and compute costs.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, delay: 0.2 }}
            className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-q-gray-400"
          >
            Organisations are now recognising that all of these costs outweigh the potential savings that can be made by adopting A.I. Industry is stuck and value from AI is under scrutiny.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, delay: 0.25 }}
            className="mx-auto mt-6 max-w-3xl text-xl font-black leading-relaxed text-white"
          >
            A different approach is needed. <QBricksText />.
          </motion.p>
        </div>

        <div className="relative mt-16 grid gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
          {/* Connecting beam with travelling pulses (desktop) */}
          <div
            className="absolute inset-x-10 top-1/2 hidden h-0.5 lg:block"
            style={{
              background: "linear-gradient(90deg, rgba(239,68,68,0.35), rgba(232,32,15,0.85), rgba(52,211,153,0.5))",
              boxShadow: "0 0 18px rgba(232,32,15,0.4)",
            }}
            aria-hidden="true"
          >
            <div
              className="absolute -top-[3px] h-2 w-2 rounded-full bg-[#ff6a64] shadow-[0_0_14px_rgba(255,58,38,0.9)]"
              style={{ animation: "cc-travel 4.5s ease-in-out infinite" }}
            />
            <div
              className="absolute -top-[3px] h-2 w-2 rounded-full bg-[#ff6a64] shadow-[0_0_14px_rgba(255,58,38,0.9)]"
              style={{ animation: "cc-travel 4.5s ease-in-out 2.2s infinite" }}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="premium-card border-red-400/20 bg-gradient-to-br from-[#26181a]/90 to-[#0f0b0c]/90 p-6 md:p-8"
          >
            <div className="mb-7 flex items-center gap-3">
              <div className="rounded-2xl border border-red-400/20 bg-red-500/10 p-3 text-red-300">
                <AlertTriangle className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-q-gray-500">Without <QBricksText /></p>
                <h3 className="text-2xl font-black text-white">Data Management Solutions</h3>
              </div>
            </div>
            <ul className="space-y-4">
              {before.map((item, index) => (
                <li key={item} className="flex items-start gap-3 border-b border-white/5 pb-4 text-q-gray-300 last:border-b-0 last:pb-0">
                  <span
                    className="mt-2 h-2 w-2 shrink-0 rounded-full bg-red-400/85 shadow-[0_0_10px_rgba(239,68,68,0.6)]"
                    style={{ animation: `cc-blink ${[2.6, 3.4, 2.9, 3.8, 3.1][index % 5]}s ease-in-out infinite` }}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
              <div
                className="absolute inset-y-0 left-0 w-[38%]"
                style={{
                  background: "linear-gradient(105deg, transparent, rgba(255,255,255,0.04), transparent)",
                  animation: "cc-sweep 8s linear 3s infinite",
                }}
              />
            </div>
          </motion.div>

          <div className="hidden w-20 items-center justify-center lg:flex">
            <div className="relative flex h-full w-full items-center justify-center">
              <div
                className="absolute h-24 w-24 rounded-full"
                style={{
                  background: "radial-gradient(circle, rgba(232,32,15,0.35), transparent 70%)",
                  animation: "cc-halo 4s ease-in-out infinite",
                }}
              />
              <div
                className="absolute h-[74px] w-[74px] rounded-full border border-dashed border-q-brand/50"
                style={{ animation: "cc-spin 18s linear infinite" }}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.2 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex h-14 w-14 items-center justify-center rounded-full border-2 border-q-brand/85 bg-[#17171d] text-q-brand-ember"
                style={{ animation: "cc-hub-pulse 3.4s ease-in-out infinite" }}
              >
                <QIcon className="h-6 w-6" />
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="premium-card border-emerald-400/25 bg-gradient-to-bl from-[#16221e]/90 to-[#0b0f0d]/90 p-6 md:p-8"
          >
            <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-emerald-400/10 blur-[90px]" />
            <div className="relative mb-7 flex items-center gap-3">
              <div
                className="rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-3 text-emerald-300"
                style={{ animation: "cc-green-glow 3.6s ease-in-out infinite" }}
              >
                <Layers3 className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-emerald-300/80">With <QBricksText /></p>
                <h3 className="text-2xl font-black text-white">Governed foundation</h3>
              </div>
            </div>
            <ul className="relative space-y-4">
              {after.map((item, index) => (
                <li key={item} className="flex items-start gap-3 border-b border-white/5 pb-4 text-white last:border-b-0 last:pb-0">
                  <motion.span
                    initial={{ opacity: 0, scale: 0.2 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.16, ease: [0.22, 1, 0.36, 1] }}
                    className="shrink-0"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-300" />
                  </motion.span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
              <div
                className="absolute inset-y-0 left-0 w-[38%]"
                style={{
                  background: "linear-gradient(105deg, transparent, rgba(255,255,255,0.04), transparent)",
                  animation: "cc-sweep 8s linear 4s infinite",
                }}
              />
            </div>
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
