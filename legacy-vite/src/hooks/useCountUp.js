import { useLayoutEffect, useRef } from "react";
import { anime, prefersReducedMotion, EASE } from "../lib/motion";

/** Count a number up from 0 to `to` when it scrolls into view. */
export function useCountUp(to, { duration = 1700 } = {}) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const fmt = (n) => Math.round(n).toLocaleString("en-US");

    if (prefersReducedMotion()) {
      el.textContent = fmt(to);
      return;
    }

    el.textContent = "0";
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const obj = { v: 0 };
          anime({
            targets: obj,
            v: to,
            round: 1,
            easing: EASE,
            duration,
            update: () => {
              el.textContent = fmt(obj.v);
            },
          });
          io.unobserve(el);
        });
      },
      { threshold: 0.6 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);

  return ref;
}
