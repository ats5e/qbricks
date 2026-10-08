"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { QBricksText, brand } from "@/components/ui/QBricksText";

const valueCards = [
  { image: "/assets/brand/resources/in-data-contracts-explained.webp", title: "Regulatory confidence", text: "Every transformation, agent action and exception can be tracked and viewed by Risk, Compliance and Internal Audit." },
  { image: "/assets/brand/resources/wp-shift-right.webp", title: "Speed without chaos", text: "Single-file deployment turns complex infrastructure and workloads into a controlled, repeatable process." },
  { image: "/assets/brand/resources/in-aml-kyc-data-problems-first.webp", title: "Data teams can prove it", text: "Contracts, products, lineage and knowledge graphs create a fully auditable shared language between business and technology." },
];

export function Metrics() {
  return (
    <section id="the-problem" className="section-y relative bg-white">
      <div className="container-x relative z-10">
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-center lg:gap-20">
          <div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75 }}
            className="h-section font-black tracking-tight text-q-ink"
          >
            Everyone is racing to deploy AI. The issue? The underlying data is not ready.
          </motion.h2>
          </div>
          <div className="max-w-xl">
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="text-lg leading-[1.7] text-q-gray-700 md:text-xl"
          >
            A 2025 MIT report found that around <strong className="font-black text-q-ink">95% of AI-related use cases were failing</strong>, not because the models were weak, but because the underlying data quality and metadata foundation could not be trusted.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, delay: 0.15 }}
            className="mt-5 text-lg leading-[1.7] text-q-gray-600"
          >
            To date, the answer to the data quality issue has been to throw money at the problem. Money for data remediation, for data engineers, for data management platforms, for pipeline building and on-going pipeline management, all underpinned by cloud and compute costs.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, delay: 0.2 }}
            className="mt-5 text-lg leading-[1.7] text-q-gray-600"
          >
            Organisations are now recognising that all of these costs outweigh the potential savings that can be made by adopting AI. Industry is stuck and value from AI is under scrutiny.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, delay: 0.25 }}
            className="mt-6 text-xl font-black leading-relaxed text-q-ink"
          >
            A different approach is needed. <QBricksText />.
          </motion.p>
          </div>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {valueCards.map((card, index) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group overflow-hidden rounded-[2rem] border border-black/[0.08] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-shadow duration-500 hover:shadow-[0_24px_60px_-28px_rgba(0,0,0,0.25)]"
            >
              <div className="relative aspect-[3/2] overflow-hidden bg-q-panel">
                <Image
                  src={card.image}
                  alt=""
                  fill
                  sizes="(min-width: 1280px) 400px, (min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <div className="border-t border-black/[0.06] px-7 pb-8 pt-6">
                <h3 className="text-[1.3rem] font-extrabold leading-snug tracking-tight text-q-ink">{brand(card.title)}</h3>
                <p className="mt-2.5 text-[15px] leading-[1.65] text-q-gray-600">{brand(card.text)}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
