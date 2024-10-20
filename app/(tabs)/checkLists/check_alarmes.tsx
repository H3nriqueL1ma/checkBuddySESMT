import {ParallaxScrollView} from "@/components/ParallaxScrollView";
import {Image, TouchableOpacity, View} from "react-native";
import {useRouter} from "expo-router";
import {ThemedButtonFixed, ThemedButtonNoChildren, ThemedButtonSpacedIcon} from "@/components/ThemedButton";

export default function CheckAlarmesScreen() {
    const router = useRouter();

    return (
        <ParallaxScrollView
            headerBackgroundColor={"#13D284"}
            textComponent={"Alarmes de Incêndio"}
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
                id={"alarmes-adm-eovg-gru"}
                title={"Local (AMD - EOVG/GRU)"}
                height={80}
                bgColor={"#363636"}
                color={"white"}
                radius={10}
                fontSize={28}
                onPress={() => router.push("/(tabs)/locais/alarmes/local_adm_eovg_gru")} />
            <ThemedButtonNoChildren
                id={"alarmes-patio-manutencao"}
                title={"Local (Pátio/Manutenção)"}
                height={80}
                bgColor={"#363636"}
                color={"white"}
                radius={10}
                fontSize={28}
                onPress={() => router.push("/locais/alarmes/local_patio_manutencao")} />
          </ParallaxScrollView>
    );
}