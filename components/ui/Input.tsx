import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

export default function Input() {
  const [userInput, setUserInput] = useState<string | undefined>();
  return (
    <View style={styles.container}>
      <TextInput
        value={userInput ? userInput[0] : ""}
        onChangeText={setUserInput}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
  },
});
