"use client";

import { QBricksText } from "@/components/ui/QBricksText";

import { motion } from "framer-motion";
import { ArrowRight, Blocks, CheckCircle2, Cloud, FileCode2, Network, Shield, Sparkles, XCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const capabilities = [
  {
    icon: FileCode2,
    title: "Streaming & incremental",
    text: "Real-time, change-focused updates underpinned by the Open Data Contract.",
    highlight: "Incremental",
  },
  {
    icon: Shield,
    title: "Governance enforced by contract",
    text: "Records are compared digitally to your governance framework. Nothing un-governed gets through.",
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
    icon: Cloud,
    title: "Local compute, no Spark",
    text: "Works with Databricks, Fabric and Snowflake via SQL push-down — enterprise scale without costly Spark or lock-in.",
    highlight: "No Spark",
  },
  {
    icon: Sparkles,
    title: "Fully auditable",
    text: "Before-and-after files and auditable outputs. Apply Databricks, Microsoft or Snowflake security standards.",
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
      <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-q-brand/[0.08] blur-[70px] transition-opacity group-hover:opacity-100" />
      <div className="relative">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-3 text-q-brand-ember">
            <Icon className="h-6 w-6" />
          </div>
          <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-bold text-q-gray-300">{capability.highlight}</span>
        </div>
        <h3 className="text-2xl font-black tracking-tight text-white">{capability.title}</h3>
        <p className="mt-4 leading-relaxed text-q-gray-400">{capability.text}</p>
      </div>
    </motion.div>
  );
}

export function FeaturesBento() {
  return (
    <section id="features" className="section-y relative overflow-hidden border-t border-white/5 bg-q-black">
      <div className="absolute inset-0 -z-0">
        <Image src="/assets/bg-cubes-wall.png" alt="" fill className="object-cover object-center opacity-30 mix-blend-screen" sizes="100vw" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(232,32,15,0.18),transparent_28%),linear-gradient(to_bottom,#000_0%,rgba(0,0,0,0.84)_42%,#000_100%)]" />
      </div>

      <div className="container-x relative z-10">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <p className="eyebrow mb-5">What <QBricksText /> is</p>
          <h2 className="text-[clamp(2.5rem,5.5vw,5.4rem)] font-black leading-[0.96] tracking-[-0.06em] text-white">
            A governed, secure metadata platform for regulated institutions.
          </h2>
          <p className="mx-auto mt-7 max-w-3xl text-xl leading-relaxed text-q-gray-300">
            <QBricksText /> is a streaming data-management platform that enforces governance at the point of ingestion — so the data landing in your lakehouse is already trusted, lineage-complete and AI-ready.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="premium-card p-6 md:p-10"
          >
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <h3 className="text-3xl font-black tracking-tight text-white lg:text-4xl">The <QBricksText /> Transformation</h3>
                <p className="mt-5 text-lg leading-relaxed text-q-gray-400">From fragmented, risky lakehouse operations to an explicit control layer for governed data products.</p>
                <Link href="/why-qbricks" className="mt-8 inline-flex items-center gap-2 text-sm font-black text-white transition-colors hover:text-q-brand-ember">
                  Why the foundation matters <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="rounded-3xl border border-red-400/15 bg-red-500/[0.04] p-5 lg:p-6">
                  <p className="mb-5 text-xs font-black uppercase tracking-[0.2em] text-red-300/80">Before</p>
                  <ul className="space-y-4">
                    {["Ungoverned notebooks", "Schema-level governance gaps", "Fragmented lineage", "AI delivery risk"].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-q-gray-300">
                        <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-300/70" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/[0.055] p-5 lg:p-6">
                  <p className="mb-5 text-xs font-black uppercase tracking-[0.2em] text-emerald-300">After</p>
                  <ul className="space-y-4">
                    {["Data Contracts", "Data Products", "Decision lineage", "AI-ready foundation"].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm font-semibold text-white">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability, index) => (
              <CapabilityCard key={capability.title} capability={capability} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
