import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [outputText, setOutputText] = useState();
  const [title, setTitle] = useState("DEFAULT");

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 50, color: "red" }}>{title}</Text>
      <TextInput
        onChangeText={(text) => setOutputText(text)}
        placeholder="write your name"
        keyboardType="text"
        style={{
          borderColor: "black",
          borderRadius: 8,
          borderWidth: 1,
          marginBottom: 15,
          padding: 5,
        }}
      />
      <Button title="change the text" onPress={() => setTitle(outputText)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
