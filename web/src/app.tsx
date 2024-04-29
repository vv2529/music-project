import { ReactElement } from "react";
import GlobalStyles from "./styles/global-styles";
import Router from "./router";

const App = (): ReactElement => {
  return (
    <>
      <GlobalStyles />
      <Router />
    </>
  );
};

export default App;
