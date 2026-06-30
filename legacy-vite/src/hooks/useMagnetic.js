import { useEffect, useRef } from "react";
import { anime, prefersReducedMotion, isFinePointer } from "../lib/motion";

/** Magnetic hover: the element eases toward the cursor, springs back on leave. */
export function useMagnetic({ enabled = true, strength = 0.3 } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !enabled || prefersReducedMotion() || !isFinePointer()) return;

    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const mx = e.clientX - (r.left + r.width / 2);
      const my = e.clientY - (r.top + r.height / 2);
      anime({
        targets: el,
        translateX: mx * strength,
        translateY: my * strength,
        duration: 400,
        easing: "cubicBezier(0.16, 1, 0.3, 1)",
      });
    };
    const onLeave = () => {
      anime({
        targets: el,
        translateX: 0,
        translateY: 0,
        duration: 650,
        easing: "easeOutElastic(1, 0.55)",
      });
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [enabled, strength]);

  return ref;
}
