"use client";

import { Building2, Database, FolderSearch, Globe, Layers3, RefreshCw, Sparkles } from "lucide-react";
import {
  ColumnLabel,
  DiagramHeader,
  FlowCanvas,
  FlowCard,
  QBricksHubCard,
  type FlowConnector,
} from "@/components/diagrams/flow";

/*
 * "QBricks: the layer between your data and risk detection in
 * Quantexa." — the integrated solution diagram from the graphics pack.
 */

const dataSources = [
  { id: "qx-data-0", icon: Building2, title: "Business Units", chips: ["Retail", "Investment", "Corporate", "Private & Wealth"] },
  { id: "qx-data-1", icon: Database, title: "Internal Data", chips: ["Customers", "Accounts", "Transactions", "Alerts / Cases"] },
  { id: "qx-data-2", icon: Globe, title: "External Data", chips: ["Corporate Reg", "Watchlists", "Bureau Data"] },
  { id: "qx-data-3", icon: RefreshCw, title: "Data Sourcing", chips: ["Incremental", "BU roll-out", "Streaming CDC"] },
];

const connectors: FlowConnector[] = [
  ...dataSources.map((source) => ({ from: source.id, to: "qx-hub", duration: 3.4 })),
  { from: "qx-hub", to: "qx-lakehouse", packets: 2, duration: 2.4 },
  { from: "qx-lakehouse", to: "qx-risk", packets: 2, duration: 2.6 },
  { from: "qx-risk", to: "qx-cases", packets: 2, duration: 2.8 },
];

export function QuantexaFlowDiagram() {
  return (
    <section className="section-y relative overflow-hidden border-t border-white/5 bg-q-black">
      <div className="absolute left-[30%] top-1/2 h-[700px] w-[900px] -translate-y-1/2 rounded-full bg-q-brand-ember/[0.06] blur-[150px]" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />

      <div className="container-x relative z-10">
        <DiagramHeader
          eyebrow="The integrated solution"
          title={
            <>
              QBricks: the layer between your data <span className="text-q-brand-ember">and risk detection in Quantexa.</span>
            </>
          }
          intro="Every risk model, investigation and case inherits the quality of the data beneath it. QBricks sits between the two — streaming governed, contract-enforced data forward."
        />

        <div className="-mx-6 mt-14 overflow-x-auto px-6 pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:mx-0 lg:px-0">
          <FlowCanvas width={1320} connectors={connectors} label={{ text: "Streaming", afterId: "qx-data-1" }}>
            <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:justify-between">
              {/* Data */}
              <div className="w-[220px] flex-none self-center">
                <ColumnLabel>Data</ColumnLabel>
                <div className="space-y-3">
                  {dataSources.map((source, index) => (
                    <FlowCard key={source.id} flowId={source.id} icon={source.icon} title={source.title} chips={source.chips} delay={index * 0.07} />
                  ))}
                </div>
              </div>

              {/* QBricks hub */}
              <div className="w-[250px] flex-none self-center pt-4">
                <QBricksHubCard flowId="qx-hub" />
              </div>

              {/* Lakehouse */}
              <div className="w-[180px] flex-none self-center">
                <ColumnLabel className="text-center">The lakehouse</ColumnLabel>
                <FlowCard flowId="qx-lakehouse" icon={Layers3} title="Data Management Layer" chips={["Databricks", "Microsoft Fabric", "Snowflake"]} />
              </div>

              {/* Risk detection */}
              <div className="w-[270px] flex-none self-center">
                <FlowCard
                  flowId="qx-risk"
                  title="Risk Detection"
                  kicker="Financial crime & AML identification"
                  footer="databricks · quantexa"
                >
                  <div className="mt-4 space-y-3">
                    <div className="rounded-xl border border-white/10 bg-black/30 p-3">
                      <p className="mb-2 flex items-center gap-2 text-[12px] font-black text-white">
                        <FolderSearch className="h-3.5 w-3.5 text-q-brand-ember" /> Data Products
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {["Transactions", "Client Reference", "Resolved Entity", "Corp Hierarchies", "UBO", "Network"].map((chip) => (
                          <span key={chip} className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-1 font-mono text-[10px] leading-none text-q-gray-300">
                            {chip}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-black/30 p-3">
                      <p className="mb-2 flex items-center gap-2 text-[12px] font-black text-white">
                        <Sparkles className="h-3.5 w-3.5 text-q-brand-ember" /> Data & ML Engineering
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {["Machine Learning", "Models", "Rules", "Decision Systems"].map((chip) => (
                          <span key={chip} className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-1 font-mono text-[10px] leading-none text-q-gray-300">
                            {chip}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </FlowCard>
              </div>

              {/* Alert & case investigations */}
              <div className="w-[280px] flex-none self-center">
                <FlowCard
                  flowId="qx-cases"
                  title="Alert & Case Investigations"
                  kicker="Better decisions, less operational time"
                  footer="camunda · pega · appian · agent & LLM agnostic"
                >
                  <div className="mt-4 space-y-3">
                    <div className="rounded-xl border border-white/10 bg-black/30 p-3">
                      <p className="mb-2 text-[12px] font-black text-white">Case Management</p>
                      <div className="flex flex-wrap gap-1.5">
                        {["Investigations UI", "Request for Info", "Decision / QC", "File SAR"].map((chip) => (
                          <span key={chip} className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-1 font-mono text-[10px] leading-none text-q-gray-300">
                            {chip}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-xl border border-q-brand/30 bg-q-brand/[0.05] p-3">
                      <p className="mb-2 text-[12px] font-black text-white">Advanced AI with LLM</p>
                      <div className="flex flex-wrap gap-1.5">
                        {["Data Intelligence", "Case Narrative", "Q Assist", "Agentic AI · GenAI"].map((chip) => (
                          <span key={chip} className="rounded-md border border-q-brand/35 bg-q-brand/10 px-2 py-1 font-mono text-[10px] leading-none text-q-brand-ember">
                            {chip}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </FlowCard>
              </div>
            </div>
          </FlowCanvas>
        </div>
      </div>
    </section>
  );
}
