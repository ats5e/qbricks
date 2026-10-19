# Task prompt: website review issue log (MC, Oct 2026)

## The job
Work through the 32 qbricks.ai issues in "MC - Website Review Issue Log 1.0.xlsx" (QB-001 to QB-032) on the branch
`website-review-fixes`. Fix what is right, push back on what is wrong, and park what needs a decision Jack or David
must make. Don't merge, push or deploy. Jack reviews first.

## Be critical: rules for each row
1. **Verify the observation against the code before acting.** The reviewer looked at the live site on 6 to 13 October.
   Main has changed since (data products went live on 14 Oct). Some rows are stale and some are factually wrong. Example: QB-001 says the two
   red buttons "lead to different places", but both go to /contact.
2. **Check the reviewer's facts and our own.** Re-do every sum (QB-030). Check every cited source (QB-004: the
   MIT NANDA report found a "learning gap", not a data-quality problem, so our copy misstates it, which is worse than
   leaving it uncited).
3. **Fix the root cause, not the instance.** The pipelines contradiction (QB-005, QB-010, QB-023) shows up on the homepage, EOS,
   Why QBricks, Resources and two SVG graphics. One message has to cover all of them.
4. **Don't overreach.** Follow the brand and David's rules (memory: qbricks-brand-rules, david-site-content-rules,
   stick-to-brief-and-site-patterns). That means the QBricks word mark, no em dashes in new copy, no named competitors, no "stuck",
   white-only with light grey tints at most, reusing existing section patterns, and no new animation.
5. **Park, don't guess, when the call is a business one.** Legal wording, re-cutting David's EOS page, new imagery, and
   changing the top navigation all get a recommendation and an owner, not a silent change.
6. **Verify the rendered page.** Check at 1440, 1024 and 390 for stranded words, odd breaks and cards out of line. Run
   `npx tsc` and `npm run lint` after the changes.

## Positioning decision taken to resolve the pipelines contradiction
QBricks does not remove pipelines. It **builds them automatically from data contracts and runs them on EOS**
("automated pipeline builds" and "Complex pipeline builds 14.5 s" are already on the site). So:
"No more data pipelines" becomes "No more hand-built data pipelines", and every "no pipeline build" or "replace pipelines" line
says "hand-built". David needs to confirm this.

## Output
- Code changes on the branch, grouped by page.
- `TRIAGE.md` in this folder with one line per issue: Fixed / Partly fixed / No change (why) / Needs decision (who).
  Jack can paste it back into the log.
- Issues found that the reviewer missed, listed separately.
