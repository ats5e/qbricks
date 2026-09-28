"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { QBricksText } from "@/components/ui/QBricksText";

const logos = [
  { name: "Databricks", src: "/assets/partners/Databricks-dark.png", imgClass: "h-8 max-w-[11rem]", desc: <><QBricksText /> interfaces with Databricks via SQL push-down, delivering governed, contract-enforced data products straight into Unity Catalog.</> },
  { name: "Microsoft Fabric", src: "/assets/partners/Fabric-dark.png", imgClass: "h-11 max-w-[13.5rem]", desc: "Interfaces with Microsoft Fabric via SQL push-down, landing contract-enforced Delta Parquet in OneLake for Power BI and Copilot." },
  { name: "Snowflake", src: "/assets/partners/Snowflake.png", imgClass: "h-9 max-w-[11rem]", desc: "Interfaces with Snowflake via SQL push-down, delivering governed metadata, quality and open Iceberg data products into the data cloud." },
  { name: "Cloudera", src: "/assets/partners/Cloudera_logo.webp", imgClass: "h-6 max-w-[11rem]", desc: "Interfaces with Cloudera via SQL push-down, delivering governed, open Iceberg data products registered through Apache Polaris." },
  { name: "Oracle", src: "/assets/partners/Oracle.png", imgClass: "h-8 max-w-[11rem]", desc: "Deliver governed data products to your own on-premise Oracle database, with no cloud requirement." },
  { name: "Alteryx", src: "/assets/partners/Alteryx.png", imgClass: "h-9 max-w-[10rem]", desc: "Land governed, contract-enforced data products in the stores your Alteryx workflows already read, analyst-ready from the first run." },
];

export function Integrations({ showDescriptions = false, hideHeading = false }: { showDescriptions?: boolean, hideHeading?: boolean }) {
  return (
    <section className="relative overflow-hidden border-t border-black/5 bg-white py-20">
      <div className="container-x relative z-10">
        {!hideHeading && (
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className={showDescriptions ? "h-section" : "text-2xl font-black tracking-tight text-q-ink md:text-3xl"}>
              Works with the platforms your organisation already runs on.
            </h2>
          </div>
        )}

        <div className={`mx-auto grid gap-4 ${showDescriptions ? "max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3" : "max-w-5xl grid-cols-3 gap-x-8 md:grid-cols-6"}`}>
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`group flex ${
                showDescriptions
                  ? "min-h-[14rem] flex-col items-start justify-start rounded-3xl border border-black/10 bg-black/[0.03] p-8 transition-all hover:-translate-y-1 hover:border-black/20"
                  : "h-16 items-center justify-center"
              }`}
            >
              <div className={`flex h-12 items-center transition-all duration-500 ${showDescriptions ? "mb-6 justify-start" : "scale-[0.72] justify-center opacity-70 grayscale group-hover:opacity-100 group-hover:grayscale-0"}`}>
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={220}
                  height={56}
                  className={`w-auto object-contain ${logo.imgClass}`}
                />
              </div>
              {showDescriptions && (
                <p className="text-base leading-relaxed text-q-gray-600">{logo.desc}</p>
              )}
            </motion.div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-base leading-relaxed text-q-gray-600">
          <QBricksText /> interfaces with Databricks, Microsoft Fabric, Snowflake or your own database via SQL push-down, delivering governed, portable data products in open formats.
        </p>
        <p className="mx-auto mt-2 max-w-3xl text-center text-base leading-relaxed text-q-gray-600">
          The Open Data Contract Standard (ODCS) sits at the core.
        </p>
      </div>
    </section>
  );
}
