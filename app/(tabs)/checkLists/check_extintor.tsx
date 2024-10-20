import {ParallaxScrollView} from "@/components/ParallaxScrollView";
import {useRouter} from "expo-router";
import {Image, TouchableOpacity, View} from "react-native";
import {
    ThemedButtonFixed, ThemedButtonNoChildren,
    ThemedButtonSpacedIcon
} from "@/components/ThemedButton";

export default function CheckExtintorScreen() {
    const router = useRouter();

    return (
        <ParallaxScrollView
            headerBackgroundColor={'#13D284'}
            textComponent={"Extintores"}
            nameIcon={""}
            component={
                <TouchableOpacity onPress={() => router.back()}>
                    <View>
                        <Image style={{ width: 50, height: 50, top: -7 }} source={require("../../../assets/images/back-icon.png")}></Image>
                    </View>
                </TouchableOpacity>
            }
            headerTopPosition={-80}>
            <ThemedButtonNoChildren
                id={"extintores-manutencao"}
                title={"Local (Manutenção)"}
                height={80}
                bgColor={"#363636"}
                color={"white"}
                radius={10}
                fontSize={28}
                onPress={() => router.push("/(tabs)/locais/extintores/local_manutencao")} />
            <ThemedButtonNoChildren
                id={"extintores-abastecimento"}
                title={"Local (Abastecimento)"}
                height={80}
                bgColor={"#363636"}
                color={"white"}
                radius={10}
                fontSize={28}
                onPress={() => router.push("/locais/extintores/local_abastecimento")} />
        </ParallaxScrollView>
    );
}