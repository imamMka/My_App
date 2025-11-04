import { Ionicons } from "@expo/vector-icons";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DetailScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.appBar}>
                <Ionicons name="arrow-back" size={24} color={"#FF5B13"} />
                <Text style={styles.appBarTitle}>Detail Screen</Text>
            </View>
            <ScrollView>
                <Image
                    style={{ width: "100%", height: 250 }}
                    source={require("@/assets/images/image-1.png")}
                />

                <View style={styles.content}>
                    <Text style={styles.title}>Judul</Text>
                    <Text style={styles.date}>12 Juni 2024</Text>
                    <Text style={styles.desc}>adsfgasfhabsiafaugfy</Text>
                </View>

            </ScrollView>

            <View style={styles.buttonCont}>
                <TouchableOpacity style={styles.button}>
                    <Text style={{ color: "white" }}>Delete</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={{ color: "white" }}>Edit</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    appBar: {
        height: 56,
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        paddingHorizontal: 8,
    },
    appBarTitle: {
        fontSize: 20,
        fontWeight: "600",
    },
    content: {
        paddingHorizontal: 10,
        paddingVertical: 15,
        gap: 6,
    },
    title: {
        fontSize: 24,
        fontWeight: "700",
    },
    date: {
        fontSize: 14,
        color: "gray",
    },
    desc: {
        fontSize: 16,
        textAlign: "justify"
    },
    button: {
        backgroundColor: "#FF5B13",
        paddingVertical: 10,
        paddingHorizontal: 70,
        margin: 10,
        borderRadius: 8,
        alignItems: "center",
        
    },
    buttonCont: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 10,
    }
})