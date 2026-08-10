// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// ─────────────────────────────────────────────────────────────
// GitHub Pages
//
// Há dois cenários. Escolha o seu e ajuste `site` (e `base`):
//
//  1. Site de usuário  -> repositório chamado `SEU_USUARIO.github.io`
//     site: 'https://SEU_USUARIO.github.io'
//     base: '/'            (deixe como está)
//
//  2. Site de projeto  -> qualquer outro nome de repositório, ex. `margem`
//     site: 'https://SEU_USUARIO.github.io'
//     base: '/margem'      (o nome do repositório, com barra na frente)
//
// Se usar o cenário 2, descomente a linha `base` abaixo.
// ─────────────────────────────────────────────────────────────

export default defineConfig({
  site: 'https://caussz.github.io',
  base: '/margem',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      // tema de código que combina com a paleta manila/ocre
      themes: { light: 'github-light', dark: 'github-dark' },
      wrap: true,
    },
  },
});
