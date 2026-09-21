# flex.dev — site one-page

Abra `index.html` no navegador (ou sirva a pasta com qualquer servidor estático).
Não há dependência em runtime: só HTML + 2 CSS estáticos + ~2 KB de JS.

## Substituir placeholders (pasta `assets/`)

| Arquivo atual              | Substituir por                                                              |
|----------------------------|-----------------------------------------------------------------------------|
| `logo.png`                 | Logo oficial flex.dev (já instalado; 640×640, fundo transparente)           |
| `asafe.jpg`, `gui.jpg`     | Fotos da equipe (já instaladas; 600×600, recortadas no rosto)                |
| `mock-<case>-desktop.svg`  | Screenshot desktop do site do case (proporção 16:10)                        |
| `mock-<case>-mobile.svg`   | Screenshot mobile do site do case (proporção 9:19)                          |

Dica: exporte fotos/screenshots em **WebP** (fotos ≤ 400×400, desktop ≤ 1200 px de largura, mobile ≤ 390 px).

## Ajustes rápidos em `index.html`

- **Badges de valor dos cases**: `<body data-show-prices="true">` → mude para `"false"` no site público.
- **WhatsApp**: troque `5500000000000` no link `wa.me` da seção Contato.
- **E-mail**: troque `contato@flex.dev` no `mailto:`.

## Editar estilos

- `assets/styles.css` — estilos customizados (glass, glows, mockups, animações). Edite direto.
- `assets/tailwind.css` — **gerado**. Se você adicionar/alterar classes Tailwind no `index.html`, recompile:

```bash
cd build
npm install
npm run build     # ou: npm run watch
```

## Otimizações para celulares de entrada (já aplicadas)

- Tailwind compilado (≈18 KB) em vez do CDN (≈400 KB de JS + compilação no aparelho).
- Sem `backdrop-filter`, `filter` ou animação contínua no mobile — só em desktop com mouse.
- Sombras grandes só em desktop; `content-visibility: auto` nas seções fora da tela.
- Fontes carregadas sem bloquear a renderização, apenas nos pesos usados.
- Imagens com `loading="lazy"`, `decoding="async"` e dimensões declaradas (sem layout shift).
- Scroll listener passivo e limitado a 1 atualização por frame.
