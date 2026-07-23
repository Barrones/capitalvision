/* VIZIO CAPITAL — interações do vibe design */
(function () {
  "use strict";

  // ícones lucide
  if (window.lucide) window.lucide.createIcons();

  // header ganha fundo ao rolar
  var header = document.querySelector(".site-header");
  var onScroll = function () {
    if (window.scrollY > 24) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // menu mobile
  var menu = document.getElementById("mobileMenu");
  var openBtn = document.getElementById("burger");
  var closeBtn = document.getElementById("menuClose");
  if (openBtn) openBtn.addEventListener("click", function () { menu.classList.add("open"); });
  if (closeBtn) closeBtn.addEventListener("click", function () { menu.classList.remove("open"); });
  if (menu) menu.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () { menu.classList.remove("open"); });
  });

  // scroll reveal
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    });
  }, { threshold: 0.14, rootMargin: "0px 0px -40px 0px" });
  document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });

  // contadores animados
  var easeOut = function (t) { return 1 - Math.pow(1 - t, 3); };
  var animateCount = function (el) {
    var target = parseFloat(el.dataset.count);
    var decimals = (el.dataset.count.split(".")[1] || "").length;
    var dur = 1600, start = null;
    var step = function (ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var val = target * easeOut(p);
      el.textContent = decimals ? val.toFixed(decimals) : Math.round(val).toLocaleString("pt-BR");
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  var cio = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { animateCount(e.target); cio.unobserve(e.target); }
    });
  }, { threshold: 0.6 });
  document.querySelectorAll("[data-count]").forEach(function (el) { cio.observe(el); });

  // nav ativo conforme seção visível
  var links = Array.prototype.slice.call(document.querySelectorAll('.nav__links a[href^="#"]'));
  var map = {};
  links.forEach(function (l) { var id = l.getAttribute("href").slice(1); if (id) map[id] = l; });
  var sio = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      var l = map[e.target.id];
      if (l && e.isIntersecting) {
        links.forEach(function (x) { x.classList.remove("active"); });
        l.classList.add("active");
      }
    });
  }, { threshold: 0.4 });
  Object.keys(map).forEach(function (id) {
    var s = document.getElementById(id); if (s) sio.observe(s);
  });
})();
