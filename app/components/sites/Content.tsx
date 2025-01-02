import { View } from "react-native";
import theme from "../../infrastructure/theme";
import BreedingCard from "../SiteTile";
import styled from "styled-components";
import { RecentBar } from "./RecentBar";
import EducationalInsights from "../home/EducationalInsights";
import Text from "../Text";

const ContentContainer = styled(View)`
  flex: 1;
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  top: 100px;
`;

const Title = styled(Text)`
  font-size: ${theme.fontSizes.body};
  margin-bottom: 10px;
`;

export default function Content() {
  return (
    <ContentContainer>
      <View>
        <Title>Your Recent Capture</Title>
        <RecentBar />
      </View>

      <EducationalInsights />
    </ContentContainer>
  );
}
