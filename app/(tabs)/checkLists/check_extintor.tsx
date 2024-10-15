import {ParallaxScrollViewNoIcon} from "@/components/ParallaxScrollView";
import {useRouter} from "expo-router";
import {Image, TouchableOpacity, View} from "react-native";
import {ThemedButton, ThemedButtonFixed, ThemedButtonNoChildren} from "@/components/ThemedButton";

export default function CheckExtintorScreen() {
    const router = useRouter();

    return (
        <ParallaxScrollViewNoIcon
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
            headerTopPosition={-60}>
            <ThemedButton
                id={"sala-bilheteria"}
                title={"Sala Bilheteria"}
                height={80}
                bgColor={"#2E303F"}
                color={"white"}
                radius={10}
                fontSize={28}
                onPress={() => {}}>
                <Image style={{ width: 30, height: 30 }} source={require("../../../assets/images/simbolo-unchecked.png")}></Image>
            </ThemedButton>
            <ThemedButtonNoChildren
                id={"corredor-refeitório"}
                title={"Corredor Refeitório"}
                height={80}
                bgColor={"#2E303F"}
                color={"white"}
                radius={10}
                fontSize={28}
                onPress={() => {}} />
            <ThemedButtonNoChildren
                id={"corredor-tapeçaria-borracharia"}
                title={"Corredor Tapeçaria/Borracharia"}
                height={80}
                bgColor={"#2E303F"}
                color={"white"}
                radius={10}
                fontSize={24}
                onPress={() => {}} />
            <ThemedButtonNoChildren
                id={"corredor-elétrica"}
                title={"Corredor Elétrica"}
                height={80}
                bgColor={"#2E303F"}
                color={"white"}
                radius={10}
                fontSize={28}
                onPress={() => {}} />
            <ThemedButtonNoChildren
                id={"almoxarifado-vug"}
                title={"Almoxarifado Térreo (VUG)"}
                height={80}
                bgColor={"#2E303F"}
                color={"white"}
                radius={10}
                fontSize={28}
                onPress={() => {}} />
            <ThemedButtonNoChildren
                id={"corredor-almoxarifado"}
                title={"Corredor Almoxarifado"}
                height={80}
                bgColor={"#2E303F"}
                color={"white"}
                radius={10}
                fontSize={28}
                onPress={() => {}} />
            <ThemedButtonNoChildren
                id={"almoxarifado-eovg"}
                title={"Almoxarifado 1º Piso (EOVG)"}
                height={80}
                bgColor={"#2E303F"}
                color={"white"}
                radius={10}
                fontSize={24}
                onPress={() => {}} />
            <ThemedButtonNoChildren
                id={"corredor-secretaria-técnica"}
                title={"Corredor Secretaria Técnica"}
                height={80}
                bgColor={"#2E303F"}
                color={"white"}
                radius={10}
                fontSize={24}
                onPress={() => {}} />
            <ThemedButtonNoChildren
                id={"corredor-cambio-diferencial"}
                title={"Corredor Câmbio/Diferencial"}
                height={80}
                bgColor={"#2E303F"}
                color={"white"}
                radius={10}
                fontSize={24}
                onPress={() => {}} />
            <ThemedButtonNoChildren
                id={"corredor-montagem"}
                title={"Corredor Montagem"}
                height={80}
                bgColor={"#2E303F"}
                color={"white"}
                radius={10}
                fontSize={28}
                onPress={() => {}} />
            <ThemedButtonNoChildren
                id={"corredor-valeta-lavagem"}
                title={"Corredor Valeta/Lavagem de Peça"}
                height={80}
                bgColor={"#2E303F"}
                color={"white"}
                radius={10}
                fontSize={20}
                onPress={() => {}} />
            <ThemedButtonNoChildren
                id={"coluna-valeta"}
                title={"Coluna Valeta 05/06"}
                height={80}
                bgColor={"#2E303F"}
                color={"white"}
                radius={10}
                fontSize={28}
                onPress={() => {}} />
            <ThemedButtonNoChildren
                id={"reserva"}
                title={"Reserva"}
                height={80}
                bgColor={"#2E303F"}
                color={"white"}
                radius={10}
                fontSize={28}
                onPress={() => {}} />
            <ThemedButtonNoChildren
                id={"abastecimento"}
                title={"Abastecimento"}
                height={80}
                bgColor={"#2E303F"}
                color={"white"}
                radius={10}
                fontSize={28}
                onPress={() => {}} />
            <ThemedButtonNoChildren
                id={"pista-descarregamento"}
                title={"Pista de Descarregamento"}
                height={80}
                bgColor={"#2E303F"}
                color={"white"}
                radius={10}
                fontSize={28}
                onPress={() => {}} />
            <ThemedButtonNoChildren
                id={"lavador"}
                title={"Lavador"}
                height={80}
                bgColor={"#2E303F"}
                color={"white"}
                radius={10}
                fontSize={28}
                onPress={() => {}} />
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
                left={80}
                right={0}
                bottom={0}/>
        </ParallaxScrollViewNoIcon>
    );
}