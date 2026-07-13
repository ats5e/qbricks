"use client";

import { Building2, Cog, Database, Globe, RefreshCw, ShieldCheck, Warehouse, Waves, BrainCircuit, HardDrive } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Chip,
  ColumnLabel,
  DiagramHeader,
  FlowCanvas,
  FlowCard,
  QBricksHubCard,
  QBricksText,
  type FlowConnector,
} from "@/components/diagrams/flow";

/*
 * "QBricks streaming into Cloudera." — the detailed view diagram from
 * the graphics pack, with the Oracle Lakehouse served downstream.
 */

const dataSources = [
  { id: "cl-data-0", icon: Building2, title: "Business Units", chips: ["Retail", "Investment", "Corporate", "Private & Wealth"] },
  { id: "cl-data-1", icon: Database, title: "Internal Data", chips: ["Customers", "Accounts", "Transactions", "Alerts / Cases"] },
  { id: "cl-data-2", icon: Globe, title: "External Data", chips: ["Corporate Reg", "Watchlists", "Bureau Data"] },
  { id: "cl-data-3", icon: RefreshCw, title: "Data Sourcing", chips: ["Incremental", "BU roll-out", "Streaming CDC"] },
];

const clouderaModules = [
  { icon: Waves, title: "Data in Motion", chips: ["DataFlow (NiFi)", "Streams (Kafka)", "Flink"] },
  { icon: Cog, title: "Data Engineering", chips: ["Spark", "Airflow", "Iceberg tables"] },
  { icon: Warehouse, title: "Data Warehouse", chips: ["Impala", "Hive", "BI serving"] },
  { icon: BrainCircuit, title: "Machine Learning", chips: ["Cloudera AI", "Models", "MLOps"] },
  { icon: HardDrive, title: "Operational DB", chips: ["HBase", "Phoenix", "Low latency"] },
  { icon: ShieldCheck, title: "SDX Governance", chips: ["Ranger", "Atlas", "Lineage & policy"] },
];

const connectors: FlowConnector[] = [
  ...dataSources.map((source) => ({ from: source.id, to: "cl-hub", duration: 3.4 })),
  { from: "cl-hub", to: "cl-platform", packets: 3, duration: 2.4 },
  { from: "cl-platform", to: "cl-oracle", packets: 2, duration: 3 },
];

export function ClouderaFlowDiagram() {
  return (
    <section className="section-y relative overflow-hidden border-t border-white/5 bg-q-black">
      <div className="absolute left-[35%] top-1/2 h-[700px] w-[900px] -translate-y-1/2 rounded-full bg-q-brand-ember/[0.06] blur-[150px]" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />

      <div className="container-x relative z-10">
        <DiagramHeader
          eyebrow="The detailed view"
          title={
            <>
              <QBricksText /> streaming into <span className="text-q-brand-ember">Cloudera.</span>
            </>
          }
          intro="Governed, contract-enforced data lands in Cloudera in hours, powering every function of the platform, with the Oracle Lakehouse served downstream."
        />

        <div className="-mx-6 mt-14 overflow-x-auto px-6 pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:mx-0 lg:px-0">
          <FlowCanvas width={1320} connectors={connectors} label={{ text: "Streaming", afterId: "cl-data-1" }}>
            <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:justify-between">
              {/* Data */}
              <div className="w-[210px] flex-none self-center">
                <ColumnLabel>Data</ColumnLabel>
                <div className="space-y-3">
                  {dataSources.map((source, index) => (
                    <FlowCard key={source.id} flowId={source.id} icon={source.icon} title={source.title} chips={source.chips} delay={index * 0.07} />
                  ))}
                </div>
              </div>

              {/* QBricks hub */}
              <div className="w-[250px] flex-none self-center pt-4">
                <QBricksHubCard flowId="cl-hub" />
              </div>

              {/* Cloudera platform */}
              <div className="w-full max-w-[440px] flex-none self-center lg:w-[440px]">
                <motion.div
                  data-flow-id="cl-platform"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, delay: 0.15 }}
                  className="rounded-3xl border border-dashed border-q-brand/35 bg-white/[0.015] p-5"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <Image src="/assets/partners/Cloudera_logo.webp" alt="Cloudera" width={110} height={22} className="h-4 w-auto object-contain" />
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-q-brand-ember">Downstream platform</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {clouderaModules.map((module, index) => {
                      const Icon = module.icon;
                      return (
                        <motion.div
                          key={module.title}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true, margin: "-60px" }}
                          transition={{ duration: 0.5, delay: 0.25 + index * 0.08 }}
                          className="rounded-xl border border-white/10 bg-[#101014]/90 p-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25"
                        >
                          <p className="flex items-center gap-2 text-[13px] font-black text-white">
                            <Icon className="h-3.5 w-3.5 shrink-0 text-q-brand-ember" /> {module.title}
                          </p>
                          <div className="mt-2.5 flex flex-wrap gap-1.5">
                            {module.chips.map((chip) => (
                              <Chip key={chip}>{chip}</Chip>
                            ))}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                  <p className="mt-4 font-mono text-[9px] tracking-[0.08em] text-q-gray-500">
                    hybrid: on-prem & cloud · open table format (Iceberg)
                  </p>
                </motion.div>
              </div>

              {/* Oracle lakehouse downstream */}
              <div className="w-[220px] flex-none self-center">
                <ColumnLabel>Downstream lakehouse</ColumnLabel>
                <FlowCard
                  flowId="cl-oracle"
                  icon={Database}
                  title="Oracle Lakehouse"
                  kicker="Consumption & serving"
                  chips={["Autonomous DW", "Exadata", "OCI Object Storage", "GoldenGate", "Iceberg reads"]}
                />
              </div>
            </div>
          </FlowCanvas>
        </div>
      </div>
    </section>
  );
}
