import React from "react";
import { View, Text } from "react-native";
import { colors } from "../../styles/colors";



export default function index() {
  return (
    <>
 
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.gray[700]}} >
        <Text style={{ color: colors.white }}>Carrinho</Text>
    </View>
    </>
  )
}
