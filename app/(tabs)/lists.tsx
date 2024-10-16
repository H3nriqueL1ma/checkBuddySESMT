import {ParallaxScrollView} from "@/components/ParallaxScrollView";
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {ThemedButtonNoChildren} from "@/components/ThemedButton";
import {useRouter} from "expo-router";

export default function ListsScreen() {
    const router = useRouter();

    return (
        <ParallaxScrollView
            headerBackgroundColor={'#13D284'}
            textComponent={"SESMT"}
            nameIcon={""}
            component={
                <TouchableOpacity onPress={() => router.back()}>
                    <View>
                        <Image style={{ width: 50, height: 50, top: -7 }} source={require("../../assets/images/back-icon.png")}></Image>
                    </View>
                </TouchableOpacity>
            }
            headerTopPosition={-80}>
            <ThemedButtonNoChildren
                id={"extintores"}
                title={"Extintores"}
                height={80}
                bgColor={"#109370"}
                color={"white"}
                radius={10}
                fontSize={28}
                onPress={() => router.push("/checkLists/check_extintor")} />
            <ThemedButtonNoChildren
                id={"extintores-predial"}
                title={"Extintores Predial"}
                height={80}
                bgColor={"#109370"}
                color={"white"}
                radius={10}
                fontSize={28}
                onPress={() => router.push("/checkLists/check_extintor_predial")} />
            <ThemedButtonNoChildren
                id={"hidrantes"}
                title={"Hidrantes"}
                height={80}
                bgColor={"#109370"}
                color={"white"}
                radius={10}
                fontSize={28}
                onPress={() => router.push("/checkLists/check_hidrante")} />
            <ThemedButtonNoChildren
                id={"alarmes-incendio"}
                title={"Alarmes de Incêndio"}
                height={80}
                bgColor={"#109370"}
                color={"white"}
                radius={10}
                fontSize={28}
                onPress={() => router.push("/checkLists/check_alarmes")} />
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({

})