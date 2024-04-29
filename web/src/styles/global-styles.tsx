import "./reset.css";
import { setup } from "goober";
import { prefix } from "goober/prefixer";
import { shouldForwardProp } from "goober/should-forward-prop";
import { createGlobalStyles } from "goober/global";
import { createElement } from "react";

setup(
  createElement,
  prefix,
  () => {},
  shouldForwardProp((prop) => prop["0"] !== "$")
);

const GlobalStyles = createGlobalStyles`
  body {
    background-color: #000;
    color: #fff;
    font-family: sans-serif;
    font-size: 18px;
  }
  h1 {
    margin: 2em 0 0.75em;
    font-size: 2em;
  }
` as React.FC;

export default GlobalStyles;
