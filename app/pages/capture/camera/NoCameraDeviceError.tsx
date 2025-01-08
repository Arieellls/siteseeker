import { View, Text } from "react-native";

export default function NoCameraDeviceError() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>No camera device found.</Text>
    </View>
  );
}
