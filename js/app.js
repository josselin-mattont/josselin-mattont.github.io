/* ===========================================================================
   MOTEUR DU SITE — Josselin Mattont (version optimisée référencement)
   Le contenu est écrit directement dans index.html (lisible par Google).
   Ce fichier ne gère QUE deux choses : le menu mobile et l'animation des
   chiffres. Vous n'avez pas besoin de le modifier.
   =========================================================================== */
(function () {
  "use strict";

  /* --- Menu mobile (bouton « burger ») ---------------------------------- */
  var burger = document.getElementById("navBurger");
  var links = document.getElementById("navLinks");
  if (burger && links) {
    burger.addEventListener("click", function () { links.classList.toggle("open"); });
    Array.prototype.forEach.call(links.querySelectorAll("a"), function (a) {
      a.addEventListener("click", function () { links.classList.remove("open"); });
    });
  }

  /* --- Chiffres animés (rejoués à chaque apparition au scroll) ----------- */
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  function fmt(v, pad) { var s = String(Math.round(v)); return pad ? s.padStart(pad, "0") : s; }
  function animate(node) {
    if (node.dataset.running) return;
    node.dataset.running = "1";
    var target = parseInt(node.dataset.count, 10);
    var pad = node.dataset.pad ? parseInt(node.dataset.pad, 10) : 0;
    if (reduce) { node.textContent = fmt(target, pad); node.dataset.running = ""; return; }
    var dur = 1400, t0 = performance.now();
    function tick(now) {
      var p = Math.min(1, (now - t0) / dur);
      var eased = 1 - Math.pow(1 - p, 3);
      node.textContent = fmt(target * eased, pad);
      if (p < 1) requestAnimationFrame(tick);
      else { node.textContent = fmt(target, pad); node.dataset.running = ""; }
    }
    node.textContent = fmt(0, pad);
    requestAnimationFrame(tick);
  }
  var nums = Array.prototype.slice.call(document.querySelectorAll(".stat-num"));
  if (nums.length) {
    if (!("IntersectionObserver" in window)) { nums.forEach(animate); }
    else {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) animate(e.target);
          else if (!e.target.dataset.running) {
            var pad = e.target.dataset.pad ? parseInt(e.target.dataset.pad, 10) : 0;
            e.target.textContent = fmt(0, pad);
          }
        });
      }, { threshold: 0.5 });
      nums.forEach(function (n) { io.observe(n); });
    }
    // À l'impression : fige les valeurs finales
    window.addEventListener("beforeprint", function () {
      nums.forEach(function (n) {
        var pad = n.dataset.pad ? parseInt(n.dataset.pad, 10) : 0;
        n.textContent = fmt(parseInt(n.dataset.count, 10), pad);
      });
    });
  }

  /* --- Logos d'établissement : repli si une image manque ----------------- */
  Array.prototype.forEach.call(document.querySelectorAll(".estab img"), function (img) {
    img.addEventListener("error", function () {
      var fb = img.nextElementSibling;
      img.style.display = "none";
      if (fb) fb.style.display = "flex";
    });
  });
})();
