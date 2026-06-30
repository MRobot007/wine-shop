# Best Wine & Spirits — Website

A premium, single-page marketing site for **Best Wine & Spirits** (Cambridge, MD) featuring a
dark-luxury wine-cellar aesthetic with real **glassmorphism** — frosted glass panels layered over
an animated burgundy/gold atmosphere, scroll-reveal motion, animated stat counters, parallax
gradient orbs, and hover-reactive glass tilt.

Built with **vanilla HTML / CSS / JavaScript — no build step, no dependencies.**

## View it

Just open `index.html` in any modern browser.

For the cleanest experience (so the Google Map iframe and fonts load over HTTP), run a tiny local
server from this folder:

```bash
# Python 3
python -m http.server 5173
# then visit http://localhost:5173
```

```bash
# or Node
npx serve .
```

## Structure

```
index.html              # All page sections (semantic HTML)
styles/
  tokens.css            # Design tokens: palette, type scale, spacing, motion
  global.css            # Reset, body atmosphere (gradient + grain), typography
  glass.css             # Glassmorphism system: surfaces, buttons, chips, navbar
  animations.css        # Keyframes, scroll-reveal classes, floating orbs
  layout.css            # Section layouts + responsive breakpoints
scripts/
  reveal.js             # IntersectionObserver scroll reveals
  counters.js           # Animated number count-up for stats
  parallax.js           # Subtle hero orb parallax
  main.js               # Navbar, mobile menu, age gate, forms, toast, glass tilt
```

## Sections

1. **Age gate** — 21+ confirmation (once per session, `sessionStorage`)
2. **Hero** — animated orbs, glass stat chips, floating glass feature card
3. **Marquee** — scrolling regions & brands
4. **Collection** — Wine · Spirits · Craft Beer · Cigars glass cards
5. **The Humidor** — editorial split feature
6. **Stats** — animated counters
7. **Events** — event-planning services
8. **Item Request** — working glass form (opens a pre-filled email via `mailto:`)
9. **Testimonials** — glass quote cards
10. **Visit** — address, hours, payments + dark-themed Google Map
11. **Footer** — links, newsletter, socials

## Things to customize before going live

- **Hours** in the *Visit* section are placeholders — set your real schedule.
- **Social links** in the footer point to `#` — add real Facebook / Instagram / Yelp URLs.
- **Item Request form** uses `mailto:BestWineMD@gmail.com`. For a true server-side submission,
  swap the handler in `scripts/main.js` for a fetch to your form endpoint (e.g. Formspree, Netlify Forms).
- **Images**: the Cigars card and the Humidor feature use locally-hosted images in `assets/`
  (`cigars.webp`, `humidor.webp`). The Wine / Spirits / Craft Beer cards and hero card use Unsplash
  hotlinks for the demo — replace all of these with your own product/store photography for launch.
- **Logo** is a typographic monogram (“B”). Drop in a real logo SVG in `.brand__mark` if available.

## Accessibility & performance

- Semantic landmarks, skip link, focus-visible styles, ARIA labels.
- Full `prefers-reduced-motion` support — all motion is disabled for users who opt out.
- Compositor-friendly animation (`transform` / `opacity` only).
- Lazy-loaded map iframe; no JS frameworks shipped.

---

*Please drink and enjoy responsibly. Must be 21+.*
