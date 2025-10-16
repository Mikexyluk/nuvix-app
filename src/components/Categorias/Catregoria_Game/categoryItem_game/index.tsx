import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View , StyleSheet} from "react-native";

interface CategoryProps {
  name: string;
}

const CategoryItem: React.FC<CategoryProps> = ({ name }) => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.push("/")}>
        <Text style={styles.categoryitem}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
  },
  categoryitem: {
    padding: 15,
    borderRadius: 25,
    marginRight: 15,
    backgroundColor: "#00C8F6",
    color: "#ffff",
  },
});
