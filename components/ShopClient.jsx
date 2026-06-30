"use client";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "./ProductCard";
import Icon from "./Icon";
import { PRODUCTS, CATEGORIES, categoryCount } from "@/lib/products";

const PRICE_BANDS = [
  { id: "all", label: "Any price", test: () => true },
  { id: "u25", label: "Under $25", test: (p) => p.price < 25 },
  { id: "25-75", label: "$25 – $75", test: (p) => p.price >= 25 && p.price <= 75 },
  { id: "o75", label: "$75 and up", test: (p) => p.price > 75 },
];
const SORTS = [
  { v: "featured", l: "Featured" },
  { v: "price-asc", l: "Price: Low to High" },
  { v: "price-desc", l: "Price: High to Low" },
  { v: "rating", l: "Top rated" },
  { v: "name", l: "Name A–Z" },
];

export default function ShopClient() {
  const params = useSearchParams();
  const [cat, setCat] = useState(params.get("cat") || "All");
  const [q, setQ] = useState("");
  const [band, setBand] = useState("all");
  const [inStock, setInStock] = useState(false);
  const [sort, setSort] = useState("featured");
  const [open, setOpen] = useState(false);

  const list = useMemo(() => {
    let r = PRODUCTS.filter((p) => cat === "All" || p.category === cat);
    if (inStock) r = r.filter((p) => p.stock !== "out");
    const pb = PRICE_BANDS.find((b) => b.id === band);
    if (pb) r = r.filter(pb.test);
    const n = q.trim().toLowerCase();
    if (n) r = r.filter((p) => `${p.name} ${p.type} ${p.region}`.toLowerCase().includes(n));
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
  }, [cat, q, band, inStock, sort]);

  return (
    <div className="shop-layout">
      <aside className={`filters${open ? " is-open" : ""}`}>
        <div className="filters__group">
          <h4>Category</h4>
          <button className={`filters__opt${cat === "All" ? " is-active" : ""}`} onClick={() => setCat("All")}>
            <span className="dot" /> All <span className="n">{PRODUCTS.length}</span>
          </button>
          {CATEGORIES.map((c) => (
            <button key={c} className={`filters__opt${cat === c ? " is-active" : ""}`} onClick={() => setCat(c)}>
              <span className="dot" /> {c} <span className="n">{categoryCount(c)}</span>
            </button>
          ))}
        </div>
        <div className="filters__group">
          <h4>Price</h4>
          {PRICE_BANDS.map((b) => (
            <button key={b.id} className={`filters__opt${band === b.id ? " is-active" : ""}`} onClick={() => setBand(b.id)}>
              <span className="dot" /> {b.label}
            </button>
          ))}
        </div>
        <div className="filters__group">
          <h4>Availability</h4>
          <label className="check">
            <input type="checkbox" checked={inStock} onChange={(e) => setInStock(e.target.checked)} />
            <span>In stock only</span>
          </label>
        </div>
      </aside>

      <div>
        <div className="shop-search">
          <span className="ico">
            <Icon name="search" size={18} />
          </span>
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search wines, spirits, cigars…"
            aria-label="Search products"
          />
        </div>
        <div className="shop-bar">
          <button className="btn btn-outline btn--sm filters-toggle" onClick={() => setOpen((o) => !o)}>
            <Icon name="filter" size={16} /> Filters
          </button>
          <span className="count">
            {list.length} {list.length === 1 ? "product" : "products"}
            {cat !== "All" ? ` in ${cat}` : ""}
          </span>
          <div className="shop-sort">
            <select value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Sort products">
              {SORTS.map((s) => (
                <option key={s.v} value={s.v}>
                  {s.l}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="products products--shop">
          {list.length === 0 ? (
            <div className="shop-empty">
              No matches. Try clearing a filter — or{" "}
              <a href="/contact/?request=1" style={{ color: "var(--wine)", textDecoration: "underline" }}>
                request the item
              </a>
              .
            </div>
          ) : (
            list.map((p) => <ProductCard key={p.slug} product={p} />)
          )}
        </div>
      </div>
    </div>
  );
}
