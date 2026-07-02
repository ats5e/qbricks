import { PlayCircle } from "lucide-react";
import { UseCases } from "@/components/interactive/UseCases";
import { ArchitectureMap } from "@/components/interactive/ArchitectureMap";
import { FeaturesBento } from "@/components/interactive/FeaturesBento";
import { QBricksText } from "@/components/ui/QBricksText";

export const metadata = {
  title: "Solutions | QBricks",
  description: "QBricks solutions for AML, KYC, fraud, contextual MDM, credit risk and ESG risk.",
};

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-q-black pt-24">
      <section className="relative overflow-hidden border-b border-white/5 bg-q-black py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(232,32,15,0.18),transparent_44%)]" />

        <div className="container-x relative z-10">
          <div className="mx-auto mb-12 max-w-4xl text-center">
            <p className="eyebrow mb-5 inline-flex items-center justify-center gap-2">
              <PlayCircle className="h-4 w-4" />
              Watch
            </p>
            <h1 className="text-[clamp(2.8rem,6vw,6rem)] font-black leading-[0.94] tracking-tight text-white">
              <QBricksText /> use cases in action
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-q-gray-300">
              See how governed, fully lineaged data products support financial crime, customer intelligence and risk workflows.
            </p>
          </div>

          <div className="premium-card mx-auto max-w-6xl p-2 shadow-[0_35px_100px_rgba(0,0,0,0.65)] md:p-3">
            <div className="aspect-video overflow-hidden rounded-[1.35rem] bg-black">
              <iframe
                src="https://player.mux.com/K02kkR02VjtrgIRgaEl7TT7dayfP5z6iCLyhzJNgHXCFI?metadata-video-title=QBricks_10reasonswhy&video-title=QBricks_10reasonswhy"
                title="QBricks use cases"
                className="h-full w-full border-0"
                loading="lazy"
                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      <UseCases />
      <ArchitectureMap />
      <FeaturesBento />
    </main>
  );
}
