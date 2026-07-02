"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { QBricksText } from "@/components/ui/QBricksText";

const logos = [
  { name: "Databricks", src: "/assets/Databricks.png", desc: <><QBricksText /> interfaces with Databricks via SQL push-down, enforcing governance without running Spark inside it. No pipelines, no lock-in.</> },
  { name: "Microsoft Fabric", src: "/assets/Fabric.png", desc: "Interfaces with Microsoft Fabric via SQL push-down, enforcing the Open Data Contract Standard without Spark or lock-in." },
  { name: "Snowflake", src: "/assets/Snowflake.png", desc: "Interfaces with Snowflake via SQL push-down, governed metadata, quality and ETL workflows without running Spark inside it." },
  { name: "Oracle", src: "/assets/Oracle-Logo.png", desc: "Deliver governed data products to your own on-premise Oracle database, with no cloud requirement." },
];

export function Integrations({ showDescriptions = false, hideHeading = false }: { showDescriptions?: boolean, hideHeading?: boolean }) {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-q-black py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(232,32,15,0.08),transparent_62%)]" />

      <div className="container-x relative z-10">
        {!hideHeading && (
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="eyebrow mb-4">Integrations</p>
            <h2 className="text-[clamp(2rem,4vw,3.7rem)] font-black leading-tight tracking-tight text-white">
              Works with the platforms your organisation already runs on.
            </h2>
          </div>
        )}

        <div className={`mx-auto grid max-w-5xl gap-4 ${showDescriptions ? "grid-cols-1 gap-6 md:grid-cols-2" : "grid-cols-2 md:grid-cols-4"}`}>
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`group flex rounded-3xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06] ${
                showDescriptions ? "min-h-[14rem] flex-col items-start justify-start p-8" : "h-28 items-center justify-center"
              }`}
            >
              {logo.src ? (
                <div className={`relative transition-all duration-500 ${showDescriptions ? "mb-6 h-12 w-48" : "h-12 w-40 grayscale group-hover:grayscale-0"}`}>
                  <Image 
                    src={logo.src} 
                    alt={logo.name} 
                    fill 
                    className={`object-contain ${showDescriptions ? "object-left" : "object-center"} ${logo.name === "Microsoft Fabric" ? "invert hue-rotate-180 brightness-110 contrast-125" : ""}`} 
                    sizes="160px" 
                  />
                </div>
              ) : (
                <span className={`text-2xl font-black tracking-tight text-white/75 transition-colors group-hover:text-white ${showDescriptions ? "mb-6" : ""}`}>{logo.name}</span>
              )}
              {showDescriptions && (
                <p className="text-base leading-relaxed text-q-gray-400">{logo.desc}</p>
              )}
            </motion.div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-lg font-medium leading-relaxed text-q-gray-400">
          <QBricksText /> interfaces with Databricks, Microsoft Fabric, Snowflake or your own database via SQL push-down, enforcing governance without running Spark inside them, and without lock-in. The Open Data Contract Standard (ODCS) sits at the core.
        </p>
      </div>
    </section>
  );
}
