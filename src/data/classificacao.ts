// CLASSIFICAÇÕES ETÁRIAS
export const classificacoes = {
  L: { nome: "Livre", cor: "#00A859" },
  10: { nome: "10 anos", cor: "#F7C600" },
  12: { nome: "12 anos", cor: "#F28C00" },
  14: { nome: "14 anos", cor: "#E67800" },
  16: { nome: "16 anos", cor: "#E30000" },
  18: { nome: "18 anos", cor: "#000000" },
} as const;

// 🔹 Tipo dinâmico baseado nas chaves de `classificacoes`
export type AgeRating = keyof typeof classificacoes;
