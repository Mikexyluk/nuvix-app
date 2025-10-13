import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Fontisto from "@expo/vector-icons/Fontisto";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Game, getGameByIdLocal, Feature } from "@/src/data/game";

interface GameFeaturesProps {
  gameId: string;
}

const GameFeatures: React.FC<GameFeaturesProps> = ({ gameId }) => {
  const [features, setFeatures] = useState<Feature[]>([]);

  useEffect(() => {
    getGameByIdLocal(gameId).then((game) => {
      if (game && game.info) setFeatures(game.info);
    });
  }, [gameId]);

  if (!features.length) {
    return (
      <View style={styles.containerABOUT}>
        <Text style={{ color: "#fff" }}>Carregando recursos...</Text>
      </View>
    );
  }

  // Função para mapear a lib para o ícone correto
  const renderIcon = (feature: Feature) => {
    switch (feature.lib) {
      case "Fontisto":
        return <Fontisto name={feature.icon as any} style={styles.featureIcon} />;
      case "Ionicons":
        return <Ionicons name={feature.icon as any} style={styles.featureIcon} />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.containerABOUT}>
      <View style={styles.divider} />

      <View style={styles.features}>
        {features.map((feature, index) => (
          <View key={index} style={styles.featureItem}>
            {renderIcon(feature)}
            <Text style={styles.featureText}>{feature.text}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default GameFeatures;

const styles = StyleSheet.create({
  containerABOUT: {
    flex: 0,
  },
  divider: {
    height: 1,
    backgroundColor: "#181836ff",
    marginVertical: 16,
  },
  features: {
    margin: 10,
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  featureIcon: {
    marginRight: 10,
    color: "#ffffff",
    fontSize: 18,
  },
  featureText: {
    fontSize: 16,
    color: "#ffffff",
    fontWeight: "500",
  },
});
