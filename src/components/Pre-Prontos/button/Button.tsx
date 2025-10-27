import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  StyleSheet,
  GestureResponderEvent,
} from "react-native";

const Button = ({
  title = "Resgatar Chave",
  onPress,
}: {
  title?: string;
  onPress?: () => void;
}) => {
  const handlePress = () => {
    if (onPress) {
      onPress();
    } else {
      // Alerta padrão se nenhuma função for passada
      Alert.alert("Resgatar Chave", "Chave resgatada com sucesso!", [
        { text: "OK" },
      ]);
    }
  };

  function handleLogin(event: GestureResponderEvent): void {
    throw new Error("Function not implemented.");
  }

  return (
    <View style={styles.container}>
      {/* Divisor */}
      <TouchableOpacity
        onPress={handleLogin}
        style={{ borderRadius: 40, overflow: "hidden", marginTop: 10 }}
      >
        <LinearGradient
          colors={["#019EC2", "#45DCFF"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Iniciar Sessão</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    //NADA AINDA
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 40,
    marginTop: 4,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
