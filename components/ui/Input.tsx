import React from "react";
import { Pressable, StyleSheet, TextInput } from "react-native";

type InputProps = {
  ref: React.RefObject<TextInput | null>;
  onChange: (e: string) => void;
};
export default function Input({ ref, onChange }: InputProps) {
  return (
    <Pressable>
      <TextInput style={styles.input} onChangeText={onChange} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
  },
  input: {
    width: 20,
    height: 20,
    backgroundColor: "white",
  },
});
