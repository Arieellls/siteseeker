import { View, Text } from "react-native";

export default function PermissionsPage() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Camera permissions are required to use this feature.</Text>
    </View>
  );
}
