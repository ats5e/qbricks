"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { brand, brandSvg } from "@/components/ui/QBricksText";

/*
 * Ingest flow: systems of record → lakehouse → QBricks ingest engine → data product → lakehouse / Python SDK.
 * Rebuilt from David's "QBricks Ingest Flow" board (October 2026) in the site's type and colours.
 * The SVG is static JSX; one effect drives the timeline imperatively (no React state per frame).
 */

const RED = "#d6111f";

const SOURCES = [
  ["Core banking", "Temenos · Flexcube"],
  ["Payments", "SWIFT · SEPA · Instant"],
  ["Cards", "Issuing · Processing"],
  ["Treasury & trading", "Murex · Calypso"],
  ["CRM & onboarding", "Salesforce · Dynamics"],
];

const PRODUCT_LINES: [string, string, "" | "ok" | "txt"][] = [
  ["Source", "Payments · SWIFT · SEPA", ""],
  ["Rows", "866 M", ""],
  ["Product spec · ODPS", "Attached ✓", "ok"],
  ["Owner", "Jon Smith", "txt"],
  ["Freshness SLA", "As defined by the organisation", "txt"],
];

const TILES: [string, string, string, string, number, string][] = [
  ["50.6", "s / TB", "Ingestion", "time", 1, "clock"],
  ["71.2", "TB / hour", "Sustained", "throughput", 1, "gauge"],
  ["7.17", "B rows / TB", "Rows", "ingested", 1, "rows"],
  ["€0.48", "per TB", "Timed ingest", "compute", 1, "euro"],
  ["14.5", "seconds", "SQL pipeline", "build time", 2, "clock"],
  ["866", "M rows", "Rows built", "by pipeline", 2, "rows"],
];

const STAGES = ["Ingest", "Build data product", "Publish"];

const CODE = ["import qbricks", "dp = qbricks.product(", '  "payments_settled")', "df = dp.to_pandas()"];

/* Timeline (ms): stage starts and loop length */
const S = [0, 0, 8400, 13400, 19900];
const LOOP = 22400;
/* Report figures, per TB */
const R = { ingestS: 50.56, rowsB: 7.168, tph: 71.2, cost: 0.48, landTB: 12.08, pipeS: 14.5, pipeRowsM: 866 };

const css = `
.qf{--ink:#0b0b0c;--muted:#66666f;--line:#e4e4e7;--soft:#f4f4f5;--bg:#f7f7f8;--red:${RED};--bar:#e8200f;--red-soft:#fdeceb;--good:#1a8a4a}
.qf svg text{font-family:inherit}
.qf .t-label{font-weight:600;font-size:13px;fill:var(--ink)}
.qf .t-eyebrow{font-weight:600;font-size:12px;fill:var(--red)}
.qf .t-title{font-weight:700;font-size:15px;fill:var(--ink)}
.qf .t-big{font-weight:700;font-size:18px;fill:var(--ink)}
.qf .t-sub{font-size:12px;fill:var(--muted)}
.qf [data-k="cline"] .t-sub{fill:var(--ink)}
.qf .t-small{font-size:11px;fill:var(--muted)}
.qf .t-red{font-size:11px;fill:var(--red)}
.qf .t-num{font-weight:800;font-size:20px;fill:var(--ink);font-variant-numeric:tabular-nums;letter-spacing:-.01em}
.qf .t-val{font-size:12px;font-weight:600;fill:var(--ink);font-variant-numeric:tabular-nums}
.qf .t-meta{font-size:11px;fill:var(--muted);font-variant-numeric:tabular-nums}
.qf .t-code{font:400 11px ui-monospace,"SF Mono",Menlo,Consolas,monospace;fill:var(--ink)}
.qf .t-unit{font-size:11px;font-weight:600;fill:var(--red)}
.qf .t-pill{font-size:11px;font-weight:500;fill:var(--ink)}
.qf .t-ok{fill:var(--good)}
.qf .t-badge{font-weight:700;font-size:11px;fill:#fff}
.qf .node{fill:#fff;stroke:var(--line);stroke-width:1.2;transition:stroke .4s}
.qf .node.on{stroke:var(--red);stroke-width:1.6}
.qf .pill{fill:var(--soft);stroke:var(--line);transition:fill .4s,stroke .4s}
.qf .pill.hot{fill:var(--red-soft);stroke:var(--red)}
.qf .wire{fill:none;stroke:var(--line);stroke-width:1.6;transition:stroke .4s;marker-end:url(#qf-arw)}
.qf .wire.on{stroke:#efa49d}
.qf .ic{color:var(--ink)}
.qf .icbg{fill:var(--soft);stroke:var(--line);transition:fill .4s,stroke .4s}
.qf .icbg.on{fill:var(--red-soft);stroke:var(--red)}
.qf .tic{color:var(--muted);transition:color .4s}
.qf .tic.on{color:var(--red)}
.qf .track{fill:var(--soft)}
.qf .prog{fill:var(--bar)}
.qf .halo{fill:none;stroke:var(--red);stroke-dasharray:5 4;opacity:.4}
.qf .particle{fill:var(--bar)}
.qf .codebg{fill:var(--bg);stroke:var(--line)}
.qf .badge{fill:var(--bar)}
.qf .badge.idle{fill:var(--muted)}
.qf .badge.ok{fill:var(--good)}
.qf .fade{transition:opacity .4s}
.qf .tile{fill:#fff;stroke:var(--line);stroke-width:1.2;transition:stroke .4s}
.qf .tile.on{stroke:var(--red);stroke-width:1.6}
.qf .stage-btn.on{border-color:var(--red);color:var(--ink)}
.qf .stage-btn.on .n{background:var(--bar);color:#fff}
.qf .stage-btn.done .n{background:var(--ink);color:#fff}
@media (prefers-reduced-motion:reduce){.qf .node,.qf .wire,.qf .fade,.qf .pill,.qf .icbg,.qf .tile{transition:none}}
`;

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-90px" },
} as const;

export function IngestFlow() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const $ = (k: string) => root.querySelector<SVGElement & HTMLElement>(`[data-k="${k}"]`)!;
    const all = (k: string) => Array.from(root.querySelectorAll<SVGElement>(`[data-k="${k}"]`));
    const clamp = (v: number) => Math.max(0, Math.min(1, v));
    const ease = (p: number) => (p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2);
    const setOn = (node: Element, on: boolean) => node.classList.toggle("on", on);

    const srcRects = all("src");
    const srcIcons = all("src-ic");
    const clines = all("cline");
    const tiles = all("tile").map((g) => ({
      stage: Number(g.dataset.stage),
      parts: Array.from(g.querySelectorAll(".tile, .tic, .icbg")),
    }));
    const stBtns = Array.from(root.querySelectorAll<HTMLButtonElement>("[data-stage-btn]"));
    const codeEls = [0, 1, 2, 3].map((i) => $(`c${i}`));
    const codeTotal = CODE.reduce((a, s) => a + s.length, 0);

    /* particles */
    const gP = $("particles");
    const wire = (k: string) => {
      const p = $(k) as unknown as SVGPathElement;
      return { p, len: p.getTotalLength() };
    };
    type Flow = { p: SVGPathElement; len: number; a: number; b: number; rate: number; travel: number; r: number };
    const flows: Flow[] = [];
    for (let i = 0; i < 5; i++) {
      flows.push({ ...wire(`w${i}`), a: i * 180, b: 8000, rate: 3.2, travel: 1500, r: 3.2 });
      flows.push({ ...wire(`w${i}`), a: 8000, b: LOOP - 1600, rate: 0.5, travel: 1700, r: 2.4 });
    }
    flows.push({ ...wire("wI"), a: 500, b: 8200, rate: 9, travel: 650, r: 3.4 });
    flows.push({ ...wire("wC"), a: 8600, b: 12800, rate: 3, travel: 500, r: 3 });
    flows.push({ ...wire("wL"), a: 13600, b: 19600, rate: 2.6, travel: 950, r: 3.4 });
    flows.push({ ...wire("wS"), a: 13600, b: 19600, rate: 2.6, travel: 600, r: 3.4 });
    const pool: SVGCircleElement[] = [];
    const getDot = (i: number) => {
      if (!pool[i]) {
        pool[i] = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        pool[i].setAttribute("class", "particle");
        gP.appendChild(pool[i]);
      }
      return pool[i];
    };
    function drawParticles(t: number) {
      let n = 0;
      for (const f of flows) {
        const iv = 1000 / f.rate;
        const lo = Math.max(f.a, t - f.travel), hi = Math.min(f.b, t);
        if (hi < lo) continue;
        const k0 = Math.ceil((lo - f.a) / iv), k1 = Math.floor((hi - f.a) / iv);
        for (let k = k0; k <= k1; k++) {
          const p = (t - (f.a + k * iv)) / f.travel;
          if (p < 0 || p > 1) continue;
          const pt = f.p.getPointAtLength(ease(p) * f.len);
          const d = getDot(n++);
          d.setAttribute("cx", pt.x.toFixed(1));
          d.setAttribute("cy", pt.y.toFixed(1));
          d.setAttribute("r", String(f.r));
          d.setAttribute("opacity", p > 0.9 ? ((1 - p) * 10).toFixed(2) : "1");
          d.style.display = "";
        }
      }
      for (let i = n; i < pool.length; i++) pool[i].style.display = "none";
    }

    const stageOf = (t: number) => (t >= S[3] ? 3 : t >= S[2] ? 2 : t >= S[1] ? 1 : 0);
    const unit = (k: string, num: string) => {
      $(k).firstChild!.nodeValue = num;
    };

    function render(t: number, motionOn: boolean) {
      const st = stageOf(t);
      stBtns.forEach((b, k) => {
        const i = k + 1;
        b.classList.toggle("on", i === st);
        b.classList.toggle("done", i < st);
        const end = i === 3 ? S[4] : S[i + 1];
        b.querySelector<HTMLElement>(".fill")!.style.width = clamp((t - S[i]) / (end - S[i])) * 100 + "%";
      });
      srcRects.forEach((r) => setOn(r, st === 1));
      srcIcons.forEach((r) => setOn(r, st === 1));
      for (let i = 0; i < 5; i++) setOn($(`w${i}`), st === 1);
      setOn($("nLake"), st <= 1);
      setOn($("lakeIcBg"), st <= 1);
      setOn($("wI"), st === 1);
      setOn($("nQ"), st === 1 || st === 2);
      setOn($("wC"), st === 2);
      setOn($("nC"), st >= 2);
      setOn($("cIcBg"), st >= 2);
      setOn($("wL"), st === 3);
      setOn($("wS"), st === 3);
      setOn($("nL"), st === 3);
      setOn($("lIcBg"), st === 3);
      setOn($("nS"), st === 3);
      setOn($("sIcBg"), st === 3);
      tiles.forEach(({ stage, parts }) => parts.forEach((p) => setOn(p, stage === st)));

      // landing in the lakehouse
      const pL = clamp(t / 7800);
      $("landTB").textContent = (R.landTB * pL).toFixed(2) + " TB";
      const ls = Math.round(500 * pL);
      $("landT").textContent = "in " + Math.floor(ls / 60) + " min " + String(ls % 60).padStart(2, "0") + " s";

      // ingest
      const pI = clamp((t - 300) / 7800);
      $("qTB").textContent = pI.toFixed(2) + " / 1 TB CSV";
      $("qBar").setAttribute("width", (260 * pI).toFixed(1));
      unit("qEl", (R.ingestS * pI).toFixed(1));
      unit("qRows", (R.rowsB * pI).toFixed(2));
      unit("qTp", t >= 300 ? R.tph.toFixed(1) : "–");
      $("qCost").textContent = "€" + (R.cost * pI).toFixed(2);

      // SQL pipeline build
      const pV = clamp((t - S[2]) / 3500);
      $("pBar").setAttribute("width", (260 * pV).toFixed(1));
      unit("pEl", (R.pipeS * pV).toFixed(1));
      unit("pRows", Math.round(R.pipeRowsM * pV).toString());
      $("qPst").textContent = t < S[2] ? "queued" : pV < 1 ? "building" : "built ✓";
      $("hIng").style.fill = st === 1 ? "var(--red)" : "var(--muted)";
      $("hPipe").style.fill = st === 2 ? "var(--red)" : "var(--muted)";
      $("pOdcs").classList.toggle("hot", t >= S[2] + 3500);
      $("pOdps").classList.toggle("hot", t >= S[2] + 3150);

      // status badge
      const bState =
        st === 0 ? ["Waiting", "idle"]
        : st === 1 ? (pI < 1 ? ["Ingesting", ""] : ["Ingested", ""])
        : st === 2 ? (pV < 1 ? ["Building", ""] : ["Built", "ok"])
        : ["Published", "ok"];
      $("badge").textContent = bState[0];
      $("badgeBg").setAttribute("class", "badge " + bState[1]);

      // data product lines
      clines.forEach((g, i) => g.setAttribute("opacity", t >= S[2] + 1500 + i * 550 ? "1" : "0"));

      // publish
      const pub = t >= S[3] + 900;
      $("pDbx").classList.toggle("hot", pub);
      const lStat = $("lStat");
      lStat.textContent = pub ? "● Published" : "Waiting for data product";
      lStat.setAttribute("class", pub ? "t-sub t-ok" : "t-sub");
      $("lStat2").textContent = pub ? "payments_settled" : "";

      let chars = Math.floor(clamp((t - S[3] - 500) / 3400) * codeTotal);
      CODE.forEach((line, i) => {
        const c = Math.max(0, Math.min(line.length, chars));
        codeEls[i].textContent = line.slice(0, c);
        chars -= line.length;
      });
      const ready = t >= S[3] + 4100;
      const sStat = $("sStat");
      sStat.textContent = ready ? "● Ready in Python" : "Waiting for data product";
      sStat.setAttribute("class", ready ? "t-sub t-ok" : "t-sub");

      $("clock").textContent =
        st === 1 ? "Ingest clock runs at 6.5× real time"
        : st === 2 ? "Pipeline clock runs at 4.1× real time"
        : st === 3 ? "Data product published with its ODPS spec"
        : "Extracting 12.08 TB of CSV from source";

      drawParticles(motionOn ? t : -1e9);
    }

    /* playback: only runs while the diagram is on screen, and starts from the top the first time it is seen */
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    let t = reduce ? LOOP - 100 : 0;
    let playing = !reduce;
    let last: number | null = null;
    let raf = 0;
    let visible = false;
    const playBtn = $("play") as unknown as HTMLButtonElement;
    const syncBtn = () => {
      playBtn.textContent = playing ? "Pause" : "Play";
      playBtn.setAttribute("aria-pressed", String(playing));
    };

    function frame(ts: number) {
      if (last == null) last = ts;
      const dt = Math.min(64, ts - last);
      last = ts;
      if (playing) {
        t += dt;
        if (t >= LOOP) t = 0;
      }
      render(t, playing || !reduce);
      raf = visible ? requestAnimationFrame(frame) : 0;
    }
    const start = () => {
      if (!raf) {
        last = null;
        raf = requestAnimationFrame(frame);
      }
    };

    const onPlay = () => {
      playing = !playing;
      syncBtn();
    };
    const onReplay = () => {
      t = 0;
      playing = true;
      syncBtn();
    };
    playBtn.addEventListener("click", onPlay);
    $("replay").addEventListener("click", onReplay);
    const stageHandlers = stBtns.map((b, k) => {
      const h = () => {
        // jump to the moment each stage reads best when paused
        t = reduce || !playing ? [8300, 13300, LOOP - 100][k] : S[k + 1];
        syncBtn();
        if (!visible) render(t, false);
      };
      b.addEventListener("click", h);
      return h;
    });

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) start();
      },
      { threshold: 0.15 },
    );
    io.observe(root);

    syncBtn();
    render(t, false);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      playBtn.removeEventListener("click", onPlay);
      $("replay").removeEventListener("click", onReplay);
      stBtns.forEach((b, k) => b.removeEventListener("click", stageHandlers[k]));
      pool.forEach((d) => d.remove());
    };
  }, []);

  return (
    <section className="section-y border-b border-black/5 bg-white">
      <div className="container-x">
        <motion.p {...fadeUp} className="eyebrow mb-5">Ingest to data product</motion.p>
        <motion.h2 {...fadeUp} transition={{ duration: 0.7 }} className="h-section max-w-3xl">
          <span className="block">Large scale data ingestion in.</span>
          <span className="block">
            Data products out<span className="text-q-brand-ember">.</span>
          </span>
        </motion.h2>
        <motion.p {...fadeUp} transition={{ duration: 0.7, delay: 0.08 }} className="mt-5 max-w-3xl text-lg leading-relaxed text-q-gray-700">
          {brand("Source systems hand over CSV. QBricks ingests it at ")}
          <strong className="font-bold text-q-ink">50.6 s per TB</strong>, builds the SQL pipeline in{" "}
          <strong className="font-bold text-q-ink">14.5 s</strong>, generates the ODCS data contract, and publishes a governed data
          product with an ODPS (Open Data Product Standard) specification, to the lakehouse or to the data science team.
        </motion.p>

        <div ref={rootRef} className="qf mt-10">
          <style>{css}</style>

          <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3">
            <ol className="flex flex-wrap gap-2">
              {STAGES.map((label, i) => (
                <li key={label}>
                  <button
                    type="button"
                    data-stage-btn
                    className="stage-btn relative flex items-center gap-2 overflow-hidden rounded-full border border-black/10 bg-white py-2 pl-2.5 pr-4 text-sm font-medium text-q-gray-600 transition-colors hover:border-q-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-q-brand"
                  >
                    <span className="n grid h-6 w-6 place-items-center rounded-full bg-q-gray-100 text-xs font-bold text-q-gray-600">{i + 1}</span>
                    {label}
                    <span className="fill absolute bottom-0 left-0 h-0.5 w-0 bg-q-brand" />
                  </button>
                </li>
              ))}
            </ol>
            <div className="flex flex-wrap items-center gap-2">
              <span data-k="clock" className="mr-1 text-sm text-q-gray-500">Extracting 12.08 TB of CSV from source</span>
              <button type="button" data-k="play" aria-pressed="true" className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-q-ink transition-colors hover:border-q-ink">
                Pause
              </button>
              <button type="button" data-k="replay" className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-q-ink transition-colors hover:border-q-ink">
                Replay
              </button>
            </div>
          </div>

          <p className="mt-5 text-sm text-q-gray-500 md:hidden">Swipe across to follow the flow.</p>
          <div className="mt-3 overflow-x-auto rounded-[2rem] md:mt-5 border border-black/[0.08] bg-q-panel">
            <svg
              viewBox="0 0 1280 630"
              className="block h-auto w-full min-w-[780px]"
              role="img"
              aria-label="Animated flow: five systems of record hand over CSV; QBricks ingests one terabyte in 50.6 seconds at 71.2 TB per hour for 0.48 euros of compute, then builds a SQL pipeline in 14.5 seconds producing 866 million rows; the pipeline carries an ODCS data contract and the resulting data product an ODPS specification, and is published back to the lakehouse and to data scientists through the QBricks Python SDK."
            >
              <defs>
                <marker id="qf-arw" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                  <path d="M1,1 L9,5 L1,9" fill="none" stroke="#a1a1aa" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </marker>
                <symbol id="qf-i-server" viewBox="0 0 24 24">
                  <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><rect x="3.5" y="3" width="17" height="7.5" rx="2" /><rect x="3.5" y="13.5" width="17" height="7.5" rx="2" /><path d="M12 6.75h5M12 17.25h5" /></g>
                  <circle cx="7.5" cy="6.75" r="1.2" fill={RED} /><circle cx="7.5" cy="17.25" r="1.2" fill={RED} />
                </symbol>
                <symbol id="qf-i-publish" viewBox="0 0 24 24">
                  <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="10" cy="5" rx="7" ry="2.5" /><path d="M3 5v13c0 1.4 3.1 2.5 7 2.5M17 5v5" /><path d="M3 11.5c0 1.4 3.1 2.5 7 2.5" /></g>
                  <path d="M19 22v-8M16 17l3-3 3 3" fill="none" stroke={RED} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </symbol>
                <symbol id="qf-i-product" viewBox="0 0 24 24">
                  <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"><path d="M12 2.8l8 4.4v9.6l-8 4.4-8-4.4V7.2z" /><path d="M4 7.2l8 4.4 8-4.4M12 11.6v9.6" /></g>
                  <path d="M8 5l8 4.4" fill="none" stroke={RED} strokeWidth="1.8" strokeLinecap="round" />
                </symbol>
                <symbol id="qf-i-code" viewBox="0 0 24 24">
                  <g fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M8 7l-5 5 5 5M16 7l5 5-5 5" /></g>
                  <path d="M13.5 5l-3 14" fill="none" stroke={RED} strokeWidth="1.7" strokeLinecap="round" />
                </symbol>
                <symbol id="qf-i-clock" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></g></symbol>
                <symbol id="qf-i-gauge" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M3.5 17a8.5 8.5 0 1 1 17 0" /><path d="M12 17l4.5-5.5" /></g></symbol>
                <symbol id="qf-i-rows" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9.5h18M3 14.5h18M9 4v16" /></g></symbol>
                <symbol id="qf-i-euro" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M17.5 6.5a6.5 6.5 0 1 0 0 11" /><path d="M4.5 10.5h9M4.5 13.5h9" /></g></symbol>
              </defs>

              {/* wires */}
              <g>
                <path className="wire" data-k="w0" d="M270,139 C390,139 380,232 480,232" />
                <path className="wire" data-k="w1" d="M270,211 C390,211 380,232 480,232" />
                <path className="wire" data-k="w2" d="M270,283 C390,283 380,232 480,232" />
                <path className="wire" data-k="w3" d="M270,355 C390,355 380,232 480,232" />
                <path className="wire" data-k="w4" d="M270,427 C390,427 380,232 480,232" />
                <path className="wire" data-k="wI" d="M640,232 L700,232" />
                <path className="wire" data-k="wC" d="M850,362 L850,392" />
                <path className="wire" data-k="wL" d="M1000,470 C1034,470 1026,240 1060,240" />
                <path className="wire" data-k="wS" d="M1000,498 L1060,498" />
              </g>

              {/* sources */}
              <text className="t-label" x="40" y="92">Systems of record</text>
              {SOURCES.map(([name, sub], i) => {
                const y = 110 + i * 72;
                return (
                  <g key={name}>
                    <rect className="node" data-k="src" x="40" y={y} width="230" height="58" rx="10" />
                    <rect className="icbg" data-k="src-ic" x="52" y={y + 12} width="34" height="34" rx="9" />
                    <use href="#qf-i-server" className="ic" x="58" y={y + 18} width="22" height="22" />
                    <text className="t-title" x="98" y={y + 25}>{name}</text>
                    <text className="t-sub" x="98" y={y + 44}>{sub}</text>
                  </g>
                );
              })}

              {/* lakehouse landing */}
              <rect className="node" data-k="nLake" x="480" y="196" width="160" height="72" rx="22" />
              <rect className="icbg" data-k="lakeIcBg" x="490" y="214" width="36" height="36" rx="18" />
              <use href="#qf-i-rows" className="ic" x="497" y="221" width="22" height="22" />
              <text className="t-num" x="536" y="222" data-k="landTB" style={{ fontSize: 15 }}>0.00 TB</text>
              <text className="t-red" x="536" y="239" data-k="landT">in 0 min 00 s</text>
              <text className="t-small" x="536" y="256">CSV · 86.6 B rows</text>
              <text className="t-small" x="560" y="290" textAnchor="middle">Changes managed with materialised</text>
              <text className="t-small" x="560" y="305" textAnchor="middle">views once ingested</text>

              {/* QBricks engine */}
              <rect className="halo" x="688" y="84" width="324" height="290" rx="18" />
              <rect className="node" data-k="nQ" x="700" y="96" width="300" height="266" rx="14" />
              <image href="/assets/QBricks-icon.png" x="716" y="108" width="36" height="36" />
              <text className="t-big" x="762" y="124">{brandSvg("QBricks", RED)}</text>
              <text className="t-small" x="762" y="140">Ingest engine</text>
              <rect className="badge idle" data-k="badgeBg" x="904" y="110" width="80" height="22" rx="11" />
              <text className="t-badge" data-k="badge" x="944" y="125" textAnchor="middle">Waiting</text>

              {/* 1 · ingestion */}
              <text className="t-eyebrow" x="720" y="166" data-k="hIng">1 · Ingestion</text>
              <text className="t-meta" x="980" y="166" textAnchor="end" data-k="qTB">0.00 / 1 TB CSV</text>
              <rect className="track" x="720" y="177" width="260" height="6" rx="3" />
              <rect className="prog" data-k="qBar" x="720" y="177" width="0" height="6" rx="3" />
              <text className="t-small" x="720" y="198">Elapsed</text>
              <text className="t-num" x="720" y="218" data-k="qEl" style={{ fontSize: 18 }}>0.0<tspan className="t-unit" dx="4">s</tspan></text>
              <text className="t-small" x="856" y="198">Rows ingested</text>
              <text className="t-num" x="856" y="218" data-k="qRows" style={{ fontSize: 18 }}>0.00<tspan className="t-unit" dx="4">B</tspan></text>
              <text className="t-small" x="720" y="238">Throughput</text>
              <text className="t-num" x="720" y="258" data-k="qTp" style={{ fontSize: 18 }}>–<tspan className="t-unit" dx="4">TB/h</tspan></text>
              <text className="t-small" x="856" y="238">Compute cost</text>
              <text className="t-num" x="856" y="258" data-k="qCost" style={{ fontSize: 18 }}>€0.00</text>

              <line x1="720" y1="272" x2="980" y2="272" stroke="#e4e4e7" />

              {/* 2 · SQL pipeline build */}
              <text className="t-eyebrow" x="720" y="290" data-k="hPipe" style={{ fill: "var(--muted)" }}>2 · SQL pipeline build</text>
              <text className="t-meta" x="980" y="290" textAnchor="end" data-k="qPst">queued</text>
              <rect className="pill" data-k="pOdcs" x="866" y="279" width="42" height="16" rx="5" />
              <text className="t-pill" x="887" y="290.5" textAnchor="middle" style={{ fontSize: 10 }}>ODCS</text>
              <rect className="track" x="720" y="302" width="260" height="6" rx="3" />
              <rect className="prog" data-k="pBar" x="720" y="302" width="0" height="6" rx="3" />
              <text className="t-small" x="720" y="324">Build time</text>
              <text className="t-num" x="720" y="346" data-k="pEl" style={{ fontSize: 18 }}>0.0<tspan className="t-unit" dx="4">s</tspan></text>
              <text className="t-small" x="808" y="324">Rows built</text>
              <text className="t-num" x="808" y="346" data-k="pRows" style={{ fontSize: 18 }}>0<tspan className="t-unit" dx="4">M</tspan></text>
              <text className="t-small" x="980" y="324" textAnchor="end">Infra</text>
              <text className="t-title" x="980" y="345" textAnchor="end" style={{ fontSize: 13 }}>Virtual machine</text>

              {/* data product */}
              <rect className="node" data-k="nC" x="700" y="392" width="300" height="212" rx="14" />
              <rect className="icbg" data-k="cIcBg" x="716" y="404" width="34" height="34" rx="9" />
              <use href="#qf-i-product" className="ic" x="722" y="410" width="22" height="22" />
              <text className="t-title" x="760" y="419">Data product</text>
              <rect className="pill" data-k="pOdps" x="936" y="406" width="48" height="20" rx="6" />
              <text className="t-pill" x="960" y="420" textAnchor="middle">ODPS</text>
              <text className="t-meta" x="760" y="436">payments_settled · v1.0</text>
              {PRODUCT_LINES.map(([label, value, tone], i) => {
                const y = 470 + i * 24;
                return (
                  <g key={label} className="fade" data-k="cline" opacity="0">
                    <text className="t-small" x="720" y={y}>{label}</text>
                    <text className={tone === "txt" ? "t-sub" : `t-val${tone === "ok" ? " t-ok" : ""}`} x="980" y={y} textAnchor="end">{value}</text>
                    <line x1="720" y1={y + 8} x2="980" y2={y + 8} stroke="#f4f4f5" />
                  </g>
                );
              })}

              {/* output: lakehouse */}
              <rect className="node" data-k="nL" x="1060" y="96" width="190" height="262" rx="14" />
              <rect className="icbg" data-k="lIcBg" x="1076" y="108" width="34" height="34" rx="9" />
              <use href="#qf-i-publish" className="ic" x="1082" y="114" width="22" height="22" />
              <text className="t-eyebrow" x="1076" y="164">To the lakehouse</text>
              <text className="t-title" x="1076" y="186" style={{ fontSize: 14 }}>Governed data product</text>
              <rect className="pill" data-k="pDbx" x="1076" y="200" width="80" height="22" rx="6" />
              <text className="t-pill" x="1116" y="215" textAnchor="middle">Databricks</text>
              <rect className="pill" x="1162" y="200" width="54" height="22" rx="6" />
              <text className="t-pill" x="1189" y="215" textAnchor="middle">Fabric</text>
              <rect className="pill" x="1076" y="228" width="76" height="22" rx="6" />
              <text className="t-pill" x="1114" y="243" textAnchor="middle">Snowflake</text>
              <rect className="pill" x="1158" y="228" width="54" height="22" rx="6" />
              <text className="t-pill" x="1185" y="243" textAnchor="middle">Oracle</text>
              <text className="t-sub" x="1076" y="278">Iceberg or Delta table,</text>
              <text className="t-sub" x="1076" y="295">contract published</text>
              <text className="t-sub" x="1076" y="330" data-k="lStat">Waiting for data product</text>
              <text className="t-meta" x="1076" y="347" data-k="lStat2" />

              {/* output: Python SDK */}
              <rect className="node" data-k="nS" x="1060" y="392" width="190" height="212" rx="14" />
              <rect className="icbg" data-k="sIcBg" x="1076" y="404" width="34" height="34" rx="9" />
              <use href="#qf-i-code" className="ic" x="1082" y="410" width="22" height="22" />
              <text className="t-eyebrow" x="1120" y="418">For data scientists</text>
              <text className="t-title" x="1120" y="434" style={{ fontSize: 12 }}>{brandSvg("QBricks Python SDK", RED)}</text>
              <rect className="codebg" x="1072" y="450" width="166" height="96" rx="8" />
              {[474, 493, 512, 531].map((y, i) => (
                <text key={y} className="t-code" x="1082" y={y} data-k={`c${i}`} />
              ))}
              <text className="t-sub" x="1076" y="572" data-k="sStat">Waiting for data product</text>
              <text className="t-small" x="1076" y="590">No pipeline build</text>

              {/* measured tiles */}
              <text className="t-label" x="40" y="478">Ingestion, per TB of CSV</text>
              <text className="t-label" x="438" y="478">SQL pipeline build</text>
              {TILES.map(([num, u, l1, l2, stage, icon], i) => {
                const x = 40 + i * 96 + (i >= 4 ? 14 : 0);
                return (
                  <g key={l1 + l2} data-k="tile" data-stage={stage}>
                    <rect className="tile" x={x} y="488" width="88" height="116" rx="10" />
                    <rect className="icbg" x={x + 10} y="497" width="28" height="28" rx="8" />
                    <use href={`#qf-i-${icon}`} className="tic" x={x + 15} y="502" width="18" height="18" />
                    <text className="t-num" x={x + 12} y="547">{num}</text>
                    <text className="t-unit" x={x + 12} y="563">{u}</text>
                    <text className="t-small" x={x + 12} y="581">{l1}</text>
                    <text className="t-small" x={x + 12} y="595">{l2}</text>
                  </g>
                );
              })}

              <g data-k="particles" />
            </svg>
          </div>

          <p className="mt-5 max-w-5xl text-xs leading-relaxed text-q-gray-500">
            Ingest figures from a single measured run on 29 September 2026: TPC-H-derived SF10000 CSV (12.08 TB, 86.6 billion rows), nine
            workers, 576 vCPUs, Azure West Europe. Compute cost covers the timed ingestion window only. SQL pipeline build: 14.5 s for 866
            million rows, TPC-H SF100, September 2026. Source systems, data product details and SDK code are illustrative.
          </p>
        </div>
      </div>
    </section>
  );
}
