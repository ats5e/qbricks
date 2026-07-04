# QBricks Design System

**QBricks** is an AI-enabled, governed, secure metadata management platform developed and owned by **Infinium Consulting B.V.** (operating as **NextWave Infinium**). It turns systems of record into trusted, AI-ready data products — in hours, not weeks — through **Data Contracts** and **Data Products**, with agentic metadata automation (human in the loop), full auditability, local compute (no Spark) and no vendor lock-in.

**Audience:** CDOs, Heads of Data Governance/Quality, Risk & Compliance, and Financial Crime (AML/KYC) leadership at banks across the **UAE and wider GCC**.

**Integrations:** Databricks · Microsoft Fabric · Snowflake · Oracle (own database) · Quantexa (embedded Trust Score, 99% matching accuracy).

**Public-site guardrail:** the website speaks as QBricks / Infinium (NextWave Infinium) **only** — never name any commercial or delivery partner in public materials. Persistent CTA: *Request a demo* · sales@infinium.consulting · qbricks.ai.

## Sources

- GitHub: **https://github.com/ats5e/qbricks** — the live Next.js marketing site (Tailwind, framer-motion, lucide-react). Source of truth for all tokens, components and copy. Explore it further to improve fidelity.
  - `src/app/globals.css` + `tailwind.config.ts` — token definitions
  - `Context/qbricks-website-content.md` — the full page-by-page copy spec (imported at `Context/`)
  - `Context/deck.js` — the PPTX pitch-deck house style (imported)
- Uploaded brand assets (logos, brick/cube backgrounds, partner logos) — copied into `assets/`.

## Products / surfaces

1. **qbricks.ai marketing website** — the only shipped product surface in the sources (Next.js). Recreated in `ui_kits/website/`.
2. **Pitch deck** — a PPTX house style defined in `Context/deck.js` (originally Century Gothic — now Plus Jakarta Sans everywhere per user decision; near-black canvas, single red accent). Sample slides in `slides/`.

The product app itself is only *depicted* (the "Data Command Centre" mock inside the hero); there is no app codebase.

---

## CONTENT FUNDAMENTALS

- **British English**, always ("organisation", "materialised", "catalogue").
- **Voice:** confident, consultative, precise. Lead with the outcome, substantiate with the mechanism. Never hyped or generic.
- **"A.I."** is written with full stops in site copy ("A.I.-ready data"), though "AI" appears in the spec/deck — prefer "A.I." for web surfaces.
- **QBricks wordmark in prose:** every text-rendered "QBricks" is set in **Quicksand** (`--font-wordmark`): bold (700) brand-red `#FF3A26` **Q** + regular (400) white `#FFFFFF` **Bricks**, inline with no spacing between the parts (see `QBricksText` component). Applies everywhere the name appears — headings, body copy, navigation, buttons, cards, footer links. All other text stays Plus Jakarta Sans.
- **Person:** "your organisation", "your data", "your teams" — direct second person; first-person plural ("we'll show…") only in CTAs.
- **Casing:** sentence case for headings ("No more data pipelines."); UPPERCASE only for eyebrows and confidentiality footers.
- **No emoji, ever.**
- **Proof points, used exactly as stated and never varied:** 95% fewer data issues · deploy in hours, not weeks · ~70% lower cost than manually built workflows · 99% data matching accuracy with Quantexa · the 2025 MIT ~95% AI-failure statistic.
- **Own these words:** Data Contracts · Data Products · single-file deployment · agentic + human-in-the-loop · ontologies & knowledge graphs · Open Data Contract Standard (ODCS) · Catalogue of Catalogues · data swamp · No Spark · no lock-in.
- Example headline register: "Your AI is only as trustworthy as the data beneath it." / "Everyone is racing to deploy A.I. The issue? The supporting data is not ready." / "From data swamp to governed foundation."
- Keep competitor references factual (Collibra, Purview, native lakehouse tooling); position by capability, never disparagement.

## VISUAL FOUNDATIONS

- **Canvas:** pure black `#000` page, panels at `#0a0a0a`–`#121212`. Deck variant uses `#0B0B0D`. A fixed full-page **fractal-noise grain overlay** at 2.5% opacity (mix-blend-overlay) sits above everything.
- **One accent:** brand red `#e8200f` with ember hover `#ff3a26`. Everything else is white/zinc. Small semantic chips borrow tailwind's 300-tier tints (emerald/blue/amber/violet) for icon tones only.
- **Type:** Plus Jakarta Sans everywhere on the web (loaded from Google Fonts). Headlines are **font-black (800), leading 0.95, tracking-tight**, clamp-sized up to ~5.6rem. Body is text-xl leading-relaxed in `--q-gray-300/400`. Eyebrows: 0.75rem, uppercase, 0.18em tracking, bold, ember red. Deck slides use Plus Jakarta Sans too (`--font-deck` aliases `--font-sans`).
- **Glassmorphism is the core motif:** translucent white cards (`bg-white/[0.035–0.08]`) with 1px `white/10` borders, heavy `backdrop-blur (24–40px)`, inset top highlight `inset 0 1px 0 rgba(255,255,255,0.12)` and deep drop shadows `0 24px 80px rgba(0,0,0,0.45–0.55)`.
- **Corners:** everything is very rounded — cards `rounded-3xl` (24px) to `rounded-[2rem]` (32px); buttons, nav, badges are **always full pills**.
- **Backgrounds:** full-bleed brand renders (glowing red brick/cube imagery: `bg-cubes-*`, `bg-pathway-*`, `pixels-dissolve`) at ~30% opacity with `mix-blend-screen`, overlaid with black radial/linear gradients that fade to `#000` top and bottom. Plus faint 48px grid or 24px dot patterns masked radially. Red radial glows (`rgba(232,32,15,0.08–0.24)`) anchor section corners.
- **Buttons:** primary = solid `--q-brand` pill, bold white text, hover lifts `-translate-y-0.5` + ember; hero CTA adds a red gradient fill + white shimmer sweep + `0 0 50px` red glow. Secondary = `white/[0.055]` glass pill with `white/10` border.
- **Hover states:** lift (`-translate-y-0.5/1`), border brightens `white/10 → /20`, background `0.035 → 0.07`; logos go grayscale → color. Durations 300–500ms.
- **Animation:** framer-motion entrances — fade + rise (`y: 18–32`), `viewport once`, ease-out ~0.6–0.9s, small stagger (0.06–0.08s). Ambient loops: slow float (6–10s), shimmer sweeps (5s), 60s background pans, auto-cycling carousels every ~2.4–2.8s. Custom ease `cubic-bezier(0.22,1,0.36,1)`.
- **Nav:** floating pill bar, fixed top, glass; active link gets a red-tinted pill with `0 0 15px` red glow (framer `layoutId` spring).
- **Imagery vibe:** dark, cinematic, warm-red glow on black — luminous bricks/cubes assembling into structures (the product metaphor: bricks → governed foundation).
- **Borders default to `#27272a`** (set globally on `*`).

## ICONOGRAPHY

- **Icon system: [Lucide](https://lucide.dev)** (`lucide-react` in the source). Stroke icons, default weight, sized 16–28px, tinted per-context (`text-q-brand-ember`, emerald/blue/amber/violet 300s). Common glyphs: ArrowRight (in every CTA), ShieldCheck, Database, GitBranch, Network, Boxes, Cpu, Layers3, CheckCircle2, AlertTriangle, FileCheck2, Sparkles.
- In static HTML use the CDN UMD build: `<script src="https://unpkg.com/lucide@latest"></script>` + `<i data-lucide="arrow-right"></i>` + `lucide.createIcons()`.
- Icons sit in **rounded-xl/2xl glass chips** (`border white/10, bg white/5, p-2..3`) or in pill badges with `--q-brand/10` fills.
- The deck renders `react-icons/fa` glyphs to PNG; prefer Lucide for consistency in new work.
- **No emoji. No unicode-as-icon.** Logos are PNG assets in `assets/` (QBricks logo + icon, partner logos). The Microsoft Fabric logo needs `invert hue-rotate-180` treatment on dark.

## Index

- `styles.css` — global entry; imports `tokens/{fonts,colors,typography,spacing,effects}.css`
- `assets/` — `qbricks-logo.png`, `QBricks-icon.png`, `partners/` (Databricks, Fabric, Snowflake, Quantexa, Oracle), `backgrounds/` (brick/cube renders, pathway scenes, pixels-dissolve, tiles-iso, DubaiSkyline)
- `guidelines/` — foundation specimen cards (colors, type, effects, backgrounds)
- `components/brand/` — `Logo`, `QIcon`, `QBricksText`
- `components/core/` — `Button`, `Eyebrow`, `GlassCard`, `Pill`, `SectionHeading`, `IntegrationTile`
- `ui_kits/website/` — homepage recreation (`index.html` + JSX sections)
- `slides/` — deck house-style sample slides (cover, content, before/after, closing)
- `src/`, `Context/` — imported source-of-truth files from the GitHub repo
- `SKILL.md` — agent-skill entry point

### Intentional additions
- `Button`, `Eyebrow`, `GlassCard`, `Pill`, `SectionHeading`, `IntegrationTile` are extracted from repeated inline Tailwind patterns in the source (the repo has no primitive library beyond `ui/{Logo,QBricksText,QIcon}`); values are copied verbatim from the source classes.

### Caveats
- **Fonts:** no font binaries in the repo; Plus Jakarta Sans is loaded from Google Fonts and is the single family for all surfaces (the deck's original Century Gothic was dropped by user decision).
- The product app UI exists only as the marketing site's hero mock; no real app screens were available to recreate.
