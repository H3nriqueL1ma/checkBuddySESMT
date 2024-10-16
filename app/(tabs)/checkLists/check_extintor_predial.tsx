import {ParallaxScrollView} from "@/components/ParallaxScrollView";
import {Image, TouchableOpacity, View} from "react-native";
import {useRouter} from "expo-router";
import {ThemedButtonFixed, ThemedButtonSpacedIcon} from "@/components/ThemedButton";

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
            <ThemedButtonSpacedIcon
                id={"hall-sala-gerencia"}
                title={"Hall"}
                titleColorful={{
                    color: "#0FD587",
                    content: "(Frente - Sala Gerência)"
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
                id={"hall-sala-rh"}
                title={"Hall"}
                titleColorful={{
                    color: "#0FD587",
                    content: "(Frente - Sala RH)"
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
                id={"entrada-portaria"}
                title={"Entrada"}
                titleColorful={{
                    color: "#0FD587",
                    content: "(Portaria)"
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
                id={"corredor-banco-itau"}
                title={"Corredor"}
                titleColorful={{
                    color: "#0FD587",
                    content: "(Frente - Banco Itaú)"
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
                id={"corredor-ambulatorio"}
                title={"Corredor"}
                titleColorful={{
                    color: "#0FD587",
                    content: "(Ambulatório)"
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
                id={"refeitorio-adm-escada"}
                title={"Refeitório"}
                titleColorful={{
                    color: "#0FD587",
                    content: "(1º Andar ADM - \nFt. Escada)"
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
                id={"refeitorio-adm-cozinha"}
                title={"Refeitório"}
                titleColorful={{
                    color: "#0FD587",
                    content: "(1º Andar ADM - Cozinha)"
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
                id={"planejamento"}
                title={"Planejamento"}
                titleColorful={{
                    color: "#0FD587",
                    content: "(1º Andar)"
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
                id={"glp"}
                title={"GLP"}
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
                id={"cabine-gerador"}
                title={"Cabine Primária/Gerador"}
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
                id={"caixa-dagua"}
                title={"Caixa D'água"}
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
                id={"escada-diretoria"}
                title={"Escada"}
                titleColorful={{
                    color: "#0FD587",
                    content: "(Acesso Diretoria)"
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
                id={"garagem-presidencia"}
                title={"Garagem"}
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
                id={"corredor-adm-support"}
                title={"Corredor"}
                titleColorful={{
                    color: "#0FD587",
                    content: "(ADM - Support)"
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
                id={"corredor-adm-support-ti"}
                title={"Corredor"}
                titleColorful={{
                    color: "#0FD587",
                    content: "(ADM - Support T.I.)"
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
                id={"corredor-ambulatorio"}
                title={"Recebedoria"}
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
                top={"1%"}
                left={80}
                right={0}
                bottom={0}/>
        </ParallaxScrollView>
    );
}