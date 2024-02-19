import { styled } from "goober";
import { ReactElement } from "react";

const RadioScreen = (): ReactElement => {
  return (
    <Container>
      <Heading>Radio</Heading>
    </Container>
  );
};

export default RadioScreen;

const Container = styled("div")`
  height: 100%;
  text-align: center;
`;
const Heading = styled("h1")``;
