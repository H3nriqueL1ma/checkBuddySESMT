import {Text, TextInput, TouchableOpacity, View} from "react-native";
import {useState} from "react";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function TextField(props: { setValue: any, textField: string, backColor: string, placeholder: string, type: string }) {
    const [text, setText] = useState('');
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [date, setDate] = useState(new Date());
    const {setValue, textField, backColor, placeholder, type} = props;

    let maxLength;

    if (type === "fabricNumber") {
        maxLength = text.split('.').length > 1 ? 11 : 9;
    }

    return (
        <View style={{
            backgroundColor: backColor,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            padding: 10, paddingTop: 15, paddingBottom: 15}}>
            <Text style={{ fontSize: 20, fontFamily: "AfacadFlux" }}>{textField}</Text>
            {type === "date" ? (
                <>
                    <TouchableOpacity
                        activeOpacity={0.55}
                        style={{
                            backgroundColor: "#2E303F",
                            borderRadius: 5
                        }}
                        onPress={() => setShowDatePicker(true)}>
                        <Text
                            style={{
                                backgroundColor: "#13D284",
                                padding: 10,
                                borderRadius: 5,
                                fontSize: 20,
                                fontFamily: "AfacadFlux",
                                color: "white"}}
                        >Selecionar Data</Text>
                    </TouchableOpacity>
                    {showDatePicker && (
                        <DateTimePicker
                            value={date}
                            mode="date"
                            display="default"
                            onChange={(event, selectedDate) => {
                                setShowDatePicker(false);
                                if (selectedDate) {
                                    setDate(selectedDate);
                                    setValue(selectedDate);
                                }
                            }}
                        />
                    )}
                </>
            ) : (
                <TextInput
                    style={{
                        borderWidth: 2,
                        width: "35%",
                        textAlign: "center",
                        borderRadius: 5,
                        fontSize: 20,
                        fontFamily: "AfacadFlux"
                    }}
                    maxLength={maxLength}
                    value={text}
                    onChangeText={(text) => {
                        setText(text);
                        setValue(text);
                    }}
                    placeholder={placeholder} />
            )}
        </View>
    );
}