"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

// Showcase carousel — minimal, image-forward. Local imagery for reliability.
// To swap in different photos, just replace /public/assets/slide-1..4.jpg.
const SLIDES = [
  {
    img: "/assets/slide-1.jpg",
    type: "Estate Grown",
    name: "A wine with its own style",
    cta: "Shop reds",
    href: "/shop/?cat=Wine",
    pos: "50% 50%",
  },
  {
    img: "/assets/slide-2.jpg",
    type: "Harvest",
    name: "From hill to glass",
    cta: "Explore wines",
    href: "/shop/?cat=Wine",
    pos: "50% 42%",
  },
  {
    img: "/assets/slide-3.jpg",
    type: "After Hours",
    name: "The evening pour",
    cta: "Shop reds",
    href: "/shop/?cat=Wine",
    pos: "34% 50%",
  },
  {
    img: "/assets/slide-4.jpg",
    type: "Uncorked",
    name: "Made for sharing",
    cta: "Shop wine",
    href: "/shop/",
    pos: "40% 50%",
  },
];

const AUTOPLAY_MS = 2000;

export default function WineSlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = SLIDES.length;
  const touchX = useRef(null);

  const go = useCallback((next) => setActive((c) => (((next) % n) + n) % n), [n]);

  useEffect(() => {
    if (paused) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setActive((c) => (c + 1) % n), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, n]);

  const onTouchStart = (e) => {
    touchX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 44) go(active + (dx < 0 ? 1 : -1));
    touchX.current = null;
  };

  return (
    <div
      className="wslider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div
        className="wslider__frame"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        aria-roledescription="carousel"
      >
        {SLIDES.map((s, idx) => (
          <article className={"wslide" + (idx === active ? " is-active" : "")} key={s.img} aria-hidden={idx !== active}>
            <img className="wslide__img" src={s.img} alt="" loading="eager" decoding="async" style={{ objectPosition: s.pos }} />
            <div className="wslide__body">
              <span className="wslide__type">{s.type}</span>
              <h3 className="wslide__name">{s.name}</h3>
              <Link className="wslide__cta" href={s.href} tabIndex={idx === active ? 0 : -1}>
                {s.cta}
              </Link>
            </div>
          </article>
        ))}

        <button
          type="button"
          className="wslider__arrow wslider__arrow--prev"
          aria-label="Previous slide"
          onClick={() => go(active - 1)}
        >
          <span aria-hidden="true">‹</span>
        </button>
        <button
          type="button"
          className="wslider__arrow wslider__arrow--next"
          aria-label="Next slide"
          onClick={() => go(active + 1)}
        >
          <span aria-hidden="true">›</span>
        </button>
      </div>

      <div className="wslider__dots" role="tablist" aria-label="Choose a slide">
        {SLIDES.map((s, idx) => (
          <button
            type="button"
            key={s.img}
            className={"wslider__dot" + (idx === active ? " is-active" : "")}
            role="tab"
            aria-selected={idx === active}
            aria-label={s.name}
            onClick={() => setActive(idx)}
          />
        ))}
      </div>
    </div>
  );
}
