"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  { name: "Databricks", src: "/assets/Databricks.png" },
  { name: "Microsoft Fabric", src: "/assets/Fabric.png" },
  { name: "Snowflake", src: "/assets/Snowflake.png" },
  { name: "Quantexa", src: "/assets/Quantexa.png" },
];

export function Integrations() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-q-black py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(232,32,15,0.08),transparent_62%)]" />

      <div className="container-x relative z-10">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="eyebrow mb-4">Integrations</p>
          <h2 className="text-[clamp(2rem,4vw,3.7rem)] font-black leading-tight tracking-[-0.045em] text-white">
            Works with the platforms your bank already runs on.
          </h2>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-4">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group flex h-28 items-center justify-center rounded-3xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]"
            >
              {logo.src ? (
                <div className="relative h-12 w-40 grayscale transition-all duration-500 group-hover:grayscale-0">
                  <Image src={logo.src} alt={logo.name} fill className="object-contain" sizes="160px" />
                </div>
              ) : (
                <span className="text-2xl font-black tracking-tight text-white/75 transition-colors group-hover:text-white">{logo.text}</span>
              )}
            </motion.div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-lg font-medium leading-relaxed text-q-gray-400">
          Cloud-agnostic, with Databricks- and Microsoft-level security. Embed Quantexa Trust Score into data assets and products for 99% data matching accuracy.
        </p>
      </div>
    </section>
  );
}
