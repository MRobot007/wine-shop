"use client";
import { useSearchParams } from "next/navigation";
import { useToast } from "@/context/Toast";
import { STORE } from "@/lib/content";

export default function ContactForms() {
  const params = useSearchParams();
  const requested = params.get("request") === "1";
  const { showToast } = useToast();

  const request = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) return form.reportValidity();
    const data = new FormData(form);
    const subject = encodeURIComponent("Item Request — " + (data.get("item") || ""));
    const body = encodeURIComponent(
      `Name: ${data.get("name") || ""}\nEmail: ${data.get("email") || ""}\nPhone: ${data.get("phone") || ""}\n` +
        `Item: ${data.get("item") || ""}\nNotes: ${data.get("notes") || ""}`
    );
    window.location.href = `mailto:${STORE.email}?subject=${subject}&body=${body}`;
    showToast("Your request is ready to send — we'll source it for you.");
    form.reset();
  };

  const message = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) return form.reportValidity();
    showToast("Thanks — we'll get back to you shortly.");
    form.reset();
  };

  return (
    <div className="contact-layout">
      <div className="info-card" id="request" style={requested ? { borderColor: "var(--wine)" } : undefined}>
        <h3 className="h2" style={{ fontSize: "1.3rem", marginBottom: "0.3rem" }}>
          Can't find it? Request it.
        </h3>
        <p style={{ color: "var(--muted)", marginBottom: "1rem", fontSize: "0.94rem" }}>
          A bottle from a trip, a hard-to-find label, a specific cigar box — we'll track it down.
        </p>
        <form onSubmit={request}>
          <div className="field-row">
            <div className="field">
              <label htmlFor="rq-name">Name</label>
              <input id="rq-name" name="name" required placeholder="Jane Doe" />
            </div>
            <div className="field">
              <label htmlFor="rq-phone">Phone</label>
              <input id="rq-phone" name="phone" type="tel" placeholder="(410) 555-0123" />
            </div>
          </div>
          <div className="field">
            <label htmlFor="rq-email">Email</label>
            <input id="rq-email" name="email" type="email" required placeholder="you@email.com" />
          </div>
          <div className="field">
            <label htmlFor="rq-item">What are you looking for?</label>
            <input
              id="rq-item"
              name="item"
              required
              autoFocus={requested}
              placeholder="e.g. Pappy Van Winkle 12, Opus One 2019…"
            />
          </div>
          <div className="field">
            <label htmlFor="rq-notes">Notes (quantity, occasion, budget)</label>
            <textarea id="rq-notes" name="notes" rows="2" placeholder="Need 6 for a birthday on the 20th…" />
          </div>
          <button className="btn btn-primary btn--block" type="submit">
            Send request
          </button>
        </form>
      </div>

      <div className="info-card">
        <h3 className="h2" style={{ fontSize: "1.3rem", marginBottom: "0.3rem" }}>
          Send us a message
        </h3>
        <p style={{ color: "var(--muted)", marginBottom: "1rem", fontSize: "0.94rem" }}>
          Questions about an order, pickup, or delivery? We're happy to help.
        </p>
        <form onSubmit={message}>
          <div className="field">
            <label htmlFor="ct-name">Name</label>
            <input id="ct-name" name="name" required placeholder="Jane Doe" />
          </div>
          <div className="field">
            <label htmlFor="ct-email">Email</label>
            <input id="ct-email" name="email" type="email" required placeholder="you@email.com" />
          </div>
          <div className="field">
            <label htmlFor="ct-msg">Message</label>
            <textarea id="ct-msg" name="message" rows="4" required placeholder="How can we help?" />
          </div>
          <button className="btn btn-dark btn--block" type="submit">
            Send message
          </button>
        </form>
      </div>
    </div>
  );
}
