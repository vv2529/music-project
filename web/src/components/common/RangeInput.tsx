import { styled } from "goober";
import { InputHTMLAttributes, ReactElement } from "react";

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, "type">;

const RangeInput = (props: Props): ReactElement => {
  return <RangeInputStyled type="range" {...props} />;
};

export default RangeInput;

const sliderTrack = `
  width: 100%;
  height: 1em;
  border: 1px solid #888;
  border-radius: 0.5em;
  box-shadow: 0px 0px 5px #444;
  background: hsl(240, 0%, 10%);
  cursor: pointer;
`;
const sliderThumb = `
  width: 2em;
  height: 2em;
  margin-top: -0.5em;
  border: 1px solid #888;
  border-radius: 0.5em;
  box-shadow: 0px 0px 5px #444;
  background: hsl(240, 0%, 0%);
  cursor: pointer;
`;
const sliderThumbFocus = `
  box-shadow: 0px 0px 5px #666;
`;
const sliderThumbActive = `
  box-shadow: 0px 0px 5px #888;
`;
const RangeInputStyled = styled("input")`
  appearance: none;
  width: 12em;
  height: 3em;
  padding: 0;
  background: none;

  &:focus {
    outline: none;
  }

  &::-webkit-slider-runnable-track {
    ${sliderTrack}
  }
  &::-webkit-slider-thumb {
    appearance: none;
    ${sliderThumb}
  }

  &::-moz-range-track {
    ${sliderTrack}
  }
  &::-moz-range-thumb {
    ${sliderThumb}
  }

  &::-ms-track {
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  &::-ms-tooltip {
    display: none;
  }
  &::-ms-fill-lower {
    ${sliderTrack}
  }
  &::-ms-fill-upper {
    ${sliderTrack}
  }
  &::-ms-thumb {
    ${sliderThumb}
    margin-top: -0.25em;
  }

  &:hover::-moz-range-thumb,
  &:focus::-moz-range-thumb {
    ${sliderThumbFocus}
  }
  &:hover::-webkit-slider-thumb,
  &:focus::-webkit-slider-thumb {
    ${sliderThumbFocus}
  }
  &:hover::-ms-thumb,
  &:focus::-ms-thumb {
    ${sliderThumbFocus}
  }

  &:active::-moz-range-thumb {
    ${sliderThumbActive}
  }
  &:active::-webkit-slider-thumb {
    ${sliderThumbActive}
  }
  &:active::-ms-thumb {
    ${sliderThumbActive}
  }
`;
