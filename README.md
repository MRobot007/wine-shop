# Best Wine & Spirits — Next.js e-commerce store

A light, crisp, multi-page wine-shop storefront built with **Next.js (App Router)** and exported
as a **fully static site** (`output: 'export'`), so it deploys to any static host (Netlify Drop,
Vercel, S3, GitHub Pages). Cart and checkout run entirely client-side — no server required.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000

npm run build      # static export → ./out
npm run serve      # serve the export at http://localhost:4173
```

## Pages

| Route | What it is |
|-------|-----------|
| `/` | Home — hero, value props, collections, featured products, benefits, reviews, events, newsletter |
| `/shop/` | Catalog with **sidebar filters** (category, price, availability), search, sort |
| `/product/[slug]/` | Product detail — rating, price, tasting notes, pairing, specs, reviews, related |
| `/cart/` | Cart with quantity steppers, **mix-a-case discount**, totals |
| `/checkout/` | Contact → **pickup vs delivery** → gift note → **21+ ID confirm** → summary |
| `/checkout/success/` | Order confirmation with order number & pickup/delivery details |
| `/events/` | Tastings calendar + RSVP + wedding/private-event quote |
| `/contact/` | Address, hours, map, contact form, **Item Request** |

## Built to solve real wine-shop-owner problems

| Owner problem | Solution in the site |
|---------------|----------------------|
| Foot traffic only; no online sales | Full online catalog with **buy-online pickup (BOPIS)** + **local delivery** |
| "Out of stock" loses the sale | Live **stock badges** (In / Low / Out) + one-tap **Item Request / special order** |
| Small online basket size | **Mix-a-case 10% discount** (12+ bottles) + **free delivery over $75** thresholds |
| Shoppers don't know what to buy | Ratings, **tasting notes**, **food pairings**, staff picks, and filters/search |
| Legal compliance (21+) | Site-wide **age gate** + **21+ ID confirmation** at checkout + ID-at-handoff reminders |
| Gifting demand | **Gift note + receipt-free packing** option at checkout |
| Events drive revenue | **Tastings RSVP** + **wedding/private-event quote** request |
| Repeat business / loyalty | **Cellar Club** newsletter signup throughout |
| Local discovery | Map, hours, directions, and click-to-call on the contact page |

> Checkout is a realistic **demo** — it places an order and shows a confirmation, but takes no
> payment online ("pay at pickup/delivery"). Swap the `placeOrder` handler in
> `components/CheckoutForm.jsx` for a Stripe Checkout / payment link to take real payment.

## Structure

```
app/                 # App Router pages (home, shop, product/[slug], cart, checkout, events, contact)
components/           # Navbar, Footer, ProductCard, AddToCart, CartView, CheckoutForm, forms…
context/             # Cart + Toast providers (localStorage cart)
lib/                 # products.js (catalog), content.js (store/marketing), format.js (money + cart math)
styles/              # tokens / base / components / pages CSS (no framework)
public/assets/       # product & hero imagery
```

## Customize before launch

- **Products** live in `lib/products.js` — name, price, stock, rating, notes, pairing, image.
- **Store info, hours, delivery rules** in `lib/content.js` (`STORE`, `HOURS`, `COMMERCE`).
- **Hours & social links** are placeholders.
- **Payments**: wire `CheckoutForm` to Stripe (or a payment link) for live transactions.
- **Forms** (item request, contact) use `mailto:` / toast — connect to Formspree/Netlify Forms or
  a backend for real submissions.

## Notes

- Prior versions are archived: `legacy-static/` (no-build HTML), `legacy-vite/` (Vite SPA).
- Static export means image optimization is off (`images.unoptimized`); imagery uses plain
  CSS backgrounds + a few Unsplash URLs.

---

*Please drink responsibly. Must be 21+. ID required at pickup & delivery.*
