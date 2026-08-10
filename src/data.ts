// Formatação de datas em português.

const MESES = [
  'jan', 'fev', 'mar', 'abr', 'mai', 'jun',
  'jul', 'ago', 'set', 'out', 'nov', 'dez',
];

// 9 ago 2026  (curto, para o log e a margem)
export function dataCurta(d: Date): string {
  return `${d.getUTCDate()} ${MESES[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
}

// 2026-08-09  (para o atributo datetime)
export function dataISO(d: Date): string {
  return d.toISOString().slice(0, 10);
}

// Ordena da mais recente para a mais antiga.
export function porData<T extends { data: { data: Date } }>(a: T, b: T): number {
  return b.data.data.valueOf() - a.data.data.valueOf();
}
