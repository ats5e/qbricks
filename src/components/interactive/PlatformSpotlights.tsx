"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  AiReadyScene,
  ContractsScene,
  GovernanceScene,
  IntegrationsScene,
  LineageScene,
} from "@/components/interactive/scenes";

/*
 * Capability spotlight carousel. Each card's imagery is a live animated
 * mini-scene from the QBricks graphics pack, badged with the partner
 * logo, and links through to that partner's capability overview under
 * /resources.
 */

const spotlights = [
  {
    title: "A.I.-ready products for Databricks",
    href: "/resources/qbricks-databricks",
    scene: AiReadyScene,
    badge: "Q Agent",
    logo: "/assets/partners/Databricks.png",
    partner: "Databricks",
    bullets: [
      "Governed data products registered straight into Unity Catalog",
      "Contracts enforced before anything reaches the lakehouse",
      "Your Databricks compute stays free for analytics, ML and AI",
    ],
  },
  {
    title: "Contract-enforced data for Microsoft Fabric",
    href: "/resources/qbricks-fabric",
    scene: ContractsScene,
    badge: "ODCS",
    logo: "/assets/partners/Fabric.png",
    partner: "Microsoft Fabric",
    bullets: [
      "Open Delta Parquet landed straight into OneLake",
      "Read instantly by Power BI in Direct Lake mode",
      "Fabric capacity stays free for Copilot and Real-Time Intelligence",
    ],
  },
  {
    title: "Open delivery into Snowflake",
    href: "/resources/qbricks-snowflake",
    scene: IntegrationsScene,
    badge: "Integrations",
    logo: "/assets/partners/Snowflake.png",
    partner: "Snowflake",
    bullets: [
      "Apache Iceberg tables Snowflake reads natively via Polaris",
      "No credits burned on transformation warehouses",
      "Snowflake stays free for serving, apps and Cortex AI",
    ],
  },
  {
    title: "Entity-ready data for Quantexa",
    href: "/resources/qbricks-quantexa",
    scene: LineageScene,
    badge: "Lineage",
    logo: "/assets/partners/Quantexa.png",
    partner: "Quantexa",
    bullets: [
      "Products delivered field-mapped to the Quantexa data model",
      "Higher match rates, fewer false positives, full lineage",
      "From system of record to resolved entity in hours",
    ],
  },
  {
    title: "Governed foundations for Cloudera",
    href: "/resources/qbricks-cloudera",
    scene: GovernanceScene,
    badge: "Live audit",
    logo: "/assets/partners/Cloudera_logo.webp",
    partner: "Cloudera",
    bullets: [
      "ODCS enforced at ingestion — nothing ungoverned gets through",
      "End-to-end governance with a live, streaming audit trail",
      "Open Iceberg tables, registered through Apache Polaris",
    ],
  },
];

export function PlatformSpotlights() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateArrows = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  }, []);

  useEffect(() => {
    updateArrows();
    window.addEventListener("resize", updateArrows);
    return () => window.removeEventListener("resize", updateArrows);
  }, [updateArrows]);

  const scrollByCard = (direction: number) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-spotlight-card]");
    const step = (card?.clientWidth ?? 420) + 24;
    const target = Math.max(0, Math.min(el.scrollWidth - el.clientWidth, el.scrollLeft + direction * step));
    const start = el.scrollLeft;
    const distance = target - start;
    if (distance === 0) return;
    let t0: number | null = null;
    const duration = 450;
    const tick = (ts: number) => {
      if (t0 === null) t0 = ts;
      const p = Math.min(1, (ts - t0) / duration);
      el.scrollLeft = start + distance * (1 - Math.pow(1 - p, 3));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  return (
    <section id="platform-spotlights" className="section-y relative overflow-hidden border-t border-white/5 bg-q-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(232,32,15,0.14),transparent_45%)]" />

      <div className="container-x relative z-10">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="eyebrow mb-5"
            >
              Works with your stack
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.75 }}
              className="text-[clamp(2.2rem,4.5vw,3.8rem)] font-black leading-[0.98] tracking-tight text-white"
            >
              Trusted data, wherever it lands.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.75, delay: 0.1 }}
              className="mt-6 max-w-2xl text-lg leading-relaxed text-q-gray-400"
            >
              QBricks sits upstream of Databricks, Microsoft Fabric, Snowflake, Quantexa and Cloudera — delivering contract-enforced data products, in open formats, straight into the platform you already run.
            </motion.p>
          </div>

          {/* Carousel controls */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.15 }}
            className="flex gap-3"
          >
            <button
              type="button"
              aria-label="Previous"
              onClick={() => scrollByCard(-1)}
              disabled={!canPrev}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.055] text-white backdrop-blur-xl transition-all hover:border-q-brand/40 hover:bg-q-brand/10 disabled:cursor-default disabled:opacity-30 disabled:hover:border-white/10 disabled:hover:bg-white/[0.055]"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Next"
              onClick={() => scrollByCard(1)}
              disabled={!canNext}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.055] text-white backdrop-blur-xl transition-all hover:border-q-brand/40 hover:bg-q-brand/10 disabled:cursor-default disabled:opacity-30 disabled:hover:border-white/10 disabled:hover:bg-white/[0.055]"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Sliding track */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mt-12"
      >
        <div
          ref={trackRef}
          onScroll={updateArrows}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:px-6 lg:px-[max(2rem,calc((100vw-80rem)/2+2rem))]"
        >
          {spotlights.map((card) => {
            const Scene = card.scene;
            return (
              <div key={card.title} data-spotlight-card className="w-[85vw] max-w-[420px] flex-none snap-start">
                <Link
                  href={card.href}
                  className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-[#141419] to-[#0a0a0d] transition-all duration-500 hover:-translate-y-1.5 hover:border-q-brand/40 hover:shadow-[0_30px_90px_rgba(232,32,15,0.14)]"
                >
                  {/* Imagery */}
                  <div className="relative h-72 flex-none overflow-hidden">
                    <div
                      className="absolute inset-0"
                      style={{ background: "radial-gradient(360px 280px at 30% 30%, rgba(232,32,15,0.16), transparent 65%)", animation: "cc-breathe 10s ease-in-out infinite" }}
                    />
                    <div className="absolute inset-x-5 bottom-0 top-6 transition-transform duration-700 group-hover:-translate-y-1.5">
                      <Scene badge={card.badge} logo={card.logo} logoAlt={card.partner} />
                    </div>
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-[#0d0d12]" />
                  </div>

                  {/* Content */}
                  <div className="relative flex flex-1 flex-col border-t border-white/[0.07] bg-gradient-to-b from-[#0d0d12] to-q-brand/[0.07] p-7">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-q-gray-500">
                      Capability overview · {card.partner}
                    </p>
                    <h3 className="mt-2 text-2xl font-black tracking-tight text-white">{card.title}</h3>
                    <ul className="mt-5 space-y-3.5">
                      {card.bullets.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed text-q-gray-300">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-q-brand-ember" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <span className="mt-auto flex items-center gap-2 pt-6 text-sm font-bold text-q-brand-ember">
                      Read the capability overview
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-24 bg-gradient-to-r from-q-black to-transparent lg:block" />
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-24 bg-gradient-to-l from-q-black to-transparent lg:block" />
      </motion.div>
    </section>
  );
}
