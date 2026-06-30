/* =========================================================================
   main.js — navbar state, mobile menu, age gate, forms, toast, glass tilt
   ========================================================================= */
(function () {
  "use strict";

  var doc = document;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Current year ---------- */
  var yearEl = doc.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ---------- Navbar: shrink/blur on scroll ---------- */
  var nav = doc.getElementById("nav");
  function onScroll() {
    if (!nav) return;
    nav.classList.toggle("is-scrolled", window.scrollY > 24);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Mobile menu toggle ---------- */
  var toggle = doc.getElementById("navToggle");
  var links = doc.getElementById("navLinks");
  function closeMenu() {
    if (!nav) return;
    nav.classList.remove("is-open");
    if (toggle) toggle.setAttribute("aria-expanded", "false");
  }
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }
  if (links) {
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") closeMenu();
    });
  }
  // Close menu on Escape
  doc.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeMenu();
  });

  /* ---------- Smooth scroll with nav offset for in-page anchors ---------- */
  var NAV_OFFSET = 84;
  doc.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener("click", function (e) {
      var id = a.getAttribute("href");
      if (id === "#" || id.length < 2) return;
      var target = doc.querySelector(id);
      if (!target) return;
      e.preventDefault();
      var top = target.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
      window.scrollTo({ top: top, behavior: reduce ? "auto" : "smooth" });
    });
  });

  /* ---------- Toast ---------- */
  var toast = doc.getElementById("toast");
  var toastMsg = doc.getElementById("toastMsg");
  var toastTimer = null;
  function showToast(msg) {
    if (!toast) return;
    if (toastMsg && msg) toastMsg.textContent = msg;
    toast.classList.add("is-shown");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toast.classList.remove("is-shown");
    }, 4200);
  }

  /* ---------- Request form ---------- */
  var requestForm = doc.getElementById("requestForm");
  if (requestForm) {
    requestForm.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!requestForm.checkValidity()) {
        requestForm.reportValidity();
        return;
      }
      var data = new FormData(requestForm);
      var name = (data.get("name") || "").toString().trim();
      // Build a mailto so it works without a backend.
      var subject = encodeURIComponent("Item Request — " + (data.get("item") || ""));
      var body = encodeURIComponent(
        "Name: " + name + "\n" +
        "Phone: " + (data.get("phone") || "") + "\n" +
        "Email: " + (data.get("email") || "") + "\n" +
        "Item: " + (data.get("item") || "") + "\n" +
        "Notes: " + (data.get("notes") || "")
      );
      // Open the user's mail client pre-filled to the store.
      window.location.href =
        "mailto:BestWineMD@gmail.com?subject=" + subject + "&body=" + body;

      showToast("Thanks" + (name ? ", " + name : "") + "! Your request is ready to send.");
      requestForm.reset();
    });
  }

  /* ---------- Newsletter form ---------- */
  var newsletter = doc.getElementById("newsletterForm");
  if (newsletter) {
    newsletter.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!newsletter.checkValidity()) {
        newsletter.reportValidity();
        return;
      }
      showToast("You're on the list — cheers! 🍷");
      newsletter.reset();
    });
  }

  /* ---------- Age gate (once per browser session) ---------- */
  var gate = doc.getElementById("ageGate");
  var STORAGE_KEY = "bws_age_ok";
  function verified() {
    try {
      return sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch (err) {
      return false;
    }
  }
  if (gate && !verified()) {
    gate.hidden = false;
    doc.body.style.overflow = "hidden";
    var yes = doc.getElementById("ageYes");
    if (yes) {
      yes.addEventListener("click", function () {
        try {
          sessionStorage.setItem(STORAGE_KEY, "1");
        } catch (err) {}
        gate.classList.add("is-hidden");
        doc.body.style.overflow = "";
        setTimeout(function () {
          gate.hidden = true;
        }, 600);
      });
    }
  }

  /* ---------- Pointer-reactive glass tilt (desktop, fine pointer only) ---------- */
  var finePointer = window.matchMedia("(pointer: fine)").matches;
  if (finePointer && !reduce) {
    var tilters = doc.querySelectorAll(".glass-interactive");
    tilters.forEach(function (card) {
      card.addEventListener("mousemove", function (e) {
        var r = card.getBoundingClientRect();
        var px = (e.clientX - r.left) / r.width - 0.5;
        var py = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform =
          "translateY(-8px) perspective(900px) rotateX(" +
          (-py * 4).toFixed(2) +
          "deg) rotateY(" +
          (px * 5).toFixed(2) +
          "deg)";
      });
      card.addEventListener("mouseleave", function () {
        card.style.transform = "";
      });
    });
  }
})();
