import Image from "next/image";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`relative flex items-center ${className}`}>
      <Image src="/assets/qbricks-logo.png" alt="QBricks logo" width={182} height={52} className="block h-full w-full object-contain object-left" priority />
    </div>
  );
}
