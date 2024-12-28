import { SafeAreaView, StatusBar, Text, View } from "react-native";
import HomePage from "../pages/home";

export default function HomePageScreen() {
  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <View style={{ flex: 1 }}>
          <HomePage />
        </View>
      </SafeAreaView>
    </>
  );
}
