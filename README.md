# Darpen Bhandari — Portfolio

Professional portfolio for Darpen Bhandari — Data Engineer | Analytics & Applied AI — building reliable data pipelines, analytics systems and practical AI applications.

Live site: [darpenbhandari.com](https://darpenbhandari.com/)

## Stack

- Semantic HTML
- Modern CSS (responsive layout, animations, reduced-motion support)
- Vanilla JavaScript (translations, navigation, interactions and contact fallback)
- GitHub Pages custom domain (CNAME)

## Project structure

~~~
index.html          Main portfolio
projects.html       Project index with client-side filters
assets/style.css    Shared visual system and responsive styles
assets/projects.css Projects-page-only styles
assets/main.js      EN/DE, animation and interaction logic
assets/evidence-copy.js Additional EN/DE project, evidence and accessibility copy
assets/enhancements.js Native disclosure animation, filters, welcome strip and subject shortcuts
assets/enhancements.css Additions using the original visual tokens
docs/               Enhancement plan, evidence review and validation record
tests/browser.cjs   Optional Playwright browser regression checks
~~~

## Local development

No build step or package installation is required. Serve the repository with any static HTTP server, for example:

~~~powershell
python -m http.server 8080
~~~

Then open [http://localhost:8080](http://localhost:8080). Using a local server is recommended so browser behaviour, local storage and links match production.

## Design and features

- Data-systems console design focused on Data Engineering and Analytics Engineering
- Lightweight SVG/CSS animated data-flow visualization
- Responsive mobile navigation, project grid and contact form
- EN/DE language switching persisted with localStorage
- Scroll reveals, one-time metric counters, experience timeline progress and restrained pointer effects
- Safe mailto contact fallback plus copy-email interaction
- SEO metadata, Open Graph tags and Person JSON-LD

## Accessibility and performance

The portfolio uses semantic sections, a skip link, keyboard-focusable controls, visible focus states, responsive images and meaningful image alternatives. Non-essential movement is disabled under prefers-reduced-motion. It deliberately has no framework, animation dependency, video background or WebGL dependency.

## Deployment

The repository is configured for GitHub Pages with the custom domain stored in CNAME. Publish by merging approved changes to the branch configured as the GitHub Pages source (currently main in the existing repository configuration).

## Evidence enhancements (October 2026)

The original palette, fonts, sections, hero pipeline, timeline, four skill cards and all their technology chips remain. Two matching cards cover Applied AI and Data Science. Every card has a native `details` disclosure separating professional experience from independent projects and planned work; JavaScript adds a 200ms transition. Links and disclosures work without JavaScript. The homepage has the five selected projects; the complete index has nine and preserves the original Service Operations case study with corrected development scope.

Both pages offer All, Data Engineering, Analytics & BI, Applied AI and Data Science filters with pressed states and a live result count. Added content and accessible labels have EN/DE equivalents. Language persistence tolerates blocked storage. The welcome strip is nonblocking, lasts 850ms, has Skip, runs once per browser session and is omitted with reduced motion or unavailable session storage. The original SVG also pauses under reduced motion.

The existing contact form still opens an email draft. Recruitment and collaboration shortcuts fill the subject; copy-email, LinkedIn and GitHub actions remain. No CV download/upload, backend, new runtime dependency or framework was added.

See [enhancement plan](docs/ENHANCEMENT-PLAN.md), [evidence review](docs/EVIDENCE-REVIEW.md) and [validation](docs/VALIDATION.md). When updating project scope, edit the static HTML fallback and the corresponding `en`/`de` keys in `assets/evidence-copy.js` together. Professional history translations remain in `assets/main.js`.

## Optional browser checks

There are no dependencies to serve the website. For the development-only regression checks, install Playwright in an external tools directory or as an uncommitted local package, install its Chromium browser, and serve this repository on port 8080. Then run `node tests/browser.cjs`. `PLAYWRIGHT_MODULE` may point to an installed Playwright module; `PORTFOLIO_TEST_OUTPUT` selects a screenshot/report directory (default `test-results`). The checks cover keyboard disclosures, filters, language persistence, mobile navigation, overflow, contact draft navigation, clipboard, motion and storage fallbacks. They launch a headless browser and do not send messages.

GitHub Pages configuration was read through the API on 22 October 2026: legacy branch publishing from `main`, root `/`, custom domain `darpenbhandari.com`. No deployment configuration was changed. Review branch changes must be explicitly approved before merging or deployment.
