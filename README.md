# Vizio Capital — Site (Vibe Design)

Site institucional da **Vizio Capital** — assessoria em planejamento financeiro
(seguros, investimentos, previdência e sucessão patrimonial).

Redesign no estilo **dark / premium / gold**, aplicando os fundamentos de Vibe Design
sobre o conteúdo da Vizio, com o sunburst dourado da própria marca como elemento-herói.

## Stack
- HTML + CSS puro (design system em `assets/css/vibe.css`)
- JavaScript vanilla (`assets/js/vibe.js`) — scroll reveal, contadores, menu mobile
- [Google Fonts](https://fonts.google.com) — Sora (display) + Inter (texto)
- [Lucide](https://lucide.dev) — ícones

## Estrutura
```
index.html        Home
blog.html         Blog (Vizio Insights)
assets/css/       Design system
assets/js/        Interações
assets/img/       Logo, favicon e imagens
```

## Rodar local
```bash
python3 -m http.server 8080
# http://localhost:8080
```

## Deploy
Deploy estático (zero-config) na **Vercel** — basta importar este repositório.

---
*Viver bem é estar protegido.*
