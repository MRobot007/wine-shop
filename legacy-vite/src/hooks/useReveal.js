import { useLayoutEffect, useRef } from "react";
import { anime, prefersReducedMotion, EASE } from "../lib/motion";

/**
 * Reveal a single element on scroll-in with anime.js.
 * Initial hidden state is set in a layout effect so there's no flash,
 * and so content stays visible if JS never runs.
 */
export function useReveal({
  y = 28,
  x = 0,
  scale = 0,
  delay = 0,
  duration = 850,
  threshold = 0.15,
  once = true,
} = {}) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    el.style.opacity = "0";
    el.style.willChange = "opacity, transform";

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const props = { targets: el, opacity: [0, 1], easing: EASE, duration, delay };
          if (y) props.translateY = [y, 0];
          if (x) props.translateX = [x, 0];
          if (scale) props.scale = [scale, 1];
          anime(props);
          if (once) io.unobserve(el);
        });
      },
      { threshold, rootMargin: "0px 0px -8% 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [y, x, scale, delay, duration, threshold, once]);

  return ref;
}
