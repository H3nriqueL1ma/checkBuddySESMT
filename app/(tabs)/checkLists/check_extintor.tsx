import {ParallaxScrollView} from "@/components/ParallaxScrollView";
import {useRouter} from "expo-router";
import {Image, TouchableOpacity, View} from "react-native";
import {
    ThemedButtonFixed,
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
            <ThemedButtonSpacedIcon
                id={"sala-bilheteria"}
                title={"Sala"}
                titleColorful={{
                    color: "#0FD587",
                    content: "(Bilheteria)"
                }}
                height={85}
                bgColor={"#2E303F"}
                color={"white"}
                radius={10}
                fontSize={24}
                onPress={() => router.push("/(tabs)/forms/form_extintor")}>
                <Image style={{ width: 30, height: 30 }} source={require("../../../assets/images/simbolo-unchecked.png")}></Image>
            </ThemedButtonSpacedIcon>
            <ThemedButtonSpacedIcon
                id={"corredor-refeitório"}
                title={"Corredor"}
                titleColorful={{
                    color: "#0FD587",
                    content: "(Refeitório)"
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
                id={"corredor-tapeçaria-borracharia"}
                title={"Corredor"}
                titleColorful={{
                    color: "#0FD587",
                    content: "(Tapeçaria/Bor.)"
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
                id={"corredor-elétrica"}
                title={"Corredor"}
                titleColorful={{
                    color: "#0FD587",
                    content: "(Elétrica)"
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
                id={"almoxarifado-vug"}
                title={"Almoxarifado"}
                titleColorful={{
                    color: "#0FD587",
                    content: "(Térreo - VUG)"
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
                id={"corredor-almoxarifado"}
                title={"Corredor"}
                titleColorful={{
                    color: "#0FD587",
                    content: "(Almoxarifado)"
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
                id={"almoxarifado-eovg"}
                title={"Almoxarifado"}
                titleColorful={{
                    color: "#0FD587",
                    content: "(1º Piso - EOVG)"
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
                id={"corredor-secretaria-técnica"}
                title={"Corredor"}
                titleColorful={{
                    color: "#0FD587",
                    content: "(Secretaria Técnica)"
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
                id={"corredor-cambio-diferencial"}
                title={"Corredor"}
                titleColorful={{
                    color: "#0FD587",
                    content: "(Câmbio/Dif.)"
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
                id={"corredor-montagem"}
                title={"Corredor"}
                titleColorful={{
                    color: "#0FD587",
                    content: "(Montagem)"
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
                id={"corredor-valeta-lavagem"}
                title={"Corredor"}
                titleColorful={{
                    color: "#0FD587",
                    content: "(Valeta/Lav. Peça)"
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
                id={"coluna-valeta"}
                title={"Coluna"}
                titleColorful={{
                    color: "#0FD587",
                    content: "(Valeta 05/06)"
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
                id={"reserva"}
                title={"Reserva"}
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