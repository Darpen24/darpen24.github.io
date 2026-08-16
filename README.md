# Darpen Bhandari — Portfolio

Professional portfolio for Darpen Bhandari, a Data Engineer and Analytics Engineer building production data systems for analytics and AI.

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
