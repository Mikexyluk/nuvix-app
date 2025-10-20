import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  ImageBackground,
} from "react-native";
import { styles } from "./style";

export default function ResgatePosCompra() {
  const [chaveResgatada, setChaveResgatada] = useState(false);

  // Exemplo de dados recebidos da compra
  const compra = {
    jogo: {
      nome: "Cyberpunk 2077",
      descricao:
        "Um RPG de ação futurista ambientado em Night City, uma megalópole movida por poder, glamour e modificações corporais.",
    },
    preco: 199.99,
    desconto: 20, // em porcentagem
    metodoPagamento: "Pix",
    chave: "CYB-2077-XZ91-AB32",
  };

  const total = (compra.preco * (1 - compra.desconto / 100)).toFixed(2);

  const handleResgatar = () => {
    setChaveResgatada(true);
    Alert.alert("Chave Resgatada!", `Sua chave: ${compra.chave}`);
  };

  return (
    <ImageBackground
      style={styles.container}
      source={require("@/assets/images/wallpaper-base.png")}
    >
      {/* IMAGEM DO JOGO */}
      <View style={styles.containerImage}>
        <Image
          source={{
            uri: "https://www.adrenaline.com.br/wp-content/uploads/2023/12/cyberpunk-2077-ultimate-edition-912x569.jpg",
          }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      {/* NOME E DESCRIÇÃO */}
      <Text style={styles.title}>{compra.jogo.nome}</Text>

      <Text style={styles.description}>{compra.jogo.descricao}</Text>

      {/* DETALHES DE PAGAMENTO */}
      <View style={styles.containerTotal}>
        <Text style={styles.subtitulo}>Detalhes da Compra</Text>

        <View style={styles.detalhes}>
          <Text style={styles.textoFade}>Preço original:</Text>
          <Text style={styles.textoNormal}>R$ {compra.preco.toFixed(2)}</Text>
        </View>

        <View style={styles.detalhes}>
          <Text style={styles.textoFade}>Desconto:</Text>
          <Text style={styles.textoDesconto}>{compra.desconto}%</Text>
        </View>

        <View style={styles.detalhes}>
          <Text style={styles.textoFade}>Método de Pagamento:</Text>
          <Text style={styles.textoNormal}>{compra.metodoPagamento}</Text>
        </View>

        <View style={styles.total}>
          <Text style={styles.textoBold}>Total Pago:</Text>
          <Text style={styles.textoPreco}>R$ {total}</Text>
        </View>
      </View>

      {/* BOTÃO DE RESGATAR */}
      <TouchableOpacity onPress={handleResgatar} style={styles.botaoResgate}>
        <Text style={styles.textoBotao}>
          {chaveResgatada ? "Chave Resgatada" : "Resgatar Chave"}
        </Text>
      </TouchableOpacity>

      {/* EXIBE CHAVE QUANDO RESGATADA */}
      {chaveResgatada && (
        <View style={styles.containerChave}>
          <Text style={styles.textoChave}>Sua chave:</Text>
          <Text selectable style={styles.chave}>
            {compra.chave}
          </Text>
        </View>
      )}
    </ImageBackground>
  );
}
