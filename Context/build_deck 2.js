const pptxgen = require("pptxgenjs");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const sharp = require("sharp");
const path = require("path");
const fa = require("react-icons/fa");

const DIR = __dirname; // run from deckbuild where assets are copied
const ASSET = (f) => path.join(process.env.ASSETDIR || DIR, f);

// ---------- Brand palette (from qbricks.ai) ----------
const C = {
  black: "000000",
  panel: "0E0E10",
  panel2: "16161A",
  card: "141417",
  ember: "FF3A26",
  brand: "E8200F",
  emberLt: "FF6A5C",
  white: "FFFFFF",
  text: "E4E4E7",
  muted: "A1A1AA",
  dim: "71717A",
  border: "2A2A30",
};
const FONT = "Plus Jakarta Sans";
const FONTB = "Plus Jakarta Sans"; // headers same family

const W = 13.333, H = 7.5;

// ---------- Icon rasteriser ----------
async function icon(Comp, color = "FF3A26", size = 256) {
  const svg = ReactDOMServer.renderToStaticMarkup(
    React.createElement(Comp, { color: "#" + color, size: String(size) })
  );
  const png = await sharp(Buffer.from(svg)).png().toBuffer();
  return "image/png;base64," + png.toString("base64");
}

const shadow = () => ({ type: "outer", color: "000000", blur: 14, offset: 5, angle: 90, opacity: 0.45 });
const glow = () => ({ type: "outer", color: "E8200F", blur: 18, offset: 0, angle: 90, opacity: 0.45 });

let pres = new pptxgen();
pres.defineLayout({ name: "W", width: W, height: H });
pres.layout = "W";
pres.author = "QBricks";
pres.title = "QBricks — AI-enabled Metadata Management";

// ---------- helpers ----------
function bg(slide, color = C.black) {
  slide.background = { color };
}
function eyebrow(slide, text, x, y, w) {
  slide.addText(text.toUpperCase(), {
    x, y, w, h: 0.3, margin: 0, fontFace: FONT, fontSize: 11, bold: true,
    color: C.ember, charSpacing: 3, align: "left", valign: "middle",
  });
}
function footer(slide, idx) {
  slide.addText([
    { text: "QBricks", options: { color: C.muted, bold: true } },
    { text: "   ·   AI-enabled metadata management   ·   sales@infinium.consulting", options: { color: C.dim } },
  ], { x: 0.6, y: H - 0.5, w: 9, h: 0.3, margin: 0, fontFace: FONT, fontSize: 9, align: "left", valign: "middle" });
  slide.addText("Strictly Confidential", { x: W - 3.6, y: H - 0.5, w: 1.6, h: 0.3, margin: 0, fontFace: FONT, fontSize: 8, color: C.dim, align: "right", valign: "middle" });
  if (idx != null) slide.addText(String(idx).padStart(2, "0"), { x: W - 1.0, y: H - 0.5, w: 0.5, h: 0.3, margin: 0, fontFace: FONT, fontSize: 9, color: C.dim, align: "right", valign: "middle" });
}
// small Q wordmark top-left for content slides
function brandmark(slide) {
  slide.addImage({ path: ASSET("qbricks-logo.png"), x: 0.6, y: 0.42, w: 1.25, h: 0.564 });
}
function card(slide, x, y, w, h, fill = C.card) {
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y, w, h, rectRadius: 0.09, fill: { color: fill }, line: { color: C.border, width: 1 }, shadow: shadow() });
}
function iconChip(slide, data, x, y, d = 0.62, ring = C.ember) {
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y, w: d, h: d, rectRadius: 0.1, fill: { color: "1C0D0B" }, line: { color: ring, width: 1 } });
  const p = d * 0.26;
  slide.addImage({ data, x: x + p, y: y + p, w: d - 2 * p, h: d - 2 * p });
}

async function makeBg(file, { flop = false, gradient = false } = {}) {
  let p = sharp(ASSET(file)).resize(1600, 900, { fit: "cover" });
  if (flop) p = p.flop();
  p = p.modulate({ brightness: gradient ? 0.6 : 0.52 });
  const svg = gradient
    ? `<svg width="1600" height="900" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="black" stop-opacity="0.8"/><stop offset="0.55" stop-color="black" stop-opacity="0.4"/><stop offset="1" stop-color="black" stop-opacity="0.22"/></linearGradient></defs><rect width="1600" height="900" fill="url(#g)"/></svg>`
    : `<svg width="1600" height="900" xmlns="http://www.w3.org/2000/svg"><rect width="1600" height="900" fill="black" fill-opacity="0.4"/></svg>`;
  const ov = await sharp(Buffer.from(svg)).png().toBuffer();
  const out = await p.composite([{ input: ov, top: 0, left: 0 }]).png().toBuffer();
  return "image/png;base64," + out.toString("base64");
}

async function build() {
  // pre-render icons
  const I = {};
  const map = {
    bolt: fa.FaBolt, shield: fa.FaShieldAlt, graph: fa.FaProjectDiagram, target: fa.FaBullseye,
    layers: fa.FaLayerGroup, users: fa.FaUsers, desktop: fa.FaRegWindowMaximize,
    lock: fa.FaLock, robot: fa.FaRobot, cloud: fa.FaCloud,
    aml: fa.FaSearchDollar, kyc: fa.FaIdCard, fraud: fa.FaFingerprint, mdm: fa.FaDatabase, risk: fa.FaChartLine,
    contract: fa.FaFileContract, cubes: fa.FaCubes, rocket: fa.FaRocket, cog: fa.FaCogs, audit: fa.FaClipboardCheck,
    check: fa.FaCheck, x: fa.FaTimes, arrow: fa.FaArrowRight, mail: fa.FaEnvelope, globe: fa.FaGlobe,
    warn: fa.FaExclamationTriangle, brain: fa.FaBrain, sitemap: fa.FaSitemap,
  };
  for (const k of Object.keys(map)) I[k] = await icon(map[k]);
  const Iw = {}; // white variants
  for (const k of ["check","x","bolt","target","lock","robot","cloud","contract","cubes","rocket","cog","audit","aml","kyc","fraud","mdm","risk","graph","layers","users","desktop","shield","arrow","mail","globe"]) Iw[k] = await icon(map[k], "FFFFFF");
  const Idim = {}; for (const k of ["x","warn"]) Idim[k] = await icon(map[k], "71717A");

  // ============================================================= 1. TITLE
  {
    const s = pres.addSlide(); bg(s);
    s.addImage({ path: ASSET("bricks-hero.png"), x: 0, y: 0, w: W, h: H, sizing: { type: "cover", w: W, h: H } });
    // darken overlays for legibility
    s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: W, h: H, fill: { color: "000000", transparency: 35 } });
    s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 8.4, h: H, fill: { color: "000000", transparency: 12 } });
    s.addImage({ path: ASSET("qbricks-logo.png"), x: 0.75, y: 0.7, w: 2.0, h: 0.902 });
    s.addText("AI-ENABLED METADATA MANAGEMENT  ·  FINANCIAL SERVICES", { x: 0.8, y: 2.55, w: 9, h: 0.3, margin: 0, fontFace: FONT, fontSize: 12, bold: true, color: C.emberLt, charSpacing: 2 });
    s.addText([
      { text: "Your AI is only as trustworthy\n", options: { color: C.white } },
      { text: "as the data beneath it.", options: { color: C.white } },
    ], { x: 0.78, y: 2.95, w: 9.6, h: 1.9, margin: 0, fontFace: FONTB, fontSize: 44, bold: true, lineSpacingMultiple: 1.02 });
    s.addText("The governed, secure metadata platform that turns ungoverned lakehouse sprawl into auditable, AI-ready data — deployed in hours, not weeks.", { x: 0.8, y: 4.95, w: 8.7, h: 0.9, margin: 0, fontFace: FONT, fontSize: 15, color: C.text, lineSpacingMultiple: 1.25 });
    s.addText("qbricks.ai   ·   sales@infinium.consulting", { x: 0.8, y: 6.55, w: 8, h: 0.3, margin: 0, fontFace: FONT, fontSize: 11, color: C.muted });
    s.addText("Strictly Confidential", { x: W - 3.3, y: 6.55, w: 2.5, h: 0.3, margin: 0, fontFace: FONT, fontSize: 9, color: C.muted, align: "right" });
  }

  // ============================================================= 2. THE PROBLEM (MIT)
  {
    const s = pres.addSlide(); bg(s); brandmark(s);
    eyebrow(s, "The problem", 0.6, 1.35, 6);
    s.addText("Everyone is racing to deploy AI.\nMost of the data underneath isn't ready.", { x: 0.6, y: 1.65, w: 8.2, h: 1.2, margin: 0, fontFace: FONTB, fontSize: 27, bold: true, color: C.white, lineSpacingMultiple: 1.05 });
    s.addText([
      { text: "A 2025 MIT report found that around ", options: { color: C.text } },
      { text: "95% of AI-related use cases were failing", options: { color: C.emberLt, bold: true } },
      { text: " — and the primary cause was not the models. It was poor data quality and the absence of real metadata management.", options: { color: C.text } },
    ], { x: 0.6, y: 3.05, w: 7.2, h: 1.2, margin: 0, fontFace: FONT, fontSize: 15, lineSpacingMultiple: 1.3 });
    s.addText("Vendors promise “one platform”. Consultancies promise to “engineer your data fabric”. Yet the underlying problem — ungoverned, poorly understood data — is rarely fixed. The usual answer is to throw money and people at it. It doesn't hold.", { x: 0.6, y: 4.35, w: 7.2, h: 1.5, margin: 0, fontFace: FONT, fontSize: 13.5, color: C.muted, lineSpacingMultiple: 1.3 });
    // big stat panel right
    card(s, 8.7, 1.65, 4.0, 4.45, C.panel2);
    iconChip(s, I.warn, 9.1, 2.0, 0.66);
    s.addText("95%", { x: 8.7, y: 2.75, w: 4.0, h: 1.3, margin: 0, fontFace: FONTB, fontSize: 88, bold: true, color: C.ember, align: "center" });
    s.addText("of AI use cases are failing", { x: 8.9, y: 4.05, w: 3.6, h: 0.4, margin: 0, fontFace: FONT, fontSize: 15, bold: true, color: C.white, align: "center" });
    s.addText("Not because of the models —\nbecause of the data beneath them.", { x: 8.9, y: 4.55, w: 3.6, h: 0.8, margin: 0, fontFace: FONT, fontSize: 12, color: C.muted, align: "center", lineSpacingMultiple: 1.25 });
    s.addText("Source: 2025 MIT report", { x: 8.9, y: 5.6, w: 3.6, h: 0.3, margin: 0, fontFace: FONT, fontSize: 9.5, italic: true, color: C.dim, align: "center" });
    footer(s, 2);
  }

  // ============================================================= 3. THE DATA SWAMP
  {
    const s = pres.addSlide(); bg(s); brandmark(s);
    eyebrow(s, "The failure mode", 0.6, 1.35, 6);
    s.addText("Migration to a lakehouse can make it worse", { x: 0.6, y: 1.65, w: 11, h: 0.6, margin: 0, fontFace: FONTB, fontSize: 27, bold: true, color: C.white });
    s.addText("Software “unifies” the data, but governance quietly breaks. The lakehouse becomes a data swamp — technically unified, practically ungovernable.", { x: 0.6, y: 2.35, w: 11.5, h: 0.6, margin: 0, fontFace: FONT, fontSize: 14, color: C.muted, lineSpacingMultiple: 1.25 });
    const items = [
      [I.cubes, "Hundreds of ungoverned notebooks", "Logic sprawls across files no one fully owns or can audit."],
      [I.sitemap, "Governance lost at the schema level", "Control erodes the moment data scales beyond a few tables."],
      [I.graph, "No reliable lineage or audit trail", "You can't show a regulator how a number was produced."],
      [I.warn, "AI initiatives stall on poor data", "Cost and risk rise with every migration — the swamp deepens."],
    ];
    const cw = 2.92, gap = 0.21, x0 = 0.6, y0 = 3.25, ch = 2.5;
    items.forEach(([ic, t, d], i) => {
      const x = x0 + i * (cw + gap);
      card(s, x, y0, cw, ch, C.card);
      iconChip(s, ic, x + 0.28, y0 + 0.28, 0.6);
      s.addText(t, { x: x + 0.28, y: y0 + 1.0, w: cw - 0.56, h: 0.7, margin: 0, fontFace: FONTB, fontSize: 14, bold: true, color: C.white, lineSpacingMultiple: 1.05 });
      s.addText(d, { x: x + 0.28, y: y0 + 1.72, w: cw - 0.56, h: 0.7, margin: 0, fontFace: FONT, fontSize: 11.5, color: C.muted, lineSpacingMultiple: 1.2 });
    });
    s.addText([
      { text: "QBricks fixes the layer everyone else skips — ", options: { color: C.text } },
      { text: "the governed metadata foundation", options: { color: C.emberLt, bold: true } },
      { text: " that makes AI, analytics and regulatory reporting trustworthy.", options: { color: C.text } },
    ], { x: 0.6, y: 6.05, w: 11.6, h: 0.6, margin: 0, fontFace: FONT, fontSize: 14, align: "center", valign: "middle" });
    footer(s, 3);
  }

  // ============================================================= 4. BEFORE / AFTER
  {
    const s = pres.addSlide(); bg(s); brandmark(s);
    eyebrow(s, "The shift", 0.6, 1.35, 6);
    s.addText("From data swamp to governed foundation", { x: 0.6, y: 1.65, w: 11, h: 0.6, margin: 0, fontFace: FONTB, fontSize: 27, bold: true, color: C.white });
    const colY = 2.55, colH = 4.0, colW = 5.85;
    // before
    card(s, 0.6, colY, colW, colH, C.panel);
    s.addText("WITHOUT QBRICKS", { x: 0.95, y: colY + 0.3, w: colW - 0.7, h: 0.35, margin: 0, fontFace: FONT, fontSize: 12, bold: true, color: C.dim, charSpacing: 2 });
    const before = [
      "Hundreds of ungoverned notebooks",
      "Governance lost at the schema level",
      "No reliable lineage or audit trail",
      "AI initiatives stall on poor data quality",
      "Cost and risk rise with every migration",
    ];
    before.forEach((t, i) => {
      const yy = colY + 0.95 + i * 0.6;
      s.addImage({ data: Idim.x, x: 0.95, y: yy + 0.03, w: 0.22, h: 0.22 });
      s.addText(t, { x: 1.3, y: yy - 0.04, w: colW - 0.85, h: 0.5, margin: 0, fontFace: FONT, fontSize: 13, color: C.muted, valign: "middle" });
    });
    // after
    const ax = 0.6 + colW + 0.45;
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: ax, y: colY, w: colW, h: colH, rectRadius: 0.09, fill: { color: "17100E" }, line: { color: C.brand, width: 1.4 }, shadow: glow() });
    s.addText("WITH QBRICKS", { x: ax + 0.35, y: colY + 0.3, w: colW - 0.7, h: 0.35, margin: 0, fontFace: FONT, fontSize: 12, bold: true, color: C.emberLt, charSpacing: 2 });
    const after = [
      "Data Contracts & Data Products govern every workflow",
      "Metadata managed and largely automated",
      "Decision lineage tracked and fully auditable",
      "95% fewer data issues; AI built on trusted data",
      "Deployed in hours, at ~70% lower cost",
    ];
    after.forEach((t, i) => {
      const yy = colY + 0.95 + i * 0.6;
      s.addImage({ data: I.check, x: ax + 0.35, y: yy + 0.03, w: 0.22, h: 0.22 });
      s.addText(t, { x: ax + 0.7, y: yy - 0.04, w: colW - 0.95, h: 0.5, margin: 0, fontFace: FONT, fontSize: 13, color: C.text, valign: "middle" });
    });
    footer(s, 4);
  }

  // ============================================================= 5. WHAT QBRICKS IS — 3 pillars
  {
    const s = pres.addSlide(); bg(s); brandmark(s);
    eyebrow(s, "What QBricks is", 0.6, 1.35, 6);
    s.addText("A sophisticated, governed, secure metadata platform", { x: 0.6, y: 1.65, w: 12, h: 0.6, margin: 0, fontFace: FONTB, fontSize: 26, bold: true, color: C.white });
    s.addText("QBricks builds and deploys data quality and ETL workflows through Data Contracts and Data Products, and automates much of metadata management. Enterprise-grade, cloud-agnostic and agentic-enabled — with the human always in the loop, and everything auditable.", { x: 0.6, y: 2.32, w: 12.1, h: 0.85, margin: 0, fontFace: FONT, fontSize: 13.5, color: C.muted, lineSpacingMultiple: 1.3 });
    const pillars = [
      [I.lock, "Governed by design", "Data Contracts and Data Products make every workflow explicit, owned and auditable. Governance is built in, not bolted on."],
      [I.robot, "Automated & agentic", "Agents handle the heavy lifting of metadata management and improve continuously, while humans stay in control and every decision is traceable."],
      [I.cloud, "Secure & cloud-agnostic", "Databricks- and Microsoft-level security, across whichever platform you run."],
    ];
    const cw = 3.92, gap = 0.27, x0 = 0.6, y0 = 3.45, ch = 3.0;
    pillars.forEach(([ic, t, d], i) => {
      const x = x0 + i * (cw + gap);
      card(s, x, y0, cw, ch, C.card);
      iconChip(s, ic, x + 0.35, y0 + 0.38, 0.74);
      s.addText(t, { x: x + 0.35, y: y0 + 1.32, w: cw - 0.7, h: 0.5, margin: 0, fontFace: FONTB, fontSize: 17, bold: true, color: C.white });
      s.addText(d, { x: x + 0.35, y: y0 + 1.85, w: cw - 0.7, h: 1.0, margin: 0, fontFace: FONT, fontSize: 12.5, color: C.muted, lineSpacingMultiple: 1.28 });
    });
    footer(s, 5);
  }

  // ============================================================= 6. HOW IT WORKS — 5 step
  {
    const s = pres.addSlide(); bg(s); brandmark(s);
    eyebrow(s, "How it works", 0.6, 1.35, 6);
    s.addText("Define, deploy and govern — in one flow", { x: 0.6, y: 1.65, w: 11, h: 0.6, margin: 0, fontFace: FONTB, fontSize: 27, bold: true, color: C.white });
    const steps = [
      [I.contract, "Define", "Express data quality & ETL logic as Data Contracts — explicit, owned, versioned."],
      [I.cubes, "Compose", "Assemble contracts into Data Products the business can find, understand and trust."],
      [I.rocket, "Deploy", "A single file deploys infrastructure and workloads — no sprawl, live in hours."],
      [I.cog, "Automate", "Agents take on routine metadata work and improve continuously — human in the loop."],
      [I.audit, "Audit", "Every decision and its lineage tracked. The entire process is auditable, end to end."],
    ];
    const cw = 2.32, gap = 0.18, x0 = 0.6, y0 = 2.95, ch = 3.05;
    steps.forEach(([ic, t, d], i) => {
      const x = x0 + i * (cw + gap);
      card(s, x, y0, cw, ch, C.card);
      s.addText(String(i + 1), { x: x + 0.26, y: y0 + 0.22, w: 0.8, h: 0.6, margin: 0, fontFace: FONTB, fontSize: 30, bold: true, color: C.ember });
      iconChip(s, ic, x + cw - 0.86, y0 + 0.28, 0.56);
      s.addText(t, { x: x + 0.26, y: y0 + 1.0, w: cw - 0.5, h: 0.4, margin: 0, fontFace: FONTB, fontSize: 16, bold: true, color: C.white });
      s.addText(d, { x: x + 0.26, y: y0 + 1.5, w: cw - 0.5, h: 1.4, margin: 0, fontFace: FONT, fontSize: 11.5, color: C.muted, lineSpacingMultiple: 1.25 });
      if (i < steps.length - 1) s.addImage({ data: I.arrow, x: x + cw + 0.005, y: y0 + ch / 2 - 0.1, w: 0.17, h: 0.17 });
    });
    footer(s, 6);
  }

  // ============================================================= 7. CAPABILITIES (outcome-led)
  {
    const s = pres.addSlide(); bg(s); brandmark(s);
    eyebrow(s, "Capabilities", 0.6, 1.35, 6);
    s.addText("Built for the realities of a regulated bank", { x: 0.6, y: 1.65, w: 11, h: 0.6, margin: 0, fontFace: FONTB, fontSize: 27, bold: true, color: C.white });
    const caps = [
      [I.bolt, "Deploy in hours, not weeks", "Single-file deployment covers infrastructure and workloads — less sprawl, fewer errors."],
      [I.shield, "Cut data issues by 95%", "Robust ETL and data quality frameworks, governed through Data Contracts and Products."],
      [I.graph, "See and trust your data", "Ontologies and knowledge graphs structure your data for discovery, lineage and decisions."],
      [I.target, "Match with 99% accuracy", "The embedded Quantexa Trust Score assures 99% data matching accuracy."],
      [I.layers, "Simplify your lakehouse", "Seamless management of Databricks and Microsoft Fabric via contracts and products."],
      [I.users, "Break down business silos", "Knowledge alignment between decision-makers and field teams; every process auditable."],
    ];
    const cw = 3.92, gap = 0.27, rh = 1.5, rg = 0.22, x0 = 0.6, y0 = 2.6;
    caps.forEach(([ic, t, d], i) => {
      const col = i % 3, row = Math.floor(i / 3);
      const x = x0 + col * (cw + gap), y = y0 + row * (rh + rg);
      card(s, x, y, cw, rh, C.card);
      iconChip(s, ic, x + 0.26, y + 0.26, 0.56);
      s.addText(t, { x: x + 0.98, y: y + 0.22, w: cw - 1.2, h: 0.4, margin: 0, fontFace: FONTB, fontSize: 14, bold: true, color: C.white });
      s.addText(d, { x: x + 0.98, y: y + 0.62, w: cw - 1.2, h: 0.78, margin: 0, fontFace: FONT, fontSize: 11, color: C.muted, lineSpacingMultiple: 1.22 });
    });
    footer(s, 7);
  }

  // ============================================================= 8. PROOF METRICS
  {
    const s = pres.addSlide(); bg(s); brandmark(s);
    eyebrow(s, "The proof", 0.6, 1.35, 6);
    s.addText("Four numbers that change the economics of trust", { x: 0.6, y: 1.65, w: 12, h: 0.6, margin: 0, fontFace: FONTB, fontSize: 27, bold: true, color: C.white });
    const stats = [
      ["95%", "fewer data issues", "Governed contracts and quality frameworks at the source."],
      ["Hours", "to deploy, not weeks", "Single-file deployment of infrastructure and workloads."],
      ["~70%", "lower cost", "Versus manually developed and deployed workflows."],
      ["99%", "data matching accuracy", "With the embedded Quantexa Trust Score."],
    ];
    const cw = 2.95, gap = 0.2, x0 = 0.6, y0 = 2.75, ch = 3.4;
    stats.forEach(([n, l, d], i) => {
      const x = x0 + i * (cw + gap);
      card(s, x, y0, cw, ch, C.panel2);
      s.addText(n, { x: x + 0.15, y: y0 + 0.55, w: cw - 0.3, h: 1.1, margin: 0, fontFace: FONTB, fontSize: n.length > 3 ? 40 : 56, bold: true, color: C.ember, align: "center" });
      s.addText(l, { x: x + 0.2, y: y0 + 1.75, w: cw - 0.4, h: 0.5, margin: 0, fontFace: FONTB, fontSize: 14.5, bold: true, color: C.white, align: "center" });
      s.addText(d, { x: x + 0.25, y: y0 + 2.3, w: cw - 0.5, h: 0.9, margin: 0, fontFace: FONT, fontSize: 11, color: C.muted, align: "center", lineSpacingMultiple: 1.25 });
    });
    s.addText("Fully auditable, end to end — designed for environments where regulators, internal audit and risk all need to see how a decision was reached.", { x: 0.6, y: 6.35, w: 12.1, h: 0.5, margin: 0, fontFace: FONT, fontSize: 13, italic: true, color: C.muted, align: "center" });
    footer(s, 8);
  }

  // ============================================================= 9. QUANTEXA
  {
    const s = pres.addSlide(); bg(s); brandmark(s);
    eyebrow(s, "Differentiator", 0.6, 1.35, 6);
    s.addText("Embedded Quantexa Trust Score", { x: 0.6, y: 1.65, w: 8, h: 0.6, margin: 0, fontFace: FONTB, fontSize: 27, bold: true, color: C.white });
    s.addText("QBricks ingests and embeds the Quantexa Trust Score directly into your data assets and products — so entities, transactions and relationships resolve correctly, and every transformation stays auditable.", { x: 0.6, y: 2.4, w: 7.0, h: 1.2, margin: 0, fontFace: FONT, fontSize: 14.5, color: C.text, lineSpacingMultiple: 1.32 });
    const pts = [
      "99% data matching accuracy with Quantexa",
      "The backbone for AML, KYC, fraud & contextual MDM",
      "Trust scoring carried into every Data Product",
      "Defensible entity resolution the regulator can follow",
    ];
    pts.forEach((t, i) => {
      const yy = 3.85 + i * 0.62;
      s.addImage({ data: I.check, x: 0.6, y: yy + 0.04, w: 0.24, h: 0.24 });
      s.addText(t, { x: 0.98, y: yy - 0.04, w: 6.4, h: 0.5, margin: 0, fontFace: FONT, fontSize: 13.5, color: C.text, valign: "middle" });
    });
    // right stat panel
    card(s, 8.4, 2.3, 4.3, 3.9, C.panel2);
    iconChip(s, I.target, 8.8, 2.65, 0.66);
    s.addText("99%", { x: 8.4, y: 3.35, w: 4.3, h: 1.2, margin: 0, fontFace: FONTB, fontSize: 80, bold: true, color: C.ember, align: "center" });
    s.addText("data matching accuracy", { x: 8.6, y: 4.55, w: 3.9, h: 0.4, margin: 0, fontFace: FONTB, fontSize: 15, bold: true, color: C.white, align: "center" });
    s.addImage({ path: ASSET("Quantexa.png"), x: 9.75, y: 5.35, w: 1.6, h: 0.264 });
    footer(s, 9);
  }

  // ============================================================= 10. SOLUTIONS BY USE CASE
  {
    const s = pres.addSlide(); bg(s); brandmark(s);
    eyebrow(s, "Solutions", 0.6, 1.35, 6);
    s.addText("Where governed metadata creates regulatory & commercial value", { x: 0.6, y: 1.65, w: 12.2, h: 0.6, margin: 0, fontFace: FONTB, fontSize: 24, bold: true, color: C.white });
    const uc = [
      [I.aml, "AML", "Trade, retail, markets & correspondent banking — 99% matching cuts false positives and makes investigations defensible."],
      [I.kyc, "KYC / pKYC / EDD", "A reliable single customer view; Data Products keep KYC current and audit-ready."],
      [I.fraud, "Fraud & Financial Crime", "Ontologies and knowledge graphs connect signals; trust scoring sharpens entity resolution."],
      [I.mdm, "Contextual MDM", "Governed, contextual master data with lineage — a trustworthy single view for cross-sell."],
      [I.risk, "Credit & ESG Risk", "Governed, auditable data foundations with clear lineage — defensible models and reporting."],
      [I.graph, "Customer Intelligence", "Interconnected, high-accuracy data powers discovery and informed commercial decisions."],
    ];
    const cw = 3.92, gap = 0.27, rh = 1.5, rg = 0.22, x0 = 0.6, y0 = 2.55;
    uc.forEach(([ic, t, d], i) => {
      const col = i % 3, row = Math.floor(i / 3);
      const x = x0 + col * (cw + gap), y = y0 + row * (rh + rg);
      card(s, x, y, cw, rh, C.card);
      iconChip(s, ic, x + 0.26, y + 0.26, 0.56);
      s.addText(t, { x: x + 0.98, y: y + 0.24, w: cw - 1.2, h: 0.4, margin: 0, fontFace: FONTB, fontSize: 14.5, bold: true, color: C.white });
      s.addText(d, { x: x + 0.26, y: y + 0.78, w: cw - 0.52, h: 0.66, margin: 0, fontFace: FONT, fontSize: 10.5, color: C.muted, lineSpacingMultiple: 1.2 });
    });
    footer(s, 10);
  }

  // ============================================================= 11. AML DEEP DIVE
  {
    const s = pres.addSlide(); bg(s); brandmark(s);
    eyebrow(s, "Use case in focus — AML", 0.6, 1.35, 6);
    s.addText("Governed data for AML that stands up to scrutiny", { x: 0.6, y: 1.65, w: 12, h: 0.6, margin: 0, fontFace: FONTB, fontSize: 26, bold: true, color: C.white });
    const cols = [
      ["The pain", I.warn, "Alerts and investigations are only as good as the data feeding them. Poor matching and ungoverned data drive false positives, missed risk and regulatory findings."],
      ["How QBricks helps", I.lock, "Governed metadata plus the embedded Quantexa Trust Score deliver 99% matching, so entities, transactions and relationships resolve correctly — every transformation auditable."],
      ["The outcome", I.check, "Fewer false positives, defensible investigations and a lower cost to comply — across trade, retail, markets and correspondent banking AML."],
    ];
    const cw = 3.92, gap = 0.27, x0 = 0.6, y0 = 2.7, ch = 3.3;
    cols.forEach(([t, ic, d], i) => {
      const x = x0 + i * (cw + gap);
      card(s, x, y0, cw, ch, i === 1 ? "17100E" : C.card);
      if (i === 1) s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y: y0, w: cw, h: ch, rectRadius: 0.09, fill: { type: "none" }, line: { color: C.brand, width: 1.3 } });
      iconChip(s, ic, x + 0.32, y0 + 0.34, 0.62);
      s.addText(t, { x: x + 0.32, y: y0 + 1.12, w: cw - 0.64, h: 0.45, margin: 0, fontFace: FONTB, fontSize: 16, bold: true, color: i === 1 ? C.emberLt : C.white });
      s.addText(d, { x: x + 0.32, y: y0 + 1.65, w: cw - 0.64, h: 1.5, margin: 0, fontFace: FONT, fontSize: 12.5, color: C.muted, lineSpacingMultiple: 1.3 });
    });
    footer(s, 11);
  }

  // ============================================================= 12. WHY QBRICKS — competitive
  {
    const s = pres.addSlide(); bg(s); brandmark(s);
    eyebrow(s, "Why QBricks", 0.6, 1.35, 6);
    s.addText("“One platform” and “data fabric” don't fix your metadata problem", { x: 0.6, y: 1.65, w: 12.2, h: 0.6, margin: 0, fontFace: FONTB, fontSize: 23, bold: true, color: C.white });
    const head = ["", "Catalogue / governance\n(Collibra, Purview)", "Native Databricks /\nFabric tooling", "Consultancy\n“data fabric” builds", "QBricks"];
    const rows = [
      ["Fixes data quality\n& metadata at source", "Describes, doesn't fix", "Schema-level, erodes at scale", "Re-architects, problem persists", "Governs & automates the foundation"],
      ["Speed to deploy", "Long programmes", "Manual, multi-file", "Months of build", "Hours — single-file deployment"],
      ["Cost", "High licence + services", "Heavy manual effort", "High services cost", "~70% lower than manual build"],
      ["Auditability\n& lineage", "Partial", "Fragmented", "Depends on build", "End-to-end, agentic + human-in-loop"],
    ];
    const tbl = [];
    tbl.push(head.map((h, i) => ({ text: h, options: { fill: { color: i === 4 ? "2A0F0B" : "16161A" }, color: i === 4 ? C.emberLt : C.muted, bold: true, fontSize: 11, align: i === 0 ? "left" : "center", valign: "middle", fontFace: FONTB } })));
    rows.forEach((r) => {
      tbl.push(r.map((c, i) => ({ text: c, options: {
        fill: { color: i === 4 ? "1A0C0A" : (i === 0 ? "111114" : "0C0C0E") },
        color: i === 4 ? C.white : (i === 0 ? C.text : C.muted),
        bold: i === 0 || i === 4, fontSize: i === 0 ? 11 : 10.5,
        align: i === 0 ? "left" : "center", valign: "middle", fontFace: FONT,
      } })));
    });
    s.addTable(tbl, { x: 0.6, y: 2.55, w: 12.13, colW: [2.33, 2.45, 2.45, 2.45, 2.45], rowH: [0.72, 0.78, 0.62, 0.62, 0.78], border: { type: "solid", color: C.border, pt: 1 }, margin: 4 });
    s.addText("Position by capability, not disparagement — competitor references kept factual and defensible.", { x: 0.6, y: 6.5, w: 12, h: 0.3, margin: 0, fontFace: FONT, fontSize: 10.5, italic: true, color: C.dim });
    footer(s, 12);
  }

  // ============================================================= 13. INTEGRATIONS
  {
    const s = pres.addSlide(); bg(s); brandmark(s);
    eyebrow(s, "Integrations", 0.6, 1.35, 6);
    s.addText("Works with the platforms your bank already runs on", { x: 0.6, y: 1.65, w: 12, h: 0.6, margin: 0, fontFace: FONTB, fontSize: 26, bold: true, color: C.white });
    const ints = [
      ["Databricks.png", 1.7, 0.279, "Simplifies management of Databricks infrastructure via Data Contracts and Products — tames notebook sprawl; Databricks-level security."],
      ["Fabric.png", 1.55, 0.405, "Governs and simplifies Fabric workloads through single-file deployment and contracts; Microsoft-level security."],
      [null, 0, 0, "Governed metadata, data quality and ETL workflows across Snowflake — cloud-agnostic by design."],
      ["Quantexa.png", 1.7, 0.282, "Embeds the Quantexa Trust Score for 99% matching — the backbone for AML, KYC, fraud and contextual MDM."],
    ];
    const names = ["Databricks", "Microsoft Fabric", "Snowflake", "Quantexa"];
    const cw = 2.95, gap = 0.2, x0 = 0.6, y0 = 2.75, ch = 3.3;
    ints.forEach(([img, iw, ih, d], i) => {
      const x = x0 + i * (cw + gap);
      card(s, x, y0, cw, ch, C.card);
      if (img) s.addImage({ path: ASSET(img), x: x + (cw - iw) / 2, y: y0 + 0.55, w: iw, h: ih });
      else s.addText("Snowflake", { x, y: y0 + 0.5, w: cw, h: 0.5, margin: 0, fontFace: FONTB, fontSize: 19, bold: true, color: C.white, align: "center" });
      s.addShape(pres.shapes.LINE, { x: x + 0.5, y: y0 + 1.35, w: cw - 1.0, h: 0, line: { color: C.border, width: 1 } });
      s.addText(d, { x: x + 0.3, y: y0 + 1.55, w: cw - 0.6, h: 1.6, margin: 0, fontFace: FONT, fontSize: 12, color: C.muted, align: "center", lineSpacingMultiple: 1.3 });
    });
    s.addText("Cloud-agnostic — run QBricks across one platform or several, with Databricks- and Microsoft-level security.", { x: 0.6, y: 6.4, w: 12.1, h: 0.4, margin: 0, fontFace: FONT, fontSize: 13, italic: true, color: C.muted, align: "center" });
    footer(s, 13);
  }

  // ============================================================= 14. REGIONAL CREDIBILITY
  {
    const s = pres.addSlide();
    s.background = { data: await makeBg("bricks-cityscape.png", { flop: true, gradient: true }) };
    s.addText("BUILT FOR THE GCC", { x: 0.8, y: 1.5, w: 8, h: 0.3, margin: 0, fontFace: FONT, fontSize: 12, bold: true, color: C.emberLt, charSpacing: 3 });
    s.addText("Built for the realities of GCC financial services", { x: 0.78, y: 1.9, w: 8.2, h: 1.3, margin: 0, fontFace: FONTB, fontSize: 30, bold: true, color: C.white, lineSpacingMultiple: 1.05 });
    s.addText("QBricks is developed by Infinium Consulting (NextWave Infinium) and built for the demands regulated banks face here.", { x: 0.8, y: 3.35, w: 7.4, h: 0.8, margin: 0, fontFace: FONT, fontSize: 14.5, color: C.text, lineSpacingMultiple: 1.3 });
    const pts = [
      "Heightened regulatory scrutiny — Central Bank and financial-crime regimes",
      "The regional push toward AI and data monetisation",
      "Trust and auditability that UAE & GCC institutions are held to",
      "Enterprise-grade product, with deployment and support tailored to the region",
    ];
    pts.forEach((t, i) => {
      const yy = 4.35 + i * 0.58;
      s.addImage({ data: I.check, x: 0.8, y: yy + 0.03, w: 0.22, h: 0.22 });
      s.addText(t, { x: 1.16, y: yy - 0.05, w: 7.2, h: 0.5, margin: 0, fontFace: FONT, fontSize: 13, color: C.text, valign: "middle" });
    });
    footer(s, 14);
  }

  // ============================================================= 15. ABOUT
  {
    const s = pres.addSlide(); bg(s); brandmark(s);
    eyebrow(s, "About", 0.6, 1.35, 6);
    s.addText("The platform behind trustworthy AI in financial services", { x: 0.6, y: 1.65, w: 12, h: 0.6, margin: 0, fontFace: FONTB, fontSize: 25, bold: true, color: C.white });
    const cols = [
      ["QBricks & Infinium", "QBricks is developed and owned by Infinium Consulting B.V., operating under the NextWave Infinium identity — their product and their IP: an AI-enabled metadata management platform for governed, secure enterprise data."],
      ["Our mission", "To fix the layer the market skips — the governed metadata foundation that makes AI, analytics and regulatory reporting trustworthy. Most AI initiatives fail not on the models, but on the data beneath them."],
      ["Built for the GCC", "Designed for the realities of financial services in the UAE and wider GCC — regulatory scrutiny, the drive toward AI and data monetisation, and the auditability regulators here demand. Deployment and support tailored to the region."],
    ];
    const cw = 3.92, gap = 0.27, x0 = 0.6, y0 = 2.75, ch = 3.3;
    cols.forEach(([t, d], i) => {
      const x = x0 + i * (cw + gap);
      card(s, x, y0, cw, ch, C.card);
      s.addText(t, { x: x + 0.34, y: y0 + 0.34, w: cw - 0.68, h: 0.5, margin: 0, fontFace: FONTB, fontSize: 16.5, bold: true, color: C.emberLt });
      s.addShape(pres.shapes.LINE, { x: x + 0.34, y: y0 + 0.92, w: cw - 0.68, h: 0, line: { color: C.border, width: 1 } });
      s.addText(d, { x: x + 0.34, y: y0 + 1.08, w: cw - 0.68, h: 2.0, margin: 0, fontFace: FONT, fontSize: 12.5, color: C.muted, lineSpacingMultiple: 1.32 });
    });
    footer(s, 15);
  }

  // ============================================================= 16. CTA
  {
    const s = pres.addSlide();
    s.background = { data: await makeBg("bricks-hero.png") };
    s.addImage({ path: ASSET("qbricks-logo.png"), x: W / 2 - 1.0, y: 1.5, w: 2.0, h: 0.902 });
    s.addText("See QBricks on your data", { x: 1, y: 2.75, w: W - 2, h: 0.9, margin: 0, fontFace: FONTB, fontSize: 40, bold: true, color: C.white, align: "center" });
    s.addText("Tell us your platform and priority use case — AML, KYC/pKYC, fraud, MDM or risk — and we'll tailor a short demo. You'll see single-file deployment, governed Data Contracts and the audit trail that comes with them.", { x: 2.4, y: 3.75, w: W - 4.8, h: 1.0, margin: 0, fontFace: FONT, fontSize: 15, color: C.text, align: "center", lineSpacingMultiple: 1.3 });
    // CTA chips
    const chips = [["Request a demo", I.arrow], ["sales@infinium.consulting", I.mail], ["qbricks.ai", I.globe]];
    const tw = 3.0, tg = 0.3, total = chips.length * tw + (chips.length - 1) * tg, sx = (W - total) / 2;
    chips.forEach(([t, ic], i) => {
      const x = sx + i * (tw + tg);
      const primary = i === 0;
      const opts = { x, y: 5.15, w: tw, h: 0.66, rectRadius: 0.33, fill: { color: primary ? C.brand : "16161A" }, line: { color: primary ? C.brand : "3A3A42", width: 1 } };
      if (primary) opts.shadow = glow();
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, opts);
      s.addText(t, { x, y: 5.15, w: tw, h: 0.66, margin: 0, fontFace: FONTB, fontSize: primary ? 14 : 12.5, bold: true, color: C.white, align: "center", valign: "middle" });
    });
    s.addText("Strictly Confidential", { x: W / 2 - 2, y: 6.7, w: 4, h: 0.3, margin: 0, fontFace: FONT, fontSize: 9, color: C.muted, align: "center" });
  }

  await pres.writeFile({ fileName: process.env.OUT || "QBricks.pptx" });
  console.log("written");
}
build().catch((e) => { console.error(e); process.exit(1); });
