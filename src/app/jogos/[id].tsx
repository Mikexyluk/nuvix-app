import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Image, ScrollView, ImageBackground } from "react-native";
import Button from "@/src/components/button/Button";
import GameFeatures from "@/src/components/Jogos/Gameinfo/GameFeature";
import CategoryList from "@/src/components/categorias/categoryList";
import { Game, getGameByIdLocal } from "@/src/data/game";
import GameCard from "@/src/components/Jogos/cardgame/CardGame";
import styles from "./style";



export default function JogoDetalhes() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [game, setGame] = useState<Game | undefined>(undefined);

  useEffect(() => {
    if (id) {
      getGameByIdLocal(id).then((g) => setGame(g));
    }
  }, [id]);

  if (!game) {
    return (
      <View style={[styles.mainContainer, { justifyContent: "center", alignItems: "center" }]}>
        <Text style={{ color: "#fff" }}>Carregando informações do jogo...</Text>
      </View>
    );
  }

  return (
    <ImageBackground
          source={require("@/assets/images/wallpaper-base.png")}
          style={styles.background}
        >
    <ScrollView style={styles.mainContainer}>
      <GameCard gameId={id}/>

      {/* Categorias */}
      <CategoryList categories={game.categorias || []} />


      {/* Recursos / Features */}
      <GameFeatures gameId={game.id} />

      {/* Botão */}
      <View style={styles.buttonContainer}>
        <Button title="Resgatar Chave" onPress={() => {}} />
      </View>
    </ScrollView>
    </ImageBackground>
  );
}


