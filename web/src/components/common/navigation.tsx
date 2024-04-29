import { styled } from "goober";
import { ReactElement } from "react";
import { Link, LinkProps } from "react-router-dom";

type Props = LinkProps;

export const BackNavigation = (props: Props): ReactElement => {
  return (
    <BackArrow>
      <Link {...props} />
    </BackArrow>
  );
};

const BackArrow = styled("div")`
  position: absolute;
  top: 1em;
  left: 1em;
  width: 0.75em;
  height: 0.75em;
  border-top: 2px solid #fff;
  border-left: 2px solid #fff;
  transform: rotate(-45deg);
  cursor: pointer;

  &:hover {
    border-color: #ddd;
  }
  &:focus {
    border-color: #bbb;
  }

  & a {
    display: block;
    width: 100%;
    height: 100%;
    transform: rotate(45deg) scale(1.5);
  }
`;
