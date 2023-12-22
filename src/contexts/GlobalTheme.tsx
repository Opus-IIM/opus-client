import React from "react";
import useThemeDetector from "@hooks/useThemeDetector";
import themes from "@themes/index";
import { Theme } from "@typesDef/themes";
import { ThemeProvider } from "styled-components";

const GlobalThemeContext = React.createContext({
  globalTheme: themes.humanResources,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setGlobalTheme: (_theme: Theme) => undefined,
  switchTheme: () => undefined,
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const GlobalThemeProvider = (props: any) => {
  const isDarkTheme = useThemeDetector();
  const [globalTheme, setGlobalTheme] = React.useState(themes.humanResources);

  const switchTheme = () => {
    setGlobalTheme(
      globalTheme.name === "employee" ? themes.humanResources : themes.employee,
    );
  };

  React.useEffect(() => {
    setGlobalTheme(isDarkTheme ? themes.employee : themes.humanResources);
  }, [isDarkTheme]);

  return (
    <GlobalThemeContext.Provider
      value={{ globalTheme, setGlobalTheme, switchTheme }}
      {...props}
    >
      <ThemeProvider theme={globalTheme}>{props.children}</ThemeProvider>
    </GlobalThemeContext.Provider>
  );
};

export { GlobalThemeContext, GlobalThemeProvider };
