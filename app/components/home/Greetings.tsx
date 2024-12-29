import { View, Dimensions } from "react-native";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../../infrastructure/theme/ThemeContext";
import Text from "../Text";

const screenWidth = Dimensions.get("window").width;

const GreetingTile = styled(View)`
  background-color: #fff;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  background-color: transparent;
  align-items: center;
`;

const GreetingContainer = styled(View)`
  position: absolute;
  width: ${screenWidth}px;
  left: 0;
  padding: 16px;
  border-width: 1px;
  border-top-width: 0px;
  border-color: ${(props) => props.theme.border};
  border-radius: 0 0 10px 10px;
`;

const Title = styled(Text)`
  font-size: 20px;
`;

export default function Greetings({
  name = "Arielito Manorina",
}: {
  name?: string;
}) {
  const { theme } = useTheme(); // Use theme from context
  return (
    <GreetingContainer theme={theme}>
      <GreetingTile>
        <Title theme={theme}>
          Welcome back,{"\n"}
          {name}!
        </Title>
        <Ionicons name="notifications-outline" size={32} color={theme.text} />
      </GreetingTile>
    </GreetingContainer>
  );
}
