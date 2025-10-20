import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity, // Importante para os botões de aba
} from "react-native";
import { Feature, Game, getGameByIdLocal } from "@/src/data/game";
import CategoryList from "../../Categorias/Catregoria_Game/categoryList_game";
import { Fontisto, Ionicons } from "@expo/vector-icons";

// --- MOCK DE DADOS DE EXPANSÃO (APENAS PARA DEMONSTRAÇÃO) ---
interface Expansion {
  id: string;
  nome: string;
  empresa: string;
  preco: string;
  imagem: string;
}

const mockExpansions: Expansion[] = [
  {
    id: "1",
    nome: "Cult of the Lamb: Sinful Pack",
    empresa: "Devolver Digital",
    preco: "R$ 16,99",
    imagem: "https://via.placeholder.com/150/0000FF/808080?Text=SinfulPack",
  },
  {
    id: "2",
    nome: "Cult of the Lamb: Pilgrim Pack",
    empresa: "Devolver Digital",
    preco: "R$ 23,50",
    imagem: "https://via.placeholder.com/150/FF0000/FFFFFF?Text=PilgrimPack",
  },
  {
    id: "3",
    nome: "Cult of the Lamb: Cultist Pack",
    empresa: "Devolver Digital",
    preco: "R$ 11,99",
    imagem: "https://via.placeholder.com/150/00FF00/000000?Text=CultistPack",
  },
];
// -----------------------------------------------------------

import { useLocalSearchParams } from "expo-router";
import ClassificacaoEtaria from "@/src/components/classify-age";

const BANNER_HEIGHT = Dimensions.get("window").height * 0.45;
const PRIMARY_COLOR = "#45DCFF";
const BACKGROUND_COLOR = "#1A1A2E";
const TABS = {
  ABOUT: "Sobre",
  EXPANSIONS: "Expansões",
} as const;

// --- NOVO COMPONENTE: ITEM DA LISTA DE EXPANSÕES ---
const ExpansionItem: React.FC<{ expansion: Expansion }> = ({ expansion }) => (
  <View style={expansionStyles.itemContainer}>
    <Image source={{ uri: expansion.imagem }} style={expansionStyles.image} />
    <View style={expansionStyles.details}>
      <Text style={expansionStyles.title}>{expansion.nome}</Text>
      <Text style={expansionStyles.company}>{expansion.empresa}</Text>
    </View>
    <Text style={expansionStyles.price}>{expansion.preco}</Text>
  </View>
);

const ExpansionList: React.FC<{ expansions: Expansion[] }> = ({
  expansions,
}) => {
  if (!expansions || expansions.length === 0) {
    return (
      <View style={expansionStyles.emptyContainer}>
        <Text style={expansionStyles.emptyText}>
          Não há expansões disponíveis para este jogo no momento.
        </Text>
      </View>
    );
  }

  return (
    <View>
      <Text style={styles.sectionHeader}>Expansões</Text>
      {expansions.map((exp) => (
        <ExpansionItem key={exp.id} expansion={exp} />
      ))}
    </View>
  );
};
// ---------------------------------------------------

export default function GameCard() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [game, setGame] = useState<Game | undefined>(undefined);
  // NOVO ESTADO: Controla qual aba está ativa (Sobre é a padrão)
  const [activeTab, setActiveTab] = useState<
    typeof TABS.ABOUT | typeof TABS.EXPANSIONS
  >(TABS.ABOUT);

  // MOCK: Assumindo que seu objeto game não tem Expansões, usamos o mock.
  const expansions = mockExpansions;

  useEffect(() => {
    if (id) getGameByIdLocal(id).then((g) => setGame(g));
  }, [id]);

  if (!game) {
    return (
      <View
        style={[styles.loadingContainer, { backgroundColor: BACKGROUND_COLOR }]}
      >
        <Text style={styles.loadingText}>
          Carregando informações do jogo...
        </Text>
      </View>
    );
  }

  const renderIcon = (feature: Feature) => {
    const IconComponent = feature.lib === "Fontisto" ? Fontisto : Ionicons;
    return (
      <IconComponent
        name={feature.icon as any}
        size={20}
        color={PRIMARY_COLOR}
      />
    );
  };

  // Componente que renderiza o conteúdo da aba "Sobre"
  const renderAboutContent = () => (
    <>
      <View style={styles.separator} />

      {/* Destaques do Jogo (2 Jogadores, Offline, etc.) */}
      <View style={styles.featuresList}>
        {game.info?.map((feature, index) => (
          <View key={`${feature.text}-${index}`} style={styles.featureItem}>
            {renderIcon(feature)}
            <Text style={styles.featureText}>{feature.text}</Text>
          </View>
        ))}
      </View>

      {/* IMAGENS DO CARROSSEL */}
      <Text style={styles.sectionHeader}>Galeria</Text>
      <ScrollView horizontal style={styles.galleryScroll}>
        {game.imagemexemplo1 && (
          <Image
            source={{
              uri: game.imagemexemplo1,
            }}
            style={styles.screenshotImage}
          />
        )}

        {/* Imagem 2: Puxa a imagem do Game carregado */}
        {game.imagemexemplo2 && (
          <Image
            source={{
              uri: game.imagemexemplo2,
            }}
            style={styles.screenshotImage}
          />
        )}

        {/* Imagem 3: Puxa a imagem do Game carregado */}
        {game.imagemexemplo3 && (
          <Image
            source={{
              uri: game.imagemexemplo3,
            }}
            style={styles.screenshotImage}
          />
        )}
      </ScrollView>

      {/* Descrição */}
      {/* Mudei o título da seção para "Descrição" para ficar mais alinhado à imagem de exemplo */}
      {game.descricao && (
        <View style={styles.descriptionContainer}>
          <Text style={styles.sectionHeader}>Descrição</Text>
          <Text style={styles.descriptionText}>{game.descricao}</Text>
        </View>
      )}
    </>
  );

  // Componente que renderiza o conteúdo da aba "Expansões"
  const renderExpansionContent = () => (
    <ExpansionList expansions={expansions} />
  );

  // Função que renderiza os botões de Sobra/Expansões/Resgatar Chave
  const renderNavButtons = () => (
    <View style={styles.navButtonsContainer}>
      {/* Botão SOBRE */}
      <TouchableOpacity
        style={[
          styles.navButton,
          activeTab === TABS.ABOUT && styles.navButtonActive,
        ]}
        onPress={() => setActiveTab(TABS.ABOUT)}
      >
        <Text
          style={
            activeTab === TABS.ABOUT
              ? styles.navButtonTextActive
              : styles.navButtonText
          }
        >
          {TABS.ABOUT}
        </Text>
      </TouchableOpacity>

      {/* Botão EXPANSÕES */}
      <TouchableOpacity
        style={[
          styles.navButton,
          activeTab === TABS.EXPANSIONS && styles.navButtonActive,
        ]}
        onPress={() => setActiveTab(TABS.EXPANSIONS)}
      >
        <Text
          style={
            activeTab === TABS.EXPANSIONS
              ? styles.navButtonTextActive
              : styles.navButtonText
          }
        >
          {TABS.EXPANSIONS}
        </Text>
      </TouchableOpacity>

      {/* Preço - Movemos ele para aqui para ficar alinhado à direita dos botões */}
      <View style={styles.priceContainerRight}>
        <Text style={styles.priceRight}>{game.preco || "R$0,00"}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.screen}>
      {/* 1. Imagem de Fundo (Banner Fixo) */}
      <Image
        source={{
          uri: game.imagembanner || game.imagemcapa || game.imagem,
        }}
        style={styles.bannerImage}
      />
      {/* Botões Voltar/Compartilhar (no topo) */}
      <View style={styles.topBar}>
        <Ionicons
          name="arrow-back-circle"
          size={36}
          color="#fff"
          style={styles.iconShadow}
          onPress={() => {
            /* Handle Back */
          }}
        />
        <Ionicons
          name="share-social"
          size={30}
          color="#fff"
          style={styles.iconShadow}
          onPress={() => {
            /* Handle Share */
          }}
        />
      </View>

      {/* 2. Conteúdo ROLÁVEL */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={{ height: BANNER_HEIGHT }} />

        {/* 3. Wrapper do Conteúdo (com fundo escuro) */}
        <View style={styles.contentWrapper}>
          <View style={styles.container}>
            {/* Título, Empresa e Classificação */}
            <View style={styles.headerInfo}>
              <View style={styles.mainDetails}>
                <Text style={styles.gameTitle}>
                  {game.nome || "Título Desconhecido"}
                </Text>
                <Text style={styles.empresa}>
                  {game.empresa || "Estúdio Desconhecido"}
                </Text>

                {/* Classificação Etária e Descrição da Classificação */}
                {game.classificacao && (
                  <View style={styles.classificacaoRow}>
                    <ClassificacaoEtaria
                      classificacao={game.classificacao}
                      tamanho="pequeno"
                    />
                  </View>
                )}
              </View>
            </View>

            {/* Botões de Navegação (Sobre/Expansões) e Preço */}
            {renderNavButtons()}

            {/* Lista de Categorias (Gêneros) - Visível no SOBRE e no EXPANSÕES */}
            <View style={styles.sectionMargin}>
              <CategoryList categories={game.categorias ?? []} />
            </View>

            {/* RENDERIZAÇÃO CONDICIONAL */}
            {activeTab === TABS.ABOUT
              ? renderAboutContent()
              : renderExpansionContent()}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

// --- ESTILOS PRINCIPAIS ---
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  loadingText: {
    color: "#fff",
    fontSize: 16,
  },
  bannerImage: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: BANNER_HEIGHT,
    resizeMode: "cover",
  },
  topBar: {
    position: "absolute",
    top: 50,
    left: 20,
    right: 20,
    zIndex: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconShadow: {
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  scrollContent: {
    paddingBottom: 100,
  },
  contentWrapper: {
    backgroundColor: BACKGROUND_COLOR,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -30,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  container: {
    // Conteúdo
  },
  // --- HEADER INFO (Título, Empresa, Classificação) ---
  headerInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  mainDetails: {
    flex: 1,
  },
  gameTitle: {
    fontSize: 28,
    fontWeight: "900",
    color: "#ffffff",
  },
  empresa: {
    fontSize: 16,
    color: "#B0B0C0",
    fontWeight: "400",
    marginBottom: 10,
  },
  classificacaoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  classificacaoText: {
    fontSize: 12,
    color: "#B0B0C0",
    marginLeft: 8,
  },
  // --- Botões de Navegação (Sobre/Expansões) e Preço ---
  navButtonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  navButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "transparent", // Transparente por padrão, a ativa tem cor
  },
  navButtonActive: {
    backgroundColor: PRIMARY_COLOR,
    borderColor: PRIMARY_COLOR,
  },
  navButtonText: {
    color: "#fff",
    fontWeight: "600",
  },
  navButtonTextActive: {
    color: BACKGROUND_COLOR,
    fontWeight: "700",
  },
  priceContainerRight: {
    marginLeft: "auto", // Empurra para a direita
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignSelf: "center",
  },
  priceRight: {
    fontSize: 24,
    color: PRIMARY_COLOR,
    fontWeight: "bold",
  },
  // --- Seções Gerais ---
  sectionMargin: {
    marginVertical: 10,
  },
  separator: {
    height: 1,
    backgroundColor: "#3A3A5A",
    marginVertical: 15,
  },
  sectionHeader: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "700",
    marginTop: 15,
    marginBottom: 10,
  },
  // --- Destaques/Features (Aba Sobre) ---
  featuresList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    paddingRight: 15,
    width: "50%",
  },
  featureText: {
    color: "#fff",
    fontSize: 15,
    marginLeft: 10,
    flexShrink: 1,
  },
  // --- Galeria de Imagens (Aba Sobre) ---
  galleryScroll: {
    marginVertical: 10,
  },
  screenshotImage: {
    width: 350,
    height: 200,
    borderRadius: 3,
    marginRight: 5,
    resizeMode: "cover",
  },
  // --- Descrição (Aba Sobre) ---
  descriptionContainer: {
    marginTop: 15,
    marginBottom: 20,
  },
  descriptionText: {
    color: "#E0E0E0",
    fontSize: 15,
    lineHeight: 22,
  },
  // --- Botão de Ação Fixo Inferior ---
  bottomActionButtonContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: PRIMARY_COLOR,
    padding: 20,
    alignItems: "center",
  },
  bottomActionButtonText: {
    color: BACKGROUND_COLOR,
    fontSize: 18,
    fontWeight: "bold",
  },
});

// --- ESTILOS DE EXPANSÕES (Novo) ---
const expansionStyles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#3A3A5A",
  },
  image: {
    width: 80,
    height: 50,
    borderRadius: 4,
    marginRight: 15,
    resizeMode: "cover",
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
  company: {
    fontSize: 13,
    color: "#B0B0C0",
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: PRIMARY_COLOR,
  },
  emptyContainer: {
    paddingVertical: 40,
    alignItems: "center",
  },
  emptyText: {
    color: "#B0B0C0",
    fontSize: 16,
    textAlign: "center",
  },
});
