"use client";
import Link from "next/link";
import { useCart } from "@/context/Cart";
import Icon from "./Icon";
import { computeTotals, money } from "@/lib/format";
import { COMMERCE } from "@/lib/content";

export default function CartView() {
  const { items, setQty, remove, ready } = useCart();

  if (ready && items.length === 0) {
    return (
      <div className="empty-state">
        <div className="big" style={{ color: "var(--muted)" }}>
          <Icon name="cart" size={46} strokeWidth={1.4} />
        </div>
        <h2>Your cart is empty</h2>
        <p>Add a few bottles and they'll show up here.</p>
        <Link className="btn btn-primary btn--lg" href="/shop/">
          Browse the shop
        </Link>
      </div>
    );
  }

  const t = computeTotals(items, "pickup");
  const toCase = COMMERCE.caseSize - t.qtyTotal;

  return (
    <div className="cart-layout">
      <div className="cart-items">
        {items.map((i) => (
          <div className="cart-item" key={i.slug}>
            <Link
              className="cart-item__img"
              href={`/product/${i.slug}/`}
              style={{ backgroundImage: `url('${i.img}')` }}
              aria-label={i.name}
            />
            <div className="cart-item__info">
              <h4>
                <Link href={`/product/${i.slug}/`}>{i.name}</Link>
              </h4>
              <div className="meta">{i.type}</div>
              <button className="rm" onClick={() => remove(i.slug)}>
                Remove
              </button>
            </div>
            <div className="cart-item__right">
              <div className="qty">
                <button onClick={() => setQty(i.slug, i.qty - 1)} aria-label="Decrease">
                  −
                </button>
                <span>{i.qty}</span>
                <button onClick={() => setQty(i.slug, i.qty + 1)} aria-label="Increase">
                  +
                </button>
              </div>
              <span className="price">{money(i.price * i.qty)}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="summary">
        <h3>Order summary</h3>
        <div className="summary__row">
          <span>Subtotal ({t.qtyTotal} items)</span>
          <span>{money(t.subtotal)}</span>
        </div>
        {t.discount > 0 && (
          <div className="summary__row discount">
            <span>Mix-a-case discount (10%)</span>
            <span>−{money(t.discount)}</span>
          </div>
        )}
        <div className="summary__row total">
          <span>Estimated total</span>
          <span>{money(t.subtotal - t.discount)}</span>
        </div>
        <p className="summary__note">Taxes, delivery, and pickup time are calculated at checkout.</p>

        {t.qtyTotal > 0 && toCase > 0 && (
          <div className="promo">
            Add {toCase} more {toCase === 1 ? "bottle" : "bottles"} to unlock 10% off your case (mix &amp; match).
          </div>
        )}
        {t.discount > 0 && <div className="promo">Case discount applied — nice work.</div>}

        <Link className="btn btn-primary btn--block btn--lg" href="/checkout/" style={{ marginTop: "1rem" }}>
          Proceed to checkout
        </Link>
        <Link className="btn btn-ghost btn--block" href="/shop/" style={{ marginTop: "0.5rem" }}>
          Continue shopping
        </Link>
      </div>
    </div>
  );
}
