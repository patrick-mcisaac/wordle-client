import Input from "@/components/ui/Input";
import { Colors } from "@/constants/theme";
import { StyleSheet, Text, useColorScheme, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const theme = useColorScheme() ?? "light";
  const colors = Colors[theme];
  return (
    <SafeAreaView
      style={{ ...styles.container, backgroundColor: colors.background }}
    >
      <View>
        <Text
          style={{
            color: colors.text,
          }}
        >
          Wordle
        </Text>
      </View>
      <View>
        <Input />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1,
  },
});
