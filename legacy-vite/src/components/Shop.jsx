import { useEffect, useMemo, useState } from "react";
import SectionHead from "./ui/SectionHead";
import ProductCard from "./ProductCard";
import QuickView from "./QuickView";
import { PRODUCTS, CATEGORIES } from "../data/content";

const SORTS = [
  { v: "featured", label: "Featured" },
  { v: "price-asc", label: "Price: Low to High" },
  { v: "price-desc", label: "Price: High to Low" },
  { v: "rating", label: "Top Rated" },
  { v: "name", label: "Name A–Z" },
];

export default function Shop() {
  const [cat, setCat] = useState("All");
  const [q, setQ] = useState("");
  const [sort, setSort] = useState("featured");
  const [quick, setQuick] = useState(null);

  // Allow Department cards to drive the filter + scroll here.
  useEffect(() => {
    const onFilter = (e) => setCat(e.detail || "All");
    window.addEventListener("shop:filter", onFilter);
    return () => window.removeEventListener("shop:filter", onFilter);
  }, []);

  const list = useMemo(() => {
    let r = PRODUCTS.filter((p) => cat === "All" || p.category === cat);
    const needle = q.trim().toLowerCase();
    if (needle) {
      r = r.filter((p) => `${p.name} ${p.type} ${p.region}`.toLowerCase().includes(needle));
    }
    switch (sort) {
      case "price-asc":
        r = [...r].sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        r = [...r].sort((a, b) => b.price - a.price);
        break;
      case "rating":
        r = [...r].sort((a, b) => b.rating - a.rating);
        break;
      case "name":
        r = [...r].sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }
    return r;
  }, [cat, q, sort]);

  return (
    <section className="section section--alt" id="shop" aria-label="Shop">
      <div className="container">
        <SectionHead eyebrow="Shop the shelf" title="Browse our selection">
          A taste of what's in store. Save favorites to your list and pick them up in-store — or send
          an Item Request for anything you don't see.
        </SectionHead>

        <div className="shop__toolbar">
          <div className="shop__search">
            <span className="ico" aria-hidden="true">
              ⌕
            </span>
            <input
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search wines, spirits, cigars…"
              aria-label="Search products"
            />
          </div>

          <div className="shop__filters" role="tablist" aria-label="Filter by category">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                role="tab"
                aria-selected={cat === c}
                className={`filter${cat === c ? " is-active" : ""}`}
                onClick={() => setCat(c)}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="shop__sort">
            <select value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Sort products">
              {SORTS.map((s) => (
                <option key={s.v} value={s.v}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <p className="shop__count">
          {list.length} {list.length === 1 ? "product" : "products"}
          {cat !== "All" ? ` in ${cat}` : ""}
        </p>

        {list.length === 0 ? (
          <div className="shop__empty">
            No matches. Try a different search or category — or just ask us, we'll source it.
          </div>
        ) : (
          <div className="shop__grid">
            {list.map((p) => (
              <ProductCard key={p.id} product={p} onQuick={setQuick} />
            ))}
          </div>
        )}
      </div>

      {quick && <QuickView product={quick} onClose={() => setQuick(null)} />}
    </section>
  );
}
