import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";

export default function CatalogoJogos() {
  const router = useRouter();

  const jogos = [
    {
      id: "1",
      nome: "Cult of the Lamb",
      preco: "R$64,95",
      imagem:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTrsnUTD9XNANFMBbn3q4LXldQQ73D2RSc_06PTvjDp5mkgkpBX3VlE9SDM3ryJpuCoDw&usqp=CAU",
    },
    {
      id: "2",
      nome: "Lies of P",
      preco: "R$249,90",
      imagem:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwGYeEJwD3FIwVxbOouIugjzLryJ4GPPxTQ2Juvii0kFI0BOHOYkRR60kntuVTFmrfE2w&usqp=CAU",
    },
    {
      id: "3",
      nome: "Silent Hill f",
      preco: "R$349,90",
      imagem:
        "https://preview.redd.it/silent-hill-f-key-art-revealed-v0-m5stys4c6joe1.jpeg?auto=webp&s=dab5db9489c3e904b65cc1da5ea220a88bbb5c94",
    },
    {
      id: "4",
      nome: "Overcooked 2",
      preco: "R$59,90",
      imagem:
        "https://external-preview.redd.it/QJm0EukzER02okLQTv_2n9x8mWLyBlUprx3-a10cWQY.jpg?width=1080&crop=smart&auto=webp&s=4522291b4a40a63a271d2304ad7e1be932245da1",
    },
    {
      id: "5",
      nome: "Little Nightmares III",
      preco: "R$183,03",
      imagem:
        "https://www.adrenaline.com.br/wp-content/uploads/2023/08/little-nightmares-3-capa.jpg",
    },
    {
      id: "6",
      nome: "The Last of Us Remastered",
      preco: "R$199,90",
      imagem:
        "https://www.adrenaline.com.br/wp-content/uploads/2025/01/the-last-of-us-parte-ii-remastered-pc-cover-300x300.jpg",
    },
    {
      id: "7",
      nome: "Hollow Knight",
      preco: "R$46,99",
      imagem:
        "https://dw0jruhdg6fis.cloudfront.net/producao/29091118/G/hollow_knight_voidheart_edition_xbox_one_front_cover.jpg",
    },
    {
      id: "8",
      nome: "Honkai Star Rail",
      preco: "R$100,00",
      imagem:
        "https://assetsio.gnwcdn.com/Honkai-Star-Rail-2048x1152.jpeg?width=1200&height=1200&fit=crop&quality=100&format=png&enable=upscale&auto=webp",
    },
  ];

  type Jogo = {
    id: string;
    nome: string;
    preco: string;
    imagem: string;
  };

  const renderItem = ({ item }: { item: Jogo }) => (
    <TouchableOpacity 
    onPress={() => 
    router.push(`../jogos/${item.id}`)} 
    style={styles.card}>

  <Image source={{ uri: item.imagem }} style={styles.imagem} />

  <Text style={styles.preco}>{item.preco}</Text>
  <Text style={styles.nome}>{item.nome}</Text>

</TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={jogos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.linha}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 90 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00111A",
    paddingHorizontal: 10,
    paddingTop: 40,
  },
  linha: {
    justifyContent: "space-between",
  },
  card: {
    width: "49%",
    marginBottom: 10,
  },
  imagem: {
    width: "100%",
    height: 190,
    borderRadius: 6,
  },
  preco: {
    color: "#00BFFF",
    fontSize: 15,
    fontWeight: "600",
    textAlign: "left",
    marginTop: 5,
    marginLeft: 4,
  },
  nome: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    marginLeft: 4,
  },
});
