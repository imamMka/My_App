import { Text, TextInput, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        padding: 16,
        gap: 16,
        width: "100%",
      }}
    >
      <Text>Hello world!</Text>
      <View >
        <Text>Nama kamu:</Text>
        <TextInput placeholder="Masukan nama kamu" style={{
          height: 40,
          width: 200,
          padding: 5,
          marginHorizontal: 8,
          borderWidth: 1,
          borderRadius: 8,
        }} />
      </View>

      <View >
        <Text>Kelas kamu:</Text>
        <TextInput placeholder="Masukan kelas kamu" style={{
          height: 40,
          width: 200,
          padding: 5,
          marginHorizontal: 8,
          borderWidth: 1,
          borderRadius: 8,
        }} />
      </View>

      <View >
        <Text>Hobi kamu:</Text>
        <TextInput placeholder="Masukan hobi kamu" style={{
          height: 40,
          width: 200,
          padding: 5,
          marginHorizontal: 8,
          borderWidth: 1,
          borderRadius: 8,
        }} />
      </View>

      <Text>Terimakasih sudah mengisi data</Text>

    </View>
  );
}
