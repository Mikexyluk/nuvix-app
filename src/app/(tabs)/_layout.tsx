import { Tabs } from "expo-router";
import { colors } from "../../styles/colors";
import { AntDesign as AntiDesigner, Feather, FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import Header from "@/src/components/header";
 
export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        header: () => <Header />,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.white,
        tabBarInactiveTintColor: colors.gray[600],
        tabBarStyle: {
          backgroundColor: colors.black,
          borderTopColor: colors.gray[800],
          paddingTop: 10,
        },
      }}
    >
      {/* ICONES LA EMBAIXO */}
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntiDesigner name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="catalogo_geral"
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="gamepad" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="shopping-bag" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntiDesigner name="user" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}