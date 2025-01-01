import { Text, View } from "react-native";
import ModeWrapper from "../../components/capture/ModeWrapper";
import styled from "styled-components";
import { Link } from "expo-router";

const Content = styled(View)`
  flex: 1;
  padding: 20px;
`;

export default function CapturePage() {
  return (
    <Content>
      <ModeWrapper />
    </Content>
  );
}
