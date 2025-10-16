import { FlatList } from "react-native";
import React from "react";
import ProductItem from "../productItem";
import { styles } from "./style";

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
};

export const products: Product[] = [
  {
    id: "1",
    name: "Silk Song",
    price: 60.0,
    image:
      "https://p2.trrsf.com/image/fget/cf/1200/1200/middle/images.terra.com/2025/09/01/hksilk-vf9p80c91839.jpg",
  },
  {
    id: "2",
    name: "Cult of the Lamb",
    price: 70.0,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbRjoIkvNo7BtH2BwR5blH6WnDlZvWf0bRtQ&s",
  },
  {
    id: "3",
    name: "Peak",
    price: 100.0,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_OQaRA_vBnifKTyr-rObNN160l7VWGCymZQ&s",
  },
  {
    id: "1",
    name: "Silk Song",
    price: 60.0,
    image:
      "https://p2.trrsf.com/image/fget/cf/1200/1200/middle/images.terra.com/2025/09/01/hksilk-vf9p80c91839.jpg",
  },
  {
    id: "2",
    name: "Cult of the Lamb",
    price: 70.0,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbRjoIkvNo7BtH2BwR5blH6WnDlZvWf0bRtQ&s",
  },
  {
    id: "3",
    name: "Peak",
    price: 100.0,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_OQaRA_vBnifKTyr-rObNN160l7VWGCymZQ&s",
  },
];

export default function ProductItemList() {
  return (
    <FlatList
      data={products}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <ProductItem image={item.image} name={item.name} price={item.price} />
      )}
    />
  );
}
