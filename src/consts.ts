// Um lugar só para os textos que se repetem pelo site.
// Edite aqui e o resto acompanha.

export const SITE = {
  titulo: 'Margem',
  autor: 'Cauã V. Silva',
  // Aparece na aba do navegador e no rodapé.
  descricao:
    'Notas de engenharia de software e pensamentos alheios. Escrevo aqui pra pensar melhor, organizar e refletir.',
  // Usado no <title> das páginas: "Página — Margem"
  separador: ' — ',
  // Redes/contato que aparecem no rodapé e no "Sobre".
  links: {
    github: 'https://github.com/caussz',
    linkedin: 'https://www.linkedin.com/in/caussz/',
    email: 'cczcaua@gmail.com',
    wpp: 'https://api.whatsapp.com/send?phone=5547992091566',
  },
} as const;

export const NAV = [
  { rotulo: 'Anotações', href: '/' },
  { rotulo: 'Sobre', href: '/sobre' },
] as const;
