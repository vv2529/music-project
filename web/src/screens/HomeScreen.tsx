import { styled } from "goober";
import { ReactElement } from "react";
import { Link } from "react-router-dom";

const HomeScreen = (): ReactElement => {
  return (
    <Container>
      <Heading>The Music Project</Heading>
      <LinksContainer>
        <LinkContainer>
          <Link to="/radio">
            <span>Radio</span>
          </Link>
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
  margin-top: 30vh;
  & a {
    padding: 3em;
    border: 1px solid #fff;
    border-radius: 1em;
    background: transparent;
    color: #fff;
    transition: background 0.25s;

    & span {
      position: relative;
      &::after {
        content: "";
        position: absolute;
        left: 50%;
        bottom: 0;
        display: inline-block;
        width: 0;
        border-bottom: 1px solid #fff;
        transition: left 0.25s, width 0.25s;
      }
    }

    &:hover,
    &:focus {
      background: rgba(255, 255, 255, 0.1);
      text-decoration: none;

      & span::after {
        left: 0;
        width: 100%;
      }
    }
  }
`;
