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
  info?: Feature[]; // INFORMAÇÕES ADICIONAIS, TIPO JOGADORES ETC, EH DA PÁGINA DE ID_JOGO
  disponibilidade?: boolean;
  updatedAt?: string;
}

 //DADOS SIMULADOS
export const seedGames: Game[] = [
  {
    id: "1",
    nome: "Cult of the Lamb",
    descricao:
      "Construa um culto, explore masmorras e conquiste seguidores neste jogo viciante e sombrio.",
    preco: "R$64,95",
    empresa: "Devolver Digital",
    codigo: "CULT12345",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTrsnUTD9XNANFMBbn3q4LXldQQ73D2RSc_06PTvjDp5mkgkpBX3VlE9SDM3ryJpuCoDw&usqp=CAU",
    imagemcapa:
      "https://cdn.ome.lt/9A67V-ziKTfCpQ_BCK4gY-s-h90=/200x0/smart/extras/capas/cult_of_the_lamb_box_art.jpg",
    imagembanner:
      "https://i.ytimg.com/vi/tY1EYzn_5qY/maxresdefault.jpg",
    imagemexemplo1:
      "https://uploads.jovemnerd.com.br/wp-content/uploads/2022/08/cult_of_the_lamb_review_1__5vu672n.jpg",
    imagemexemplo2:
      "https://uploads.jovemnerd.com.br/wp-content/uploads/2022/08/cultofthelamb_review_3__54801fcw2.jpg",
    imagemexemplo3:
      "https://uploads.jovemnerd.com.br/wp-content/uploads/2022/08/cultofthelamb_review_6__xwc8gy.jpg",
    plataforma: "PC",
    anodelancamento: "2022-08-11",
    categorias: ["Construção de Bases","Fofo","Roguelike de Ação"],
    info: [
      { icon: "world-o", lib: "Fontisto", text: "Jogo offline habilitado" },
      { icon: "people-sharp", lib: "Ionicons", text: "Multiplayer local" },
    ],
    disponibilidade: true,
    updatedAt: new Date().toISOString(),
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
    info: [
      { icon: "game-controller", lib: "Ionicons", text: "Suporte a controle" },
      { icon: "world-o", lib: "Fontisto", text: "Campanha extensa" },
    ],
    disponibilidade: true,
    updatedAt: new Date().toISOString(),
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
