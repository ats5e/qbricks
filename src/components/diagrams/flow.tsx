"use client";

import { motion } from "framer-motion";
import { Cpu, Library, Table2, Workflow, Zap, type LucideIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { QBricksText } from "@/components/ui/QBricksText";
import { QIcon } from "@/components/ui/QIcon";

/*
 * Shared primitives for the animated architecture flow diagrams.
 * Cards declare a data-flow-id; the canvas measures them after render
 * and draws dashed SVG connectors with travelling data packets between
 * them, so layouts can change without hand-tuning coordinates.
 */

export type FlowConnector = {
  from: string;
  to: string;
  packets?: number;
  duration?: number;
  // "source" enters the target's near side at the source's own height —
  // a straight, horizontal line into the side of the box.
  toY?: "center" | "source";
};

export function FlowCanvas({
  width,
  connectors,
  children,
  label,
}: {
  width: number;
  connectors: FlowConnector[];
  children: React.ReactNode;
  label?: { text: string; afterId: string };
}) {
  const outerRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLDivElement>(null);
  const [paths, setPaths] = useState<string[]>([]);
  const [labelPos, setLabelPos] = useState<{ x: number; y: number } | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(media.matches);
    const onChange = (event: MediaQueryListEvent) => setReducedMotion(event.matches);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const root = ref.current;
    const outer = outerRef.current;
    if (!root || !outer) return;

    const measure = () => {
      // Scale the diagram down to fit the container width so it never
      // needs horizontal scrolling. `zoom` shrinks both the rendering
      // and the layout box, keeping the connector geometry consistent.
      const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
      const avail = outer.clientWidth;
      const nextZoom = isDesktop && avail > 0 ? Math.min(1, avail / width) : 1;
      setZoom(nextZoom);

      const rb = root.getBoundingClientRect();
      if (rb.width === 0) return;
      const next = connectors.map((conn) => {
        const from = root.querySelector(`[data-flow-id="${conn.from}"]`)?.getBoundingClientRect();
        const to = root.querySelector(`[data-flow-id="${conn.to}"]`)?.getBoundingClientRect();
        if (!from || !to) return "";
        const x1 = from.right - rb.left;
        const y1 = from.top + from.height / 2 - rb.top;
        const x2 = to.left - rb.left;
        const y2 = conn.toY === "source" ? y1 : to.top + to.height / 2 - rb.top;
        const bend = Math.max(28, (x2 - x1) / 2);
        return `M${x1} ${y1} C${x1 + bend} ${y1}, ${x2 - bend} ${y2}, ${x2} ${y2}`;
      });
      setPaths(next);

      if (label) {
        const el = root.querySelector(`[data-flow-id="${label.afterId}"]`)?.getBoundingClientRect();
        if (el) setLabelPos({ x: el.right - rb.left, y: el.top + el.height / 2 - rb.top });
      }
    };

    measure();
    // Re-measure once fonts/entrance settle, then track size changes.
    const settle = setTimeout(measure, 800);
    const observer = new ResizeObserver(measure);
    observer.observe(root);
    observer.observe(outer);
    return () => {
      clearTimeout(settle);
      observer.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={outerRef} className="w-full">
    <div
      ref={ref}
      className="relative w-full lg:w-[var(--fc-w)]"
      style={{ ["--fc-w" as string]: `${width}px`, zoom: zoom < 1 ? zoom : undefined }}
    >
      <svg className="pointer-events-none absolute inset-0 z-0 hidden h-full w-full lg:block">
        {paths.map((d, i) =>
          d ? (
            <g key={`conn-${i}`}>
              <motion.path
                d={d}
                fill="none"
                stroke="rgba(232,32,15,0.28)"
                strokeWidth="1.5"
                strokeDasharray="5 5"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.9, delay: 0.3 + i * 0.12 }}
              />
              {!reducedMotion &&
                Array.from({ length: connectors[i].packets ?? 1 }).map((_, p) => (
                  <FlowPacket
                    key={`pkt-${i}-${p}`}
                    path={d}
                    duration={connectors[i].duration ?? 3.2}
                    delay={(p * (connectors[i].duration ?? 3.2)) / (connectors[i].packets ?? 1) + i * 0.35}
                  />
                ))}
            </g>
          ) : null
        )}
      </svg>
      {label && labelPos && (
        <span
          className="pointer-events-none absolute z-10 hidden -translate-y-1/2 rounded bg-q-black/80 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.2em] text-q-brand-ember lg:block"
          style={{ left: labelPos.x + 10, top: labelPos.y - 14 }}
        >
          {label.text}
        </span>
      )}
      <div className="relative z-10">{children}</div>
    </div>
    </div>
  );
}

function FlowPacket({ path, duration, delay }: { path: string; duration: number; delay: number }) {
  return (
    <motion.circle
      r="3.5"
      fill="#ff3a26"
      style={{ filter: "drop-shadow(0 0 8px #ff3a26)", offsetPath: `path('${path}')`, offsetDistance: "var(--offset-distance)" } as React.CSSProperties}
      initial={{ "--offset-distance": "0%", opacity: 0 } as never}
      animate={{ "--offset-distance": "100%", opacity: [0, 1, 1, 0] } as never}
      transition={{ duration, ease: "linear", repeat: Infinity, delay, times: [0, 0.1, 0.9, 1] }}
    />
  );
}

export function Chip({ children, tone = "default" }: { children: React.ReactNode; tone?: "default" | "red" }) {
  return (
    <span
      className={`inline-flex items-center rounded-md border px-2 py-1 font-mono text-[10px] leading-none transition-colors ${
        tone === "red"
          ? "border-q-brand/40 bg-q-brand/10 text-q-brand-ember"
          : "border-white/10 bg-white/[0.04] text-q-gray-300 hover:border-white/25 hover:text-white"
      }`}
    >
      {children}
    </span>
  );
}

export function FlowCard({
  flowId,
  icon: Icon,
  title,
  kicker,
  chips = [],
  footer,
  active = false,
  delay = 0,
  children,
  className = "",
}: {
  flowId?: string;
  icon?: LucideIcon;
  title: React.ReactNode;
  kicker?: string;
  chips?: string[];
  footer?: string;
  active?: boolean;
  delay?: number;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      data-flow-id={flowId}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay }}
      className={`rounded-2xl border p-4 backdrop-blur-sm transition-all duration-300 ${
        active
          ? "border-q-brand/50 bg-q-brand/[0.07] shadow-[0_0_40px_rgba(232,32,15,0.15)]"
          : "border-white/10 bg-[#101014]/90 hover:-translate-y-0.5 hover:border-white/25"
      } ${className}`}
    >
      <div className="flex items-center gap-3">
        {Icon && (
          <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border ${active ? "border-q-brand/40 bg-q-brand/10 text-q-brand-ember" : "border-white/10 bg-white/[0.05] text-q-gray-300"}`}>
            <Icon className="h-4 w-4" />
          </span>
        )}
        <div className="min-w-0">
          <p className="text-sm font-black leading-tight text-white">{title}</p>
          {kicker && <p className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.16em] text-q-gray-500">{kicker}</p>}
        </div>
      </div>
      {chips.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {chips.map((chip) => (
            <Chip key={chip}>{chip}</Chip>
          ))}
        </div>
      )}
      {children}
      {footer && <p className="mt-3 font-mono text-[9px] leading-relaxed tracking-[0.08em] text-q-gray-500">{footer}</p>}
    </motion.div>
  );
}

const hubFeatures = [
  { icon: Workflow, label: "Automatic pipeline building" },
  { icon: Cpu, label: "Local compute" },
  { icon: Zap, label: "Lightning speed" },
  { icon: Table2, label: "Materialised views" },
  { icon: Library, label: "Catalogue of catalogues" },
];

export function QBricksHubCard({ flowId, className = "" }: { flowId: string; className?: string }) {
  return (
    <motion.div
      data-flow-id={flowId}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7 }}
      className={`relative rounded-3xl border border-q-brand/60 bg-gradient-to-b from-[#160a0a]/95 to-[#0c0709]/95 p-5 ${className}`}
      style={{ animation: "cc-hub-pulse 4.2s ease-in-out infinite" }}
    >
      <div className="flex items-center gap-2.5">
        <QIcon className="h-6 w-6" />
        <span className="text-base font-black tracking-tight text-white">Bricks</span>
      </div>
      <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-q-brand-ember">Data management platform</p>
      <p className="mt-3 text-lg font-black leading-snug tracking-tight text-white">
        Governed, AI-ready data — in hours, not years.
      </p>
      <div className="my-4 h-px bg-white/10" />
      <ul className="space-y-2.5">
        {hubFeatures.map(({ icon: Icon, label }) => (
          <li key={label} className="flex items-center gap-2.5 text-[13px] font-semibold text-q-gray-200">
            <Icon className="h-3.5 w-3.5 shrink-0 text-q-brand-ember" /> {label}
          </li>
        ))}
      </ul>
      <p className="mt-4 font-mono text-[9px] tracking-[0.08em] text-q-gray-500">
        governed · contract-enforced · audit-ready
      </p>
    </motion.div>
  );
}

export function ColumnLabel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-q-gray-500 ${className}`}>{children}</p>
  );
}

export function DiagramHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro: string;
}) {
  return (
    <div className="max-w-3xl">
      <motion.p
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-90px" }}
        className="eyebrow mb-5"
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-90px" }}
        transition={{ duration: 0.75 }}
        className="text-[clamp(2.2rem,4.4vw,3.8rem)] font-black leading-[0.98] tracking-tight text-white"
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-90px" }}
        transition={{ duration: 0.75, delay: 0.1 }}
        className="mt-6 text-lg leading-relaxed text-q-gray-300"
      >
        {intro}
      </motion.p>
    </div>
  );
}

// Re-export for diagram files
export { QBricksText };
