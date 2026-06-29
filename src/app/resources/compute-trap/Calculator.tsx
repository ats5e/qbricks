"use client";

import { useState, useEffect } from "react";
import { motion, animate, useMotionValue, useTransform } from "framer-motion";
import { Calculator as CalculatorIcon, ArrowRight, Info } from "lucide-react";
import Link from "next/link";
import { QBricksText } from "@/components/ui/QBricksText";

// Custom hook for localStorage
function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(initialValue);

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (item) {
        setStoredValue(JSON.parse(item));
      }
    } catch (error) {
      console.warn(error);
    }
  }, [key]);

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.warn(error);
    }
  };
  return [storedValue, setValue] as const;
}

// Animated Counter component
function Counter({ value, isMillion = false }: { value: number; isMillion?: boolean }) {
  const motionValue = useMotionValue(0);
  
  const formatted = useTransform(motionValue, (latest) => {
    if (isMillion && latest >= 1000000) {
      return `€ ${(latest / 1000000).toFixed(1)} m / year`;
    }
    return new Intl.NumberFormat('en-IE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(latest);
  });

  useEffect(() => {
    const controls = animate(motionValue, value, {
      duration: 0.8,
      ease: "easeOut"
    });
    return controls.stop;
  }, [value, motionValue]);

  return <motion.span>{formatted}</motion.span>;
}

export default function Calculator() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const [fteToday, setFteToday] = useLocalStorage("qb-fteToday", 30);
  const [fteWith, setFteWith] = useLocalStorage("qb-fteWith", 1);
  const [loadedCost, setLoadedCost] = useLocalStorage("qb-loadedCost", 220000);

  const [weeksToday, setWeeksToday] = useLocalStorage("qb-weeksToday", 40);
  const [weeksWith, setWeeksWith] = useLocalStorage("qb-weeksWith", 8);
  const [dayRate, setDayRate] = useLocalStorage("qb-dayRate", 1000);
  const [maintenanceAvoided, setMaintenanceAvoided] = useLocalStorage("qb-maintAvoided", 120000);

  const [runs, setRuns] = useLocalStorage("qb-runs", 900);
  const [costPerRun, setCostPerRun] = useLocalStorage("qb-costPerRun", 600);
  const [shareRemoved, setShareRemoved] = useLocalStorage("qb-shareRemoved", 90);

  const [runMaintainToday, setRunMaintainToday] = useLocalStorage("qb-runMaintainToday", 300000);
  const [runMaintainWith, setRunMaintainWith] = useLocalStorage("qb-runMaintainWith", 30000);

  const savingRemediation = Math.max(0, (fteToday - fteWith) * loadedCost);
  const savingPipelineOneOff = Math.max(0, (weeksToday - weeksWith) * 5 * dayRate);
  const savingPipelineAnnual = maintenanceAvoided;
  const savingCompute = Math.max(0, runs * costPerRun * (shareRemoved / 100));
  const savingOngoing = Math.max(0, runMaintainToday - runMaintainWith);

  const totalAnnualSaving = savingRemediation + savingPipelineAnnual + savingCompute + savingOngoing;

  // Render a skeleton if not mounted to prevent hydration mismatch
  if (!mounted) {
    return <div className="min-h-[800px] animate-pulse rounded-3xl bg-white/[0.02]" />;
  }

  return (
    <div>
      <div className="mb-12 max-w-3xl">
        <h2 className="text-3xl font-black text-white md:text-4xl">Model the savings</h2>
        <p className="mt-4 text-lg text-q-gray-400">
          This is an indicative example model only. Enter your own baseline figures to estimate the gross cost reduction <QBricksText /> can deliver.
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-[1fr_400px]">
        {/* Left Col - Inputs */}
        <div className="space-y-12">
          
          {/* 01 */}
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 md:p-8">
            <h3 className="mb-6 flex items-center gap-3 text-xl font-bold text-white">
              <span className="font-mono text-sm text-q-gray-500">01</span> Remediation
            </h3>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="mb-2 flex justify-between text-sm font-bold text-q-gray-400">
                  FTE today <span>{fteToday}</span>
                </label>
                <input type="range" min="1" max="50" value={fteToday} onChange={e => setFteToday(Number(e.target.value))} className="w-full accent-q-brand-ember" />
              </div>
              <div>
                <label className="mb-2 flex justify-between text-sm font-bold text-q-gray-400">
                  <span>FTE with <QBricksText /></span> <span>{fteWith}</span>
                </label>
                <input type="range" min="0" max="10" value={fteWith} onChange={e => setFteWith(Number(e.target.value))} className="w-full accent-emerald-400" />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-2 flex justify-between text-sm font-bold text-q-gray-400">
                  Loaded cost per FTE <span>€{loadedCost.toLocaleString()}</span>
                </label>
                <input type="range" min="50000" max="300000" step="5000" value={loadedCost} onChange={e => setLoadedCost(Number(e.target.value))} className="w-full accent-q-gray-400" />
              </div>
            </div>
          </div>

          {/* 02 */}
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 md:p-8">
            <h3 className="mb-6 flex items-center gap-3 text-xl font-bold text-white">
              <span className="font-mono text-sm text-q-gray-500">02</span> Pipeline build & engineering
            </h3>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="mb-2 flex justify-between text-sm font-bold text-q-gray-400">
                  Person-weeks today <span>{weeksToday}</span>
                </label>
                <input type="range" min="4" max="100" value={weeksToday} onChange={e => setWeeksToday(Number(e.target.value))} className="w-full accent-q-brand-ember" />
              </div>
              <div>
                <label className="mb-2 flex justify-between text-sm font-bold text-q-gray-400">
                  <span>Person-weeks with <QBricksText /></span> <span>{weeksWith}</span>
                </label>
                <input type="range" min="1" max="20" value={weeksWith} onChange={e => setWeeksWith(Number(e.target.value))} className="w-full accent-emerald-400" />
              </div>
              <div>
                <label className="mb-2 flex justify-between text-sm font-bold text-q-gray-400">
                  Contractor day rate <span>€{dayRate}</span>
                </label>
                <input type="range" min="300" max="2000" step="50" value={dayRate} onChange={e => setDayRate(Number(e.target.value))} className="w-full accent-q-gray-400" />
              </div>
              <div>
                <label className="mb-2 flex justify-between text-sm font-bold text-q-gray-400">
                  Annual maint. avoided <span>€{maintenanceAvoided.toLocaleString()}</span>
                </label>
                <input type="range" min="0" max="300000" step="10000" value={maintenanceAvoided} onChange={e => setMaintenanceAvoided(Number(e.target.value))} className="w-full accent-q-gray-400" />
              </div>
            </div>
          </div>

          {/* 03 */}
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 md:p-8">
            <h3 className="mb-6 flex items-center gap-3 text-xl font-bold text-white">
              <span className="font-mono text-sm text-q-gray-500">03</span> Build & processing compute
            </h3>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="mb-2 flex justify-between text-sm font-bold text-q-gray-400">
                  Runs per year <span>{runs}</span>
                </label>
                <input type="range" min="10" max="2000" step="10" value={runs} onChange={e => setRuns(Number(e.target.value))} className="w-full accent-q-gray-400" />
              </div>
              <div>
                <label className="mb-2 flex justify-between text-sm font-bold text-q-gray-400">
                  Cost per run <span>€{costPerRun}</span>
                </label>
                <input type="range" min="100" max="5000" step="50" value={costPerRun} onChange={e => setCostPerRun(Number(e.target.value))} className="w-full accent-q-gray-400" />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-2 flex justify-between text-sm font-bold text-q-gray-400">
                  Share removed by push-down <span>{shareRemoved}%</span>
                </label>
                <input type="range" min="0" max="100" value={shareRemoved} onChange={e => setShareRemoved(Number(e.target.value))} className="w-full accent-emerald-400" />
              </div>
            </div>
          </div>

          {/* 04 */}
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 md:p-8">
            <h3 className="mb-6 flex items-center gap-3 text-xl font-bold text-white">
              <span className="font-mono text-sm text-q-gray-500">04</span> Ongoing compute & maintenance
            </h3>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="mb-2 flex justify-between text-sm font-bold text-q-gray-400">
                  Run + maintain today <span>€{runMaintainToday.toLocaleString()}</span>
                </label>
                <input type="range" min="10000" max="500000" step="5000" value={runMaintainToday} onChange={e => setRunMaintainToday(Number(e.target.value))} className="w-full accent-q-brand-ember" />
              </div>
              <div>
                <label className="mb-2 flex justify-between text-sm font-bold text-q-gray-400">
                  <span>With <QBricksText /></span> <span>€{runMaintainWith.toLocaleString()}</span>
                </label>
                <input type="range" min="10000" max="250000" step="5000" value={runMaintainWith} onChange={e => setRunMaintainWith(Number(e.target.value))} className="w-full accent-emerald-400" />
              </div>
            </div>
          </div>
          
        </div>

        {/* Right Col - Summary Sticky */}
        <div>
          <div className="sticky top-24 rounded-[2rem] border border-white/10 bg-q-gray-900 p-8 shadow-2xl">
            <div className="mb-8 flex items-center gap-3 text-q-brand-ember">
              <CalculatorIcon className="h-6 w-6" />
              <h3 className="text-xl font-bold text-white">Savings Summary</h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <p className="mb-1 text-sm text-q-gray-400">01 Remediation</p>
                <p className="text-2xl font-bold text-emerald-400"><Counter value={savingRemediation} /></p>
              </div>
              
              <div className="border-t border-white/10 pt-4">
                <p className="mb-1 text-sm text-q-gray-400">02 Pipeline annual maint. avoided</p>
                <p className="text-2xl font-bold text-emerald-400"><Counter value={savingPipelineAnnual} /></p>
                
                <div className="mt-3 rounded-xl bg-white/5 p-3 text-sm">
                  <p className="text-q-gray-400">Plus one-off build saving:</p>
                  <p className="font-bold text-white"><Counter value={savingPipelineOneOff} /></p>
                </div>
              </div>
              
              <div className="border-t border-white/10 pt-4">
                <p className="mb-1 text-sm text-q-gray-400">03 Processing compute</p>
                <p className="text-2xl font-bold text-emerald-400"><Counter value={savingCompute} /></p>
              </div>
              
              <div className="border-t border-white/10 pt-4">
                <p className="mb-1 text-sm text-q-gray-400">04 Ongoing compute & maintain</p>
                <p className="text-2xl font-bold text-emerald-400"><Counter value={savingOngoing} /></p>
              </div>
              
              <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-6 pt-5 mt-8">
                <p className="text-sm font-bold uppercase tracking-wider text-emerald-500 mb-1">Total Annual Saving</p>
                <p className="text-4xl font-black text-emerald-300">
                  <Counter value={totalAnnualSaving} isMillion={true} />
                </p>
              </div>
              
              <div className="flex items-start gap-3 text-xs text-q-gray-500 mt-6">
                <Info className="h-5 w-5 shrink-0 mt-0.5 text-q-gray-400" />
                <div>
                  <div className="mb-2">
                    <p className="mb-1"><strong className="text-q-gray-300">Savings shown are gross.</strong></p>
                    <p><QBricksText /> operates on a 25% / 30% / 35% gain-share model over three years. Net client savings will be offset by this fee.</p>
                  </div>
                  <p>Indicative figures only, pending your baseline. Populated from your client baseline and the <QBricksText /> gain-share model.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Band + CTA */}
      <div className="mt-24 rounded-3xl border border-white/10 bg-white/[0.02] p-12 text-center">
        <h2 className="mb-6 text-3xl font-black text-white md:text-5xl">Four cost lines, one engine</h2>
        <p className="mx-auto mb-10 max-w-2xl text-xl text-q-gray-300">
          Reclaim <span className="font-bold text-emerald-400"><Counter value={totalAnnualSaving} isMillion={true} /></span> and end the compute trap.
        </p>
        
        <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-black text-black transition-all hover:-translate-y-1 hover:bg-q-gray-200">
          Request a demo <ArrowRight className="h-5 w-5" />
        </Link>
        
        <p className="mt-8 text-xs text-q-gray-500">
          Indicative figures only, pending your measured baseline. Not commercial or financial advice.
        </p>
      </div>
    </div>
  );
}
