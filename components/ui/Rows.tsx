import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import Input from "./Input";

export default function Rows() {
  const ref1 = useRef<TextInput>(null);
  const ref3 = useRef<TextInput>(null);
  const ref4 = useRef<TextInput>(null);
  const ref2 = useRef<TextInput>(null);
  const ref5 = useRef<TextInput>(null);

  const [userInput, setUserInput] = useState<string>("");

  const refs = [ref1, ref2, ref3, ref4, ref5];
  useEffect(() => {
    refs[0].current?.focus();
  }, [ref1]);

  return (
    <View style={styles.container}>
      <Input
        ref={ref1}
        onChange={(e) => {
          setUserInput((prev) => (prev += e));
          refs[1].current?.focus();
        }}
      />
      <Input
        ref={ref2}
        onChange={(e) => {
          setUserInput((prev) => (prev += e));
          refs[2].current?.focus();
        }}
      />
      <Input
        ref={ref3}
        onChange={(e) => {
          setUserInput((prev) => (prev += e));
          refs[3].current?.focus();
        }}
      />
      <Input
        ref={ref4}
        onChange={(e) => {
          setUserInput((prev) => (prev += e));
          refs[4].current?.focus();
        }}
      />
      <Input
        ref={ref5}
        onChange={(e) => {
          setUserInput((prev) => (prev += e));
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-around",
    gap: 15,
  },
});
