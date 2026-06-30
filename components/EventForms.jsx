"use client";
import { useToast } from "@/context/Toast";
import { EVENTS } from "@/lib/content";

export default function EventForms() {
  const { showToast } = useToast();

  const rsvp = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) return form.reportValidity();
    const name = new FormData(form).get("name") || "";
    showToast(`Seat reserved${name ? `, ${name}` : ""}! We'll email your confirmation.`);
    form.reset();
  };

  const quote = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) return form.reportValidity();
    showToast("Request received — the owner will reach out with a custom package.");
    form.reset();
  };

  return (
    <div className="contact-layout" id="rsvp">
      <div className="info-card">
        <h3 className="h2" style={{ fontSize: "1.3rem", marginBottom: "1rem" }}>
          Reserve a tasting seat
        </h3>
        <form onSubmit={rsvp}>
          <div className="field">
            <label htmlFor="rs-event">Tasting</label>
            <select id="rs-event" name="event" required defaultValue="">
              <option value="" disabled>
                Choose a date…
              </option>
              {EVENTS.map((ev) => (
                <option key={ev.title} value={ev.title}>
                  {ev.mon} {ev.day} — {ev.title} ({ev.price})
                </option>
              ))}
            </select>
          </div>
          <div className="field-row">
            <div className="field">
              <label htmlFor="rs-name">Name</label>
              <input id="rs-name" name="name" required placeholder="Jane Doe" />
            </div>
            <div className="field">
              <label htmlFor="rs-guests">Guests</label>
              <input id="rs-guests" name="guests" type="number" min="1" max="8" defaultValue="2" />
            </div>
          </div>
          <div className="field">
            <label htmlFor="rs-email">Email</label>
            <input id="rs-email" name="email" type="email" required placeholder="you@email.com" />
          </div>
          <button className="btn btn-primary btn--block" type="submit">
            Reserve my seat
          </button>
        </form>
      </div>

      <div className="info-card">
        <h3 className="h2" style={{ fontSize: "1.3rem", marginBottom: "0.4rem" }}>
          Weddings &amp; private events
        </h3>
        <p style={{ color: "var(--muted)", marginBottom: "1rem", fontSize: "0.94rem" }}>
          Tell us about your event and we'll build a custom package — sized, priced, and ready on your date.
        </p>
        <form onSubmit={quote}>
          <div className="field-row">
            <div className="field">
              <label htmlFor="pq-name">Name</label>
              <input id="pq-name" name="name" required placeholder="Jane Doe" />
            </div>
            <div className="field">
              <label htmlFor="pq-type">Event type</label>
              <select id="pq-type" name="type" defaultValue="Wedding">
                <option>Wedding</option>
                <option>Birthday / Party</option>
                <option>Corporate</option>
                <option>Other</option>
              </select>
            </div>
          </div>
          <div className="field-row">
            <div className="field">
              <label htmlFor="pq-date">Date</label>
              <input id="pq-date" name="date" type="date" />
            </div>
            <div className="field">
              <label htmlFor="pq-guests">Guests</label>
              <input id="pq-guests" name="guests" type="number" min="10" defaultValue="50" />
            </div>
          </div>
          <div className="field">
            <label htmlFor="pq-email">Email</label>
            <input id="pq-email" name="email" type="email" required placeholder="you@email.com" />
          </div>
          <div className="field">
            <label htmlFor="pq-msg">Anything else?</label>
            <textarea id="pq-msg" name="message" rows="2" placeholder="Budget, preferences, must-haves…" />
          </div>
          <button className="btn btn-dark btn--block" type="submit">
            Request a custom quote
          </button>
        </form>
      </div>
    </div>
  );
}
