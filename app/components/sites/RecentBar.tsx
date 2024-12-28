import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import BreedingCard from "./SiteTile";
import mockSites from "../../services/sites/mock/mockSites.json";
import { BreedingSite } from "../../types/breedingSite";

const RecentWrapper = styled.View`
  height: 200px;
`;

export const RecentBar = () => {
  return (
    <RecentWrapper>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {mockSites.map((site: any) => (
          <TouchableOpacity key={site.id}>
            <BreedingCard
              key={site.id}
              site={{
                ...site,
                detectionTime: new Date(site.detectionTime),
                createdAt: new Date(site.createdAt),
                updatedAt: new Date(site.updatedAt),
              }}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </RecentWrapper>
  );
};

export default RecentBar;
