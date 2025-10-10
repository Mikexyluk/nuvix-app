import { Tabs } from "expo-router";
import { colors } from "../../styles/colors";
import { AntDesign as AntiDesigner, Feather, FontAwesome6, MaterialIcons } from "@expo/vector-icons";
 
export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false, //ESCONDE O CABEÇALHO LA EM CIMA
        tabBarShowLabel: false, // MOSTRA O TEXTO ABAIXO DO ÍCONE
        tabBarActiveTintColor: colors.white, // COR DO TEXTO ATIVO
        tabBarInactiveTintColor: colors.gray[600], // COR DO TEXTO INATIVO
        tabBarStyle: { // ESTILO DA BARRA DE NAVEGAÇÃO
          backgroundColor: colors.black, // COR DE FUNDO DA BARRA
          borderTopColor: colors.gray[800], // COR DA BORDAS DA BARRA
          paddingTop: 10,
        },
      }}
    >
        {/* PARA DEFINIR A ORDEM MOSTRADA */}
        <Tabs.Screen name="home" options={{
            tabBarIcon:({color, size}) => (
                //ACHAR OS ICONES NO EXPO ICONS
                <AntiDesigner name="home" color={color} size={size} />
            ),
        }}/>
        <Tabs.Screen name="catalogo" options={{
            tabBarIcon:({color, size}) => (
                //ACHAR OS ICONES NO EXPO ICONS
                <FontAwesome6 name="gamepad" size={size} color={color} />
            ),
        }}/>
        <Tabs.Screen name="cart" options={{
            tabBarIcon:({color, size}) => (
                //ACHAR OS ICONES NO EXPO ICONS
                 <Feather name="shopping-bag" size={size} color={color} />
                
            ),
        }}/>
        <Tabs.Screen name="profile" options={{
            tabBarIcon:({color, size}) => (
                //ACHAR OS ICONES NO EXPO ICONS
                <AntiDesigner name="user" color={color} size={size} />
            ),
        }}/>
    </Tabs>
  );
}