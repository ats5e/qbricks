import Image from "next/image";

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
        className="relative h-full w-full cursor-pointer list-none overflow-hidden bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-q-brand focus-visible:ring-inset group-open:hidden [&::-webkit-details-marker]:hidden"
        aria-label={`Play ${videoTitle}`}
      >
        <Image
          src={posterSrc}
          alt={posterAlt}
          fill
          priority
          sizes="(min-width: 1280px) 1152px, (min-width: 768px) calc(100vw - 96px), calc(100vw - 40px)"
          className="object-cover transition duration-500 hover:scale-[1.015] hover:brightness-110"
        />
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
