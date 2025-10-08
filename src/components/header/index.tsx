import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign, Feather } from "@expo/vector-icons";
import { colors } from '@/src/styles/colors';
import { DrawerActions, useNavigation } from "@react-navigation/native";

export default function Index ()  {
    const navigation = useNavigation();
    return ( 

        <View style={styles.container}>
            <TouchableOpacity onPress={() => {navigation.dispatch(DrawerActions.toggleDrawer())}}>
            <Feather name="menu" size={25} color={colors.white} />
            </TouchableOpacity>
            
            <Text style={styles.title}>Nuvix</Text>
           <AntDesign name="shoppingcart" color={colors.white} size={25} />
        </View>

     );
}

//STYLE 
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 24,
        paddingVertical: 18,
        paddingTop: 48,
        backgroundColor: colors.black,
        borderBottomWidth: 1,
        borderBottomColor: colors.gray[700],
        elevation: 4,
        shadowColor: colors.black,
        shadowRadius: 4,
    },
    icon: {
        marginRight: 16,
    },
    title: {
        color: colors.white,
        fontSize: 24,
        fontWeight: "bold",
        textShadowColor: colors.gray[800],
        textShadowOffset: { width: 0, height: 2 },
    },
});