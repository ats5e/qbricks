import Image from "next/image";

export function QIcon({ className = "" }: { className?: string }) {
  return (
    <span className={`relative inline-block ${className}`}>
      <Image
        src="/assets/QBricks-icon.png"
        alt="QBricks"
        fill
        sizes="64px"
        className="object-contain drop-shadow-[0_0_10px_rgba(232,32,15,0.55)]"
        priority
      />
    </span>
  );
}
