import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, ActivityIndicator, StyleSheet } from "react-native";
import { getGamesByCategory } from "@/src/data/categories";
import { Game } from "@/src/data/game";
import { useRouter } from "expo-router";
import { colors } from "@/src/styles/colors";

export default function NovidadesScreen() {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function loadNovidades() {
      try {
        // Pegamos todos os jogos da categoria "Novidades Nuvix."
        const novidades = await getGamesByCategory("Novidades Nuvix.");
        // Opcional: ordenar por data de atualização decrescente
        novidades.sort((a, b) => {
          return new Date(b.updatedAt || "").getTime() - new Date(a.updatedAt || "").getTime();
        });
        setGames(novidades);
      } catch (error) {
        console.error("Erro ao carregar novidades:", error);
      } finally {
        setLoading(false);
      }
    }

    loadNovidades();
  }, []);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color={colors.white} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Novidades Nuvix</Text>

      <FlatList
        data={games}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push(`/jogo/${item.id}` as any)}
          >
            <Image
              source={{ uri: item.imagemcapa }}
              style={styles.image}
              resizeMode="cover"
            />
            <View style={styles.info}>
              <Text style={styles.name}>{item.nome}</Text>
              <Text style={styles.price}>{item.preco}</Text>
            </View>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Nenhuma novidade disponível.</Text>
        }
      />
    </View>
  );
}

// ESTILOS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.black,
  },
  title: {
    color: colors.white,
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  card: {
    backgroundColor: "#1A1A1A",
    borderRadius: 12,
    marginBottom: 16,
    overflow: "hidden",
    elevation: 2,
  },
  image: {
    width: "100%",
    height: 180,
  },
  info: {
    padding: 10,
  },
  name: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "600",
  },
  price: {
    color: colors.gray[400],
    fontSize: 14,
    marginTop: 4,
  },
  emptyText: {
    color: colors.gray[500],
    textAlign: "center",
    marginTop: 50,
  },
});
