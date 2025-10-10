import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Fontisto from "@expo/vector-icons/Fontisto";
import Ionicons from "@expo/vector-icons/Ionicons";

const GameFeatures = () => {
  return (
    <View style={styles.containerABOUT}>
      {/* Divisor */}
      <View style={styles.divider} />

      {/* Recursos do Jogo */}
      <View style={styles.features}>
        {/* Primeiro recurso */}
        <View style={styles.featureItem}>
          <Fontisto name="world-o" style={styles.featureIcon} />
          <Text style={styles.featureText}>Jogo offline habilitado</Text>
        </View>

        {/* Segundo recurso */}
        <View style={styles.featureItem}>
          <Ionicons name="people-sharp" style={styles.featureIcon} />
          <Text style={styles.featureText}>2 jogadores</Text>
        </View>
      </View>
    </View>
  );
};

export default GameFeatures;

const styles = StyleSheet.create({
   container: {
    padding: 20,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  image: {
    width: "100%",
    height: 180,
    resizeMode: "cover",
    borderRadius: 10,
  },
  gameTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 4,
    fontFamily: "System",
  },
  publisher: {
    fontSize: 16,
    color: "#8a8a8a",
    marginBottom: 16,
    fontFamily: "System",
    fontWeight: "600",
  },
  // Container principal para a linha de informações
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  // Container da classificação etária
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
    fontFamily: "System",
    marginLeft: 10,
    flex: 1,
  },
  // Container do preço
  priceContainer: {
    alignItems: "flex-end",
  },
  price: {
    fontSize: 20,
    color: "#45DCFF",
    fontWeight: "bold",
    fontFamily: "System",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 12,
    fontFamily: "System",
  },
  aboutContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#019EC2",
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 20,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "#ffffff",
    fontWeight: "bold",
    fontFamily: "System",
  },

  //About config

  containerABOUT: {
    flex: 0,
  },
  sectionTitleABOUT: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 16,
    fontFamily: "System",
  },
  categoriesList: {
    marginBottom: 20,
  },
  categoryItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  icon: {
    marginRight: 12,
  },
  categoryText: {
    fontSize: 16,
    color: "#ffffff",
    fontWeight: "600",
    fontFamily: "System",
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
    fontSize: 15,
  },
  featureText: {
    fontSize: 16,
    color: "#ffffff",
    fontFamily: "System",
    fontWeight: "500",
  },
  bullet: {
    fontSize: 18,
    marginRight: 6,
    color: "#000", // or any color you prefer
  },
});


