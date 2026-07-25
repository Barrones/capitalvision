/* VIZIO CAPITAL — chrome compartilhado (header, mega menu, mobile, rodapé)
   Injetado em todas as páginas para manter consistência (DRY).
   A página define <body data-page="..."> para marcar o item de menu ativo. */
(function () {
  "use strict";
  var WA = "https://wa.me/5531984332711";
  var page = document.body.getAttribute("data-page") || "";
  var A = function (id, href, label) {
    return '<a href="' + href + '"' + (page === id ? ' class="active"' : "") +
      (id && ["seguro", "empresas", "conteudos"].indexOf(id) >= 0 ? ' data-mega="mega-' + id + '"' : "") +
      ">" + label + "</a>";
  };

  var HEADER =
  '<div class="ticker"><div class="ticker__track">' +
    '<span>Proteção que vira tranquilidade todos os dias</span><span>Cuidar da sua família</span><span>Cuidar do seu time</span><span>Realizar suas conquistas</span>' +
    '<span>Proteção que vira tranquilidade todos os dias</span><span>Cuidar da sua família</span><span>Cuidar do seu time</span><span>Realizar suas conquistas</span>' +
  '</div></div>' +
  '<header class="site-header" id="siteHeader"><div class="shell nav">' +
    '<a class="nav__logo" href="index.html" aria-label="Vizio Capital"><img src="assets/img/logo-dark.png" alt="Vizio Capital"/></a>' +
    '<nav class="nav__links">' +
      A("inicio", "index.html", "Início") +
      A("seguro", "seguro-de-vida.html", "Seguro de Vida") +
      A("empresas", "beneficios-para-empresas.html", "Benefícios para Empresas") +
      A("consorcios", "consorcios.html", "Consórcios") +
      A("conteudos", "conteudos.html", "Conteúdos") +
      A("sobre", "sobre.html", "Sobre") +
      A("atendimento", "atendimento.html", "Atendimento") +
    '</nav>' +
    '<a class="btn btn--primary btn--sm nav__cta" href="' + WA + '" target="_blank" rel="noopener">Falar com especialista <i data-lucide="arrow-up-right"></i></a>' +
    '<button class="nav__burger" id="burger" aria-label="Abrir menu"><i data-lucide="menu"></i></button>' +
  '</div>' +
    // mega: seguro
    '<div class="mega" id="mega-seguro" data-mega-panel><div class="mega__panel">' +
      '<div class="mega__col"><h6>Proteger</h6>' +
        '<a href="seguro-de-vida.html#familia">Minha família</a><a href="seguro-de-vida.html#renda">Minha renda</a>' +
        '<a href="seguro-de-vida.html#saude">Minha saúde</a><a href="seguro-de-vida.html#patrimonio">Meu patrimônio</a></div>' +
      '<div class="mega__col"><h6>Soluções</h6>' +
        '<a href="seguro-de-vida.html#familia">Seguro Vitalício</a><a href="seguro-de-vida.html#familia">Seguro Temporário</a>' +
        '<a href="seguro-de-vida.html#renda">Proteção de Renda</a><a href="seguro-de-vida.html#saude">Doenças Graves</a></div>' +
      '<div class="mega__col"><h6>Planejamento</h6>' +
        '<a href="seguro-de-vida.html#sucessao">Planejamento Sucessório</a><a href="seguro-de-vida.html#empresarios">Seguro para Empresários</a>' +
        '<a href="seguro-de-vida.html#acidentes">Proteção contra Acidentes</a></div>' +
      '<div class="mega__cta"><b>Não sabe qual escolher?</b><p>Descubra sua proteção ideal em poucos passos.</p>' +
        '<a class="btn btn--primary btn--sm" href="atendimento.html">Encontrar solução <i data-lucide="arrow-right"></i></a></div>' +
    '</div></div>' +
    // mega: empresas
    '<div class="mega" id="mega-empresas" data-mega-panel><div class="mega__panel">' +
      '<div class="mega__col"><h6>Cuidar das pessoas</h6>' +
        '<a href="beneficios-para-empresas.html#saude">Saúde Empresarial</a><a href="beneficios-para-empresas.html#odonto">Plano Odontológico</a>' +
        '<a href="beneficios-para-empresas.html#vida">Seguro de Vida em Grupo</a><a href="beneficios-para-empresas.html#previdencia">Previdência Corporativa</a></div>' +
      '<div class="mega__col"><h6>Proteger o negócio</h6>' +
        '<a href="beneficios-para-empresas.html#socios">Proteção para Sócios</a><a href="beneficios-para-empresas.html#flex">Benefícios Flexíveis</a>' +
        '<a href="beneficios-para-empresas.html#gestao">Gestão de Benefícios</a></div>' +
      '<div class="mega__col"><h6>Para o RH</h6>' +
        '<a href="beneficios-para-empresas.html#rh">Atendimento ao RH</a><a href="beneficios-para-empresas.html#rh">Atendimento ao Colaborador</a>' +
        '<a href="beneficios-para-empresas.html#gestao">Implantação e Movimentações</a></div>' +
      '<div class="mega__cta"><b>Vizio Empresas</b><p>Estratégia, implantação e gestão de benefícios.</p>' +
        '<a class="btn btn--primary btn--sm" href="beneficios-para-empresas.html">Diagnóstico empresarial <i data-lucide="arrow-right"></i></a></div>' +
    '</div></div>' +
    // mega: conteudos
    '<div class="mega" id="mega-conteudos" data-mega-panel><div class="mega__panel">' +
      '<div class="mega__col"><h6>Pessoas</h6>' +
        '<a href="conteudos.html">Seguro de Vida</a><a href="conteudos.html">Proteção de Renda</a>' +
        '<a href="conteudos.html">Saúde e Bem-estar</a><a href="conteudos.html">Patrimônio e Sucessão</a></div>' +
      '<div class="mega__col"><h6>Empresas</h6><a href="conteudos.html">Benefícios para Empresas</a><a href="conteudos.html">RH e Pessoas</a></div>' +
      '<div class="mega__col"><h6>Planejamento</h6><a href="conteudos.html">Consórcios</a><a href="conteudos.html">Vida Financeira</a><a href="conteudos.html">Vizio</a></div>' +
      '<div class="mega__cta"><b>Vizio Conteúdos</b><p>Informação para decisões melhores.</p>' +
        '<a class="btn btn--primary btn--sm" href="conteudos.html">Ver conteúdos <i data-lucide="arrow-right"></i></a></div>' +
    '</div></div>' +
  '</header>' +
  // menu mobile
  '<div class="mobile-menu" id="mobileMenu"><button class="close" id="menuClose" aria-label="Fechar menu"><i data-lucide="x"></i></button>' +
    '<a href="seguro-de-vida.html">Seguro de Vida</a><a href="beneficios-para-empresas.html">Benefícios para Empresas</a>' +
    '<a href="consorcios.html">Consórcios</a><a href="conteudos.html">Conteúdos</a>' +
    '<a href="sobre.html">Sobre a Vizio</a><a href="atendimento.html">Atendimento</a>' +
    '<a class="btn btn--primary" href="' + WA + '" target="_blank" rel="noopener" style="margin-top:16px;justify-content:center">Falar com especialista</a>' +
  '</div>' +
  // barra CTA mobile
  '<div class="mobar"><a class="btn btn--ghost btn--sm" href="atendimento.html">Encontrar solução</a>' +
    '<a class="btn btn--primary btn--sm" href="' + WA + '" target="_blank" rel="noopener">Falar conosco</a></div>';

  var FOOTER =
  '<footer class="footer">' +
    '<div class="footer__banner">' +
      '<div class="footer__banner-bg"><img src="assets/img/hero-poster.jpg" alt=""/></div>' +
      '<div class="shell footer__banner-inner">' +
        '<div class="footer__banner-txt">' +
          '<span class="eyebrow eyebrow--light">Vamos conversar</span>' +
          '<h3>Proteja quem você ama. <span class="h-green">Comece hoje.</span></h3>' +
          '<p>Um especialista Vizio monta o plano ideal pra sua família ou sua empresa — sem compromisso.</p>' +
        '</div>' +
        '<div class="footer__banner-cta">' +
          '<a class="btn btn--primary" href="' + WA + '" target="_blank" rel="noopener">Falar no WhatsApp <i data-lucide="message-circle"></i></a>' +
          '<a class="btn btn--ghost" href="atendimento.html">Central de Atendimento</a>' +
        '</div>' +
      '</div>' +
    '</div>' +
  '<div class="shell">' +
    '<div class="footer__top">' +
      '<div class="footer__brand"><span class="footer__logo"><img src="assets/img/logo.png" class="logo" alt="Vizio Capital"/></span>' +
        '<p>Proteção que vira tranquilidade todos os dias. Seguro de vida, benefícios para sua empresa e consórcio, pensados para cuidar do que você já conquistou.</p>' +
        '<div class="socials"><a href="' + WA + '" target="_blank" rel="noopener" aria-label="WhatsApp"><i data-lucide="message-circle"></i></a>' +
          '<a href="https://www.instagram.com/viziocapital.inc" target="_blank" rel="noopener" aria-label="Instagram"><i data-lucide="instagram"></i></a>' +
          '<a href="https://www.linkedin.com/company/vizio-capital-inc" target="_blank" rel="noopener" aria-label="LinkedIn"><i data-lucide="linkedin"></i></a></div></div>' +
      '<nav class="footer__grid">' +
        '<div class="footer__col"><h5>Seguro de Vida</h5><a class="fl" href="seguro-de-vida.html#familia">Proteção Familiar</a><a class="fl" href="seguro-de-vida.html#renda">Proteção de Renda</a><a class="fl" href="seguro-de-vida.html#saude">Proteção para Saúde</a><a class="fl" href="seguro-de-vida.html#patrimonio">Proteção Patrimonial</a><a class="fl" href="seguro-de-vida.html#sucessao">Planejamento Sucessório</a></div>' +
        '<div class="footer__col"><h5>Empresas</h5><a class="fl" href="beneficios-para-empresas.html#saude">Saúde</a><a class="fl" href="beneficios-para-empresas.html#odonto">Odontológico</a><a class="fl" href="beneficios-para-empresas.html#vida">Vida em Grupo</a><a class="fl" href="beneficios-para-empresas.html#gestao">Gestão de Benefícios</a></div>' +
        '<div class="footer__col"><h5>Consórcios</h5><a class="fl" href="consorcios.html#imoveis">Imóveis</a><a class="fl" href="consorcios.html#veiculos">Veículos</a><a class="fl" href="consorcios.html#empresas">Empresas</a><a class="fl" href="consorcios.html">Simulação</a></div>' +
        '<div class="footer__col"><h5>Vizio</h5><a class="fl" href="sobre.html">Sobre a Vizio</a><a class="fl" href="conteudos.html">Conteúdos</a><a class="fl" href="atendimento.html">Atendimento</a><a class="fl" href="atendimento.html#faq">Perguntas Frequentes</a></div>' +
        '<div class="footer__col footer__contact"><h5>Fale com a gente</h5>' +
          '<a class="fl fl--ic" href="' + WA + '" target="_blank" rel="noopener"><i data-lucide="message-circle"></i> (31) 98433-2711</a>' +
          '<a class="fl fl--ic" href="atendimento.html"><i data-lucide="map-pin"></i> Central de Atendimento</a>' +
          '<a class="btn btn--primary btn--sm" href="atendimento.html" style="margin-top:14px">Falar com especialista <i data-lucide="arrow-up-right"></i></a></div>' +
      '</nav>' +
    '</div>' +
    '<div class="footer__base"><span>© 2026 Vizio Capital. Todos os direitos reservados.</span>' +
      '<span class="legal-links"><a href="privacidade.html">Política de Privacidade</a><a href="termos.html">Termos de Uso</a></span></div>' +
  '</div></footer>';

  document.body.insertAdjacentHTML("afterbegin", HEADER);
  document.body.insertAdjacentHTML("beforeend", FOOTER);
})();
