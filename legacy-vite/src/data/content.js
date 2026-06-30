// Single source of truth for site content.

export const NAV_LINKS = [
  { id: "collections", label: "Collections" },
  { id: "shop", label: "Shop" },
  { id: "humidor", label: "Humidor" },
  { id: "events", label: "Events" },
  { id: "visit", label: "Visit" },
];

export const HERO_TRUST = [
  { value: "1,000+", label: "Wines in stock" },
  { value: "30 yrs", label: "On the Eastern Shore" },
  { value: "4.9★", label: "Average rating" },
];

export const BRANDS = [
  "Bordeaux",
  "Napa Valley",
  "Champagne",
  "Speyside",
  "Cohiba",
  "Tuscany",
  "Kentucky",
  "Provence",
];

// Wine / Spirits / Beer / Cigars images
const IMG = {
  wineGlasses: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=700&q=70",
  winePour: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?auto=format&fit=crop&w=700&q=70",
  vineyard: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=700&q=70",
  whiskey: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?auto=format&fit=crop&w=700&q=70",
  beer: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=700&q=70",
  beerFlight: "https://images.unsplash.com/photo-1612528443702-f6741f70a049?auto=format&fit=crop&w=700&q=70",
  cigars: "/assets/cigars.webp",
};

export const DEPARTMENTS = [
  { n: "01", title: "Wine", filter: "Wine", desc: "1,000+ labels — the largest selection in Dorchester County.", img: IMG.wineGlasses },
  { n: "02", title: "Spirits", filter: "Spirits", desc: "Single malts, bourbons, tequilas, and rare pours.", img: IMG.whiskey },
  { n: "03", title: "Craft Beer", filter: "Beer", desc: "A rotating wall of local Maryland breweries.", img: IMG.beer },
  { n: "04", title: "Cigars", filter: "Cigars", desc: "1,000+ selections in a cedar-lined walk-in humidor.", img: IMG.cigars },
];

export const COLLECTIONS = [
  { title: "Reserve Reds", sub: "Cabernet · Merlot · Pinot", img: "/assets/coll-red.webp", filter: "Wine" },
  { title: "Spirits", sub: "Single malt · Bourbon · Agave", img: IMG.whiskey, filter: "Spirits" },
  { title: "Craft Beer", sub: "Local Eastern Shore brews", img: IMG.beer, filter: "Beer" },
  { title: "The Humidor", sub: "1,000+ premium cigars", img: "/assets/humidor.webp", filter: "Cigars" },
];

export const CATEGORIES = ["All", "Wine", "Spirits", "Beer", "Cigars"];

export const PRODUCTS = [
  {
    id: "caymus-cab",
    name: "Caymus Cabernet Sauvignon",
    category: "Wine",
    type: "Red Wine",
    region: "Napa Valley, CA",
    price: 89.99,
    rating: 4.8,
    reviews: 214,
    img: IMG.winePour,
    badge: "Staff Pick",
    desc: "Rich and velvety with ripe dark fruit, cocoa, and a long, structured finish. A cellar-worthy crowd-pleaser.",
    specs: [
      ["Region", "Napa Valley"],
      ["Vintage", "2021"],
      ["Varietal", "Cabernet Sauvignon"],
      ["Size", "750ml"],
    ],
  },
  {
    id: "veuve-brut",
    name: "Veuve Clicquot Brut",
    category: "Wine",
    type: "Champagne",
    region: "Champagne, FR",
    price: 59.99,
    rating: 4.7,
    reviews: 168,
    img: IMG.wineGlasses,
    desc: "The iconic yellow label — crisp, toasty, and endlessly celebratory. Always chilled and ready to pop.",
    specs: [
      ["Region", "Champagne"],
      ["Style", "Brut"],
      ["Grapes", "Pinot Noir blend"],
      ["Size", "750ml"],
    ],
  },
  {
    id: "whispering-angel",
    name: "Whispering Angel Rosé",
    category: "Wine",
    type: "Rosé",
    region: "Provence, FR",
    price: 22.99,
    rating: 4.6,
    reviews: 309,
    img: IMG.vineyard,
    badge: "Summer",
    desc: "The benchmark Provence rosé — pale, dry, and refreshing with notes of red berry and citrus.",
    specs: [
      ["Region", "Côtes de Provence"],
      ["Vintage", "2023"],
      ["Style", "Dry Rosé"],
      ["Size", "750ml"],
    ],
  },
  {
    id: "dom-perignon",
    name: "Dom Pérignon Vintage",
    category: "Wine",
    type: "Champagne",
    region: "Champagne, FR",
    price: 229.99,
    rating: 5.0,
    reviews: 52,
    img: IMG.wineGlasses,
    badge: "Reserve",
    desc: "A landmark prestige cuvée — precise, mineral, and profound. For the occasions that deserve it.",
    specs: [
      ["Region", "Champagne"],
      ["Vintage", "2013"],
      ["Style", "Brut"],
      ["Size", "750ml"],
    ],
  },
  {
    id: "macallan-12",
    name: "Macallan 12 Double Cask",
    category: "Spirits",
    type: "Single Malt Scotch",
    region: "Speyside, SCT",
    price: 74.99,
    rating: 4.9,
    reviews: 187,
    img: IMG.whiskey,
    badge: "Top Rated",
    desc: "Honeyed sweetness, dried fruit, and warm oak from sherry-seasoned casks. A benchmark single malt.",
    specs: [
      ["Region", "Speyside"],
      ["Age", "12 Years"],
      ["ABV", "40%"],
      ["Size", "750ml"],
    ],
  },
  {
    id: "casamigos-blanco",
    name: "Casamigos Blanco Tequila",
    category: "Spirits",
    type: "Tequila",
    region: "Jalisco, MX",
    price: 48.99,
    rating: 4.5,
    reviews: 142,
    img: IMG.whiskey,
    desc: "Soft agave, vanilla, and a clean, smooth finish — built for sipping or a standout margarita.",
    specs: [
      ["Region", "Jalisco"],
      ["Style", "Blanco"],
      ["ABV", "40%"],
      ["Size", "750ml"],
    ],
  },
  {
    id: "buffalo-trace",
    name: "Buffalo Trace Bourbon",
    category: "Spirits",
    type: "Bourbon",
    region: "Kentucky, US",
    price: 29.99,
    rating: 4.7,
    reviews: 263,
    img: IMG.whiskey,
    badge: "Value",
    desc: "Award-winning Kentucky straight bourbon — caramel, vanilla, and gentle spice at a fair price.",
    specs: [
      ["Region", "Kentucky"],
      ["Style", "Straight Bourbon"],
      ["ABV", "45%"],
      ["Size", "750ml"],
    ],
  },
  {
    id: "ipa-flight",
    name: "Eastern Shore IPA 6-Pack",
    category: "Beer",
    type: "Craft IPA",
    region: "Maryland, US",
    price: 14.99,
    rating: 4.4,
    reviews: 96,
    img: IMG.beerFlight,
    badge: "Local",
    desc: "A hazy, citrus-forward IPA from just up the road. Hopped for the porch on a warm Cambridge evening.",
    specs: [
      ["Style", "Hazy IPA"],
      ["ABV", "6.8%"],
      ["Pack", "6 × 12oz"],
      ["Brewery", "Local MD"],
    ],
  },
  {
    id: "rar-lager",
    name: "RAR Brewing Lager",
    category: "Beer",
    type: "Craft Lager",
    region: "Cambridge, MD",
    price: 11.99,
    rating: 4.3,
    reviews: 74,
    img: IMG.beer,
    desc: "Brewed right here in Cambridge — crisp, clean, and impossibly easy-drinking. Hometown pride in a can.",
    specs: [
      ["Style", "Lager"],
      ["ABV", "4.8%"],
      ["Pack", "6 × 12oz"],
      ["Brewery", "RAR, Cambridge"],
    ],
  },
  {
    id: "cohiba-robusto",
    name: "Cohiba Robusto",
    category: "Cigars",
    type: "Premium Cigar",
    region: "Dominican Rep.",
    price: 24.99,
    rating: 4.9,
    reviews: 118,
    img: IMG.cigars,
    badge: "Humidor",
    desc: "Medium-to-full bodied with cedar, cream, and a touch of spice. Kept flawless in our cedar humidor.",
    specs: [
      ["Origin", "Dominican Rep."],
      ["Wrapper", "Connecticut"],
      ["Size", "Robusto 5×50"],
      ["Strength", "Medium-Full"],
    ],
  },
  {
    id: "fuente-hemingway",
    name: "Arturo Fuente Hemingway",
    category: "Cigars",
    type: "Premium Cigar",
    region: "Dominican Rep.",
    price: 18.99,
    rating: 4.8,
    reviews: 91,
    img: IMG.cigars,
    desc: "A perennial favorite — smooth, nutty, and beautifully constructed in a classic figurado shape.",
    specs: [
      ["Origin", "Dominican Rep."],
      ["Wrapper", "Cameroon"],
      ["Size", "Short Story 4×49"],
      ["Strength", "Medium"],
    ],
  },
  {
    id: "quorum-shade",
    name: "Quorum Shade Cigars",
    category: "Cigars",
    type: "Everyday Cigar",
    region: "Nicaragua",
    price: 7.99,
    rating: 4.4,
    reviews: 140,
    img: IMG.cigars,
    badge: "Value",
    desc: "An everyday workhorse with a smooth Connecticut shade wrapper — great value by the box.",
    specs: [
      ["Origin", "Nicaragua"],
      ["Wrapper", "Connecticut Shade"],
      ["Size", "Robusto 5×50"],
      ["Strength", "Mild-Medium"],
    ],
  },
];

export const HUMIDOR_FEATURES = [
  { title: "1,000+ selections", desc: "Budget-friendly to ultra-premium, with box and quantity discounts." },
  { title: "Guided recommendations", desc: "Tell us the occasion and palate — we'll match the wrapper, body, and price." },
  { title: "Accessories on hand", desc: "Cutters, lighters, humidifiers, and travel cases to round out the ritual." },
];

export const STATS = [
  { value: 1000, suffix: "+", label: "Wines on the shelf" },
  { value: 1000, suffix: "+", label: "Cigars in the humidor" },
  { value: 30, suffix: "+", label: "Years of expertise" },
  { value: 5, suffix: "k+", label: "Happy regulars" },
];

export const EVENT_SERVICES = [
  { icon: "💍", title: "Weddings", desc: "Curated wine, bubbles & bar service sized to your guest count." },
  { icon: "🥂", title: "Parties & brunches", desc: "Crowd-pleasing selections with quantity & box discounts." },
  { icon: "🎁", title: "Gifting & corporate", desc: "Bottle gifting, cigars, and accessories for any occasion." },
];

export const TASTINGS = [
  { mon: "Jul", day: "12", title: "Bordeaux vs. Napa — Blind Tasting", desc: "Six bottles, two regions, one winner.", time: "Fri · 6:30 PM", price: "$35" },
  { mon: "Jul", day: "19", title: "Bourbon & Cigar Pairing Night", desc: "Small-batch bourbon meets the humidor.", time: "Fri · 7:00 PM", price: "$45" },
  { mon: "Jul", day: "26", title: "Summer Rosé Social", desc: "A chilled rosé flight on the patio.", time: "Sat · 5:00 PM", price: "$25" },
  { mon: "Aug", day: "02", title: "Local Craft Beer Showcase", desc: "Meet the Eastern Shore's best breweries.", time: "Sat · 4:00 PM", price: "Free" },
];

export const TESTIMONIALS = [
  {
    initial: "M",
    name: "Marcus T.",
    place: "Cambridge, MD",
    quote:
      "Incredible selection and the staff actually know their wine. They paired three bottles for our dinner party — every one was a hit.",
  },
  {
    initial: "D",
    name: "Denise R.",
    place: "Easton, MD",
    quote:
      "The walk-in humidor is the best on the Shore. Huge range, fair prices, and they remember what I like.",
  },
  {
    initial: "A",
    name: "Anthony P.",
    place: "Salisbury, MD",
    quote:
      "They sourced a bottle I couldn't find anywhere for my anniversary. That service keeps me out of the big-box stores.",
  },
];

export const HOURS = [
  { day: "Monday – Thursday", time: "9:00 AM – 9:00 PM" },
  { day: "Friday – Saturday", time: "9:00 AM – 10:00 PM", today: true },
  { day: "Sunday", time: "10:00 AM – 8:00 PM" },
];

export const PAYMENTS = ["Visa", "Mastercard", "Amex", "Apple Pay", "Google Pay"];

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
