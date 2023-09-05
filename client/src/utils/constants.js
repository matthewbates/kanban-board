import { createTheme } from "@mui/material/styles";

export const lightTheme = {
  body: "#FFF",
  text: "#363537",
  background: "#363537",
};
export const darkTheme = {
  body: "#121212",
  text: "#FAFAFA",
  background: "#999",
};

export const CONSTANTS = {
  colors: {
    offWhite: "#f1f2f2",
  },
};

export const customTheme = createTheme({
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: "1em",
          fontFamily: "Open Sans",
          padding: "0.5em",
        },
      },
    },
  },
});
