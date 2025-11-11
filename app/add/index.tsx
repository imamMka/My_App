import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const images = [
    require("@/assets/images/image-0.png"),
    require("@/assets/images/image-1.png"),
    require("@/assets/images/image-2.png"),
    require("@/assets/images/image-3.png"),
];

const data = 0;

export default function AddScreen() {
    const [selectedImage, setSelectedImage] = useState<number>(0)
    const router = useRouter();

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <View style={styles.appBar}>
                    <TouchableOpacity onPress={() => router.back()}>
                        <Ionicons name="arrow-back" size={24} color="#FF5B13" />
                    </TouchableOpacity>
                    
                    <Text style={styles.appBarTitle}>Add Notes</Text>
                </View>

                <View style={styles.form}>
                    <TextInput style={styles.inputTitle} placeholder="Note Title" selectionColor="#FF5B13" />
                    <TextInput style={styles.inputContent} placeholder="Note Content" selectionColor="#FF5B13" textAlignVertical="top" multiline={true} />

                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {images.map((image, index) => (
                            <TouchableOpacity key={index} style={[styles.boxImage, selectedImage === index && styles.imageSelected]} onPress={() => setSelectedImage(index)}>
                                <Image
                                    style={styles.image}
                                    source={image}
                                />
                            </TouchableOpacity>
                        ))}

                    </ScrollView>

                </View>
            </View>


            <TouchableOpacity style={styles.buttonAdd}>
                <Text style={{ color: "white" }}>Add</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between"

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
        flexDirection: "column",
        gap: 5,
        padding: 10,
    },
    inputTitle: {
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#CCC",
        padding: 15,


    },
    inputContent: {
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#CCC",
        padding: 15,
        marginBottom: 10,
        height: 150,
    },
    boxImage: {
        height: 100,
        width: 100,
        borderColor: "#CCC",
        borderWidth: 1,
        margin: 5,
    },
    image: {
        width: 100,
        height: 100,
    },
    imageSelected: {
        borderColor: "#FF5B13",
    },
    buttonAdd: {
        backgroundColor: "#FF5B13",
        paddingVertical: 10,
        paddingHorizontal: 70,
        margin: 10,
        borderRadius: 8,
        alignItems: "center",

    },
})