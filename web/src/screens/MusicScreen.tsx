import { styled } from "goober";
import { ReactElement } from "react";

const MusicScreen = (): ReactElement => {
  return (
    <Container>
      <Heading>Music</Heading>
    </Container>
  );
};

export default MusicScreen;

const Container = styled("div")`
  height: 100%;
  text-align: center;
`;
const Heading = styled("h1")``;
