import { PlayCircle } from "lucide-react";
import { UseCases } from "@/components/interactive/UseCases";
import { PosterVideo } from "@/components/resources/PosterVideo";
import { QBricksText } from "@/components/ui/QBricksText";

export const metadata = {
  title: "Solutions",
  description: "QBricks solutions for AML, KYC, fraud, contextual MDM, credit risk and ESG risk.",
};

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <section className="border-b border-black/5 bg-white pb-4 pt-20 lg:pt-24">
        <div className="container-x text-center">
          <p className="eyebrow mb-5">Solutions</p>
          <h1 className="h-display mx-auto max-w-4xl font-black tracking-tight text-q-ink">
            Governed data products for the use cases that matter.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-q-gray-700">
            AML, KYC, fraud, contextual MDM, credit and ESG risk, every solution inherits the same trusted, contract-enforced foundation.
          </p>
        </div>
      </section>

      <UseCases />

      <section className="relative overflow-hidden border-b border-black/5 bg-white py-24">

        <div className="container-x relative z-10">
          <div className="mx-auto mb-12 max-w-4xl text-center">
            <p className="eyebrow mb-5 inline-flex items-center justify-center gap-2">
              <PlayCircle className="h-4 w-4" />
              Watch
            </p>
            <h2 className="h-section font-black tracking-tight text-q-ink">
              <QBricksText /> use cases in action
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-q-gray-700">
              See how governed, fully lineaged data products support financial crime, customer intelligence and risk workflows.
            </p>
          </div>

          <div className="premium-card mx-auto max-w-6xl p-2 shadow-[0_35px_100px_rgba(0,0,0,0.195)] md:p-3">
            <div className="aspect-video overflow-hidden rounded-[1.35rem] bg-white">
              <PosterVideo
                playerSrc="https://player.mux.com/7Dktyh8UTWs8h1ot86tVc2nomWrLZO028JaAM6s6suNg?metadata-video-title=QBricks+Use+Cases&video-title=QBricks+Use+Cases"
                posterAlt="QBricks use cases in action video cover"
                posterSrc="/assets/brand/poster-use-cases.webp"
                videoTitle="QBricks use cases"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
