"use client";

import {
  ArrowLeftRight,
  BarChart3,
  BrainCircuit,
  CreditCard,
  FileText,
  Landmark,
  Layers3,
  Repeat2,
  Scale,
  ScanSearch,
  ShieldAlert,
  ShieldCheck,
  TrendingUp,
  UserCheck,
  Users2,
} from "lucide-react";
import { useEffect, useState } from "react";
import {
  ColumnLabel,
  DiagramHeader,
  FlowCanvas,
  FlowCard,
  QBricksHubCard,
  QBricksText,
  type FlowConnector,
} from "@/components/diagrams/flow";

/*
 * "From system of record to AI use case, in hours." — the ecosystem
 * diagram from the graphics pack. Replaces the old architecture map.
 */

const systemsOfRecord = [
  { id: "sor-0", icon: Landmark, title: "Core Banking", kicker: "Temenos · Flexcube" },
  { id: "sor-1", icon: ArrowLeftRight, title: "Payments", kicker: "SWIFT · SEPA · Instant" },
  { id: "sor-2", icon: CreditCard, title: "Cards", kicker: "Issuing · Processing" },
  { id: "sor-3", icon: TrendingUp, title: "Treasury & Trading", kicker: "Murex · Calypso" },
  { id: "sor-4", icon: Users2, title: "CRM & Onboarding", kicker: "Salesforce · Dynamics" },
];

const lanes = [
  { id: "lane-0", icon: BarChart3, title: "BI & Analytics", tag: "Lane 01", chips: ["Power BI", "Tableau", "Qlik", "Looker"] },
  { id: "lane-1", icon: BrainCircuit, title: "AI & ML Serving", tag: "Lane 02", chips: ["Mosaic AI", "MLflow", "Azure ML", "Vector stores"] },
  { id: "lane-2", icon: Repeat2, title: "Operational Activation", tag: "Lane 03", chips: ["Hightouch", "Census", "Kafka", "Low-latency stores"] },
  { id: "lane-3", icon: Scale, title: "Regulatory & Decisioning", tag: "Lane 04", chips: ["Quantexa"] },
  { id: "lane-4", icon: ShieldCheck, title: "Governance & Observability", tag: "Metadata", chips: ["Collibra", "Alation", "Purview", "Monte Carlo"] },
];

const useCases = [
  { id: "uc-0", icon: ScanSearch, title: "AML" },
  { id: "uc-1", icon: UserCheck, title: "KYC" },
  { id: "uc-2", icon: ShieldAlert, title: "Fraud" },
  { id: "uc-3", icon: FileText, title: "Regulatory Reporting" },
];

const connectors: FlowConnector[] = [
  ...systemsOfRecord.map((s) => ({ from: s.id, to: "hub", duration: 3.4 })),
  { from: "hub", to: "lakehouse", packets: 2, duration: 2.6 },
  ...lanes.map((lane) => ({ from: "lakehouse", to: lane.id, duration: 3 })),
  { from: "lane-1", to: "uc-0", duration: 3.6 },
  { from: "lane-1", to: "uc-1", duration: 3.6 },
  { from: "lane-3", to: "uc-2", duration: 3.6 },
  { from: "lane-3", to: "uc-3", duration: 3.6 },
];

export function EcosystemDiagram({ emphasis = false }: { emphasis?: boolean }) {
  const [activeLane, setActiveLane] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setActiveLane((lane) => (lane + 1) % lanes.length), 2600);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="architecture" className="section-y relative overflow-hidden border-y border-white/5 bg-q-black">
      <div className="absolute left-1/2 top-1/2 h-[760px] w-[980px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-q-brand-ember/[0.07] blur-[150px]" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />

      <div className="container-x relative z-10">
        <DiagramHeader
          eyebrow="The ecosystem"
          title={
            <>
              Feed any AI use case, <span className="text-q-brand-ember">in hours.</span>
            </>
          }
          intro="QBricks — the Data Management Platform — accelerates the platforms you already run, streaming governed, AI-ready data from your systems of record straight into production use cases."
        />

        <div className="-mx-6 mt-14 overflow-x-auto px-6 pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:mx-0 lg:px-0">
          <FlowCanvas width={1320} connectors={connectors} label={{ text: "Streaming", afterId: "sor-1" }}>
            <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:justify-between">
              {/* Systems of record */}
              <div className="w-[200px] flex-none self-center">
                <ColumnLabel>Systems of record</ColumnLabel>
                <div className="space-y-3">
                  {systemsOfRecord.map((system, index) => (
                    <FlowCard key={system.id} flowId={system.id} icon={system.icon} title={system.title} kicker={system.kicker} delay={index * 0.07} />
                  ))}
                </div>
              </div>

              {/* QBricks hub */}
              <div className="w-[250px] flex-none self-center pt-6">
                <QBricksHubCard flowId="hub" />
              </div>

              {/* Lakehouse */}
              <div className="w-[190px] flex-none self-center">
                <ColumnLabel className="text-center">The lakehouse</ColumnLabel>
                <FlowCard flowId="lakehouse" icon={Layers3} title="The Lakehouse" kicker="Governed landing zone" chips={["Databricks", "Microsoft Fabric", "Snowflake", "Cloudera"]} />
              </div>

              {/* Consumption lanes */}
              <div className={`relative w-[250px] flex-none ${emphasis ? "rounded-3xl" : ""}`}>
                {emphasis && (
                  <div
                    className="pointer-events-none absolute -inset-4 rounded-3xl"
                    style={{ background: "radial-gradient(320px 460px at 50% 50%, rgba(232,32,15,0.12), transparent 75%)", animation: "cc-breathe 8s ease-in-out infinite" }}
                  />
                )}
                <ColumnLabel className={emphasis ? "text-q-brand-ember/80" : ""}>Consumption lanes</ColumnLabel>
                <div className="space-y-3">
                  {lanes.map((lane, index) => (
                    <FlowCard
                      key={lane.id}
                      flowId={lane.id}
                      icon={lane.icon}
                      title={
                        <span className="flex items-center justify-between gap-2">
                          {lane.title}
                          <span className={`font-mono text-[8px] uppercase tracking-[0.16em] ${activeLane === index ? "text-q-brand-ember" : "text-q-gray-500"}`}>
                            {lane.tag}
                          </span>
                        </span>
                      }
                      chips={lane.chips}
                      active={activeLane === index}
                      delay={emphasis ? 0.35 + index * 0.12 : index * 0.07}
                    />
                  ))}
                </div>
              </div>

              {/* AI use cases */}
              <div className="relative w-[190px] flex-none self-center">
                {emphasis && (
                  <div
                    className="pointer-events-none absolute -inset-4 rounded-3xl"
                    style={{ background: "radial-gradient(260px 380px at 50% 50%, rgba(232,32,15,0.14), transparent 75%)", animation: "cc-breathe 8s ease-in-out 1.5s infinite" }}
                  />
                )}
                <ColumnLabel className={emphasis ? "text-q-brand-ember/80" : ""}>AI use cases</ColumnLabel>
                <div className="space-y-3">
                  {useCases.map((useCase, index) => (
                    <FlowCard
                      key={useCase.id}
                      flowId={useCase.id}
                      icon={useCase.icon}
                      title={useCase.title}
                      delay={emphasis ? 0.5 + index * 0.12 : index * 0.07}
                      className={emphasis ? "!border-q-brand/45 shadow-[0_0_30px_rgba(232,32,15,0.12)]" : "!border-q-brand/25"}
                    />
                  ))}
                </div>
              </div>
            </div>
          </FlowCanvas>
        </div>

        <p className="mx-auto mt-14 max-w-4xl text-center text-[clamp(1.4rem,2.6vw,2.1rem)] font-black leading-snug tracking-tight text-white">
          “<QBricksText /> streams governed, contract-enforced data forward — every lane inherits the same{" "}
          <span className="text-q-brand-ember">trusted foundation</span>.”
        </p>
      </div>
    </section>
  );
}
