import React from "react";
import { View, Text, TouchableOpacity, Alert, StyleSheet } from "react-native";

const Button = ({ title = "Resgatar Chave", onPress }: { title?: string; onPress?: () => void }) => {
  const handlePress = () => {
    if (onPress) {
      onPress();
    } else {
      // Alerta padrão se nenhuma função for passada
      Alert.alert("Resgatar Chave", "Chave resgatada com sucesso!", [{ text: "OK" }]);
    }
  };

  return (
    <View style={styles.container}>
      {/* Divisor */}
      <View style={styles.divider} />

      {/* Botão */}
      <TouchableOpacity
        style={styles.button}
        onPress={handlePress}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    alignItems: "center",
  },
  divider: {
    height: 1,
    backgroundColor: "#181836",
    width: "90%",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#00BFFF",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 25,
    alignItems: "center",
    shadowColor: "#00BFFF",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 6,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});
