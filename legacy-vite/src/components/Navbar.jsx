import { useEffect, useState } from "react";
import Button from "./ui/Button";
import { useScrollSpy } from "../hooks/useScrollSpy";
import { useWishlist } from "../context/Wishlist";
import { NAV_LINKS, STORE } from "../data/content";

const IDS = NAV_LINKS.map((l) => l.id);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useScrollSpy(IDS);
  const { count, openDrawer } = useWishlist();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`nav${scrolled ? " is-scrolled" : ""}${open ? " is-open" : ""}`}>
      <div className="nav__inner">
        <a className="brand" href="#top" onClick={close} aria-label="Best Wine & Spirits home">
          <span className="brand__mark" aria-hidden="true">
            B
          </span>
          <span>
            Best Wine &amp; Spirits
            <small>{STORE.city}</small>
          </span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={active === l.id ? "is-active" : ""}
              onClick={close}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <button className="nav__wish" onClick={openDrawer} aria-label={`Your list (${count})`}>
            ♥
            {count > 0 && <span className="count">{count}</span>}
          </button>
          <Button as="a" variant="primary" href="#request" arrow className="nav__cta">
            Request an Item
          </Button>
          <button
            className="nav__toggle"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
