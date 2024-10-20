import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";

export function ThemedButton(props: { id: string, title: any, height: number, bgColor: string, color: string, radius: number, fontSize: number, children: any, onPress: any }) {
    const { id, title, height, bgColor, color, radius, fontSize, children, onPress } = props;

    const styles = StyleSheet.create({
        button: {
            width: "100%",
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
            width: "100%",
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

export function ThemedButtonNoChildren(props: { id: string, title: any, height: number, bgColor: string, color: string, radius: number, fontSize: number, onPress: any }) {
    const { id, title, height, bgColor, color, radius, fontSize, onPress } = props;

    const styles = StyleSheet.create({
        button: {
            width: "100%",
            height: height,
            backgroundColor: bgColor,
            borderRadius: radius,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
        },
        underlay: {
            width: "85%",
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

export function ThemedButtonFixed(props: { id: string, title: any, height: number, bgColor: string, color: string, radius: number, fontSize: number, onPress: any, top: any, left: any, right: any, bottom: any }) {
    const { id, title, height, bgColor, color, radius, fontSize, onPress, top, right, bottom, left } = props;

    const styles = StyleSheet.create({
        button: {
            width: "100%",
            height: height,
            backgroundColor: bgColor,
            borderRadius: radius
        },
        underlay: {
            width: "60%",
            height: height,
            backgroundColor: bgColor,
            borderRadius: radius,
            margin: "auto",
            //position: "absolute",
            top: top,
            bottom: bottom,
            left: left,
            right: right,
            zIndex: 2
        },
        text: {
            color: color,
            fontSize: fontSize,
            padding: 0,
            fontFamily: "AfacadFlux",
            margin: "auto"
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

export function ThemedButtonSpacedIcon(props: { id: string, title: any, titleColorful: { color: string, content: any }, height: number, bgColor: string, color: string, radius: number, fontSize: number, children: any, onPress: any }) {
    const { id, title, titleColorful, height, bgColor, color, radius, fontSize, children, onPress } = props;

    const styles = StyleSheet.create({
        button: {
            width: "100%",
            height: height,
            backgroundColor: bgColor,
            borderRadius: radius,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingLeft: 20,
            paddingRight: 20,
        },
        underlay: {
            width: "85%",
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
                <Text style={styles.text}>
                    {title} {titleColorful.color == "" || titleColorful.content == "" ? null : (
                        <Text style={{ color: titleColorful.color }}>{titleColorful.content}</Text>
                )}
                </Text>
                {children}
            </View>
        </TouchableOpacity>
    );
}

