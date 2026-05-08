import { Colors } from "@/constants/theme";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import { useColorScheme } from "react-native";

export default function RootLayout() {
  const theme = useColorScheme() ?? "light";
  const colors = Colors[theme];
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: colors.tabIconDefault,
        tabBarActiveTintColor: colors.tabIconSelected,

        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopWidth: 0,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" color={color} size={20} />
          ),
        }}
      />
    </Tabs>
  );
}
