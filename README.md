# Vizio Capital — Site

Site institucional da **Vizio Capital** — proteção e planejamento para acompanhar
os diferentes momentos da vida, da família e da empresa (seguro de vida, benefícios
para empresas e consórcios), com atendimento consultivo.

Direção de marca: **claro, humano, editorial e premium** — azul, branco e neutros
quentes, fotografia de vida real e ritmo narrativo. Conceito: *"Cuide do que faz a
vida valer a pena."* A comunicação parte sempre da vida real e só depois apresenta
o produto (emoção → contexto → solução → prova → conversa).

## Stack
- HTML + CSS puro (design system em `assets/css/vibe.css`)
- JavaScript vanilla (`assets/js/vibe.js`) — scroll reveal calmo, parallax leve, menu mobile
- Chrome compartilhado (`assets/js/chrome.js`) — header, mega menu e rodapé injetados em todas as páginas (DRY)
- [Google Fonts](https://fonts.google.com) — Fraunces (display, serif editorial) + Inter (texto)
- [Lucide](https://lucide.dev) — ícones

## Estrutura
```
index.html                      Home (narrativa em 8 blocos)
seguro-de-vida.html             Proteger
beneficios-para-empresas.html   Cuidar
consorcios.html                 Construir
conteudos.html                  Vizio Conteúdos (blog editorial)
sobre.html · atendimento.html   Institucional / contato
privacidade.html · termos.html  Páginas legais
assets/css/  assets/js/  assets/img/  assets/video/
```

## Fotografia
A fotografia é o elemento central da identidade. Use imagens lifestyle/editoriais,
luz natural, tons quentes, momentos espontâneos e pessoas em ambientes reais —
nunca clichês corporativos (aperto de mão, executivo com gráfico, cofrinho). Os
slots de foto vivem em `assets/img/` e nas variáveis `--cta-photo` das seções de CTA.

## Rodar local
```bash
python3 -m http.server 8080
# http://localhost:8080
```

## Deploy
Deploy estático (zero-config) na **Vercel** — basta importar este repositório.

---
*Cuide do que faz a vida valer a pena.*
