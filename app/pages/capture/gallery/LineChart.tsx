import { useWindowDimensions, ScrollView, Text, View } from "react-native";
import { LineChart } from "react-native-chart-kit";
import styled from "styled-components";

const data = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43, 35, 67, 90, 75, 85, 95],
      strokeWidth: 2,
      color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
      title: "Artificial Container",
    },
    {
      data: [30, 60, 40, 70, 95, 50, 45, 55, 78, 88, 70, 100],
      strokeWidth: 2,
      color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
      title: "Natural Container",
    },
  ],
};

const GraphWrapper = styled(View)`
  margin-top: 50px;
  gap: 10px;
  align-items: start;
  justify-content: center;
`;

const Title = styled(Text)`
  text-align: start;
`;

const ClassificationContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const ClassificationItem = styled(View)`
  flex-direction: row;
  align-items: center;
  margin-right: 15px;
`;

interface LegendBoxProps {
  bgColor?: string;
}

const LegendBox = styled(View)<LegendBoxProps>`
  width: 10px;
  height: 10px;
  margin-right: 5px;
  background-color: ${(props) => props.bgColor || "transparent"};
`;

export default function LineGraph() {
  const { width: screenWidth } = useWindowDimensions();
  const chartWidth = Math.max(screenWidth, data.labels.length * 70);

  return (
    <GraphWrapper>
      <Title>Comparison of Classification Methods</Title>

      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 10 }}
        showsHorizontalScrollIndicator={false}
      >
        <LineChart
          style={{
            borderRadius: 16,
          }}
          data={data}
          width={chartWidth} // Dynamically set width
          height={256}
          verticalLabelRotation={0}
          chartConfig={{
            backgroundColor: "#2c48ae",
            backgroundGradientFrom: "#e6cda5",
            backgroundGradientTo: "#4c8cb7",
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
              r: "2",
              strokeWidth: "2",
            },
            formatYLabel: (value) => `${(Number(value) / 100).toFixed(2)}%`,
          }}
          bezier
        />
      </ScrollView>

      <ClassificationContainer>
        <ClassificationItem>
          <LegendBox bgColor="rgba(0, 0, 255, 1)" />
          <Text>Artificial Container</Text>
        </ClassificationItem>
        <ClassificationItem>
          <LegendBox bgColor="rgba(255, 0, 0, 1)" />
          <Text>Natural Container</Text>
        </ClassificationItem>
      </ClassificationContainer>
    </GraphWrapper>
  );
}
