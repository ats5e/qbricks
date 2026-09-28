"use client";

import { motion } from "framer-motion";
import { Blocks, Cloud, FileCode2, Network, Shield, Sparkles } from "lucide-react";
import Image from "next/image";
import { CommandCentre } from "@/components/interactive/CommandCentre";
import { QBricksText, brand } from "@/components/ui/QBricksText";

const capabilities = [
  {
    icon: FileCode2,
    title: "Streaming & incremental",
    text: "Real-time, change-focused updates underpinned by an Open Data Contract standard.",
    highlight: "Incremental",
  },
  {
    icon: Cloud,
    title: "Local compute",
    text: "Works with Databricks, Fabric, Snowflake or your own database via SQL push-down, with enterprise scale on your desktop or container app.",
    highlight: "Local",
  },
  {
    icon: Shield,
    title: "Governance enforced by contract",
    text: "Records are compared digitally to your governance framework.",
    highlight: "Contract-enforced",
  },
  {
    icon: Network,
    title: "Agentic metadata, human in the loop",
    text: "Agents improve metadata over time and stay isolated from the data lake.",
    highlight: "Human in the loop",
  },
  {
    icon: Blocks,
    title: "Knowledge graph & lineage",
    text: "See hierarchy, linkages and complex relationships. Supports ontologies and full data lineage.",
    highlight: "Full lineage",
  },
  {
    icon: Sparkles,
    title: "Fully auditable & Secure",
    text: "Before-and-after files and auditable outputs. Apply your organisation's security standards.",
    highlight: "Auditable",
  },
];

function CapabilityCard({ capability, index }: { capability: (typeof capabilities)[number]; index: number }) {
  const Icon = capability.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay: index * 0.06 }}
      className="premium-card group p-6"
    >
      <div className="relative">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div className="rounded-2xl border border-black/10 bg-black/[0.055] p-3 text-q-brand-ember">
            <Icon className="h-6 w-6" />
          </div>
          <span className="rounded-full border border-black/10 bg-black/[0.04] px-3 py-1 text-xs font-bold text-q-gray-700">{brand(capability.highlight)}</span>
        </div>
        <h3 className="text-2xl font-black tracking-tight text-q-ink">{brand(capability.title)}</h3>
        <p className="mt-4 leading-relaxed text-q-gray-600">{brand(capability.text)}</p>
      </div>
    </motion.div>
  );
}

export function FeaturesBento() {
  return (
    <section id="features" className="section-y relative overflow-hidden border-t border-black/5 bg-white">
      <div className="pointer-events-none absolute right-0 top-0 -z-0 hidden aspect-[2560/1088] w-[46%] lg:block" aria-hidden="true">
        <Image src="/assets/brand/section-features.webp" alt="" fill className="object-cover object-right-top" sizes="46vw" />
      </div>

      <div className="container-x relative z-10">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <p className="eyebrow mb-5">What <QBricksText /> is</p>
          <h2 className="h-section font-black tracking-tight text-q-ink">
            A governed, secure Data Platform for your organisation.
          </h2>
          <p className="mx-auto mt-7 max-w-3xl text-xl leading-relaxed text-q-gray-700">
            <QBricksText /> is a streaming data-management platform that enforces governance at the point of ingestion, so the data landing in your lakehouse or database is already trusted, governed and A.I. ready.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl"
        >
          <CommandCentre />
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability, index) => (
            <CapabilityCard key={capability.title} capability={capability} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
