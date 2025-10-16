import { View, FlatList } from "react-native";
import CategoryItem from "@/src/components/Categorias/Categoria_Home/categoryItem_home";
import { styles } from "./style";
import { AntDesign } from "@expo/vector-icons";

//Dados simulados das categorias "data.ts ou data.json"
const categories = [
  { id: "1", name: "Novidades Nuvix." },
  { id: "2", name: "Aventura" },
  { id: "3", name: "Ação" },
  { id: "4", name: "RPG" },
  { id: "5", name: "Terror" },
  { id: "6", name: "Estratégia" },
];

export default function CategoryList() {
  return (
    <View style={styles.container}>
      <AntDesign
        name="cloudo"
        size={24}
        color="#ffffffff"
        style={styles.cloude}
      />
      <View style={styles.line}></View>
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.flatListContent}
        renderItem={({ item, index }) => <CategoryItem name={item.name} />}
      />
    </View>
  );
}
