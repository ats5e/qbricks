"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2, Database, FileJson, LockKeyhole, Network, ShieldCheck, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { QIcon } from "@/components/ui/QIcon";

const flowSteps = [
  { label: "Lakehouse sprawl detected", detail: "274 notebooks · schema drift · unclear ownership", icon: Database, tone: "text-amber-300" },
  { label: "Contracts generated", detail: "Quality rules, ownership and controls made explicit", icon: FileJson, tone: "text-q-brand-ember" },
  { label: "Lineage captured", detail: "Every decision is traceable for risk, audit and regulators", icon: Network, tone: "text-blue-300" },
  { label: "AI-ready foundation live", detail: "Auditable Data Products deployed in hours", icon: ShieldCheck, tone: "text-emerald-300" },
];

const proofPoints = [
  ["95% fewer", "data issues"],
  ["Deploy in hours", "not weeks"],
  ["~70% lower cost", "than manual workflows"],
  ["Fully auditable", "end to end"],
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

  const ActiveIcon = flowSteps[activeStep].icon;

  return (
    <div className="relative hidden min-h-[520px] w-full lg:block">
      <div className="absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-q-brand/15 blur-[140px]" />
      <motion.div
        className="absolute inset-x-0 top-4 mx-auto max-w-[560px] rounded-[2.25rem] border border-white/10 bg-white/[0.035] p-4 shadow-[0_40px_120px_rgba(0,0,0,0.65)] backdrop-blur-3xl"
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
        
        <motion.div
          className="absolute left-[160px] top-6 z-20 hidden rounded-2xl border border-white/10 bg-white/[0.08] p-3.5 shadow-2xl backdrop-blur-2xl lg:block"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="flex items-center gap-3">
            <LockKeyhole className="h-5 w-5 text-emerald-300" />
            <div>
              <p className="text-[10px] uppercase tracking-[0.18em] text-q-gray-400">Security</p>
              <p className="text-sm font-bold text-white">Human-in-loop controls</p>
            </div>
          </div>
        </motion.div>

        <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#050505]/92">
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
            <div className="flex items-center gap-2.5">
              <Image src="/assets/qbricks-logo.png" alt="QBricks" width={140} height={32} className="h-7 w-auto" />
            </div>
            <div className="rounded-full border border-q-brand/25 bg-q-brand/10 px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.22em] text-q-brand-ember">
              Control plane
            </div>
          </div>

          <div className="grid gap-4 p-5 md:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-3">
              {flowSteps.map((step, index) => {
                const Icon = step.icon;
                const active = activeStep === index;
                return (
                  <motion.div
                    key={step.label}
                    className={`rounded-2xl border p-4 transition-all ${active ? "border-q-brand/45 bg-q-brand/[0.12] shadow-[0_0_40px_rgba(232,32,15,0.18)]" : "border-white/[0.08] bg-white/[0.035]"}`}
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

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black p-5">
              <div className="absolute inset-0 bg-grid-pattern opacity-30" />
              <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-q-brand/70 to-transparent" />
              <motion.div
                className="absolute inset-y-8 left-1/2 w-px bg-gradient-to-b from-transparent via-white/35 to-transparent"
                animate={{ opacity: [0.25, 0.7, 0.25] }}
                transition={{ duration: 2.4, repeat: Infinity }}
              />

              <div className="relative z-10 flex h-full min-h-[355px] flex-col justify-between">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-q-gray-500">Live deployment</p>
                    <h3 className="mt-2 text-2xl font-black tracking-tight text-white">Metadata foundation</h3>
                  </div>
                  <div className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-300">
                    Audit-ready
                  </div>
                </div>

                <div className="relative mx-auto flex h-48 w-48 items-center justify-center">
                  {[0, 1, 2].map((ring) => (
                    <motion.div
                      key={ring}
                      className="absolute rounded-full border border-white/10"
                      style={{ inset: `${ring * 24}px` }}
                      animate={{ rotate: ring % 2 ? -360 : 360 }}
                      transition={{ duration: 22 + ring * 7, repeat: Infinity, ease: "linear" }}
                    >
                      <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-q-brand-ember shadow-[0_0_18px_rgba(255,58,38,0.85)]" />
                    </motion.div>
                  ))}
                  <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-[2rem] border border-white/15 bg-white/[0.06] shadow-[0_0_70px_rgba(232,32,15,0.28)] backdrop-blur-2xl">
                    <QIcon className="h-12 w-12" />
                    <span className={`absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-xl border border-white/15 bg-black/80 ${flowSteps[activeStep].tone}`}>
                      <ActiveIcon className="h-4 w-4" />
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-xs text-q-gray-500">Contracts</p>
                    <p className="mt-1 text-2xl font-black text-white">42</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-xs text-q-gray-500">Trust score</p>
                    <p className="mt-1 text-2xl font-black text-emerald-300">99%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      </motion.div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="hero" className="relative isolate flex min-h-screen items-center overflow-hidden bg-q-black pt-32 pb-16 lg:pt-36">
      <div className="absolute inset-0 -z-10">
        <Image src="/assets/pixels-dissolve.png" alt="" fill priority className="object-cover object-left opacity-50 mix-blend-screen" sizes="100vw" />
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
              Trustworthy AI starts with trustworthy data.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-q-gray-300">
              QBricks turns ungoverned lakehouse sprawl into an auditable, AI-ready metadata foundation for banks — with Data Contracts, Data Products and secure agentic automation deployed in hours, not weeks.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="mailto:sales@infinium.consulting?subject=QBricks demo request" className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3.5 text-sm font-bold text-white shadow-[0_0_50px_rgba(232,32,15,0.3)] transition-all hover:-translate-y-0.5">
                <span className="absolute inset-0 bg-gradient-to-r from-[#c91b0d] via-[#ff3a26] to-[#ff7669]" />
                <span className="absolute inset-y-0 -left-1/2 w-1/3 rotate-12 bg-white/30 blur-xl animate-shimmer" />
                <span className="relative z-10">Request a demo</span>
                <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <Link href="/product" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.055] px-6 py-3.5 text-sm font-bold text-white backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.08]">
                See how it works
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {proofPoints.map(([value, label]) => (
                <div key={value} className="flex flex-col justify-start rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-xl transition-all hover:border-white/20 hover:bg-white/[0.06]">
                  <div className="flex items-start gap-2 text-white">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                    <span className="text-sm font-bold leading-tight tracking-tight">{value}</span>
                  </div>
                  <p className="ml-6 mt-1.5 text-[11px] font-medium leading-relaxed text-q-gray-400">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <DataCommandCentre />
        </div>
      </div>
    </section>
  );
}
