import { Colors } from "@/constants/theme";
import { Text, useColorScheme, View } from "react-native";

export default function Index() {
  const theme = useColorScheme() ?? "light";
  const colors = Colors[theme];
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.background,
      }}
    >
      <Text
        style={{
          color: colors.text,
        }}
      ></Text>
    </View>
  );
}
