"use client";
import Link from "next/link";
import { useToast } from "@/context/Toast";
import { STORE } from "@/lib/content";

export default function Footer() {
  const { showToast } = useToast();
  const year = new Date().getFullYear();

  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    showToast("You're on the list — cheers.");
    form.reset();
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Link className="brand" href="/">
              <span className="brand__mark" aria-hidden="true">
                <img src="/assets/logo.png" alt="" />
              </span>
              <span>
                Best Wine &amp; Spirits
                <small>{STORE.city}</small>
              </span>
            </Link>
            <p>The Eastern Shore's destination for fine wine, spirits, craft beer, and premium cigars — online and in-store.</p>
          </div>

          <nav className="footer__col" aria-label="Shop">
            <h5>Shop</h5>
            <Link href="/shop/?cat=Wine">Wine</Link>
            <Link href="/shop/?cat=Spirits">Spirits</Link>
            <Link href="/shop/?cat=Beer">Craft Beer</Link>
            <Link href="/shop/?cat=Cigars">Cigars</Link>
          </nav>

          <nav className="footer__col" aria-label="Help">
            <h5>Help</h5>
            <Link href="/contact/">Pickup &amp; Delivery</Link>
            <Link href="/contact/?request=1">Item Request</Link>
            <Link href="/events/">Events &amp; Tastings</Link>
            <Link href="/cart/">Your Cart</Link>
          </nav>

          <div className="footer__news">
            <h5 className="footer__col" style={{ marginBottom: "1rem" }}>
              Stay in the know
            </h5>
            <p>New arrivals, tastings, and member specials.</p>
            <form onSubmit={onSubmit}>
              <input type="email" name="email" placeholder="you@email.com" aria-label="Email" required />
              <button className="btn btn-primary btn--sm" type="submit">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {year} Best Wine &amp; Spirits · {STORE.address}</span>
          <span>Please drink responsibly. Must be 21+. ID required at pickup &amp; delivery.</span>
        </div>
      </div>
    </footer>
  );
}
