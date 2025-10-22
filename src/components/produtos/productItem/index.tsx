import { Game } from "@/src/data/game";
// Importação ESSENCIAL para navegação (Expo Router)
import { useRouter } from "expo-router";
import { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

// O componente ProductItem só precisa das props que ele de fato renderiza (imagem, nome, preco).
// Desestruturamos todas as props obrigatórias de 'Game' para satisfazer a tipagem.
export default function ProductItem({
  imagem,
  nome,
  preco,
  id, // <-- Usamos este ID para navegação
  imagemcapa,
}: Game) {
  const [imageError, setImageError] = useState(false);
  // Inicialização do hook useRouter
  const router = useRouter(); // Usamos imagem de catálogo (Game.imagem) se existir, ou a capa como fallback.

  const imageUrl = imagem || imagemcapa; // Função de navegação

  const handlePress = () => {
    // 1. Usa o objeto 'router' inicializado
    // 2. Usa a variável 'id' da desestruturação do props
    router.push(`/jogos/${id}`);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      {" "}
      <View style={styles.container}>
        {/* 1. IMAGEM */}{" "}
        {!imageError && imageUrl ? (
          <Image
            source={{ uri: imageUrl }}
            style={styles.image}
            resizeMode="cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <View style={[styles.image, styles.imagePlaceholder]}>
            {" "}
            <Text style={styles.placeholderText}>
              Imagem não disponível{" "}
            </Text>{" "}
          </View>
        )}
        {/* 2. INFORMAÇÕES (Nome e Preço) */}{" "}
        <View style={styles.infoWrapper}>
          {" "}
          <Text style={styles.nomeJogo} numberOfLines={2}>
            {nome}{" "}
          </Text>{" "}
          {/* O preço agora fica alinhado verticalmente com o nome (por causa do infoWrapper flex) */}{" "}
          <Text style={styles.precoJogo}>{preco || "Desconhecido"}</Text>{" "}
        </View>{" "}
      </View>{" "}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  // ------------------------------------
  // 1. ESTILOS DO CARTÃO (Container)
  // ------------------------------------
  container: {
    // ESSENCIAL PARA O LAYOUT LATERAL: Imagem à esquerda, texto à direita
    flexDirection: "row",
    alignItems: "center", // Alinha a imagem e o texto verticalmente
    width: 350, // Ocupa a largura total (ideal para FlatList vertical)
    padding: 10,
    marginVertical: 8,
    backgroundColor: "#1f2937",
    borderRadius: 12,
    overflow: "hidden",

    // Sombra
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 }, // Sombra mais sutil
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  // ------------------------------------
  // 2. ESTILOS DA IMAGEM
  // ------------------------------------
  image: {
    width: 80, // Largura fixa para a imagem lateral
    height: 80, // Altura ajustada
    resizeMode: "cover",
    borderRadius: 8,
    marginRight: 15, // Espaço entre a imagem e o texto
  },
  imagePlaceholder: {
    backgroundColor: "#374151",
    justifyContent: "center",
    alignItems: "center",
  },
  placeholderText: {
    color: "#9ca3af",
    fontSize: 12,
    textAlign: "center",
  },

  // ------------------------------------
  // 3. ESTILOS DO TEXTO
  // ------------------------------------
  cabecalhoExpansao: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 8,
  },

  nomeJogo: {
    fontSize: 18,
    fontWeight: "600",
    color: "#ffffff",
    flex: 1,
    marginRight: 12,
  },

  precoJogo: {
    fontSize: 18,
    color: "#45DCFF",
    alignSelf: "flex-end",
  },

  desenvolvedorJogo: {
    fontSize: 14,
    color: "#a0a0a0",
    fontStyle: "italic",
  },
  infoWrapper: {
    flex: 1, // Ocupa todo o espaço restante
    flexDirection: "row", // Permite que nome e preço fiquem na mesma linha
    justifyContent: "space-between", // Joga o nome para a esquerda e o preço para a direita
    height: 80, // Altura igual à da imagem para alinhamento
  },
});
