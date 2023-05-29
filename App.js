import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [outputText, setOutputText] = useState("default text");
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 50, color: "red" }}>{outputText}</Text>
      <Button
        title="change the text"
        onPress={() => setOutputText("the text changed")}
      />
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
