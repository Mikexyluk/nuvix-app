import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function Usuario() {
  const [email, setEmail] = useState(""); // Armazena email do usuário
  const [username, setUsername] = useState(""); // Nome de usuário exibido
  const router = useRouter(); // Hook para navegação entre telas

  useEffect(() => {
    const carregarEmail = async () => {
      try {
        const emailSalvo = await AsyncStorage.getItem("email"); // PEGA O EMAIL CASO SALVO NO DISPOSITIVO
        if (emailSalvo) {
          setEmail(emailSalvo);
          setUsername(emailSalvo.split("@")[0]); // PEGA O EMAIL DA PAGINA ANTERIOR POR @
        }
      } catch (error) {
        console.log("Erro ao carregar email:", error);
      }
    };
    carregarEmail(); // CARREGA O EMAIL
  }, []);

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("email"); // REMOVE O EMAIL QUE SALVOU LÁ NO LOGIN
      router.push("/login"); // REDIRECIONA LA PRO LOGIN
    } catch (error) {
      console.error("Erro ao deslogar:", error);
      Alert.alert("Erro", "Não foi possível sair no momento.");
    }
  };

  const suporte = [
    { label: "Central de Denúncias e Violação", route: "/denuncias" },
    { label: "Gerenciamento de Conta", route: "/conta" },
    { label: "Central de Ajuda", route: "/ajuda" },
    { label: "Política de Privacidade", route: "/privacidade" },
    { label: "Sair" }, // ESSE É O handleLogout E FAZ SAIR DO PERFIL E VOLTAR Á PRA HOME
  ];

  return (
    <ScrollView style={styles.container}>
      {/* FOTINHA DO USUARIO */}
      <View style={styles.header}>
        <Image
          source={{
            uri: "https://i.pinimg.com/736x/36/65/62/3665625c333d601c5130563610333bb1.jpg",
          }}
          style={styles.avatar} // ESTILIZAÇÃO DA IMAGEM DO USUARIO
        />
        <Text style={styles.username}>{username}</Text> {/* EXIBE NOME DO USUARIO */}
        <Text style={styles.member}>Membro desde 2025</Text>
      </View>

      {/* MINHA CARTEIRA */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>MINHA CARTEIRA.</Text>
        <View style={styles.walletRow}>
          {/* NuvixPay */}
          <TouchableOpacity
            style={styles.walletItem}
            onPress={() => router.push("/")} // Redireciona para a página da carteira
            activeOpacity={0.8}
          >
            <MaterialIcons name="account-balance-wallet" size={22} color="#fff" />
            <Text style={styles.walletText}>NuvixPay</Text>
            <Text style={styles.subText}>Ativar</Text>
          </TouchableOpacity>

          {/* Vale Presente */}
          <TouchableOpacity
            style={styles.walletItem}
            onPress={() => router.push("/")} // Redireciona para resgate de códigos
            activeOpacity={0.8}
          >
            <MaterialIcons name="card-giftcard" size={22} color="#fff" />
            <Text style={styles.walletText}>Vale Presente</Text>
            <Text style={styles.subText}>Códigos de resgate</Text>
          </TouchableOpacity>

          {/* Avaliações */}
          <TouchableOpacity
            style={styles.walletItem}
            onPress={() => router.push("/")} // Redireciona para histórico de avaliações
            activeOpacity={0.8}
          >
            <Ionicons name="star-outline" size={22} color="#fff" />
            <Text style={styles.walletText}>Avaliações</Text>
            <Text style={styles.subText}>Histórico de Avaliação</Text>
          </TouchableOpacity>

          {/* Cupons */}
          <TouchableOpacity
            style={styles.walletItem}
            onPress={() => router.push("/")} // Redireciona para página de cupons
            activeOpacity={0.8}
          >
            <Ionicons name="pricetags-outline" size={22} color="#fff" />
            <Text style={styles.walletText}>Cupons</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* ATIVIDADES DA CONTA */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>ATIVIDADES DA CONTA.</Text>
        <View style={styles.gridRow}>
          {/* Comprar Novamente */}
          <TouchableOpacity
            style={styles.gridItem}
            onPress={() => router.push("/")} // Redireciona para compras anteriores
            activeOpacity={0.8}
          >
            <Ionicons name="bag-outline" size={22} color="#fff" />
            <Text style={styles.gridText}>Comprar Novamente</Text>
          </TouchableOpacity>

          {/* Meus Favoritos */}
          <TouchableOpacity
            style={styles.gridItem}
            onPress={() => router.push("/")} // Redireciona para lista de favoritos
            activeOpacity={0.8}
          >
            <Ionicons name="heart-outline" size={22} color="#fff" />
            <Text style={styles.gridText}>Meus Favoritos</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.gridRow}>
          {/* Meus Pagamentos */}
          <TouchableOpacity
            style={styles.gridItem}
            onPress={() => router.push("/")} // Redireciona para métodos de pagamento
            activeOpacity={0.8}
          >
            <Ionicons name="card-outline" size={22} color="#fff" />
            <Text style={styles.gridText}>Meus Pagamentos</Text>
          </TouchableOpacity>

          {/* Históricos de Compras */}
          <TouchableOpacity
            style={styles.gridItem}
            onPress={() => router.push("/")} // Redireciona para histórico de pedidos
            activeOpacity={0.8}
          >
            <Ionicons name="time-outline" size={22} color="#fff" />
            <Text style={styles.gridText}>Históricos de Compras</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* SUPORTE DA CONTA */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>SUPORTE DA CONTA.</Text>
        {suporte.map((it, i) => (
          <TouchableOpacity
            key={i}
            style={styles.supportItem}
            onPress={() => {
              if (it.label === "Sair") {
                handleLogout(); // Se clicar em "Sair", desloga
              } else if (it.route) {
                router.push("/login"); // Caso contrário, redireciona (pode ser ajustado para it.route)
              }
            }}
            activeOpacity={0.8}
          >
            <Text style={styles.supportText}>{it.label}</Text>
            <Ionicons name="chevron-forward" size={18} color="#aaa" />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

// ESTILOS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0d1117", // Fundo principal da tela
  },
  header: {
    alignItems: "center",
    marginTop: 30,
    marginBottom: 20,
  },
  avatar: {
    width: 110,
    height: 110,
    marginTop: 20,
    borderRadius: 55, // Faz círculo
    borderWidth: 3,
    borderColor: "#019EC2",
  },
  username: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 10,
  },
  member: {
    fontSize: 14,
    color: "#aaa",
    marginTop: 2,
  },
  section: {
    marginTop: 15,
    paddingHorizontal: 15,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#9ca3af",
    marginBottom: 10,
  },
  walletRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  walletItem: {
    flex: 0.22, // Espaçamento proporcional entre itens
    alignItems: "center",
    padding: 10,
  },
  walletText: {
    color: "#fff",
    marginTop: 5,
    fontSize: 12,
    fontWeight: "bold",
  },
  subText: {
    color: "#aaa",
    fontSize: 11,
    textAlign: "center",
    marginTop: 2,
  },
  gridRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  gridItem: {
    backgroundColor: "#111827",
    flex: 1,
    margin: 5,
    borderRadius: 8,
    padding: 15,
    alignItems: "flex-start",
  },
  gridText: {
    color: "#fff",
    fontSize: 14,
    marginTop: 8,
  },
  supportItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#111827",
    padding: 15,
    borderRadius: 8,
    marginVertical: 5,
  },
  supportText: {
    color: "#fff",
    fontSize: 15,
  },
});
