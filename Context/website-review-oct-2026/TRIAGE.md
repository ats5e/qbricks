# Website review issue log: triage (19 Oct 2026)

Branch `website-review-fixes`. Nothing merged, pushed or deployed.
Status key: **Fixed**, **Partly fixed**, **No change** (with the reason), **Needs decision** (with the owner).

| ID | Status | What was done / why |
|---|---|---|
| QB-001 | No change | The observation is factually wrong: "Request a demo" and "Evaluate your workload" both go to /contact. A header button repeating the hero's primary action is standard. The real issue, too many labels for one action, is handled under QB-024. |
| QB-002 | No change | The red Q is the brand word mark and can't change. Red accent words in headings are the house style shared with Infinium. Body links already carry a second cue (an arrow or an underline). |
| QB-003 | Partly fixed | The proof and calculator band now sits on a light grey tint (#f8f8fa, the tone the diagrams already use), with white cards. The brand stays white-only, so no stronger bands. |
| QB-004 | Fixed, and worse than reported | The report is now named (MIT NANDA, *The GenAI Divide: State of AI in Business 2025*). Our copy also **misstated** it: MIT blamed a "learning gap" (tools that don't fit how the business works), not data quality. The homepage and the "Why 95% of AI use cases fail" insight now quote the finding accurately and make the data point as our own view. Not linked, because the PDF URL now redirects to the NANDA homepage. Marketing to add a stable link. |
| QB-005 | Fixed | Banner now reads "No more hand-built data pipelines.", with the line "QBricks builds them for you from data contracts and runs them on EOS, at a fraction of the compute." |
| QB-006 | Fixed | The third card is now a noun phrase, "Provable data lineage", and its text says what is proven. |
| QB-007 | Fixed | "Trusted data should not cost this much." (7 words, one line). |
| QB-008 | No change | The calculator is already the third section, straight after the problem statement, which is where the recommendation puts it. A third hero button would undo QB-001. |
| QB-009 | Fixed | "See what QBricks would do with your workload." in sentence case; the body now leads with what the visitor gets. |
| QB-010 | Fixed | Settled on one line: pipelines are **built automatically and run on EOS**, not removed. Applied to the homepage, EOS, Why QBricks, Resources, five capability-overview pages, the site title, share-card text and two diagrams. **David to confirm the wording.** |
| QB-011 | Fixed | The extra full stop after "B.V." is gone. |
| QB-012 | Partly fixed | The Product page drops from 8 sections and 19 cards to 6 sections and 11 cards (see QB-013). Not split into subpages: that is a bigger IA change to agree first. |
| QB-013 | Fixed | Removed the four "constructs" cards and the four Agentic cards, which repeated lineage, audit, human-in-the-loop and knowledge graphs. Each capability is now stated once, in the six "What QBricks is" cards; the lineage drill-down detail was folded in. |
| QB-014 | Fixed | "What QBricks is" now sits directly below the hero, before the diagrams. |
| QB-015 | Fixed | The architecture section now leads straight into a closing "See QBricks on your own workload" section, with **Request a demo** as the primary button and "Explore use cases" as secondary. |
| QB-016 | Partly fixed | The footer now mirrors the nav (Product, Solutions, Resources, Company) with the same labels ("EOS", not "EOS Engine"). Integrations and Sustainability are still footer-only in the menu. Adding top-level nav items is **Jack/David's call**. |
| QB-017 | Fixed | One list of six solutions, labelled the same in the hero, cards and footer (pKYC / AMLR, AML, KYC, Fraud & financial crime, Contextual MDM, Credit & ESG risk). |
| QB-018 | Fixed | The second heading is now "One foundation. Six ways it pays back." |
| QB-019 | Fixed (partly stale) | Main had already changed since the review: the page closes on the data products band. It now also ends with a "Request a demo" section. |
| QB-020 | Needs decision (Jack/Web) | Brand rules require the red-glass imagery, so differentiating 20+ thumbnails means new renders per topic, or dropping the images. That's a design call with real image cost. |
| QB-021 | Fixed | "Cost calculator" now uses the same outlined style as the other five section links. |
| QB-022 | Fixed in code, **needs Legal before deploy** | Added a notice above the Send button and a /privacy page (controller, purposes, Formspree, Vercel Analytics, Mux, rights, Dutch DPA). Linked from the footer and listed in the sitemap. Legal must confirm the lawful bases, retention, transfer safeguards and the contact address (currently sales@). |
| QB-023 | Fixed | See QB-010. "SQL prompts replace hand-built pipelines", the Python SDK card and the diagram label now agree with "runs the pipeline estate". |
| QB-024 | Fixed | "Book a demo" is now "Request a demo" on EOS and Sustainability. |
| QB-025 | Needs decision (David) | The EOS page follows David's own revision of 28 Sept. Moving the benchmark detail and the ingestion demo to subpages restructures his page, so he should decide. |
| QB-026 | Fixed | The two near-identical sections are merged into one "Today" diagram showing both the manual and the engineering layer. |
| QB-027 | Fixed | The page now runs as one argument: question, then "Today" (both slow), then "The QBricks approach" (a diagram that already existed but was never shown), then the 10 reasons video, then compute, then the CTA. The stray "The answer?" eyebrow is gone. |
| QB-028 | Fixed | The compute section is now two columns (heading left, copy right) with a Sustainability link. The closing CTA spacing is tightened. |
| QB-029 | Partly fixed | Sustainability is now linked from Why QBricks (EOS already links to it). Nav placement is with QB-016. |
| QB-030 | Fixed, **David to confirm** | Confirmed: the totals were the 100-pipeline figures. Kept David's "~300" count and corrected the totals to ~5.3 GWh and ~2,000 tCO₂e (300 × 17.7 MWh; 300 × 6.6 t). The same error is in David's source file "QBricks Site Pages_eos_Environmental.html". If he meant ~100 pipelines, change the count instead. |
| QB-031 | Fixed | The body, the stat label and the footnote now all say "working assumption 40%, stress-tested at 20 to 30%". |
| QB-032 | Fixed (by disclosure) | The page now says the 40% is our impact model's internal estimate, not an external figure. Citing an external source would need Marketing or David to find one. |

## Found while fixing (not in the log)
- **"Say goodbye to cloud compute"** (Why QBricks) contradicted the site's own figures, which put QBricks on an Azure VM. Now "Far less cloud compute."
- **"Industry is stuck"** on the homepage: David vetoed "stuck" language. Now "The value of AI is now under scrutiny."
- **EOS heading overflowed** its container by 53 px at 1440 once lengthened (it was set to no-wrap). It now wraps, balanced.
- **EOS benchmark figures** ("12.08 TB", "86.6 BN") overflowed their cells at phone width. This was already there and is now fixed.
- **Still says "no more pipelines" outside the code:** `public/og-image.png` (the share image says "No more data pipelines." and also "A.I.", which breaks the brand rule), the 10 reasons video voice-over, and the capability-overview PDFs. These need re-exporting by hand.
- The page inventory tab labels Sustainability as QB-09, but the log calls it QB-08.
