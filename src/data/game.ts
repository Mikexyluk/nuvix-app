export type IconLib = "Fontisto" | "Ionicons" | "MaterialIcons" | "Entypo";

export interface Feature {
  icon: string;
  lib?: IconLib;
  text: string;
}

export type Platform =
  | "PS4"
  | "PS5"
  | "Xbox"
  | "Switch"
  | "PC"
  | "Mobile"
  | string;

export type AgeRating = "L" | "10" | "12" | "14" | "16" | "18" | any; // PARA ACEITAR OUTROS TIPOS DE CLASSIFICAÇÃO

// --- NOVO: INTERFACE PARA EXPANSÕES ---
export interface Expansion {
  id: string;
  nome: string;
  empresa: string;
  preco: string;
  imagem: string; // URL da imagem da capa da expansão
}
// -------------------------------------

export interface Game {
  id: string;
  nome: string;
  descricao?: string;
  preco?: string;
  empresa?: string; // NOME DO FORNECEDOR DO JOGO , EMPRESA NUM GERAL
  codigo?: string; // CÓDIGO DE RESGATE, FORNECIDO NO SISTEMA HIPOTETICAMENTE
  imagem?: string; // //IMAGEM QUE VAI PARA O CATALOGO
  imagemcapa: string; // CAPA DP JOGO
  imagembanner?: string; // BANNER DO JOGO
  imagemexemplo1?: string; // IMAGENS DENTRO DO DETALHE DO JOGO
  imagemexemplo2?: string; // IMAGENS DENTRO DO DETALHE DO JOGO
  imagemexemplo3?: string; // IMAGENS DENTRO DO DETALHE DO JOGO
  plataforma?: Platform; // Steam, Epic, PSN, Xbox, Switch, PC, Mobile
  anodelancamento?: string; // ANO DE LANÇAMENTO
  categorias?: string[]; // CATEGORIAS
  classificacao?: AgeRating; // CLASSIFICAÇÃO DE IDADE
  info?: Feature[]; // INFORMAÇÕES ADICIONAIS, TIPO JOGADORES ETC, EH DA PÁGINA DE ID_JOGO
  disponibilidade?: boolean;
  updatedAt?: string;
  // --- NOVO CAMPO: EXPANSÕES ---
  expansoes?: Expansion[];
  // -----------------------------
} //DADOS SIMULADOS

export const seedGames: Game[] = [
  {
    id: "1",
    nome: "Cult of the Lamb",
    descricao:
      "Crie seu próprio culto em uma terra de falsos profetas, aventurando-se por regiões misteriosas e diversas para criar uma comunidade fiel de Seguidores da floresta e para propagar sua Palavra e se tornar o único culto verdadeiro.",
    preco: "R$64,95",
    empresa: "Devolver Digital",
    codigo: "CULT12345",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTrsnUTD9XNANFMBbn3q4LXldQQ73D2RSc_06PTvjDp5mkgkpBX3VlE9SDM3ryJpuCoDw&usqp=CAU",
    imagemcapa:
      "https://cdn.ome.lt/9A67V-ziKTfCpQ_BCK4gY-s-h90=/200x0/smart/extras/capas/cult_of_the_lamb_box_art.jpg",
    imagembanner: "https://i.ytimg.com/vi/tY1EYzn_5qY/maxresdefault.jpg",
    imagemexemplo1:
      "https://uploads.jovemnerd.com.br/wp-content/uploads/2022/08/cult_of_the_lamb_review_1__5vu672n.jpg",
    imagemexemplo2:
      "https://uploads.jovemnerd.com.br/wp-content/uploads/2022/08/cultofthelamb_review_3__54801fcw2.jpg",
    imagemexemplo3:
      "https://uploads.jovemnerd.com.br/wp-content/uploads/2022/08/cultofthelamb_review_6__xwc8gy.jpg",
    plataforma: "PC",
    anodelancamento: "2022-08-11",
    categorias: ["Estratégia", "Aventura", "Ação", "Casual"],
    classificacao: "12",
    info: [
      { icon: "world-o", lib: "Fontisto", text: "Jogo offline habilitado" },
      { icon: "people-sharp", lib: "Ionicons", text: "2 jogadores" },
    ],
    disponibilidade: true,
    updatedAt: new Date().toISOString(),
    // --- DADOS DAS EXPANSÕES ADICIONADOS AQUI ---
    expansoes: [
      {
        id: "exp1",
        nome: "Cult of the Lamb: Sinful Pack",
        empresa: "Devolver Digital",
        preco: "R$ 16,99",
        imagem:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoVWyDsCKWBE6_zAkljdMXtvkJAHObYDSTbw&s",
      },
      {
        id: "exp2",
        nome: "Cult of the Lamb: Pilgrim Pack",
        empresa: "Devolver Digital",
        preco: "R$ 23,50",
        imagem:
          "https://cdn.akamai.steamstatic.com/steam/apps/2168920/capsule_184x69.jpg", // URL de exemplo
      },
      {
        id: "exp3",
        nome: "Cult of the Lamb: Cultist Pack",
        empresa: "Devolver Digital",
        preco: "R$ 11,99",
        imagem:
          "https://cdn.akamai.steamstatic.com/steam/apps/2065830/capsule_184x69.jpg", // URL de exemplo
      },
    ],
    // ---------------------------------------------
  },
  {
    id: "2",
    nome: "Lies of P",
    descricao: "Aventura soulslike reimaginada com Pinoquio como protagonista.",
    preco: "R$249,90",
    empresa: "fornecedor-exemplo",
    codigo: "LIES12345",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwGYeEJwD3FIwVxbOouIugjzLryJ4GPPxTQ2Juvii0kFI0BOHOYkRR60kntuVTFmrfE2w&usqp=CAU",
    imagemcapa:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwGYeEJwD3FIwVxbOouIugjzLryJ4GPPxTQ2Juvii0kFI0BOHOYkRR60kntuVTFmrfE2w&usqp=CAU",
    plataforma: "PC",
    anodelancamento: "2023-09-19",
    categorias: ["Ação"],
    classificacao: "14",
    info: [
      { icon: "game-controller", lib: "Ionicons", text: "Suporte a controle" },
      { icon: "world-o", lib: "Fontisto", text: "Campanha extensa" },
    ],
    disponibilidade: true,
    updatedAt: new Date().toISOString(),
    expansoes: [], // Exemplo de jogo sem expansões
  },
  {
    id: "3",
    nome: "Elden Ring",
    descricao:
      "Um RPG de ação e fantasia que se passa em um mundo forjado pelo lendário Hidetaka Miyazaki e George R. R. Martin. Explore o The Lands Between, enfrente inimigos temíveis e descubra o poder do Elden Ring.",
    preco: "R$299,90",
    empresa: "Bandai Namco Entertainment",
    codigo: "ELDEN54321",
    imagem: "https://i.redd.it/bueqtztxmnj81.png",
    imagemcapa:
      "https://upload.wikimedia.org/wikipedia/pt/2/23/Elden_Ring_capa.jpg",
    imagembanner:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT56H9hF2WlStBjmSn_CiN1vRxx7Tmph13P7oZqHdD-Zay69cyQPMQVMqJ96Xfjn0WfrA0&usqp=CAU",
    imagemexemplo1:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK_ouyGfAYsR5ftytsxz6qzVDDIAbmL0e0eQ&s",
    imagemexemplo2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpvX43dovblajeBdoBz24H2kgGVqU15cFH2GXGg4wLV4AKxTHLt4YtgxtZcDfcYziOrtY&usqp=CAU",
    imagemexemplo3: "https://t2.tudocdn.net/613697?w=824&h=494",
    plataforma: "PS5",
    anodelancamento: "2022-02-25",
    categorias: ["RPG", "Ação", "Aventura", "Soulslike"],
    classificacao: "16",
    info: [
      { icon: "gamepad", lib: "Fontisto", text: "Suporte a controle" },
      { icon: "wifi", lib: "Ionicons", text: "Multiplayer online" },
      { icon: "time-outline", lib: "Ionicons", text: "Single-player" },
    ],
    disponibilidade: true,
    updatedAt: new Date().toISOString(),
    expansoes: [],
  },
];

//RETURN DOS JOGOS SIMULADOS
export function getGamesLocal(): Promise<Game[]> {
  return Promise.resolve(seedGames);
}

//RETORNO DO JOGO POR ID
export function getGameByIdLocal(id: string): Promise<Game | undefined> {
  const found = seedGames.find((g) => g.id === id);
  return Promise.resolve(found);
}

//BUSCA DOS JOGOS NA API
export async function fetchGamesFromApi(): Promise<Game[]> {
  const response = await fetch("https://sua-api.com/games");
  if (!response.ok) {
    throw new Error("Erro ao buscar jogos da API");
  }
  const data: Game[] = await response.json();
  return data;
}
