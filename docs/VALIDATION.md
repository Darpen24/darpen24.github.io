# Validation — 22 October 2026

## Automated checks

- JavaScript syntax checks pass for `main.js`, `evidence-copy.js` and `enhancements.js`; `git diff --check` passes.
- Headless Chromium/Playwright checks the five homepage cards, nine index cards and six skill evidence disclosures. Enter opens and Space closes every skill disclosure; expanded state follows the native details state.
- Five filters on both pages return the expected counts and update pressed states and translated result announcements. The duplicate retained Service Operations case study is filtered with its category but excluded from the project count.
- EN/DE changes, persistence after reload, all translation-key coverage, translated ARIA labels and email subject shortcuts are checked.
- Contact form submission is observed as the actual encoded `mailto:` navigation through Chromium DevTools. No message is sent; no OS mail app is launched. Clipboard contains the expected existing email after copy.
- Both pages have no horizontal document overflow or wide main-content children at 320, 375, 768, 1024 and 1440px widths. Mobile menu opens/closes, and native evidence disclosures remain usable.
- Reduced motion omits the intro and pauses SVG animation. Intro Skip and session replay guard, blocked storage, unknown-language fallback and no-JavaScript content/disclosures are checked.
- No JavaScript errors or local HTTP asset errors occurred during browser checks.
- axe-core scans of both pages in EN and DE, with all disclosures open and reveal content visible, report **zero WCAG 2 A/AA and 2.1 AA violations**. This is an automated scan, not a full accessibility certification.

## Visual inspection

Desktop hero and evidence cards, and 375px mobile hero/evidence screenshots were rendered and visually inspected. Original navy/cyan panel treatment, fonts and pipeline are recognizable; original technology chips remain visible when disclosures are collapsed. The existing Stroke Risk screenshot was visually inspected and preserved. Original image files are unchanged.

## Scope and limits

- Existing experience bullets were already specific and concise; dates, job titles, technologies and outcomes are retained. Evidence cards now connect those responsibilities to the technologies. The owner confirmed German fluency wording and the 40%/20% hospital outcomes in this chat.
- Project README and implementation inspection is distinct from executing project test suites; reported project metrics remain explicitly limited to their stated fixtures or demo data.
- Local links/assets and GitHub repository availability were checked. Mail delivery, LinkedIn authentication/ownership and live project/cloud deployments were not tested.
- Site remains static with no build step or runtime packages. Added CSS/JS use native APIs; existing images load lazily with explicit dimensions. No Lighthouse score, field-performance result or assistive-technology certification is claimed.
- GitHub Pages uses `main` at `/`; CNAME is unchanged. Work is prepared on `enhance/portfolio-evidence`. Do not merge or deploy without owner approval.
