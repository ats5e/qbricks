import Image from "next/image";
import { Play } from "lucide-react";
import { brand } from "@/components/ui/QBricksText";

type PosterVideoProps = {
  playerSrc: string;
  posterAlt: string;
  posterSrc: string;
  videoTitle: string;
};

export function PosterVideo({
  playerSrc,
  posterAlt,
  posterSrc,
  videoTitle,
}: PosterVideoProps) {
  return (
    <details className="group relative h-full w-full">
      <summary
        className="relative block h-full w-full cursor-pointer list-none overflow-hidden bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-q-brand focus-visible:ring-inset group-open:hidden [&::-webkit-details-marker]:hidden"
        aria-label={`Play ${videoTitle}`}
      >
        <Image
          src={posterSrc}
          alt={posterAlt}
          fill
          priority
          sizes="(min-width: 1280px) 1152px, (min-width: 768px) calc(100vw - 96px), calc(100vw - 40px)"
          className="object-cover transition duration-700 group-hover:scale-[1.02]"
        />
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-20 w-20 items-center justify-center rounded-full bg-q-brand text-white shadow-[0_12px_40px_rgba(232,32,15,0.35)] transition-transform duration-300 group-hover:scale-105">
            <Play className="ml-1 h-8 w-8 fill-current" />
          </span>
        </span>
        <span className="absolute bottom-5 left-5 rounded-full bg-white/90 px-4 py-2 text-sm font-bold text-q-ink shadow-[0_4px_16px_rgba(0,0,0,0.06)] backdrop-blur md:bottom-7 md:left-7">
          Watch · {brand(videoTitle)}
        </span>
      </summary>
      <iframe
        src={playerSrc}
        title={videoTitle}
        className="absolute inset-0 block h-full w-full border-0"
        loading="lazy"
        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
        allowFullScreen
      />
    </details>
  );
}
