"use client";

import { motion } from "framer-motion";
import { BrainCircuit, GitBranch, Network, ScanLine, ShieldCheck, UserCheck } from "lucide-react";

const features = [
  {
    icon: BrainCircuit,
    title: "Agentic automation",
    description: "Depending on an organisation's policies, agents can be used to handle routine metadata work and act according to your governance policy.",
  },
  {
    icon: GitBranch,
    title: "Data Lineage",
    description: "Fully understand how data assets and products have been created by QBricks. Drill down on each and see a visualization of the joins and underlying data tables.",
  },
  {
    icon: Network,
    title: "Knowledge graphs",
    description: "Fully understand your data with clickable knowledge graphs, enabling a full and detailed understanding of your organisation's data.",
  },
  {
    icon: UserCheck,
    title: "Human in the loop",
    description: "Automation scales the work; your governance, risk and data teams retain review, control and accountability.",
  },
];

const orbitLabels = ["Data Contracts", "Data Products", "Data Assets", "Governed", "Auditable", "Lineage", "Ontologies"];

export function Agentic() {
  return (
    <section className="section-y relative overflow-hidden border-y border-white/5 bg-q-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_45%,rgba(232,32,15,0.16),transparent_34%),radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.06),transparent_24%)]" />
      <div className="absolute inset-0 bg-dot-pattern opacity-35" />

      <div className="container-x relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-[0.92fr_1.08fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75 }}
          >
            <p className="eyebrow mb-5">Secure agentic metadata management</p>
            <h2 className="text-[clamp(2.4rem,5vw,5rem)] font-black leading-[0.96] tracking-tight text-white">
              Automate the heavy work. Audit everything.
            </h2>
            <p className="mt-7 text-xl leading-relaxed text-q-gray-300">
              QBricks automates the data management process by creating data contracts, performing complex pipeline builds and joins and providing data products that can be used either in existing data management platforms or in an organisation&apos;s local database. Accelerate your organisation&apos;s A.I. journey and keep complete control of each and every data product.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.55, delay: index * 0.07 }}
                    className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl transition-all hover:border-q-brand/30 hover:bg-q-brand/[0.055]"
                  >
                    <div className="mb-4 inline-flex rounded-2xl border border-white/10 bg-white/5 p-3 text-q-brand-ember">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-black text-white">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-q-gray-400">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.85 }}
            className="relative mt-12 flex min-h-[620px] w-[500px] max-w-none mx-auto origin-top scale-[0.72] items-center justify-center sm:w-auto sm:scale-100 lg:mt-0 -mb-[170px] sm:mb-0"
          >
            <div className="absolute h-[520px] w-[520px] rounded-full bg-q-brand/[0.12] blur-[110px]" />
            <div className="relative flex h-[500px] w-[500px] items-center justify-center rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-3xl">
              {[0, 1, 2].map((ring) => (
                <motion.div
                  key={ring}
                  className="absolute rounded-full border border-white/10"
                  style={{ inset: `${46 + ring * 56}px` }}
                  animate={{ rotate: ring % 2 ? -360 : 360 }}
                  transition={{ duration: 24 + ring * 8, repeat: Infinity, ease: "linear" }}
                >
                  {/* Glowing orbital node */}
                  <div className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-q-brand-ember shadow-[0_0_12px_2px_rgba(232,32,15,0.8)]" />
                  {ring === 1 && <div className="absolute bottom-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 translate-y-1/2 rounded-full bg-emerald-400 shadow-[0_0_12px_2px_rgba(52,211,153,0.8)]" />}
                </motion.div>
              ))}

              {orbitLabels.map((label, index) => {
                const angle = (index / orbitLabels.length) * Math.PI * 2;
                const radius = 210;
                const x = Math.round(Math.cos(angle) * radius);
                const y = Math.round(Math.sin(angle) * radius);
                return (
                  <motion.div
                    key={label}
                    className="absolute rounded-2xl border border-white/10 bg-black/70 px-4 py-3 text-sm font-bold text-white shadow-[0_18px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl"
                    style={{ x, y }}
                    animate={{ y: [y, y - 10, y] }}
                    transition={{ duration: 4 + index * 0.35, repeat: Infinity, ease: "easeInOut" }}
                  >
                    {label}
                  </motion.div>
                );
              })}

              <motion.div 
                className="relative z-10 rounded-[2.5rem] border border-q-brand/30 bg-gradient-to-b from-q-brand/20 to-white/[0.04] p-8 text-center shadow-[0_0_90px_rgba(232,32,15,0.28)] backdrop-blur-2xl"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-3xl border border-white/15 bg-black/40 text-white relative">
                  <div className="absolute inset-0 rounded-3xl border border-q-brand-ember/30 animate-pulse" />
                  <ScanLine className="h-10 w-10 text-q-brand-ember" />
                </div>
                <h3 className="text-2xl font-black text-white">Governed Agentic Mesh</h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-q-gray-300">Learns, recommends and executes with human approval and full lineage.</p>
                <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-300/10 px-4 py-2 text-sm font-bold text-emerald-300">
                  <ShieldCheck className="h-4 w-4" />
                  Always auditable
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
