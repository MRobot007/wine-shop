/* =========================================================================
   parallax.js — subtle scroll parallax for the hero gradient orbs.
   Uses a single rAF-throttled scroll listener; disabled for reduced motion.
   ========================================================================= */
(function () {
  "use strict";

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) return;

  var items = document.querySelectorAll("[data-parallax]");
  if (!items.length) return;

  var layers = [];
  items.forEach(function (el) {
    layers.push({ el: el, speed: parseFloat(el.getAttribute("data-parallax")) || 0.1 });
  });

  var ticking = false;

  function update() {
    var y = window.scrollY;
    // Only animate while the hero is roughly in view (perf).
    if (y < window.innerHeight * 1.2) {
      layers.forEach(function (layer) {
        layer.el.style.transform = "translate3d(0," + (y * layer.speed).toFixed(1) + "px,0)";
      });
    }
    ticking = false;
  }

  window.addEventListener(
    "scroll",
    function () {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    },
    { passive: true }
  );
})();
