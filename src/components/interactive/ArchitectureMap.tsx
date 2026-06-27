"use client";

import { QIcon } from "@/components/ui/QIcon";

import { motion } from "framer-motion";
import { Cpu, Database, FileCheck2, GitBranch, LockKeyhole, Network, Server } from "lucide-react";

export function ArchitectureMap() {
  return (
    <section id="architecture" className="section-y relative overflow-hidden border-y border-white/5 bg-q-black">
      <div className="absolute left-1/2 top-1/2 h-[760px] w-[980px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/[0.08] blur-[150px]" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />

      <div className="container-x relative z-10">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <p className="eyebrow mb-5">Enterprise architecture</p>
          <h2 className="text-[clamp(2.5rem,5vw,5rem)] font-black leading-[0.98] tracking-[-0.06em] text-white">
            The governed control plane between your platforms and A.I.
          </h2>
          <p className="mx-auto mt-7 max-w-3xl text-xl leading-relaxed text-q-gray-300">
            QBricks sits across your operational systems, lakehouse platforms and analytics tooling, enforcing quality, ownership, lineage and auditability before data reaches A.I. or regulatory workflows.
          </p>
        </div>

        <div className="-mx-6 overflow-x-auto px-6 pb-8 lg:mx-0 lg:overflow-visible lg:px-0 lg:pb-0">
          <div className="mx-auto flex h-[620px] w-[1060px] items-center justify-between lg:w-full lg:max-w-6xl">
          <svg className="absolute left-1/2 h-[560px] w-[1060px] -translate-x-1/2" viewBox="0 0 1060 560" fill="none">
            <path d="M160 170 C305 170 345 280 490 280" stroke="rgba(255,255,255,0.13)" strokeWidth="2" />
            <path d="M160 280 C305 280 345 280 490 280" stroke="rgba(255,255,255,0.13)" strokeWidth="2" />
            <path d="M160 390 C305 390 345 280 490 280" stroke="rgba(255,255,255,0.13)" strokeWidth="2" />
            <path d="M570 280 C710 280 755 205 900 205" stroke="rgba(255,255,255,0.13)" strokeWidth="2" />
            <path d="M570 280 C710 280 755 280 900 280" stroke="rgba(255,255,255,0.13)" strokeWidth="2" />
            <path d="M570 280 C710 280 755 355 900 355" stroke="rgba(255,255,255,0.13)" strokeWidth="2" />
            <path d="M570 280 C710 280 755 430 900 430" stroke="rgba(255,255,255,0.13)" strokeWidth="2" />
            <DataPacket path="M160 170 C305 170 345 280 490 280" delay={0} />
            <DataPacket path="M160 280 C305 280 345 280 490 280" delay={0.9} />
            <DataPacket path="M160 390 C305 390 345 280 490 280" delay={1.8} />
            <DataPacket path="M570 280 C710 280 755 205 900 205" delay={0.5} isClean />
            <DataPacket path="M570 280 C710 280 755 280 900 280" delay={1.4} isClean />
            <DataPacket path="M570 280 C710 280 755 355 900 355" delay={2.3} isClean />
            <DataPacket path="M570 280 C710 280 755 430 900 430" delay={3.0} isClean />
          </svg>

          <div className="z-10 flex w-[230px] flex-col gap-6">
            <p className="text-center text-xs font-black uppercase tracking-[0.2em] text-q-gray-500">Systems Of Record</p>
            <SystemNode icon={Database} title="Core systems" subtitle="Customer and account data" />
            <SystemNode icon={Server} title="Transaction systems" subtitle="Payments and events" />
            <SystemNode icon={Network} title="External sources" subtitle="Third-party and SaaS data" />
          </div>

          <div className="z-10 w-[330px]">
            <motion.div
              className="relative rounded-[2rem] bg-gradient-to-br from-q-brand via-q-brand-ember to-white/20 p-[1px] shadow-[0_0_90px_rgba(232,32,15,0.28)]"
              animate={{ boxShadow: ["0 0 60px rgba(232,32,15,0.24)", "0 0 110px rgba(232,32,15,0.42)", "0 0 60px rgba(232,32,15,0.24)"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="rounded-[calc(2rem-1px)] bg-black p-8 text-center">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl border border-q-brand/25 bg-q-brand/[0.12] text-q-brand-ember">
                  <QIcon className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-black text-white">QBricks</h3>
                <div className="mt-6 space-y-3">
                  <SubComponent icon={FileCheck2} label="Data contracts" />
                  <SubComponent icon={Database} label="Data products" />
                  <SubComponent icon={GitBranch} label="Data lineage" />
                  <SubComponent icon={Network} label="Data ontologies" />
                  <SubComponent icon={Cpu} label="Agentic insights" />
                  <SubComponent icon={LockKeyhole} label="Auditable" />
                </div>
              </div>
            </motion.div>
          </div>

          <div className="z-10 flex w-[230px] flex-col gap-6">
            <SystemNode icon={Database} title="Databricks" subtitle="Curated lakehouse" isGreen />
            <SystemNode icon={Database} title="Microsoft Fabric" subtitle="OneLake products" isGreen />
            <SystemNode icon={Database} title="Snowflake" subtitle="Governed warehouse" isGreen />
            <SystemNode icon={Server} title="Oracle" subtitle="On-premise database" isGreen />
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

function SystemNode({ icon: Icon, title, subtitle, isGreen = false }: { icon: typeof Database; title: string; subtitle: string; isGreen?: boolean }) {
  return (
    <div className={`rounded-3xl border p-4 backdrop-blur-xl ${isGreen ? "border-emerald-400/20 bg-emerald-400/[0.055]" : "border-white/10 bg-white/[0.045]"}`}>
      <div className="flex items-center gap-4">
        <div className={`flex h-11 w-11 items-center justify-center rounded-2xl ${isGreen ? "bg-emerald-400/[0.15] text-emerald-300" : "bg-white/[0.08] text-q-gray-200"}`}>
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <h4 className="text-sm font-black text-white">{title}</h4>
          <p className="text-xs font-medium text-q-gray-400">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}

function SubComponent({ icon: Icon, label }: { icon: typeof Cpu; label: string }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.045] px-4 py-3 text-left text-sm font-bold text-q-gray-200">
      <Icon className="h-4 w-4 text-q-brand-ember" />
      {label}
    </div>
  );
}

function DataPacket({ path, delay, isClean = false }: { path: string; delay: number; isClean?: boolean }) {
  return (
    <motion.circle
      r="4"
      fill={isClean ? "#34d399" : "#ff796c"}
      style={{ filter: `drop-shadow(0 0 8px ${isClean ? "#10b981" : "#ff3a26"})`, offsetPath: `path('${path}')`, offsetDistance: "var(--offset-distance)" } as any}
      initial={{ "--offset-distance": "0%" } as any}
      animate={{ "--offset-distance": "100%" } as any}
      transition={{ duration: 3.4, ease: "linear", repeat: Infinity, delay }}
    />
  );
}
