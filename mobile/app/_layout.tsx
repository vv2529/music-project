import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ReactElement } from "react";
import GlobalStyles from "../styles/global-styles";

const Layout = (): ReactElement => {
  return (
    <>
      <GlobalStyles />
      <Slot />
      <StatusBar style="auto" />
    </>
  );
};

export default Layout;
