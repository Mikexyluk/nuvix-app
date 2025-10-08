import { View, Text, FlatList } from "react-native";
import ProductItem from "../productItem";
import Title from "../title";


type Product = {
    id: string;
    name: string;
    price: number;
    category: string;
    image: string;
    description: string;
    qtde: number;
};

export const products: Product[] = [
    {
        id: "1",
        name: "Dr.ratiozin",
        price: 29.99,
        category: "medico",
        image: "https://i.pinimg.com/736x/50/80/dc/5080dcab49dcf889d65c13e0816c21a7.jpg",
        description: "O Dr. Ratiozin é um personagem fictício que representa um médico amigável e confiável, especializado em cuidados de saúde para todas as idades. Com um sorriso acolhedor e uma abordagem compassiva, ele está sempre pronto para ajudar seus pacientes a alcançarem o bem-estar físico e mental. Seja para consultas de rotina, aconselhamento sobre estilo de vida saudável ou tratamento de doenças, o Dr. Ratiozin é a escolha ideal para quem busca um atendimento médico de qualidade e humanizado.",
        qtde: 1
    },
    {
        id: "2",
        name: "Aventurinha",
        price: 49.99,
        category: "aventura",
        image: "https://i.pinimg.com/736x/d2/34/79/d23479c6112fe240c977be2f4004051d.jpg",
        description: "Aventurinha é um personagem fictício que representa uma criança curiosa e cheia de energia, sempre pronta para explorar o mundo ao seu redor. Com um espírito aventureiro e uma imaginação fértil, Aventurinha adora descobrir novos lugares, fazer amigos e aprender coisas novas. Seja escalando árvores, explorando trilhas ou embarcando em viagens imaginárias, Aventurinha é o companheiro perfeito para todas as aventuras da infância.",
        qtde: 1
    },
    {
        id: "3",
        name: "Yanqinho",
        price: 19.99,
        category: "brincalhão",
        image: "https://i.pinimg.com/736x/92/28/90/922890883f4fd8fdb8f5cf26fc36602a.jpg",
        description: "Yanqinho é um personagem fictício que representa uma criança alegre e brincalhona, sempre cheia de energia e entusiasmo. Com um sorriso contagiante e uma personalidade cativante, Yanqinho adora fazer novos amigos, explorar o mundo ao seu redor e se divertir com atividades criativas. Seja correndo pelo parque, brincando de esconde-esconde ou inventando histórias fantásticas, Yanqinho é o companheiro perfeito para todas as aventuras da infância.",
        qtde: 1
    },
    {
        id: "4",
        name: "yunli",
        category: "sonhador",
        price: 39.99,
        image: "https://i.pinimg.com/736x/2c/d7/8e/2cd78edefe89713e6b1af82733fb40e8.jpg",
        description: "Yunli é um personagem fictício que representa uma criança sonhadora e cheia de imaginação, sempre em busca de novas aventuras e descobertas. Com um espírito livre e uma curiosidade insaciável, Yunli adora explorar o mundo ao seu redor, fazer novos amigos e aprender coisas novas. Seja voando em sonhos mágicos, navegando por mares desconhecidos ou desbravando florestas encantadas, Yunli é o companheiro perfeito para todas as jornadas da infância.",
        qtde: 1
    }
];


export default function ProductList() {


    return (
        <View>
            <Title word={"Promoção"}/>
            <FlatList
                data={products}
                horizontal 
                showsHorizontalScrollIndicator={false} 
                keyExtractor={(item) => item.id} 
                renderItem={({ item }) => (
                <ProductItem 
                id={item.id}
                name={item.name} 
                price={item.price} 
                category={item.category}
                urlImage={item.image} 
                description={item.description}
                qtde={item.qtde}
                />
            )} 
                />
        </View>
    );
    }