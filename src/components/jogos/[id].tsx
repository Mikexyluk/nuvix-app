import { useLocalSearchParams } from "expo-router";
import React, { Component } from "react";
import { View , StyleSheet} from "react-native";
import { GameCard } from "../ProductCard";
import CategoryList from "../categorias/categoryList";
import GameFeatures from "../gamefeature/GameFeature";
import Button from "../button/Button";


export default function JogoDetalhes() {
  const { id } = useLocalSearchParams() as { id: string };
  return (
    <View style={styles.mainContainer}>
        <GameCard jogo={{
        id: id,
        imagem: `${id}`
      }} />
        <CategoryList />
        <GameFeatures />
        <Button />
      </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#0f0f1a",
    padding: 16,
  },
});