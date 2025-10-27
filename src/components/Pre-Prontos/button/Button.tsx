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

// 1. Definição da Interface (Props) para o componente
interface ButtonProps {
  title?: string;
  onPress?: () => void;
}

const PRIMARY_COLOR = "#45DCFF";
const BACKGROUND_COLOR = "#1A1A2E";

const Button: React.FC<ButtonProps> = ({
  title = "Resgatar Chave",
  onPress,
}) => {
  const handlePress = () => {
    if (onPress) {
      onPress();
    } else {
      Alert.alert(title, "Ação padrão executada!", [{ text: "OK" }]);
    }
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handlePress}
      activeOpacity={0.7}
    >
      <LinearGradient
        colors={[PRIMARY_COLOR, "#00AABB"]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Button;

// --- ESTILOS ---
const styles = StyleSheet.create({
  container: {
    width: "60%",
    marginVertical: 10,
    borderRadius: 40,
    overflow: "hidden",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 40,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
