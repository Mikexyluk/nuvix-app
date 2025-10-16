import { Text, View, Image, StyleSheet } from "react-native";
import React from "react";

type ProductItemProps = {
  image: string;
  name: string;
  price: number;
  onPress?: () => void;
};

export default function ProductItem({
  image,
  name,
  price,
  onPress,
}: ProductItemProps) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <View>
        <View style={styles.content}>
          <Text style={styles.name}>Lies of P</Text>
          <Text style={styles.price}>RS249.90</Text>

          <View style={styles.ratingContainer}>
            <Text style={styles.ratingLabel}>NETDWIZ</Text>
            <View style={styles.rating}>
              <Text style={styles.ratingText}>4.8</Text>
            </View>
          </View>

          <View style={styles.tagsContainer}>
            <View style={styles.tag}>
              <Text style={styles.tagText}>Gentelite</Text>
            </View>
            <View style={styles.tag}>
              <Text style={styles.tagText}>AFAO</Text>
            </View>
          </View>

          <Text style={styles.footer}>Tartoisia Sombran</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    backgroundColor:"#000000ff",
    borderRadius: 15,
    margin: 8,
  },
  image: {
    width: 64,
    height: 64,
    marginRight: 10,
    borderRadius: 8,
  },
  content: {
    padding: 5,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
    fontFamily: "Roboto",
  },
  price: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#4ecdc4",
    marginBottom: 8,
    fontFamily: "Roboto",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  ratingLabel: {
    fontSize: 10,
    color: "#8a8a8a",
    marginRight: 12,
    fontFamily: "Roboto",
  },
  rating: {
    backgroundColor: "#ff9e1b",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  ratingText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 10,
    fontFamily: "Roboto",
  },
  tagsContainer: {
    flexDirection: "row",
  },
  tag: {
    backgroundColor: "#4a4a6e",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 8,
  },
  tagText: {
    color: "#ffffff",
    fontSize: 12,
    fontFamily: "Roboto",
  },
  footer: {
    fontSize: 14,
    color: "#8a8a8a",
    fontStyle: "italic",
    fontFamily: "Roboto",
  },
});
