"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { QBricksText } from "@/components/ui/QBricksText";

export function ComputeCost() {
  return (
    <section className="section-y-sm relative overflow-hidden border-b border-black/5 bg-white">
      <div className="container-x relative z-10">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="h-section font-black tracking-tight text-q-ink"
          >
            Far less <span className="text-q-brand-ember">cloud compute.</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="lg:pt-2"
          >
            <p className="text-lg leading-relaxed text-q-gray-700 md:text-xl">
              Cloud data platforms meter every cluster, credit and capacity unit, billing for your compute usage whether queries are running or not. <QBricksText /> leverages the local compute you already own, delivering blazing fast compute speed with very low cloud overhead. Minimal cloud compute. Major AI acceleration.
            </p>
            <Link href="/sustainability" className="mt-6 inline-flex items-center gap-2 font-bold text-q-ink underline decoration-q-brand/50 underline-offset-4 transition-colors hover:decoration-q-brand-ember">
              Less compute, less carbon <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
