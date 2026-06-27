import type { Metadata } from "next";
import Narrative from "./Narrative";
import CostLines from "./CostLines";
import Calculator from "./Calculator";
import { QBricksText } from "@/components/ui/QBricksText";

export const metadata: Metadata = {
  title: "The Compute Trap | QBricks",
  description: "Trading people for cloud compute did not lower the bill. See where QBricks takes the cost out, and model the saving on your own numbers.",
};

export default function ComputeTrapPage() {
  return (
    <main className="min-h-screen bg-q-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-44 pb-16 md:pb-24">
        <div className="absolute inset-0 -z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(232,32,15,0.15),transparent_40%),linear-gradient(to_bottom,rgba(0,0,0,0.2),#000_88%)]" />
        </div>
        
        <div className="container-x relative z-10 text-center">
          <p className="eyebrow mb-6">Resources</p>
          <h1 className="mx-auto max-w-5xl text-[clamp(3.2rem,7vw,6.5rem)] font-black leading-[0.95] tracking-[-0.05em] text-white">
            The compute trap
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-q-gray-300 md:text-2xl">
            Trading people for cloud compute did not lower the bill. <QBricksText /> runs the work locally instead.
          </p>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="section-y bg-q-black pb-8 pt-0">
        <div className="container-x">
          <Narrative />
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
