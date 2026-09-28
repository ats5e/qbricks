import { Fragment, type ReactNode } from "react";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "700"],
});

/** The QBricks word mark: a bold red Q and "Bricks" in Quicksand. Use it wherever the name appears in running text. */
export function QBricksText() {
  return (
    <span className={`${quicksand.className} inline-block`}>
      <span className="font-bold text-q-brand-ember">Q</span><span className="font-normal text-q-ink">Bricks</span>
    </span>
  );
}

/** Replaces every "QBricks" in a string with the word mark; anything that isn't a string is returned unchanged. */
export function brand(node: ReactNode): ReactNode {
  if (typeof node !== "string" || !node.includes("QBricks")) return node;
  return node.split("QBricks").map((part, i) => (
    <Fragment key={i}>
      {i > 0 && <QBricksText />}
      {part}
    </Fragment>
  ));
}

/** SVG version of brand(): renders "QBricks" inside <text> as tspans. */
export function brandSvg(node: ReactNode, brandColor = "#ff3a26"): ReactNode {
  if (typeof node !== "string" || !node.includes("QBricks")) return node;
  return node.split("QBricks").map((part, i) => (
    <Fragment key={i}>
      {i > 0 && (
        <>
          <tspan fontFamily={quicksand.style.fontFamily} fontWeight={700} fill={brandColor}>Q</tspan>
          <tspan fontFamily={quicksand.style.fontFamily} fontWeight={400}>Bricks</tspan>
        </>
      )}
      {part}
    </Fragment>
  ));
}
