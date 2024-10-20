import {Text, View} from "react-native";
import {RadioButton} from "react-native-paper";

export default function SimNaoRadioButton(props: { checked: string, setChecked: any, value: string, text: string }) {
    const { checked, setChecked, value, text } = props;

    return (
        <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>{text}</Text>
            <RadioButton
                color={"#13D284"}
                value={value}
                status={ checked === value ? "checked" : "unchecked"}
                onPress={() => setChecked(value)}/>
        </View>
    );
}