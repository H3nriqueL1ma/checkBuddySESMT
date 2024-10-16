import {ParallaxScrollView} from "@/components/ParallaxScrollView";
import {Image, TouchableOpacity, View} from "react-native";
import {ThemedButtonFixed, ThemedButtonSpacedIcon} from "@/components/ThemedButton";
import {useRouter} from "expo-router";

export default function CheckHidranteScreen() {
    const router = useRouter();

    return (
        <ParallaxScrollView
            headerBackgroundColor={"#13D284"}
            textComponent={"Hidrantes"}
            nameIcon={""}
            component={
                <TouchableOpacity onPress={() => router.back()}>
                    <View>
                        <Image style={{ width: 50, height: 50, top: -7 }} source={require("../../../assets/images/back-icon.png")}></Image>
                    </View>
                </TouchableOpacity>
            }
            headerTopPosition={-80}>
            <ThemedButtonSpacedIcon
                id={"portaria"}
                title={"Portaria"}
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
                <Image style={{ width: 30, height: 30 }} source={require("../../../assets/images/simbolo-unchecked.png")}></Image>
            </ThemedButtonSpacedIcon>
            <ThemedButtonSpacedIcon
                id={"hall-adm"}
                title={"Hall"}
                titleColorful={{
                    color: "#0FD587",
                    content: "(ADM)"
                }}
                height={85}
                bgColor={"#2E303F"}
                color={"white"}
                radius={10}
                fontSize={24}
                onPress={() => {}}>
                <Image style={{ width: 30, height: 30 }} source={require("../../../assets/images/simbolo-unchecked.png")}></Image>
            </ThemedButtonSpacedIcon>
            <ThemedButtonSpacedIcon
                id={"hall-support"}
                title={"Hall"}
                titleColorful={{
                    color: "#0FD587",
                    content: "(Support)"
                }}
                height={85}
                bgColor={"#2E303F"}
                color={"white"}
                radius={10}
                fontSize={24}
                onPress={() => {}}>
                <Image style={{ width: 30, height: 30 }} source={require("../../../assets/images/simbolo-unchecked.png")}></Image>
            </ThemedButtonSpacedIcon>
            <ThemedButtonSpacedIcon
                id={"corredor-presidencia"}
                title={"Corredor"}
                titleColorful={{
                    color: "#0FD587",
                    content: "(Presidência)"
                }}
                height={85}
                bgColor={"#2E303F"}
                color={"white"}
                radius={10}
                fontSize={24}
                onPress={() => {}}>
                <Image style={{ width: 30, height: 30 }} source={require("../../../assets/images/simbolo-unchecked.png")}></Image>
            </ThemedButtonSpacedIcon>
            <ThemedButtonSpacedIcon
                id={"corredor-rh-sinistro"}
                title={"Corredor/RH/Sinistro"}
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
                <Image style={{ width: 30, height: 30 }} source={require("../../../assets/images/simbolo-unchecked.png")}></Image>
            </ThemedButtonSpacedIcon>
            <ThemedButtonSpacedIcon
                id={"refeitorio-adm"}
                title={"Refeitório"}
                titleColorful={{
                    color: "#0FD587",
                    content: "(ADM)"
                }}
                height={85}
                bgColor={"#2E303F"}
                color={"white"}
                radius={10}
                fontSize={24}
                onPress={() => {}}>
                <Image style={{ width: 30, height: 30 }} source={require("../../../assets/images/simbolo-unchecked.png")}></Image>
            </ThemedButtonSpacedIcon>
            <ThemedButtonSpacedIcon
                id={"recebimento-diesel"}
                title={"Recebimento"}
                titleColorful={{
                    color: "#0FD587",
                    content: "(Diesel)"
                }}
                height={85}
                bgColor={"#2E303F"}
                color={"white"}
                radius={10}
                fontSize={24}
                onPress={() => {}}>
                <Image style={{ width: 30, height: 30 }} source={require("../../../assets/images/simbolo-unchecked.png")}></Image>
            </ThemedButtonSpacedIcon>
            <ThemedButtonSpacedIcon
                id={"abastecimento-lavador"}
                title={"Abastecimento/Lavador"}
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
                <Image style={{ width: 30, height: 30 }} source={require("../../../assets/images/simbolo-unchecked.png")}></Image>
            </ThemedButtonSpacedIcon>
            <ThemedButtonSpacedIcon
                id={"almoxarifado"}
                title={"Almoxarifado"}
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
                <Image style={{ width: 30, height: 30 }} source={require("../../../assets/images/simbolo-unchecked.png")}></Image>
            </ThemedButtonSpacedIcon>
            <ThemedButtonSpacedIcon
                id={"valeta-12"}
                title={"Valeta"}
                titleColorful={{
                    color: "#0FD587",
                    content: "(12)"
                }}
                height={85}
                bgColor={"#2E303F"}
                color={"white"}
                radius={10}
                fontSize={24}
                onPress={() => {}}>
                <Image style={{ width: 30, height: 30 }} source={require("../../../assets/images/simbolo-unchecked.png")}></Image>
            </ThemedButtonSpacedIcon>
            <ThemedButtonSpacedIcon
                id={"valeta-09"}
                title={"Valeta"}
                titleColorful={{
                    color: "#0FD587",
                    content: "(09)"
                }}
                height={85}
                bgColor={"#2E303F"}
                color={"white"}
                radius={10}
                fontSize={24}
                onPress={() => {}}>
                <Image style={{ width: 30, height: 30 }} source={require("../../../assets/images/simbolo-unchecked.png")}></Image>
            </ThemedButtonSpacedIcon>
            <ThemedButtonSpacedIcon
                id={"valeta-03"}
                title={"Valeta"}
                titleColorful={{
                    color: "#0FD587",
                    content: "(03)"
                }}
                height={85}
                bgColor={"#2E303F"}
                color={"white"}
                radius={10}
                fontSize={24}
                onPress={() => {}}>
                <Image style={{ width: 30, height: 30 }} source={require("../../../assets/images/simbolo-unchecked.png")}></Image>
            </ThemedButtonSpacedIcon>
            <ThemedButtonSpacedIcon
                id={"valeta-borracharia"}
                title={"Valeta"}
                titleColorful={{
                    color: "#0FD587",
                    content: "(Borracharia)"
                }}
                height={85}
                bgColor={"#2E303F"}
                color={"white"}
                radius={10}
                fontSize={24}
                onPress={() => {}}>
                <Image style={{ width: 30, height: 30 }} source={require("../../../assets/images/simbolo-unchecked.png")}></Image>
            </ThemedButtonSpacedIcon>
            <ThemedButtonSpacedIcon
                id={"funilaria-pintura"}
                title={"Funilaria/Pintura"}
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
                <Image style={{ width: 30, height: 30 }} source={require("../../../assets/images/simbolo-unchecked.png")}></Image>
            </ThemedButtonSpacedIcon>
            <ThemedButtonSpacedIcon
                id={"arquivo"}
                title={"Arquivo"}
                titleColorful={{
                    color: "#0FD587",
                    content: "(1º Piso)"
                }}
                height={85}
                bgColor={"#2E303F"}
                color={"white"}
                radius={10}
                fontSize={24}
                onPress={() => {}}>
                <Image style={{ width: 30, height: 30 }} source={require("../../../assets/images/simbolo-unchecked.png")}></Image>
            </ThemedButtonSpacedIcon>
            <ThemedButtonSpacedIcon
                id={"arquivo-sala-02"}
                title={"Arquivo"}
                titleColorful={{
                    color: "#0FD587",
                    content: "(Sala 02)"
                }}
                height={85}
                bgColor={"#2E303F"}
                color={"white"}
                radius={10}
                fontSize={24}
                onPress={() => {}}>
                <Image style={{ width: 30, height: 30 }} source={require("../../../assets/images/simbolo-unchecked.png")}></Image>
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
                top={"1%"}
                left={80}
                right={0}
                bottom={0}/>
        </ParallaxScrollView>
    );
}