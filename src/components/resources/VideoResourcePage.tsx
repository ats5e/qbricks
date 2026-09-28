import { ArrowLeft, ArrowRight, PlayCircle } from "lucide-react";
import type { ReactNode } from "react";
import Link from "next/link";

import { PosterVideo } from "@/components/resources/PosterVideo";

type VideoResourcePageProps = {
  description: ReactNode;
  playerSrc: string;
  posterAlt: string;
  posterSrc: string;
  title: ReactNode;
  videoTitle: string;
};

export function VideoResourcePage({
  description,
  playerSrc,
  posterAlt,
  posterSrc,
  title,
  videoTitle,
}: VideoResourcePageProps) {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative overflow-hidden border-b border-black/5 pt-40 pb-20 md:pt-44 md:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(232,32,15,0.11),transparent_42%),linear-gradient(to_bottom,rgba(255,255,255,0.15),#fff_92%)]" />

        <div className="container-x relative z-10">
          <Link
            href="/resources"
            className="mb-12 inline-flex items-center gap-2 text-sm font-bold text-q-gray-600 transition-colors hover:text-q-ink"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Resources
          </Link>

          <div className="mx-auto max-w-5xl text-center">
            <p className="eyebrow mb-5 inline-flex items-center justify-center gap-2">
              <PlayCircle className="h-4 w-4" />
              Video resource
            </p>
            <h1 className="h-display font-black tracking-tight text-q-ink">
              {title}
            </h1>
            <p className="mx-auto mt-7 max-w-3xl text-xl leading-relaxed text-q-gray-700 md:text-2xl">
              {description}
            </p>
          </div>
        </div>
      </section>

      <section className="section-y bg-white pt-14 md:pt-20">
        <div className="container-x">
          <div className="premium-card mx-auto max-w-6xl p-2 shadow-[0_35px_100px_rgba(0,0,0,0.195)] md:p-3">
            <div className="aspect-video overflow-hidden rounded-[1.35rem] bg-white">
              <PosterVideo
                playerSrc={playerSrc}
                posterAlt={posterAlt}
                posterSrc={posterSrc}
                videoTitle={videoTitle}
              />
            </div>
          </div>

          <div className="mx-auto mt-16 max-w-3xl text-center">
            <p className="text-lg leading-relaxed text-q-gray-600">
              Ready to turn governed enterprise data into trusted, A.I.-ready products?
            </p>
            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-q-brand px-8 py-4 font-black text-white transition-all hover:-translate-y-1 hover:bg-q-brand-ember"
            >
              Request a demo <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
