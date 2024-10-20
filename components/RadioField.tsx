import {Text, View} from "react-native";
import SimNaoRadioButton from "@/components/SimNaoRadioButton";

export default function RadioField(props: { checked: string, setChecked: any, value: string[], textField: string, textRadio: string[], backColor: string }) {
    const { checked, setChecked, value, textField, textRadio, backColor } = props;

    return (
        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", backgroundColor: backColor, paddingLeft: 10, paddingRight: 10, paddingBottom: 10, paddingTop: 10 }}>
            <Text style={{ fontSize: 20, fontFamily: "AfacadFlux" }}>{textField}</Text>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                {textRadio.map((text, index) => (
                    <SimNaoRadioButton key={index} checked={checked} setChecked={setChecked} value={value[index]} text={text} />
                ))}
            </View>
        </View>
    );
}