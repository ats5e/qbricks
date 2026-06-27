"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const computeData = [
  {
    category: "CLUSTERS & SERVING",
    provider: "Databricks",
    monthly: "$6,400",
    subtitle: "per month - cloud compute",
    billingUnit: "$0.55 / DBU",
    annualized: "$76,800",
    isQBricks: false,
  },
  {
    category: "WAREHOUSE CREDITS",
    provider: "Snowflake",
    monthly: "$5,300",
    subtitle: "per month - cloud compute",
    billingUnit: "$3.00 / credit",
    annualized: "$63,600",
    isQBricks: false,
  },
  {
    category: "F64 CAPACITY, 24/7",
    provider: "Microsoft Fabric",
    monthly: "$8,400",
    subtitle: "per month - cloud compute",
    billingUnit: "$0.18 / CU-hr",
    annualized: "$100,800",
    isQBricks: false,
  },
  {
    category: "LOCAL COMPUTE",
    provider: "QBricks",
    monthly: "$0",
    subtitle: "per month - processed on premise",
    billingUnit: "none",
    annualized: "$0",
    isQBricks: true,
  },
];

export function ComputeCost() {
  return (
    <section className="section-y relative overflow-hidden bg-q-black">
      <div className="container-x relative z-10">
        <div className="relative mb-16 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-[clamp(2.5rem,5vw,4.5rem)] font-black leading-[0.95] tracking-[-0.05em] text-white"
            >
              Say goodbye to <br />
              <span className="text-q-brand">cloud compute.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-lg leading-relaxed text-q-gray-300 md:text-xl"
            >
              Cloud data platforms meter every cluster, credit and capacity unit, billing for your compute usage whether queries are running or not. QBricks leverages the local compute you already own, delivering blazing fast compute speed with zero cloud overhead. No cloud compute. No meter.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-end gap-2 text-right"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-q-brand-ember">The Compute Bill - Mid-2026</p>
            <div className="flex gap-2">
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="h-4 w-4 rounded-sm bg-q-brand/80"
              />
              <motion.div
                animate={{ y: [0, 15, 0], rotate: [0, -20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="h-3 w-3 rounded-sm bg-q-brand/60"
              />
              <motion.div
                animate={{ y: [0, -5, 0], rotate: [0, 45, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="h-6 w-6 rounded-md bg-q-brand"
              />
            </div>
          </motion.div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {computeData.map((item, index) => (
            <motion.div
              key={item.provider}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className={`relative flex flex-col justify-between overflow-hidden rounded-2xl border p-6 transition-colors sm:p-8 ${
                item.isQBricks
                  ? "border-q-brand/50 bg-q-brand/[0.03] shadow-[0_0_50px_rgba(232,32,15,0.15)]"
                  : "border-white/10 bg-white/[0.02] hover:bg-white/[0.04]"
              }`}
            >
              {item.isQBricks && (
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(232,32,15,0.15),transparent_70%)]" />
              )}
              <div>
                <p className={`mb-2 text-[10px] font-bold uppercase tracking-widest ${item.isQBricks ? "text-q-brand/80" : "text-q-gray-500"}`}>
                  {item.category}
                </p>
                <h3 className="mb-6 text-xl font-black text-white">
                  {item.isQBricks ? (
                    <Image 
                      src="/assets/qbricks-logo.png" 
                      alt="QBricks" 
                      width={160} 
                      height={36} 
                      className="h-10 w-auto -ml-1" 
                    />
                  ) : (
                    item.provider
                  )}
                </h3>
                <div className={`mb-2 text-4xl font-black md:text-5xl lg:text-4xl xl:text-5xl ${item.isQBricks ? "text-q-brand" : "text-white"}`}>
                  {item.monthly}
                </div>
                <p className={`text-xs ${item.isQBricks ? "text-q-brand/60" : "text-q-gray-500"}`}>
                  {item.subtitle}
                </p>
              </div>

              <div className={`mt-8 border-t pt-6 ${item.isQBricks ? "border-q-brand/20" : "border-white/10"}`}>
                <div className="flex items-center justify-between text-xs">
                  <span className={item.isQBricks ? "text-q-brand/60" : "text-q-gray-500"}>Billing unit</span>
                  <span className={`font-mono ${item.isQBricks ? "text-q-gray-300" : "text-white"}`}>{item.billingUnit}</span>
                </div>
                <div className="mt-3 flex items-center justify-between text-xs">
                  <span className={item.isQBricks ? "text-q-brand/60" : "text-q-gray-500"}>Annualized</span>
                  <span className={`font-mono font-bold ${item.isQBricks ? "text-q-brand" : "text-white"}`}>{item.annualized}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center text-[10px] leading-relaxed text-q-gray-600 sm:text-left"
        >
          Representative monthly cloud compute spend for a mid-size enterprise data workload at public list pricing, mid-2026. Databricks ~ Databricks Units (DBUs) at ~$0.55/DBU across all-purpose clusters and model serving. Snowflake ~ Standard credits at $3.00/credit. Microsoft Fabric ~ F64 capacity node running 24/7. Actual costs vary based on exact usage, region, and negotiated discounts.
        </motion.p>
      </div>
    </section>
  );
}
