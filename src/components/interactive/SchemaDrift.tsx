"use client";

import { QBricksText } from "@/components/ui/QBricksText";

import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle2, Database, Shuffle, RefreshCw } from "lucide-react";

export function SchemaDrift() {
  return (
    <section className="section-y relative bg-white border-y border-black/5 overflow-hidden">
      <div className="container-x relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="eyebrow mb-4">Schema Evolution</p>
          <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] font-display font-black tracking-tight text-q-ink mb-6 leading-tight">
            Survive schema drift <br /> automatically.
          </h2>
          <p className="text-q-gray-600 text-lg">
            When upstream systems change, traditional pipelines break. <QBricksText /> uses its Data Contract to automatically version schemas, quarantine bad records, and keep the data flowing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* The Old Way */}
          <div className="rounded-2xl border border-black/5 bg-black/[0.02] p-8 flex flex-col items-center">
            <h3 className="text-xl font-bold text-q-ink mb-8">The Old Way</h3>
            
            <div className="relative w-full max-w-[300px] h-[300px] flex flex-col items-center justify-between">
              {/* Database Node */}
              <div className="w-full flex justify-center z-10">
                <div className="p-4 rounded-xl bg-black/5 border border-black/10 flex items-center gap-3">
                  <Database className="w-5 h-5 text-q-gray-600" />
                  <span className="text-sm text-q-gray-700 font-medium">ALTER TABLE...</span>
                </div>
              </div>

              {/* Connecting Line */}
              <div className="absolute top-[3rem] bottom-[3rem] w-0.5 bg-red-500/50" />

              {/* Error Explosion */}
              <motion.div 
                className="absolute top-1/2 -translate-y-1/2 flex items-center justify-center"
                animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 0.5, repeat: Infinity }}
              >
                <div className="p-3 rounded-full bg-red-500/20 border border-red-500/50 backdrop-blur-md shadow-[0_0_30px_rgba(239,68,68,0.5)] text-red-600">
                  <AlertTriangle className="w-8 h-8" />
                </div>
              </motion.div>

              {/* Broken Pipeline Node */}
              <div className="w-full flex justify-center z-10">
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-3 grayscale">
                  <Shuffle className="w-5 h-5 text-red-600" />
                  <span className="text-sm text-red-600 font-medium">Pipeline Failed</span>
                </div>
              </div>
            </div>

            <p className="mt-8 text-center text-sm text-q-gray-500 max-w-[250px]">
              Schema changes crash the pipeline. Data engineers get paged at 2 AM.
            </p>
          </div>

          {/* The QBricks Way */}
          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.02] p-8 flex flex-col items-center shadow-[0_0_50px_rgba(16,185,129,0.05)] relative overflow-hidden">
            
            <h3 className="text-xl font-bold text-q-ink mb-8 z-10">The <QBricksText /> Way</h3>
            
            <div className="relative w-full max-w-[300px] h-[300px] flex flex-col items-center justify-between z-10">
              {/* Database Node */}
              <div className="w-full flex justify-center z-10">
                <div className="p-4 rounded-xl bg-black/5 border border-black/10 flex items-center gap-3">
                  <Database className="w-5 h-5 text-q-gray-600" />
                  <span className="text-sm text-q-gray-700 font-medium">ALTER TABLE...</span>
                </div>
              </div>

              {/* Connecting Line (Top half) */}
              <div className="absolute top-[3rem] h-[5rem] w-0.5 bg-emerald-500/50" />
              
              {/* Connecting Line (Bottom half) */}
              <div className="absolute bottom-[3rem] h-[5rem] w-0.5 bg-emerald-500/50" />

              {/* QBricks Contract Node */}
              <motion.div 
                className="absolute top-1/2 -translate-y-1/2 flex items-center justify-center"
              >
                <div className="p-3 rounded-full bg-q-brand/10 border border-q-brand/30 backdrop-blur-md shadow-[0_0_30px_rgba(232,32,15,0.3)] text-q-brand relative overflow-hidden group">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(232,32,15,0.55)_360deg)] opacity-50"
                  />
                  <div className="relative bg-white p-2 rounded-full">
                    <RefreshCw className="w-6 h-6 text-q-brand-ember" />
                  </div>
                </div>
                {/* Floating "Schema Auto-evolved" Badge */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: [0, 1, 1, 0], x: [20, 40, 40, 60] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute left-full ml-4 whitespace-nowrap bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 text-xs px-2 py-1 rounded-md"
                >
                  Version 1.2.1 Created
                </motion.div>
              </motion.div>

              {/* Working Pipeline Node */}
              <div className="w-full flex justify-center z-10">
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span className="text-sm text-emerald-600 font-medium">Data Flowing</span>
                </div>
              </div>
            </div>

            <p className="mt-8 text-center text-sm text-q-gray-600 max-w-[250px] z-10">
              Contract auto-versions the schema. Valid data flows, invalid data is quarantined.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
