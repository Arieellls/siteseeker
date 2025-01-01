import { Text, View, TouchableOpacity, Pressable } from "react-native";
import styled from "styled-components/native"; // Ensure styled-components/native for React Native
import theme from "../../infrastructure/theme";
import EducationalInsights from "../home/EducationalInsights";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { Link, router } from "expo-router";

const OptionsContainer = styled(View)`
  width: 100%;
  flex: 1;
  justify-content: center;
`;

const Button = styled(TouchableOpacity)`
  background-color: #4a90e2;
  border-radius: 5px;
  width: 60%;
  align-items: center;
  justify-content: center;
  height: 44px;
  color: red;
`;

const ButtonText = styled(Text)`
  color: ${theme.colors.ui.primary};
  font-size: 15px;
`;

const CameraContainer = styled(View)`
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
`;

const SourcesContainer = styled(View)`
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  /* flex-direction: column-reverse; */
  top: -50px;
`;

const Title = styled(Text)`
  font-size: 17px;
  text-align: center;
`;

const GalleryButton = styled(TouchableOpacity)`
  position: absolute;
  bottom: 0;
  background-color: #fff;
  border-radius: 5px;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 44px;
  padding: 0 10px;
  text-align: start;
  justify-content: space-between;
  flex-direction: row;
`;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
  },
});

export default function ModeWrapper() {
  function goToGalleryPage() {
    router.push("/pages/capture/gallery/");
  }
  function goToDronePage() {
    router.push("/pages/capture/drone/");
  }
  function goToCameraPage() {
    router.push("/pages/capture/camera/");
  }

  return (
    <OptionsContainer>
      <SourcesContainer>
        <Title>Choose a mode</Title>
        <CameraContainer>
          <Button onPress={goToGalleryPage}>
            <ButtonText>Import</ButtonText>
          </Button>
          <Button onPress={goToCameraPage}>
            <ButtonText>Camera</ButtonText>
          </Button>
          <Button onPress={goToDronePage}>
            <ButtonText>Drone</ButtonText>
          </Button>
        </CameraContainer>
      </SourcesContainer>

      <GalleryButton style={styles.shadow} onPress={goToGalleryPage}>
        <Text>View Captured</Text>
        <Ionicons name="chevron-forward-outline"></Ionicons>
      </GalleryButton>
    </OptionsContainer>
  );
}
