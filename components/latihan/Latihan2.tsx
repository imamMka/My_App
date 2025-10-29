import { ScrollView, Text, View } from "react-native";

export default function Latihan2() {
    return (
        <View>
            <Text>Hello World, This is Latihan2 page</Text>
            <ScrollView>
                <Text style={{ fontSize: 96 }}>Scroll me plz</Text>
                <Text style={{ fontSize: 96 }}>If you like</Text>
                <Text style={{ fontSize: 96 }}>Scrolling down</Text>
                <Text style={{ fontSize: 96 }}>What's the best</Text>
                <Text style={{ fontSize: 96 }}>Framework around?</Text>
                <Text style={{ fontSize: 80 }}>React Native</Text>
            </ScrollView>
        </View>
    )
}