---
titulo: Referência de formatação (rascunho)
resumo: >-
  Um texto de mentira só pra você ver como cada elemento aparece: títulos,
  código, citação, lista e nota lateral. Apague quando não precisar mais.
data: 2026-08-02
atualizado: 2026-08-05
rascunho: true
tags:
  - exemplo
  - guia
---

Este arquivo é só uma referência. Como o cabeçalho tem `rascunho: true`,
ele **aparece quando você roda o site na sua máquina**, mas **some no site
publicado**. Use esse recurso pra deixar textos maturando sem ir pro ar.

Abaixo, cada coisa que você pode usar num artigo.

## Títulos de seção

O `##` vira um título de seção como este. Use `###` para subtópicos.

### Um subtópico

Parágrafos comuns são só texto. Você pode usar **negrito** para dar peso,
*itálico* para ênfase leve e <mark>marca-texto</mark> para destacar. Links
ficam assim: [minha página inicial](/).

## Notas laterais

Em telas largas, o texto abaixo salta para a margem esquerda — como uma
anotação a lápis na lateral da folha. No celular, ele vira um recuo
discreto.

<aside class="nota">Esta é uma nota lateral. Boa para comentários, fontes ou aquele aparte que não cabe no fluxo principal.</aside>

Escreva-a no markdown com `<aside class="nota">...</aside>`. Coloque logo
ao lado do parágrafo que ela comenta.

## Listas

Coisas que gosto de checar antes de publicar:

- O título diz de verdade do que se trata?
- Cortei todo parágrafo que não sustenta a ideia?
- Um leitor apressado entenderia só pelos títulos?

Ou em ordem:

1. Escrever o rascunho inteiro sem editar.
2. Deixar descansar um dia.
3. Cortar um terço.

## Código

Trechos curtos no meio da frase ficam assim: `const timeout = 30_000`.
Blocos maiores ganham destaque:

```ts
// axios sem timeout é uma armadilha silenciosa
const cliente = axios.create({
  baseURL: process.env.API_URL,
  timeout: 30_000, // 30s — falhe rápido em vez de pendurar a conexão
});
```

## Citação

> Todo sistema distribuído tem um timeout escondido em algum lugar. A única
> escolha é se você o define ou se ele te encontra.

---

Quando não precisar mais deste arquivo, é só apagá-lo da pasta
`src/content/artigos`.
