import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "react-native";
import { ThemeProvider, useTheme } from "../infrastructure/theme/ThemeContext";

const TAB_ICON: Record<string, keyof typeof Ionicons.glyphMap> = {
  index: "home",
  sites: "map",
  capture: "camera",
  settings: "settings",
};

const createScreenOptions = ({ route }: { route: { name: string } }) => {
  const { theme } = useTheme();
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }: { size: number; color: string }) =>
      iconName ? <Ionicons name={iconName} size={size} color={color} /> : null,
    tabBarActiveTintColor: "#4A90E2",
    tabBarInactiveTintColor: "gray",
    headerStyle: { backgroundColor: theme.header },
    tabBarStyle: { backgroundColor: theme.background },
    headerTitleStyle: { color: theme.text || "white" },
  };
};

export default function RootLayout() {
  return (
    <ThemeProvider>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <Tabs screenOptions={createScreenOptions}>
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            headerTitleAlign: "center",
          }}
        />
        <Tabs.Screen
          name="sites"
          options={{
            title: "Sites",
            headerTitleAlign: "center",
          }}
        />
        <Tabs.Screen
          name="capture"
          options={{
            title: "Capture",
            headerTitleAlign: "center",
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: "Settings",
            headerTitleAlign: "center",
          }}
        />
      </Tabs>
    </ThemeProvider>
  );
}
