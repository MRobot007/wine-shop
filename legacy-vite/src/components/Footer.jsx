import Button from "./ui/Button";
import { useToast } from "./Toast";
import { STORE } from "../data/content";

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
    showToast("You're on the list — cheers! 🍷");
    form.reset();
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <a className="brand" href="#top">
              <span className="brand__mark" aria-hidden="true">
                B
              </span>
              <span>
                Best Wine &amp; Spirits
                <small>{STORE.city}</small>
              </span>
            </a>
            <p>
              The Eastern Shore's destination for fine wine, spirits, craft beer, and premium
              cigars.
            </p>
            <div className="socials">
              <a href="#" aria-label="Facebook">
                f
              </a>
              <a href="#" aria-label="Instagram">
                ◎
              </a>
              <a href="#" aria-label="Yelp">
                y
              </a>
            </div>
          </div>

          <nav className="footer__col" aria-label="Shop">
            <h5>Shop</h5>
            <a href="#collection">Wine</a>
            <a href="#collection">Spirits</a>
            <a href="#collection">Craft Beer</a>
            <a href="#humidor">Cigars</a>
          </nav>

          <nav className="footer__col" aria-label="Services">
            <h5>Services</h5>
            <a href="#events">Event Planning</a>
            <a href="#request">Item Request</a>
            <a href="#visit">Visit &amp; Hours</a>
            <a href={STORE.phoneHref}>Call the store</a>
          </nav>

          <div className="footer__news">
            <h5>Stay in the know</h5>
            <p>New arrivals, tastings, and member specials — straight to your inbox.</p>
            <form onSubmit={onSubmit}>
              <input type="email" name="email" placeholder="you@email.com" aria-label="Email address" required />
              <Button as="button" type="submit" variant="primary">
                Join
              </Button>
            </form>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {year} Best Wine &amp; Spirits. All rights reserved.</span>
          <span>Please drink &amp; enjoy responsibly. Must be 21+.</span>
        </div>
      </div>
    </footer>
  );
}
