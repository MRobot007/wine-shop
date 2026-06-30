import { useLayoutEffect, useRef } from "react";
import { anime, prefersReducedMotion, EASE } from "../lib/motion";

/**
 * Reveal a set of child elements with a staggered cascade.
 * Returns a ref for the container; children are matched by `selector`.
 */
export function useStaggerReveal({
  selector = ":scope > *",
  y = 28,
  delay = 0,
  stagger = 90,
  duration = 780,
  threshold = 0.15,
} = {}) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const kids = el.querySelectorAll(selector);
    if (prefersReducedMotion() || !kids.length) return;

    kids.forEach((k) => {
      k.style.opacity = "0";
      k.style.willChange = "opacity, transform";
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          anime({
            targets: kids,
            opacity: [0, 1],
            translateY: [y, 0],
            easing: EASE,
            duration,
            delay: anime.stagger(stagger, { start: delay }),
          });
          io.unobserve(el);
        });
      },
      { threshold }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [selector, y, delay, stagger, duration, threshold]);

  return ref;
}
