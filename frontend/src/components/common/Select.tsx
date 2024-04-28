import { styled } from "goober";
import { ReactElement, SelectHTMLAttributes } from "react";

type Props = SelectHTMLAttributes<HTMLSelectElement>;

const Select = (props: Props): ReactElement => {
  return <SelectStyled {...props} />;
};

export default Select;

const SelectStyled = styled("select")`
  max-width: calc(100% - 10px);
  width: 20em;
  margin: 0 5px;
  padding: 0.75em 0.9em;
  border: none;
  border-bottom: 1px solid #ddd;
  background: none;
  color: #fff;
  cursor: pointer;

  &:disabled {
    color: #888;
  }
  &:focus {
    outline: none;
    background: linear-gradient(hsla(240, 0%, 5%, 0.75), hsla(240, 0%, 5%, 0.75)), $primary-color;
  }

  & option {
    margin: 0;
    background: hsl(240, 0%, 15%);
  }
`;
