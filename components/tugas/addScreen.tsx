import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AddScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.appBar}>
                <Ionicons name="arrow-back" size={24} color="#FF5B13" />
                <Text style={styles.appBarTitle}>Note Details</Text>
            </View>

            <View style={styles.form}>
                <TextInput style={styles.inputTitle} placeholder="Note Title" selectionColor="#FF5B13" />
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
    form: {
        padding: 10,
    },
    inputTitle: {
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#CCC",
        padding: 15

    },
})