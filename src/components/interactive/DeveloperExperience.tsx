"use client";

import { motion } from "framer-motion";
import { Database, FileCheck2, FileText, Globe, Layers3, Package, Server, UploadCloud } from "lucide-react";
import { useEffect, useState } from "react";
import { ColumnLabel, FlowCanvas, FlowCard, type FlowConnector } from "@/components/diagrams/flow";
import { QBricksText } from "@/components/ui/QBricksText";
import { QIcon } from "@/components/ui/QIcon";

const steps = [
  { icon: Server, title: "Establish connections", text: "Connect to your source systems, for example a Databricks lakehouse." },
  { icon: FileCheck2, title: "Build data contracts", text: "Governance and quality are enforced by the Open Data Contract Standard." },
  { icon: Layers3, title: "Create materialised views", text: "Streaming, incremental views keep data current without pipelines." },
  { icon: Package, title: "Create data products", text: "Governed, A.I. ready data products with full lineage and audit." },
  { icon: UploadCloud, title: "Upload to your platform", text: "Deliver to a cloud lakehouse or your own on-premise database." },
];

const sources = [
  { id: "dx-src-0", icon: Server, title: "Core systems" },
  { id: "dx-src-1", icon: Database, title: "Transactions" },
  { id: "dx-src-2", icon: Globe, title: "External data" },
  { id: "dx-src-3", icon: FileText, title: "Files & documents" },
];

const connectors: FlowConnector[] = [
  ...sources.map((source) => ({ from: source.id, to: "dx-hub", duration: 3.2 })),
  { from: "dx-hub", to: "dx-platform", packets: 3, duration: 2.4 },
];

export function DeveloperExperience() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setActiveStep((step) => (step + 1) % steps.length), 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="deployment" className="section-y relative overflow-hidden border-y border-white/5 bg-q-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(232,32,15,0.13),transparent_34%),linear-gradient(to_bottom,#000,rgba(255,255,255,0.025),#000)]" />
      <div className="absolute inset-0 bg-grid-pattern opacity-25" />

      <div className="container-x relative z-10">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <p className="eyebrow mb-5">How it works</p>
          <h2 className="text-[clamp(2.5rem,5vw,5rem)] font-black leading-[0.96] tracking-tight text-white">
            From your systems of record to governed data products.
          </h2>
          <p className="mx-auto mt-7 max-w-3xl text-xl leading-relaxed text-q-gray-300">
            <QBricksText /> connects to your source systems, builds the contracts and views, and delivers governed data products to your platform or your own on-premise database.
          </p>
        </div>

        <div className="-mx-6 overflow-x-auto px-6 pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:mx-0 lg:flex lg:justify-center lg:px-0">
          <FlowCanvas width={1120} connectors={connectors} label={{ text: "Streaming", afterId: "dx-src-1" }}>
            <div className="flex items-start justify-between gap-12">
              {/* Sources */}
              <div className="w-[210px] flex-none self-center">
                <ColumnLabel>Your data</ColumnLabel>
                <div className="space-y-3">
                  {sources.map((source, index) => (
                    <FlowCard key={source.id} flowId={source.id} icon={source.icon} title={source.title} delay={index * 0.07} />
                  ))}
                  <FlowCard icon={Database} title="Governed database" kicker="Structured & unstructured, unified" active />
                </div>
              </div>

              {/* QBricks pipeline hub with cycling steps */}
              <div className="w-[440px] flex-none self-center">
                <motion.div
                  data-flow-id="dx-hub"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7 }}
                  className="rounded-3xl border border-q-brand/60 bg-gradient-to-b from-[#160a0a]/95 to-[#0c0709]/95 p-5"
                  style={{ animation: "cc-hub-pulse 4.2s ease-in-out infinite" }}
                >
                  <div className="mb-4 flex items-center gap-2.5">
                    <QIcon className="h-6 w-6" />
                    <span className="text-base font-black tracking-tight text-white">Bricks</span>
                    <span className="ml-auto font-mono text-[9px] uppercase tracking-[0.2em] text-q-brand-ember">5 steps · one flow</span>
                  </div>
                  <ol className="space-y-2">
                    {steps.map((step, index) => {
                      const Icon = step.icon;
                      const active = activeStep === index;
                      return (
                        <motion.li
                          key={step.title}
                          animate={{ opacity: active ? 1 : 0.55, x: active ? 6 : 0 }}
                          transition={{ duration: 0.4 }}
                          className={`flex items-start gap-3.5 rounded-2xl border p-3.5 transition-all duration-500 ${
                            active ? "border-q-brand/50 bg-q-brand/[0.1] shadow-[0_0_36px_rgba(232,32,15,0.18)]" : "border-white/[0.08] bg-white/[0.03]"
                          }`}
                        >
                          <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border text-base font-black ${
                            active ? "border-q-brand/50 bg-q-brand/20 text-q-brand-ember" : "border-white/10 bg-white/[0.04] text-q-gray-400"
                          }`}>
                            {index + 1}
                          </span>
                          <div className="min-w-0">
                            <p className="flex items-center gap-2 text-[15px] font-black text-white">
                              <Icon className={`h-4 w-4 shrink-0 ${active ? "text-q-brand-ember" : "text-q-gray-500"}`} />
                              {step.title}
                            </p>
                            <p className="mt-0.5 text-[13px] leading-snug text-q-gray-400">{step.text}</p>
                          </div>
                          {active && (
                            <span className="ml-auto mt-1.5 h-2 w-2 shrink-0 rounded-full bg-q-brand-ember shadow-[0_0_10px_rgba(255,58,38,0.8)]" />
                          )}
                        </motion.li>
                      );
                    })}
                  </ol>
                  <p className="mt-4 font-mono text-[9px] tracking-[0.08em] text-q-gray-500">
                    governed · contract-enforced · audit-ready
                  </p>
                </motion.div>
              </div>

              {/* Delivery */}
              <div className="w-[210px] flex-none self-center">
                <ColumnLabel>Delivered to</ColumnLabel>
                <FlowCard
                  flowId="dx-platform"
                  icon={UploadCloud}
                  title="Your platform"
                  kicker="Cloud or on-premise"
                  chips={["Databricks", "Microsoft Fabric", "Snowflake", "Cloudera", "On-premise DB"]}
                />
              </div>
            </div>
          </FlowCanvas>
        </div>
      </div>
    </section>
  );
}
