import Image from "next/image";

/** QBricks logo, cropped tight to the artwork (511×144) so height classes size the mark itself. */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/assets/qbricks-logo-dark-trim.png"
      alt="QBricks logo"
      width={511}
      height={144}
      className={`block w-auto ${className}`}
      priority
    />
  );
}
