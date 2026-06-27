"use client";

import { motion } from "framer-motion";
import { Users, Cloud, Database, ArrowRight } from "lucide-react";
import { QBricksText } from "@/components/ui/QBricksText";

export default function Narrative() {
  return (
    <div className="mx-auto max-w-5xl space-y-8 md:space-y-12">
      {/* Act 1 - The swap */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="rounded-3xl border border-white/5 bg-q-gray-900 p-8 md:p-12"
      >
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="eyebrow mb-2">Act 1 — The swap</p>
            <h2 className="text-3xl font-black text-white">Headcount out, compute in</h2>
            <ul className="mt-6 space-y-4 text-lg text-q-gray-300">
              <li className="flex items-start gap-3">
                <span className="mt-2 flex h-1.5 w-1.5 shrink-0 rounded-full bg-q-brand-ember" />
                Roles cut, work pushed onto large hosted A.I. and GPU compute
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 flex h-1.5 w-1.5 shrink-0 rounded-full bg-q-brand-ember" />
                Vendor framed it as cheaper than the headcount it replaced
              </li>
            </ul>
            <blockquote className="mt-8 border-l-2 border-q-brand-ember pl-6 italic text-q-gray-400">
              "Replace teams with compute and your costs come down."
            </blockquote>
          </div>
          
          <div className="relative flex h-64 items-center justify-center rounded-2xl bg-black/50 p-6">
            <div className="flex w-full items-center justify-between px-4">
              <div className="flex flex-col items-center">
                <Users className="mb-3 h-12 w-12 text-q-gray-500" />
                <span className="font-bold text-q-gray-400">FTE budget &darr;</span>
              </div>
              <motion.div 
                className="flex items-center gap-1"
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight className="h-5 w-5 text-q-gray-500" />
                <ArrowRight className="h-5 w-5 text-q-gray-500" />
                <ArrowRight className="h-5 w-5 text-q-gray-500" />
              </motion.div>
              <div className="flex flex-col items-center">
                <Cloud className="mb-3 h-12 w-12 text-q-brand-ember" />
                <span className="font-bold text-q-brand-ember">Cloud spend &uarr;</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="flex justify-center">
        <div className="h-12 w-px bg-gradient-to-b from-white/20 to-transparent md:h-16" />
      </div>

      {/* Act 2 - The trap */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="overflow-hidden rounded-3xl border border-q-brand/30 bg-q-panel"
      >
        <div className="bg-q-brand/10 border-b border-q-brand/30 px-8 py-6 md:px-12">
          <p className="eyebrow mb-1">Act 2 — The trap</p>
          <h2 className="text-3xl font-black text-white">The bill keeps climbing</h2>
        </div>
        <div className="grid gap-12 p-8 md:grid-cols-2 md:p-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-q-brand-ember/30 bg-q-brand-ember/10 px-4 py-1.5 text-sm font-bold text-q-brand-ember mb-6">
              Higher cost, same output
            </div>
            <ul className="space-y-4 text-lg text-q-gray-300">
              <li className="flex items-start gap-3">
                <span className="mt-2 flex h-1.5 w-1.5 shrink-0 rounded-full bg-q-brand-ember" />
                Data copied out on every run, egress fees and repeated re-scans
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 flex h-1.5 w-1.5 shrink-0 rounded-full bg-q-brand-ember" />
                Metered GPU billing has no ceiling
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 flex h-1.5 w-1.5 shrink-0 rounded-full bg-q-brand-ember" />
                Lost staff knowledge still needed
              </li>
            </ul>
          </div>
          
          <div className="relative h-64 rounded-2xl bg-black p-6 border border-white/5 flex items-end">
            <svg viewBox="0 0 400 200" className="w-full h-full overflow-visible">
              <line x1="20" y1="180" x2="380" y2="180" stroke="#333" strokeWidth="2" />
              <line x1="20" y1="20" x2="20" y2="180" stroke="#333" strokeWidth="2" />
              
              <motion.path 
                d="M 20 120 L 380 120"
                fill="none"
                stroke="#71717a"
                strokeWidth="3"
                strokeDasharray="400"
                initial={{ strokeDashoffset: 400 }}
                whileInView={{ strokeDashoffset: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
              />
              <text x="375" y="110" fill="#71717a" fontSize="12" textAnchor="end" className="font-bold hidden sm:block">Value delivered</text>

              <motion.path 
                d="M 20 160 Q 150 150 250 80 T 380 20"
                fill="none"
                stroke="#C8102E"
                strokeWidth="4"
                strokeDasharray="450"
                initial={{ strokeDashoffset: 450 }}
                whileInView={{ strokeDashoffset: 0 }}
                transition={{ duration: 2, ease: "easeIn", delay: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
              />
              <text x="375" y="35" fill="#C8102E" fontSize="12" textAnchor="end" className="font-bold hidden sm:block">Compute cost</text>
            </svg>
            <p className="absolute bottom-2 left-0 right-0 text-center text-xs text-q-gray-500">Spend accelerates, the work delivered does not.</p>
          </div>
        </div>
      </motion.div>

      <div className="flex justify-center">
        <div className="h-12 w-px bg-gradient-to-b from-white/20 to-transparent md:h-16" />
      </div>

      {/* Act 3 - The fix */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-black p-8 md:p-12 shadow-[0_20px_60px_rgba(200,16,46,0.15)]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(200,16,46,0.1),transparent_40%)]" />
        
        <div className="relative z-10 grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="eyebrow mb-2">Act 3 — The fix</p>
            <h2 className="text-3xl font-black text-white"><QBricksText />&reg;</h2>
            <p className="mt-2 text-xl font-bold text-q-brand-ember">Local compute on your own infrastructure</p>
            
            <ul className="mt-8 space-y-4 text-lg text-q-gray-300">
              <li className="flex items-start gap-3">
                <span className="mt-2 flex h-1.5 w-1.5 shrink-0 rounded-full bg-q-brand-ember" />
                Metadata only, client data untouched
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 flex h-1.5 w-1.5 shrink-0 rounded-full bg-q-brand-ember" />
                Rust core engine runs where data lives
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 flex h-1.5 w-1.5 shrink-0 rounded-full bg-q-brand-ember" />
                No copy-out, no egress, no GPU meter
              </li>
            </ul>
            
            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-q-brand-ember/30 bg-q-brand-ember/10 px-4 py-1.5 text-sm font-bold text-q-brand-ember">
              Same compute, a fraction of the cost
            </div>
          </div>
          
          <div className="relative flex flex-col items-center justify-center rounded-2xl border border-white/5 bg-white/[0.02] p-8">
            <div className="mb-4 flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2">
              <Database className="h-5 w-5 text-q-gray-300" />
              <span className="font-bold text-white">Your estate</span>
            </div>
            
            <div className="flex h-12 flex-col items-center justify-center">
              <div className="h-full w-px bg-q-brand-ember" />
            </div>
            
            <div className="z-10 -my-2 flex items-center justify-center rounded-full border border-q-brand/30 bg-black px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-q-brand-ember shadow-[0_0_15px_rgba(200,16,46,0.3)]">
              Data never moves
            </div>
            
            <div className="flex h-12 flex-col items-center justify-center">
              <div className="h-full w-px bg-q-brand-ember" />
            </div>
            
            <div className="w-full rounded-xl border border-white/10 bg-white/5 p-4 text-center">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-q-gray-500">SQL Push-Down Into</p>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="rounded bg-black px-2 py-1 text-xs font-medium text-white border border-white/10">Databricks</span>
                <span className="rounded bg-black px-2 py-1 text-xs font-medium text-white border border-white/10">MS Fabric</span>
                <span className="rounded bg-black px-2 py-1 text-xs font-medium text-white border border-white/10">Snowflake</span>
              </div>
            </div>
            
            <div className="mt-8 w-full max-w-[200px]">
              <svg viewBox="0 0 200 60" className="w-full h-full overflow-visible">
                <motion.path 
                  d="M 10 10 Q 50 10 100 40 T 190 50"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="3"
                  strokeDasharray="200"
                  initial={{ strokeDashoffset: 200 }}
                  whileInView={{ strokeDashoffset: 0 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                />
              </svg>
              <p className="text-center text-xs font-bold text-emerald-400 mt-2">Cost back under control</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
