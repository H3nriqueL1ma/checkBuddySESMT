import {ParallaxScrollViewNoIcon} from "@/components/ParallaxScrollView";
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {ThemedButtonNoChildren} from "@/components/ThemedButton";
import {useRouter} from "expo-router";

export default function ListsScreen() {
    const router = useRouter();

    return (
        <ParallaxScrollViewNoIcon
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
            headerTopPosition={-60}>
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
                id={"extintores"}
                title={"Extintores Predial"}
                height={80}
                bgColor={"#109370"}
                color={"white"}
                radius={10}
                fontSize={28}
                onPress={() => {}} />
            <ThemedButtonNoChildren
                id={"hidrantes"}
                title={"Hidrantes"}
                height={80}
                bgColor={"#109370"}
                color={"white"}
                radius={10}
                fontSize={28}
                onPress={() => {}} />
            <ThemedButtonNoChildren
                id={"alarmes-incendio"}
                title={"Alarmes de Incêndio"}
                height={80}
                bgColor={"#109370"}
                color={"white"}
                radius={10}
                fontSize={28}
                onPress={() => {}} />
        </ParallaxScrollViewNoIcon>
    );
}

const styles = StyleSheet.create({

})