import { Text, View, Dimensions } from "react-native";
import styled from "styled-components";
import { theme } from "../../infrastructure/theme";
import { Ionicons } from "@expo/vector-icons";

const screenWidth = Dimensions.get("window").width;

const GreetingTile = styled(View)`
  background-color: #fff;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

const GreetingContainer = styled(View)`
  position: absolute;
  width: ${screenWidth}px;
  left: 0;
  padding: ${theme.space[3]};
  border-width: 1px;
  border-top-width: 0px;
  border-color: ${theme.colors.brand.muted};
  border-radius: 0 0 10px 10px;
`;

const Title = styled(Text)`
  font-size: ${theme.fontSizes.title};
`;

export default function Greetings({
  name = "Arielito Manorina",
}: {
  name?: string;
}) {
  return (
    <GreetingContainer>
      <GreetingTile>
        <Title>
          Welcome back,{"\n"}
          {name}!
        </Title>
        <Ionicons name="notifications-outline" size={32} color="black" />
      </GreetingTile>
    </GreetingContainer>
  );
}
