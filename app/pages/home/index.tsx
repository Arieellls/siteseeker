import React from "react";
import { ScrollView, SafeAreaView, Button } from "react-native";
import Wrapper from "../../components/home/Wrapper";
import { useTheme } from "../../infrastructure/theme/ThemeContext";

export default function HomePage() {
  const { theme, setDarkMode } = useTheme();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: 100,
          backgroundColor: theme.background,
        }}
        showsVerticalScrollIndicator={false}
      >
        <Wrapper />
        {/* <Button title="Enable Dark Mode" onPress={() => setDarkMode(true)} />
        <Button title="Enable Light Mode" onPress={() => setDarkMode(false)} /> */}
      </ScrollView>
    </SafeAreaView>
  );
}
