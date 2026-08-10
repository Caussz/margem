import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Cada arquivo .md em src/content/artigos vira uma anotação.
// O "schema" abaixo é o cabeçalho (frontmatter) que cada arquivo precisa ter.
const artigos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/artigos' }),
  schema: z.object({
    titulo: z.string(),
    // Resumo curto: aparece na lista da home e nas prévias.
    resumo: z.string(),
    // Data de publicação. Formato: 2026-08-09
    data: z.coerce.date(),
    // Opcional: data da última revisão.
    atualizado: z.coerce.date().optional(),
    // Marque como true para deixar o texto fora do ar enquanto escreve.
    rascunho: z.boolean().default(false),
    // Opcional: etiquetas de assunto.
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { artigos };
