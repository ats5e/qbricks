"use client";

import { useId } from "react";

/*
 * Animated flow graphics rebuilt from the QBricks graphics pack David
 * supplied in September 2026 (Migration, Pipeline flow, Routing). The
 * originals are light-themed 1400×680 / 1800×680 HTML boards; these are
 * pure-SVG recreations in the site's dark brand language so they scale
 * with the page and share the site's fonts and colours.
 */

const INK = "#ffffff";
const GRAY_300 = "#d4d4d8";
const GRAY_400 = "#a1a1aa";
const GRAY_500 = "#71717a";
const EMBER = "#ff3a26";
const BRAND = "#e8200f";
const GREEN = "#6fd39a";
const LINE = "rgba(255,255,255,0.14)";

type CardVariant = "plain" | "accent" | "hot" | "panel";

const cardFill: Record<CardVariant, { fill: string; stroke: string }> = {
  plain: { fill: "rgba(255,255,255,0.035)", stroke: "rgba(255,255,255,0.12)" },
  accent: { fill: "rgba(232,32,15,0.07)", stroke: "rgba(255,58,38,0.45)" },
  hot: { fill: "#050507", stroke: "rgba(255,58,38,0.6)" },
  panel: { fill: "rgba(255,255,255,0.02)", stroke: "rgba(255,255,255,0.08)" },
};

function Card({
  x, y, w, h, r = 8, variant = "plain", style, dashed = false,
}: { x: number; y: number; w: number; h: number; r?: number; variant?: CardVariant; style?: React.CSSProperties; dashed?: boolean }) {
  const c = cardFill[variant];
  return (
    <rect
      x={x} y={y} width={w} height={h} rx={r}
      fill={c.fill} stroke={c.stroke} strokeWidth={1}
      strokeDasharray={dashed ? "6 6" : undefined}
      style={style}
    />
  );
}

function Mono({
  x, y, size = 10, fill = GRAY_500, anchor = "start", children, weight = 500,
}: { x: number; y: number; size?: number; fill?: string; anchor?: "start" | "middle" | "end"; children: React.ReactNode; weight?: number }) {
  return (
    <text x={x} y={y} className="font-mono" fontSize={size} fontWeight={weight} letterSpacing={size * 0.14} fill={fill} textAnchor={anchor}>
      {children}
    </text>
  );
}

function T({
  x, y, size = 13, fill = INK, weight = 500, anchor = "start", children,
}: { x: number; y: number; size?: number; fill?: string; weight?: number; anchor?: "start" | "middle" | "end"; children: React.ReactNode }) {
  return (
    <text x={x} y={y} fontSize={size} fontWeight={weight} fill={fill} textAnchor={anchor}>
      {children}
    </text>
  );
}

function Pill({
  x, y, w, h = 20, label, fill = "rgba(255,255,255,0.06)", stroke = "none", color = INK, size = 11, mono = false, style,
}: { x: number; y: number; w: number; h?: number; label: string; fill?: string; stroke?: string; color?: string; size?: number; mono?: boolean; style?: React.CSSProperties }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={h / 2} fill={fill} stroke={stroke} strokeWidth={1} style={style} />
      <text
        x={x + w / 2} y={y + h / 2 + size * 0.36}
        className={mono ? "font-mono" : undefined}
        fontSize={size} fontWeight={500} letterSpacing={mono ? size * 0.14 : 0}
        fill={color} textAnchor="middle"
      >
        {label}
      </text>
    </g>
  );
}

function Dot({ path, dur, begin }: { path: string; dur: number; begin: number }) {
  return (
    <circle r={5} fill={EMBER}>
      <animateMotion dur={`${dur}s`} begin={`${begin}s`} repeatCount="indefinite">
        <mpath href={`#${path}`} />
      </animateMotion>
    </circle>
  );
}

function Frame({ id, w, h, label, children }: { id: string; w: number; h: number; label: string; children: React.ReactNode }) {
  return (
    <div className="overflow-x-auto rounded-2xl">
      <svg
        viewBox={`0 0 ${w} ${h}`}
        role="img"
        aria-label={label}
        className="block h-auto w-full min-w-[760px] font-sans"
      >
        <defs>
          <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#1a1a22" />
            <stop offset="1" stopColor="#0a0a0f" />
          </linearGradient>
          <radialGradient id={`${id}-glow`} cx="0.5" cy="0.5" r="0.5">
            <stop offset="0" stopColor="rgba(232,32,15,0.22)" />
            <stop offset="1" stopColor="rgba(232,32,15,0)" />
          </radialGradient>
        </defs>
        <rect x={0.5} y={0.5} width={w - 1} height={h - 1} rx={14} fill={`url(#${id}-bg)`} stroke="rgba(255,255,255,0.12)" />
        <ellipse cx={w / 2} cy={h / 2} rx={w * 0.34} ry={h * 0.5} fill={`url(#${id}-glow)`} />
        {children}
      </svg>
    </div>
  );
}

function Header({ eyebrow, sub, dividerX }: { eyebrow: string; sub: string; dividerX: number }) {
  return (
    <g>
      <Mono x={40} y={44} size={12} fill={EMBER}>{eyebrow}</Mono>
      <line x1={dividerX} y1={33} x2={dividerX} y2={47} stroke="rgba(255,255,255,0.18)" />
      <T x={dividerX + 14} y={44} size={13} fill={GRAY_400} weight={400}>{sub}</T>
    </g>
  );
}

const sources = [
  { name: "Core banking", sub: "Temenos · Flexcube" },
  { name: "Payments", sub: "SWIFT · SEPA · Instant" },
  { name: "Cards", sub: "Issuing · Processing" },
  { name: "Treasury & trading", sub: "Murex · Calypso" },
  { name: "CRM & onboarding", sub: "Salesforce · Dynamics" },
];

function SourceRows({ label, rows, right }: { label: string; rows: { name: string; sub: string; right?: string }[]; right?: string }) {
  return (
    <g>
      <Mono x={40} y={100} size={11}>{label}</Mono>
      {rows.map((row, i) => {
        const y = 120 + i * 96;
        return (
          <g key={row.name}>
            <Card x={40} y={y} w={280} h={56} style={{ animation: "qb-row 2.5s ease-in-out infinite", animationDelay: `${i * 0.5}s` }} />
            <T x={56} y={y + 25} size={14}>{row.name}</T>
            <Mono x={56} y={y + 42} size={11}>{row.sub}</Mono>
            <Mono x={304} y={y + 33} size={11} fill={EMBER} anchor="end">{row.right ?? right}</Mono>
          </g>
        );
      })}
    </g>
  );
}

/* ───────────────────────── Migration ───────────────────────── */

const migrationTables = [
  { name: "Customers", sub: "CRM.CUSTOMER", right: "2.4M rows" },
  { name: "Accounts", sub: "CORE.ACCOUNT", right: "6.1M rows" },
  { name: "Transactions", sub: "CORE.TXN_HISTORY", right: "866M rows" },
  { name: "Loans", sub: "LENDING.LOAN_BOOK", right: "1.2M rows" },
  { name: "General ledger", sub: "FIN.GL_POSTING", right: "210M rows" },
];

const migrationSteps = [
  { n: "01", name: "Profile & ingest", meta: "incremental CDC" },
  { n: "02", name: "Generate data contract", meta: "ODCS" },
  { n: "03", name: "Govern & validate", meta: "human in the loop" },
  { n: "04", name: "Publish data product", meta: "open format" },
];

const migrationProducts = [
  { name: "Customer 360", meta: "customer_360 · v1.0" },
  { name: "Account master", meta: "account_master · v1.0" },
  { name: "Transaction ledger", meta: "txn_ledger · v1.0" },
  { name: "Loan book", meta: "loan_book · v1.0" },
  { name: "General ledger", meta: "gl_postings · v1.0" },
];

const migrationPhases = [
  { name: "profile", w: 66 },
  { name: "contract", w: 72 },
  { name: "validate", w: 70 },
  { name: "publish", w: 66 },
];

export function MigrationGraphic() {
  const id = useId().replace(/:/g, "");
  const inPaths = [148, 244, 340, 436, 532].map((y) => `M 320 ${y} C 400 ${y}, 420 340, 560 340`);
  const outPaths = [168, 238, 308, 378, 448].map((y) => `M 840 340 C 960 340, 980 ${y}, 1060 ${y}`);

  return (
    <Frame id={id} w={1400} h={680} label="QBricks database to lakehouse migration: tables become contract-enforced data products on the way across">
      <Header eyebrow="QBRICKS · DATABASE TO LAKEHOUSE MIGRATION" sub="Tables become contract-enforced data products on the way across." dividerX={392} />

      <g fill="none" stroke={LINE} strokeWidth={2}>
        {inPaths.map((d, i) => <path key={`i${i}`} id={`${id}-i${i}`} d={d} />)}
        {outPaths.map((d, i) => <path key={`o${i}`} id={`${id}-o${i}`} d={d} />)}
      </g>
      <g>
        {inPaths.map((_, i) => <Dot key={`di${i}`} path={`${id}-i${i}`} dur={2.5} begin={i * 0.5} />)}
        {outPaths.map((_, i) => <Dot key={`do${i}`} path={`${id}-o${i}`} dur={2.5} begin={1.2 + i * 0.5} />)}
      </g>

      <SourceRows label="ORACLE DATABASE · SYSTEM OF RECORD" rows={migrationTables} />

      {/* Single node */}
      <Card x={548} y={198} w={304} h={314} r={16} variant="panel" dashed />
      <rect x={548} y={198} width={304} height={314} rx={16} fill="none" stroke="rgba(255,58,38,0.55)" strokeDasharray="6 6" />
      <Mono x={700} y={220} size={10} fill={EMBER} anchor="middle">SINGLE NODE · ONE RIGHT-SIZED VM</Mono>
      <Card x={560} y={228} w={280} h={270} r={12} variant="hot" style={{ animation: "qb-pulse 2.4s ease-out infinite" }} />
      <image href="/assets/QBricks-icon.png" x={578} y={246} width={34} height={34} />
      <Mono x={622} y={259} size={10} fill={GRAY_400}>MIGRATION ENGINE</Mono>
      <T x={622} y={278} size={17} weight={700}>QBricks</T>
      {migrationSteps.map((s, i) => {
        const y = 296 + i * 36;
        return (
          <g key={s.n}>
            <rect x={578} y={y} width={244} height={30} rx={6} fill="rgba(255,255,255,0.06)" style={{ animation: "qb-step 4s ease-in-out infinite", animationDelay: `${i}s` }} />
            <Mono x={588} y={y + 19} size={9.5} fill="rgba(255,255,255,0.7)">{s.n}</Mono>
            <T x={608} y={y + 19} size={11.5}>{s.name}</T>
            <text x={814} y={y + 19} className="font-mono" fontSize={9} fill="rgba(255,255,255,0.7)" textAnchor="end">{s.meta}</text>
          </g>
        );
      })}
      <Mono x={578} y={484} size={10} fill={GRAY_400}>EOS SQL ENGINE · ODCS AT THE CORE</Mono>

      {/* Landing zone */}
      <Mono x={1060} y={100} size={11}>ORACLE LAKEHOUSE · GOVERNED LANDING ZONE</Mono>
      <Card x={1060} y={120} w={300} h={440} r={12} variant="accent" />
      <T x={1078} y={149} size={16} weight={700}>Data products</T>
      <Pill x={1208} y={134} w={134} h={22} label="CONTRACT-ENFORCED" fill={BRAND} size={9} mono />
      {migrationProducts.map((p, i) => {
        const y = 170 + i * 70;
        return (
          <g key={p.name} style={{ animation: "qb-land 10s ease-out infinite", animationDelay: `${i * 1.6}s`, transformBox: "fill-box" }}>
            <Card x={1078} y={y} w={264} h={60} />
            <T x={1092} y={y + 27} size={13}>{p.name}</T>
            <Mono x={1092} y={y + 44} size={10}>{p.meta}</Mono>
            <Pill x={1240} y={y + 21} w={42} h={18} label="ODCS" fill="rgba(255,58,38,0.12)" color={EMBER} size={10} />
            <Pill x={1286} y={y + 21} w={56} h={18} label="Lineage" fill="rgba(255,58,38,0.12)" color={EMBER} size={10} />
          </g>
        );
      })}
      <T x={1078} y={546} size={12} fill={GRAY_400} weight={400}>Open formats</T>
      <Mono x={1342} y={546} size={11} fill={INK} anchor="end">Iceberg · Parquet</Mono>

      {/* Timeline bars */}
      <Mono x={40} y={601} size={10}>TRADITIONAL MIGRATION</Mono>
      <rect x={202} y={592} width={696} height={10} rx={5} fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" />
      <rect x={202} y={592} width={696} height={10} rx={5} fill="rgba(255,255,255,0.16)" />
      <Mono x={910} y={601} size={11}>12–18 months</Mono>
      <Mono x={40} y={623} size={10} fill={EMBER}>WITH QBRICKS</Mono>
      <rect x={202} y={614} width={696} height={10} rx={5} fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" />
      <rect x={202} y={614} width={56} height={10} rx={5} fill={EMBER} />
      <Mono x={910} y={623} size={11} fill={EMBER} weight={600}>hours to days</Mono>

      {migrationPhases.map((ph, i) => {
        const x = 1060 + migrationPhases.slice(0, i).reduce((acc, p) => acc + p.w + 6, 0);
        return (
          <Pill key={ph.name} x={x} y={578} w={ph.w} h={24} label={ph.name} fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.12)" color={GRAY_300} size={11}
            style={{ animation: "qb-chip 4s ease-in-out infinite", animationDelay: `${i}s` }} />
        );
      })}

      <T x={40} y={661} size={11} fill={GRAY_500} weight={400}>
        Illustrative migration — table set and timing depend on the client’s estate · Every record matched to an Open Data Contract Standard (ODCS) contract, human in the loop, full lineage · Applies equally to Databricks, Fabric and Snowflake targets
      </T>
    </Frame>
  );
}

/* ───────────────────────── Pipeline ───────────────────────── */

const stageChips = {
  ingest: ["Schema profiling", "Incremental CDC", "Contract registration"],
  pipeline: ["SQL transformation", "Quality validation", "Lineage capture"],
  bi: ["Power BI", "Tableau", "Agentic Crew"],
};

const perf = [
  { x: 720, title: "INGESTION PERFORMANCE", stats: [["1BN records · 150 s", "ingested end-to-end"], ["Market leading", "on par with ClickHouse"]] },
  { x: 985, title: "PIPELINE PERFORMANCE", stats: [["TPC-H SF100 · 16.5 s", "benchmarked end-to-end"], ["Market leading", "faster than DuckDB"]] },
  { x: 1250, title: "BI PERFORMANCE", stats: [["Low compute costs", "single node, no cluster"], ["Est. 99% lower*", "vs lakehouse compute"]] },
];

const platforms = ["BigQuery", "Databricks", "Fabric", "Glue", "Snowflake"];

function ChipStack({ x, y, items, dark = false }: { x: number; y: number; items: string[]; dark?: boolean }) {
  return (
    <g>
      {items.map((label, i) => (
        <g key={label}>
          <rect x={x} y={y + i * 30} width={180} height={24} rx={6} fill={dark ? "rgba(255,255,255,0.09)" : "rgba(255,255,255,0.06)"} />
          <T x={x + 10} y={y + i * 30 + 16} size={12}>{label}</T>
        </g>
      ))}
    </g>
  );
}

export function PipelineGraphic() {
  const id = useId().replace(/:/g, "");
  const inPaths = [148, 244, 340, 436, 532].map((y) => `M 320 ${y} C 380 ${y}, 400 300, 470 300`);
  const hops: Record<string, string> = {
    s1: "M 650 300 L 720 300",
    s2: "M 940 300 L 985 300",
    s3: "M 1470 300 L 1540 300",
    s4: "M 1205 300 L 1250 300",
    o1: "M 1640 300 C 1665 300, 1665 225, 1690 225",
    o2: "M 1640 300 C 1665 300, 1665 430, 1690 430",
  };
  const hopDots: [string, number][] = [["s1", 0.2], ["s1", 0.9], ["s2", 0.5], ["s2", 1.2], ["s2", 0.8], ["s4", 0.4], ["s4", 1.1], ["s3", 0.3], ["s3", 1.0], ["o1", 0.6], ["o1", 1.3], ["o2", 0.9]];

  return (
    <Frame id={id} w={1800} h={680} label="QBricks data flow: from systems of record, through the data lake and the EOS SQL engine, to governed extraction">
      <Header eyebrow="QBRICKS · DATA FLOW" sub="From systems of record to governed extraction." dividerX={216} />

      <g fill="none" stroke={LINE} strokeWidth={2}>
        {inPaths.map((d, i) => <path key={`i${i}`} id={`${id}-i${i}`} d={d} />)}
        {Object.entries(hops).map(([k, d]) => <path key={k} id={`${id}-${k}`} d={d} />)}
      </g>
      <g>
        {inPaths.map((_, i) => <Dot key={`di${i}`} path={`${id}-i${i}`} dur={2.5} begin={i * 0.5} />)}
        {hopDots.map(([k, b], i) => <Dot key={`dh${i}`} path={`${id}-${k}`} dur={1.4} begin={b} />)}
      </g>

      <SourceRows label="SYSTEMS OF RECORD" rows={sources} right="→ lake" />

      {/* Data lake */}
      <Mono x={470} y={100} size={11}>DATA LAKE</Mono>
      <Card x={470} y={210} w={180} h={180} r={12} variant="accent" />
      <g transform="translate(528 232)" fill="none" stroke={EMBER} strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx={32} cy={12} rx={24} ry={7} />
        <path d="M8 12v12c0 3.9 10.7 7 24 7s24-3.1 24-7V12" />
        <path d="M8 24v12c0 3.9 10.7 7 24 7s24-3.1 24-7V24" />
        <path d="M4 46c4 2.5 8 2.5 12 0s8-2.5 12 0 8 2.5 12 0 8-2.5 12 0 8 2.5 12 0" style={{ animation: "qb-wave 2.4s ease-in-out infinite" }} />
      </g>
      <T x={560} y={320} size={16} weight={700} anchor="middle">Raw landing</T>
      <Mono x={560} y={344} size={10} fill={EMBER} anchor="middle">OBJECT STORAGE</Mono>

      {/* Processing panel */}
      <Card x={704} y={124} w={782} h={466} r={16} variant="panel" />
      <Mono x={720} y={100} size={11}>QBRICKS · PROCESSING</Mono>
      <image href="/assets/QBricks-icon.png" x={720} y={136} width={18} height={18} />
      <T x={746} y={150} size={13} weight={700}>QBricks</T>
      <Mono x={816} y={150} size={10}>· SINGLE NODE · ONE RIGHT-SIZED VM</Mono>

      {/* Stage 01 */}
      <Card x={720} y={170} w={220} h={260} r={12} style={{ animation: "qb-stage 4s ease-in-out infinite" }} />
      <Mono x={740} y={200} size={10} fill={EMBER}>STAGE 01</Mono>
      <T x={740} y={228} size={18} weight={700}>Ingestion</T>
      <T x={740} y={251} size={12} fill={GRAY_400} weight={400}>Profile, register and land</T>
      <T x={740} y={268} size={12} fill={GRAY_400} weight={400}>sources under a data contract.</T>
      <ChipStack x={740} y={326} items={stageChips.ingest} />

      {/* Stage 02 */}
      <Card x={985} y={170} w={220} h={260} r={12} variant="hot" style={{ animation: "qb-pulse 2.4s ease-out infinite" }} />
      <Mono x={1005} y={200} size={10} fill={GRAY_400}>STAGE 02</Mono>
      <image href="/assets/QBricks-icon.png" x={1157} y={186} width={26} height={26} />
      <T x={1005} y={228} size={18} weight={700}>Pipeline</T>
      <T x={1005} y={251} size={12} fill={GRAY_300} weight={400}>Transform, validate and govern</T>
      <T x={1005} y={268} size={12} fill={GRAY_300} weight={400}>on the EOS SQL engine.</T>
      <ChipStack x={1005} y={300} items={stageChips.pipeline} dark />
      <Mono x={1005} y={414} size={9} fill={GRAY_400}>SQL PROMPT · SINGLE NODE</Mono>

      {/* Stage 03 */}
      <Card x={1250} y={170} w={220} h={260} r={12} style={{ animation: "qb-stage 4s ease-in-out infinite", animationDelay: "2.6s" }} />
      <Mono x={1270} y={200} size={10} fill={EMBER}>STAGE 03</Mono>
      <T x={1270} y={228} size={18} weight={700}>BI</T>
      <T x={1270} y={251} size={12} fill={GRAY_400} weight={400}>Serve governed data products</T>
      <T x={1270} y={268} size={12} fill={GRAY_400} weight={400}>to analysts and agents.</T>
      <ChipStack x={1270} y={326} items={stageChips.bi} />

      {/* Performance cards */}
      {perf.map((card) => (
        <g key={card.title}>
          <Card x={card.x} y={446} w={220} h={130} r={12} variant="accent" />
          <Mono x={card.x + 16} y={470} size={10} fill={EMBER}>{card.title}</Mono>
          {card.stats.map(([value, label], i) => (
            <g key={value}>
              <Mono x={card.x + 16} y={498 + i * 40} size={13} fill={INK} weight={600}>{value}</Mono>
              <T x={card.x + 16} y={514 + i * 40} size={11} fill={GRAY_400} weight={400}>{label}</T>
            </g>
          ))}
        </g>
      ))}

      {/* EOS bar */}
      <Card x={704} y={598} w={782} h={40} r={10} variant="hot" />
      <T x={720} y={623} size={14} weight={700}>EOS · SQL Data Engine</T>
      <Mono x={1470} y={623} size={10} fill={GRAY_400} anchor="end">END TO END · NON-SPARK</Mono>

      {/* Extraction */}
      <Mono x={1540} y={100} size={11}>EXTRACTION · PYTHON SDK</Mono>
      <Card x={1540} y={250} w={100} h={100} r={12} variant="accent" />
      <Mono x={1590} y={288} size={10} fill={EMBER} anchor="middle">04</Mono>
      <T x={1590} y={310} size={14} weight={700} anchor="middle">Python SDK</T>

      <Card x={1690} y={130} w={100} h={190} r={12} />
      <Mono x={1702} y={150} size={9}>PLATFORMS</Mono>
      {platforms.map((p, i) => (
        <g key={p}>
          <rect x={1702} y={160 + i * 30} width={76} height={22} rx={5} fill="rgba(255,255,255,0.06)" />
          <T x={1710} y={175 + i * 30} size={11}>{p}</T>
        </g>
      ))}

      <Card x={1690} y={380} w={100} h={100} r={12} />
      <Mono x={1702} y={400} size={9}>USERS</Mono>
      <T x={1702} y={424} size={12}>Business users</T>
      <T x={1702} y={446} size={11} fill={GRAY_400} weight={400}>Data science</T>
      <T x={1702} y={462} size={11} fill={GRAY_400} weight={400}>teams</T>

      <T x={40} y={648} size={11} fill={GRAY_500} weight={400}>Illustrative flow — source set depends on the client’s estate · Ingestion, pipeline and extraction all run on one right-sized VM</T>
      <T x={40} y={664} size={11} fill={GRAY_500} weight={400}>Data contracts (ODCS) attached at ingestion and enforced through extraction · *Est. 99% compute-cost saving exc. gain share</T>
    </Frame>
  );
}

/* ───────────────────────── Routing ───────────────────────── */

const jobs = ["Single-notebook ETL job", "Daily Delta aggregation", "SQL transformation", "Unity Catalog table query", "Petabyte-scale Spark job", "Single-notebook ETL job"];

const routingChips = [
  { label: "Data Contracts", w: 88 },
  { label: "Data Products", w: 84 },
  { label: "Ontologies", w: 68 },
  { label: "Lineage", w: 54 },
  { label: "Agentic Crew", w: 82 },
];

const reasons = [
  { name: "small scan", w: 88, delay: 0 },
  { name: "simple aggregate", w: 124, delay: 0.5 },
  { name: "large join", w: 84, delay: 1.5 },
  { name: "streaming / ML", w: 110, delay: 2 },
];

export function RoutingGraphic() {
  const id = useId().replace(/:/g, "");
  const inPaths = [148, 244, 340, 436, 532].map((y) => `M 320 ${y} C 400 ${y}, 420 340, 500 340`);

  return (
    <Frame id={id} w={1400} h={680} label="QBricks workload routing: data lands in the lakehouse, QBricks runs the workload on one right-sized node and returns governed data products">
      <Header eyebrow="QBRICKS · WORKLOAD ROUTING" sub="Data lands in the lakehouse. QBricks runs the workload." dividerX={274} />

      <g fill="none" stroke={LINE} strokeWidth={2}>
        {inPaths.map((d, i) => <path key={`i${i}`} id={`${id}-i${i}`} d={d} />)}
        <path id={`${id}-out`} d="M 700 340 C 790 340, 800 210, 880 210" />
        <path d="M 700 340 C 790 340, 800 500, 880 500" strokeDasharray="4 8" strokeLinecap="round" style={{ animation: "qb-dash 1.6s linear infinite" }} />
        <path id={`${id}-ret`} d="M 880 140 C 780 140, 700 160, 640 250" />
        <path id={`${id}-sdk`} d="M 1160 210 L 1220 210" />
        <path d="M 1160 500 L 1220 500" strokeDasharray="4 8" strokeLinecap="round" style={{ animation: "qb-dash 1.6s linear infinite" }} />
      </g>
      <Mono x={860} y={122} size={9} fill={EMBER} anchor="end">GOVERNED DATA PRODUCTS · BACK TO LANDING ZONE · FOR DOWNSTREAM CONSUMPTION</Mono>
      <Mono x={722} y={470} size={11}>OPTION 02 · 0%</Mono>
      <g>
        {inPaths.map((_, i) => <Dot key={`di${i}`} path={`${id}-i${i}`} dur={2.5} begin={i * 0.5} />)}
        {[0.3, 1.1, 1.9].map((b) => <Dot key={`o${b}`} path={`${id}-out`} dur={2.5} begin={b} />)}
        {[0.7, 1.5].map((b) => <Dot key={`r${b}`} path={`${id}-ret`} dur={2.5} begin={b} />)}
        {[0, 0.6].map((b) => <Dot key={`s${b}`} path={`${id}-sdk`} dur={2.5} begin={b} />)}
      </g>

      <SourceRows label="SYSTEMS OF RECORD" rows={sources} right="→ lakehouse" />

      {/* Lakehouse */}
      <Card x={500} y={250} w={200} h={180} r={12} />
      <Mono x={600} y={282} size={10} anchor="middle">THE LAKEHOUSE</Mono>
      <T x={600} y={308} size={16} weight={700} anchor="middle">Governed landing zone</T>
      <Pill x={528} y={330} w={70} label="Databricks" />
      <Pill x={604} y={330} w={68} label="Snowflake" />
      <Pill x={547} y={356} w={50} label="Fabric" />
      <Pill x={603} y={356} w={50} label="Oracle" />

      {/* Incoming workload ticker */}
      <Card x={500} y={445} w={200} h={66} />
      <Mono x={514} y={465} size={10}>INCOMING WORKLOAD</Mono>
      <clipPath id={`${id}-tick`}><rect x={514} y={473} width={176} height={28} /></clipPath>
      <g clipPath={`url(#${id}-tick)`}>
        <g style={{ animation: "qb-tick 12s ease-in-out infinite" }}>
          {jobs.map((job, i) => (
            <T key={`${job}-${i}`} x={514} y={492 + i * 28} size={12.5}>{job}</T>
          ))}
        </g>
      </g>

      {/* Option 01 · QBricks routing */}
      <Card x={868} y={60} w={304} h={302} r={16} variant="panel" />
      <rect x={868} y={60} width={304} height={302} rx={16} fill="none" stroke="rgba(255,58,38,0.55)" strokeDasharray="6 6" />
      <Mono x={1020} y={82} size={10} fill={EMBER} anchor="middle">SINGLE NODE · ONE RIGHT-SIZED VM</Mono>
      <Card x={880} y={90} w={280} h={260} r={12} variant="hot" style={{ animation: "qb-pulse 2.4s ease-out infinite" }} />
      <image href="/assets/QBricks-icon.png" x={900} y={108} width={34} height={34} />
      <Mono x={944} y={121} size={10} fill={GRAY_400}>OPTION 01</Mono>
      <T x={944} y={140} size={17} weight={700}>QBricks routing</T>
      <Pill x={1080} y={114} w={60} h={20} label="ROUTED" fill={BRAND} size={9} mono />
      {[["Share of workloads", "100%", INK], ["Latency", "Lower", INK], ["Est. compute cost", "99% lower*", GREEN]].map(([k, v, c], i) => (
        <g key={k}>
          <T x={900} y={180 + i * 20} size={13} fill={GRAY_400} weight={400}>{k}</T>
          <Mono x={1140} y={180 + i * 20} size={12} fill={c} anchor="end" weight={c === GREEN ? 700 : 500}>{v}</Mono>
        </g>
      ))}
      {routingChips.map((chip, i) => {
        const row = i < 3 ? 0 : 1;
        const x = 900 + routingChips.slice(row === 0 ? 0 : 3, i).reduce((acc, c) => acc + c.w + 6, 0);
        return (
          <g key={chip.label}>
            <rect x={x} y={244 + row * 24} width={chip.w} height={18} rx={4} fill="rgba(255,255,255,0.1)" />
            <T x={x + chip.w / 2} y={256.5 + row * 24} size={10} fill="#e4e4e7" anchor="middle">{chip.label}</T>
          </g>
        );
      })}
      <Mono x={900} y={316} size={9.5} fill={GRAY_400}>EOS SQL ENGINE · NON-SPARK</Mono>
      <Mono x={900} y={332} size={9.5} fill={GRAY_400}>CATALOGUE OF CATALOGUES</Mono>

      {/* Option 02 · Lakehouse routing */}
      <Card x={880} y={390} w={280} h={220} r={12} />
      <Mono x={900} y={416} size={10}>OPTION 02</Mono>
      <T x={900} y={436} size={17} weight={700} fill={GRAY_300}>Lakehouse routing</T>
      <Pill x={1070} y={410} w={70} h={20} label="FALLBACK" fill="none" stroke="rgba(255,255,255,0.15)" color={GRAY_400} size={9} mono />
      <T x={900} y={464} size={12} fill={GRAY_500} weight={400}>Spark clusters inside the lakehouse.</T>
      <T x={900} y={480} size={12} fill={GRAY_500} weight={400}>Memory-heavy, metered per step.</T>
      {[["Share of workloads", "0%"], ["Latency", "Baseline"], ["Est. compute cost", "Baseline"]].map(([k, v], i) => (
        <g key={k}>
          <T x={900} y={510 + i * 20} size={13} fill={GRAY_400} weight={400}>{k}</T>
          <Mono x={1140} y={510 + i * 20} size={12} fill={GRAY_500} anchor="end">{v}</Mono>
        </g>
      ))}

      {/* Right-hand consumers */}
      <Card x={1220} y={130} w={150} h={160} r={12} variant="accent" />
      <Mono x={1236} y={156} size={10} fill={EMBER}>FOR DATA SCIENTISTS</Mono>
      <T x={1236} y={180} size={15} weight={700}>QBricks</T>
      <T x={1236} y={198} size={15} weight={700}>Python SDK</T>
      {["Governed data", "products in a few", "lines of Python.", "No pipeline build."].map((line, i) => (
        <T key={line} x={1236} y={222 + i * 16} size={11} fill={GRAY_400} weight={400}>{line}</T>
      ))}

      <Card x={1220} y={420} w={150} h={160} r={12} />
      <Mono x={1236} y={446} size={10}>FROM THE LAKEHOUSE</Mono>
      <T x={1236} y={470} size={15} weight={700} fill={GRAY_300}>Lakehouse data</T>
      <T x={1236} y={488} size={15} weight={700} fill={GRAY_300}>products</T>
      {["Governed data", "products from", "the lakehouse."].map((line, i) => (
        <T key={line} x={1236} y={512 + i * 16} size={11} fill={GRAY_500} weight={400}>{line}</T>
      ))}

      {/* Routing reasons */}
      <Mono x={40} y={617} size={11}>ROUTING REASON</Mono>
      {reasons.map((r, i) => {
        const x = 170 + reasons.slice(0, i).reduce((acc, c) => acc + c.w + 10, 0);
        return (
          <Pill key={r.name} x={x} y={600} w={r.w} h={26} label={r.name} fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.12)" color={GRAY_300} size={12}
            style={{ animation: "qb-chip 2.5s ease-in-out infinite", animationDelay: `${r.delay}s` }} />
        );
      })}

      <T x={40} y={661} size={10.5} fill={GRAY_500} weight={400}>
        Illustrative routing — workload share depends on the client’s mix · *99% compute-cost saving exc. gain share · Applies to all lakehouse infrastructure built on Iceberg and Delta, incl. Databricks, Fabric and Snowflake
      </T>
    </Frame>
  );
}
