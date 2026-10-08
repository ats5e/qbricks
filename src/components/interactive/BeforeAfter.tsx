"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { QBricksText, brand } from "@/components/ui/QBricksText";

// Each pair: what an organisation carries today → what replaces it
const shifts = [
  { from: "Thousands of ungoverned notebooks", to: "Data governance enforced (ODCS). No notebooks" },
  { from: "Teams of data engineers", to: "Small engineering team (at set-up)" },
  { from: "Lengthy pipeline build and deployment time-lines", to: "Streaming data, automated pipeline builds, materialised views" },
  { from: "AI required data locked at the Bronze layer", to: "AI ready data available in hours not years" },
  { from: "On-going compute costs", to: "Low compute costs. No cloud requirement" },
];

export function BeforeAfter() {
  return (
    <section className="relative border-t border-black/5 bg-white section-y-sm">
      <div className="container-x relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-90px" }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-black tracking-tight text-q-ink md:text-4xl"
        >
          What changes with <QBricksText />
        </motion.h2>

        <div className="mt-12 hidden grid-cols-[minmax(0,1fr)_3rem_minmax(0,1.2fr)] gap-x-8 pb-4 text-sm font-semibold lg:grid">
          <span className="text-q-gray-500">Today</span>
          <span />
          <span className="text-q-ink">With <QBricksText /></span>
        </div>

        <ol className="mt-8 border-b border-black/[0.08] lg:mt-0">
          {shifts.map((shift, index) => (
            <motion.li
              key={shift.from}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="group grid gap-y-2 border-t border-black/[0.08] py-6 lg:grid-cols-[minmax(0,1fr)_3rem_minmax(0,1.2fr)] lg:items-center lg:gap-x-8 lg:py-7"
            >
              <p className="text-[15px] text-q-gray-500 lg:text-lg">{brand(shift.from)}</p>
              <span className="hidden h-10 w-10 items-center justify-center rounded-full border border-black/10 text-q-gray-500 transition-colors duration-300 group-hover:border-q-brand group-hover:bg-q-brand group-hover:text-white lg:flex">
                <ArrowRight className="h-4 w-4" />
              </span>
              <p className="flex items-start gap-2.5 text-lg font-bold leading-snug tracking-tight text-q-ink md:text-xl">
                <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-q-brand lg:hidden" />
                <span>{brand(shift.to)}</span>
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
