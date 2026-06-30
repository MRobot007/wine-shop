/* =========================================================================
   counters.js — animated number count-up for [data-count] elements.
   Triggers once when the stat scrolls into view.
   ========================================================================= */
(function () {
  "use strict";

  var nums = document.querySelectorAll("[data-count]");
  if (!nums.length) return;

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var DURATION = 1600; // ms

  function format(n) {
    return n.toLocaleString("en-US");
  }

  function run(el) {
    var target = parseInt(el.getAttribute("data-count"), 10) || 0;

    if (reduce) {
      el.textContent = format(target);
      return;
    }

    var start = null;

    function step(ts) {
      if (start === null) start = ts;
      var p = Math.min((ts - start) / DURATION, 1);
      // easeOutExpo
      var eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      el.textContent = format(Math.round(target * eased));
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  if (!("IntersectionObserver" in window)) {
    nums.forEach(run);
    return;
  }

  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          run(entry.target);
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.6 }
  );

  nums.forEach(function (el) {
    io.observe(el);
  });
})();
