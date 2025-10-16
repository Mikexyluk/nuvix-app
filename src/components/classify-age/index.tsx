import React from "react";
import { View, Text, StyleSheet } from "react-native";

type AgeRating = "L" | "10" | "12" | "14" | "16" | "18" | string;

interface Props {
  classificacao?: AgeRating;
}

export default function ClassificacaoEtaria({ classificacao = "L" }: Props) {
  const cores = {
    L: "#00A859", // verde
    10: "#F7C600", // amarelo
    12: "#F28C00", // laranja
    14: "#EA5B0C", // laranja escuro
    16: "#E41C13", // vermelho
    18: "#000000", // preto
  };

  const backgroundColor = cores[classificacao as keyof typeof cores] || "#999";
  const textoCor = classificacao === "18" ? "#FFF" : "#000";

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={[styles.texto, { color: textoCor }]}>{classificacao}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
    alignSelf: "flex-start",
    minWidth: 35,
    alignItems: "center",
  },
  texto: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
