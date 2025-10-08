import {View , StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { colors } from '@/src/styles/colors';
import { useRouter } from 'expo-router';

interface ProductProps {
  id: string;
  name: string;
  urlImage: string;
  price: string | number;
  category: string;
  description: string;
  qtde: number;
}


const ProductItem: React.FC<ProductProps> = ({ id, name, urlImage , price }) => {
    const router = useRouter();
    // ESSE COMPONENTE É USADO PARA EXIBIR UM TÍTULO PERSONALIZADO

    return (
      <View style={styles.container}>
        <TouchableOpacity
            style={styles.productitem}
              >
            <Image source={{uri: urlImage}} style= {styles.image} />
            <Text>{name}</Text>
            <Text>R$ {price}</Text>
          </TouchableOpacity>
      </View>
    )

  }


export default ProductItem;

const styles = StyleSheet.create({
 container: {
    flex: 1,
  },
  productitem: {
    padding: 12,
    backgroundColor: colors.gray[200],
    borderRadius: 12,
    marginRight: 12,
  },
   image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
});


 