/* VIZIO CAPITAL — chrome compartilhado (header, mega menu, mobile, rodapé)
   Injetado em todas as páginas para manter consistência (DRY).
   A página define <body data-page="..."> para marcar o item de menu ativo. */
(function () {
  "use strict";
  var WA = "https://wa.me/5531984332711";
  var page = document.body.getAttribute("data-page") || "";

  // Marca desenhada (nascer do sol + wordmark) — funciona sobre fundo claro ou escuro.
  function brand(dark) {
    var rays =
      '<line x1="24" y1="37" x2="24" y2="15"/>' +
      '<line x1="24" y1="37" x2="29.3" y2="17.1"/>' +
      '<line x1="24" y1="37" x2="18.7" y2="17.1"/>' +
      '<line x1="24" y1="37" x2="33.6" y2="20.4"/>' +
      '<line x1="24" y1="37" x2="14.4" y2="20.4"/>' +
      '<line x1="24" y1="37" x2="36.6" y2="24.4"/>' +
      '<line x1="24" y1="37" x2="11.4" y2="24.4"/>' +
      '<line x1="24" y1="37" x2="38.2" y2="28.8"/>' +
      '<line x1="24" y1="37" x2="9.8" y2="28.8"/>' +
      '<line x1="24" y1="37" x2="38.5" y2="33.1"/>' +
      '<line x1="24" y1="37" x2="9.5" y2="33.1"/>';
    var svg =
      '<svg class="brand__mark" viewBox="0 0 48 48" fill="none" aria-hidden="true">' +
        '<defs><linearGradient id="vzg" x1="0" y1="0" x2="1" y2="1">' +
          '<stop offset="0" stop-color="#e7a463"/><stop offset="1" stop-color="#c26a3a"/>' +
        '</linearGradient></defs>' +
        '<g stroke="url(#vzg)" stroke-width="2.3" stroke-linecap="round">' + rays + '</g>' +
        '<line x1="7" y1="38.5" x2="41" y2="38.5" stroke="url(#vzg)" stroke-width="2.3" stroke-linecap="round"/>' +
      '</svg>';
    return '<a class="brand' + (dark ? ' on-dark' : '') + '" href="index.html" aria-label="Vizio Capital — início">' +
      svg + '<span class="brand__wm"><b>Vizio</b><small>Capital</small></span></a>';
  }

  var A = function (id, href, label) {
    return '<a href="' + href + '"' + (page === id ? ' class="active"' : "") +
      (id && ["seguro", "empresas", "conteudos"].indexOf(id) >= 0 ? ' data-mega="mega-' + id + '"' : "") +
      ">" + label + "</a>";
  };

  var HEADER =
  '<div class="grain"></div>' +
  '<header class="site-header" id="siteHeader"><div class="shell nav">' +
    brand(false) +
    '<nav class="nav__links">' +
      A("inicio", "index.html", "Início") +
      A("seguro", "seguro-de-vida.html", "Seguro de Vida") +
      A("empresas", "beneficios-para-empresas.html", "Empresas") +
      A("consorcios", "consorcios.html", "Consórcios") +
      A("conteudos", "conteudos.html", "Conteúdos") +
      A("sobre", "sobre.html", "Sobre") +
      A("atendimento", "atendimento.html", "Atendimento") +
    '</nav>' +
    '<a class="btn btn--gold btn--sm nav__cta" href="' + WA + '" target="_blank" rel="noopener">Conversar com a Vizio <i data-lucide="arrow-up-right"></i></a>' +
    '<button class="nav__burger" id="burger" aria-label="Abrir menu"><i data-lucide="menu"></i></button>' +
  '</div>' +
    // mega: seguro — Proteger
    '<div class="mega" id="mega-seguro" data-mega-panel><div class="mega__panel">' +
      '<div class="mega__col"><h6>Proteger quem você ama</h6>' +
        '<a href="seguro-de-vida.html#familia">Sua família</a><a href="seguro-de-vida.html#renda">Sua renda</a>' +
        '<a href="seguro-de-vida.html#saude">Sua saúde</a><a href="seguro-de-vida.html#patrimonio">Seu patrimônio</a></div>' +
      '<div class="mega__col"><h6>Formas de proteção</h6>' +
        '<a href="seguro-de-vida.html#familia">Seguro Vitalício</a><a href="seguro-de-vida.html#familia">Seguro Temporário</a>' +
        '<a href="seguro-de-vida.html#renda">Proteção de Renda</a><a href="seguro-de-vida.html#saude">Doenças Graves</a></div>' +
      '<div class="mega__col"><h6>Planejar o futuro</h6>' +
        '<a href="seguro-de-vida.html#sucessao">Planejamento Sucessório</a><a href="seguro-de-vida.html#empresarios">Proteção do Empresário</a>' +
        '<a href="seguro-de-vida.html#acidentes">Proteção contra Acidentes</a></div>' +
      '<div class="mega__cta"><b>Não sabe por onde começar?</b><p>Conte o que importa para você. A gente entende antes de indicar.</p>' +
        '<a class="btn btn--gold btn--sm" href="atendimento.html">Conversar com a Vizio <i data-lucide="arrow-right"></i></a></div>' +
    '</div></div>' +
    // mega: empresas — Cuidar
    '<div class="mega" id="mega-empresas" data-mega-panel><div class="mega__panel">' +
      '<div class="mega__col"><h6>Cuidar das pessoas</h6>' +
        '<a href="beneficios-para-empresas.html#saude">Saúde</a><a href="beneficios-para-empresas.html#odonto">Odontológico</a>' +
        '<a href="beneficios-para-empresas.html#vida">Seguro de Vida em Grupo</a><a href="beneficios-para-empresas.html#previdencia">Previdência Corporativa</a></div>' +
      '<div class="mega__col"><h6>Fortalecer o negócio</h6>' +
        '<a href="beneficios-para-empresas.html#socios">Proteção para Sócios</a><a href="beneficios-para-empresas.html#flex">Benefícios Flexíveis</a>' +
        '<a href="beneficios-para-empresas.html#gestao">Gestão de Benefícios</a></div>' +
      '<div class="mega__col"><h6>Ao lado do RH</h6>' +
        '<a href="beneficios-para-empresas.html#rh">Atendimento ao RH</a><a href="beneficios-para-empresas.html#rh">Atendimento ao Colaborador</a>' +
        '<a href="beneficios-para-empresas.html#gestao">Implantação e Movimentações</a></div>' +
      '<div class="mega__cta"><b>Sua empresa é feita de pessoas</b><p>Vamos desenhar juntos os benefícios do seu time.</p>' +
        '<a class="btn btn--gold btn--sm" href="beneficios-para-empresas.html">Conhecer Vizio Empresas <i data-lucide="arrow-right"></i></a></div>' +
    '</div></div>' +
    // mega: conteudos
    '<div class="mega" id="mega-conteudos" data-mega-panel><div class="mega__panel">' +
      '<div class="mega__col"><h6>Pessoas & família</h6>' +
        '<a href="conteudos.html">Seguro de Vida</a><a href="conteudos.html">Proteção de Renda</a>' +
        '<a href="conteudos.html">Saúde e Bem-estar</a><a href="conteudos.html">Patrimônio e Sucessão</a></div>' +
      '<div class="mega__col"><h6>Empresas</h6><a href="conteudos.html">Benefícios para Empresas</a><a href="conteudos.html">RH e Pessoas</a></div>' +
      '<div class="mega__col"><h6>Conquistas</h6><a href="conteudos.html">Consórcios</a><a href="conteudos.html">Vida Financeira</a><a href="conteudos.html">Vizio</a></div>' +
      '<div class="mega__cta"><b>Vizio Conteúdos</b><p>Histórias e ideias para decisões mais tranquilas.</p>' +
        '<a class="btn btn--gold btn--sm" href="conteudos.html">Ver conteúdos <i data-lucide="arrow-right"></i></a></div>' +
    '</div></div>' +
  '</header>' +
  // menu mobile
  '<div class="mobile-menu" id="mobileMenu"><button class="close" id="menuClose" aria-label="Fechar menu"><i data-lucide="x"></i></button>' +
    '<a href="seguro-de-vida.html">Seguro de Vida</a><a href="beneficios-para-empresas.html">Empresas</a>' +
    '<a href="consorcios.html">Consórcios</a><a href="conteudos.html">Conteúdos</a>' +
    '<a href="sobre.html">Sobre a Vizio</a><a href="atendimento.html">Atendimento</a>' +
    '<a class="btn btn--gold" href="' + WA + '" target="_blank" rel="noopener" style="margin-top:16px;justify-content:center">Conversar com a Vizio</a>' +
  '</div>' +
  // barra CTA mobile
  '<div class="mobar"><a class="btn btn--ghost btn--sm" href="atendimento.html">Falar com a Vizio</a>' +
    '<a class="btn btn--gold btn--sm" href="' + WA + '" target="_blank" rel="noopener">WhatsApp</a></div>';

  var FOOTER =
  '<footer class="footer"><div class="shell">' +
    '<div class="footer__brand">' + brand(true) +
      '<p style="margin-top:20px">Proteção e planejamento para acompanhar os diferentes momentos da sua vida, da sua família e da sua empresa.</p>' +
      '<div class="socials"><a href="' + WA + '" target="_blank" rel="noopener" aria-label="WhatsApp"><i data-lucide="message-circle"></i></a>' +
        '<a href="https://www.instagram.com/viziocapital.inc" target="_blank" rel="noopener" aria-label="Instagram"><i data-lucide="instagram"></i></a>' +
        '<a href="https://www.linkedin.com/company/vizio-capital-inc" target="_blank" rel="noopener" aria-label="LinkedIn"><i data-lucide="linkedin"></i></a></div></div>' +
    '<div class="footer__grid">' +
      '<div><h5>Proteger</h5><a class="fl" href="seguro-de-vida.html#familia">Sua família</a><a class="fl" href="seguro-de-vida.html#renda">Sua renda</a><a class="fl" href="seguro-de-vida.html#saude">Sua saúde</a><a class="fl" href="seguro-de-vida.html#patrimonio">Seu patrimônio</a><a class="fl" href="seguro-de-vida.html#sucessao">Planejamento sucessório</a></div>' +
      '<div><h5>Cuidar</h5><a class="fl" href="beneficios-para-empresas.html#saude">Saúde</a><a class="fl" href="beneficios-para-empresas.html#odonto">Odontológico</a><a class="fl" href="beneficios-para-empresas.html#vida">Vida em grupo</a><a class="fl" href="beneficios-para-empresas.html#gestao">Gestão de benefícios</a></div>' +
      '<div><h5>Construir</h5><a class="fl" href="consorcios.html#imoveis">Imóveis</a><a class="fl" href="consorcios.html#veiculos">Veículos</a><a class="fl" href="consorcios.html#empresas">Empresas</a><a class="fl" href="consorcios.html">Simulação</a></div>' +
      '<div><h5>Falar com a gente</h5><a class="fl" href="atendimento.html">Atendimento</a><a class="fl" href="atendimento.html#faq">Perguntas frequentes</a><a class="fl" href="' + WA + '" target="_blank" rel="noopener">WhatsApp</a></div>' +
      '<div><h5>Vizio</h5><a class="fl" href="sobre.html">Sobre a Vizio</a><a class="fl" href="conteudos.html">Conteúdos</a><a class="fl" href="privacidade.html">Privacidade</a><a class="fl" href="termos.html">Termos de uso</a></div>' +
    '</div>' +
    '<div class="footer__base"><span>© 2026 Vizio Capital. Cuide do que faz a vida valer a pena.</span>' +
      '<span class="legal-links"><a href="privacidade.html">Privacidade</a><a href="termos.html">Termos</a></span></div>' +
  '</div></footer>';

  document.body.insertAdjacentHTML("afterbegin", HEADER);
  document.body.insertAdjacentHTML("beforeend", FOOTER);
})();
