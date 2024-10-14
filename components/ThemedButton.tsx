import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";

export function ThemedButton(props: { id: string, title: any, width: number, height: number, bgColor: string, color: string, radius: number, fontSize: number, children: any, onPress: any }) {
    const { id, title, width, height, bgColor, color, radius, fontSize, children, onPress } = props;

    const styles = StyleSheet.create({
        button: {
            width: width,
            height: height,
            backgroundColor: bgColor,
            borderRadius: radius,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: 12,
        },
        underlay: {
            width: width,
            height: height,
            backgroundColor: bgColor,
            borderRadius: radius,
            margin: "auto",
        },
        text: {
            color: color,
            fontSize: fontSize,
            padding: 0,
            fontFamily: "AfacadFlux",
        }
    });

    return (
        <TouchableOpacity
            id={id}
            activeOpacity={0.55}
            onPress={onPress}
            style={styles.underlay}>
            <View style={styles.button}>
                <Text style={styles.text}>{title}</Text>
                {children}
            </View>
        </TouchableOpacity>
    );
}

export function ThemedButtonNoChildren(props: { id: string, title: any, width: number, height: number, bgColor: string, color: string, radius: number, fontSize: number, onPress: any }) {
    const { id, title, width, height, bgColor, color, radius, fontSize, onPress } = props;

    const styles = StyleSheet.create({
        button: {
            width: width,
            height: height,
            backgroundColor: bgColor,
            borderRadius: radius,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: 12,
        },
        underlay: {
            width: width,
            height: height,
            backgroundColor: bgColor,
            borderRadius: radius,
            margin: "auto",
            marginBottom: 25
        },
        text: {
            color: color,
            fontSize: fontSize,
            padding: 0,
            fontFamily: "AfacadFlux"
        }
    });

    return (
        <TouchableOpacity
            id={id}
            activeOpacity={0.55}
            onPress={onPress}
            style={styles.underlay}>
            <View style={styles.button}>
                <Text style={styles.text}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}
