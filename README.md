# Abdullah Alshehri — Portfolio

My personal portfolio, live at **[aalshehri.site](https://aalshehri.site)**.
Vanilla HTML, CSS and JavaScript — no framework, no build step, no dependencies.

## Approach

Deep dark surface, gradient-lit cards, generous spacing, restrained motion.
About 26 KB over the wire, so it paints immediately on a phone connection.

- **Pointer-lit cards** — each card carries a soft radial highlight and a gradient
  hairline border that track the cursor, drawn with a `mask-composite` ring so the
  gradient sits on the border box only. The listener is per-card, so just the
  hovered card ever does layout work.
- **Bilingual EN ⇄ AR** with automatic RTL. Layout uses CSS logical properties
  throughout, so the mirror is real rather than a set of overrides.
- **Motion is one effect**: a short fade-and-rise as sections enter the viewport.
  Reveals are geometry-driven rather than `IntersectionObserver`-driven — elements
  start at `opacity: 0`, so a callback that never lands would leave the page blank.
- **Accessible**: keyboard-reachable throughout, visible focus rings, labelled form
  fields, and `prefers-reduced-motion` disables every transition.
- **Degrades cleanly**: a `no-js` fallback keeps content visible without JavaScript,
  and an `@supports` guard restores solid colour if `background-clip: text` is
  unavailable, so gradient headings can never render invisible.

## Tech

- HTML5, CSS3 (logical properties for RTL), vanilla JS
- Google Fonts: Inter Tight, Instrument Serif, JetBrains Mono, IBM Plex Sans Arabic
- Inline SVG icon sprite — no icon-font dependency
- Deployed on Netlify, auto-deploying from `main`

## Structure

```
├── index.html      # markup + SVG icon sprite
├── style.css       # tokens, layout, components, RTL + motion fallbacks
├── script.js       # i18n, nav, reveal
├── CV_Abdullah.pdf
└── planet-ringed_12334918.png
```

## Run locally

```bash
python -m http.server 5599
```

Then open <http://localhost:5599>.

## Contact

- [abd.alshehri.2004@gmail.com](mailto:abd.alshehri.2004@gmail.com)
- [LinkedIn](https://www.linkedin.com/in/abdullah-alshehri-596658250/)
- [GitHub](https://github.com/iignlu/)

---
© 2026 Abdullah Alshehri
