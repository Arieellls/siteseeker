import styled from "styled-components";
import { BreedingSite } from "../../types/breedingSite";
import { Card } from "react-native-paper";
import { Text, View } from "react-native";
import theme from "../../infrastructure/theme";
import { formatStatus } from "../../utils/formatStatus";

const SiteCard = styled(Card)`
  background-color: white;
  width: 140px;
  height: 160px;
`;

const ViewContainer = styled(View)`
  padding-right: 10px;
`;

const Title = styled(Text)`
  font-size: ${theme.fontSizes.button};
  padding: 5px;
  text-align: center;
`;

export default function BreedingCard({
  site = {
    id: "1",
    capturedImage:
      "https://images.pexels.com/photos/5179560/pexels-photo-5179560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    latitude: 0,
    longitude: 0,
    description: "A description",
    detectionTime: new Date(),
    userId: "1",
    status: "unconfirmed",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
}: {
  site: BreedingSite;
}) {
  return (
    <ViewContainer>
      <SiteCard>
        <Card.Cover
          source={{ uri: site.capturedImage }}
          style={{
            height: "100%",
            width: "100%",
            alignSelf: "center",
            borderRadius: 8,
          }}
          resizeMode="cover"
        />

        <Title>{formatStatus(site.status)}</Title>
      </SiteCard>
    </ViewContainer>
  );
}
