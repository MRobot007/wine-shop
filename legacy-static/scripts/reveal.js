/* =========================================================================
   reveal.js — scroll-triggered reveals via IntersectionObserver
   Adds .is-visible to [data-reveal] elements as they enter the viewport.
   ========================================================================= */
(function () {
  "use strict";

  var els = document.querySelectorAll("[data-reveal]");
  if (!els.length) return;

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // No IO support or reduced motion → show everything immediately.
  if (reduce || !("IntersectionObserver" in window)) {
    els.forEach(function (el) {
      el.classList.add("is-visible");
    });
    return;
  }

  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
  );

  els.forEach(function (el) {
    io.observe(el);
  });
})();
