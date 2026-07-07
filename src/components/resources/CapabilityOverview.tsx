"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Check, ChevronRight, Cpu, FileCheck2, Unlock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { QBricksText } from "@/components/ui/QBricksText";
import {
  AiReadyScene,
  ContractsScene,
  GovernanceScene,
  IntegrationsScene,
  LineageScene,
  type SceneProps,
} from "@/components/interactive/scenes";

const scenes = {
  lineage: LineageScene,
  governance: GovernanceScene,
  aiready: AiReadyScene,
  contracts: ContractsScene,
  integrations: IntegrationsScene,
} as const;

const pillarIcons = [Cpu, FileCheck2, Unlock];

export type CapabilityContent = {
  partner: string;
  partnerLogo?: string;
  scene: keyof typeof scenes;
  sceneBadge: string;
  eyebrow: string;
  heroIntro: string;
  handoffLabel: string;
  handoff: {
    sourceItems: string[];
    qbricksItems: string[];
    productTags: string;
    partnerItems: string[];
    partnerTag: string;
  };
  pillars: { kicker: string; title: string; text: string }[];
  gap: { eyebrow: string; title: string; text: string };
  stepsTitle: string;
  steps: { title: string; text: string }[];
  computeNote: string;
  outcome: string;
  fits: {
    title: string;
    intro: string;
    qbricksHandles: string[];
    partnerHandlesTitle: string;
    partnerHandles: string[];
    complementary: string;
    cards: { kicker: string; title: string; text: string }[];
    closing: string;
  };
};

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-90px" },
} as const;

export function CapabilityOverview({ content, diagram }: { content: CapabilityContent; diagram?: React.ReactNode }) {
  const Scene = scenes[content.scene];
  const sceneProps: SceneProps = { badge: content.sceneBadge, logo: content.partnerLogo, logoAlt: content.partner };

  return (
    <main className="min-h-screen bg-q-black selection:bg-q-brand/30 selection:text-white">
      {/* ================= Hero ================= */}
      <section className="relative overflow-hidden border-b border-white/5 pb-20 pt-40 lg:pt-44">
        <div className="absolute inset-0 -z-0">
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(1000px 700px at 22% 20%, rgba(232,32,15,0.16), transparent 65%)",
              animation: "cc-breathe 10s ease-in-out infinite",
            }}
          />
          <div className="absolute inset-0 bg-grid-pattern opacity-25" />
          <div className="absolute -left-[15%] bottom-[10%] w-[150%] rotate-[6deg] border-t-2 border-dotted border-q-brand/[0.13]">
            <div
              className="absolute -top-[3px] left-0 h-1 w-72 rounded-full blur-[1.5px]"
              style={{ background: "linear-gradient(90deg, transparent, rgba(255,58,38,0.9), transparent)", animation: "cc-streak 11s linear infinite" }}
            />
          </div>
        </div>

        <div className="container-x relative z-10">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link href="/resources" className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-q-gray-400 transition-colors hover:text-white">
              <ArrowLeft className="h-4 w-4" /> Resources
              <span className="text-q-gray-500">/</span>
              <span className="text-q-gray-300">Capability overview</span>
            </Link>
          </motion.div>

          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
              <p className="eyebrow mb-6">{content.eyebrow}</p>
              <h1 className="text-[clamp(2.8rem,5.2vw,4.6rem)] font-black leading-[0.95] tracking-tight text-white">
                Trusted data, before it reaches <span className="text-q-brand-ember">{content.partner}.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-xl leading-relaxed text-q-gray-300">{content.heroIntro}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="group inline-flex items-center justify-center gap-2 rounded-full bg-q-brand px-7 py-3.5 text-sm font-black text-white transition-all hover:-translate-y-0.5 hover:bg-q-brand-ember">
                  Request a demo <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link href="/product" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.055] px-7 py-3.5 text-sm font-bold text-white backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:bg-white/[0.08]">
                  Explore the platform
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-q-brand/15 blur-[120px]" />
              <div className="relative h-[320px] rounded-2xl shadow-[0_50px_130px_rgba(0,0,0,0.6)] sm:h-[340px]">
                <Scene {...sceneProps} />
              </div>
            </motion.div>
          </div>

          {/* Handoff flow */}
          <motion.p {...fadeUp} transition={{ duration: 0.6 }} className="mt-20 font-mono text-xs uppercase tracking-[0.2em] text-q-gray-500">
            {content.handoffLabel}
          </motion.p>
          <div className="mt-5 grid gap-3 md:grid-cols-[1fr_auto_1.1fr_auto_1fr_auto_1.1fr] md:items-stretch">
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.05 }} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-q-gray-500">Systems of record</p>
              <ul className="space-y-1.5">
                {content.handoff.sourceItems.map((item) => (
                  <li key={item} className="text-[15px] font-bold text-white">{item}</li>
                ))}
              </ul>
            </motion.div>
            <FlowArrow delay={0.1} />
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.15 }} className="rounded-2xl border border-q-brand/45 bg-q-brand/[0.06] p-5 shadow-[0_0_50px_rgba(232,32,15,0.12)]">
              <p className="mb-3 text-sm font-black text-white"><QBricksText /></p>
              <ul className="space-y-1.5">
                {content.handoff.qbricksItems.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-[15px] text-q-gray-200">
                    <ChevronRight className="h-3.5 w-3.5 shrink-0 text-q-brand-ember" /> {item}
                  </li>
                ))}
              </ul>
              <span className="mt-3 inline-block rounded-full border border-q-brand/50 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-q-brand-ember">
                Local compute
              </span>
            </motion.div>
            <FlowArrow delay={0.2} />
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.25 }} className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center">
              <p className="text-sm text-q-gray-400">data product</p>
              <p className="mt-1 text-xl font-black text-white">governed</p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-q-brand-ember">{content.handoff.productTags}</p>
            </motion.div>
            <FlowArrow delay={0.3} />
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.35 }} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="mb-3 flex h-6 items-center">
                {content.partnerLogo ? (
                  <Image src={content.partnerLogo} alt={content.partner} width={120} height={24} className="h-5 w-auto object-contain" />
                ) : (
                  <p className="text-sm font-black text-white">{content.partner}</p>
                )}
              </div>
              <ul className="space-y-1.5">
                {content.handoff.partnerItems.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-[15px] text-q-gray-200">
                    <ChevronRight className="h-3.5 w-3.5 shrink-0 text-q-gray-500" /> {item}
                  </li>
                ))}
              </ul>
              <span className="mt-3 inline-block rounded-full border border-white/15 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-q-gray-400">
                {content.handoff.partnerTag}
              </span>
            </motion.div>
          </div>

          {/* Pillars */}
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {content.pillars.map((pillar, index) => {
              const Icon = pillarIcons[index % pillarIcons.length];
              return (
                <motion.div
                  key={pillar.title}
                  {...fadeUp}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-q-brand/35 bg-q-brand/10 text-q-brand-ember">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-q-brand-ember">{pillar.kicker}</span>
                  </div>
                  <h3 className="text-xl font-black text-white">{pillar.title}</h3>
                  <p className="mt-2.5 leading-relaxed text-q-gray-400">{pillar.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= The gap + what QBricks does ================= */}
      <section className="section-y relative overflow-hidden bg-q-black">
        <div className="absolute inset-0 bg-[radial-gradient(900px_600px_at_78%_20%,rgba(232,32,15,0.1),transparent_65%)]" />
        <div className="container-x relative z-10">
          <div className="max-w-4xl">
            <motion.p {...fadeUp} className="eyebrow mb-5">{content.gap.eyebrow}</motion.p>
            <motion.h2 {...fadeUp} transition={{ duration: 0.7 }} className="text-[clamp(2.2rem,4.4vw,3.8rem)] font-black leading-[0.98] tracking-tight text-white">
              {content.gap.title}
            </motion.h2>
            <motion.p {...fadeUp} transition={{ duration: 0.7, delay: 0.1 }} className="mt-7 text-lg leading-relaxed text-q-gray-300">
              {content.gap.text}
            </motion.p>
          </div>

          <div className="mt-16">
            <motion.p {...fadeUp} className="eyebrow mb-4">What <QBricksText /> does</motion.p>
            <motion.h3 {...fadeUp} transition={{ duration: 0.7 }} className="text-3xl font-black tracking-tight text-white md:text-4xl">
              {content.stepsTitle}
            </motion.h3>
            <motion.p {...fadeUp} transition={{ duration: 0.7, delay: 0.08 }} className="mt-4 max-w-2xl text-q-gray-400">
              Four steps, one continuous flow — running on local compute, with a data contract enforced at every handoff.
            </motion.p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {content.steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  {...fadeUp}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.01] p-6"
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-q-gray-500">Step 0{index + 1}</p>
                  <p className="mt-1 text-4xl font-black text-q-brand-ember">0{index + 1}</p>
                  <h4 className="mt-4 text-lg font-black text-white">{step.title}</h4>
                  <p className="mt-2 text-[15px] leading-relaxed text-q-gray-400">{step.text}</p>
                </motion.div>
              ))}
            </div>

            <motion.p {...fadeUp} transition={{ duration: 0.7 }} className="mt-10 max-w-4xl text-lg leading-relaxed text-q-gray-400">
              {content.computeNote}
            </motion.p>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.8 }}
              className="relative mt-10 overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent p-8 md:p-10"
            >
              <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_15%_50%,rgba(232,32,15,0.14),transparent_70%)]" />
              <p className="relative font-mono text-[11px] uppercase tracking-[0.2em] text-q-brand-ember">{"// The outcome"}</p>
              <p className="relative mt-3 max-w-3xl text-[clamp(1.7rem,3.2vw,2.6rem)] font-black leading-[1.05] tracking-tight text-q-brand-ember">
                {content.outcome}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= Partner flow diagram ================= */}
      {diagram && <Fragment key="partner-diagram">{diagram}</Fragment>}

      {/* ================= How QBricks fits ================= */}
      <section className="section-y relative overflow-hidden border-t border-white/5 bg-q-black">
        <div className="absolute inset-0 bg-[radial-gradient(900px_600px_at_20%_30%,rgba(232,32,15,0.09),transparent_65%)]" />
        <div className="container-x relative z-10">
          <motion.p {...fadeUp} className="eyebrow mb-5">How <QBricksText /> fits</motion.p>
          <motion.h2 {...fadeUp} transition={{ duration: 0.7 }} className="max-w-4xl text-[clamp(2.2rem,4.4vw,3.8rem)] font-black leading-[0.98] tracking-tight text-white">
            {content.fits.title}
          </motion.h2>
          <motion.p {...fadeUp} transition={{ duration: 0.7, delay: 0.1 }} className="mt-6 max-w-3xl text-lg leading-relaxed text-q-gray-300">
            {content.fits.intro}
          </motion.p>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <motion.div {...fadeUp} transition={{ duration: 0.7 }} className="premium-card border-q-brand/25 bg-gradient-to-br from-[#26181a]/90 to-[#0f0b0c]/90 p-7 md:p-9">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-q-brand-ember">{"// Upstream — production"}</p>
              <h3 className="mt-2 text-2xl font-black text-white"><QBricksText /> handles</h3>
              <ul className="mt-6 space-y-3.5">
                {content.fits.qbricksHandles.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-q-gray-200">
                    <span className="mt-1 font-black text-q-brand-ember">+</span> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.1 }} className="premium-card p-7 md:p-9">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-q-gray-500">{"// Downstream — consumption"}</p>
              <div className="mt-2 flex h-8 items-center">
                {content.partnerLogo ? (
                  <span className="flex items-center gap-3">
                    <Image src={content.partnerLogo} alt={content.partner} width={140} height={28} className="h-6 w-auto object-contain" />
                    <span className="text-2xl font-black text-white">handles</span>
                  </span>
                ) : (
                  <h3 className="text-2xl font-black text-white">{content.fits.partnerHandlesTitle}</h3>
                )}
              </div>
              <ul className="mt-6 space-y-3.5">
                {content.fits.partnerHandles.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-q-gray-200">
                    <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-q-gray-500" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.p {...fadeUp} transition={{ duration: 0.7 }} className="mx-auto mt-10 max-w-3xl text-center text-lg leading-relaxed text-q-gray-400">
            {content.fits.complementary}
          </motion.p>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {content.fits.cards.map((card, index) => (
              <motion.div
                key={card.title}
                {...fadeUp}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-q-brand-ember">{`// ${card.kicker}`}</p>
                <h3 className="mt-2 text-xl font-black text-white">{card.title}</h3>
                <p className="mt-3 leading-relaxed text-q-gray-400">{card.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Closing CTA */}
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} className="premium-card mt-16 p-8 text-center md:p-12">
            <h2 className="mx-auto max-w-3xl text-[clamp(2rem,4vw,3.4rem)] font-black leading-[0.98] tracking-tight text-brand-gradient">
              {content.fits.closing}
            </h2>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact" className="group inline-flex items-center justify-center gap-2 rounded-full bg-q-brand px-8 py-4 text-base font-black text-white transition-all hover:-translate-y-1 hover:bg-q-brand-ember">
                Request a demo <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/resources" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.055] px-8 py-4 text-base font-black text-white transition-all hover:-translate-y-1 hover:bg-white/[0.08]">
                <Check className="h-5 w-5 text-emerald-300" /> More resources
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

function FlowArrow({ delay }: { delay: number }) {
  return (
    <motion.div {...fadeUp} transition={{ duration: 0.5, delay }} className="hidden items-center justify-center md:flex">
      <ArrowRight className="h-5 w-5 text-q-brand-ember" />
    </motion.div>
  );
}
