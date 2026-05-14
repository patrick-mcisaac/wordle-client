import Rows from "@/components/ui/Rows";
import { Colors } from "@/constants/theme";
import { useRef } from "react";
import { StyleSheet, Text, useColorScheme, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const theme = useColorScheme() ?? "light";
  const colors = Colors[theme];
  const ref = useRef(null);
  return (
    <SafeAreaView
      style={{ ...styles.container, backgroundColor: colors.background }}
    >
      <View>
        <Text
          style={{
            color: colors.text,
            ...styles.header,
          }}
        >
          Wordle
        </Text>
      </View>
      <View>
        <Rows />
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
    gap: 100,
    padding: 50,
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
