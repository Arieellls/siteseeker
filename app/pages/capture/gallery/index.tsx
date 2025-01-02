import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { TransitionPresets } from "@react-navigation/stack";
import GalleryContent from "./GallleryContent";
import styled from "styled-components";

const Wrapper = styled(View)`
  flex: 1;
  padding: 10px;
  /* background-color: red; */
`;

export default function Gallery() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: "Capture Gallery",
      headerTitleAlign: "center",
      ...TransitionPresets.RevealFromBottomAndroid,
    });
  }, [navigation]);

  return (
    <Wrapper>
      <GalleryContent />
    </Wrapper>
  );
}
