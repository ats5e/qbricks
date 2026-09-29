"use client";

import { MotionConfig } from "framer-motion";

// framer-motion follows the visitor's reduced-motion setting sitewide.
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
