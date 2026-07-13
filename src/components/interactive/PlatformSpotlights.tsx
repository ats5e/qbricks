"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import {
  AiReadyScene,
  ContractsScene,
  GovernanceScene,
  IntegrationsScene,
  LineageScene,
  WorkflowScene,
} from "@/components/interactive/scenes";

/*
 * Capability spotlight grid — all six partner integrations shown at
 * once (3 across, then 3 below). Each card's imagery is a live animated
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
      "ODCS enforced at ingestion, before anything reaches the platform",
      "End-to-end governance with a live, streaming audit trail",
      "Open Iceberg tables, registered through Apache Polaris",
    ],
  },
  {
    title: "Analyst-ready data for Alteryx",
    href: "/resources/qbricks-alteryx",
    scene: WorkflowScene,
    badge: "Workflow",
    logo: "/assets/partners/Alteryx.png",
    partner: "Alteryx",
    bullets: [
      "Governed products landed in the stores your workflows already read",
      "No more hundreds of workflows re-cleaning the same sources",
      "Self-service that starts from trust instead of creating it",
    ],
  },
];

export function PlatformSpotlights() {
  return (
    <section id="platform-spotlights" className="section-y relative overflow-hidden border-t border-white/5 bg-q-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(232,32,15,0.14),transparent_45%)]" />

      <div className="container-x relative z-10">
        <div className="mx-auto max-w-3xl text-center">
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
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-q-gray-400"
          >
            QBricks sits upstream of Databricks, Microsoft Fabric, Snowflake, Quantexa, Cloudera and Alteryx, delivering contract-enforced data products, in open formats, straight into the platform you already run.
          </motion.p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {spotlights.map((card, index) => {
            const Scene = card.scene;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
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
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
