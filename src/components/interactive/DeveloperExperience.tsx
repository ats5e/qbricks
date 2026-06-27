"use client";

import { motion } from "framer-motion";
import { ArrowRight, Database, FileCheck2, Layers3, Package, Server, UploadCloud } from "lucide-react";

const steps = [
  { icon: Server, title: "Establish connections", text: "Connect to your source systems, for example a Databricks lakehouse." },
  { icon: FileCheck2, title: "Build data contracts", text: "Governance and quality are enforced by the Open Data Contract Standard." },
  { icon: Layers3, title: "Create materialised views", text: "Streaming, incremental views keep data current without pipelines." },
  { icon: Package, title: "Create data products", text: "Governed, A.I. ready data products with full lineage and audit." },
  { icon: UploadCloud, title: "Upload to your platform", text: "Deliver to a cloud lakehouse or your own on-premise database." },
];

const sources = ["Core systems", "Transactions", "External data", "Files & documents"];

export function DeveloperExperience() {
  return (
    <section id="deployment" className="section-y relative overflow-hidden border-y border-white/5 bg-q-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(232,32,15,0.13),transparent_34%),linear-gradient(to_bottom,#000,rgba(255,255,255,0.025),#000)]" />
      <div className="absolute inset-0 bg-grid-pattern opacity-25" />

      <div className="container-x relative z-10">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <p className="eyebrow mb-5">How it works</p>
          <h2 className="text-[clamp(2.5rem,5vw,5rem)] font-black leading-[0.96] tracking-[-0.06em] text-white">
            From your systems of record to governed data products.
          </h2>
          <p className="mx-auto mt-7 max-w-3xl text-xl leading-relaxed text-q-gray-300">
            QBricks connects to your source systems, builds the contracts and views, and delivers governed data products to your platform or your own on-premise database.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          {/* Left: source systems flowing into a database */}
          <div className="premium-card flex flex-col justify-center gap-5 p-6 md:p-8">
            <div className="grid gap-3">
              {sources.map((source) => (
                <div key={source} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-q-gray-200">
                    <Database className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-bold text-white">{source}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center text-q-brand-ember">
              <ArrowRight className="h-6 w-6 rotate-90" />
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-q-brand/30 bg-q-brand/[0.1] px-4 py-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-q-brand/30 bg-q-brand/15 text-q-brand-ember">
                <Database className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-black text-white">Governed database</p>
                <p className="text-xs text-q-gray-400">Structured and unstructured data, unified</p>
              </div>
            </div>
          </div>

          {/* Right: five-step workflow */}
          <div className="premium-card p-6 md:p-8">
            <ol className="flex flex-col gap-4">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.li
                    key={step.title}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-4"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-q-brand/25 bg-q-brand/[0.12] text-lg font-black text-q-brand-ember">
                      {index + 1}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <Icon className="h-4 w-4 text-q-brand-ember" />
                        <h3 className="font-black text-white">{step.title}</h3>
                      </div>
                      <p className="mt-1 text-sm leading-relaxed text-q-gray-400">{step.text}</p>
                    </div>
                  </motion.li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
