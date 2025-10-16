import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Image, ScrollView, ImageBackground } from "react-native";
import Button from "@/src/components/Pre-Prontos/button/Button";
import CategoryList from "@/src/components/Categorias/Catregoria_Game/categoryList_game";
import { Game, getGameByIdLocal } from "@/src/data/game";
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
  const GameCard: React.FC<Game> = ({ id }) => {

  return (
    <ImageBackground
          source={require("@/assets/images/wallpaper-base.png")}
          style={styles.background}
        >
    <ScrollView style={styles.mainContainer}>
      <GameCard id={game.id} nome={game.nome} imagemcapa={game.imagemcapa} />

      {/* Categorias */}
      <CategoryList categories={game.categorias || []} />

      {/* Botão */}
      <View style={styles.buttonContainer}>
        <Button title="Resgatar Chave" onPress={() => {}} />
      </View>
    </ScrollView>
    </ImageBackground>
  );
}
}


