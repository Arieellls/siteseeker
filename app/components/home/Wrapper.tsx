import { View } from "react-native";
import styled from "styled-components";
import { theme } from "../../infrastructure/theme";
import Greetings from "./Greetings";
import BreedingCard from "../sites/SiteTile";
import Content from "../sites/Content";

const Container = styled(View)`
  flex: 1;
  /* background-color: blue; */
  width: 100%;
  align-items: flex-start; /* Changed from 'start' to 'flex-start' */
  justify-content: flex-start;
  padding: ${theme.space[3]};
  flex-direction: column;
`;

export default function Wrapper() {
  return (
    <Container>
      <Greetings />
      <Content />
    </Container>
  );
}
