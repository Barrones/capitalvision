/* VIZIO CAPITAL — interações do vibe design */
(function () {
  "use strict";

  // modo screenshot (só para captura/QA): fixa a altura do hero
  if (/shot/.test(location.search)) document.documentElement.classList.add("shot");

  // ícones lucide
  if (window.lucide) window.lucide.createIcons();

  // header ganha fundo ao rolar + parallax do vídeo do hero
  var header = document.querySelector(".site-header");
  var heroVideo = document.getElementById("heroVideo");
  var ticking = false;
  var render = function () {
    var y = window.scrollY || 0;
    if (header) header.classList.toggle("scrolled", y > 24);
    if (heroVideo && y < window.innerHeight * 1.2) {
      heroVideo.style.transform = "translate3d(0," + (y * 0.18).toFixed(1) + "px,0)";
    }
    ticking = false;
  };
  var onScroll = function () {
    if (!ticking) { ticking = true; requestAnimationFrame(render); }
  };
  render();
  window.addEventListener("scroll", onScroll, { passive: true });

  // mega menu (desktop)
  var megaLinks = Array.prototype.slice.call(document.querySelectorAll("[data-mega]"));
  var megaPanels = Array.prototype.slice.call(document.querySelectorAll("[data-mega-panel]"));
  var openMega = null, megaTimer = null;
  var closeAllMega = function () { megaPanels.forEach(function (p) { p.classList.remove("open"); }); openMega = null; };
  var scheduleClose = function () { clearTimeout(megaTimer); megaTimer = setTimeout(closeAllMega, 140); };
  var cancelClose = function () { clearTimeout(megaTimer); };
  megaLinks.forEach(function (link) {
    var panel = document.getElementById(link.dataset.mega);
    if (!panel) return;
    link.addEventListener("mouseenter", function () { cancelClose(); closeAllMega(); panel.classList.add("open"); openMega = panel; });
    link.addEventListener("mouseleave", scheduleClose);
    panel.addEventListener("mouseenter", cancelClose);
    panel.addEventListener("mouseleave", scheduleClose);
  });
  window.addEventListener("scroll", function () { if (openMega) closeAllMega(); }, { passive: true });

  // menu mobile
  var menu = document.getElementById("mobileMenu");
  var openBtn = document.getElementById("burger");
  var closeBtn = document.getElementById("menuClose");
  if (openBtn) openBtn.addEventListener("click", function () { menu.classList.add("open"); });
  if (closeBtn) closeBtn.addEventListener("click", function () { menu.classList.remove("open"); });
  if (menu) menu.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () { menu.classList.remove("open"); });
  });

  // scroll reveal (com fallback: revela tudo se não houver suporte ou ?noanim)
  var reveals = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  var revealAll = function () { reveals.forEach(function (el) { el.classList.add("in"); }); };
  if (!("IntersectionObserver" in window) || /noanim/.test(location.search) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    revealAll();
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    reveals.forEach(function (el) { io.observe(el); });
    // segurança: se algo ficar para trás, revela após carregar
    window.addEventListener("load", function () {
      setTimeout(function () {
        reveals.forEach(function (el) {
          var r = el.getBoundingClientRect();
          if (r.top < window.innerHeight) el.classList.add("in");
        });
      }, 400);
    });
  }

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
