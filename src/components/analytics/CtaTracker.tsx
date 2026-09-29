"use client";

import { track } from "@vercel/analytics";
import { useEffect } from "react";

// One listener for every primary CTA (.btn-primary) and the nav demo button,
// so new buttons are tracked without wiring each one.
export function CtaTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as Element | null)?.closest<HTMLElement>(".btn-primary, [data-cta]");
      if (!el) return;
      track("cta_click", {
        label: (el.dataset.cta || el.textContent || "").trim().slice(0, 60),
        href: el.getAttribute("href") ?? "",
        page: window.location.pathname,
      });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}
