"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Activity, Building2, Database, FileCheck2, ShieldCheck, Sparkles, UserCheck, Users, Waves } from "lucide-react";

export function ArchitectureMap() {
  return (
    <section id="architecture" className="section-y relative overflow-hidden border-y border-white/5 bg-q-black">
      {/* Intense red/brand blur */}
      <div className="absolute left-1/2 top-1/2 h-[760px] w-[980px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-q-brand-ember/[0.08] blur-[150px]" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />

      <div className="container-x relative z-10">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <p className="eyebrow mb-5 text-q-brand-ember/80">Enterprise architecture</p>
          <h2 className="text-[clamp(2.5rem,5vw,5rem)] font-black leading-[0.98] tracking-tight text-white">
            From system of record to lakehouse
          </h2>
          <p className="mx-auto mt-7 max-w-3xl text-xl leading-relaxed text-q-gray-300">
            QBricks sits across your operational systems, lakehouse platforms and analytics tooling, enforcing quality, ownership, lineage and auditability before data reaches A.I. or regulatory workflows.
          </p>
        </div>

        <div className="-mx-6 overflow-x-auto px-6 pb-8 lg:mx-0 lg:overflow-visible lg:px-0 lg:pb-0">
          <div className="mx-auto flex min-h-[620px] w-[1120px] items-center justify-between lg:w-full lg:max-w-[1120px] relative">
            <svg className="absolute left-0 top-0 h-full w-full" viewBox="0 0 1120 620" fill="none">
              <defs>
                <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="rgba(232,32,15,0.6)" />
                </marker>
              </defs>
              {/* Paths from left to middle */}
              <path d="M240 166 C300 166 300 310 354 310" stroke="rgba(232,32,15,0.3)" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrow)" />
              <path d="M240 262 C300 262 300 310 354 310" stroke="rgba(232,32,15,0.3)" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrow)" />
              <path d="M240 358 C300 358 300 310 354 310" stroke="rgba(232,32,15,0.3)" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrow)" />
              <path d="M240 454 C300 454 300 310 354 310" stroke="rgba(232,32,15,0.3)" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrow)" />
              
              {/* Path from middle to right */}
              <path d="M640 310 L750 310" stroke="rgba(232,32,15,0.4)" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrow)" />
              
              <DataPacket path="M240 166 C300 166 300 310 354 310" delay={0} />
              <DataPacket path="M240 262 C300 262 300 310 354 310" delay={0.9} />
              <DataPacket path="M240 358 C300 358 300 310 354 310" delay={1.8} />
              <DataPacket path="M240 454 C300 454 300 310 354 310" delay={0.4} />
              
              <DataPacket path="M640 310 L750 310" delay={0} />
              <DataPacket path="M640 310 L750 310" delay={1.5} />
            </svg>

            {/* Left Column: Systems of Record */}
            <div className="z-10 flex w-[240px] flex-col gap-4 py-8 pointer-events-none">
              <p className="text-xs font-black uppercase tracking-[0.15em] text-q-gray-400 mb-2">Systems Of Record</p>
              <SystemNode icon={Building2} title="ERP" subtitle="SAP • Oracle" />
              <SystemNode icon={Users} title="CRM" subtitle="Salesforce • Dynamics" />
              <SystemNode icon={Database} title="Operational DB" subtitle="Postgres • SQL Server" />
              <SystemNode icon={Activity} title="Event Streams" subtitle="Kafka • CDC" />
            </div>

            {/* Middle Column: Governed Database */}
            <div className="z-10 w-[280px] pointer-events-none">
              <p className="text-center text-xs font-black uppercase tracking-[0.15em] text-q-gray-400 mb-6">Lands In</p>
              <motion.div
                className="relative rounded-[2rem] bg-gradient-to-br from-q-brand-ember to-q-brand p-[1.5px] shadow-[0_0_90px_rgba(232,32,15,0.35)]"
                animate={{ boxShadow: ["0 0 60px rgba(232,32,15,0.25)", "0 0 110px rgba(232,32,15,0.5)", "0 0 60px rgba(232,32,15,0.25)"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex flex-col items-center justify-center rounded-[calc(2rem-1.5px)] bg-[#100404] px-6 py-14 text-center border border-white/5">
                  <div className="mb-6 flex h-[72px] w-[72px] items-center justify-center rounded-2xl bg-q-brand-ember text-white shadow-lg">
                    <Database className="h-9 w-9" />
                  </div>
                  <h3 className="mb-3 text-[1.35rem] font-black text-white leading-tight">Governed<br/>database</h3>
                  <p className="text-sm font-medium text-q-gray-400 leading-snug">Structured & unstructured<br/>data, unified</p>
                </div>
              </motion.div>
            </div>

            {/* Right Column: QBricks Processing */}
            <div className="z-10 w-[360px] py-4 pointer-events-none">
              <div className="rounded-3xl border border-q-brand-ember/30 bg-[#0A0505] p-5 shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-q-brand/10 to-transparent opacity-20 pointer-events-none" />
                
                <div className="mb-3 flex justify-center text-white relative z-10">
                  <Image src="/assets/qbricks-logo.png" alt="QBricks" width={160} height={36} className="h-12 w-auto" />
                </div>
                <p className="text-center text-[11px] font-black uppercase tracking-[0.12em] text-q-brand-ember mb-5 relative z-10">Processes & Governs The Data</p>
                
                <div className="flex flex-col gap-1.5 relative z-10">
                  <ProcessStep icon={Waves} title="Ingest" subtitle="Incremental change, streamed continuously" />
                  <ProcessStep icon={FileCheck2} title="Data Contract" subtitle="Every record matched to the ODCS" />
                  <ProcessStep icon={ShieldCheck} title="Governance" subtitle="Compared in Unity Catalog, auditable" />
                  <ProcessStep icon={UserCheck} title="Human in the loop" subtitle="Approve before & after — always" isActive />
                  <ProcessStep icon={Sparkles} title="Agentic metadata" subtitle="Learns & improves, isolated from the lake" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

function SystemNode({ icon: Icon, title, subtitle }: { icon: typeof Database; title: string; subtitle: string }) {
  return (
    <div className="rounded-[1.25rem] border border-white/10 bg-[#161616] p-[1.125rem] transition-colors hover:border-white/20">
      <div className="flex items-center gap-4">
        <div className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-xl bg-white/[0.04] text-q-gray-300">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <h4 className="text-[15px] font-bold text-white leading-none mb-1.5">{title}</h4>
          <p className="text-[11px] font-mono tracking-tight text-q-gray-500">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}

function ProcessStep({ icon: Icon, title, subtitle, isActive = false }: { icon: typeof Waves; title: string; subtitle: string; isActive?: boolean }) {
  return (
    <div className={`flex items-start gap-4 rounded-xl p-[14px] transition-colors ${isActive ? "bg-q-brand-ember/15 border border-q-brand-ember/30" : "border border-transparent"}`}>
      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${isActive ? "bg-q-brand-ember text-white" : "bg-white/[0.03] border border-white/5 text-q-brand-ember"}`}>
        <Icon className="h-5 w-5" />
      </div>
      <div className="pt-0.5">
        <h4 className="text-[15px] font-bold text-white mb-0.5 leading-none">{title}</h4>
        <p className={`text-[12px] leading-snug mt-1 ${isActive ? "text-q-brand-ember/90" : "text-q-gray-500"}`}>{subtitle}</p>
      </div>
    </div>
  );
}

function DataPacket({ path, delay }: { path: string; delay: number }) {
  return (
    <motion.circle
      r="4"
      fill="#ff3a26"
      style={{ filter: "drop-shadow(0 0 8px #ff3a26)", offsetPath: `path('${path}')`, offsetDistance: "var(--offset-distance)" } as any}
      initial={{ "--offset-distance": "0%" } as any}
      animate={{ "--offset-distance": "100%" } as any}
      transition={{ duration: 3.4, ease: "linear", repeat: Infinity, delay }}
    />
  );
}
