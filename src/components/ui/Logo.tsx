import Image from "next/image";

const RATIO = 511 / 144; // qbricks-logo-dark-trim.png, cropped tight to the artwork

/**
 * QBricks logo. `height` is the display height in px and is written into the
 * image's own width/height, so the logo stays the right size even if the
 * stylesheet is missing or stale (e.g. a cached CSS file on a static host).
 * `className` can still resize it responsively.
 */
export function Logo({ height, className = "" }: { height: number; className?: string }) {
  return (
    <Image
      src="/assets/qbricks-logo-dark-trim.png"
      alt="QBricks logo"
      width={Math.round(height * RATIO)}
      height={height}
      style={{ height, width: "auto" }}
      className={`block ${className}`}
      priority
    />
  );
}
