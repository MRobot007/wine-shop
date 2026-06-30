"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Icon from "@/components/Icon";
import { money } from "@/lib/format";

export default function SuccessPage() {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    try {
      const r = sessionStorage.getItem("bws_last_order");
      if (r) setOrder(JSON.parse(r));
    } catch {
      /* ignore */
    }
  }, []);

  const delivery = order?.fulfillment === "delivery";

  return (
    <section className="section" style={{ paddingTop: "calc(var(--nav-h) + 3rem)" }}>
      <div className="container container--narrow" style={{ textAlign: "center" }}>
        <div
          style={{
            width: 68,
            height: 68,
            margin: "0 auto 0.5rem",
            display: "grid",
            placeItems: "center",
            borderRadius: "50%",
            color: "var(--green)",
            boxShadow: "var(--nm-inset)",
          }}
        >
          <Icon name="check" size={32} strokeWidth={2.4} />
        </div>
        <h1 className="h2" style={{ marginTop: "0.5rem" }}>
          Order placed — thank you!
        </h1>

        {order ? (
          <>
            <p className="lead" style={{ margin: "1rem auto", maxWidth: "54ch" }}>
              Hi {order.name || "there"}, your order <strong>{order.id}</strong> is confirmed. A receipt is on its way
              to {order.email || "your inbox"}.
            </p>
            <div className="info-card" style={{ maxWidth: 480, margin: "1.5rem auto", textAlign: "left" }}>
              <div className="summary__row">
                <span>Order number</span>
                <span>{order.id}</span>
              </div>
              <div className="summary__row">
                <span>Items</span>
                <span>{order.items}</span>
              </div>
              <div className="summary__row">
                <span>{delivery ? "Local delivery" : "In-store pickup"}</span>
                <span>{delivery ? "Today / tomorrow" : "Ready in ~30 min"}</span>
              </div>
              <div className="summary__row total">
                <span>Total due {delivery ? "on delivery" : "at pickup"}</span>
                <span>{money(order.total)}</span>
              </div>
            </div>
            <p className="summary__note" style={{ maxWidth: "50ch", margin: "0 auto 1.6rem" }}>
              Bring a valid ID (21+). No payment was taken online — you'll pay {delivery ? "your driver" : "at the counter"}.
            </p>
          </>
        ) : (
          <p className="lead" style={{ margin: "1rem auto 1.6rem", maxWidth: "54ch" }}>
            Your order is confirmed. Check your email for the receipt and pickup details.
          </p>
        )}

        <div style={{ display: "flex", gap: "0.7rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link className="btn btn-primary btn--lg" href="/shop/">
            Keep shopping
          </Link>
          <Link className="btn btn-outline btn--lg" href="/contact/">
            Store info &amp; directions
          </Link>
        </div>
      </div>
    </section>
  );
}
