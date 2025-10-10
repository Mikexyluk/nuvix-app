import { FlatList, View, StyleSheet } from "react-native";
import CategoryItem from "@/src/components/categorias/categoryItem";

// Dados simulados das categorias "data.ts ou data.json"
export const gategories = [
  { id: "1", name: "Estratégia" },
  { id: "2", name: "Aventura" },
  { id: "3", name: "Ação" },
  { id: "4", name: "Casual" },
];

export default function CategoryList() {
  return (
    <View>
      <FlatList
        data={gategories} //Onde os dados são passados como array na props data
        horizontal //Para deixar a lista horizontal
        showsHorizontalScrollIndicator={false} //Para definir uma chave unica para cada item
        keyExtractor={(item) => item.id} //Para renderizar cada item da lista
        renderItem={({ item }) => <CategoryItem name={item.name} />} //Para renderizar cada item da lista e o nome da categoria como prop para o componente CategoryItem
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 525,
  },
  image: {
    width: 350,
    height: 150,
    resizeMode: "cover",
    borderRadius: 8,
    borderWidth: 1,
  },
});
