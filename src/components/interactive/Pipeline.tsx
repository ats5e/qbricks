import { QBricksText } from "@/components/ui/QBricksText";
\n"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Database, FileCode2, Scale, Workflow, Zap } from "lucide-react";
import { useState } from "react";

const nodes = [
  { id: "ingest", label: "Ingest", icon: Database, desc: "Structured and unstructured data." },
  { id: "validate", label: "Validate", icon: FileCode2, desc: "Data Contract execution." },
  { id: "resolve", label: "Resolve", icon: Workflow, desc: "Entity resolution via Quantexa." },
  { id: "govern", label: "Govern", icon: Scale, desc: "Compliance and audit trail." },
  { id: "lakehouse", label: "Lakehouse", icon: Zap, desc: "AI-ready data delivery." },
];

export function Pipeline() {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  return (
    <section id="pipeline" className="section-y relative overflow-hidden bg-q-black">
      <div className="absolute inset-0 z-0 opacity-20 mix-blend-plus-lighter pointer-events-none">
        <Image src="/assets/tiles-iso.png" alt="" fill className="object-cover scale-110 translate-y-10" sizes="100vw" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#000000_70%)]" />
      </div>

      <div className="absolute left-1/2 top-1/2 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-q-brand/5 blur-[120px] pointer-events-none mix-blend-screen" />

      <div className="container-x relative z-10">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <p className="eyebrow mb-4">The <QBricksText /> Pipeline</p>
          <h2 className="mb-6 text-[clamp(2.5rem,4vw,3.5rem)] font-display font-black leading-tight tracking-tighter text-white">
            Record to report, <br />
            <span className="text-brand-gradient">fully transparent.</span>
          </h2>
          <p className="text-lg text-q-gray-400">A continuous, contract-driven flow. Hover over each stage to explore the transformation.</p>
        </div>

        <div className="relative mx-auto flex h-[300px] max-w-5xl items-center justify-between">
          <div className="absolute left-10 right-10 top-1/2 z-0 h-[2px] -translate-y-1/2 bg-white/10" />

          <svg className="absolute inset-0 z-0 h-full w-full pointer-events-none">
            <motion.line x1="0" y1="50%" x2="100%" y2="50%" stroke="url(#energy)" strokeWidth="2" strokeDasharray="10 20" animate={{ strokeDashoffset: [0, -100] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />
            <defs>
              <linearGradient id="energy" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="50%" stopColor="var(--color-q-brand-ember)" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
          </svg>

          {nodes.map((node) => (
            <div key={node.id} className="relative z-10 flex flex-col items-center" onMouseEnter={() => setActiveNode(node.id)} onMouseLeave={() => setActiveNode(null)}>
              <motion.div
                className={`flex h-20 w-20 cursor-pointer items-center justify-center rounded-2xl transition-all duration-300 ${
                  activeNode === node.id ? "scale-110 bg-q-brand text-white shadow-[0_0_30px_rgba(232,32,15,0.4)]" : "border border-white/10 bg-q-panel text-q-gray-400 hover:border-white/30 hover:text-white"
                }`}
                whileHover={{ y: -5 }}
              >
                <node.icon className="h-8 w-8" />
              </motion.div>

              <div className="absolute top-24 w-40 text-center transition-opacity duration-300">
                <h3 className={`mb-1 text-lg font-bold ${activeNode === node.id ? "text-white" : "text-q-gray-300"}`}>{node.label}</h3>
                <p className={`text-sm ${activeNode === node.id ? "text-q-gray-400 opacity-100" : "opacity-0"}`}>{node.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
