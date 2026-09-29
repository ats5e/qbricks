"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useSyncExternalStore } from "react";
import dynamic from "next/dynamic";
import { QBricksText } from "@/components/ui/QBricksText";

const QBrickHero = dynamic(() => import("@/components/interactive/QBrickHero"), { ssr: false });

const REDUCED = "(prefers-reduced-motion: reduce)";

/** True for reduced-motion users and automated agents: the field then renders one still frame. */
function useStill() {
  return useSyncExternalStore(
    (onChange) => {
      const mq = window.matchMedia(REDUCED);
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    },
    () => window.matchMedia(REDUCED).matches || navigator.webdriver === true,
    () => false,
  );
}

export function Hero() {
  const still = useStill();

  return (
    <>
    <section id="hero" className="relative isolate flex min-h-[84vh] items-center overflow-hidden bg-white pb-8 pt-32 lg:min-h-[86vh] lg:pt-36">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-white/85" />
      </div>

      {/* The brick-built Q owns the right half (desktop). */}
      <motion.div
        className="pointer-events-none absolute inset-y-0 left-[46%] right-0 hidden lg:block lg:pointer-events-auto"
        initial={{ opacity: 0, x: 36 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="absolute inset-x-0 bottom-[4%] top-[10%]">
          <QBrickHero still={still} />
        </div>
      </motion.div>


      <div className="container-x relative z-10">
        <div className="max-w-2xl lg:max-w-[46%] xl:max-w-xl">
          {/* CSS entrance, so the headline paints before hydration (faster LCP on phones). */}
          <div className="hero-in">
            <h1 className="h-display">
              Significantly reduce your <span className="text-q-brand-ember">compute costs.</span>
            </h1>

            <p className="mt-7 max-w-xl text-xl leading-relaxed text-q-gray-700">
              <QBricksText /> combines a high-performance SQL engine with the tools to manage, govern and provide AI ready data.
            </p>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-q-gray-600">
              Powered by{" "}
              <Link href="/eos" className="font-bold text-q-ink underline decoration-q-brand/50 underline-offset-4 transition-colors hover:decoration-q-brand-ember">
                EOS
              </Link>
              , designed to reduce unnecessary decoding, data movement and join processing.
            </p>

            <div className="mt-10 flex flex-col gap-3 whitespace-nowrap sm:flex-row sm:flex-wrap">
              <Link href="/contact" className="group inline-flex items-center justify-center gap-2 rounded-full bg-q-brand px-7 py-4 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-q-brand-ember">
                Evaluate your workload
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/eos#benchmarks" className="inline-flex items-center justify-center rounded-full border border-black/10 bg-black/[0.055] px-7 py-4 text-sm font-bold text-q-ink transition-all hover:-translate-y-0.5 hover:border-black/20 hover:bg-black/[0.08]">
                Explore the benchmarks
              </Link>
            </div>
          </div>

          {/* The brick-built Q under the copy on mobile / tablet */}
          <div className="relative mt-10 h-[46svh] min-h-72 max-h-[26rem] w-full lg:hidden">
            <QBrickHero still={still} />
          </div>
        </div>
      </div>
    </section>

      {/* Full-width value banner beneath the hero */}
      <div className="relative border-y border-black/10 bg-white py-8 lg:py-10">
        <div className="container-x">
          <p className="text-center text-[clamp(1.35rem,2.5vw,2.15rem)] font-black leading-tight tracking-tight text-q-ink">
            No more data <span className="text-q-brand-ember">pipelines</span>.
          </p>
        </div>
      </div>
    </>
  );
}
