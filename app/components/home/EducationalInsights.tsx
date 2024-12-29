import styled from "styled-components";
import { Card } from "react-native-paper";
import { View } from "react-native";
import theme from "../../infrastructure/theme";
import Text from "../Text";

import { educationalInsights } from "../../services/sites/mock/educationalInsights.json";

import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const SiteCard = styled(Card)`
  background-color: white;
  width: ${width / 2 - 21}px;
  height: 210px;
`;

const ViewContainer = styled(View)`
  /* padding-right: 10px; */
`;

const CardsWrapper = styled(View)`
  /* margin-top: 25px; */
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;
`;

const InsightsWrapper = styled(View)`
  margin-top: 25px;
`;

const Title = styled(Text)`
  font-size: ${theme.fontSizes.body};
  margin-bottom: 10px;
`;

export default function EducationalInsights() {
  return (
    <InsightsWrapper>
      <Title>Learn & Prevent</Title>
      <CardsWrapper>
        {educationalInsights.map((insight, index) => (
          <EducationalInsightCard key={index} image={insight.image} />
        ))}
      </CardsWrapper>
    </InsightsWrapper>
  );
}

function EducationalInsightCard({ image }: { image: string }) {
  return (
    <ViewContainer>
      <SiteCard>
        <Card.Cover
          source={{
            uri: image,
          }}
          style={{
            height: "100%",
            width: "100%",
            alignSelf: "center",
            borderRadius: 8,
          }}
          resizeMode="cover"
        />
      </SiteCard>
    </ViewContainer>
  );
}
