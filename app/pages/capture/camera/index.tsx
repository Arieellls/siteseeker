import {
  View,
  Text,
  Image,
  Pressable,
  Dimensions,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { TransitionPresets } from "@react-navigation/stack";
import styled from "styled-components";
import {
  Camera,
  useCameraDevice,
  CameraPermissionStatus,
} from "react-native-vision-camera";
import PermissionsPage from "./PermissionsPage";
import NoCameraDeviceError from "./NoCameraDeviceError";
import theme from "../../../infrastructure/theme";

import logo from "../../../../assets/logo.png";

const Wrapper = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ModelModeButton = styled(Pressable)`
  position: absolute;
  top: 50px;
  border-radius: 5px;
  border-width: 1px;
  border-color: ${theme.colors.ui.quaternary};
  width: 100px;
  align-items: center;
  justify-content: center;
  height: 40px;
`;

const ModelModeText = styled(Text)`
  font-size: 14px;
  color: ${theme.colors.ui.quaternary};
`;

const CaptureButton = styled(Pressable)`
  width: 90px;
  height: 90px;
  border-radius: 100%;
  border-width: 5px;
  border-color: ${theme.colors.ui.quaternary};
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 30px;
  z-index: 1;
`;

export default function Gallery() {
  const [permission, setPermission] =
    useState<CameraPermissionStatus>("not-determined");
  const device = useCameraDevice("back");
  const [isCameraActive, setIsCameraActive] = useState(false);

  useEffect(() => {
    const requestPermission = async () => {
      if (permission === "not-determined") {
        const newPermission = await Camera.requestCameraPermission();
        setPermission(newPermission);
      }
    };
    setIsCameraActive(true);
    requestPermission();
  }, [permission]);

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
      ...TransitionPresets.RevealFromBottomAndroid,
    });
  }, [navigation]);

  useEffect(() => {
    StatusBar.setBarStyle("dark-content");
    StatusBar.setHidden(true);
    return () => {
      StatusBar.setHidden(false);
    };
  }, []);

  if (permission === "not-determined") {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Requesting camera permissions...</Text>
      </View>
    );
  }

  if (permission === "denied") {
    return <PermissionsPage />;
  }

  if (device == null) {
    return <NoCameraDeviceError />;
  }

  return (
    <Wrapper>
      {isCameraActive ? (
        <Camera
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
          }}
          device={device}
          onInitialized={() => setIsCameraActive(true)}
          isActive={isCameraActive}
          photoQualityBalance="quality"
        />
      ) : (
        <Image
          source={require("../../../../assets/logo.png")}
          style={{ width: "40%", height: "40%" }}
        />
      )}
      <ModelModeButton>
        <ModelModeText>Model: On</ModelModeText>
      </ModelModeButton>
      <CaptureButton>
        <Image source={logo} style={{ width: "60%", height: "60%" }} />
      </CaptureButton>
    </Wrapper>
  );
}
