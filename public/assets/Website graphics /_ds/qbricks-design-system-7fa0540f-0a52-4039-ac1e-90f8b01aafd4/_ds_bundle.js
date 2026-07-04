/* @ds-bundle: {"format":4,"namespace":"QBricksDesignSystem_7fa054","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"QBricksText","sourcePath":"components/brand/QBricksText.jsx"},{"name":"QIcon","sourcePath":"components/brand/QIcon.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"GlassCard","sourcePath":"components/core/GlassCard.jsx"},{"name":"IntegrationTile","sourcePath":"components/core/IntegrationTile.jsx"},{"name":"Pill","sourcePath":"components/core/Pill.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"}],"sourceHashes":{"Context/deck.js":"9185a00996cd","components/brand/Logo.jsx":"1c5e68c173d6","components/brand/QBricksText.jsx":"6a111a649d0b","components/brand/QIcon.jsx":"afc9bdad75cf","components/core/Button.jsx":"44a320f72225","components/core/Eyebrow.jsx":"e61f9b7b74cc","components/core/GlassCard.jsx":"558d51859372","components/core/IntegrationTile.jsx":"3b2c25f87864","components/core/Pill.jsx":"e6975209dfd5","components/core/SectionHeading.jsx":"9d02fbca99ea","image-slot.js":"9309434cb09c","tailwind.config.ts":"4ab47bbcddec","ui_kits/website/footer.jsx":"0ffaeabfb4e3","ui_kits/website/hero.jsx":"cde71c314525","ui_kits/website/icons.jsx":"7df77c55e29c","ui_kits/website/navbar.jsx":"a8109742f12d","ui_kits/website/sections.jsx":"c1f4c2fcdbe2"},"inlinedExternals":[],"unexposedExports":[{"name":"config","sourcePath":"tailwind.config.ts"}]} */

(() => {

const __ds_ns = (window.QBricksDesignSystem_7fa054 = window.QBricksDesignSystem_7fa054 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// Context/deck.js
try { (() => {
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
const A = f => path.join(ASSET_DIR, f);
const C = {
  bg: "0B0B0D",
  panel: "151517",
  panel2: "1E1E22",
  line: "2A2A30",
  red: "E8200F",
  redDk: "8F1409",
  white: "FFFFFF",
  gray: "B4B4BC",
  grayD: "7E7E88",
  green: "33C08A",
  amber: "E8A53A"
};
const F = {
  head: "Century Gothic",
  body: "Century Gothic"
};
const W = 13.333,
  H = 7.5;
const LOGO = A("qbricks-logo.png"),
  LOGO_AR = 701 / 316;
const BG = {
  cover: A("bg_cover.png"),
  closing: A("bg_closing.png"),
  texture: A("bg_texture.png")
};
const pres = new pptxgen();
pres.defineLayout({
  name: "W",
  width: W,
  height: H
});
pres.layout = "W";
pres.author = "NextWave Infinium";
pres.title = "QBricks — AI-enabled metadata management";
const shadow = () => ({
  type: "outer",
  color: "000000",
  blur: 9,
  offset: 3,
  angle: 90,
  opacity: 0.35
});
async function icon(Comp, color = "#E8200F", size = 256) {
  const svg = ReactDOMServer.renderToStaticMarkup(React.createElement(Comp, {
    color,
    size: String(size)
  }));
  const png = await sharp(Buffer.from(svg)).png().toBuffer();
  return "image/png;base64," + png.toString("base64");
}
function base(slide) {
  slide.background = {
    path: BG.texture
  };
  slide.addImage({
    path: LOGO,
    x: W - 0.55 - 0.62 * LOGO_AR,
    y: 0.34,
    h: 0.62,
    w: 0.62 * LOGO_AR
  });
  slide.addText("STRICTLY CONFIDENTIAL", {
    x: 0.55,
    y: H - 0.45,
    w: 4,
    h: 0.3,
    fontFace: F.body,
    fontSize: 8,
    color: C.grayD,
    charSpacing: 2
  });
  slide.addText("QBricks · NextWave Infinium", {
    x: W - 4.55,
    y: H - 0.45,
    w: 4,
    h: 0.3,
    fontFace: F.body,
    fontSize: 8,
    color: C.grayD,
    align: "right"
  });
}
function closingChrome(slide) {
  slide.background = {
    path: BG.closing
  };
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0,
    y: 0,
    w: W,
    h: H,
    fill: {
      color: "000000",
      transparency: 42
    }
  });
  slide.addImage({
    path: LOGO,
    x: W - 0.55 - 0.62 * LOGO_AR,
    y: 0.34,
    h: 0.62,
    w: 0.62 * LOGO_AR
  });
  slide.addText("STRICTLY CONFIDENTIAL", {
    x: 0.55,
    y: H - 0.45,
    w: 4,
    h: 0.3,
    fontFace: F.body,
    fontSize: 8,
    color: C.grayD,
    charSpacing: 2
  });
  slide.addText("QBricks · NextWave Infinium", {
    x: W - 4.55,
    y: H - 0.45,
    w: 4,
    h: 0.3,
    fontFace: F.body,
    fontSize: 8,
    color: C.grayD,
    align: "right"
  });
}
function kicker(slide, txt) {
  slide.addText(txt.toUpperCase(), {
    x: 0.55,
    y: 0.82,
    w: 11.5,
    h: 0.32,
    fontFace: F.body,
    fontSize: 11.5,
    bold: true,
    color: C.red,
    charSpacing: 3,
    margin: 0
  });
}
function title(slide, txt, opts = {}) {
  slide.addText(txt, {
    x: 0.55,
    y: 1.42,
    w: 12.4,
    h: 1.05,
    fontFace: F.head,
    fontSize: opts.size || 25,
    bold: true,
    color: C.white,
    margin: 0,
    valign: "top",
    ...opts
  });
}
function card(slide, x, y, w, h, fill = C.panel) {
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x,
    y,
    w,
    h,
    rectRadius: 0.07,
    fill: {
      color: fill
    },
    line: {
      color: C.line,
      width: 1
    },
    shadow: shadow()
  });
}
function iconOval(slide, data, x, y, d = 0.72) {
  slide.addShape(pres.shapes.OVAL, {
    x,
    y,
    w: d,
    h: d,
    fill: {
      color: C.panel2
    },
    line: {
      color: C.red,
      width: 1
    }
  });
  const p = d * 0.27;
  slide.addImage({
    data,
    x: x + p,
    y: y + p,
    w: d - 2 * p,
    h: d - 2 * p
  });
}
function pageNum(slide, n) {
  slide.addText(String(n).padStart(2, "0"), {
    x: W / 2 - 0.4,
    y: H - 0.45,
    w: 0.8,
    h: 0.3,
    fontFace: F.body,
    fontSize: 10,
    color: C.grayD,
    align: "center"
  });
}
(async () => {
  const I = {};
  const need = {
    warn: fa.FaExclamationTriangle,
    cubes: fa.FaCubes,
    sitemap: fa.FaSitemap,
    graph: fa.FaProjectDiagram,
    lock: fa.FaLock,
    robot: fa.FaRobot,
    cloud: fa.FaCloud,
    bolt: fa.FaBolt,
    shield: fa.FaShieldAlt,
    target: fa.FaBullseye,
    layers: fa.FaLayerGroup,
    users: fa.FaUsers,
    contract: fa.FaFileContract,
    rocket: fa.FaRocket,
    cogs: fa.FaCogs,
    audit: fa.FaClipboardCheck,
    aml: fa.FaSearchDollar,
    kyc: fa.FaIdCard,
    fraud: fa.FaFingerprint,
    database: fa.FaDatabase,
    chart: fa.FaChartLine,
    mail: fa.FaEnvelope,
    globe: fa.FaGlobe,
    handshake: fa.FaHandshake,
    server: fa.FaServer,
    sync: fa.FaSyncAlt
  };
  for (const k of Object.keys(need)) I[k] = await icon(need[k]);
  const arrow = await icon(fa.FaArrowRight, "#7E7E88");
  const tick = await icon(fa.FaCheckCircle, "#33C08A");
  const cross = await icon(fa.FaTimesCircle, "#7E7E88");

  // ===================== 1. COVER =====================
  {
    const s = pres.addSlide();
    s.background = {
      path: BG.cover
    };
    s.addImage({
      path: LOGO,
      x: 0.7,
      y: 0.62,
      w: 3.4,
      h: 3.4 / LOGO_AR
    });
    s.addText("AI-ENABLED METADATA MANAGEMENT · FINANCIAL SERVICES", {
      x: 0.72,
      y: 2.7,
      w: 11,
      h: 0.4,
      fontFace: F.body,
      fontSize: 12.5,
      bold: true,
      color: C.red,
      charSpacing: 3,
      margin: 0
    });
    s.addText("Your AI is only as trustworthy\nas the data beneath it.", {
      x: 0.72,
      y: 3.12,
      w: 11.5,
      h: 1.9,
      fontFace: F.head,
      fontSize: 31,
      bold: true,
      color: C.white,
      lineSpacingMultiple: 1.05,
      margin: 0
    });
    s.addText("The governed, secure metadata management platform that turns ungoverned lakehouse sprawl into auditable, AI-ready data — deployed in hours, not weeks.", {
      x: 0.72,
      y: 5.25,
      w: 8.6,
      h: 0.9,
      fontFace: F.body,
      fontSize: 13.5,
      color: C.gray,
      lineSpacingMultiple: 1.14,
      margin: 0
    });
    s.addText("STRICTLY CONFIDENTIAL  ·  qbricks.ai  ·  sales@infinium.consulting", {
      x: 0.72,
      y: 6.78,
      w: 11,
      h: 0.3,
      fontFace: F.body,
      fontSize: 9.5,
      color: C.grayD,
      charSpacing: 1.5,
      margin: 0
    });
  }

  // ===================== 2. THE PROBLEM =====================
  {
    const s = pres.addSlide();
    base(s);
    pageNum(s, 2);
    kicker(s, "The problem");
    title(s, "Everyone is racing to deploy AI.\nMost of the data underneath isn't ready.", {
      size: 22
    });
    // left narrative
    s.addText([{
      text: "A 2025 MIT report found that around ",
      options: {
        color: C.gray
      }
    }, {
      text: "95% of AI-related use cases were failing",
      options: {
        color: C.white,
        bold: true
      }
    }, {
      text: " — and the primary cause was not the models. It was poor data quality and the absence of real metadata management.",
      options: {
        color: C.gray
      }
    }], {
      x: 0.55,
      y: 2.95,
      w: 7.5,
      h: 1.3,
      fontFace: F.body,
      fontSize: 14,
      lineSpacingMultiple: 1.22,
      margin: 0
    });
    s.addText("Vendors promise “one platform”. Consultancies promise to “engineer your data fabric”. Yet the underlying problem — ungoverned, poorly understood data — is rarely fixed. The usual answer is to throw money and people at it. It doesn't hold.", {
      x: 0.55,
      y: 4.4,
      w: 7.5,
      h: 1.5,
      fontFace: F.body,
      fontSize: 12.5,
      color: C.grayD,
      lineSpacingMultiple: 1.22,
      margin: 0
    });
    s.addText([{
      text: "QBricks fixes the layer everyone else skips — ",
      options: {
        color: C.gray
      }
    }, {
      text: "the governed metadata foundation that makes AI, analytics and regulatory reporting trustworthy.",
      options: {
        color: C.white,
        bold: true
      }
    }], {
      x: 0.55,
      y: 5.95,
      w: 7.5,
      h: 0.9,
      fontFace: F.body,
      fontSize: 12.5,
      lineSpacingMultiple: 1.18,
      margin: 0
    });
    // right stat panel
    card(s, 8.45, 2.55, 4.35, 4.0, C.panel2);
    iconOval(s, I.warn, 8.85, 2.9, 0.66);
    s.addText("95%", {
      x: 8.45,
      y: 3.55,
      w: 4.35,
      h: 1.2,
      fontFace: F.head,
      fontSize: 64,
      bold: true,
      color: C.red,
      align: "center",
      margin: 0
    });
    s.addText("of AI use cases are failing", {
      x: 8.65,
      y: 4.78,
      w: 3.95,
      h: 0.4,
      fontFace: F.head,
      fontSize: 14.5,
      bold: true,
      color: C.white,
      align: "center",
      margin: 0
    });
    s.addText("Not because of the models — because of the data beneath them.", {
      x: 8.75,
      y: 5.2,
      w: 3.75,
      h: 0.7,
      fontFace: F.body,
      fontSize: 11.5,
      color: C.gray,
      align: "center",
      lineSpacingMultiple: 1.15,
      margin: 0
    });
    s.addText("Source: 2025 MIT report", {
      x: 8.65,
      y: 6.05,
      w: 3.95,
      h: 0.3,
      fontFace: F.body,
      fontSize: 9.5,
      italic: true,
      color: C.grayD,
      align: "center",
      margin: 0
    });
    s.addNotes("Open on the 95% MIT figure — it reframes the AI conversation from models to data. Then validate the buyer's frustration with vendor and consultancy promises before positioning QBricks as the missing foundation.");
  }

  // ===================== 3. THE DATA SWAMP =====================
  {
    const s = pres.addSlide();
    base(s);
    pageNum(s, 3);
    kicker(s, "The failure mode");
    title(s, "Migration to a lakehouse can make it worse");
    s.addText("Software “unifies” the data, but governance quietly breaks — the lakehouse becomes a data swamp: technically unified, practically ungovernable.", {
      x: 0.55,
      y: 2.0,
      w: 12.25,
      h: 0.5,
      fontFace: F.body,
      fontSize: 13,
      color: C.gray,
      lineSpacingMultiple: 1.1,
      margin: 0
    });
    const items = [[I.cubes, "Hundreds of ungoverned notebooks", "Logic sprawls across files no one fully owns or can audit."], [I.sitemap, "Governance lost at the schema level", "Control erodes the moment data scales beyond a few tables."], [I.graph, "No reliable lineage or audit trail", "You can't show a regulator how a number was produced."], [I.warn, "AI stalls; cost and risk rise", "Every migration deepens the swamp — and the spend with it."]];
    const cw = 5.95,
      ch = 1.7,
      gx = 0.45,
      gy = 0.35,
      x0 = 0.55,
      y0 = 2.65;
    items.forEach((it, i) => {
      const x = x0 + i % 2 * (cw + gx),
        y = y0 + Math.floor(i / 2) * (ch + gy);
      card(s, x, y, cw, ch);
      iconOval(s, it[0], x + 0.3, y + 0.3, 0.66);
      s.addText(it[1], {
        x: x + 1.15,
        y: y + 0.32,
        w: cw - 1.4,
        h: 0.55,
        fontFace: F.head,
        fontSize: 14.5,
        bold: true,
        color: C.white,
        valign: "middle",
        margin: 0
      });
      s.addText(it[2], {
        x: x + 1.15,
        y: y + 0.92,
        w: cw - 1.4,
        h: 0.6,
        fontFace: F.body,
        fontSize: 11.5,
        color: C.gray,
        lineSpacingMultiple: 1.06,
        margin: 0
      });
    });
    s.addText([{
      text: "The fix isn't more money — it's a governed metadata foundation. ",
      options: {
        color: C.white,
        bold: true
      }
    }, {
      text: "That is exactly what QBricks provides.",
      options: {
        color: C.gray
      }
    }], {
      x: 0.55,
      y: 6.55,
      w: 12.25,
      h: 0.4,
      fontFace: F.body,
      fontSize: 12.5,
      align: "center",
      margin: 0
    });
  }

  // ===================== 4. BEFORE / AFTER =====================
  {
    const s = pres.addSlide();
    base(s);
    pageNum(s, 4);
    kicker(s, "The shift");
    title(s, "From data swamp to governed foundation");
    const colY = 2.4,
      colH = 4.0,
      cw = 5.95;
    // before
    card(s, 0.55, colY, cw, colH, C.panel);
    s.addText("WITHOUT QBRICKS", {
      x: 0.9,
      y: colY + 0.3,
      w: cw - 0.7,
      h: 0.35,
      fontFace: F.body,
      fontSize: 12,
      bold: true,
      color: C.grayD,
      charSpacing: 2,
      margin: 0
    });
    const before = ["Hundreds of ungoverned notebooks", "Governance lost at the schema level", "No reliable lineage or audit trail", "AI initiatives stall on poor data quality", "Cost and risk rise with every migration"];
    before.forEach((t, i) => {
      const yy = colY + 0.95 + i * 0.6;
      s.addImage({
        data: cross,
        x: 0.9,
        y: yy + 0.02,
        w: 0.24,
        h: 0.24
      });
      s.addText(t, {
        x: 1.28,
        y: yy - 0.05,
        w: cw - 0.8,
        h: 0.45,
        fontFace: F.body,
        fontSize: 12.5,
        color: C.gray,
        valign: "middle",
        margin: 0
      });
    });
    // after
    const ax = 0.55 + cw + 0.45;
    card(s, ax, colY, cw, colH, C.panel2);
    s.addText("WITH QBRICKS", {
      x: ax + 0.35,
      y: colY + 0.3,
      w: cw - 0.7,
      h: 0.35,
      fontFace: F.body,
      fontSize: 12,
      bold: true,
      color: C.red,
      charSpacing: 2,
      margin: 0
    });
    const after = ["Data Contracts & Data Products govern every workflow", "Metadata managed and largely automated", "Decision lineage tracked and fully auditable", "95% fewer data issues; AI built on trusted data", "Deployed in hours, at ~70% lower cost"];
    after.forEach((t, i) => {
      const yy = colY + 0.95 + i * 0.6;
      s.addImage({
        data: tick,
        x: ax + 0.35,
        y: yy + 0.02,
        w: 0.24,
        h: 0.24
      });
      s.addText(t, {
        x: ax + 0.73,
        y: yy - 0.05,
        w: cw - 1.0,
        h: 0.45,
        fontFace: F.body,
        fontSize: 12.5,
        color: C.white,
        valign: "middle",
        margin: 0
      });
    });
  }

  // ===================== 5. WHAT QBRICKS IS =====================
  {
    const s = pres.addSlide();
    base(s);
    pageNum(s, 5);
    kicker(s, "What QBricks is");
    title(s, "A sophisticated, governed, secure metadata platform", {
      size: 23
    });
    s.addText("QBricks builds and deploys data quality and ETL workflows through Data Contracts and Data Products, and automates much of metadata management. Enterprise-grade, cloud-agnostic and agentic-enabled — human always in the loop, everything auditable.", {
      x: 0.55,
      y: 2.0,
      w: 12.25,
      h: 0.7,
      fontFace: F.body,
      fontSize: 12.5,
      color: C.gray,
      lineSpacingMultiple: 1.15,
      margin: 0
    });
    const pillars = [[I.lock, "Governed by design", "Data Contracts and Data Products make every workflow explicit, owned and auditable. Governance is built in, not bolted on."], [I.robot, "Automated & agentic", "Agents handle the heavy lifting of metadata management and improve continuously, while humans stay in control and every decision is traceable."], [I.cloud, "Secure & cloud-agnostic", "Databricks- and Microsoft-level security, across whichever platform you run."]];
    const cw = 3.95,
      gx = 0.45,
      x0 = 0.55,
      y = 2.85,
      ch = 3.4;
    pillars.forEach((p, i) => {
      const x = x0 + i * (cw + gx);
      card(s, x, y, cw, ch);
      iconOval(s, p[0], x + 0.3, y + 0.32, 0.8);
      s.addText(p[1], {
        x: x + 0.3,
        y: y + 1.3,
        w: cw - 0.6,
        h: 0.5,
        fontFace: F.head,
        fontSize: 16,
        bold: true,
        color: C.white,
        margin: 0
      });
      s.addText(p[2], {
        x: x + 0.3,
        y: y + 1.85,
        w: cw - 0.6,
        h: 1.4,
        fontFace: F.body,
        fontSize: 12,
        color: C.gray,
        lineSpacingMultiple: 1.12,
        margin: 0
      });
    });
  }

  // ===================== 6. HOW IT WORKS =====================
  {
    const s = pres.addSlide();
    base(s);
    pageNum(s, 6);
    kicker(s, "How it works");
    title(s, "Define, deploy and govern — in one flow");
    const steps = [[I.contract, "DEFINE", "Express data quality & ETL logic as Data Contracts — explicit, owned, versioned."], [I.cubes, "COMPOSE", "Assemble contracts into Data Products the business can find, understand and trust."], [I.rocket, "DEPLOY", "A single file deploys infrastructure and workloads — no sprawl, live in hours."], [I.cogs, "AUTOMATE", "Agents take on routine metadata work and improve continuously — human in the loop."], [I.audit, "AUDIT", "Every decision and its lineage tracked. The entire process is auditable, end to end."]];
    const cw = 2.38,
      gx = 0.16,
      x0 = 0.55,
      y = 2.6,
      ch = 3.4;
    steps.forEach((st, i) => {
      const x = x0 + i * (cw + gx);
      card(s, x, y, cw, ch);
      iconOval(s, st[0], x + cw / 2 - 0.4, y + 0.32, 0.8);
      s.addText(String(i + 1), {
        x: x + 0.2,
        y: y + 0.22,
        w: 0.6,
        h: 0.4,
        fontFace: F.head,
        fontSize: 16,
        bold: true,
        color: C.red,
        margin: 0
      });
      s.addText(st[1], {
        x: x + 0.15,
        y: y + 1.32,
        w: cw - 0.3,
        h: 0.35,
        fontFace: F.head,
        fontSize: 14,
        bold: true,
        color: C.red,
        align: "center",
        margin: 0
      });
      s.addText(st[2], {
        x: x + 0.2,
        y: y + 1.78,
        w: cw - 0.4,
        h: 1.5,
        fontFace: F.body,
        fontSize: 11,
        color: C.gray,
        align: "center",
        lineSpacingMultiple: 1.1,
        margin: 0
      });
      if (i < steps.length - 1) s.addImage({
        data: arrow,
        x: x + cw + gx / 2 - 0.1,
        y: y + 0.62,
        w: 0.2,
        h: 0.2
      });
    });
  }

  // ===================== 7. CAPABILITIES =====================
  {
    const s = pres.addSlide();
    base(s);
    pageNum(s, 7);
    kicker(s, "Capabilities");
    title(s, "Built for the realities of a regulated bank");
    const caps = [[I.bolt, "Deploy in hours, not weeks", "Single-file deployment covers infrastructure and workloads — less sprawl, fewer errors."], [I.shield, "Cut data issues by 95%", "Robust ETL and data quality frameworks, governed through Data Contracts and Products."], [I.graph, "See and trust your data", "Ontologies and knowledge graphs structure your data for discovery, lineage and decisions."], [I.target, "Match with 99% accuracy", "The embedded Quantexa Trust Score assures 99% data matching accuracy."], [I.layers, "Simplify your lakehouse", "Seamless management of Databricks and Microsoft Fabric via contracts and products."], [I.users, "Break down business silos", "Knowledge alignment between decision-makers and field teams; every process auditable."]];
    const cw = 3.95,
      ch = 1.65,
      gx = 0.45,
      gy = 0.28,
      x0 = 0.55,
      y0 = 2.35;
    caps.forEach((c, i) => {
      const x = x0 + i % 3 * (cw + gx),
        y = y0 + Math.floor(i / 3) * (ch + gy);
      card(s, x, y, cw, ch);
      iconOval(s, c[0], x + 0.28, y + 0.3, 0.6);
      s.addText(c[1], {
        x: x + 1.05,
        y: y + 0.26,
        w: cw - 1.25,
        h: 0.5,
        fontFace: F.head,
        fontSize: 13.5,
        bold: true,
        color: C.white,
        valign: "middle",
        margin: 0
      });
      s.addText(c[2], {
        x: x + 0.28,
        y: y + 0.92,
        w: cw - 0.55,
        h: 0.65,
        fontFace: F.body,
        fontSize: 10.5,
        color: C.gray,
        lineSpacingMultiple: 1.08,
        margin: 0
      });
    });
  }

  // ===================== 8. PROOF =====================
  {
    const s = pres.addSlide();
    base(s);
    pageNum(s, 8);
    kicker(s, "The proof");
    title(s, "Four numbers that change the economics of trust");
    const stats = [["95%", "fewer data issues", "Governed contracts and quality frameworks at the source.", C.red], ["Hours", "to deploy, not weeks", "Single-file deployment of infrastructure and workloads.", C.white], ["~70%", "lower cost", "Versus manually developed and deployed workflows.", C.white], ["99%", "matching accuracy", "With the embedded Quantexa Trust Score.", C.white]];
    const cw = 2.95,
      gx = 0.3,
      x0 = 0.55,
      y = 2.55,
      ch = 3.0;
    stats.forEach((st, i) => {
      const x = x0 + i * (cw + gx);
      card(s, x, y, cw, ch, C.panel2);
      s.addText(st[0], {
        x: x + 0.2,
        y: y + 0.4,
        w: cw - 0.4,
        h: 1.0,
        fontFace: F.head,
        fontSize: st[0].length > 3 ? 32 : 44,
        bold: true,
        color: st[3],
        align: "center",
        margin: 0
      });
      s.addText(st[1], {
        x: x + 0.2,
        y: y + 1.55,
        w: cw - 0.4,
        h: 0.45,
        fontFace: F.head,
        fontSize: 14,
        bold: true,
        color: C.white,
        align: "center",
        margin: 0
      });
      s.addText(st[2], {
        x: x + 0.25,
        y: y + 2.05,
        w: cw - 0.5,
        h: 0.85,
        fontFace: F.body,
        fontSize: 11,
        color: C.gray,
        align: "center",
        lineSpacingMultiple: 1.12,
        margin: 0
      });
    });
    s.addText("Fully auditable, end to end — designed for environments where regulators, internal audit and risk all need to see how a decision was reached.", {
      x: 0.55,
      y: 5.85,
      w: 12.25,
      h: 0.5,
      fontFace: F.body,
      fontSize: 12,
      italic: true,
      color: C.grayD,
      align: "center",
      margin: 0
    });
  }

  // ===================== 9. COMPUTE COST =====================
  {
    const s = pres.addSlide();
    base(s);
    pageNum(s, 9);
    kicker(s, "The compute bill");
    s.addText([{
      text: "Say goodbye to ",
      options: {
        color: C.white,
        breakLine: true
      }
    }, {
      text: "cloud compute.",
      options: {
        color: C.red
      }
    }], {
      x: 0.55,
      y: 1.32,
      w: 11,
      h: 1.35,
      fontFace: F.head,
      fontSize: 31,
      bold: true,
      lineSpacingMultiple: 1.0,
      valign: "top",
      margin: 0
    });
    s.addText("Cloud data platforms meter every cluster, credit and capacity unit — billing whether you use it or not. QBricks runs on the desktops and laptops you already own. No cloud compute. No meter.", {
      x: 0.55,
      y: 2.62,
      w: 9.4,
      h: 0.7,
      fontFace: F.body,
      fontSize: 12.5,
      color: C.gray,
      lineSpacingMultiple: 1.15,
      margin: 0
    });
    const cards = [["CLUSTERS & SERVING", "Databricks", "$6,400", "per month · cloud compute", "$0.55 / DBU", "$76,800", false], ["WAREHOUSE CREDITS", "Snowflake", "$5,300", "per month · cloud compute", "$3.00 / credit", "$63,600", false], ["F64 CAPACITY, 24/7", "Microsoft Fabric", "$8,400", "per month · cloud compute", "$0.18 / CU-hr", "$100,800", false], ["LOCAL COMPUTE", "QBricks", "$0", "per month · processed on premise", "none", "$0", true]];
    const cw = 2.84,
      gap = 0.3,
      x0 = 0.55,
      y = 3.45,
      ch = 2.7;
    cards.forEach((c, i) => {
      const x = x0 + i * (cw + gap);
      if (c[6]) s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x,
        y,
        w: cw,
        h: ch,
        rectRadius: 0.07,
        fill: {
          color: "1A0C0A"
        },
        line: {
          color: C.red,
          width: 1.4
        },
        shadow: shadow()
      });else card(s, x, y, cw, ch, C.panel);
      s.addText(c[0], {
        x: x + 0.28,
        y: y + 0.26,
        w: cw - 0.5,
        h: 0.3,
        fontFace: F.body,
        fontSize: 8.5,
        bold: true,
        color: c[6] ? C.red : C.grayD,
        charSpacing: 1.2,
        margin: 0
      });
      s.addText(c[1], {
        x: x + 0.28,
        y: y + 0.62,
        w: cw - 0.5,
        h: 0.4,
        fontFace: F.head,
        fontSize: 15.5,
        bold: true,
        color: C.white,
        margin: 0
      });
      s.addText(c[2], {
        x: x + 0.28,
        y: y + 1.05,
        w: cw - 0.5,
        h: 0.65,
        fontFace: F.head,
        fontSize: 30,
        bold: true,
        color: c[6] ? C.red : C.white,
        margin: 0
      });
      s.addText(c[3], {
        x: x + 0.28,
        y: y + 1.78,
        w: cw - 0.5,
        h: 0.3,
        fontFace: F.body,
        fontSize: 9,
        color: C.grayD,
        margin: 0
      });
      s.addShape(pres.shapes.LINE, {
        x: x + 0.28,
        y: y + 2.12,
        w: cw - 0.56,
        h: 0,
        line: {
          color: C.line,
          width: 1
        }
      });
      s.addText("Billing unit", {
        x: x + 0.28,
        y: y + 2.2,
        w: 1.2,
        h: 0.25,
        fontFace: F.body,
        fontSize: 9,
        color: C.grayD,
        margin: 0
      });
      s.addText(c[4], {
        x: x + cw - 1.78,
        y: y + 2.2,
        w: 1.5,
        h: 0.25,
        fontFace: F.body,
        fontSize: 9,
        bold: true,
        color: C.white,
        align: "right",
        margin: 0
      });
      s.addText("Annualized", {
        x: x + 0.28,
        y: y + 2.42,
        w: 1.2,
        h: 0.25,
        fontFace: F.body,
        fontSize: 9,
        color: C.grayD,
        margin: 0
      });
      s.addText(c[5], {
        x: x + cw - 1.78,
        y: y + 2.42,
        w: 1.5,
        h: 0.25,
        fontFace: F.body,
        fontSize: 9,
        bold: true,
        color: c[6] ? C.red : C.white,
        align: "right",
        margin: 0
      });
    });
    s.addText("Indicative monthly cloud-compute figures for a representative mid-size workload — confirm against the prospect's actual usage before sharing externally.", {
      x: 0.55,
      y: 6.35,
      w: 12.25,
      h: 0.3,
      fontFace: F.body,
      fontSize: 9,
      italic: true,
      color: C.grayD,
      margin: 0
    });
    s.addNotes("Lead with the $0 local-compute card. The point: cloud platforms meter constantly; QBricks processes on hardware the bank already owns. Figures are indicative — confirm against the prospect's real usage before quoting.");
  }

  // ===================== 10. THE ENGINE =====================
  {
    const s = pres.addSlide();
    base(s);
    pageNum(s, 10);
    kicker(s, "Why it costs nothing to run");
    title(s, "No Spark. A single-node engine that computes only the delta", {
      size: 22
    });
    card(s, 0.55, 2.45, 7.15, 1.5, C.panel2);
    s.addText("THE PRODUCT TEAM'S OWN WORDING", {
      x: 0.85,
      y: 2.62,
      w: 6.5,
      h: 0.3,
      fontFace: F.body,
      fontSize: 9.5,
      bold: true,
      color: C.red,
      charSpacing: 1.2,
      margin: 0
    });
    s.addText("“No Spark — a vastly more efficient single-node paradigm, using the latest technology in database engines.”", {
      x: 0.85,
      y: 2.95,
      w: 6.55,
      h: 0.9,
      fontFace: F.head,
      fontSize: 14,
      bold: true,
      italic: true,
      color: C.white,
      lineSpacingMultiple: 1.1,
      margin: 0
    });
    const pts = [[I.server, "Runs on hardware you already own", "Commodity desktops and laptops — no cluster to spin up, no warehouse to meter."], [I.sync, "Compute the delta, not the dataset", "An initial materialised-view transfer at set-up; thereafter only the change is computed — which is trivial."]];
    let yy = 4.25;
    pts.forEach(p => {
      iconOval(s, p[0], 0.55, yy, 0.62);
      s.addText(p[1], {
        x: 1.4,
        y: yy - 0.02,
        w: 6.3,
        h: 0.4,
        fontFace: F.head,
        fontSize: 14,
        bold: true,
        color: C.white,
        margin: 0
      });
      s.addText(p[2], {
        x: 1.4,
        y: yy + 0.4,
        w: 6.3,
        h: 0.6,
        fontFace: F.body,
        fontSize: 11.5,
        color: C.gray,
        lineSpacingMultiple: 1.08,
        margin: 0
      });
      yy += 1.25;
    });
    card(s, 8.0, 2.45, 4.78, 4.0, C.panel2);
    s.addText("THE TECHNICAL POINT", {
      x: 8.3,
      y: 2.68,
      w: 4.2,
      h: 0.3,
      fontFace: F.body,
      fontSize: 9.5,
      bold: true,
      color: C.red,
      charSpacing: 1.2,
      margin: 0
    });
    s.addText([{
      text: "5M-row",
      options: {
        color: C.red,
        bold: true
      }
    }, {
      text: " join + aggregation",
      options: {
        color: C.white
      }
    }], {
      x: 8.3,
      y: 3.02,
      w: 4.2,
      h: 0.5,
      fontFace: F.head,
      fontSize: 18,
      bold: true,
      margin: 0
    });
    const rows = [["16 GB RAM · 8 cores", "commodity hardware"], ["A few hundred ms", "query time"], ["Delta only, after set-up", "≈ zero ongoing compute"]];
    let ry = 3.8;
    rows.forEach(r => {
      s.addText(r[0], {
        x: 8.3,
        y: ry,
        w: 4.2,
        h: 0.35,
        fontFace: F.head,
        fontSize: 14.5,
        bold: true,
        color: C.white,
        margin: 0
      });
      s.addText(r[1], {
        x: 8.3,
        y: ry + 0.34,
        w: 4.2,
        h: 0.3,
        fontFace: F.body,
        fontSize: 11,
        color: C.gray,
        margin: 0
      });
      ry += 0.82;
    });
    s.addText("Indicative benchmark — actual figures depend on data, hardware and workload.", {
      x: 0.55,
      y: 6.6,
      w: 12.25,
      h: 0.3,
      fontFace: F.body,
      fontSize: 9,
      italic: true,
      color: C.grayD,
      margin: 0
    });
  }

  // ===================== 11. QUANTEXA =====================
  {
    const s = pres.addSlide();
    base(s);
    pageNum(s, 11);
    kicker(s, "Differentiator");
    title(s, "Embedded Quantexa Trust Score");
    s.addText("QBricks ingests and embeds the Quantexa Trust Score directly into your data assets and products — so entities, transactions and relationships resolve correctly, and every transformation stays auditable.", {
      x: 0.55,
      y: 2.3,
      w: 7.3,
      h: 1.2,
      fontFace: F.body,
      fontSize: 13.5,
      color: C.gray,
      lineSpacingMultiple: 1.2,
      margin: 0
    });
    const pts = ["99% data matching accuracy with Quantexa", "The backbone for AML, KYC, fraud & contextual MDM", "Trust scoring carried into every Data Product", "Defensible entity resolution the regulator can follow"];
    pts.forEach((t, i) => {
      const yy = 3.75 + i * 0.62;
      s.addImage({
        data: tick,
        x: 0.55,
        y: yy + 0.02,
        w: 0.26,
        h: 0.26
      });
      s.addText(t, {
        x: 0.95,
        y: yy - 0.05,
        w: 6.6,
        h: 0.5,
        fontFace: F.body,
        fontSize: 13,
        color: C.white,
        valign: "middle",
        margin: 0
      });
    });
    card(s, 8.25, 2.3, 4.55, 4.05, C.panel2);
    iconOval(s, I.target, 8.7, 2.65, 0.7);
    s.addText("99%", {
      x: 8.25,
      y: 3.4,
      w: 4.55,
      h: 1.2,
      fontFace: F.head,
      fontSize: 60,
      bold: true,
      color: C.red,
      align: "center",
      margin: 0
    });
    s.addText("data matching accuracy", {
      x: 8.45,
      y: 4.6,
      w: 4.15,
      h: 0.4,
      fontFace: F.head,
      fontSize: 14.5,
      bold: true,
      color: C.white,
      align: "center",
      margin: 0
    });
    s.addText("Embedded with Quantexa", {
      x: 8.45,
      y: 5.05,
      w: 4.15,
      h: 0.4,
      fontFace: F.body,
      fontSize: 12,
      color: C.gray,
      align: "center",
      margin: 0
    });
    s.addText("Databricks · Microsoft Fabric · Snowflake · Quantexa", {
      x: 8.45,
      y: 5.75,
      w: 4.15,
      h: 0.4,
      fontFace: F.body,
      fontSize: 9.5,
      italic: true,
      color: C.grayD,
      align: "center",
      margin: 0
    });
  }

  // ===================== 10. SOLUTIONS =====================
  {
    const s = pres.addSlide();
    base(s);
    pageNum(s, 12);
    kicker(s, "Solutions");
    title(s, "Where governed metadata creates regulatory & commercial value", {
      size: 22
    });
    const uc = [[I.aml, "AML", "Trade, retail, markets & correspondent banking — 99% matching cuts false positives and makes investigations defensible."], [I.kyc, "KYC / pKYC / EDD", "A reliable single customer view; Data Products keep KYC current and audit-ready."], [I.fraud, "Fraud & financial crime", "Ontologies and knowledge graphs connect signals; trust scoring sharpens entity resolution."], [I.database, "Contextual MDM", "Governed, contextual master data with lineage — a trustworthy single view for cross-sell."], [I.chart, "Credit & ESG risk", "Governed, auditable data foundations with clear lineage — defensible models and reporting."], [I.graph, "Customer intelligence", "Interconnected, high-accuracy data powers discovery and informed commercial decisions."]];
    const cw = 3.95,
      ch = 1.7,
      gx = 0.45,
      gy = 0.28,
      x0 = 0.55,
      y0 = 2.35;
    uc.forEach((c, i) => {
      const x = x0 + i % 3 * (cw + gx),
        y = y0 + Math.floor(i / 3) * (ch + gy);
      card(s, x, y, cw, ch);
      iconOval(s, c[0], x + 0.28, y + 0.3, 0.6);
      s.addText(c[1], {
        x: x + 1.05,
        y: y + 0.28,
        w: cw - 1.25,
        h: 0.5,
        fontFace: F.head,
        fontSize: 14,
        bold: true,
        color: C.white,
        valign: "middle",
        margin: 0
      });
      s.addText(c[2], {
        x: x + 0.28,
        y: y + 0.95,
        w: cw - 0.55,
        h: 0.68,
        fontFace: F.body,
        fontSize: 10.5,
        color: C.gray,
        lineSpacingMultiple: 1.08,
        margin: 0
      });
    });
  }

  // ===================== 11. AML IN FOCUS =====================
  {
    const s = pres.addSlide();
    base(s);
    pageNum(s, 13);
    kicker(s, "Use case in focus — AML");
    title(s, "Governed data for AML that stands up to scrutiny");
    const cols = [["The pain", I.warn, "Alerts and investigations are only as good as the data feeding them. Poor matching and ungoverned data drive false positives, missed risk and regulatory findings.", false], ["How QBricks helps", I.lock, "Governed metadata plus the embedded Quantexa Trust Score deliver 99% matching, so entities, transactions and relationships resolve correctly — every transformation auditable.", true], ["The outcome", I.target, "Fewer false positives, defensible investigations and a lower cost to comply — across trade, retail, markets and correspondent banking AML.", false]];
    const cw = 3.95,
      gx = 0.45,
      x0 = 0.55,
      y = 2.5,
      ch = 3.5;
    cols.forEach((c, i) => {
      const x = x0 + i * (cw + gx);
      card(s, x, y, cw, ch, c[3] ? C.panel2 : C.panel);
      iconOval(s, c[1], x + 0.3, y + 0.32, 0.72);
      s.addText(c[0], {
        x: x + 0.3,
        y: y + 1.2,
        w: cw - 0.6,
        h: 0.5,
        fontFace: F.head,
        fontSize: 16,
        bold: true,
        color: c[3] ? C.red : C.white,
        margin: 0
      });
      s.addText(c[2], {
        x: x + 0.3,
        y: y + 1.78,
        w: cw - 0.6,
        h: 1.5,
        fontFace: F.body,
        fontSize: 12,
        color: C.gray,
        lineSpacingMultiple: 1.15,
        margin: 0
      });
    });
  }

  // ===================== 12. WHY QBRICKS (competitive table) =====================
  {
    const s = pres.addSlide();
    base(s);
    pageNum(s, 14);
    kicker(s, "Why QBricks");
    title(s, "“One platform” and “data fabric” don't fix metadata", {
      size: 23
    });
    const head = ["", "Catalogue / governance\n(Collibra, Purview)", "Native Databricks /\nFabric tooling", "Consultancy\n“data fabric”", "QBricks"];
    const rows = [["Fixes quality &\nmetadata at source", "Describes, doesn't fix", "Schema-level, erodes at scale", "Re-architects, persists", "Governs & automates the foundation"], ["Speed to deploy", "Long programmes", "Manual, multi-file", "Months of build", "Hours — single-file deploy"], ["Cost", "High licence + services", "Heavy manual effort", "High services cost", "~70% lower than manual build"], ["Auditability\n& lineage", "Partial", "Fragmented", "Depends on build", "End-to-end, agentic + human"]];
    const colW = [2.45, 2.55, 2.45, 2.35, 2.45];
    const tbl = [];
    tbl.push(head.map((h, i) => ({
      text: h,
      options: {
        fill: {
          color: i === 4 ? C.redDk : C.panel2
        },
        color: i === 4 ? C.white : C.gray,
        bold: true,
        fontSize: 10.5,
        fontFace: F.head,
        align: i === 0 ? "left" : "center",
        valign: "middle"
      }
    })));
    rows.forEach((r, ri) => {
      tbl.push(r.map((cell, ci) => ({
        text: cell,
        options: {
          fill: {
            color: ci === 4 ? "2A0F0B" : ri % 2 ? C.panel : C.panel2
          },
          color: ci === 4 ? C.white : ci === 0 ? C.white : C.gray,
          bold: ci === 0 || ci === 4,
          fontSize: ci === 0 ? 11 : 10.5,
          fontFace: F.body,
          align: ci === 0 ? "left" : "center",
          valign: "middle"
        }
      })));
    });
    s.addTable(tbl, {
      x: 0.55,
      y: 2.35,
      w: 12.25,
      colW,
      rowH: [0.7, 0.82, 0.62, 0.62, 0.82],
      border: {
        type: "solid",
        pt: 0.5,
        color: C.bg
      },
      margin: [3, 6, 3, 6]
    });
    s.addText("Position by capability, not disparagement — competitor references kept factual and defensible.", {
      x: 0.55,
      y: 6.55,
      w: 12.25,
      h: 0.3,
      fontFace: F.body,
      fontSize: 10.5,
      italic: true,
      color: C.grayD,
      margin: 0
    });
  }

  // ===================== 13. INTEGRATIONS =====================
  {
    const s = pres.addSlide();
    base(s);
    pageNum(s, 15);
    kicker(s, "Integrations");
    title(s, "Works with the platforms your bank already runs on");
    const ints = [[I.layers, "Databricks", "Simplifies management of Databricks infrastructure via Data Contracts and Products; tames notebook sprawl. Databricks-level security."], [I.cubes, "Microsoft Fabric", "Governs and simplifies Fabric workloads through single-file deployment and contracts. Microsoft-level security."], [I.database, "Snowflake", "Governed metadata, data quality and ETL workflows across Snowflake — cloud-agnostic by design."], [I.target, "Quantexa", "Embeds the Quantexa Trust Score for 99% matching — the backbone for AML, KYC, fraud and contextual MDM."]];
    const cw = 2.95,
      gx = 0.3,
      x0 = 0.55,
      y = 2.5,
      ch = 3.1;
    ints.forEach((c, i) => {
      const x = x0 + i * (cw + gx);
      card(s, x, y, cw, ch);
      iconOval(s, c[0], x + cw / 2 - 0.4, y + 0.32, 0.8);
      s.addText(c[1], {
        x: x + 0.2,
        y: y + 1.3,
        w: cw - 0.4,
        h: 0.45,
        fontFace: F.head,
        fontSize: 15,
        bold: true,
        color: C.white,
        align: "center",
        margin: 0
      });
      s.addText(c[2], {
        x: x + 0.25,
        y: y + 1.82,
        w: cw - 0.5,
        h: 1.2,
        fontFace: F.body,
        fontSize: 10.5,
        color: C.gray,
        align: "center",
        lineSpacingMultiple: 1.12,
        margin: 0
      });
    });
    s.addText("Cloud-agnostic — run QBricks across one platform or several, with Databricks- and Microsoft-level security.", {
      x: 0.55,
      y: 5.85,
      w: 12.25,
      h: 0.4,
      fontFace: F.body,
      fontSize: 12,
      italic: true,
      color: C.grayD,
      align: "center",
      margin: 0
    });
  }

  // ===================== 14. GCC CREDIBILITY =====================
  {
    const s = pres.addSlide();
    base(s);
    pageNum(s, 16);
    kicker(s, "Built for the GCC");
    title(s, "Built for the realities of GCC financial services");
    s.addText("QBricks is developed by Infinium Consulting (NextWave Infinium) and built for the demands regulated banks face in the region. Enterprise-grade product, with deployment and support tailored to the GCC.", {
      x: 0.55,
      y: 2.0,
      w: 12.25,
      h: 0.6,
      fontFace: F.body,
      fontSize: 13,
      color: C.gray,
      lineSpacingMultiple: 1.12,
      margin: 0
    });
    const items = [[I.shield, "Regulatory scrutiny", "Central Bank and financial-crime regimes demand auditable, governed data — now a board-level issue."], [I.chart, "AI & data monetisation", "The regional push toward AI and data monetisation needs a trusted, governed foundation underneath."], [I.audit, "Trust & auditability", "The standards UAE & GCC institutions are held to — provable lineage, end to end."], [I.handshake, "In-region delivery", "Enterprise-grade product, with deployment and support tailored to the region."]];
    const cw = 5.95,
      ch = 1.7,
      gx = 0.45,
      gy = 0.32,
      x0 = 0.55,
      y0 = 2.75;
    items.forEach((it, i) => {
      const x = x0 + i % 2 * (cw + gx),
        y = y0 + Math.floor(i / 2) * (ch + gy);
      card(s, x, y, cw, ch);
      iconOval(s, it[0], x + 0.3, y + 0.3, 0.66);
      s.addText(it[1], {
        x: x + 1.15,
        y: y + 0.3,
        w: cw - 1.4,
        h: 0.55,
        fontFace: F.head,
        fontSize: 14.5,
        bold: true,
        color: C.white,
        valign: "middle",
        margin: 0
      });
      s.addText(it[2], {
        x: x + 1.15,
        y: y + 0.9,
        w: cw - 1.4,
        h: 0.65,
        fontFace: F.body,
        fontSize: 11.5,
        color: C.gray,
        lineSpacingMultiple: 1.08,
        margin: 0
      });
    });
  }

  // ===================== 15. ABOUT =====================
  {
    const s = pres.addSlide();
    base(s);
    pageNum(s, 17);
    kicker(s, "About");
    title(s, "The platform behind trustworthy AI in financial services", {
      size: 23
    });
    const cols = [["QBricks & Infinium", "QBricks is developed and owned by Infinium Consulting B.V., operating under the NextWave Infinium identity — their product and their IP: an AI-enabled metadata management platform for governed, secure enterprise data."], ["Our mission", "To fix the layer the market skips — the governed metadata foundation that makes AI, analytics and regulatory reporting trustworthy. Most AI initiatives fail not on the models, but on the data beneath them."], ["Built for the GCC", "Designed for the realities of financial services in the UAE and wider GCC — regulatory scrutiny, the drive toward AI and data monetisation, and the auditability regulators here demand."]];
    const cw = 3.95,
      gx = 0.45,
      x0 = 0.55,
      y = 2.55,
      ch = 3.6;
    cols.forEach((c, i) => {
      const x = x0 + i * (cw + gx);
      card(s, x, y, cw, ch);
      s.addText(c[0], {
        x: x + 0.3,
        y: y + 0.3,
        w: cw - 0.6,
        h: 0.5,
        fontFace: F.head,
        fontSize: 16,
        bold: true,
        color: C.red,
        margin: 0
      });
      s.addText(c[1], {
        x: x + 0.3,
        y: y + 1.0,
        w: cw - 0.6,
        h: 2.4,
        fontFace: F.body,
        fontSize: 12,
        color: C.gray,
        lineSpacingMultiple: 1.18,
        margin: 0
      });
    });
  }

  // ===================== 16. CTA (closing) =====================
  {
    const s = pres.addSlide();
    closingChrome(s);
    pageNum(s, 18);
    kicker(s, "Next steps");
    s.addText("See QBricks on your data", {
      x: 0.55,
      y: 2.4,
      w: 11.5,
      h: 1.0,
      fontFace: F.head,
      fontSize: 36,
      bold: true,
      color: C.white,
      margin: 0
    });
    s.addText("Tell us your platform and priority use case — AML, KYC/pKYC, fraud, MDM or risk — and we'll tailor a short demo. You'll see single-file deployment, governed Data Contracts and the audit trail that comes with them.", {
      x: 0.55,
      y: 3.55,
      w: 8.3,
      h: 1.2,
      fontFace: F.body,
      fontSize: 14,
      color: C.gray,
      lineSpacingMultiple: 1.2,
      margin: 0
    });
    // contact rows
    const rows = [[I.mail, "sales@infinium.consulting"], [I.globe, "qbricks.ai"]];
    rows.forEach(([ic, t], i) => {
      const y = 5.05 + i * 0.7;
      iconOval(s, ic, 0.55, y, 0.5);
      s.addText(t, {
        x: 1.2,
        y: y - 0.03,
        w: 7,
        h: 0.56,
        fontFace: F.head,
        fontSize: 15,
        bold: true,
        color: C.white,
        valign: "middle",
        margin: 0
      });
    });
  }
  await pres.writeFile({
    fileName: process.env.OUT || "QBricks_Deck.pptx"
  });
  console.log("wrote deck");
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "Context/deck.js", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** QBricks wordmark logo (PNG). Pass `src` to point at assets/qbricks-logo.png relative to your page. */
function Logo({
  src = "assets/qbricks-logo.png",
  height = 48,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: src,
    alt: "QBricks logo",
    style: {
      display: "block",
      height,
      width: "auto",
      objectFit: "contain",
      objectPosition: "left",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/brand/QBricksText.jsx
try { (() => {
/**
 * Inline "QBricks" wordmark in prose. ALWAYS rendered in Quicksand:
 * bold (700) brand-red #FF3A26 "Q" + regular (400) white "Bricks",
 * inline with no spacing between the parts. Use for every text mention —
 * headings, body copy, navigation, buttons, cards and footer links.
 */
function QBricksText() {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline",
      fontFamily: '"Quicksand", var(--font-sans)',
      letterSpacing: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      color: "#FF3A26"
    }
  }, "Q"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 400,
      color: "#FFFFFF"
    }
  }, "Bricks"));
}
Object.assign(__ds_scope, { QBricksText });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/QBricksText.jsx", error: String((e && e.message) || e) }); }

// components/brand/QIcon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** QBricks square icon mark with red drop-glow. Pass `src` to assets/QBricks-icon.png. */
function QIcon({
  src = "assets/QBricks-icon.png",
  size = 48,
  glow = true,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: src,
    alt: "QBricks",
    style: {
      display: "inline-block",
      width: size,
      height: size,
      objectFit: "contain",
      filter: glow ? "drop-shadow(0 0 10px rgba(232,32,15,0.55))" : "none",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { QIcon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/QIcon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * QBricks pill button. Variants: "primary" (solid brand red), "secondary" (glass),
 * "hero" (red gradient + glow). Values copied from the qbricks.ai source.
 */
function Button({
  variant = "primary",
  size = "md",
  children,
  arrow = false,
  style = {},
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const pad = size === "lg" ? "1rem 2rem" : "0.875rem 1.5rem";
  const fontSize = size === "lg" ? "1rem" : "0.875rem";
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    borderRadius: 9999,
    padding: pad,
    fontFamily: "var(--font-sans)",
    fontSize,
    fontWeight: 700,
    color: "#fff",
    border: "1px solid transparent",
    cursor: "pointer",
    textDecoration: "none",
    transition: "all 300ms cubic-bezier(0.22,1,0.36,1)",
    transform: hover ? "translateY(-2px)" : "translateY(0)",
    position: "relative",
    overflow: "hidden"
  };
  const variants = {
    primary: {
      background: hover ? "var(--q-brand-ember)" : "var(--q-brand)"
    },
    secondary: {
      background: hover ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.055)",
      border: hover ? "1px solid rgba(255,255,255,0.2)" : "1px solid rgba(255,255,255,0.1)",
      backdropFilter: "blur(24px)"
    },
    hero: {
      background: "linear-gradient(to right, #c91b0d, #ff3a26, #ff7669)",
      boxShadow: "0 0 50px rgba(232,32,15,0.3)"
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    style: {
      ...base,
      ...variants[variant],
      ...style
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      zIndex: 1,
      display: "inline-flex",
      alignItems: "center",
      gap: "0.5rem"
    }
  }, children, arrow && /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      transition: "transform 300ms",
      transform: hover ? "translateX(3px)" : "none"
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m12 5 7 7-7 7"
  }))));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
/** Section eyebrow: 0.75rem, uppercase, 0.18em tracking, bold, ember red. */
function Eyebrow({
  children,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "0.75rem",
      textTransform: "uppercase",
      letterSpacing: "0.18em",
      fontWeight: 700,
      color: "var(--q-brand-ember)",
      margin: 0,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/GlassCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * QBricks glass card. variant="glass" (.glass-panel) | "premium" (.premium-card).
 */
function GlassCard({
  variant = "glass",
  padding = "1.5rem",
  children,
  style = {},
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const shared = {
    position: "relative",
    overflow: "hidden",
    padding,
    backdropFilter: "blur(24px)",
    transition: "all 500ms cubic-bezier(0.22,1,0.36,1)",
    fontFamily: "var(--font-sans)"
  };
  const variants = {
    glass: {
      borderRadius: "1.5rem",
      border: hover ? "1px solid rgba(255,255,255,0.2)" : "1px solid rgba(255,255,255,0.1)",
      background: hover ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.045)"
    },
    premium: {
      borderRadius: "2rem",
      border: "1px solid rgba(255,255,255,0.1)",
      background: "linear-gradient(to bottom, rgba(255,255,255,0.08), rgba(255,255,255,0.025))",
      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12), 0 24px 80px rgba(0,0,0,0.45)"
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      ...shared,
      ...variants[variant],
      ...style
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), children);
}
Object.assign(__ds_scope, { GlassCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/GlassCard.jsx", error: String((e && e.message) || e) }); }

// components/core/IntegrationTile.jsx
try { (() => {
const {
  useState
} = React;
/**
 * Integration logo tile — glass card, logo grayscale until hover.
 * The Microsoft Fabric logo needs invert treatment on dark (set invert).
 */
function IntegrationTile({
  src,
  name,
  invert = false,
  style = {}
}) {
  const [hover, setHover] = useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "7rem",
      borderRadius: "1.5rem",
      border: hover ? "1px solid rgba(255,255,255,0.2)" : "1px solid rgba(255,255,255,0.1)",
      background: hover ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.035)",
      backdropFilter: "blur(24px)",
      transition: "all 300ms cubic-bezier(0.22,1,0.36,1)",
      transform: hover ? "translateY(-4px)" : "none",
      padding: "1.5rem",
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      maxHeight: "3rem",
      maxWidth: "10rem",
      objectFit: "contain",
      filter: `${hover ? "grayscale(0)" : "grayscale(1)"}${invert ? " invert(1) hue-rotate(180deg) brightness(1.1) contrast(1.25)" : ""}`,
      transition: "filter 500ms"
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "1.5rem",
      fontWeight: 900,
      letterSpacing: "-0.025em",
      color: hover ? "#fff" : "rgba(255,255,255,0.75)"
    }
  }, name));
}
Object.assign(__ds_scope, { IntegrationTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IntegrationTile.jsx", error: String((e && e.message) || e) }); }

// components/core/Pill.jsx
try { (() => {
/**
 * Small pill badge/tag. tone: "neutral" | "brand" | "success".
 * Matches the source's highlight chips ("No Spark", "Audit-ready", "Governed").
 */
function Pill({
  tone = "neutral",
  uppercase = false,
  children,
  style = {}
}) {
  const tones = {
    neutral: {
      border: "1px solid rgba(255,255,255,0.1)",
      background: "rgba(255,255,255,0.04)",
      color: "var(--q-gray-300)"
    },
    brand: {
      border: "1px solid rgba(232,32,15,0.25)",
      background: "rgba(232,32,15,0.1)",
      color: "var(--q-brand-ember)"
    },
    success: {
      border: "1px solid rgba(52,211,153,0.3)",
      background: "rgba(52,211,153,0.1)",
      color: "var(--q-emerald-300)"
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.375rem",
      borderRadius: 9999,
      padding: uppercase ? "0.375rem 0.75rem" : "0.25rem 0.75rem",
      fontFamily: "var(--font-sans)",
      fontSize: uppercase ? "0.65rem" : "0.75rem",
      fontWeight: 700,
      textTransform: uppercase ? "uppercase" : "none",
      letterSpacing: uppercase ? "0.22em" : "normal",
      whiteSpace: "nowrap",
      ...tones[tone],
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Pill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Pill.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
/**
 * Centered section heading block: eyebrow + clamp-sized black headline + optional lead.
 */
function SectionHeading({
  eyebrow,
  title,
  lead,
  size = "lg",
  align = "center",
  style = {}
}) {
  const sizes = {
    lg: "clamp(2.4rem, 5.6vw, 5.6rem)",
    md: "clamp(2.5rem, 5.5vw, 5.4rem)",
    sm: "clamp(2rem, 4vw, 3.7rem)"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "64rem",
      margin: align === "center" ? "0 auto" : 0,
      textAlign: align,
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, eyebrow ? /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    style: {
      marginBottom: "1.25rem"
    }
  }, eyebrow) : null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: sizes[size],
      fontWeight: 900,
      lineHeight: 0.96,
      letterSpacing: "-0.025em",
      color: "#fff"
    }
  }, title), lead ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "1.75rem auto 0",
      maxWidth: "48rem",
      fontSize: "1.25rem",
      lineHeight: 1.625,
      color: "var(--q-gray-300)"
    }
  }, lead) : null);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever you want the user to
 * supply an image. You control the slot's shape and size; the user fills it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The host bridge only allows sidecar writes at the project root, so the
 * HTML that uses this component is assumed to live at the project root too
 * (same constraint as design_canvas.jsx).
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          object-fit: cover | contain | fill.       (default 'cover')
 *                With cover (the default) double-clicking the filled slot
 *                enters a reframe mode: the whole image spills past the mask
 *                (translucent outside, opaque inside), drag to reposition,
 *                corner-drag to scale. The crop persists alongside the image
 *                in the sidecar. contain/fill stay static.
 *   position     object-position for fit=contain|fill.     (default '50% 50%')
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. A user drop overrides
 *                it; clearing the drop reveals src again.
 *
 * Size and layout come from ordinary CSS on the element — width/height
 * inline or from a parent grid — so it composes with any layout.
 *
 * Usage:
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet = ':host{display:inline-block;position:relative;vertical-align:top;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;color:rgba(0,0,0,.55);width:240px;height:160px}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(0,0,0,.04)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  '.spill{position:absolute;transform:translate(-50%,-50%);display:none;z-index:1;' + '  cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .spill{display:block}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px;text-decoration-color:rgba(0,0,0,.25)}' + '.empty:hover .sub u{color:rgba(0,0,0,.75);text-decoration-color:currentColor}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed rgba(0,0,0,.25);' + '  transition:border-color .12s}' + ':host([data-over]) .ring{border-color:#c96442}' + ':host([data-filled]) .ring{display:none}' +
  // Controls sit BELOW the mask (top:100%), absolutely positioned so the
  // author-declared slot height is unaffected. The gap is padding, not a
  // top offset, so the hover target stays contiguous with the frame.
  '.ctl{position:absolute;top:100%;left:50%;transform:translateX(-50%);padding-top:8px;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'position', 'placeholder', 'src', 'id'];
    }
    constructor() {
      super();
      const root = this.attachShadow({
        mode: 'open'
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="ring" part="ring"></div>' + '</div>' + '<div class="spill">' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' + '<div class="ctl"><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="clear" title="Remove image">Remove</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (act === 'replace') {
          this._exitReframe(true);
          this._input.click();
        }
        if (act === 'clear') {
          this._exitReframe(false);
          this._gen++;
          this._local = null;
          if (this.id) setSlot(this.id, null);else this._render();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      this._img.addEventListener('load', () => this._applyView());
      // Gated on editable + fit=cover so share links and contain/fill slots
      // stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const base = Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (commit) this._commitView();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is only meaningful for fit=cover — contain/fill
    // keep the old object-fit path and double-click is a no-op.
    _reframes() {
      return this.hasAttribute('data-filled') && (this.getAttribute('fit') || 'cover') === 'cover';
    }

    // Cover-baseline geometry, shared by clamp/apply/resize. Null until the
    // img has loaded (naturalWidth is 0 before that) or when the slot has no
    // layout box — ResizeObserver fires with a 0×0 rect under display:none,
    // and clamping against a degenerate 1×1 frame would silently pull the
    // stored pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      return {
        iw,
        ih,
        fw,
        fh,
        base: Math.max(fw / iw, fh / ih)
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      const fit = this.getAttribute('fit') || 'cover';
      if (fit !== 'cover' || !g) {
        // Non-cover, or dimensions not known yet (before img load).
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = fit;
        this._img.style.objectPosition = this.getAttribute('position') || '50% 50%';
        return;
      }
      // Cover baseline: img fills the frame on its tighter axis at s=1, so
      // pan works immediately on the overflowing axis without zooming first.
      // Width/height and left/top are all frame-% — depends only on the
      // frame aspect ratio, so a responsive resize keeps the same crop. The
      // spill layer mirrors the same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      this._spill.style.width = w;
      this._spill.style.height = h;
      this._spill.style.left = l;
      this._spill.style.top = t;
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      if (url) {
        if (this._img.getAttribute('src') !== url) {
          this._img.src = url;
          this._ghost.src = url;
        }
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        this._empty.style.display = 'flex';
        this.removeAttribute('data-filled');
      }
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "image-slot.js", error: String((e && e.message) || e) }); }

// tailwind.config.ts
try { (() => {
const config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "q-brand": "#e8200f",
        "q-brand-ember": "#ff3a26",
        "q-black": "#000000",
        "q-panel": "#0a0a0a",
        "q-panel-hover": "#121212",
        "q-gray-100": "#f4f4f5",
        "q-gray-200": "#e4e4e7",
        "q-gray-300": "#d4d4d8",
        "q-gray-400": "#a1a1aa",
        "q-gray-500": "#71717a",
        "q-gray-800": "#27272a",
        "q-gray-900": "#18181b"
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-plus-jakarta)", "ui-sans-serif", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};
Object.assign(__ds_scope, { config, __ds_default_tailwind_config_1ys3eat: config });
})(); } catch (e) { __ds_ns.__errors.push({ path: "tailwind.config.ts", error: String((e && e.message) || e) }); }

// ui_kits/website/footer.jsx
try { (() => {
// QBricks footer — recreation of src/components/layout/Footer.tsx
const footerColumns = [{
  title: "Product",
  links: ["Overview", "Solutions", "Integrations", "Why QBricks"]
}, {
  title: "Use cases",
  links: ["AML", "KYC / pKYC", "Fraud", "MDM & risk"]
}, {
  title: "Company",
  links: ["Resources", "About", "Contact"]
}];
function Footer() {
  const {
    Logo,
    QBricksText
  } = window.QBricksDesignSystem_7fa054;
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderTop: "1px solid rgba(255,255,255,0.05)",
      background: "#040404",
      padding: "80px 0 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      height: 1,
      background: "linear-gradient(to right, transparent, rgba(232,32,15,0.7), transparent)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: 0,
      top: 0,
      height: 320,
      width: 320,
      borderRadius: "50%",
      background: "rgba(232,32,15,0.08)",
      filter: "blur(100px)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      margin: "0 auto",
      maxWidth: "80rem",
      padding: "0 32px",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 64,
      display: "grid",
      gap: 48,
      gridTemplateColumns: "1.2fr 2fr"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 24,
      marginLeft: "-0.6rem"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    src: "../../assets/qbricks-logo.png",
    height: 40,
    style: {
      opacity: 0.9
    }
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: "24rem",
      fontSize: 14,
      lineHeight: 1.625,
      color: "var(--q-gray-500)"
    }
  }, "A.I.-enabled metadata management for your organisation. Built for governed, secure, auditable enterprise data.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 32,
      gridTemplateColumns: "repeat(3, 1fr)"
    }
  }, footerColumns.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.title
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: "0 0 20px",
      fontWeight: 900,
      color: "#fff"
    }
  }, col.title), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: "none",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      fontSize: 14,
      color: "var(--q-gray-400)"
    }
  }, col.links.map(label => /*#__PURE__*/React.createElement("li", {
    key: label
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: "inherit",
      textDecoration: "none"
    }
  }, label === "Why QBricks" ? /*#__PURE__*/React.createElement(React.Fragment, null, "Why ", /*#__PURE__*/React.createElement(QBricksText, null)) : label)))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 16,
      borderTop: "1px solid rgba(255,255,255,0.05)",
      paddingTop: 32
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 12,
      color: "#52525b"
    }
  }, "\xA9 2026 Infinium Consulting B.V. All rights reserved."), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "#52525b"
    }
  }, "qbricks.ai"))));
}
Object.assign(window, {
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/hero.jsx
try { (() => {
// QBricks hero — recreation of src/components/interactive/Hero.tsx (simplified, no framer-motion)
const heroCarouselItems = [{
  text: "Zero vendor lock in",
  icon: "Unlock",
  tone: "var(--q-emerald-300)"
}, {
  text: "No armies of engineers",
  icon: "Users",
  tone: "var(--q-blue-300)"
}, {
  text: "No Spark processing",
  icon: "Cpu",
  tone: "var(--q-amber-300)"
}, {
  text: "Open Data Contracts",
  icon: "FileSignature",
  tone: "var(--q-brand-ember)"
}, {
  text: "Catalogue of Catalogues",
  icon: "Layers3",
  tone: "var(--q-violet-300)"
}];
const heroFlowSteps = [{
  label: "Data sprawl detection",
  icon: "Database",
  tone: "var(--q-amber-300)"
}, {
  label: "Data Lineage",
  icon: "GitBranch",
  tone: "var(--q-blue-300)"
}, {
  label: "Data Ontologies",
  icon: "Network",
  tone: "var(--q-brand-ember)"
}, {
  label: "Data Insights",
  icon: "Lightbulb",
  tone: "var(--q-emerald-300)"
}, {
  label: "Agentic data mesh",
  icon: "Boxes",
  tone: "var(--q-violet-300)"
}];
const heroProofPoints = [{
  value: "Fewer data issues",
  icon: "ShieldCheck"
}, {
  value: "No Spark",
  icon: "Cpu"
}, {
  value: "100% auditable",
  icon: "Search"
}];
function DataCommandCentre() {
  const {
    QIcon
  } = window.QBricksDesignSystem_7fa054;
  const [activeStep, setActiveStep] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setActiveStep(s => (s + 1) % heroFlowSteps.length), 2400);
    return () => clearInterval(t);
  }, []);
  const active = heroFlowSteps[activeStep];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      margin: "0 auto",
      width: "100%",
      maxWidth: 560
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "50%",
      top: "50%",
      height: 420,
      width: 420,
      transform: "translate(-50%,-50%)",
      borderRadius: "50%",
      background: "rgba(232,32,15,0.15)",
      filter: "blur(140px)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: "2.25rem",
      border: "1px solid rgba(255,255,255,0.1)",
      background: "rgba(255,255,255,0.035)",
      padding: 16,
      boxShadow: "0 40px 120px rgba(0,0,0,0.65)",
      backdropFilter: "blur(40px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: "1.75rem",
      border: "1px solid rgba(255,255,255,0.1)",
      background: "rgba(5,5,5,0.92)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      borderBottom: "1px solid rgba(255,255,255,0.1)",
      padding: "16px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/qbricks-logo.png",
    alt: "QBricks",
    style: {
      height: 36,
      width: "auto"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      borderRadius: 9999,
      border: "1px solid rgba(232,32,15,0.25)",
      background: "rgba(232,32,15,0.1)",
      padding: "6px 12px",
      fontSize: "0.65rem",
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "0.22em",
      color: "var(--q-brand-ember)"
    }
  }, "Capstone")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      borderRadius: 12,
      background: "rgba(255,255,255,0.04)",
      padding: "6px 12px"
    }
  }, /*#__PURE__*/React.createElement(LucideIcon, {
    name: "Cpu",
    size: 16,
    style: {
      color: "var(--q-emerald-300)"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 9,
      textTransform: "uppercase",
      letterSpacing: "0.18em",
      color: "var(--q-gray-400)"
    }
  }, "Compute"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 11,
      fontWeight: 700,
      color: "#fff"
    }
  }, "Local \xB7 No Spark")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 16,
      padding: 20,
      gridTemplateColumns: "0.9fr 1.1fr"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, heroFlowSteps.map((step, i) => {
    const on = i === activeStep;
    return /*#__PURE__*/React.createElement("div", {
      key: step.label,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        borderRadius: 16,
        padding: 10,
        border: on ? "1px solid rgba(232,32,15,0.45)" : "1px solid rgba(255,255,255,0.08)",
        background: on ? "rgba(232,32,15,0.12)" : "rgba(255,255,255,0.035)",
        boxShadow: on ? "0 0 40px rgba(232,32,15,0.18)" : "none",
        opacity: on ? 1 : 0.55,
        transform: on ? "translateX(8px)" : "none",
        transition: "all 500ms cubic-bezier(0.22,1,0.36,1)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        padding: 8,
        borderRadius: 12,
        border: "1px solid rgba(255,255,255,0.1)",
        background: "rgba(255,255,255,0.05)",
        color: step.tone
      }
    }, /*#__PURE__*/React.createElement(LucideIcon, {
      name: step.icon,
      size: 16
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        fontWeight: 700,
        color: "#fff"
      }
    }, step.label));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 24,
      border: "1px solid rgba(255,255,255,0.1)",
      background: "#000",
      padding: 20,
      display: "flex",
      flexDirection: "column",
      gap: 16,
      minHeight: 355,
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "q-bg-grid",
    style: {
      position: "absolute",
      inset: 0,
      opacity: 0.3
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 12,
      textTransform: "uppercase",
      letterSpacing: "0.2em",
      color: "var(--q-gray-500)",
      maxWidth: 140,
      lineHeight: 1.6
    }
  }, "Catalogue of Catalogues"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      whiteSpace: "nowrap",
      borderRadius: 9999,
      border: "1px solid rgba(52,211,153,0.3)",
      background: "rgba(52,211,153,0.1)",
      padding: "2px 8px",
      fontSize: 10,
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "0.05em",
      color: "var(--q-emerald-300)"
    }
  }, "Audit-ready"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      fontWeight: 700,
      color: "#fff",
      textAlign: "right"
    }
  }, "Trusted data", /*#__PURE__*/React.createElement("br", null), "products"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      margin: "0 auto",
      height: 176,
      width: 176,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, [0, 1, 2].map(r => /*#__PURE__*/React.createElement("div", {
    key: r,
    style: {
      position: "absolute",
      inset: r * 24,
      borderRadius: "50%",
      border: "1px solid rgba(255,255,255,0.1)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 1,
      display: "flex",
      height: 96,
      width: 96,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "2rem",
      border: "1px solid rgba(255,255,255,0.15)",
      background: "rgba(255,255,255,0.06)",
      boxShadow: "0 0 70px rgba(232,32,15,0.28)",
      backdropFilter: "blur(24px)"
    }
  }, /*#__PURE__*/React.createElement(QIcon, {
    src: "../../assets/QBricks-icon.png",
    size: 48
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      bottom: -8,
      right: -8,
      display: "flex",
      height: 32,
      width: 32,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 12,
      border: "1px solid rgba(255,255,255,0.15)",
      background: "rgba(0,0,0,0.8)",
      color: active.tone
    }
  }, /*#__PURE__*/React.createElement(LucideIcon, {
    name: active.icon,
    size: 16
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 10,
      position: "relative"
    }
  }, [["Contracts", "42", "#fff"], ["Agents", "60+", "var(--q-emerald-300)"], ["Records", "5M", "#fff"]].map(([label, val, color]) => /*#__PURE__*/React.createElement("div", {
    key: label,
    style: {
      borderRadius: 16,
      border: "1px solid rgba(255,255,255,0.1)",
      background: "rgba(255,255,255,0.04)",
      padding: 12
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 10,
      color: "var(--q-gray-500)"
    }
  }, label), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "4px 0 0",
      fontSize: 20,
      fontWeight: 900,
      color
    }
  }, val)))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 12
    }
  }, heroProofPoints.map(({
    value,
    icon
  }) => /*#__PURE__*/React.createElement("div", {
    key: value,
    style: {
      borderRadius: 16,
      border: "1px solid rgba(255,255,255,0.1)",
      background: "linear-gradient(to bottom, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
      padding: 16,
      backdropFilter: "blur(20px)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      height: 28,
      width: 28,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "50%",
      border: "1px solid rgba(232,32,15,0.3)",
      background: "rgba(232,32,15,0.1)",
      color: "var(--q-brand-ember)",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(LucideIcon, {
    name: icon,
    size: 14
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 900,
      letterSpacing: "-0.02em",
      color: "#fff"
    }
  }, value)))));
}
function Hero() {
  const {
    Button,
    QBricksText
  } = window.QBricksDesignSystem_7fa054;
  const [idx, setIdx] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setIdx(p => (p + 1) % heroCarouselItems.length), 2800);
    return () => clearInterval(t);
  }, []);
  const item = heroCarouselItems[idx];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      isolation: "isolate",
      display: "flex",
      minHeight: "100vh",
      alignItems: "center",
      background: "#000",
      padding: "144px 0 64px",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      zIndex: -1,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/backgrounds/pixels-dissolve.png",
    alt: "",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "left",
      opacity: 0.5,
      mixBlendMode: "screen",
      transform: "scaleX(-1)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "radial-gradient(circle at 18% 20%, rgba(255,58,38,0.22), transparent 28%), radial-gradient(circle at 72% 18%, rgba(255,255,255,0.08), transparent 22%), linear-gradient(to bottom, rgba(0,0,0,0.25), #000 90%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "q-bg-grid",
    style: {
      position: "absolute",
      inset: 0,
      opacity: 0.3
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "0 auto",
      maxWidth: "80rem",
      padding: "0 32px",
      width: "100%",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      alignItems: "center",
      gap: 40,
      gridTemplateColumns: "1fr 1fr"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "42rem",
      position: "relative",
      top: -24
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: "clamp(3rem, 6vw, 5.1rem)",
      fontWeight: 900,
      lineHeight: 0.95,
      letterSpacing: "-0.025em",
      color: "#fff"
    }
  }, "No more data ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--q-brand-ember)"
    }
  }, "pipelines.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      maxWidth: "36rem",
      fontSize: 20,
      lineHeight: 1.625,
      color: "var(--q-gray-300)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Turn your systems of record into governed, A.I.-ready data products, in hours, not months or years."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      overflow: "hidden",
      borderRadius: 16,
      border: "1px solid rgba(255,255,255,0.1)",
      background: "rgba(255,255,255,0.035)",
      padding: "16px 20px",
      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04), 0 18px 55px rgba(0,0,0,0.22)",
      backdropFilter: "blur(12px)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "0.65rem",
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "0.22em",
      color: "var(--q-gray-500)"
    }
  }, "The ", /*#__PURE__*/React.createElement(QBricksText, null), " difference"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      display: "flex",
      minHeight: 72,
      alignItems: "center"
    },
    "aria-live": "polite"
  }, /*#__PURE__*/React.createElement("div", {
    key: idx,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      width: "100%",
      animation: "heroFade 600ms cubic-bezier(0.22,1,0.36,1)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      height: 44,
      width: 44,
      flexShrink: 0,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 12,
      border: "1px solid rgba(255,255,255,0.1)",
      background: "rgba(255,255,255,0.055)",
      color: item.tone
    }
  }, /*#__PURE__*/React.createElement(LucideIcon, {
    name: item.icon,
    size: 20
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "clamp(1.25rem, 1.8vw, 1.65rem)",
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: "-0.02em",
      color: "#fff"
    }
  }, item.text))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "hero",
    arrow: true
  }, "Request a demo"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "See how it works"))), /*#__PURE__*/React.createElement(DataCommandCentre, null))));
}
Object.assign(window, {
  Hero,
  DataCommandCentre
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/icons.jsx
try { (() => {
// Lucide icon renderer for static prototypes — uses the lucide UMD CDN build.
// <LucideIcon name="ShieldCheck" size={20} style={{color:'var(--q-brand-ember)'}} />
function LucideIcon({
  name,
  size = 20,
  strokeWidth = 2,
  style = {}
}) {
  const node = window.lucide && window.lucide.icons && window.lucide.icons[name] || null;
  if (!node) return null;
  const children = node.map(([tag, attrs], i) => React.createElement(tag, {
    key: i,
    ...attrs
  }));
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: style,
    "aria-hidden": "true"
  }, children);
}

// Icon chip: rounded glass square holding a tinted icon (source pattern)
function IconChip({
  name,
  tone = "var(--q-brand-ember)",
  size = 24,
  pad = 12
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      padding: pad,
      borderRadius: 16,
      border: "1px solid rgba(255,255,255,0.1)",
      background: "rgba(255,255,255,0.055)",
      color: tone
    }
  }, /*#__PURE__*/React.createElement(LucideIcon, {
    name: name,
    size: size
  }));
}
Object.assign(window, {
  LucideIcon,
  IconChip
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/navbar.jsx
try { (() => {
// QBricks floating pill navbar — recreation of src/components/layout/Navbar.tsx
function Navbar({
  active,
  onNavigate
}) {
  const {
    Logo,
    QBricksText,
    Button
  } = window.QBricksDesignSystem_7fa054;
  const links = ["Product", "Solutions", "Why QBricks", "Integrations", "Resources", "About"];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "fixed",
      left: 0,
      right: 0,
      top: 0,
      zIndex: 50,
      padding: "16px 16px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "0 auto",
      maxWidth: "72rem"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 16,
      borderRadius: 9999,
      border: "1px solid rgba(255,255,255,0.06)",
      background: "rgba(255,255,255,0.03)",
      backdropFilter: "blur(20px)",
      padding: "8px 12px 8px 24px"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate("Home");
    },
    style: {
      display: "flex",
      alignItems: "center",
      transform: "translateY(2px)"
    },
    "aria-label": "QBricks home"
  }, /*#__PURE__*/React.createElement(Logo, {
    src: "../../assets/qbricks-logo.png",
    height: 48
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 4
    }
  }, links.map(name => {
    const isActive = active === name;
    return /*#__PURE__*/React.createElement("a", {
      key: name,
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNavigate(name);
      },
      style: {
        position: "relative",
        borderRadius: 9999,
        padding: "8px 16px",
        fontSize: 14,
        fontWeight: 600,
        textDecoration: "none",
        color: isActive ? "#fff" : "var(--q-gray-400)",
        border: isActive ? "1px solid rgba(232,32,15,0.5)" : "1px solid transparent",
        background: isActive ? "rgba(232,32,15,0.1)" : "transparent",
        boxShadow: isActive ? "0 0 15px rgba(232,32,15,0.4)" : "none",
        transition: "color 200ms"
      }
    }, name === "Why QBricks" ? /*#__PURE__*/React.createElement(React.Fragment, null, "Why ", /*#__PURE__*/React.createElement(QBricksText, null)) : name);
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    arrow: true,
    onClick: () => onNavigate("Contact")
  }, "Request a demo"))));
}
Object.assign(window, {
  Navbar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/navbar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/sections.jsx
try { (() => {
// QBricks homepage sections — Metrics (problem + before/after), FeaturesBento, Integrations, CTA
// Recreated from src/components/interactive/{Metrics,FeaturesBento,Integrations}.tsx + app/page.tsx

const problemBefore = ["Thousands of ungoverned notebooks", "Teams of data engineers", "Lengthy pipeline build and deployment time-lines", "A.I. required data locked at the Bronze layer", "On-going compute costs"];
const problemAfter = ["Data governance enforced (ODCS). No notebooks", "Small engineering team (at set-up)", "Streaming data, materialised views", "A.I. ready data available in hours not years", "Low compute costs. No cloud requirement"];
function ProblemSection() {
  const {
    SectionHeading,
    GlassCard,
    QBricksText,
    QIcon
  } = window.QBricksDesignSystem_7fa054;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      background: "#000",
      padding: "var(--section-y) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/backgrounds/bg-pathway-city.png",
    alt: "",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      opacity: 0.3,
      mixBlendMode: "screen"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "radial-gradient(circle at 20% 5%, rgba(232,32,15,0.18), transparent 30%), linear-gradient(to bottom, #000 0%, rgba(0,0,0,0.78) 38%, #000 100%)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      margin: "0 auto",
      maxWidth: "80rem",
      padding: "0 32px",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "The executive problem",
    title: "Everyone is racing to deploy A.I. The issue? The supporting data is not ready.",
    lead: /*#__PURE__*/React.createElement(React.Fragment, null, "A 2025 MIT report found that around ", /*#__PURE__*/React.createElement("strong", {
      style: {
        fontWeight: 900,
        color: "#fff"
      }
    }, "95% of A.I.-related use cases were failing"), ", not because the models were weak, but because the underlying data quality and metadata foundation could not be trusted.")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 64,
      display: "grid",
      gap: 24,
      gridTemplateColumns: "1fr auto 1fr",
      alignItems: "stretch"
    }
  }, /*#__PURE__*/React.createElement(GlassCard, {
    variant: "premium",
    padding: "2rem"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      padding: 12,
      borderRadius: 16,
      border: "1px solid rgba(248,113,113,0.2)",
      background: "rgba(239,68,68,0.1)",
      color: "var(--q-red-300)"
    }
  }, /*#__PURE__*/React.createElement(LucideIcon, {
    name: "TriangleAlert",
    size: 24
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      textTransform: "uppercase",
      letterSpacing: "0.2em",
      color: "var(--q-gray-500)"
    }
  }, "Without ", /*#__PURE__*/React.createElement(QBricksText, null)), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 24,
      fontWeight: 900,
      color: "#fff"
    }
  }, "Data Management Solutions"))), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: "none",
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, problemBefore.map(item => /*#__PURE__*/React.createElement("li", {
    key: item,
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 12,
      color: "var(--q-gray-300)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 8,
      height: 8,
      width: 8,
      flexShrink: 0,
      borderRadius: "50%",
      background: "rgba(248,113,113,0.8)"
    }
  }), /*#__PURE__*/React.createElement("span", null, item))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      width: 80,
      alignItems: "center",
      justifyContent: "center",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      height: 1,
      width: "100%",
      background: "linear-gradient(to right, rgba(255,255,255,0.1), var(--q-brand), rgba(255,255,255,0.1))"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      height: 56,
      width: 56,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "50%",
      border: "1px solid rgba(232,32,15,0.4)",
      background: "rgba(232,32,15,0.15)",
      boxShadow: "0 0 42px rgba(232,32,15,0.32)"
    }
  }, /*#__PURE__*/React.createElement(QIcon, {
    src: "../../assets/QBricks-icon.png",
    size: 24
  }))), /*#__PURE__*/React.createElement(GlassCard, {
    variant: "premium",
    padding: "2rem",
    style: {
      borderColor: "rgba(52,211,153,0.2)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      padding: 12,
      borderRadius: 16,
      border: "1px solid rgba(52,211,153,0.25)",
      background: "rgba(52,211,153,0.1)",
      color: "var(--q-emerald-300)"
    }
  }, /*#__PURE__*/React.createElement(LucideIcon, {
    name: "Layers3",
    size: 24
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      textTransform: "uppercase",
      letterSpacing: "0.2em",
      color: "rgba(110,231,183,0.8)"
    }
  }, "With ", /*#__PURE__*/React.createElement(QBricksText, null)), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 24,
      fontWeight: 900,
      color: "#fff"
    }
  }, "Governed foundation"))), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: "none",
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, problemAfter.map(item => /*#__PURE__*/React.createElement("li", {
    key: item,
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 12,
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 2,
      flexShrink: 0,
      color: "var(--q-emerald-300)"
    }
  }, /*#__PURE__*/React.createElement(LucideIcon, {
    name: "CircleCheck",
    size: 20
  })), /*#__PURE__*/React.createElement("span", null, item))))))));
}
const featureCards = [{
  icon: "FileCode2",
  title: "Streaming & incremental",
  text: "Real-time, change-focused updates underpinned by the Open Data Contract.",
  highlight: "Incremental"
}, {
  icon: "Shield",
  title: "Governance enforced by contract",
  text: "Records are compared digitally to your governance framework. Nothing un-governed gets through.",
  highlight: "Contract-enforced"
}, {
  icon: "Network",
  title: "Agentic metadata, human in the loop",
  text: "Agents improve metadata over time and stay isolated from the data lake.",
  highlight: "Human in the loop"
}, {
  icon: "Blocks",
  title: "Knowledge graph & lineage",
  text: "See hierarchy, linkages and complex relationships. Supports ontologies and full data lineage.",
  highlight: "Full lineage"
}, {
  icon: "Cloud",
  title: "Local compute, no Spark",
  text: "Works with Databricks, Fabric, Snowflake or your own database via SQL push-down, with enterprise scale and no costly Spark or lock-in.",
  highlight: "No Spark"
}, {
  icon: "Sparkles",
  title: "Fully auditable",
  text: "Before-and-after files and auditable outputs. Apply Databricks, Microsoft or Snowflake security standards.",
  highlight: "Auditable"
}];
function FeaturesSection() {
  const {
    SectionHeading,
    GlassCard,
    Pill,
    QBricksText
  } = window.QBricksDesignSystem_7fa054;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderTop: "1px solid rgba(255,255,255,0.05)",
      background: "#000",
      padding: "var(--section-y) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/backgrounds/bg-cubes-wall.png",
    alt: "",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      opacity: 0.3,
      mixBlendMode: "screen"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "radial-gradient(circle at 80% 20%, rgba(232,32,15,0.18), transparent 28%), linear-gradient(to bottom, #000 0%, rgba(0,0,0,0.84) 42%, #000 100%)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      margin: "0 auto",
      maxWidth: "80rem",
      padding: "0 32px",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 64
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: /*#__PURE__*/React.createElement(React.Fragment, null, "What ", /*#__PURE__*/React.createElement(QBricksText, null), " is"),
    size: "md",
    title: "A governed, secure Data Platform for your organisation.",
    lead: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(QBricksText, null), " is a streaming data-management platform that enforces governance at the point of ingestion, so the data landing in your lakehouse or database is already trusted, governed and A.I. ready.")
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 24,
      gridTemplateColumns: "repeat(3, 1fr)"
    }
  }, featureCards.map(cap => /*#__PURE__*/React.createElement(GlassCard, {
    key: cap.title,
    variant: "premium",
    padding: "1.5rem"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 16,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      padding: 12,
      borderRadius: 16,
      border: "1px solid rgba(255,255,255,0.1)",
      background: "rgba(255,255,255,0.055)",
      color: "var(--q-brand-ember)"
    }
  }, /*#__PURE__*/React.createElement(LucideIcon, {
    name: cap.icon,
    size: 24
  })), /*#__PURE__*/React.createElement(Pill, null, cap.highlight)), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 24,
      fontWeight: 900,
      letterSpacing: "-0.02em",
      color: "#fff"
    }
  }, cap.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "16px 0 0",
      lineHeight: 1.625,
      color: "var(--q-gray-400)"
    }
  }, cap.text))))));
}
function IntegrationsSection() {
  const {
    SectionHeading,
    IntegrationTile,
    QBricksText
  } = window.QBricksDesignSystem_7fa054;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderTop: "1px solid rgba(255,255,255,0.05)",
      background: "#000",
      padding: "80px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "radial-gradient(ellipse at bottom, rgba(232,32,15,0.08), transparent 62%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      margin: "0 auto",
      maxWidth: "80rem",
      padding: "0 32px",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Integrations",
    size: "sm",
    title: "Works with the platforms your organisation already runs on."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "0 auto",
      maxWidth: "64rem",
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(IntegrationTile, {
    src: "../../assets/partners/Databricks.png",
    name: "Databricks"
  }), /*#__PURE__*/React.createElement(IntegrationTile, {
    src: "../../assets/partners/Fabric.png",
    name: "Microsoft Fabric",
    invert: true
  }), /*#__PURE__*/React.createElement(IntegrationTile, {
    src: "../../assets/partners/Snowflake.png",
    name: "Snowflake"
  }), /*#__PURE__*/React.createElement(IntegrationTile, {
    src: "../../assets/partners/Oracle-Logo.png",
    name: "Oracle"
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "40px auto 0",
      maxWidth: "48rem",
      textAlign: "center",
      fontSize: 18,
      fontWeight: 500,
      lineHeight: 1.625,
      color: "var(--q-gray-400)"
    }
  }, /*#__PURE__*/React.createElement(QBricksText, null), " interfaces with Databricks, Microsoft Fabric, Snowflake or your own database via SQL push-down, enforcing governance without running Spark inside them, and without lock-in. The Open Data Contract Standard (ODCS) sits at the core.")));
}
function CtaSection() {
  const {
    GlassCard,
    Button
  } = window.QBricksDesignSystem_7fa054;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderTop: "1px solid rgba(255,255,255,0.05)",
      background: "#000",
      padding: "var(--section-y) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "radial-gradient(circle at 50% 0%, rgba(232,32,15,0.22), transparent 42%), linear-gradient(to bottom, rgba(255,255,255,0.035), #000)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      margin: "0 auto",
      maxWidth: "80rem",
      padding: "0 32px",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement(GlassCard, {
    variant: "premium",
    padding: "2.5rem",
    style: {
      margin: "0 auto",
      maxWidth: "56rem",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: "clamp(2.2rem, 4vw, 4rem)",
      fontWeight: 900,
      lineHeight: 0.95,
      letterSpacing: "-0.025em",
      color: "#fff"
    }
  }, "From Record To Report In Minutes"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "28px auto 0",
      maxWidth: "42rem",
      fontSize: 20,
      lineHeight: 1.625,
      color: "var(--q-gray-300)"
    }
  }, "Join us for a focused demo that shows how we create data contracts and products in minutes."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    arrow: true
  }, "Request a demo"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      color: "var(--q-emerald-300)"
    }
  }, /*#__PURE__*/React.createElement(LucideIcon, {
    name: "CircleCheck",
    size: 20
  })), "Explore the platform")))));
}
Object.assign(window, {
  ProblemSection,
  FeaturesSection,
  IntegrationsSection,
  CtaSection
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/sections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.QBricksText = __ds_scope.QBricksText;

__ds_ns.QIcon = __ds_scope.QIcon;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.GlassCard = __ds_scope.GlassCard;

__ds_ns.IntegrationTile = __ds_scope.IntegrationTile;

__ds_ns.Pill = __ds_scope.Pill;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

})();
