import { Ionicons } from "@expo/vector-icons";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

const notes = [
    {
        id: 1,
        image: "@/assets/images/Logo-Notes.png",
        title: "Belajar Mobile App",
        desc: "Mari belajar Mobile App dengan React Native.",
        date: "29-10-25"
    },
    {
        id: 2,
        image: "@/assets/images/Logo-Notes.png",
        title: "Belajar Web App",
        desc: "Mari belajar Web App dengan ReactJS dan Tailwind CSS.",
        date: "30-10-25"
    }
];

type Note = {
    id: number;
    image: string;
    title: string;
    desc: string;
    date: string;
}

const NoteItem = ({ item }: { item: Note }) => {
    return (
        <View style={styles.card}>
            <Image
                style={{ width: 80, height: 80 }}
                source={require("@/assets/images/Logo-Notes.png")}
            />
            <View style={styles.cardContainer}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardDesc}>{item.desc}</Text>
                <Text style={styles.cardDate}>{item.date}</Text>
            </View>

        </View>
    )
}




export default function Homescreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Image
                    style={{ width: 32, height: 32 }}
                    source={require("@/assets/images/Logo-Notes.png")}
                />
                <Text style={styles.kodeinText}>Kodein</Text>
                <Text style={styles.notesText}>Notes</Text>
            </View>

            <GestureHandlerRootView style={styles.content}>
                <FlatList 
                data={notes}
                renderItem={({ item }) => <NoteItem item={item} />} 
                keyExtractor={(item) => item.id.toString()} 
                contentContainerStyle={{ gap: 10 }} />
            </GestureHandlerRootView>


            <TouchableOpacity style={styles.fab}>
                <Ionicons name="add" size={32} color={"white"} />
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        gap: 2,
    },
    kodeinText: {
        fontSize: 20,
        fontWeight: "700",
    },
    notesText: {
        fontSize: 20,
        fontWeight: "700",
        color: "#FF5B13"
    },
    content: {
        flex: 1,
        padding: 10,
    },
    fab: {
        position: "absolute",
        bottom: 50,
        right: 20,
        backgroundColor: "#FF5B13",
        width: 60,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
    },
    card: {
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        padding: 6,
        borderRadius: 10,
        borderWidth: 1
    },
    cardContainer: {
        flex: 1,
        padding: 8,
        gap: 4,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: "bold",
    },
    cardDesc: {
        fontSize: 16,

    },
    cardDate: {},
})