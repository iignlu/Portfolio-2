# Abdullah Alshehri — Portfolio

My personal portfolio, live at **[aalshehri.site](https://aalshehri.site)**.
Vanilla HTML, CSS and JavaScript — no framework, no build step, zero runtime dependencies.

## Highlights

- **Live WebGL background** — a domain-warped fractal-noise field written in raw GLSL,
  reacting to cursor position and scroll. Renders at 0.55× resolution for battery, with a
  pure-CSS gradient fallback when WebGL is unavailable.
- **Bilingual, EN ⇄ AR** — full translation with automatic RTL layout. The letter-splitting
  animation switches to word-splitting in Arabic, because Arabic script joins and must never
  be broken into per-character spans.
- **Editorial typography** — oversized display type with masked per-character entrance
  animations, scroll-lit paragraphs, and a scroll-velocity-reactive marquee.
- **Custom cursor** with contextual states, magnetic buttons, and a boot preloader.
- **Accessible** — split text carries `aria-label` so screen readers hear whole phrases,
  every control is keyboard-reachable, and `prefers-reduced-motion` disables the shader,
  grain, and all transitions.
- **Resilient** — reveals are geometry-driven rather than `IntersectionObserver`-driven, the
  preloader has a hard timeout so a background tab can never leave the page blank, and a
  `no-js` fallback keeps all content visible without JavaScript.

## Tech

- HTML5, CSS3 (logical properties throughout for RTL), vanilla JS
- WebGL 1.0 — hand-written vertex + fragment shaders
- Google Fonts: Syne, Instrument Serif, Inter Tight, JetBrains Mono, IBM Plex Sans Arabic
- Inline SVG icon sprite (no icon-font dependency)
- Deployed on Netlify, auto-deploying from `main`

## Structure

```
├── index.html      # markup + SVG icon sprite
├── style.css       # design tokens, layout, components, RTL + motion fallbacks
├── script.js       # i18n, WebGL, split-text, cursor, scroll engine
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
