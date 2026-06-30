"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/Cart";
import Icon from "@/components/Icon";
import { NAV_LINKS, STORE } from "@/lib/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { count } = useCart();

  // A link is active only when it's a plain path (no ?cat= filter) that matches
  // the current route — otherwise every /shop/?cat=… link lights up on /shop/.
  const norm = (p) => (p && p.length > 1 ? p.replace(/\/+$/, "") : p);
  const isActive = (href) => !href.includes("?") && norm(pathname) === norm(href);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className={`nav${open ? " is-open" : ""}`}>
      <div className="nav__inner">
        <Link className="brand" href="/" aria-label="Best Wine & Spirits home">
          <span className="brand__mark" aria-hidden="true">
            <img src="/assets/logo.png" alt="" />
          </span>
          <span>
            Best Wine &amp; Spirits
            <small>{STORE.city}</small>
          </span>
        </Link>

        <nav className="nav__links" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className={isActive(l.href) ? "is-active" : ""}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="nav__actions">
          <Link className="icon-btn" href="/cart/" aria-label={`Cart (${count})`}>
            <Icon name="cart" />
            {count > 0 && <span className="count">{count}</span>}
          </Link>
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
