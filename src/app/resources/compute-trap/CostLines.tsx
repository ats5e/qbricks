"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, AlertCircle, CheckCircle2 } from "lucide-react";
import { QBricksText } from "@/components/ui/QBricksText";

const costLines = [
  {
    id: "01",
    title: "Replacing the data remediation team",
    todayText: "A standing team you pay every month. Analysts and data stewards triage, reconcile and fix quality exceptions by hand. Backlogs grow faster than they clear.",
    todayDriver: "[N] FTE at €[loaded cost / FTE]",
    withText: "The engine works the backlog. Metadata-driven rules detect and resolve exceptions continuously and automatically. Quality is enforced at source, not after. Headcount falls from [N] to [n] FTE.",
    savingText: "remediation payroll removed"
  },
  {
    id: "02",
    title: "Pipeline build & engineering",
    todayText: "Bespoke pipelines, re-built. Data engineers hand-build remediation and reconciliation pipelines per source and rule. Long build cycles at high day rates.",
    todayDriver: "[X] person-weeks at €[day rate]",
    withText: "Metadata rules, applied in place. Quality logic is expressed once as metadata and applied via SQL push-down. No movement or remediation pipelines to design, build or test. Build drops to [Y] weeks.",
    savingText: "engineering build avoided (one-off + ongoing)"
  },
  {
    id: "03",
    title: "Build & processing compute",
    todayText: "Clusters scanning twice over. Quality jobs spin up dedicated clusters and re-scan full data sets on every run. Data is copied out, egress and duplicate storage on top.",
    todayDriver: "€[per run] × [N runs]",
    withText: "Local compute, no copy-out. Metadata only, with a lightweight Rust engine. Work is pushed down to where data already lives in Databricks, Microsoft Fabric, Snowflake. No separate cluster, no egress.",
    savingText: "processing compute & egress removed"
  },
  {
    id: "04",
    title: "Ongoing compute & maintenance",
    todayText: "Opex that only grows. Pipelines, clusters and rules need constant upkeep: re-runs, uptime, version maintenance. Every rule change is an engineering ticket.",
    todayDriver: "€[run + maintain / year]",
    withText: "Light to run, business-owned. Runs on existing infrastructure, server-side. Rules maintained by the business, not re-engineered each time. Incremental compute is minimal.",
    savingText: "run & maintain cost minimised"
  }
];

export default function CostLines() {
  const [expandedId, setExpandedId] = useState<string | null>("01");

  return (
    <div className="space-y-4 mx-auto max-w-4xl">
      {costLines.map((line) => (
        <div 
          key={line.id}
          className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
            expandedId === line.id 
              ? "border-white/20 bg-white/[0.05]" 
              : "border-white/5 bg-white/[0.02] hover:bg-white/[0.04]"
          }`}
        >
          <button
            onClick={() => setExpandedId(expandedId === line.id ? null : line.id)}
            className="flex w-full items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-q-brand-ember"
          >
            <div className="flex items-center gap-4">
              <span className="font-mono text-sm font-bold text-q-gray-500">{line.id}</span>
              <h3 className="text-xl font-bold text-white md:text-2xl">{line.title}</h3>
            </div>
            <ChevronDown 
              className={`h-5 w-5 shrink-0 text-q-gray-400 transition-transform duration-300 ${
                expandedId === line.id ? "rotate-180" : ""
              }`} 
            />
          </button>
          
          <AnimatePresence initial={false}>
            {expandedId === line.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="border-t border-white/5 p-6 pt-2">
                  <div className="grid gap-8 md:grid-cols-2">
                    {/* Today */}
                    <div className="space-y-4 rounded-xl bg-black/40 p-5 border border-q-gray-800">
                      <div className="flex items-center gap-2 text-q-brand-ember">
                        <AlertCircle className="h-4 w-4" />
                        <h4 className="font-bold">Today, without <QBricksText /></h4>
                      </div>
                      <p className="text-q-gray-300 leading-relaxed text-sm">
                        {line.todayText}
                      </p>
                      <div className="inline-flex rounded-lg bg-white/5 px-3 py-2 text-xs font-mono text-q-gray-400 border border-white/10">
                        Cost driver: <span className="ml-2 text-q-gray-200">{line.todayDriver}</span>
                      </div>
                    </div>
                    
                    {/* With QBricks */}
                    <div className="space-y-4 rounded-xl bg-emerald-400/5 p-5 border border-emerald-400/20">
                      <div className="flex items-center gap-2 text-emerald-400">
                        <CheckCircle2 className="h-4 w-4" />
                        <h4 className="font-bold">With <QBricksText /></h4>
                      </div>
                      <p className="text-q-gray-300 leading-relaxed text-sm">
                        {line.withText}
                      </p>
                    </div>
                  </div>
                  
                  {/* Annual Saving */}
                  <div className="mt-6 flex flex-col md:flex-row md:items-center justify-between gap-2 rounded-xl bg-emerald-400/10 border border-emerald-400/20 px-6 py-4">
                    <span className="font-bold text-emerald-300 uppercase text-xs tracking-wider">Annual saving</span>
                    <span className="font-bold text-emerald-100 text-sm">{line.savingText}</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
