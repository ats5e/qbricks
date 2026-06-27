"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Boxes, CheckCircle2, Cpu, Database, FileCheck2, GitBranch, Layers3, Lightbulb, Network, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const flowSteps = [
  { label: "Data sprawl detection", detail: "Every source in one registry; spot schema drift and stale data", icon: Database, tone: "text-amber-300" },
  { label: "Data Lineage", detail: "Drill to field level across table joins and transformations", icon: GitBranch, tone: "text-blue-300" },
  { label: "Data Ontologies", detail: "Vocabulary, taxonomies, graphs and ontologies", icon: Network, tone: "text-q-brand-ember" },
  { label: "Data Insights", detail: "Quality audits, data readiness and agent insights", icon: Lightbulb, tone: "text-emerald-300" },
  { label: "Agentic data mesh", detail: "60+ governed agents across structured and unstructured data", icon: Boxes, tone: "text-violet-300" },
];

const proofPoints = [
  ["Fewer data issues", "Turbo charge your development and testing activities. Deploy faster and for lower cost."],
  ["No Spark", "Lower, local compute cost."],
  ["100% auditable", "Complete on-line audit trail."],
];

const dataProducts = [
  { name: "customer_risk", meta: "ODCS contract", tag: "Governed", icon: FileCheck2 },
  { name: "transactions_resolved", meta: "Materialised view", tag: "Lineage", icon: Layers3 },
  { name: "sanctions_screening", meta: "Streamed to lakehouse", tag: "Trusted", icon: ShieldCheck },
];

function DataCommandCentre() {
  const [activeStep, setActiveStep] = useState(0);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 120, damping: 18 });
  const springY = useSpring(rotateY, { stiffness: 120, damping: 18 });
  const transform = useTransform([springX, springY], ([x, y]) => `perspective(1100px) rotateX(${x}deg) rotateY(${y}deg)`);

  useEffect(() => {
    const interval = setInterval(() => setActiveStep((step) => (step + 1) % flowSteps.length), 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-12 w-full lg:mt-0 lg:block">
      <div className="relative mx-auto w-full max-w-[560px]">
        <div className="absolute left-1/2 top-1/2 h-[460px] w-full max-w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-q-brand/15 blur-[140px]" />
        <motion.div
          className="relative rounded-[2.25rem] border border-white/10 bg-white/[0.035] p-4 shadow-[0_40px_120px_rgba(0,0,0,0.65)] backdrop-blur-3xl"
          style={{ transform }}
          onMouseMove={(event) => {
            const rect = event.currentTarget.getBoundingClientRect();
            rotateX.set(((event.clientY - rect.top) / rect.height - 0.5) * -9);
            rotateY.set(((event.clientX - rect.left) / rect.width - 0.5) * 9);
          }}
          onMouseLeave={() => {
            rotateX.set(0);
            rotateY.set(0);
          }}
          initial={{ opacity: 0, y: 32, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
        >
          <div className="absolute inset-0 rounded-[inherit] bg-[radial-gradient(circle_at_30%_10%,rgba(255,255,255,0.16),transparent_28%),radial-gradient(circle_at_88%_10%,rgba(232,32,15,0.24),transparent_34%)]" />

          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#050505]/92">
            {/* App header */}
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
              <div className="flex items-center gap-5">
                <Image src="/assets/qbricks-logo.png" alt="QBricks" width={140} height={32} className="h-9 w-auto" />
                <div className="hidden rounded-full border border-q-brand/25 bg-q-brand/10 px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.22em] text-q-brand-ember sm:block">
                  Capstone
                </div>
              </div>
              <div className="hidden items-center gap-2.5 rounded-xl bg-white/[0.04] px-3 py-1.5 sm:flex">
                <Cpu className="h-4 w-4 text-emerald-400" />
                <div>
                  <p className="text-[9px] uppercase tracking-[0.18em] text-q-gray-400">Compute</p>
                  <p className="text-[11px] font-bold text-white">Local · No Spark</p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 p-5 md:grid-cols-[0.9fr_1.1fr]">
              {/* Module side menu */}
              <div className="space-y-2.5">
                {flowSteps.map((step, index) => {
                  const Icon = step.icon;
                  const active = activeStep === index;
                  return (
                    <motion.div
                      key={step.label}
                      className={`rounded-2xl border p-3.5 transition-all ${active ? "border-q-brand/45 bg-q-brand/[0.12] shadow-[0_0_40px_rgba(232,32,15,0.18)]" : "border-white/[0.08] bg-white/[0.035]"}`}
                      animate={{ opacity: active ? 1 : 0.55, x: active ? 8 : 0 }}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`rounded-xl border border-white/10 bg-white/5 p-2 ${step.tone}`}>
                          <Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-white">{step.label}</p>
                          <p className="mt-1 text-xs leading-relaxed text-q-gray-400">{step.detail}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Capstone registry / trusted data products */}
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black p-5">
                <div className="absolute inset-0 bg-grid-pattern opacity-30" />
                <motion.div
                  className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-q-brand/70 to-transparent"
                  animate={{ opacity: [0.25, 0.7, 0.25] }}
                  transition={{ duration: 2.4, repeat: Infinity }}
                />

                <div className="relative z-10 flex h-full min-h-[355px] flex-col gap-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-q-gray-500">Catalogue of Catalogues</p>
                      <p className="text-sm font-bold text-white">Trusted data products</p>
                    </div>
                    <div className="whitespace-nowrap rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                      Audit-ready
                    </div>
                  </div>

                  <div className="space-y-2">
                    {dataProducts.map((product, index) => {
                      const Icon = product.icon;
                      return (
                        <motion.div
                          key={product.name}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                          className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5"
                        >
                          <div className="flex items-center gap-2.5">
                            <div className="rounded-lg border border-white/10 bg-white/5 p-1.5 text-q-brand-ember">
                              <Icon className="h-3.5 w-3.5" />
                            </div>
                            <div>
                              <p className="font-mono text-[12px] font-bold text-white">{product.name}</p>
                              <p className="text-[10px] text-q-gray-500">{product.meta}</p>
                            </div>
                          </div>
                          <span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-2 py-0.5 text-[10px] font-bold text-emerald-300">
                            <CheckCircle2 className="h-3 w-3" /> {product.tag}
                          </span>
                        </motion.div>
                      );
                    })}
                  </div>

                  <div className="flex items-center justify-between gap-2 rounded-xl border border-white/10 bg-black/40 px-3 py-2.5 text-[9px] font-bold uppercase tracking-[0.14em] text-q-gray-400">
                    <span>System of record</span>
                    <ArrowRight className="h-3 w-3 shrink-0 text-q-brand-ember" />
                    <span className="text-q-brand-ember">QBricks</span>
                    <ArrowRight className="h-3 w-3 shrink-0 text-q-brand-ember" />
                    <span>Lakehouse / DB</span>
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
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="hero" className="relative isolate flex min-h-screen items-center bg-q-black pt-32 pb-16 lg:pt-36">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute -inset-y-[10%] -left-[25%] w-[150%]"
          animate={{ x: ["-10%", "10%"] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          <Image src="/assets/pixels-dissolve.png" alt="" fill priority className="object-cover object-left opacity-50 mix-blend-screen -scale-x-100" sizes="150vw" />
        </motion.div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(255,58,38,0.22),transparent_28%),radial-gradient(circle_at_72%_18%,rgba(255,255,255,0.08),transparent_22%),linear-gradient(to_bottom,rgba(0,0,0,0.25),#000_90%)]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      </div>

      <div className="container-x relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <h1 className="text-[clamp(2.5rem,5vw,4.25rem)] font-black leading-[0.95] tracking-[-0.04em] text-white">
              No more data <span className="text-q-brand-ember">pipelines.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-q-gray-300">
              Turn your systems of record into governed, A.I.-ready data products, in hours, not months or years. No need for thousands of ungoverned notebooks. No armies of engineers. No compute-led Spark processing. No vendor lock-in. Data governance and lineage are enforced by the Open Data Contract Standard and data products are then passed to Databricks, Microsoft Fabric, Snowflake or your own on-premise database or datalake. Operating as a Catalogue of Catalogues, QBricks can work seamlessly with your existing data management solutions.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3.5 text-sm font-bold text-white shadow-[0_0_50px_rgba(232,32,15,0.3)] transition-all hover:-translate-y-0.5">
                <span className="absolute inset-0 bg-gradient-to-r from-[#c91b0d] via-[#ff3a26] to-[#ff7669]" />
                <span className="absolute inset-y-0 -left-1/2 w-1/3 rotate-12 bg-white/30 blur-xl animate-shimmer" />
                <span className="relative z-10">Request a demo</span>
                <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/product" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.055] px-6 py-3.5 text-sm font-bold text-white backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.08]">
                See how it works
              </Link>
            </div>

            <div className="mt-12 lg:mt-16">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
                {proofPoints.map(([value, label]) => (
                  <div key={value} className="group relative flex flex-col justify-start">
                    {/* Hover Glow Effect */}
                    <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-b from-white/15 to-transparent opacity-0 blur-md transition-all duration-500 group-hover:opacity-100" />

                    {/* Card Content */}
                    <div className="relative flex h-full flex-col justify-start rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-5 backdrop-blur-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:border-white/20 group-hover:from-white/[0.06] group-hover:to-white/[0.02]">
                      <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full border border-q-brand/30 bg-q-brand/10 shadow-[0_0_15px_rgba(232,32,15,0.15)]">
                        <CheckCircle2 className="h-4 w-4 text-q-brand-ember" />
                      </div>
                      <span className="mb-1.5 text-base font-black leading-tight tracking-tight text-white">{value}</span>
                      <p className="text-[0.8rem] font-medium leading-relaxed text-q-gray-400">{label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <DataCommandCentre />
        </div>
      </div>
    </section>
  );
}
