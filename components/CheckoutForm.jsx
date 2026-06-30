"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/Cart";
import Icon from "./Icon";
import { computeTotals, money } from "@/lib/format";
import { COMMERCE } from "@/lib/content";

export default function CheckoutForm() {
  const { items, clear, ready } = useCart();
  const router = useRouter();
  const [fulfillment, setFulfillment] = useState("pickup");
  const [gift, setGift] = useState(false);

  if (ready && items.length === 0) {
    return (
      <div className="empty-state">
        <div className="big" style={{ color: "var(--muted)" }}>
          <Icon name="bag" size={46} strokeWidth={1.4} />
        </div>
        <h2>Nothing to check out</h2>
        <p>Your cart is empty — add a few bottles first.</p>
        <Link className="btn btn-primary btn--lg" href="/shop/">
          Browse the shop
        </Link>
      </div>
    );
  }

  const t = computeTotals(items, fulfillment);

  const placeOrder = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const data = new FormData(form);
    const order = {
      id: "BWS-" + Math.floor(100000 + Math.random() * 899999),
      name: (data.get("name") || "").toString(),
      email: (data.get("email") || "").toString(),
      fulfillment,
      total: t.total,
      items: t.qtyTotal,
      gift,
    };
    try {
      sessionStorage.setItem("bws_last_order", JSON.stringify(order));
    } catch {
      /* ignore */
    }
    clear();
    router.push("/checkout/success/");
  };

  return (
    <form className="checkout-layout" onSubmit={placeOrder} noValidate>
      <div>
        <div className="checkout-block">
          <h3>
            <span className="step">1</span> Contact
          </h3>
          <div className="field-row">
            <div className="field">
              <label htmlFor="co-name">Full name</label>
              <input id="co-name" name="name" required autoComplete="name" placeholder="Jane Doe" />
            </div>
            <div className="field">
              <label htmlFor="co-phone">Phone</label>
              <input id="co-phone" name="phone" type="tel" required autoComplete="tel" placeholder="(410) 555-0123" />
            </div>
          </div>
          <div className="field" style={{ marginBottom: 0 }}>
            <label htmlFor="co-email">Email</label>
            <input id="co-email" name="email" type="email" required autoComplete="email" placeholder="you@email.com" />
          </div>
        </div>

        <div className="checkout-block">
          <h3>
            <span className="step">2</span> How would you like it?
          </h3>
          <div className="fulfillment">
            <label>
              <input
                type="radio"
                name="fulfillment"
                value="pickup"
                checked={fulfillment === "pickup"}
                onChange={() => setFulfillment("pickup")}
              />
              <span className="opt">
                <strong>In-store pickup</strong>
                <span>Ready in ~30 min · 2831 Ocean Gateway · Free</span>
              </span>
            </label>
            <label>
              <input
                type="radio"
                name="fulfillment"
                value="delivery"
                checked={fulfillment === "delivery"}
                onChange={() => setFulfillment("delivery")}
              />
              <span className="opt">
                <strong>Local delivery</strong>
                <span>Cambridge &amp; nearby · Free over ${COMMERCE.freeDeliveryOver}</span>
              </span>
            </label>
          </div>

          {fulfillment === "delivery" && (
            <div style={{ marginTop: "1rem" }}>
              <div className="field">
                <label htmlFor="co-addr">Delivery address</label>
                <input id="co-addr" name="address" required placeholder="123 Main St" autoComplete="street-address" />
              </div>
              <div className="field-row">
                <div className="field">
                  <label htmlFor="co-city">City</label>
                  <input id="co-city" name="city" required defaultValue="Cambridge" />
                </div>
                <div className="field">
                  <label htmlFor="co-zip">ZIP</label>
                  <input id="co-zip" name="zip" required placeholder="21613" inputMode="numeric" />
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="checkout-block">
          <h3>
            <span className="step">3</span> A few details
          </h3>
          <label className="check" style={{ marginBottom: gift ? "0.8rem" : 0 }}>
            <input type="checkbox" checked={gift} onChange={(e) => setGift(e.target.checked)} />
            <span>This is a gift — add a free gift note &amp; receipt-free packing</span>
          </label>
          {gift && (
            <div className="field" style={{ marginBottom: 0 }}>
              <label htmlFor="co-gift">Gift note</label>
              <textarea id="co-gift" name="giftNote" rows="2" placeholder="Happy anniversary! — with love…" />
            </div>
          )}
        </div>

        <div className="checkout-block" style={{ marginBottom: 0 }}>
          <label className="check">
            <input type="checkbox" name="age" required />
            <span>
              I confirm I am <strong>21 or older</strong> and a valid government ID will be shown at pickup or delivery.
            </span>
          </label>
        </div>
      </div>

      <div>
        <div className="summary">
          <h3>Order summary</h3>
          <div className="mini-items">
            {items.map((i) => (
              <div className="mini-item" key={i.slug}>
                <span className="thumb" style={{ backgroundImage: `url('${i.img}')` }} />
                <span className="nm">
                  <strong>{i.name}</strong>
                  <span>Qty {i.qty}</span>
                </span>
                <span>{money(i.price * i.qty)}</span>
              </div>
            ))}
          </div>
          <div className="summary__row">
            <span>Subtotal</span>
            <span>{money(t.subtotal)}</span>
          </div>
          {t.discount > 0 && (
            <div className="summary__row discount">
              <span>Case discount (10%)</span>
              <span>−{money(t.discount)}</span>
            </div>
          )}
          <div className="summary__row">
            <span>{fulfillment === "delivery" ? "Delivery" : "Pickup"}</span>
            <span>{fulfillment === "pickup" ? "Free" : t.delivery === 0 ? "Free" : money(t.delivery)}</span>
          </div>
          <div className="summary__row">
            <span>Estimated tax</span>
            <span>{money(t.tax)}</span>
          </div>
          <div className="summary__row total">
            <span>Total</span>
            <span>{money(t.total)}</span>
          </div>

          {fulfillment === "delivery" && t.freeDeliveryRemaining > 0 && (
            <div className="promo">Add {money(t.freeDeliveryRemaining)} more for free delivery.</div>
          )}

          <button className="btn btn-primary btn--block btn--lg" type="submit" style={{ marginTop: "1rem" }}>
            Place order
          </button>
          <p className="summary__note" style={{ textAlign: "center" }}>
            No payment is taken online — you'll pay at pickup or delivery. (Demo checkout.)
          </p>
        </div>
      </div>
    </form>
  );
}
