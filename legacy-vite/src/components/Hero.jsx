import { useLayoutEffect, useRef } from "react";
import Button from "./ui/Button";
import { anime, prefersReducedMotion, EASE } from "../lib/motion";
import { HERO_TRUST } from "../data/content";

const HERO_IMG = "/assets/hero-bottle.webp";

const HIDE = [".hero__eyebrow", ".hero h1", ".hero__sub", ".hero__cta", ".hero__awards", ".hero__visual"];

export default function Hero() {
  const root = useRef(null);

  useLayoutEffect(() => {
    const el = root.current;
    if (!el || prefersReducedMotion()) return;
    const q = (s) => el.querySelectorAll(s);
    HIDE.forEach((s) => q(s).forEach((n) => (n.style.opacity = "0")));

    anime
      .timeline({ easing: EASE, duration: 760 })
      .add({ targets: q(".hero__eyebrow"), opacity: [0, 1], translateY: [14, 0] })
      .add({ targets: q(".hero h1"), opacity: [0, 1], translateY: [20, 0] }, "-=540")
      .add({ targets: q(".hero__sub"), opacity: [0, 1], translateY: [16, 0] }, "-=540")
      .add({ targets: q(".hero__cta"), opacity: [0, 1], translateY: [16, 0] }, "-=540")
      .add({ targets: q(".hero__awards"), opacity: [0, 1], translateY: [16, 0] }, "-=520")
      .add(
        { targets: q(".hero__visual"), opacity: [0, 1], translateY: [26, 0], scale: [0.96, 1], duration: 1000 },
        "-=940"
      );
  }, []);

  return (
    <section className="hero" ref={root} aria-label="Best Wine & Spirits">
      <div className="hero__glow" aria-hidden="true" />

      <div className="container hero__grid">
        <div className="hero__content">
          <span className="eyebrow hero__eyebrow">Since 1994 · Cambridge, Maryland</span>
          <h1>
            A grand cellar for
            <span className="script">wine, spirits &amp; cigars</span>
          </h1>
          <p className="hero__sub">
            Over 1,000 hand-picked wines, a walk-in cedar humidor, and local craft beer — curated
            by people who actually taste what they sell, here on the Eastern Shore.
          </p>
          <div className="hero__cta">
            <Button as="a" variant="primary" href="#shop" arrow>
              Browse the shop
            </Button>
            <Button as="a" variant="glass" href="#collections">
              View collections
            </Button>
          </div>
          <div className="hero__awards">
            {HERO_TRUST.map((t) => (
              <div className="hero__award" key={t.label}>
                <b>{t.value}</b>
                <span>{t.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero__visual">
          <span className="hero__halo" aria-hidden="true" />
          <span className="hero__ring" aria-hidden="true" />
          <img className="hero__bottle" src={HERO_IMG} alt="Featured reserve red wine bottle" />
          <span className="hero__reserve">Grande Reserve</span>
          <div className="hero__pick">
            <div>
              <span className="label">Staff pick</span>
              <strong>Caymus Cabernet 2021</strong>
            </div>
            <span className="rating" aria-label="5 out of 5">
              ★★★★★
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
