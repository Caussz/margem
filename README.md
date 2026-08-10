# Margem

Um caderno de engenharia de software. Feito em [Astro](https://astro.build),
publicado no GitHub Pages. Escrever é só criar um arquivo `.md`.

---

## Rodar na sua máquina

Precisa do [Node.js](https://nodejs.org) 18.20+ (ou 20/22).

```bash
npm install      # instala as dependências (só na primeira vez)
npm run dev      # abre em http://localhost:4321
```

O `npm run dev` recarrega sozinho quando você salva um arquivo.

Outros comandos:

```bash
npm run build    # gera o site final na pasta dist/
npm run preview  # vê o site final localmente antes de publicar
```

---

## Escrever uma anotação

Crie um arquivo `.md` em `src/content/artigos/`. O nome do arquivo vira o
endereço (`meu-texto.md` → `/artigos/meu-texto`). Comece pelo cabeçalho:

```md
---
titulo: O título da anotação
resumo: Uma ou duas frases que aparecem na lista da home.
data: 2026-08-09
tags:
  - arquitetura
  - vue
---

Aqui começa o texto, em markdown normal.
```

Campos do cabeçalho:

| Campo        | Obrigatório | O que é                                          |
|--------------|:-----------:|--------------------------------------------------|
| `titulo`     | sim         | Título da anotação.                              |
| `resumo`     | sim         | Frase curta para a lista e para o SEO.           |
| `data`       | sim         | Data de publicação, no formato `2026-08-09`.     |
| `atualizado` | não         | Data da última revisão.                          |
| `rascunho`   | não         | `true` esconde o texto no site publicado.        |
| `tags`       | não         | Lista de assuntos.                               |

**Rascunhos:** com `rascunho: true`, o texto aparece só na sua máquina
(`npm run dev`) e some no site publicado. Use pra deixar ideias maturando.
Quando estiver pronto, troque para `false` ou remova a linha.

**Nota lateral:** para uma anotação que salta pra margem, escreva no meio
do texto:

```html
<aside class="nota">Seu comentário aqui.</aside>
```

Veja `src/content/artigos/exemplo-formatacao.md` para todos os elementos.

---

## Personalizar

- **Seu nome, links e textos fixos:** `src/consts.ts`.
- **Cores e tipografia:** as variáveis no topo de `src/styles/global.css`.
- **Página "Sobre":** `src/pages/sobre.astro` (o texto está marcado como
  rascunho para você reescrever).

---

## Publicar no GitHub Pages

1. **Ajuste o endereço** em `astro.config.mjs`:
   - Se o repositório se chamar `SEU_USUARIO.github.io`, deixe
     `site: 'https://SEU_USUARIO.github.io'` e `base` comentado.
   - Se tiver qualquer outro nome (ex. `margem`), use
     `site: 'https://SEU_USUARIO.github.io'` **e** descomente
     `base: '/margem'` com o nome do repositório.

2. **Suba o código** para a branch `main`.

3. No GitHub, vá em **Settings → Pages** e, em *Build and deployment*,
   escolha **GitHub Actions** como origem.

4. Todo push na `main` publica sozinho (veja a aba **Actions**). O endereço
   final aparece em Settings → Pages.

---

## Estrutura

```
src/
├── consts.ts            textos e links do site
├── data.ts              formatação de datas
├── content.config.ts    formato do cabeçalho dos artigos
├── content/artigos/     seus textos em markdown  ← escreva aqui
├── layouts/             moldura das páginas
├── components/          (livre para crescer)
├── pages/               home, sobre e a rota dos artigos
└── styles/global.css    o sistema de design inteiro
```
