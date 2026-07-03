import { Quicksand } from "next/font/google";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export function QBricksText() {
  return (
    <span className={`${quicksand.className} inline-block`}>
      <span className="font-bold text-q-brand-ember">Q</span><span className="font-normal text-white">Bricks</span>
    </span>
  );
}
