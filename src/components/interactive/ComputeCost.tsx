"use client";

import { motion } from "framer-motion";
import { QBricksText } from "@/components/ui/QBricksText";

export function ComputeCost() {
  return (
    <section className="section-y relative overflow-hidden bg-q-black">
      <div className="container-x relative z-10">
        <div className="max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-[clamp(2.5rem,5vw,4.5rem)] font-black leading-[0.95] tracking-tight text-white"
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
            Cloud data platforms meter every cluster, credit and capacity unit, billing for your compute usage whether queries are running or not. <QBricksText /> leverages the local compute you already own, delivering blazing fast compute speed with zero cloud overhead. No cloud compute. No meter.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
