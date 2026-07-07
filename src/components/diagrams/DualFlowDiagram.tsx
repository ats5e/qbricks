"use client";

import { motion } from "framer-motion";
import { Activity, Building2, Database, FileCheck2, ShieldCheck, Sparkles, UserCheck, Users, Waves } from "lucide-react";
import { ColumnLabel, DiagramHeader, FlowCanvas, FlowCard, type FlowConnector } from "@/components/diagrams/flow";
import { QIcon } from "@/components/ui/QIcon";

/*
 * "Two routes in" — the dual-flow diagram from the site review pack.
 * Option 01: system of record streams directly into QBricks.
 * Option 02: data lands in a governed database first, then QBricks
 * processes and governs it.
 */

const systems = [
  { id: "df-sor-0", icon: Building2, title: "ERP", kicker: "SAP · Oracle" },
  { id: "df-sor-1", icon: Users, title: "CRM", kicker: "Salesforce · Dynamics" },
  { id: "df-sor-2", icon: Database, title: "Operational DB", kicker: "Postgres · SQL Server" },
  { id: "df-sor-3", icon: Activity, title: "Event Streams", kicker: "Kafka · CDC" },
];

const processes = [
  { icon: Waves, title: "Ingest", text: "Incremental change, streamed continuously" },
  { icon: FileCheck2, title: "Data Contract", text: "Every record matched to the ODCS" },
  { icon: ShieldCheck, title: "Governance", text: "Compared in Unity Catalog, auditable" },
  { icon: UserCheck, title: "Human in the loop", text: "Approve before & after — always", highlight: true },
  { icon: Sparkles, title: "Agentic metadata", text: "Learns & improves, isolated from the lake" },
];

const connectors: FlowConnector[] = [
  // Option 01 — direct streaming, straight past the governed database
  { from: "df-sor-0", to: "df-hub", packets: 2, duration: 3 },
  { from: "df-sor-1", to: "df-hub", packets: 2, duration: 3.4 },
  // Option 02 — land first, then process & govern
  { from: "df-sor-2", to: "df-govdb", packets: 2, duration: 2.8 },
  { from: "df-sor-3", to: "df-govdb", packets: 2, duration: 3.2 },
  { from: "df-govdb", to: "df-hub", packets: 2, duration: 2.6 },
];

export function DualFlowDiagram() {
  return (
    <section id="two-routes" className="section-y relative overflow-hidden border-y border-white/5 bg-q-black">
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-q-brand-ember/[0.06] blur-[150px]" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />

      <div className="container-x relative z-10">
        <DiagramHeader
          eyebrow="Two routes in"
          title={
            <>
              From system of record to QBricks — <span className="text-q-brand-ember">direct, or landed first.</span>
            </>
          }
          intro="Stream straight from your systems of record into QBricks, or land data in a governed database first — either way, every record is processed and governed the same way."
        />

        <div className="-mx-6 mt-14 overflow-x-auto px-6 pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:mx-0 lg:flex lg:justify-center lg:px-0">
          <FlowCanvas width={1120} connectors={connectors}>
            <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-14">
              {/* Systems of record */}
              <div className="w-[220px] flex-none self-center">
                <ColumnLabel>Systems of record</ColumnLabel>
                <div className="space-y-3">
                  {systems.map((system, index) => (
                    <FlowCard key={system.id} flowId={system.id} icon={system.icon} title={system.title} kicker={system.kicker} delay={index * 0.07} />
                  ))}
                </div>
              </div>

              {/* Two routes */}
              <div className="w-[300px] flex-none self-center">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="mb-8 text-center"
                >
                  <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-q-brand-ember">Option 01 · Direct streaming</p>
                  <p className="mt-1.5 font-mono text-[10px] tracking-[0.06em] text-q-gray-500">system of record → QBricks, nothing in between</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: 0.25 }}
                >
                  <p className="mb-3 text-center font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-q-brand-ember">Option 02 · Lands in</p>
                  <div
                    data-flow-id="df-govdb"
                    className="rounded-3xl border border-q-brand/60 bg-[#100404]/95 p-6 text-center transition-all duration-300 hover:-translate-y-0.5"
                    style={{ animation: "cc-hub-pulse 4.6s ease-in-out 1s infinite" }}
                  >
                    <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-q-brand-ember text-white shadow-lg">
                      <Database className="h-7 w-7" />
                    </span>
                    <p className="mt-4 text-xl font-black leading-tight text-white">Governed database</p>
                    <p className="mt-1.5 text-sm text-q-gray-400">Structured & unstructured data, unified</p>
                  </div>
                  <p className="mt-3 text-center font-mono text-[10px] tracking-[0.06em] text-q-gray-500">land first, then QBricks processes & governs</p>
                </motion.div>
              </div>

              {/* QBricks processes & governs */}
              <div className="w-[330px] flex-none self-center">
                <motion.div
                  data-flow-id="df-hub"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="rounded-3xl border border-q-brand/60 bg-gradient-to-b from-[#160a0a]/95 to-[#0c0709]/95 p-5"
                  style={{ animation: "cc-hub-pulse 4.2s ease-in-out infinite" }}
                >
                  <div className="mb-1 flex items-center justify-center gap-2.5">
                    <QIcon className="h-6 w-6" />
                    <span className="text-base font-black tracking-tight text-white">Bricks</span>
                  </div>
                  <p className="mb-4 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-q-brand-ember">Processes & governs the data</p>
                  <div className="space-y-1.5">
                    {processes.map((process) => {
                      const Icon = process.icon;
                      return (
                        <div
                          key={process.title}
                          className={`flex items-start gap-3.5 rounded-2xl border p-3.5 transition-colors ${
                            process.highlight ? "border-q-brand/40 bg-q-brand-ember/15" : "border-transparent hover:border-white/10 hover:bg-white/[0.03]"
                          }`}
                        >
                          <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${process.highlight ? "bg-q-brand-ember text-white" : "border border-white/10 bg-white/[0.04] text-q-brand-ember"}`}>
                            <Icon className="h-4 w-4" />
                          </span>
                          <div className="min-w-0">
                            <p className="text-[15px] font-black leading-tight text-white">{process.title}</p>
                            <p className={`mt-0.5 text-[12px] leading-snug ${process.highlight ? "text-q-brand-ember/90" : "text-q-gray-500"}`}>{process.text}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              </div>
            </div>
          </FlowCanvas>
        </div>
      </div>
    </section>
  );
}
