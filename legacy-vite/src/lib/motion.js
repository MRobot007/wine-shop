import anime from "animejs";

// Shared anime instance + helpers so every component animates consistently.
export { anime };

export const EASE = "cubicBezier(0.16, 1, 0.3, 1)";

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const isFinePointer = () =>
  typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches;
