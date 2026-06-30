// Store info, marketing content, and owner-solution copy.

export const STORE = {
  name: "Best Wine & Spirits",
  city: "Cambridge, MD",
  address: "2831 Ocean Gateway, Cambridge, MD 21613",
  phone: "410-221-0116",
  phoneHref: "tel:4102210116",
  email: "BestWineMD@gmail.com",
  mapEmbed: "https://www.google.com/maps?q=2831%20Ocean%20Gateway,%20Cambridge,%20MD%2021613&output=embed",
  mapLink: "https://maps.google.com/?q=2831+Ocean+Gateway,+Cambridge,+MD+21613",
};

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/shop/", label: "Shop" },
  { href: "/shop/?cat=Wine", label: "Wine" },
  { href: "/shop/?cat=Spirits", label: "Spirits" },
  { href: "/shop/?cat=Cigars", label: "Cigars" },
  { href: "/events/", label: "Events" },
  { href: "/contact/", label: "Visit" },
];

// Commerce rules (also surfaced to shoppers)
export const COMMERCE = {
  freeDeliveryOver: 75,
  deliveryFee: 7.99,
  caseSize: 12,
  caseDiscount: 0.1, // 10% off when 12+ eligible bottles
  taxRate: 0.06, // MD 6% (informational)
};

export const HERO_TRUST = [
  { value: "1,000+", label: "Wines in stock" },
  { value: "Free", label: "Local delivery over $75" },
  { value: "4.9★", label: "Average rating" },
];

// Home value props = the owner's problems, solved
export const VALUES = [
  { ico: "bag", title: "Buy online, pick up", desc: "Ready in ~30 minutes." },
  { ico: "truck", title: "Local delivery", desc: "Free nearby over $75." },
  { ico: "search", title: "Can't find it?", desc: "We'll special-order it." },
  { ico: "glass", title: "Tastings & events", desc: "Weekly, plus private parties." },
];

export const SOLUTIONS = [
  { title: "Never lose a sale to 'out of stock'", desc: "Live stock status on every product, with one-tap Item Request when something's gone." },
  { title: "Turn browsers into baskets", desc: "Filters, search, ratings, and tasting notes help shoppers decide and check out fast." },
  { title: "Sell more per order", desc: "Automatic case pricing rewards 12+ bottles, and free-delivery thresholds lift the average ticket." },
  { title: "Stay compliant, effortlessly", desc: "Built-in 21+ age gate and ID-at-handoff reminders keep every order above board." },
];

export const COLLECTIONS = [
  { title: "Red Wine", sub: "Cabernet · Pinot · Blends", img: "/assets/coll-red.webp", href: "/shop/?cat=Wine" },
  { title: "Spirits", sub: "Whiskey · Tequila · Gin", img: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?auto=format&fit=crop&w=700&q=70", href: "/shop/?cat=Spirits" },
  { title: "Craft Beer", sub: "Local Eastern Shore brews", img: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=700&q=70", href: "/shop/?cat=Beer" },
  { title: "The Humidor", sub: "1,000+ premium cigars", img: "/assets/cigars.webp", href: "/shop/?cat=Cigars" },
];

export const TESTIMONIALS = [
  { initial: "M", name: "Marcus T.", place: "Cambridge, MD", quote: "Ordered online for pickup before a dinner party — ready in 20 minutes and the staff even picked a perfect second bottle." },
  { initial: "D", name: "Denise R.", place: "Easton, MD", quote: "The walk-in humidor is the best on the Shore, and now I can reserve cigars online before I drive over." },
  { initial: "A", name: "Anthony P.", place: "Salisbury, MD", quote: "They tracked down a bottle I couldn't find anywhere for my anniversary. That service keeps me out of the big-box stores." },
];

export const SAMPLE_REVIEWS = [
  { name: "Jennifer K.", rating: 5, text: "Exactly as described and delivered the same afternoon. Will absolutely reorder." },
  { name: "Rob M.", rating: 5, text: "Great price and the staff recommendation was spot on. New favorite." },
  { name: "Sandra L.", rating: 4, text: "Lovely bottle, arrived well-packed. Would have liked a gift note option — turns out they have one at checkout!" },
];

export const EVENTS = [
  { mon: "Jul", day: "12", title: "Bordeaux vs. Napa — Blind Tasting", desc: "Six bottles, two regions, one winner.", time: "Fri · 6:30 PM", price: "$35" },
  { mon: "Jul", day: "19", title: "Bourbon & Cigar Pairing Night", desc: "Small-batch bourbon meets the humidor.", time: "Fri · 7:00 PM", price: "$45" },
  { mon: "Jul", day: "26", title: "Summer Rosé Social", desc: "A chilled rosé flight on the patio.", time: "Sat · 5:00 PM", price: "$25" },
  { mon: "Aug", day: "02", title: "Local Craft Beer Showcase", desc: "Meet the Eastern Shore's best breweries.", time: "Sat · 4:00 PM", price: "Free" },
];

export const HOURS = [
  { day: "Monday – Thursday", time: "9:00 AM – 9:00 PM" },
  { day: "Friday – Saturday", time: "9:00 AM – 10:00 PM", today: true },
  { day: "Sunday", time: "10:00 AM – 8:00 PM" },
];

export const PAYMENTS = ["Visa", "Mastercard", "Amex", "Apple Pay", "Google Pay"];

export const STOCK_LABEL = {
  in: { cls: "badge--in", label: "In stock" },
  low: { cls: "badge--low", label: "Low stock" },
  out: { cls: "badge--out", label: "Out of stock" },
};
