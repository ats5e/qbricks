"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { QIcon } from "@/components/ui/QIcon";

/*
 * Animated mini-scenes recreated from the QBricks graphics pack
 * (1a lineage, 2a data contracts, 2c integrations hub, 2e governance
 * & audit, 2f A.I.-ready data products, plus a workflow-canvas scene).
 * Shared between the homepage spotlight cards and the partner
 * capability pages. An optional partner logo renders in the window
 * chrome.
 */

export type SceneProps = { badge: string; logo?: string; logoAlt?: string };

function MiniWindowHeader({ badge, logo, logoAlt }: SceneProps) {
  return (
    <div className="flex flex-none items-center gap-3 border-b border-white/10 px-4 py-2.5">
      <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/[0.14] bg-white/[0.08]">
        <QIcon className="h-4 w-4" />
      </span>
      <div className="space-y-1.5">
        <div className="h-1.5 w-24 rounded bg-white/30" />
        <div className="h-1 w-14 rounded bg-white/10" />
      </div>
      <div className="ml-auto flex items-center gap-2.5">
        {logo && (
          <span className="flex h-7 items-center rounded-md border border-white/[0.14] bg-white/[0.06] px-2">
            <Image src={logo} alt={logoAlt ?? ""} width={72} height={20} className="h-4 w-auto object-contain" />
          </span>
        )}
        <span className="flex items-center gap-2 rounded-md border border-q-brand/50 px-2.5 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-q-brand-ember" style={{ animation: "cc-blink 2.4s ease-in-out infinite" }} />
          <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-white/75">{badge}</span>
        </span>
      </div>
    </div>
  );
}

function SceneShell({ children, ...header }: SceneProps & { children: React.ReactNode }) {
  return (
    <div className="relative flex h-full flex-col overflow-hidden rounded-xl border border-white/[0.14] bg-gradient-to-br from-[#1e1e28]/95 to-[#0d0d13]/95">
      <MiniWindowHeader {...header} />
      {children}
    </div>
  );
}

/* 1a · Lineage / knowledge graph */
export function LineageScene(props: SceneProps) {
  const nodes = [
    { x: 42, y: 118, c: "#6ca8f5" },
    { x: 78, y: 52, c: "#e8b34b" },
    { x: 118, y: 168, c: "#3ecf8e" },
    { x: 236, y: 44, c: "#b48cf2" },
    { x: 292, y: 130, c: "#3ecf8e" },
    { x: 258, y: 196, c: "#6ca8f5" },
  ];
  const edges = [
    "M52 118 L160 112", "M88 60 L160 104", "M126 162 L160 118",
    "M180 104 L230 52", "M186 112 L282 128", "M182 120 L250 190",
  ];
  return (
    <SceneShell {...props}>
      <div className="relative min-h-[240px] flex-1">
        <svg viewBox="0 0 340 240" className="absolute inset-0 h-full w-full">
          {edges.map((d, i) => (
            <path
              key={`e-${i}`}
              d={d}
              fill="none"
              stroke="rgba(255,58,38,0.4)"
              strokeWidth="1.5"
              strokeDasharray="7 6"
              style={{ animation: `cc-dash-flow 5s linear ${i * 0.5}s infinite` }}
            />
          ))}
          {nodes.map((n, i) => (
            <g key={`n-${i}`} style={{ animation: `cc-node-pulse ${2.6 + i * 0.4}s ease-in-out ${-i}s infinite` }}>
              <circle cx={n.x} cy={n.y} r="11" fill="#17171d" stroke={n.c} strokeWidth="1.5" />
              <circle cx={n.x} cy={n.y} r="4" fill={n.c} />
            </g>
          ))}
        </svg>
        <div className="absolute left-1/2 top-[46%] h-16 w-16 -translate-x-1/2 -translate-y-1/2">
          <div className="absolute -inset-2 rounded-full border border-dashed border-q-brand/50" style={{ animation: "cc-spin 18s linear infinite" }} />
          <div className="absolute -inset-8 rounded-full" style={{ background: "radial-gradient(circle, rgba(232,32,15,0.3), transparent 70%)", animation: "cc-halo 4.2s ease-in-out infinite" }} />
          <div
            className="absolute inset-0 flex items-center justify-center rounded-2xl border border-white/15 bg-[#17171d]"
            style={{ animation: "cc-hub-pulse 3.6s ease-in-out infinite" }}
          >
            <QIcon className="h-8 w-8" />
          </div>
        </div>
      </div>
    </SceneShell>
  );
}

/* 2e · Governance & audit */
export function GovernanceScene(props: SceneProps) {
  const toggles = [56, 44, 62];
  return (
    <SceneShell {...props}>
      <div className="grid min-h-[240px] flex-1 grid-cols-[1fr_1fr] gap-3 p-3.5">
        <div className="relative flex flex-col items-center justify-center gap-3 rounded-lg border border-white/10 bg-white/[0.02] p-3">
          <div className="relative h-24 w-[88px]">
            <div className="absolute left-1/2 top-1/2 h-[120px] w-[120px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-q-brand/40" style={{ animation: "cc-spin 22s linear infinite" }} />
            <div className="absolute left-1/2 top-1/2 h-[140px] w-[140px] -translate-x-1/2 -translate-y-1/2 rounded-full" style={{ background: "radial-gradient(circle, rgba(232,32,15,0.22), transparent 70%)", animation: "cc-halo 4.5s ease-in-out infinite" }} />
            <svg viewBox="0 0 120 126" className="relative h-full w-full">
              <path
                d="M60 8 L104 26 V58 C104 92 84 108 60 118 C36 108 16 92 16 58 V26 Z"
                fill="rgba(232,32,15,0.08)"
                stroke="#ff3a26"
                strokeWidth="2.5"
                pathLength={600}
                strokeDasharray={600}
                style={{ animation: "cc-shield-draw 2.4s cubic-bezier(0.22,1,0.36,1) 0.6s both" }}
              />
              <path
                d="M42 62 l13 13 24 -26"
                fill="none"
                stroke="#ffffff"
                strokeWidth="4"
                strokeLinecap="round"
                pathLength={600}
                strokeDasharray={600}
                style={{ animation: "cc-shield-draw 1s cubic-bezier(0.22,1,0.36,1) 2.2s both" }}
              />
            </svg>
          </div>
          <div className="h-1.5 w-20 rounded bg-white/25" />
          <div className="h-1 w-14 rounded bg-white/10" />
        </div>
        <div className="flex min-h-0 flex-col gap-3">
          <div className="space-y-2.5 rounded-lg border border-white/10 bg-white/[0.02] p-3">
            {toggles.map((w, i) => (
              <div key={`tg-${i}`} className="flex items-center gap-2.5">
                <span className="relative h-4 w-7 flex-none rounded-full bg-q-brand/30">
                  <span className="absolute right-0.5 top-0.5 h-3 w-3 rounded-full bg-white" />
                </span>
                <span className="h-1.5 rounded bg-white/20" style={{ width: w }} />
              </div>
            ))}
          </div>
          <div className="relative min-h-0 flex-1 overflow-hidden rounded-lg border border-white/10 bg-black/25 p-3">
            <div style={{ animation: "cc-log-scroll 18s linear infinite" }}>
              {[0, 1].map((half) => (
                <div key={`half-${half}`}>
                  {["#3ecf8e", "#ff3a26", "#3ecf8e", "#e8b34b", "#3ecf8e"].map((c, i) => (
                    <div key={`log-${half}-${i}`} className="flex items-center gap-2 border-b border-white/[0.06] py-2">
                      <span className="h-1.5 w-1.5 flex-none rounded-full" style={{ background: c, boxShadow: `0 0 8px ${c}` }} />
                      <span className="h-1 rounded bg-white/20" style={{ width: 28 + ((i * 13) % 30) }} />
                      <span className="h-1 flex-1 rounded bg-white/[0.08]" />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-b from-transparent to-[#0d0d13]" />
          </div>
        </div>
      </div>
    </SceneShell>
  );
}

/* 2f · A.I.-ready data products */
export function AiReadyScene(props: SceneProps) {
  const answerBars = [88, 72, 55];
  const cites = ["customer_risk", "txn_resolved"];
  return (
    <SceneShell {...props}>
      <div className="flex min-h-[240px] flex-1 flex-col gap-2.5 p-3.5">
        <div className="w-2/3 space-y-1.5 self-end rounded-xl rounded-br-sm border border-white/[0.14] bg-white/5 p-3">
          <div className="h-1.5 w-4/5 rounded bg-white/25" />
          <div className="h-1.5 w-1/2 rounded bg-white/10" />
        </div>
        <div className="flex gap-3 rounded-xl rounded-bl-sm border border-q-brand/35 bg-q-brand/[0.04] p-3">
          <div className="relative h-9 w-9 flex-none">
            <div className="absolute -inset-1 rounded-full border border-dashed border-q-brand/50" style={{ animation: "cc-spin 14s linear infinite" }} />
            <div
              className="absolute inset-0 flex items-center justify-center rounded-full border-2 border-q-brand/80 bg-[#17171d]"
              style={{ animation: "cc-hub-pulse 3.4s ease-in-out infinite" }}
            >
              <QIcon className="h-4 w-4" />
            </div>
          </div>
          <div className="flex-1 space-y-2">
            <div className="flex gap-1.5">
              {[0, 0.15, 0.3].map((d) => (
                <span key={`dot-${d}`} className="h-1.5 w-1.5 rounded-full bg-q-brand-ember" style={{ animation: `cc-dot-bounce 1.3s ease-in-out ${d}s infinite` }} />
              ))}
            </div>
            {answerBars.map((w, i) => (
              <motion.div
                key={`ans-${i}`}
                className="h-1.5 rounded bg-white/20"
                initial={{ width: 0 }}
                whileInView={{ width: `${w}%` }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: 0.6 + i * 0.25, ease: [0.22, 1, 0.36, 1] }}
              />
            ))}
            <div className="flex flex-wrap gap-1.5 pt-0.5">
              {cites.map((tag, i) => (
                <motion.span
                  key={tag}
                  className="flex items-center gap-1.5 rounded-full border border-q-brand/50 px-2 py-0.5 font-mono text-[9px] text-white/70"
                  initial={{ opacity: 0, scale: 0.2 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: 1.5 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="h-1.5 w-1.5 rounded-[2px] bg-q-brand-ember" />
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
        <svg viewBox="0 0 300 18" className="-my-1 h-4 w-full flex-none">
          {[75, 150, 225].map((x, i) => (
            <path key={`c-${x}`} d={`M${x} 0 V18`} stroke="rgba(255,58,38,0.4)" strokeWidth="1.5" strokeDasharray="5 4" style={{ animation: `cc-dash-flow 5s linear ${i * 0.6}s infinite` }} />
          ))}
        </svg>
        <div className="mt-auto grid flex-none grid-cols-3 gap-2">
          {[0, 1, 2].map((i) => (
            <div key={`pd-${i}`} className="space-y-1.5 rounded-lg border border-white/[0.11] bg-white/[0.03] p-2.5">
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-[2px] bg-q-brand-ember" />
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" style={{ animation: `cc-blink ${2.4 + i * 0.7}s ease-in-out infinite`, boxShadow: "0 0 8px rgba(52,211,153,0.8)" }} />
              </div>
              <div className="h-1.5 w-4/5 rounded bg-white/[0.22]" />
              <div className="h-1 w-3/5 rounded bg-white/[0.09]" />
            </div>
          ))}
        </div>
      </div>
    </SceneShell>
  );
}

/* 2a · Data contracts — ODCS editor with validation and Q seal */
export function ContractsScene(props: SceneProps) {
  const codeLines = [
    { w: "62%", ind: 0, c: "rgba(255,58,38,0.55)" },
    { w: "48%", ind: 14, c: "rgba(255,255,255,0.2)" },
    { w: "70%", ind: 14, c: "rgba(255,255,255,0.14)" },
    { w: "38%", ind: 28, c: "rgba(108,168,245,0.45)" },
    { w: "56%", ind: 28, c: "rgba(255,255,255,0.14)" },
    { w: "44%", ind: 14, c: "rgba(62,207,142,0.4)" },
    { w: "64%", ind: 0, c: "rgba(255,255,255,0.2)" },
  ];
  const checks = [44, 58, 38];
  return (
    <SceneShell {...props}>
      <div className="grid min-h-[240px] flex-1 grid-cols-[1.2fr_1fr] gap-3 p-3.5">
        {/* Contract source */}
        <div className="relative overflow-hidden rounded-lg border border-white/10 bg-black/25 p-3">
          <div className="mb-2.5 flex items-center gap-2">
            <span className="h-2 w-2 rounded-[2px] bg-q-brand/70" style={{ animation: "cc-blink 3.2s ease-in-out infinite" }} />
            <span className="h-1.5 w-24 rounded bg-white/25" />
            <span className="ml-auto rounded border border-q-brand/50 px-1.5 py-0.5 font-mono text-[8px] tracking-[0.14em] text-q-brand-ember">ODCS</span>
          </div>
          {codeLines.map((l, i) => (
            <div key={`cl-${i}`} className="flex items-center gap-2 py-[3px]">
              <span className="w-3 flex-none text-right font-mono text-[8px] text-white/20">{i + 1}</span>
              <motion.span
                className="h-1.5 rounded"
                style={{ background: l.c, marginLeft: l.ind }}
                initial={{ width: 0 }}
                whileInView={{ width: l.w }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          ))}
          <div className="flex items-center gap-2 py-[3px]">
            <span className="w-3 flex-none text-right font-mono text-[8px] text-white/20">{codeLines.length + 1}</span>
            <span className="h-3 w-1.5 bg-q-brand-ember" style={{ animation: "cc-caret 1.1s steps(1) infinite" }} />
          </div>
        </div>
        {/* Validation + seal */}
        <div className="flex min-h-0 flex-col gap-3">
          <div className="flex-1 rounded-lg border border-white/10 bg-white/[0.02] p-3">
            <div className="mb-2.5 h-1.5 w-20 rounded bg-white/25" />
            {checks.map((w, i) => (
              <div key={`ck-${i}`} className="flex items-center gap-2 py-1.5">
                <span className="flex h-4 w-4 flex-none items-center justify-center rounded-full border border-emerald-400/70">
                  <motion.svg
                    viewBox="0 0 24 24"
                    className="h-2.5 w-2.5"
                    fill="none"
                    stroke="#3ecf8e"
                    strokeWidth="3.5"
                    initial={{ opacity: 0, scale: 0.2 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: 0.9 + i * 0.2, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <path d="M4 12l5 5 11-11" />
                  </motion.svg>
                </span>
                <span className="h-1.5 rounded bg-white/[0.18]" style={{ width: w }} />
              </div>
            ))}
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/[0.07]">
              <motion.div
                className="h-full rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)]"
                initial={{ width: 0 }}
                whileInView={{ width: "88%" }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 1.6, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>
          <div className="flex flex-none items-center gap-3 rounded-lg border border-white/10 bg-white/[0.02] p-3">
            <div className="relative h-12 w-12 flex-none">
              <div className="absolute inset-0 rounded-full border border-dashed border-q-brand/55" style={{ animation: "cc-spin 18s linear infinite" }} />
              <div
                className="absolute inset-1 flex items-center justify-center rounded-full border-2 border-q-brand/80 bg-q-brand/10"
                style={{ animation: "cc-hub-pulse 3.6s ease-in-out infinite" }}
              >
                <QIcon className="h-5 w-5" />
              </div>
            </div>
            <div className="space-y-1.5">
              <div className="h-1.5 w-20 rounded bg-white/25" />
              <div className="h-1 w-14 rounded bg-white/10" />
              <div className="mt-1 flex h-4 w-20 items-center justify-center rounded bg-q-brand" style={{ animation: "cc-hub-pulse 3.6s ease-in-out 1s infinite" }}>
                <div className="h-1 w-12 rounded bg-white/55" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SceneShell>
  );
}

/* 2c · Integrations hub — Q hub with radial links and endpoint tiles */
export function IntegrationsScene(props: SceneProps) {
  const spokes = [
    { angle: -155, len: 118, tile: { x: "4%", y: "12%" } },
    { angle: -25, len: 118, tile: { x: "72%", y: "12%" } },
    { angle: 155, len: 112, tile: { x: "4%", y: "72%" } },
    { angle: 25, len: 112, tile: { x: "72%", y: "72%" } },
  ];
  return (
    <SceneShell {...props}>
      <div className="relative min-h-[240px] flex-1 overflow-hidden">
        {/* Orbit rings */}
        <div className="absolute left-1/2 top-1/2 h-0 w-0">
          <div className="absolute -left-24 -top-24 h-48 w-48 rounded-full border border-dashed border-white/10" style={{ animation: "cc-spin 90s linear infinite" }} />
          <div className="absolute -left-36 -top-36 h-72 w-72 rounded-full border border-dashed border-white/[0.07]" style={{ animation: "cc-spin-r 130s linear infinite" }} />
        </div>
        {/* Radial links with travelling pulses */}
        {spokes.map((s, i) => (
          <div
            key={`spoke-${i}`}
            className="absolute left-1/2 top-1/2 h-px origin-left"
            style={{ width: s.len, transform: `rotate(${s.angle}deg)` }}
          >
            <div
              className="absolute inset-0 origin-left"
              style={{ background: "linear-gradient(90deg, rgba(255,255,255,0.28), rgba(255,255,255,0.04))", animation: `cc-edge-grow 0.8s cubic-bezier(0.22,1,0.36,1) ${0.4 + i * 0.15}s both` }}
            />
            <div
              className="absolute -top-[2.5px] h-1.5 w-1.5 rounded-full bg-[#ff6a64] shadow-[0_0_10px_rgba(255,58,38,0.9)]"
              style={{ animation: `cc-travel ${3 + i * 0.6}s linear ${i * 0.8}s infinite` }}
            />
          </div>
        ))}
        {/* Hub */}
        <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2">
          <div className="absolute -inset-2.5 rounded-full border border-dashed border-q-brand/45" style={{ animation: "cc-spin 20s linear infinite" }} />
          <div className="absolute -inset-8 rounded-full" style={{ background: "radial-gradient(circle, rgba(232,32,15,0.35), transparent 70%)", animation: "cc-halo 4s ease-in-out infinite" }} />
          <div
            className="absolute inset-0 flex items-center justify-center rounded-full border-2 border-q-brand/85 bg-[#17171d]"
            style={{ animation: "cc-hub-pulse 3.6s ease-in-out infinite" }}
          >
            <QIcon className="h-8 w-8" />
          </div>
        </div>
        {/* Endpoint tiles */}
        {spokes.map((s, i) => (
          <motion.div
            key={`tile-${i}`}
            className="absolute flex h-11 w-[24%] min-w-[76px] items-center justify-center rounded-xl border border-white/[0.14] bg-gradient-to-br from-[#262630]/90 to-[#12121a]/85 shadow-[0_12px_36px_rgba(0,0,0,0.5)]"
            style={{ left: s.tile.x, top: s.tile.y }}
            initial={{ opacity: 0, scale: 0.2 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.6 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            {i === 0 && props.logo ? (
              <Image src={props.logo} alt={props.logoAlt ?? ""} width={80} height={22} className="h-4 w-auto object-contain" />
            ) : (
              <span className="h-1.5 w-3/5 rounded bg-white/20" />
            )}
            <span
              className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400"
              style={{ animation: `cc-blink ${2.2 + i * 0.5}s ease-in-out infinite`, boxShadow: "0 0 8px rgba(52,211,153,0.8)" }}
            />
          </motion.div>
        ))}
      </div>
    </SceneShell>
  );
}

/* Workflow canvas — governed source feeding an analyst workflow graph */
export function WorkflowScene(props: SceneProps) {
  const nodes = [
    { x: 44, y: 90, c: "#ff3a26", hub: true },
    { x: 132, y: 58, c: "#6ca8f5" },
    { x: 132, y: 122, c: "#3ecf8e" },
    { x: 222, y: 90, c: "#b48cf2" },
    { x: 300, y: 90, c: "#e8b34b" },
  ];
  const edges = [
    "M56 90 C90 90 96 58 120 58",
    "M56 90 C90 90 96 122 120 122",
    "M144 58 C180 58 186 90 210 90",
    "M144 122 C180 122 186 90 210 90",
    "M234 90 L288 90",
  ];
  return (
    <SceneShell {...props}>
      <div className="flex min-h-[240px] flex-1 flex-col">
        {/* Workflow graph */}
        <div className="relative flex-1">
          <svg viewBox="0 0 340 200" className="absolute inset-0 h-full w-full">
            {edges.map((d, i) => (
              <path
                key={`we-${i}`}
                d={d}
                fill="none"
                stroke="rgba(255,58,38,0.4)"
                strokeWidth="1.5"
                strokeDasharray="6 5"
                style={{ animation: `cc-dash-flow 4.5s linear ${i * 0.4}s infinite` }}
              />
            ))}
            {nodes.map((n, i) =>
              n.hub ? null : (
                <g key={`wn-${i}`} style={{ animation: `cc-node-pulse ${2.6 + i * 0.4}s ease-in-out ${-i}s infinite` }}>
                  <rect x={n.x - 12} y={n.y - 12} width="24" height="24" rx="7" fill="#17171d" stroke={n.c} strokeWidth="1.5" />
                  <rect x={n.x - 4} y={n.y - 4} width="8" height="8" rx="2" fill={n.c} />
                </g>
              )
            )}
          </svg>
          {/* Governed QBricks source node */}
          <div className="absolute left-[13%] top-[45%] h-11 w-11 -translate-x-1/2 -translate-y-1/2">
            <div className="absolute -inset-1.5 rounded-full border border-dashed border-q-brand/50" style={{ animation: "cc-spin 16s linear infinite" }} />
            <div className="absolute -inset-5 rounded-full" style={{ background: "radial-gradient(circle, rgba(232,32,15,0.3), transparent 70%)", animation: "cc-halo 4.2s ease-in-out infinite" }} />
            <div
              className="absolute inset-0 flex items-center justify-center rounded-xl border-2 border-q-brand/80 bg-[#17171d]"
              style={{ animation: "cc-hub-pulse 3.6s ease-in-out infinite" }}
            >
              <QIcon className="h-5 w-5" />
            </div>
          </div>
        </div>
        {/* Human-in-the-loop governed handoff */}
        <div className="flex flex-none items-center gap-3 border-t border-white/10 px-3.5 py-3">
          <span className="relative h-4 w-7 flex-none rounded-full bg-emerald-400/25">
            <motion.span
              className="absolute top-0.5 h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"
              initial={{ left: 2 }}
              whileInView={{ left: 14 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            />
          </span>
          <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-q-gray-400">Human in the loop</span>
          <span className="ml-auto flex h-5 w-5 items-center justify-center rounded-full border border-emerald-400/70">
            <motion.svg
              viewBox="0 0 24 24"
              className="h-3 w-3"
              fill="none"
              stroke="#3ecf8e"
              strokeWidth="3.5"
              initial={{ opacity: 0, scale: 0.2 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <path d="M4 12l5 5 11-11" />
            </motion.svg>
          </span>
        </div>
      </div>
    </SceneShell>
  );
}
