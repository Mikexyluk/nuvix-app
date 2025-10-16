import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Feature, Game, getGameByIdLocal } from "@/src/data/game";
import CategoryList from "../../Categorias/Catregoria_Game/categoryList_game";
import { Fontisto, Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import { classificacoes } from "@/src/data/classificacao";

export default function JogoDetalhes() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [game, setGame] = useState<Game | undefined>(undefined);

  useEffect(() => {
    if (id) getGameByIdLocal(id).then((g) => setGame(g));
  }, [id]);

  if (!game) {
    return (
      <View style={{ padding: 20 }}>
        <Text style={{ color: "#fff" }}>Carregando informações do jogo...</Text>
      </View>
    );
  }

  const renderIcon = (feature: Feature) => {
    switch (feature.lib) {
      case "Fontisto":
        return <Fontisto name={feature.icon as any} size={16} color="#fff" />;
      case "Ionicons":
        return <Ionicons name={feature.icon as any} size={16} color="#fff" />;
      default:
        return null;
    }
  };

  const cor =
    classificacoes[game.classificacao as keyof typeof classificacoes]?.cor ||
    "#999";

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: game.imagembanner || game.imagemcapa || game.imagem }}
        style={styles.image}
      />

      <Text style={styles.gameTitle}>{game.nome || "Desconhecido"}</Text>
      <Text style={styles.empresa}>{game.empresa || "Desconhecido"}</Text>

      {/* CLASSIFICAÇÃO */}
      {game.classificacao && (
        <View style={styles.classificacaoContainer}>
          <View
            style={{
              backgroundColor: cor,
              borderRadius: 8,
              paddingHorizontal: 6,
              paddingVertical: 2,
            }}
          >
            <Text
              style={{
                color: game.classificacao === "18" ? "#fff" : "#000",
                fontWeight: "bold",
              }}
            >
              {classificacoes[game.classificacao as keyof typeof classificacoes]
                ?.nome || game.classificacao}
            </Text>
          </View>
        </View>
      )}

      {/* PREÇO */}
      <View style={styles.priceContainer}>
        <Text style={styles.price}>{game.preco || "R$0,00"}</Text>
      </View>

      {/* CATEGORIAS */}
      <CategoryList categories={game.categorias ?? []} />

      {/* INFORMAÇÕES */}
      <View style={{ marginTop: 20 }}>
        {game.info?.map((feature, index) => (
          <View key={index} style={styles.featureItem}>
            {renderIcon(feature)}
            <Text style={styles.featureText}>{feature.text}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 12,
    marginTop: 30,
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
  empresa: {
    fontSize: 16,
    color: "#45DCFF",
    marginBottom: 8,
  },
  classificacaoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
    gap: 8,
  },
  featureText: {
    color: "#fff",
    fontSize: 14,
  },
  priceContainer: {
    alignItems: "flex-end",
    marginTop: 10,
  },
  price: {
    fontSize: 20,
    color: "#45DCFF",
    fontWeight: "bold",
  },
});
