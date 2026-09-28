"use client";

import { Boxes, Cpu, Database, GitBranch, Lightbulb, Network, ShieldCheck, Search } from "lucide-react";
import { QIcon } from "@/components/ui/QIcon";
import { brand } from "@/components/ui/QBricksText";

const flowSteps = [
  { label: "Data sprawl detection", detail: "Every source in one registry; spot schema drift and stale data", icon: Database, tone: "text-amber-600" },
  { label: "Data Lineage", detail: "Drill to field level across table joins and transformations", icon: GitBranch, tone: "text-blue-600" },
  { label: "Data Ontologies", detail: "Vocabulary, taxonomies, graphs and ontologies", icon: Network, tone: "text-q-brand-ember" },
  { label: "Data Insights", detail: "Quality audits, data readiness and agent insights", icon: Lightbulb, tone: "text-emerald-600" },
  { label: "Agentic data mesh", detail: "60+ governed agents across structured and unstructured data", icon: Boxes, tone: "text-violet-600" },
];

const proofPoints = [
  { value: "Fewer data issues", icon: ShieldCheck },
  { value: "Local compute", icon: Cpu },
  { value: "100% auditable", icon: Search },
];

const orbiters = [
  { r: 92, c: "#ff3a26", g: "rgba(255,58,38,0.7)", b: "rgba(255,58,38,0.5)" },
  { r: 92, c: "#3ecf8e", g: "rgba(62,207,142,0.7)", b: "rgba(62,207,142,0.4)" },
  { r: 66, c: "#6ca8f5", g: "rgba(108,168,245,0.7)", b: "rgba(108,168,245,0.4)" },
  { r: 66, c: "#e8b34b", g: "rgba(232,179,75,0.7)", b: "rgba(232,179,75,0.4)" },
];

/** The Data Command Centre application window, shown flat as a product illustration. */
export function CommandCentre() {
  const activeStep = 1;

  const ActiveIcon = flowSteps[activeStep].icon;

  return (
    <div className="relative flex flex-col overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_40px_100px_rgba(0,0,0,0.12)]">
      {/* App header */}
      <div className="flex flex-none items-center gap-3.5 border-b border-black/10 px-6 py-4">
        <QIcon className="h-8 w-8" />
        <p className="text-base font-black tracking-tight text-q-ink">Data Command Centre</p>
        <div className="hidden rounded-full border border-q-brand/25 bg-q-brand/10 px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.22em] text-q-brand-ember md:block">
          Capstone
        </div>
        <div className="ml-auto hidden items-center gap-2.5 rounded-xl border border-black/10 bg-black/[0.04] px-3 py-1.5 sm:flex">
          <Cpu className="h-4 w-4 text-emerald-600" />
          <div>
            <p className="text-[9px] uppercase tracking-[0.18em] text-q-gray-600">Compute</p>
            <p className="text-[11px] font-bold text-q-ink">Local compute</p>
          </div>
        </div>
      </div>

      <div className="grid flex-1 gap-4 p-5 md:grid-cols-[0.9fr_1.1fr]">
        {/* Flow steps */}
        <div className="space-y-2">
          {flowSteps.map((step, index) => {
            const Icon = step.icon;
            const active = activeStep === index;
            return (
              <div
                key={step.label}
                className={`rounded-2xl border p-2.5 ${active ? "translate-x-2 border-q-brand/45 bg-q-brand/[0.12]" : "border-black/[0.08] bg-black/[0.035] opacity-55"}`}
              >
                <div className="flex items-center gap-3">
                  <div className={`rounded-xl border border-black/10 bg-black/5 p-2 ${step.tone}`}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <p className="text-sm font-bold text-q-ink">{brand(step.label)}</p>
                  <span
                    className={`ml-auto h-2 w-2 rounded-full ${active ? "bg-q-brand-ember shadow-[0_0_10px_rgba(255,58,38,0.8)]" : "bg-black/15"}`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Catalogue of Catalogues orbit panel */}
        <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-q-panel p-5">
          <div className="absolute inset-0 bg-grid-pattern opacity-30" />
          <div className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-q-brand/50 to-transparent" />

          <div className="relative z-10 flex h-full min-h-[355px] flex-col gap-4">
            <div className="flex items-start justify-between gap-4">
              <p className="max-w-[140px] text-xs uppercase leading-relaxed tracking-[0.2em] text-q-gray-500">Catalogue of Catalogues</p>
              <div className="flex flex-col items-end gap-3">
                <div
                  className="whitespace-nowrap rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-600"
                >
                  Audit-ready
                </div>
                <p className="text-right text-sm font-bold text-q-ink">Trusted data<br />products</p>
              </div>
            </div>

            <div className="relative mx-auto flex h-48 w-48 items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-dashed border-black/15" />
              <div className="absolute inset-6 rounded-full border border-dashed border-black/10" />
              <div className="absolute inset-12 rounded-full border border-black/[0.08]" />
              <div
                className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{
                  background: "radial-gradient(circle, rgba(232,32,15,0.11), transparent 70%)",
                }}
              />
              {orbiters.map((orb, i) => {
                const angle = (i / orbiters.length) * Math.PI * 2 - Math.PI / 4;
                return (
                  <div
                    key={`orb-${i}`}
                    className="absolute left-1/2 top-1/2 flex h-7 w-7 items-center justify-center rounded-lg border bg-[#e2e2e8]"
                    style={{
                      transform: `translate(calc(-50% + ${Math.round(Math.cos(angle) * orb.r)}px), calc(-50% + ${Math.round(Math.sin(angle) * orb.r)}px))`,
                      borderColor: orb.b,
                    }}
                  >
                    <div className="h-2 w-2 rounded-[3px]" style={{ background: orb.c, boxShadow: `0 0 10px ${orb.g}` }} />
                  </div>
                );
              })}
              <div
                className="relative z-10 flex h-24 w-24 items-center justify-center rounded-[2rem] border border-black/15 bg-black/[0.06] backdrop-blur-2xl"
              >
                <QIcon className="h-12 w-12" />
                <span className={`absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-xl border border-black/15 bg-white/80 ${flowSteps[activeStep].tone}`}>
                  <ActiveIcon className="h-4 w-4" />
                </span>
              </div>
            </div>

            <div className="mt-auto grid grid-cols-3 gap-2.5">
              <div className="rounded-2xl border border-black/10 bg-black/[0.04] p-3">
                <p className="text-[10px] text-q-gray-500">Contracts</p>
                <p className="mt-1 text-xl font-black text-q-ink">42</p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-black/[0.04] p-3">
                <p className="text-[10px] text-q-gray-500">Agents</p>
                <p className="mt-1 text-xl font-black text-emerald-600">60+</p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-black/[0.04] p-3">
                <p className="text-[10px] text-q-gray-500">Records</p>
                <p className="mt-1 text-xl font-black text-q-ink">5M</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Proof strip */}
      <div className="flex flex-none items-center gap-3 border-t border-black/10 px-5 py-3.5">
        {proofPoints.map(({ value, icon: Icon }) => (
          <div key={value} className="flex flex-1 items-center gap-2.5 rounded-xl border border-black/10 bg-black/[0.03] px-3 py-2.5">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-q-brand/40 bg-q-brand/10 text-q-brand-ember">
              <Icon className="h-3.5 w-3.5" />
            </span>
            <span className="text-[13px] font-black leading-tight tracking-tight text-q-ink">{brand(value)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
