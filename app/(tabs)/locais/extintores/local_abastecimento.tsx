import {ParallaxScrollView} from "@/components/ParallaxScrollView";
import {Image, TouchableOpacity, View} from "react-native";
import {useRouter} from "expo-router";
import {ThemedButtonFixed, ThemedButtonSpacedIcon} from "@/components/ThemedButton";

export default function LocalAbastecimentoScreen() {
    const router = useRouter();

    return (
        <ParallaxScrollView
            headerBackgroundColor={"#13D284"}
            textComponent={"Local (Abastecimento)"}
            nameIcon={""}
            component={
                <TouchableOpacity onPress={() => router.back()}>
                    <View>
                        <Image style={{ width: 50, height: 50, top: -7 }} source={require("../../../../assets/images/back-icon.png")}></Image>
                    </View>
                </TouchableOpacity>
            }
            headerTopPosition={-80}>
            <ThemedButtonSpacedIcon
                id={"abastecimento"}
                title={"Abastecimento"}
                titleColorful={{
                    color: "",
                    content: ""
                }}
                height={85}
                bgColor={"#2E303F"}
                color={"white"}
                radius={10}
                fontSize={24}
                onPress={() => {}}>
                <Image style={{ width: 30, height: 30 }} source={require("../../../../assets/images/simbolo-unchecked.png")}></Image>
            </ThemedButtonSpacedIcon>
            <ThemedButtonSpacedIcon
                id={"pista-descarregamento"}
                title={"Pista de Descarregamento"}
                titleColorful={{
                    color: "",
                    content: ""
                }}
                height={85}
                bgColor={"#2E303F"}
                color={"white"}
                radius={10}
                fontSize={24}
                onPress={() => {}}>
                <Image style={{ width: 30, height: 30 }} source={require("../../../../assets/images/simbolo-unchecked.png")}></Image>
            </ThemedButtonSpacedIcon>
            <ThemedButtonSpacedIcon
                id={"lavador"}
                title={"Lavador"}
                titleColorful={{
                    color: "",
                    content: ""
                }}
                height={85}
                bgColor={"#2E303F"}
                color={"white"}
                radius={10}
                fontSize={24}
                onPress={() => {}}>
                <Image style={{ width: 30, height: 30 }} source={require("../../../../assets/images/simbolo-unchecked.png")}></Image>
            </ThemedButtonSpacedIcon>
            <ThemedButtonFixed
                id={"export"}
                title={"Exportar Tabela"}
                height={60}
                bgColor={"#109370"}
                color={"white"}
                radius={10}
                fontSize={28}
                onPress={() => {}}
                top={"0.5%"}
                left={"17%"}
                right={0}
                bottom={0}/>
        </ParallaxScrollView>
    );
}