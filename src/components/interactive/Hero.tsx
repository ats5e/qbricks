"use client";

import { motion } from "framer-motion";
import { ArrowRight, Boxes, Cpu, Database, GitBranch, Lightbulb, Network, ShieldCheck, Search } from "lucide-react";
import Link from "next/link";
import { QIcon } from "@/components/ui/QIcon";
import { QBricksText } from "@/components/ui/QBricksText";

const flowSteps = [
  { label: "Data sprawl detection", detail: "Every source in one registry; spot schema drift and stale data", icon: Database, tone: "text-amber-300" },
  { label: "Data Lineage", detail: "Drill to field level across table joins and transformations", icon: GitBranch, tone: "text-blue-300" },
  { label: "Data Ontologies", detail: "Vocabulary, taxonomies, graphs and ontologies", icon: Network, tone: "text-q-brand-ember" },
  { label: "Data Insights", detail: "Quality audits, data readiness and agent insights", icon: Lightbulb, tone: "text-emerald-300" },
  { label: "Agentic data mesh", detail: "60+ governed agents across structured and unstructured data", icon: Boxes, tone: "text-violet-300" },
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

/** The Data Command Centre application window — the centrepiece of the hero graphic. */
function CommandWindow() {
  const activeStep = 1;

  const ActiveIcon = flowSteps[activeStep].icon;

  return (
    <div className="relative flex flex-col overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-[#1e1e28]/95 to-[#0d0d13]/95 shadow-[0_60px_140px_rgba(0,0,0,0.6)]">
      {/* App header */}
      <div className="flex flex-none items-center gap-3.5 border-b border-white/10 px-6 py-4">
        <QIcon className="h-8 w-8" />
        <p className="text-base font-black tracking-tight text-white">Data Command Centre</p>
        <div className="hidden rounded-full border border-q-brand/25 bg-q-brand/10 px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.22em] text-q-brand-ember md:block">
          Capstone
        </div>
        <div className="ml-auto hidden items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-1.5 sm:flex">
          <Cpu className="h-4 w-4 text-emerald-400" />
          <div>
            <p className="text-[9px] uppercase tracking-[0.18em] text-q-gray-400">Compute</p>
            <p className="text-[11px] font-bold text-white">Local compute</p>
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
                className={`rounded-2xl border p-2.5 ${active ? "translate-x-2 border-q-brand/45 bg-q-brand/[0.12]" : "border-white/[0.08] bg-white/[0.035] opacity-55"}`}
              >
                <div className="flex items-center gap-3">
                  <div className={`rounded-xl border border-white/10 bg-white/5 p-2 ${step.tone}`}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <p className="text-sm font-bold text-white">{step.label}</p>
                  <span
                    className={`ml-auto h-2 w-2 rounded-full ${active ? "bg-q-brand-ember shadow-[0_0_10px_rgba(255,58,38,0.8)]" : "bg-white/15"}`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Catalogue of Catalogues orbit panel */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/60 p-5">
          <div className="absolute inset-0 bg-grid-pattern opacity-30" />
          <div className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-q-brand/50 to-transparent" />

          <div className="relative z-10 flex h-full min-h-[355px] flex-col gap-4">
            <div className="flex items-start justify-between gap-4">
              <p className="max-w-[140px] text-xs uppercase leading-relaxed tracking-[0.2em] text-q-gray-500">Catalogue of Catalogues</p>
              <div className="flex flex-col items-end gap-3">
                <div
                  className="whitespace-nowrap rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-300"
                >
                  Audit-ready
                </div>
                <p className="text-right text-sm font-bold text-white">Trusted data<br />products</p>
              </div>
            </div>

            <div className="relative mx-auto flex h-48 w-48 items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-dashed border-white/15" />
              <div className="absolute inset-6 rounded-full border border-dashed border-white/10" />
              <div className="absolute inset-12 rounded-full border border-white/[0.08]" />
              <div
                className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{
                  background: "radial-gradient(circle, rgba(232,32,15,0.2), transparent 70%)",
                }}
              />
              {orbiters.map((orb, i) => {
                const angle = (i / orbiters.length) * Math.PI * 2 - Math.PI / 4;
                return (
                  <div
                    key={`orb-${i}`}
                    className="absolute left-1/2 top-1/2 flex h-7 w-7 items-center justify-center rounded-lg border bg-[#17171d]"
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
                className="relative z-10 flex h-24 w-24 items-center justify-center rounded-[2rem] border border-white/15 bg-white/[0.06] backdrop-blur-2xl"
              >
                <QIcon className="h-12 w-12" />
                <span className={`absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-xl border border-white/15 bg-black/80 ${flowSteps[activeStep].tone}`}>
                  <ActiveIcon className="h-4 w-4" />
                </span>
              </div>
            </div>

            <div className="mt-auto grid grid-cols-3 gap-2.5">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
                <p className="text-[10px] text-q-gray-500">Contracts</p>
                <p className="mt-1 text-xl font-black text-white">42</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
                <p className="text-[10px] text-q-gray-500">Agents</p>
                <p className="mt-1 text-xl font-black text-emerald-300">60+</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
                <p className="text-[10px] text-q-gray-500">Records</p>
                <p className="mt-1 text-xl font-black text-white">5M</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Proof strip */}
      <div className="flex flex-none items-center gap-3 border-t border-white/10 px-5 py-3.5">
        {proofPoints.map(({ value, icon: Icon }) => (
          <div key={value} className="flex flex-1 items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-q-brand/40 bg-q-brand/10 text-q-brand-ember">
              <Icon className="h-3.5 w-3.5" />
            </span>
            <span className="text-[13px] font-black leading-tight tracking-tight text-white">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Desktop stage: the command window on a fixed perspective tilt. */
function CommandStage() {
  return (
    <div className="pointer-events-none absolute left-[48%] top-[54%] hidden h-[760px] w-[940px] -translate-y-1/2 lg:block xl:left-[50%]" aria-hidden="true">
      <div className="absolute inset-0 [transform-style:preserve-3d] [transform:perspective(2600px)_rotateX(22deg)_rotateY(-11deg)_rotateZ(8deg)]">
        <motion.div
          className="absolute left-4 top-24 w-[660px] [transform-style:preserve-3d]"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <CommandWindow />
        </motion.div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <>
    <section id="hero" className="relative isolate flex min-h-[84vh] items-center overflow-hidden bg-q-black pb-8 pt-32 lg:min-h-[86vh] lg:pt-36">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1000px_760px_at_26%_30%,rgba(232,32,15,0.14),transparent_65%)]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-black/85" />
      </div>

      <CommandStage />

      {/* Readability scrim under the copy */}
      <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-[58%] bg-gradient-to-r from-black/80 via-black/35 to-transparent lg:block" aria-hidden="true" />

      <div className="container-x relative z-10">
        <div className="max-w-2xl lg:max-w-[46%] xl:max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="h-display">
              Significantly reduce your <span className="text-q-brand-ember">compute costs.</span>
            </h1>

            <p className="mt-7 max-w-xl text-xl leading-relaxed text-q-gray-300">
              <QBricksText /> combines a high-performance SQL engine with the tools to manage, govern and provide A.I. ready data.
            </p>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-q-gray-400">
              Powered by{" "}
              <Link href="/eos" className="font-bold text-white underline decoration-q-brand/50 underline-offset-4 transition-colors hover:decoration-q-brand-ember">
                EOS
              </Link>
              , designed to reduce unnecessary decoding, data movement and join processing.
            </p>

            <div className="mt-10 flex flex-col gap-3 whitespace-nowrap sm:flex-row sm:flex-wrap">
              <Link href="/contact" className="group inline-flex items-center justify-center gap-2 rounded-full bg-q-brand px-7 py-4 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-q-brand-ember">
                Evaluate your workload
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/eos#benchmarks" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.055] px-7 py-4 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.08]">
                Explore the benchmarks
              </Link>
            </div>
          </motion.div>

          {/* Flat window for mobile / tablet */}
          <motion.div
            className="mx-auto mt-14 w-full max-w-[560px] lg:hidden"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <CommandWindow />
          </motion.div>
        </div>
      </div>
    </section>

      {/* Full-width value banner beneath the hero */}
      <div className="relative border-y border-white/10 bg-q-black py-8 lg:py-10">
        <div className="container-x">
          <p className="text-center text-[clamp(1.35rem,2.5vw,2.15rem)] font-black leading-tight tracking-tight text-white">
            No more data <span className="text-q-brand-ember">pipelines</span>.
          </p>
        </div>
      </div>
    </>
  );
}
