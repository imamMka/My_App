import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Latihan1() {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#e9ecef',
    }}>

      <Text style={{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
      }}>Login</Text>

      <View style={{
        width: '80%',
        marginTop: 20,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
      }}>
        <Text>Email:</Text>
        <TextInput style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 12,
          paddingHorizontal: 10,
          borderRadius: 8,
        }} placeholder="Email" />

        <Text>Password:</Text>
        <TextInput style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 12,
          paddingHorizontal: 10,
          borderRadius: 8,
        }} placeholder="Password" />

        <TouchableOpacity 
          style={{
            backgroundColor: '#007AFF',
            padding: 12,
            borderRadius: 8,
            alignItems: 'center',
            marginTop: 10
          }}
          onPress={() => {}}
        >
          <Text style={{
            color: 'white',
            fontSize: 16,
            fontWeight: 'bold'
          }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}