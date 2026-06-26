/* QBricks product/sales pitch deck — built on the qbricks-deck skill scaffold.
 * Content sourced from the qbricks.ai website spec. House style: Century Gothic,
 * near-black canvas, single red accent, bundled logo + brick backgrounds.
 *   node deck.js  → then rezip + render.
 */
const pptxgen = require("pptxgenjs");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const sharp = require("sharp");
const fa = require("react-icons/fa");
const path = require("path");

const ASSET_DIR = process.env.ASSET_DIR || path.join(__dirname, "skillassets");
const A = (f) => path.join(ASSET_DIR, f);

const C = {
  bg: "0B0B0D", panel: "151517", panel2: "1E1E22", line: "2A2A30",
  red: "E8200F", redDk: "8F1409", white: "FFFFFF",
  gray: "B4B4BC", grayD: "7E7E88", green: "33C08A", amber: "E8A53A",
};
const F = { head: "Century Gothic", body: "Century Gothic" };
const W = 13.333, H = 7.5;
const LOGO = A("qbricks-logo.png"), LOGO_AR = 701 / 316;
const BG = { cover: A("bg_cover.png"), closing: A("bg_closing.png"), texture: A("bg_texture.png") };

const pres = new pptxgen();
pres.defineLayout({ name: "W", width: W, height: H });
pres.layout = "W";
pres.author = "NextWave Infinium";
pres.title = "QBricks — AI-enabled metadata management";

const shadow = () => ({ type: "outer", color: "000000", blur: 9, offset: 3, angle: 90, opacity: 0.35 });

async function icon(Comp, color = "#E8200F", size = 256) {
  const svg = ReactDOMServer.renderToStaticMarkup(React.createElement(Comp, { color, size: String(size) }));
  const png = await sharp(Buffer.from(svg)).png().toBuffer();
  return "image/png;base64," + png.toString("base64");
}

function base(slide) {
  slide.background = { path: BG.texture };
  slide.addImage({ path: LOGO, x: W - 0.55 - 0.62 * LOGO_AR, y: 0.34, h: 0.62, w: 0.62 * LOGO_AR });
  slide.addText("STRICTLY CONFIDENTIAL", { x: 0.55, y: H - 0.45, w: 4, h: 0.3, fontFace: F.body, fontSize: 8, color: C.grayD, charSpacing: 2 });
  slide.addText("QBricks · NextWave Infinium", { x: W - 4.55, y: H - 0.45, w: 4, h: 0.3, fontFace: F.body, fontSize: 8, color: C.grayD, align: "right" });
}
function closingChrome(slide) {
  slide.background = { path: BG.closing };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: W, h: H, fill: { color: "000000", transparency: 42 } });
  slide.addImage({ path: LOGO, x: W - 0.55 - 0.62 * LOGO_AR, y: 0.34, h: 0.62, w: 0.62 * LOGO_AR });
  slide.addText("STRICTLY CONFIDENTIAL", { x: 0.55, y: H - 0.45, w: 4, h: 0.3, fontFace: F.body, fontSize: 8, color: C.grayD, charSpacing: 2 });
  slide.addText("QBricks · NextWave Infinium", { x: W - 4.55, y: H - 0.45, w: 4, h: 0.3, fontFace: F.body, fontSize: 8, color: C.grayD, align: "right" });
}
function kicker(slide, txt) {
  slide.addText(txt.toUpperCase(), { x: 0.55, y: 0.95, w: 11.5, h: 0.32, fontFace: F.body, fontSize: 11.5, bold: true, color: C.red, charSpacing: 3, margin: 0 });
}
function title(slide, txt, opts = {}) {
  slide.addText(txt, { x: 0.55, y: 1.24, w: 12.4, h: 1.05, fontFace: F.head, fontSize: opts.size || 25, bold: true, color: C.white, margin: 0, valign: "top", ...opts });
}
function card(slide, x, y, w, h, fill = C.panel) {
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y, w, h, rectRadius: 0.07, fill: { color: fill }, line: { color: C.line, width: 1 }, shadow: shadow() });
}
function iconOval(slide, data, x, y, d = 0.72) {
  slide.addShape(pres.shapes.OVAL, { x, y, w: d, h: d, fill: { color: C.panel2 }, line: { color: C.red, width: 1 } });
  const p = d * 0.27;
  slide.addImage({ data, x: x + p, y: y + p, w: d - 2 * p, h: d - 2 * p });
}
function pageNum(slide, n) {
  slide.addText(String(n).padStart(2, "0"), { x: W / 2 - 0.4, y: H - 0.45, w: 0.8, h: 0.3, fontFace: F.body, fontSize: 10, color: C.grayD, align: "center" });
}

(async () => {
  const I = {};
  const need = {
    warn: fa.FaExclamationTriangle, cubes: fa.FaCubes, sitemap: fa.FaSitemap, graph: fa.FaProjectDiagram,
    lock: fa.FaLock, robot: fa.FaRobot, cloud: fa.FaCloud, bolt: fa.FaBolt, shield: fa.FaShieldAlt,
    target: fa.FaBullseye, layers: fa.FaLayerGroup, users: fa.FaUsers, contract: fa.FaFileContract,
    rocket: fa.FaRocket, cogs: fa.FaCogs, audit: fa.FaClipboardCheck, aml: fa.FaSearchDollar,
    kyc: fa.FaIdCard, fraud: fa.FaFingerprint, database: fa.FaDatabase, chart: fa.FaChartLine,
    mail: fa.FaEnvelope, globe: fa.FaGlobe, handshake: fa.FaHandshake,
  };
  for (const k of Object.keys(need)) I[k] = await icon(need[k]);
  const arrow = await icon(fa.FaArrowRight, "#7E7E88");
  const tick = await icon(fa.FaCheckCircle, "#33C08A");
  const cross = await icon(fa.FaTimesCircle, "#7E7E88");

  // ===================== 1. COVER =====================
  {
    const s = pres.addSlide(); s.background = { path: BG.cover };
    s.addImage({ path: LOGO, x: 0.7, y: 0.62, w: 3.4, h: 3.4 / LOGO_AR });
    s.addText("AI-ENABLED METADATA MANAGEMENT · FINANCIAL SERVICES", { x: 0.72, y: 2.7, w: 11, h: 0.4, fontFace: F.body, fontSize: 12.5, bold: true, color: C.red, charSpacing: 3, margin: 0 });
    s.addText("Your AI is only as trustworthy\nas the data beneath it.", { x: 0.72, y: 3.12, w: 11.5, h: 1.9, fontFace: F.head, fontSize: 31, bold: true, color: C.white, lineSpacingMultiple: 1.05, margin: 0 });
    s.addText("The governed, secure metadata management platform that turns ungoverned lakehouse sprawl into auditable, AI-ready data — deployed in hours, not weeks.",
      { x: 0.72, y: 5.25, w: 8.6, h: 0.9, fontFace: F.body, fontSize: 13.5, color: C.gray, lineSpacingMultiple: 1.14, margin: 0 });
    s.addText("STRICTLY CONFIDENTIAL  ·  qbricks.ai  ·  sales@infinium.consulting", { x: 0.72, y: 6.78, w: 11, h: 0.3, fontFace: F.body, fontSize: 9.5, color: C.grayD, charSpacing: 1.5, margin: 0 });
  }

  // ===================== 2. THE PROBLEM =====================
  {
    const s = pres.addSlide(); base(s); pageNum(s, 2);
    kicker(s, "The problem"); title(s, "Everyone is racing to deploy AI.\nMost of the data underneath isn't ready.", { size: 22 });
    // left narrative
    s.addText([
      { text: "A 2025 MIT report found that around ", options: { color: C.gray } },
      { text: "95% of AI-related use cases were failing", options: { color: C.white, bold: true } },
      { text: " — and the primary cause was not the models. It was poor data quality and the absence of real metadata management.", options: { color: C.gray } },
    ], { x: 0.55, y: 2.95, w: 7.5, h: 1.3, fontFace: F.body, fontSize: 14, lineSpacingMultiple: 1.22, margin: 0 });
    s.addText("Vendors promise “one platform”. Consultancies promise to “engineer your data fabric”. Yet the underlying problem — ungoverned, poorly understood data — is rarely fixed. The usual answer is to throw money and people at it. It doesn't hold.",
      { x: 0.55, y: 4.4, w: 7.5, h: 1.5, fontFace: F.body, fontSize: 12.5, color: C.grayD, lineSpacingMultiple: 1.22, margin: 0 });
    s.addText([
      { text: "QBricks fixes the layer everyone else skips — ", options: { color: C.gray } },
      { text: "the governed metadata foundation that makes AI, analytics and regulatory reporting trustworthy.", options: { color: C.white, bold: true } },
    ], { x: 0.55, y: 5.95, w: 7.5, h: 0.9, fontFace: F.body, fontSize: 12.5, lineSpacingMultiple: 1.18, margin: 0 });
    // right stat panel
    card(s, 8.45, 2.55, 4.35, 4.0, C.panel2);
    iconOval(s, I.warn, 8.85, 2.9, 0.66);
    s.addText("95%", { x: 8.45, y: 3.55, w: 4.35, h: 1.2, fontFace: F.head, fontSize: 64, bold: true, color: C.red, align: "center", margin: 0 });
    s.addText("of AI use cases are failing", { x: 8.65, y: 4.78, w: 3.95, h: 0.4, fontFace: F.head, fontSize: 14.5, bold: true, color: C.white, align: "center", margin: 0 });
    s.addText("Not because of the models — because of the data beneath them.", { x: 8.75, y: 5.2, w: 3.75, h: 0.7, fontFace: F.body, fontSize: 11.5, color: C.gray, align: "center", lineSpacingMultiple: 1.15, margin: 0 });
    s.addText("Source: 2025 MIT report", { x: 8.65, y: 6.05, w: 3.95, h: 0.3, fontFace: F.body, fontSize: 9.5, italic: true, color: C.grayD, align: "center", margin: 0 });
    s.addNotes("Open on the 95% MIT figure — it reframes the AI conversation from models to data. Then validate the buyer's frustration with vendor and consultancy promises before positioning QBricks as the missing foundation.");
  }

  // ===================== 3. THE DATA SWAMP =====================
  {
    const s = pres.addSlide(); base(s); pageNum(s, 3);
    kicker(s, "The failure mode"); title(s, "Migration to a lakehouse can make it worse");
    s.addText("Software “unifies” the data, but governance quietly breaks — the lakehouse becomes a data swamp: technically unified, practically ungovernable.",
      { x: 0.55, y: 2.0, w: 12.25, h: 0.5, fontFace: F.body, fontSize: 13, color: C.gray, lineSpacingMultiple: 1.1, margin: 0 });
    const items = [
      [I.cubes, "Hundreds of ungoverned notebooks", "Logic sprawls across files no one fully owns or can audit."],
      [I.sitemap, "Governance lost at the schema level", "Control erodes the moment data scales beyond a few tables."],
      [I.graph, "No reliable lineage or audit trail", "You can't show a regulator how a number was produced."],
      [I.warn, "AI stalls; cost and risk rise", "Every migration deepens the swamp — and the spend with it."],
    ];
    const cw = 5.95, ch = 1.7, gx = 0.45, gy = 0.35, x0 = 0.55, y0 = 2.65;
    items.forEach((it, i) => {
      const x = x0 + (i % 2) * (cw + gx), y = y0 + Math.floor(i / 2) * (ch + gy);
      card(s, x, y, cw, ch);
      iconOval(s, it[0], x + 0.3, y + 0.3, 0.66);
      s.addText(it[1], { x: x + 1.15, y: y + 0.32, w: cw - 1.4, h: 0.55, fontFace: F.head, fontSize: 14.5, bold: true, color: C.white, valign: "middle", margin: 0 });
      s.addText(it[2], { x: x + 1.15, y: y + 0.92, w: cw - 1.4, h: 0.6, fontFace: F.body, fontSize: 11.5, color: C.gray, lineSpacingMultiple: 1.06, margin: 0 });
    });
    s.addText([
      { text: "The fix isn't more money — it's a governed metadata foundation. ", options: { color: C.white, bold: true } },
      { text: "That is exactly what QBricks provides.", options: { color: C.gray } },
    ], { x: 0.55, y: 6.55, w: 12.25, h: 0.4, fontFace: F.body, fontSize: 12.5, align: "center", margin: 0 });
  }

  // ===================== 4. BEFORE / AFTER =====================
  {
    const s = pres.addSlide(); base(s); pageNum(s, 4);
    kicker(s, "The shift"); title(s, "From data swamp to governed foundation");
    const colY = 2.4, colH = 4.0, cw = 5.95;
    // before
    card(s, 0.55, colY, cw, colH, C.panel);
    s.addText("WITHOUT QBRICKS", { x: 0.9, y: colY + 0.3, w: cw - 0.7, h: 0.35, fontFace: F.body, fontSize: 12, bold: true, color: C.grayD, charSpacing: 2, margin: 0 });
    const before = [
      "Hundreds of ungoverned notebooks",
      "Governance lost at the schema level",
      "No reliable lineage or audit trail",
      "AI initiatives stall on poor data quality",
      "Cost and risk rise with every migration",
    ];
    before.forEach((t, i) => {
      const yy = colY + 0.95 + i * 0.6;
      s.addImage({ data: cross, x: 0.9, y: yy + 0.02, w: 0.24, h: 0.24 });
      s.addText(t, { x: 1.28, y: yy - 0.05, w: cw - 0.8, h: 0.45, fontFace: F.body, fontSize: 12.5, color: C.gray, valign: "middle", margin: 0 });
    });
    // after
    const ax = 0.55 + cw + 0.45;
    card(s, ax, colY, cw, colH, C.panel2);
    s.addText("WITH QBRICKS", { x: ax + 0.35, y: colY + 0.3, w: cw - 0.7, h: 0.35, fontFace: F.body, fontSize: 12, bold: true, color: C.red, charSpacing: 2, margin: 0 });
    const after = [
      "Data Contracts & Data Products govern every workflow",
      "Metadata managed and largely automated",
      "Decision lineage tracked and fully auditable",
      "95% fewer data issues; AI built on trusted data",
      "Deployed in hours, at ~70% lower cost",
    ];
    after.forEach((t, i) => {
      const yy = colY + 0.95 + i * 0.6;
      s.addImage({ data: tick, x: ax + 0.35, y: yy + 0.02, w: 0.24, h: 0.24 });
      s.addText(t, { x: ax + 0.73, y: yy - 0.05, w: cw - 1.0, h: 0.45, fontFace: F.body, fontSize: 12.5, color: C.white, valign: "middle", margin: 0 });
    });
  }

  // ===================== 5. WHAT QBRICKS IS =====================
  {
    const s = pres.addSlide(); base(s); pageNum(s, 5);
    kicker(s, "What QBricks is"); title(s, "A sophisticated, governed, secure metadata platform", { size: 23 });
    s.addText("QBricks builds and deploys data quality and ETL workflows through Data Contracts and Data Products, and automates much of metadata management. Enterprise-grade, cloud-agnostic and agentic-enabled — human always in the loop, everything auditable.",
      { x: 0.55, y: 2.0, w: 12.25, h: 0.7, fontFace: F.body, fontSize: 12.5, color: C.gray, lineSpacingMultiple: 1.15, margin: 0 });
    const pillars = [
      [I.lock, "Governed by design", "Data Contracts and Data Products make every workflow explicit, owned and auditable. Governance is built in, not bolted on."],
      [I.robot, "Automated & agentic", "Agents handle the heavy lifting of metadata management and improve continuously, while humans stay in control and every decision is traceable."],
      [I.cloud, "Secure & cloud-agnostic", "Databricks- and Microsoft-level security, across whichever platform you run."],
    ];
    const cw = 3.95, gx = 0.45, x0 = 0.55, y = 2.85, ch = 3.4;
    pillars.forEach((p, i) => {
      const x = x0 + i * (cw + gx); card(s, x, y, cw, ch);
      iconOval(s, p[0], x + 0.3, y + 0.32, 0.8);
      s.addText(p[1], { x: x + 0.3, y: y + 1.3, w: cw - 0.6, h: 0.5, fontFace: F.head, fontSize: 16, bold: true, color: C.white, margin: 0 });
      s.addText(p[2], { x: x + 0.3, y: y + 1.85, w: cw - 0.6, h: 1.4, fontFace: F.body, fontSize: 12, color: C.gray, lineSpacingMultiple: 1.12, margin: 0 });
    });
  }

  // ===================== 6. HOW IT WORKS =====================
  {
    const s = pres.addSlide(); base(s); pageNum(s, 6);
    kicker(s, "How it works"); title(s, "Define, deploy and govern — in one flow");
    const steps = [
      [I.contract, "DEFINE", "Express data quality & ETL logic as Data Contracts — explicit, owned, versioned."],
      [I.cubes, "COMPOSE", "Assemble contracts into Data Products the business can find, understand and trust."],
      [I.rocket, "DEPLOY", "A single file deploys infrastructure and workloads — no sprawl, live in hours."],
      [I.cogs, "AUTOMATE", "Agents take on routine metadata work and improve continuously — human in the loop."],
      [I.audit, "AUDIT", "Every decision and its lineage tracked. The entire process is auditable, end to end."],
    ];
    const cw = 2.38, gx = 0.16, x0 = 0.55, y = 2.6, ch = 3.4;
    steps.forEach((st, i) => {
      const x = x0 + i * (cw + gx); card(s, x, y, cw, ch);
      iconOval(s, st[0], x + cw / 2 - 0.4, y + 0.32, 0.8);
      s.addText(String(i + 1), { x: x + 0.2, y: y + 0.22, w: 0.6, h: 0.4, fontFace: F.head, fontSize: 16, bold: true, color: C.red, margin: 0 });
      s.addText(st[1], { x: x + 0.15, y: y + 1.32, w: cw - 0.3, h: 0.35, fontFace: F.head, fontSize: 14, bold: true, color: C.red, align: "center", margin: 0 });
      s.addText(st[2], { x: x + 0.2, y: y + 1.78, w: cw - 0.4, h: 1.5, fontFace: F.body, fontSize: 11, color: C.gray, align: "center", lineSpacingMultiple: 1.1, margin: 0 });
      if (i < steps.length - 1) s.addImage({ data: arrow, x: x + cw + gx / 2 - 0.1, y: y + 0.62, w: 0.2, h: 0.2 });
    });
  }

  // ===================== 7. CAPABILITIES =====================
  {
    const s = pres.addSlide(); base(s); pageNum(s, 7);
    kicker(s, "Capabilities"); title(s, "Built for the realities of a regulated bank");
    const caps = [
      [I.bolt, "Deploy in hours, not weeks", "Single-file deployment covers infrastructure and workloads — less sprawl, fewer errors."],
      [I.shield, "Cut data issues by 95%", "Robust ETL and data quality frameworks, governed through Data Contracts and Products."],
      [I.graph, "See and trust your data", "Ontologies and knowledge graphs structure your data for discovery, lineage and decisions."],
      [I.target, "Match with 99% accuracy", "The embedded Quantexa Trust Score assures 99% data matching accuracy."],
      [I.layers, "Simplify your lakehouse", "Seamless management of Databricks and Microsoft Fabric via contracts and products."],
      [I.users, "Break down business silos", "Knowledge alignment between decision-makers and field teams; every process auditable."],
    ];
    const cw = 3.95, ch = 1.65, gx = 0.45, gy = 0.28, x0 = 0.55, y0 = 2.35;
    caps.forEach((c, i) => {
      const x = x0 + (i % 3) * (cw + gx), y = y0 + Math.floor(i / 3) * (ch + gy);
      card(s, x, y, cw, ch);
      iconOval(s, c[0], x + 0.28, y + 0.3, 0.6);
      s.addText(c[1], { x: x + 1.05, y: y + 0.26, w: cw - 1.25, h: 0.5, fontFace: F.head, fontSize: 13.5, bold: true, color: C.white, valign: "middle", margin: 0 });
      s.addText(c[2], { x: x + 0.28, y: y + 0.92, w: cw - 0.55, h: 0.65, fontFace: F.body, fontSize: 10.5, color: C.gray, lineSpacingMultiple: 1.08, margin: 0 });
    });
  }

  // ===================== 8. PROOF =====================
  {
    const s = pres.addSlide(); base(s); pageNum(s, 8);
    kicker(s, "The proof"); title(s, "Four numbers that change the economics of trust");
    const stats = [
      ["95%", "fewer data issues", "Governed contracts and quality frameworks at the source.", C.red],
      ["Hours", "to deploy, not weeks", "Single-file deployment of infrastructure and workloads.", C.white],
      ["~70%", "lower cost", "Versus manually developed and deployed workflows.", C.white],
      ["99%", "matching accuracy", "With the embedded Quantexa Trust Score.", C.white],
    ];
    const cw = 2.95, gx = 0.3, x0 = 0.55, y = 2.55, ch = 3.0;
    stats.forEach((st, i) => {
      const x = x0 + i * (cw + gx); card(s, x, y, cw, ch, C.panel2);
      s.addText(st[0], { x: x + 0.2, y: y + 0.4, w: cw - 0.4, h: 1.0, fontFace: F.head, fontSize: st[0].length > 3 ? 32 : 44, bold: true, color: st[3], align: "center", margin: 0 });
      s.addText(st[1], { x: x + 0.2, y: y + 1.55, w: cw - 0.4, h: 0.45, fontFace: F.head, fontSize: 14, bold: true, color: C.white, align: "center", margin: 0 });
      s.addText(st[2], { x: x + 0.25, y: y + 2.05, w: cw - 0.5, h: 0.85, fontFace: F.body, fontSize: 11, color: C.gray, align: "center", lineSpacingMultiple: 1.12, margin: 0 });
    });
    s.addText("Fully auditable, end to end — designed for environments where regulators, internal audit and risk all need to see how a decision was reached.",
      { x: 0.55, y: 5.85, w: 12.25, h: 0.5, fontFace: F.body, fontSize: 12, italic: true, color: C.grayD, align: "center", margin: 0 });
  }

  // ===================== 9. QUANTEXA =====================
  {
    const s = pres.addSlide(); base(s); pageNum(s, 9);
    kicker(s, "Differentiator"); title(s, "Embedded Quantexa Trust Score");
    s.addText("QBricks ingests and embeds the Quantexa Trust Score directly into your data assets and products — so entities, transactions and relationships resolve correctly, and every transformation stays auditable.",
      { x: 0.55, y: 2.3, w: 7.3, h: 1.2, fontFace: F.body, fontSize: 13.5, color: C.gray, lineSpacingMultiple: 1.2, margin: 0 });
    const pts = [
      "99% data matching accuracy with Quantexa",
      "The backbone for AML, KYC, fraud & contextual MDM",
      "Trust scoring carried into every Data Product",
      "Defensible entity resolution the regulator can follow",
    ];
    pts.forEach((t, i) => {
      const yy = 3.75 + i * 0.62;
      s.addImage({ data: tick, x: 0.55, y: yy + 0.02, w: 0.26, h: 0.26 });
      s.addText(t, { x: 0.95, y: yy - 0.05, w: 6.6, h: 0.5, fontFace: F.body, fontSize: 13, color: C.white, valign: "middle", margin: 0 });
    });
    card(s, 8.25, 2.3, 4.55, 4.05, C.panel2);
    iconOval(s, I.target, 8.7, 2.65, 0.7);
    s.addText("99%", { x: 8.25, y: 3.4, w: 4.55, h: 1.2, fontFace: F.head, fontSize: 60, bold: true, color: C.red, align: "center", margin: 0 });
    s.addText("data matching accuracy", { x: 8.45, y: 4.6, w: 4.15, h: 0.4, fontFace: F.head, fontSize: 14.5, bold: true, color: C.white, align: "center", margin: 0 });
    s.addText("Embedded with Quantexa", { x: 8.45, y: 5.05, w: 4.15, h: 0.4, fontFace: F.body, fontSize: 12, color: C.gray, align: "center", margin: 0 });
    s.addText("Databricks · Microsoft Fabric · Snowflake · Quantexa", { x: 8.45, y: 5.75, w: 4.15, h: 0.4, fontFace: F.body, fontSize: 9.5, italic: true, color: C.grayD, align: "center", margin: 0 });
  }

  // ===================== 10. SOLUTIONS =====================
  {
    const s = pres.addSlide(); base(s); pageNum(s, 10);
    kicker(s, "Solutions"); title(s, "Where governed metadata creates regulatory & commercial value", { size: 22 });
    const uc = [
      [I.aml, "AML", "Trade, retail, markets & correspondent banking — 99% matching cuts false positives and makes investigations defensible."],
      [I.kyc, "KYC / pKYC / EDD", "A reliable single customer view; Data Products keep KYC current and audit-ready."],
      [I.fraud, "Fraud & financial crime", "Ontologies and knowledge graphs connect signals; trust scoring sharpens entity resolution."],
      [I.database, "Contextual MDM", "Governed, contextual master data with lineage — a trustworthy single view for cross-sell."],
      [I.chart, "Credit & ESG risk", "Governed, auditable data foundations with clear lineage — defensible models and reporting."],
      [I.graph, "Customer intelligence", "Interconnected, high-accuracy data powers discovery and informed commercial decisions."],
    ];
    const cw = 3.95, ch = 1.7, gx = 0.45, gy = 0.28, x0 = 0.55, y0 = 2.35;
    uc.forEach((c, i) => {
      const x = x0 + (i % 3) * (cw + gx), y = y0 + Math.floor(i / 3) * (ch + gy);
      card(s, x, y, cw, ch);
      iconOval(s, c[0], x + 0.28, y + 0.3, 0.6);
      s.addText(c[1], { x: x + 1.05, y: y + 0.28, w: cw - 1.25, h: 0.5, fontFace: F.head, fontSize: 14, bold: true, color: C.white, valign: "middle", margin: 0 });
      s.addText(c[2], { x: x + 0.28, y: y + 0.95, w: cw - 0.55, h: 0.68, fontFace: F.body, fontSize: 10.5, color: C.gray, lineSpacingMultiple: 1.08, margin: 0 });
    });
  }

  // ===================== 11. AML IN FOCUS =====================
  {
    const s = pres.addSlide(); base(s); pageNum(s, 11);
    kicker(s, "Use case in focus — AML"); title(s, "Governed data for AML that stands up to scrutiny");
    const cols = [
      ["The pain", I.warn, "Alerts and investigations are only as good as the data feeding them. Poor matching and ungoverned data drive false positives, missed risk and regulatory findings.", false],
      ["How QBricks helps", I.lock, "Governed metadata plus the embedded Quantexa Trust Score deliver 99% matching, so entities, transactions and relationships resolve correctly — every transformation auditable.", true],
      ["The outcome", I.target, "Fewer false positives, defensible investigations and a lower cost to comply — across trade, retail, markets and correspondent banking AML.", false],
    ];
    const cw = 3.95, gx = 0.45, x0 = 0.55, y = 2.5, ch = 3.5;
    cols.forEach((c, i) => {
      const x = x0 + i * (cw + gx); card(s, x, y, cw, ch, c[3] ? C.panel2 : C.panel);
      iconOval(s, c[1], x + 0.3, y + 0.32, 0.72);
      s.addText(c[0], { x: x + 0.3, y: y + 1.2, w: cw - 0.6, h: 0.5, fontFace: F.head, fontSize: 16, bold: true, color: c[3] ? C.red : C.white, margin: 0 });
      s.addText(c[2], { x: x + 0.3, y: y + 1.78, w: cw - 0.6, h: 1.5, fontFace: F.body, fontSize: 12, color: C.gray, lineSpacingMultiple: 1.15, margin: 0 });
    });
  }

  // ===================== 12. WHY QBRICKS (competitive table) =====================
  {
    const s = pres.addSlide(); base(s); pageNum(s, 12);
    kicker(s, "Why QBricks"); title(s, "“One platform” and “data fabric” don't fix metadata", { size: 23 });
    const head = ["", "Catalogue / governance\n(Collibra, Purview)", "Native Databricks /\nFabric tooling", "Consultancy\n“data fabric”", "QBricks"];
    const rows = [
      ["Fixes quality &\nmetadata at source", "Describes, doesn't fix", "Schema-level, erodes at scale", "Re-architects, persists", "Governs & automates the foundation"],
      ["Speed to deploy", "Long programmes", "Manual, multi-file", "Months of build", "Hours — single-file deploy"],
      ["Cost", "High licence + services", "Heavy manual effort", "High services cost", "~70% lower than manual build"],
      ["Auditability\n& lineage", "Partial", "Fragmented", "Depends on build", "End-to-end, agentic + human"],
    ];
    const colW = [2.45, 2.55, 2.45, 2.35, 2.45];
    const tbl = [];
    tbl.push(head.map((h, i) => ({ text: h, options: { fill: { color: i === 4 ? C.redDk : C.panel2 }, color: i === 4 ? C.white : C.gray, bold: true, fontSize: 10.5, fontFace: F.head, align: i === 0 ? "left" : "center", valign: "middle" } })));
    rows.forEach((r, ri) => {
      tbl.push(r.map((cell, ci) => ({
        text: cell,
        options: {
          fill: { color: ci === 4 ? "2A0F0B" : (ri % 2 ? C.panel : C.panel2) },
          color: ci === 4 ? C.white : (ci === 0 ? C.white : C.gray),
          bold: ci === 0 || ci === 4, fontSize: ci === 0 ? 11 : 10.5, fontFace: F.body,
          align: ci === 0 ? "left" : "center", valign: "middle",
        },
      })));
    });
    s.addTable(tbl, { x: 0.55, y: 2.35, w: 12.25, colW, rowH: [0.7, 0.82, 0.62, 0.62, 0.82], border: { type: "solid", pt: 0.5, color: C.bg }, margin: [3, 6, 3, 6] });
    s.addText("Position by capability, not disparagement — competitor references kept factual and defensible.",
      { x: 0.55, y: 6.55, w: 12.25, h: 0.3, fontFace: F.body, fontSize: 10.5, italic: true, color: C.grayD, margin: 0 });
  }

  // ===================== 13. INTEGRATIONS =====================
  {
    const s = pres.addSlide(); base(s); pageNum(s, 13);
    kicker(s, "Integrations"); title(s, "Works with the platforms your bank already runs on");
    const ints = [
      [I.layers, "Databricks", "Simplifies management of Databricks infrastructure via Data Contracts and Products; tames notebook sprawl. Databricks-level security."],
      [I.cubes, "Microsoft Fabric", "Governs and simplifies Fabric workloads through single-file deployment and contracts. Microsoft-level security."],
      [I.database, "Snowflake", "Governed metadata, data quality and ETL workflows across Snowflake — cloud-agnostic by design."],
      [I.target, "Quantexa", "Embeds the Quantexa Trust Score for 99% matching — the backbone for AML, KYC, fraud and contextual MDM."],
    ];
    const cw = 2.95, gx = 0.3, x0 = 0.55, y = 2.5, ch = 3.1;
    ints.forEach((c, i) => {
      const x = x0 + i * (cw + gx); card(s, x, y, cw, ch);
      iconOval(s, c[0], x + cw / 2 - 0.4, y + 0.32, 0.8);
      s.addText(c[1], { x: x + 0.2, y: y + 1.3, w: cw - 0.4, h: 0.45, fontFace: F.head, fontSize: 15, bold: true, color: C.white, align: "center", margin: 0 });
      s.addText(c[2], { x: x + 0.25, y: y + 1.82, w: cw - 0.5, h: 1.2, fontFace: F.body, fontSize: 10.5, color: C.gray, align: "center", lineSpacingMultiple: 1.12, margin: 0 });
    });
    s.addText("Cloud-agnostic — run QBricks across one platform or several, with Databricks- and Microsoft-level security.",
      { x: 0.55, y: 5.85, w: 12.25, h: 0.4, fontFace: F.body, fontSize: 12, italic: true, color: C.grayD, align: "center", margin: 0 });
  }

  // ===================== 14. GCC CREDIBILITY =====================
  {
    const s = pres.addSlide(); base(s); pageNum(s, 14);
    kicker(s, "Built for the GCC"); title(s, "Built for the realities of GCC financial services");
    s.addText("QBricks is developed by Infinium Consulting (NextWave Infinium) and built for the demands regulated banks face in the region. Enterprise-grade product, with deployment and support tailored to the GCC.",
      { x: 0.55, y: 2.0, w: 12.25, h: 0.6, fontFace: F.body, fontSize: 13, color: C.gray, lineSpacingMultiple: 1.12, margin: 0 });
    const items = [
      [I.shield, "Regulatory scrutiny", "Central Bank and financial-crime regimes demand auditable, governed data — now a board-level issue."],
      [I.chart, "AI & data monetisation", "The regional push toward AI and data monetisation needs a trusted, governed foundation underneath."],
      [I.audit, "Trust & auditability", "The standards UAE & GCC institutions are held to — provable lineage, end to end."],
      [I.handshake, "In-region delivery", "Enterprise-grade product, with deployment and support tailored to the region."],
    ];
    const cw = 5.95, ch = 1.7, gx = 0.45, gy = 0.32, x0 = 0.55, y0 = 2.75;
    items.forEach((it, i) => {
      const x = x0 + (i % 2) * (cw + gx), y = y0 + Math.floor(i / 2) * (ch + gy);
      card(s, x, y, cw, ch);
      iconOval(s, it[0], x + 0.3, y + 0.3, 0.66);
      s.addText(it[1], { x: x + 1.15, y: y + 0.3, w: cw - 1.4, h: 0.55, fontFace: F.head, fontSize: 14.5, bold: true, color: C.white, valign: "middle", margin: 0 });
      s.addText(it[2], { x: x + 1.15, y: y + 0.9, w: cw - 1.4, h: 0.65, fontFace: F.body, fontSize: 11.5, color: C.gray, lineSpacingMultiple: 1.08, margin: 0 });
    });
  }

  // ===================== 15. ABOUT =====================
  {
    const s = pres.addSlide(); base(s); pageNum(s, 15);
    kicker(s, "About"); title(s, "The platform behind trustworthy AI in financial services", { size: 23 });
    const cols = [
      ["QBricks & Infinium", "QBricks is developed and owned by Infinium Consulting B.V., operating under the NextWave Infinium identity — their product and their IP: an AI-enabled metadata management platform for governed, secure enterprise data."],
      ["Our mission", "To fix the layer the market skips — the governed metadata foundation that makes AI, analytics and regulatory reporting trustworthy. Most AI initiatives fail not on the models, but on the data beneath them."],
      ["Built for the GCC", "Designed for the realities of financial services in the UAE and wider GCC — regulatory scrutiny, the drive toward AI and data monetisation, and the auditability regulators here demand."],
    ];
    const cw = 3.95, gx = 0.45, x0 = 0.55, y = 2.55, ch = 3.6;
    cols.forEach((c, i) => {
      const x = x0 + i * (cw + gx); card(s, x, y, cw, ch);
      s.addText(c[0], { x: x + 0.3, y: y + 0.3, w: cw - 0.6, h: 0.5, fontFace: F.head, fontSize: 16, bold: true, color: C.red, margin: 0 });
      s.addText(c[1], { x: x + 0.3, y: y + 1.0, w: cw - 0.6, h: 2.4, fontFace: F.body, fontSize: 12, color: C.gray, lineSpacingMultiple: 1.18, margin: 0 });
    });
  }

  // ===================== 16. CTA (closing) =====================
  {
    const s = pres.addSlide(); closingChrome(s); pageNum(s, 16);
    kicker(s, "Next steps");
    s.addText("See QBricks on your data", { x: 0.55, y: 2.4, w: 11.5, h: 1.0, fontFace: F.head, fontSize: 36, bold: true, color: C.white, margin: 0 });
    s.addText("Tell us your platform and priority use case — AML, KYC/pKYC, fraud, MDM or risk — and we'll tailor a short demo. You'll see single-file deployment, governed Data Contracts and the audit trail that comes with them.",
      { x: 0.55, y: 3.55, w: 8.3, h: 1.2, fontFace: F.body, fontSize: 14, color: C.gray, lineSpacingMultiple: 1.2, margin: 0 });
    // contact rows
    const rows = [[I.mail, "sales@infinium.consulting"], [I.globe, "qbricks.ai"]];
    rows.forEach(([ic, t], i) => {
      const y = 5.05 + i * 0.7;
      iconOval(s, ic, 0.55, y, 0.5);
      s.addText(t, { x: 1.2, y: y - 0.03, w: 7, h: 0.56, fontFace: F.head, fontSize: 15, bold: true, color: C.white, valign: "middle", margin: 0 });
    });
  }

  await pres.writeFile({ fileName: process.env.OUT || "QBricks_Deck.pptx" });
  console.log("wrote deck");
})();
