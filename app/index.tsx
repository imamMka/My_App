import { notes } from "@/data/notesData";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { FlatList, Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";


type Note = {
    id: number;
    image: ImageSourcePropType | { uri: string };
    title: string;
    desc: string;
    date: string;
}

const NoteItem = ({ item }: { item: Note }) => {
    const router = useRouter();
    return (
        <TouchableOpacity style={styles.card} onPress={() => router.push(`/detail/${item.id}`)}>
            <Image
                style={{ width: 80, height: 80 }}
                source={item.image}
            />
            <View style={styles.cardContainer}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardDesc}>{item.desc}</Text>
                <Text style={styles.cardDate}>{item.date}</Text>
            </View>

        </TouchableOpacity>
    )
}




export default function Homescreen() {
    const router = useRouter();
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
                    contentContainerStyle={{ gap: 10, flexGrow: 1 }}
                    ListEmptyComponent={() => <EmptyNotes />} />
            </GestureHandlerRootView>


            <TouchableOpacity style={styles.fab} onPress={() => router.push("/add")}>
                <Ionicons name="add" size={32} color={"white"} />
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const EmptyNotes = () => {
    return (
        <View style={styles.emptyContainer}>
            <Image
                style={{ width: 180, height: 180 }}
                source={require("@/assets/images/empty.png")}
            />
            <Text style={styles.emptyTitle}>Add your first note</Text>
            <Text style={styles.emptyDesc}>
                Save your thoughts, tasks or inspiration
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    header: {
        padding: 10,
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
    emptyTitle: {
        paddingTop: 10,
        fontSize: 18,
        fontWeight: "600",
        textAlign: "center",
    },
    emptyDesc: {
        fontSize: 16,
        fontWeight: "400",
        textAlign: "center",
        color: "#CBCBCB"
    },
    emptyContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 15,
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