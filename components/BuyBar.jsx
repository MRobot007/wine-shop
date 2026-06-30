"use client";
import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/Cart";
import { money } from "@/lib/format";

export default function BuyBar({ product }) {
  const { add } = useCart();
  const [qty, setQty] = useState(1);
  const out = product.stock === "out";

  if (out) {
    return (
      <div className="pdp__buybar">
        <span className="price">{money(product.price)}</span>
        <Link className="btn btn-dark btn--lg" href="/contact/?request=1">
          Request this item <span className="btn-arrow" aria-hidden="true">→</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="pdp__buybar">
      <div className="qty">
        <button onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Decrease quantity">
          −
        </button>
        <span>{qty}</span>
        <button onClick={() => setQty((q) => q + 1)} aria-label="Increase quantity">
          +
        </button>
      </div>
      <span className="price">{money(product.price * qty)}</span>
      <button className="btn btn-primary btn--lg" onClick={() => add(product, qty)}>
        Add to cart
      </button>
    </div>
  );
}
