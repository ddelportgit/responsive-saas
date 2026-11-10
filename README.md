# TaskPilot — Responsive SaaS Landing Page

A single-page marketing site for a fictional task-management product, built with
hand-written HTML, CSS, and vanilla JavaScript. No frameworks, no build step.

---

## About

TaskPilot is a front-end exercise in **responsive layout**: fluid type with
`clamp()`, intrinsic grids with `auto-fit`, and a small set of content-driven
breakpoints. The goal was to make the page hold up from 320px to 1920px without
duplicating rules across a dozen media queries.

All copy is placeholder (lorem ipsum), all statistics and pricing are fictional,
and the buttons are non-functional. There is no backend.

---

## Features

- **Sticky navbar** that collapses into an accessible hamburger menu below 760px
- **Hero** with dual CTAs and a CSS-only product dashboard mockup
- **Features** grid — auto-fits from 3 columns down to 1
- **How It Works** step list
- **Pricing** — three tiers that stack cleanly on mobile
- **Final CTA** and footer with responsive link wrapping

### Responsive behavior

| Breakpoint | Target                       | Main changes                                                                |
| ---------- | ---------------------------- | --------------------------------------------------------------------------- |
| ≤ 480px    | Phones                       | CTA buttons go full-width and stack; preview sidebar hidden; stats 1-column |
| ≤ 760px    | Large phones / small tablets | Hamburger replaces nav links; navbar padding and logo shrink                |
| ≤ 900px    | Tablets                      | Product preview becomes one column; sidebar turns into a horizontal strip   |
| ≤ 1024px   | Small laptops                | Headline scales down                                                        |
| > 1024px   | Desktop                      | Full three-column grids; sidebar layout restored                            |

Below 760px the layout does **not** rely on fixed pixel widths — spacing and type
scale continuously via `clamp()`, so intermediate widths (e.g. 820px) stay
readable without their own breakpoint.

---

## Tech stack

| Layer    | Choice                                                      |
| -------- | ----------------------------------------------------------- |
| Markup   | Semantic HTML5                                              |
| Styling  | Plain CSS — custom properties, `clamp()`, CSS Grid, Flexbox |
| Behavior | Vanilla JS (~20 lines) for the mobile menu                  |
| Tooling  | None                                                        |

No build step, no dependencies, no package manager.

---

## Getting started

Clone the repo and open the page:

```bash
git clone https://github.com/ddelportgit/responsive-saas.git
cd responsive-saas
```

Then either open `index.html` directly in a browser, or serve it locally:

```bash
# Python 3
python3 -m http.server 8000

# or Node
npx serve .
```

Then visit `http://localhost:8000`.

---

## Project structure

```
.
├── index.html      # Entire page markup
├── style.css       # All styles, including media queries
├── script.js       # Hamburger menu toggle
├── preview.png     # Screenshot used in this README
└── README.md
```

---

## Accessibility

- Semantic landmarks: `<nav>`, `<main>`, `<section>`, `<aside>`, `<footer>`
- Heading hierarchy runs `h1 → h2 → h3 → h4` with no skipped levels; decorative
  numbers (stats, prices) use `<p>` with classes rather than headings
- Hamburger button exposes `aria-expanded`, `aria-controls`, and an `aria-label`;
  the three bars are `aria-hidden="true"`
- The preview `<nav>` has an `aria-label` to distinguish it from the main nav
- Focus styles are visible on all interactive elements
- Transitions and smooth scrolling are disabled under `prefers-reduced-motion`

---

## Known limitations

- All copy, statistics, and pricing are placeholders
- Buttons and footer links are `href="#"` stubs — nothing is wired up
- No dark mode, no form handling, no tests

---

## License

MIT — see [LICENSE](./LICENSE).
