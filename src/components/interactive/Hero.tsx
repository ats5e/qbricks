"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Boxes, Cpu, Database, GitBranch, Layers3, Lightbulb, Network, ShieldCheck, Unlock, Users, FileSignature, Search } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
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
  { r: 92, dur: 22, del: 0, c: "#ff3a26", g: "rgba(255,58,38,0.7)", b: "rgba(255,58,38,0.5)" },
  { r: 92, dur: 22, del: -11, c: "#3ecf8e", g: "rgba(62,207,142,0.7)", b: "rgba(62,207,142,0.4)" },
  { r: 66, dur: 16, del: -4, c: "#6ca8f5", g: "rgba(108,168,245,0.7)", b: "rgba(108,168,245,0.4)" },
  { r: 66, dur: 16, del: -12, c: "#e8b34b", g: "rgba(232,179,75,0.7)", b: "rgba(232,179,75,0.4)" },
];

// Deterministic pseudo-random values (same sequence on server and client to avoid hydration mismatch)
function makeRnd() {
  let seed = 123456789;
  return () => {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    return seed / 4294967296;
  };
}

const rnd = makeRnd();

const heroCubes = Array.from({ length: 40 }, () => {
  const t = rnd();
  return {
    x: Math.pow(t, 1.6) * 88 + rnd() * 8,
    y: rnd() * 100,
    sc: 0.35 + rnd() * 1.05,
    op: Math.max(0.08, (1 - t * 0.8) * (0.2 + rnd() * 0.45)),
    bob: 6 + rnd() * 7,
    bobDel: -rnd() * 8,
    tw: 2.6 + rnd() * 4,
    twDel: -rnd() * 5,
  };
});

const ghostRows = Array.from({ length: 9 }, () => ({
  b1: Math.round(60 + rnd() * 110),
  b2: Math.round(36 + rnd() * 80),
}));

function BrickCube({ cube }: { cube: (typeof heroCubes)[number] }) {
  return (
    <div
      className="absolute h-[26px] w-[22px]"
      style={{
        left: `${cube.x}%`,
        top: `${cube.y}%`,
        opacity: cube.op,
        ["--sc" as string]: cube.sc,
        animation: `cc-cube-bob ${cube.bob}s ease-in-out ${cube.bobDel}s infinite`,
      }}
    >
      <div
        className="absolute -inset-3 blur-[4px]"
        style={{
          background: "radial-gradient(circle, rgba(255,58,38,0.5), transparent 70%)",
          animation: `cc-twinkle ${cube.tw}s ease-in-out ${cube.twDel}s infinite`,
        }}
      />
      <div className="absolute inset-0 bg-[#ff4a50]" style={{ clipPath: "polygon(50% 0, 100% 25%, 50% 50%, 0 25%)" }} />
      <div className="absolute inset-0 bg-[#d6111f]" style={{ clipPath: "polygon(0 25%, 50% 50%, 50% 100%, 0 75%)" }} />
      <div className="absolute inset-0 bg-[#7e0a18]" style={{ clipPath: "polygon(100% 25%, 50% 50%, 50% 100%, 100% 75%)" }} />
    </div>
  );
}

function useCountUp(target: number, delay: number, duration = 1700) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(target);
      return;
    }
    let raf = 0;
    let start: number | null = null;
    const timer = setTimeout(() => {
      const step = (ts: number) => {
        if (start === null) start = ts;
        const p = Math.min(1, (ts - start) / duration);
        setValue(Math.round(target * (1 - Math.pow(1 - p, 3))));
        if (p < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    }, delay);
    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(raf);
    };
  }, [target, delay, duration]);
  return value;
}

/** The Data Command Centre application window — the centrepiece of the hero graphic. */
function CommandWindow() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setActiveStep((step) => (step + 1) % flowSteps.length), 2400);
    return () => clearInterval(interval);
  }, []);

  const contracts = useCountUp(42, 1700);
  const agents = useCountUp(60, 1850);
  const records = useCountUp(5, 2000, 1400);

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
              <motion.div
                key={step.label}
                className={`rounded-2xl border p-2.5 transition-all ${active ? "border-q-brand/45 bg-q-brand/[0.12] shadow-[0_0_40px_rgba(232,32,15,0.18)]" : "border-white/[0.08] bg-white/[0.035]"}`}
                animate={{ opacity: active ? 1 : 0.55, x: active ? 8 : 0 }}
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
              </motion.div>
            );
          })}
        </div>

        {/* Catalogue of Catalogues orbit panel */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/60 p-5">
          <div className="absolute inset-0 bg-grid-pattern opacity-30" />
          <motion.div
            className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-q-brand/70 to-transparent"
            animate={{ opacity: [0.25, 0.7, 0.25] }}
            transition={{ duration: 2.4, repeat: Infinity }}
          />

          <div className="relative z-10 flex h-full min-h-[355px] flex-col gap-4">
            <div className="flex items-start justify-between gap-4">
              <p className="max-w-[140px] text-xs uppercase leading-relaxed tracking-[0.2em] text-q-gray-500">Catalogue of Catalogues</p>
              <div className="flex flex-col items-end gap-3">
                <div
                  className="whitespace-nowrap rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-300"
                  style={{ animation: "cc-green-glow 3.6s ease-in-out infinite" }}
                >
                  Audit-ready
                </div>
                <p className="text-right text-sm font-bold text-white">Trusted data<br />products</p>
              </div>
            </div>

            <div className="relative mx-auto flex h-48 w-48 items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-dashed border-white/15" style={{ animation: "cc-spin 60s linear infinite" }} />
              <div className="absolute inset-6 rounded-full border border-dashed border-white/10" style={{ animation: "cc-spin-r 45s linear infinite" }} />
              <div className="absolute inset-12 rounded-full border border-white/[0.08]" />
              <div
                className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{
                  background: "radial-gradient(circle, rgba(232,32,15,0.28), transparent 70%)",
                  animation: "cc-halo 4.5s ease-in-out infinite",
                }}
              />
              {orbiters.map((orb, i) => (
                <div
                  key={`orb-${i}`}
                  className="absolute left-1/2 top-1/2 h-0 w-0"
                  style={{ animation: `cc-spin ${orb.dur}s linear ${orb.del}s infinite` }}
                >
                  <div
                    className="absolute flex h-7 w-7 items-center justify-center rounded-lg border bg-[#17171d]"
                    style={{
                      left: orb.r,
                      top: -14,
                      borderColor: orb.b,
                      animation: `cc-spin-r ${orb.dur}s linear ${orb.del}s infinite`,
                    }}
                  >
                    <div className="h-2 w-2 rounded-[3px]" style={{ background: orb.c, boxShadow: `0 0 10px ${orb.g}` }} />
                  </div>
                </div>
              ))}
              <div
                className="relative z-10 flex h-24 w-24 items-center justify-center rounded-[2rem] border border-white/15 bg-white/[0.06] backdrop-blur-2xl"
                style={{ animation: "cc-hub-pulse 3.6s ease-in-out infinite" }}
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
                <p className="mt-1 text-xl font-black text-white">{contracts}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
                <p className="text-[10px] text-q-gray-500">Agents</p>
                <p className="mt-1 text-xl font-black text-emerald-300">{agents}+</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
                <p className="text-[10px] text-q-gray-500">Records</p>
                <p className="mt-1 text-xl font-black text-white">{records}M</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Proof strip */}
      <div className="flex flex-none items-center gap-3 border-t border-white/10 px-5 py-3.5">
        {proofPoints.map(({ value, icon: Icon }, index) => (
          <motion.div
            key={value}
            className="flex flex-1 items-center gap-2.5 rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] px-3 py-2.5"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2 + index * 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-q-brand/40 bg-q-brand/10 text-q-brand-ember">
              <Icon className="h-3.5 w-3.5" />
            </span>
            <span className="text-[13px] font-black leading-tight tracking-tight text-white">{value}</span>
          </motion.div>
        ))}
      </div>

      {/* Sheen sweep */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
        <div
          className="absolute inset-y-0 left-0 w-1/3"
          style={{
            background: "linear-gradient(105deg, transparent, rgba(255,255,255,0.045), transparent)",
            animation: "cc-sweep 6.5s linear 2.5s infinite",
          }}
        />
      </div>
    </div>
  );
}

/** Desktop 3D stage: ghost back panel + command window on a perspective-tilted, parallax-driven plane. */
function CommandStage() {
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const host = stage.closest("section");
    if (!host) return;

    const s = { mx: 0, my: 0, cx: 0, cy: 0, hot: false };
    const move = (e: MouseEvent) => {
      const r = host.getBoundingClientRect();
      s.mx = ((e.clientX - r.left) / r.width - 0.5) * 2;
      s.my = ((e.clientY - r.top) / r.height - 0.5) * 2;
      s.hot = true;
    };
    const leave = () => {
      s.hot = false;
    };
    host.addEventListener("mousemove", move);
    host.addEventListener("mouseleave", leave);

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const tt = (t - t0) / 1000;
      const idleY = Math.sin(tt * 0.32) * 1.5;
      const idleX = Math.cos(tt * 0.26) * 1.1;
      const gy = s.hot ? s.mx * 5 : idleY;
      const gx = s.hot ? -s.my * 3.5 : idleX;
      s.cx += (gx - s.cx) * 0.045;
      s.cy += (gy - s.cy) * 0.045;
      stage.style.transform = `perspective(2600px) rotateX(${22 + s.cx}deg) rotateY(${-11 + s.cy}deg) rotateZ(8deg)`;
      raf = requestAnimationFrame(tick);
    };
    if (reduced) {
      stage.style.transform = "perspective(2600px) rotateX(22deg) rotateY(-11deg) rotateZ(8deg)";
    } else {
      raf = requestAnimationFrame(tick);
    }

    return () => {
      cancelAnimationFrame(raf);
      host.removeEventListener("mousemove", move);
      host.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute left-[48%] top-[54%] hidden h-[760px] w-[940px] -translate-y-1/2 lg:block xl:left-[50%]" aria-hidden="true">
      <div ref={stageRef} className="absolute inset-0 [transform-style:preserve-3d]">
        {/* Ghost back panel */}
        <motion.div
          className="absolute left-[260px] top-[-16px] h-[420px] w-[560px] [transform-style:preserve-3d]"
          initial={{ opacity: 0, y: 90 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className="absolute inset-0 rounded-2xl border border-white/10 bg-gradient-to-br from-[#22222c]/70 to-[#101016]/65 p-6 opacity-50 shadow-[0_40px_120px_rgba(0,0,0,0.5)]"
            style={{ animation: "cc-float-back 11s ease-in-out 1.2s infinite" }}
          >
            <div className="mb-5 h-2 w-32 rounded bg-white/25" />
            {ghostRows.map((row, i) => (
              <div key={`ghost-${i}`} className="flex items-center gap-3 py-2">
                <div className="h-2 w-2 rounded-[3px] bg-white/15" />
                <div className="h-1.5 rounded bg-white/[0.13]" style={{ width: row.b1 }} />
                <div className="h-1.5 rounded bg-white/[0.07]" style={{ width: row.b2 }} />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Front command centre window */}
        <motion.div
          className="absolute left-4 top-24 w-[660px] [transform-style:preserve-3d]"
          initial={{ opacity: 0, y: 90 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <div style={{ animation: "cc-float-front 8.5s ease-in-out 1.7s infinite" }}>
            <CommandWindow />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

const carouselItems = [
  { text: "Open, portable data products", icon: Unlock, iconTone: "text-emerald-300" },
  { text: "No armies of engineers", icon: Users, iconTone: "text-blue-300" },
  { text: "Local compute engine", icon: Cpu, iconTone: "text-amber-300" },
  { text: "Open Data Contracts", icon: FileSignature, iconTone: "text-q-brand-ember" },
  { text: "Catalogue of Catalogues", icon: Layers3, iconTone: "text-violet-300" },
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
    <>
    <section id="hero" className="relative isolate flex min-h-screen items-center overflow-hidden bg-q-black pb-16 pt-32 lg:pt-36">
      <div className="absolute inset-0 -z-10">
        {/* Breathing brand glows */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(1000px 760px at 26% 30%, rgba(232,32,15,0.19), transparent 65%)",
            animation: "cc-breathe 9s ease-in-out infinite",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(1300px 900px at 78% 84%, rgba(232,32,15,0.10), transparent 70%)",
            animation: "cc-breathe 12s ease-in-out 3s infinite",
          }}
        />

        {/* Floating brick field */}
        <div className="absolute inset-0" aria-hidden="true">
          {heroCubes.map((cube, index) => (
            <BrickCube key={`cube-${index}`} cube={cube} />
          ))}
        </div>

        {/* Dotted trajectory lines with light streaks */}
        <div className="absolute -left-[15%] top-[16%] w-[150%] rotate-[6deg] border-t-2 border-dotted border-white/[0.08]">
          <div
            className="absolute -top-0.5 left-0 h-[3px] w-56 rounded-full blur-[1px]"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.55), transparent)",
              animation: "cc-streak 13s linear 2s infinite",
            }}
          />
        </div>
        <div className="absolute -left-[15%] bottom-[7%] w-[150%] rotate-[6deg] border-t-2 border-dotted border-q-brand/[0.14]">
          <div
            className="absolute -top-[3px] left-0 h-1 w-72 rounded-full blur-[1.5px]"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(255,58,38,0.9), transparent)",
              animation: "cc-streak 10s linear infinite",
            }}
          />
        </div>

        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-black/85" />
      </div>

      {/* Cinematic 3D stage (desktop) */}
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
            <h1 className="text-[clamp(3.2rem,6.2vw,5.6rem)] font-black leading-[0.93] tracking-tight text-white">
              No more data <span className="text-q-brand-ember">pipelines.</span>
            </h1>

            <p className="mt-7 max-w-xl text-xl leading-relaxed text-q-gray-300">
              Turn your systems of record into governed, A.I.-ready data products, in hours, not months or years.
            </p>

            <div
              data-testid="hero-difference"
              className="mt-8 max-w-xl overflow-hidden rounded-2xl border border-white/10 bg-black/45 px-5 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_18px_55px_rgba(0,0,0,0.35)] backdrop-blur-xl"
            >
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-q-gray-500">
                The <QBricksText /> difference
              </p>
              <div className="mt-2 flex min-h-[56px] items-center overflow-hidden" aria-live="polite">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCarouselIndex}
                    initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -18, filter: "blur(8px)" }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="flex w-full min-w-0 items-center gap-3.5"
                  >
                    <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.055] ${activeCarouselItem.iconTone}`}>
                      <ActiveCarouselIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0 text-[clamp(1.25rem,1.8vw,1.6rem)] font-bold leading-tight tracking-tight text-white">
                      {activeCarouselItem.text}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-4 text-sm font-bold text-white shadow-[0_0_50px_rgba(232,32,15,0.3)] transition-all hover:-translate-y-0.5">
                <span className="absolute inset-0 bg-gradient-to-r from-[#c91b0d] via-[#ff3a26] to-[#ff7669]" />
                <span className="absolute inset-y-0 -left-1/2 w-1/3 rotate-12 bg-white/30 blur-xl animate-shimmer" />
                <span className="relative z-10">Request a demo</span>
                <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/product" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.055] px-7 py-4 text-sm font-bold text-white backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.08]">
                See how it works
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
      <div className="relative border-y border-white/10 bg-q-black py-12 lg:py-14">
        <div className="container-x">
          <p className="text-center text-[clamp(1.35rem,2.5vw,2.15rem)] font-black leading-tight tracking-tight text-white">
            Significantly reduce the cost of producing <span className="text-q-brand-ember">A.I.-ready data</span>.
          </p>
        </div>
      </div>
    </>
  );
}
