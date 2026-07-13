import type { Metadata } from "next";
import CostLines from "./CostLines";
import Calculator from "./Calculator";
import { QBricksText } from "@/components/ui/QBricksText";

export const metadata: Metadata = {
  title: "Where QBricks takes cost out | QBricks",
  description: "An illustrative cost calculator: model where QBricks takes cost out of your data estate on your own numbers.",
};

export default function CostCalculatorPage() {
  return (
    <main className="min-h-screen bg-q-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-44 pb-16 md:pb-24">
        <div className="absolute inset-0 -z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(232,32,15,0.15),transparent_40%),linear-gradient(to_bottom,rgba(0,0,0,0.2),#000_88%)]" />
        </div>

        <div className="container-x relative z-10 text-center">
          <p className="eyebrow mb-6">Illustrative cost calculator</p>
          <h1 className="mx-auto max-w-5xl text-[clamp(2.5rem,5.4vw,4.6rem)] font-black leading-[1.0] tracking-tight text-white">
            Re-allocate your data remediation team to more rewarding activities
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-q-gray-300 md:text-2xl">
            Model the saving on your own numbers across the four cost lines an organisation carries to keep data fit for use.
          </p>
          <p className="mx-auto mt-6 max-w-2xl rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-4 text-sm font-bold leading-relaxed text-q-gray-300">
            These numbers are indicative and illustrative only. Actual results may vary depending on a client&apos;s individual environment.
          </p>
        </div>
      </section>

      {/* Cost Lines Section */}
      <section className="py-16 md:py-24 bg-q-black border-t border-white/5">
        <div className="container-x">
          <div className="mb-12 max-w-3xl">
            <h2 className="text-3xl font-black text-white md:text-4xl">Where <QBricksText /> takes cost out</h2>
            <p className="mt-4 text-lg text-q-gray-400">
              Four cost lines an organisation carries to keep data fit for use, removed or collapsed.
            </p>
          </div>
          <CostLines />
        </div>
      </section>

      {/* Calculator & CTA Section */}
      <section className="section-y bg-q-black border-t border-white/5">
        <div className="container-x">
          <Calculator />
        </div>
      </section>
    </main>
  );
}
