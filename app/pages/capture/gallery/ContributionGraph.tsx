import { Text, View } from "react-native";
import { useWindowDimensions } from "react-native";
import { ContributionGraph } from "react-native-chart-kit";
import styled from "styled-components";

const commitsData = [
  { date: "2024-11-03", count: 2 },
  { date: "2024-11-02", count: 1 },
  { date: "2024-12-04", count: 3 },
  { date: "2024-12-05", count: 4 },
  { date: "2024-12-06", count: 5 },
  { date: "2024-12-30", count: 2 },
  { date: "2025-01-04", count: 3 },
  { date: "2025-01-01", count: 2 },
  { date: "2025-01-02", count: 4 },
  { date: "2025-01-05", count: 2 },
  { date: "2025-01-07", count: 4 },
];

const GraphWrapper = styled(View)`
  margin-top: 20px;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

const Title = styled(Text)`
  text-align: center;
`;

export default function Graph() {
  const { width: screenWidth } = useWindowDimensions();

  return (
    <GraphWrapper>
      <Title>Contribution Graph for Breeding Site Detection</Title>
      <ContributionGraph
        values={commitsData}
        endDate={new Date()}
        numDays={105}
        width={screenWidth - 20}
        height={220}
        gutterSize={1}
        chartConfig={{
          backgroundColor: "#2c48ae",
          backgroundGradientFrom: "#3955B7",
          backgroundGradientTo: "#86b2cb",
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
            marginLeft: 10,
            marginRight: 10,
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726",
          },
        }}
        tooltipDataAttrs={(value) => {
          const hasCount = (v: any): v is { count: number } =>
            typeof v.count === "number";

          return hasCount(value) ? { rx: 9, ry: 9 } : { rx: 4, ry: 4 };
        }}
      />
    </GraphWrapper>
  );
}
