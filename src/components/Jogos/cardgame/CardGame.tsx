import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Game, getGameByIdLocal } from "@/src/data/game";

interface GameCardProps {
  gameId: string;
}

const GameCard: React.FC<GameCardProps> = ({ gameId }) => {
  const [game, setGame] = useState<Game | undefined>(undefined);

  useEffect(() => {
    getGameByIdLocal(gameId).then((g) => setGame(g));
  }, [gameId]);

  if (!game) {
    return (
      <View style={styles.container}>
        <Text style={{ color: "#fff" }}>Carregando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Imagem principal: usa imagembanner, se não existir usa imagemcapa */}
      <Image
        source={{ uri: game.imagembanner || game.imagemcapa || game.imagem }}
        style={styles.image}
      />

      {/* Título e fornecedor */}
      <Text style={styles.gameTitle}>{game.nome}</Text>
      <Text style={styles.empresa}>{game.empresa || "Desconhecido"}</Text>

      {/* Classificação etária e preço */}
      <View style={styles.infoRow}>
        <View style={styles.ageRatingContainer}>
          <Image
            source={{
              uri: "https://img.odcdn.com.br/wp-content/uploads/2022/02/NR12-AUTO.jpg",
            }}
            style={styles.classifyimage}
          />
          <Text style={styles.ageRatingText}>
            NÃO RECOMENDADO PARA MENORES DE 12 ANOS
          </Text>
        </View>

        <View style={styles.priceContainer}>
          <Text style={styles.price}>{game.preco || "R$0,00"}</Text>
        </View>
      </View>
    </View>
  );
};

export default GameCard;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginTop: 30,
    marginBottom: -10,
  },
  image: {
    width: "100%",
    height: 180,
    resizeMode: "cover",
    borderRadius: 10,
    marginBottom: 12,
  },
  gameTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 4,
  },
  publisher: {
    fontSize: 16,
    color: "#8a8a8a",
    marginBottom: 16,
    fontWeight: "600",
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ageRatingContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    marginRight: 10,
  },
  classifyimage: {
    width: 20,
    height: 20,
    resizeMode: "cover",
  },
  ageRatingText: {
    fontSize: 12,
    color: "#ffffff",
    fontWeight: "bold",
    marginLeft: 10,
    flex: 1,
  },
  priceContainer: {
    alignItems: "flex-end",
  },
  price: {
    fontSize: 20,
    color: "#45DCFF",
  },
  empresa:{
     fontSize: 20,
    color: "#45DCFF",
  }
});
