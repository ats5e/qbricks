"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { FileCode, ShieldCheck } from "lucide-react";

const notebooks = Array.from({ length: 12 }, (_, index) => {
  const angle = (index / 12) * Math.PI * 2;
  const radius = 152 + ((index * 17) % 48);
  return {
    x: Math.cos(angle) * radius,
    y: Math.sin(angle) * radius,
    initialRotate: ((index * 23) % 60) - 30,
    floatY: (((index * 11) % 20) - 10),
    rotate: (((index * 7) % 20) - 10),
    duration: 3 + ((index % 5) * 0.35),
  };
});

export function NotebookCollapse() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const notebookOpacity = useTransform(scrollYProgress, [0.3, 0.5], [1, 0]);
  const notebookScale = useTransform(scrollYProgress, [0.3, 0.5], [1, 0.5]);
  const contractOpacity = useTransform(scrollYProgress, [0.45, 0.6], [0, 1]);
  const contractScale = useTransform(scrollYProgress, [0.45, 0.6], [0.8, 1]);
  const contractY = useTransform(scrollYProgress, [0.45, 0.6], [50, 0]);
  const cityscapeOpacity = useTransform(scrollYProgress, [0.35, 0.6], [0, 0.3]);

  return (
    <section ref={containerRef} className="relative h-[150vh] bg-q-black">
      <motion.div style={{ opacity: cityscapeOpacity }} className="sticky top-0 z-0 h-screen w-full mix-blend-plus-lighter pointer-events-none">
        <Image src="/assets/bricks-cityscape.png" alt="" fill className="object-cover opacity-60" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-q-black via-transparent to-q-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-q-black via-transparent to-q-black" />
      </motion.div>

      <div className="absolute inset-0 z-10">
        <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden">
          <div className="z-20 mb-16 text-center">
            <h2 className="mb-4 text-[clamp(2rem,4vw,3.5rem)] font-display font-black tracking-tighter text-white">
              Eliminate <span className="text-q-gray-500 line-through decoration-q-brand">1,000+ notebooks</span>
            </h2>
            <p className="text-xl text-q-gray-400">Replace chaos with a single Data Contract.</p>
          </div>

          <div className="relative flex h-[400px] w-full max-w-2xl items-center justify-center">
            <motion.div style={{ opacity: notebookOpacity, scale: notebookScale }} className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {notebooks.map((notebook, index) => (
                <motion.div
                  key={index}
                  className="absolute flex h-20 w-32 flex-col items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md"
                  initial={{ x: notebook.x, y: notebook.y, rotate: notebook.initialRotate }}
                  animate={{ y: notebook.y + notebook.floatY, rotate: notebook.rotate }}
                  transition={{ duration: notebook.duration, repeat: Infinity, repeatType: "reverse" }}
                >
                  <FileCode className="h-5 w-5 text-q-gray-500" />
                  <div className="h-1 w-16 rounded-full bg-white/10" />
                </motion.div>
              ))}
            </motion.div>

            <motion.div style={{ opacity: contractOpacity, scale: contractScale, y: contractY }} className="relative z-10 w-80">
              <div className="gradient-border-wrapper shadow-2xl shadow-q-brand/20">
                <div className="gradient-border-content flex flex-col items-center p-8 text-center">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-q-brand/20 bg-q-brand/10">
                    <ShieldCheck className="h-8 w-8 text-q-brand" />
                  </div>
                  <h3 className="mb-2 text-2xl font-bold text-white">Data Contract</h3>
                  <p className="mb-6 text-sm text-q-gray-400">Standardised, governed and automated.</p>

                  <div className="w-full space-y-2">
                    <div className="h-2 w-full rounded-full bg-white/10" />
                    <div className="h-2 w-4/5 rounded-full bg-white/10" />
                    <div className="h-2 w-full rounded-full bg-white/10" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
