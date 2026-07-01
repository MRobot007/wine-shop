"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Progressive scroll-reveal. Uses pure-CSS scroll-driven animations
// (animation-timeline: view()) so there is NO layout thrash and NO flash of
// hidden content on browsers that don't support it — the class simply adds the
// animation; unsupported browsers show everything normally.
const SELECTORS = [
  ".section-head",
  ".values > *",
  ".bento > *",
  ".quotes > *",
  ".tastings > *",
  ".reviews > *",
  ".info-card",
  ".map",
  ".newsletter",
  ".pdp__media",
  ".pdp__rail",
  ".specs",
  ".pairing",
].join(",");

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const supported =
      typeof CSS !== "undefined" && CSS.supports && CSS.supports("animation-timeline: view()");
    if (!supported) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const els = Array.from(document.querySelectorAll(SELECTORS));
    els.forEach((el) => el.classList.add("reveal-fx"));
    return () => els.forEach((el) => el.classList.remove("reveal-fx"));
  }, [pathname]);

  return null;
}
