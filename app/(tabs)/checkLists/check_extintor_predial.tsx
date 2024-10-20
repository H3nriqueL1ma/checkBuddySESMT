import {ParallaxScrollView} from "@/components/ParallaxScrollView";
import {Image, TouchableOpacity, View} from "react-native";
import {useRouter} from "expo-router";
import {ThemedButtonFixed, ThemedButtonNoChildren, ThemedButtonSpacedIcon} from "@/components/ThemedButton";

export default function CheckExtintorPredialScreen() {
    const router = useRouter();

    return (
        <ParallaxScrollView
            headerBackgroundColor={"#13D284"}
            textComponent={"Extintores Predial"}
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
                id={"extintores-predial-adm-eovg-vug"}
                title={"Local (ADM - EOVG/VUG)"}
                height={80}
                bgColor={"#363636"}
                color={"white"}
                radius={10}
                fontSize={28}
                onPress={() => router.push("/(tabs)/locais/extintoresPredial/local_adm_eovg_vug")} />
            <ThemedButtonNoChildren
                id={"extintores-predial-adm-support"}
                title={"Local (ADM - SUPPORT)"}
                height={80}
                bgColor={"#363636"}
                color={"white"}
                radius={10}
                fontSize={28}
                onPress={() => router.push("/(tabs)/locais/extintoresPredial/local_adm_support")} />
        </ParallaxScrollView>
    );
}