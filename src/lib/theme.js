import React from "react";
import {
  unstable_createMuiStrictModeTheme as createMuiTheme,
  StylesProvider,
  ThemeProvider,
} from "@material-ui/core/styles";

export const colors = {
  primary: "#2196F3",
  secondary: "#d95141",
  error: "#F44336",
  warning: "#FFEB3B",
  info: "#00BCD4",
  success: "#4CAF50",
  black: "#000",
  white: "#fff",
  gray: "#ededed",
};

const themePalette = createMuiTheme({
  palette: {
    primary: {
      main: colors.primary,
      contrastText: colors.white,
    },
    secondary: {
      main: colors.secondary,
      contrastText: colors.white,
    },
    error: {
      main: colors.error,
      contrastText: colors.white,
    },
    warning: {
      main: colors.warning,
      contrastText: colors.white,
    },
    info: {
      main: colors.info,
      contrastText: colors.white,
    },
    success: {
      main: colors.success,
      contrastText: colors.white,
    },
    text: {
      primary: colors.black,
      secondary: colors.white,
    },
  },
  spacing: 4,
});

const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={themePalette}>
      <StylesProvider>{children}</StylesProvider>
    </ThemeProvider>
  );
};

export default Theme;
