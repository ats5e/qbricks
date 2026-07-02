"use client";

import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Boxes, CheckCircle2, Cpu, Database, FileCheck2, GitBranch, Layers3, Lightbulb, Network, ShieldCheck, Unlock, Users, FileSignature, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
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
  { value: "No Spark", icon: Cpu },
  { value: "100% auditable", icon: Search },
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

  const ActiveIcon = flowSteps[activeStep].icon;

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
              <div className="space-y-2">
                {flowSteps.map((step, index) => {
                  const Icon = step.icon;
                  const active = activeStep === index;
                  return (
                    <motion.div
                      key={step.label}
                      className={`rounded-2xl border p-2.5 transition-all ${active ? "border-q-brand/45 bg-q-brand/[0.12] shadow-[0_0_40px_rgba(232,32,15,0.18)]" : "border-white/[0.08] bg-white/[0.035]"}`}
                      animate={{ opacity: active ? 1 : 0.55, x: active ? 8 : 0 }}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`rounded-xl border border-white/10 bg-white/5 p-2 ${step.tone}`}>
                          <Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-white">{step.label}</p>
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
                      <p className="text-xs uppercase tracking-[0.2em] text-q-gray-500 max-w-[140px] leading-relaxed">Catalogue of Catalogues</p>
                    </div>
                    <div className="flex flex-col items-end gap-3">
                      <div className="whitespace-nowrap rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                        Audit-ready
                      </div>
                      <p className="text-sm font-bold text-white text-right">Trusted data<br/>products</p>
                    </div>
                  </div>

                  <div className="relative mx-auto flex h-48 w-48 items-center justify-center">
                    {[0, 1, 2].map((ring) => (
                      <div
                        key={`ring-${ring}`}
                        className="absolute rounded-full border border-white/10"
                        style={{ inset: `${ring * 24}px` }}
                      />
                    ))}
                    {[
                      { startX: -140, startY: -100, delay: 0, duration: 2.5 },
                      { startX: 160, startY: -60, delay: 1.2, duration: 2.8 },
                      { startX: -100, startY: 140, delay: 0.5, duration: 3.2 },
                      { startX: 140, startY: 120, delay: 2.2, duration: 2.6 },
                      { startX: 20, startY: -160, delay: 1.8, duration: 3.0 },
                      { startX: -150, startY: 40, delay: 2.8, duration: 2.7 },
                    ].map((brick, i) => (
                      <motion.div
                        key={`brick-${i}`}
                        className="absolute left-1/2 top-1/2 h-3 w-3 rounded-[3px] bg-q-brand-ember shadow-[0_0_15px_rgba(255,58,38,0.85)]"
                        style={{ marginLeft: "-6px", marginTop: "-6px" }}
                        animate={{
                          x: [brick.startX, 0],
                          y: [brick.startY, 0],
                          opacity: [0, 1, 0],
                          scale: [0.5, 1, 0.2],
                          rotate: [-45, 90],
                        }}
                        transition={{
                          duration: brick.duration,
                          delay: brick.delay,
                          repeat: Infinity,
                          ease: "easeIn",
                        }}
                      />
                    ))}
                    <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-[2rem] border border-white/15 bg-white/[0.06] shadow-[0_0_70px_rgba(232,32,15,0.28)] backdrop-blur-2xl">
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
          </div>
        </motion.div>
      </div>

      <div className="mx-auto mt-6 w-full max-w-[560px] lg:mt-6">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-3">
          {proofPoints.map(({ value, icon: Icon }) => (
            <div key={value} className="group relative flex flex-col justify-start">
              {/* Hover Glow Effect */}
              <div className="absolute -inset-0.5 rounded-[1rem] bg-gradient-to-b from-white/15 to-transparent opacity-0 blur-md transition-all duration-500 group-hover:opacity-100" />

              {/* Card Content */}
              <div className="relative flex h-full flex-col justify-start rounded-[1rem] border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-4 backdrop-blur-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:border-white/20 group-hover:from-white/[0.06] group-hover:to-white/[0.02]">
                <div className="mb-3 flex h-7 w-7 items-center justify-center rounded-full border border-q-brand/30 bg-q-brand/10 shadow-[0_0_15px_rgba(232,32,15,0.15)]">
                  <Icon className="h-3.5 w-3.5 text-q-brand-ember" />
                </div>
                <span className="text-sm font-black leading-tight tracking-tight text-white">{value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const carouselItems = [
  { text: "Zero vendor lock in", icon: Unlock, iconTone: "text-emerald-300" },
  { text: "No armies of engineers", icon: Users, iconTone: "text-blue-300" },
  { text: "No Spark processing", icon: Cpu, iconTone: "text-amber-300" },
  { text: "Open Data Contracts", icon: FileSignature, iconTone: "text-q-brand-ember" },
  { text: "Catalogue of Catalogues", icon: Layers3, iconTone: "text-violet-300" }
];

export function Hero() {
  const [activeCarouselIndex, setActiveCarouselIndex] = useState(0);
  const activeCarouselItem = carouselItems[activeCarouselIndex];
  const ActiveCarouselIcon = activeCarouselItem.icon;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCarouselIndex((prev) => (prev + 1) % carouselItems.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);
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
            className="relative max-w-2xl lg:-top-6"
          >
            <h1 className="text-[clamp(3rem,6vw,5.1rem)] font-black leading-[0.95] tracking-tight text-white">
              No more data <span className="text-q-brand-ember">pipelines.</span>
            </h1>

            <div className="mt-8 max-w-xl text-xl leading-relaxed text-q-gray-300">
              <p>Turn your systems of record into governed, A.I.-ready data products, in hours, not months or years.</p>

              <div
                data-testid="hero-difference"
                className="mt-7 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] px-5 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_18px_55px_rgba(0,0,0,0.22)] backdrop-blur-md"
              >
                <div className="flex items-center">
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-q-gray-500">
                    The{" "}
                    <span data-testid="hero-difference-q" className="font-black text-q-brand-ember">Q</span>
                    <span data-testid="hero-difference-bricks" className="font-normal text-white">Bricks</span>
                    {" "}difference
                  </p>
                </div>

                <div className="mt-2 flex min-h-[72px] items-center overflow-hidden" aria-live="polite">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeCarouselIndex}
                      initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      exit={{ opacity: 0, y: -18, filter: "blur(8px)" }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className="flex min-w-0 w-full items-center gap-3.5"
                    >
                      <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.055] ${activeCarouselItem.iconTone}`}>
                        <ActiveCarouselIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span className="min-w-0 text-[clamp(1.25rem,1.8vw,1.65rem)] font-bold leading-tight tracking-tight text-white">
                        {activeCarouselItem.text}
                      </span>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
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


          </motion.div>

          <DataCommandCentre />
        </div>
      </div>
    </section>
  );
}
