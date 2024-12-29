// App.js
import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {
  ThemeProvider,
  useTheme,
} from "./app/infrastructure/theme/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
}

function MainApp() {
  const { theme, toggleTheme } = useTheme() as unknown as {
    theme: { colors: { background: string; text: string } };
    toggleTheme: () => void;
  };

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Text style={{ color: theme.colors.text }}>
        Open up App.tsx to start working on your app!
      </Text>
      <Text
        onPress={toggleTheme}
        style={{ color: theme.colors.text, marginTop: 20 }}
      >
        Toggle Theme
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
