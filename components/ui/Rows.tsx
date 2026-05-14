import React, { useRef, useState } from "react";
import { TextInput, View } from "react-native";
import Input from "./Input";

export default function Rows() {
  const ref1 = useRef<TextInput>(null);
  const ref3 = useRef<TextInput>(null);
  const ref4 = useRef<TextInput>(null);
  const ref2 = useRef<TextInput>(null);
  const ref5 = useRef<TextInput>(null);

  const [userInput, setUserInput] = useState<string>("");

  return (
    <View>
      <Input
        ref={ref1}
        onChange={(e) => {
          setUserInput((prev) => (prev += e));
          ref2.current?.focus;
        }}
      />
      <Input
        ref={ref2}
        onChange={(e) => {
          setUserInput((prev) => (prev += e));
          ref3.current?.focus;
        }}
      />
      <Input
        ref={ref3}
        onChange={(e) => {
          setUserInput((prev) => (prev += e));
          ref4.current?.focus;
        }}
      />
      <Input
        ref={ref4}
        onChange={(e) => {
          setUserInput((prev) => (prev += e));
          ref5.current?.focus;
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
