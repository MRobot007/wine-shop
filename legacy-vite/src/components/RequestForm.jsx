import Reveal from "./ui/Reveal";
import Button from "./ui/Button";
import { useToast } from "./Toast";
import { STORE } from "../data/content";

export default function RequestForm() {
  const { showToast } = useToast();

  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const data = new FormData(form);
    const name = (data.get("name") || "").toString().trim();
    const subject = encodeURIComponent("Item Request — " + (data.get("item") || ""));
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${data.get("phone") || ""}\nEmail: ${data.get("email") || ""}\n` +
        `Item: ${data.get("item") || ""}\nNotes: ${data.get("notes") || ""}`
    );
    window.location.href = `mailto:${STORE.email}?subject=${subject}&body=${body}`;
    showToast(`Thanks${name ? `, ${name}` : ""}! Your request is ready to send.`);
    form.reset();
  };

  return (
    <section className="section section--alt" id="request" aria-label="Item request">
      <div className="container request">
        <Reveal x={-30} y={0} className="request__aside">
          <span className="eyebrow">Item request</span>
          <h2 className="h2" style={{ margin: "0.7rem 0 0.9rem" }}>
            Can't find it? We'll track it down.
          </h2>
          <p className="lead">
            A bottle from a trip, a hard-to-find label, a specific cigar box — tell us what you're
            after and our team will source it for you.
          </p>
          <ul className="request__points">
            <li>
              <span className="n">1</span> Tell us the wine, spirit, beer, or cigar you want.
            </li>
            <li>
              <span className="n">2</span> We check distributors and our network.
            </li>
            <li>
              <span className="n">3</span> We call or email you the moment it's in.
            </li>
          </ul>
        </Reveal>

        <Reveal as="form" x={30} y={0} className="request__form glass" onSubmit={onSubmit} noValidate>
          <div className="field-row">
            <div className="field">
              <label htmlFor="rf-name">Your name</label>
              <input id="rf-name" name="name" type="text" placeholder="Jane Doe" required autoComplete="name" />
            </div>
            <div className="field">
              <label htmlFor="rf-phone">Phone</label>
              <input id="rf-phone" name="phone" type="tel" placeholder="(410) 555-0123" autoComplete="tel" />
            </div>
          </div>
          <div className="field">
            <label htmlFor="rf-email">Email</label>
            <input id="rf-email" name="email" type="email" placeholder="you@email.com" required autoComplete="email" />
          </div>
          <div className="field">
            <label htmlFor="rf-item">What are you looking for?</label>
            <input id="rf-item" name="item" type="text" placeholder="e.g. Caymus Cabernet 2021, Cohiba Robusto…" required />
          </div>
          <div className="field" style={{ marginBottom: "1.2rem" }}>
            <label htmlFor="rf-notes">Notes (quantity, occasion, budget)</label>
            <textarea id="rf-notes" name="notes" rows="3" placeholder="Need 12 bottles for a wedding on Aug 16…" />
          </div>
          <Button as="button" type="submit" variant="primary" arrow className="btn--block">
            Send request
          </Button>
          <p className="age-note" style={{ marginTop: "0.85rem", textAlign: "center" }}>
            Must be 21+. We'll only use your details to fulfill this request.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
