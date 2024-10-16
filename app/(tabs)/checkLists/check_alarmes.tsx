import {ParallaxScrollView} from "@/components/ParallaxScrollView";
import {Image, TouchableOpacity, View} from "react-native";
import {useRouter} from "expo-router";
import {ThemedButtonFixed, ThemedButtonSpacedIcon} from "@/components/ThemedButton";

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
                id={"plantão"}
                title={"Plantão"}
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
                id={"hall-niff"}
                title={"Hall"}
                titleColorful={{
                    color: "#0FD587",
                    content: "(Niff)"
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
                id={"sinistro"}
                title={"Sinistro"}
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
                <Image style={{ width: 30, height: 30 }} source={require("../../../assets/images/simbolo-unchecked.png")}></Image>
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
                <Image style={{ width: 30, height: 30 }} source={require("../../../assets/images/simbolo-unchecked.png")}></Image>
            </ThemedButtonSpacedIcon>
            <ThemedButtonSpacedIcon
                id={"valeta-03-manutençao"}
                title={"Valeta"}
                titleColorful={{
                    color: "#0FD587",
                    content: "(03 - Manutenção)"
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
                id={"valeta-08-09-manutençao"}
                title={"Valeta"}
                titleColorful={{
                    color: "#0FD587",
                    content: "(08/09 - Manutenção)"
                }}
                height={85}
                bgColor={"#2E303F"}
                color={"white"}
                radius={10}
                fontSize={22}
                onPress={() => {}}>
                <Image style={{ width: 30, height: 30 }} source={require("../../../assets/images/simbolo-unchecked.png")}></Image>
            </ThemedButtonSpacedIcon>
            <ThemedButtonSpacedIcon
                id={"valeta-11-12-manutençao"}
                title={"Valeta"}
                titleColorful={{
                    color: "#0FD587",
                    content: "(11/12 - Manutenção)"
                }}
                height={85}
                bgColor={"#2E303F"}
                color={"white"}
                radius={10}
                fontSize={22}
                onPress={() => {}}>
                <Image style={{ width: 30, height: 30 }} source={require("../../../assets/images/simbolo-unchecked.png")}></Image>
            </ThemedButtonSpacedIcon>
            <ThemedButtonSpacedIcon
                id={"almoxarifado-eovg"}
                title={"Almoxarifado"}
                titleColorful={{
                    color: "#0FD587",
                    content: "(EOVG)"
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
                id={"pintura-funilaria"}
                title={"Pintura/Funilaria"}
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
                id={"arquivo-01-predial"}
                title={"Arquivo 01/Predial"}
                titleColorful={{
                    color: "#0FD587",
                    content: "(1º Andar)"
                }}
                height={85}
                bgColor={"#2E303F"}
                color={"white"}
                radius={10}
                fontSize={22}
                onPress={() => {}}>
                <Image style={{ width: 30, height: 30 }} source={require("../../../assets/images/simbolo-unchecked.png")}></Image>
            </ThemedButtonSpacedIcon>
            <ThemedButtonSpacedIcon
                id={"arquivo-02-predial"}
                title={"Arquivo 02/Predial"}
                titleColorful={{
                    color: "#0FD587",
                    content: "(1º Andar)"
                }}
                height={85}
                bgColor={"#2E303F"}
                color={"white"}
                radius={10}
                fontSize={22}
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