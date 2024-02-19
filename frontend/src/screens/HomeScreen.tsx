import { styled } from "goober";
import { ReactElement } from "react";
import { Link } from "react-router-dom";

const HomeScreen = (): ReactElement => {
  return (
    <Container>
      <Heading>Project{/*Welcome to the Music Project*/}</Heading>
      <LinksContainer>
        <LinkContainer>
          <Link to="/music">Music</Link>
        </LinkContainer>
        <LinkContainer>
          <Link to="/radio">Radio</Link>
        </LinkContainer>
      </LinksContainer>
    </Container>
  );
};

export default HomeScreen;

const Container = styled("div")`
  height: 100%;
  text-align: center;
`;
const Heading = styled("h1")``;
const LinksContainer = styled("div")`
  display: inline-flex;
  gap: 1em;
`;
const LinkContainer = styled("div")`
  & a {
    color: #fff;
    &:hover,
    &:focus {
      text-decoration: none;
    }
  }
`;
