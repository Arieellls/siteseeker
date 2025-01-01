import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { TransitionPresets } from "@react-navigation/stack";

export default function Gallery() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: "Cameraks Capture",
      headerTitleAlign: "center",
      ...TransitionPresets.RevealFromBottomAndroid,
    });
  }, [navigation]);

  return (
    <View>
      <Text>Camera Mode</Text>
    </View>
  );
}
