"use client";
import { useState } from "react";
import Link from "next/link";
import Stars from "./Stars";
import Icon from "./Icon";
import { useCart } from "@/context/Cart";
import { money } from "@/lib/format";
import { STOCK_LABEL } from "@/lib/content";

export default function ProductCard({ product: p }) {
  const { add } = useCart();
  const [fav, setFav] = useState(false);
  const sl = STOCK_LABEL[p.stock];
  const out = p.stock === "out";
  const href = `/product/${p.slug}/`;

  return (
    <article className="product">
      <button
        type="button"
        className={`product__fav${fav ? " is-on" : ""}`}
        aria-label={fav ? "Remove from wishlist" : "Add to wishlist"}
        aria-pressed={fav}
        onClick={() => setFav((v) => !v)}
      >
        <Icon name="heart" size={16} strokeWidth={2} />
      </button>
      <Link
        className="product__media"
        href={href}
        style={{ backgroundImage: `url('${p.img}')` }}
        aria-label={p.name}
      >
        <span className="product__badges">
          {p.badge && <span className="badge badge--gold">{p.badge}</span>}
          <span className={`badge ${sl.cls}`}>{sl.label}</span>
        </span>
      </Link>

      <div className="product__body">
        <span className="product__meta">
          {p.type} · {p.region}
        </span>
        <h3 className="product__name">
          <Link href={href}>{p.name}</Link>
        </h3>
        <div className="product__rating">
          <Stars rating={p.rating} /> {p.rating} <span>({p.reviews})</span>
        </div>
        <div className="product__foot">
          <span className="price">
            {money(p.price)}
            {p.compareAt && (
              <small style={{ marginLeft: 6, textDecoration: "line-through" }}>{money(p.compareAt)}</small>
            )}
          </span>
          {out ? (
            <Link className="btn btn-outline btn--sm" href={href}>
              Request
            </Link>
          ) : (
            <button className="btn btn-primary btn--sm" onClick={() => add(p)}>
              Add
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
