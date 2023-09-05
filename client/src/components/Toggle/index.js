import { Switch } from "@mui/material";
import { Tooltip } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import { customTheme } from "../../utils/constants";

export default function Toggle({ toggle, theme, setTheme }) {
  return (
    <ThemeProvider theme={customTheme}>
      <Tooltip title={theme === "light" ? "Light Mode" : "Dark Mode"}>
        <Switch onClick={() => toggle(theme, setTheme)} color="default" />
      </Tooltip>
    </ThemeProvider>
  );
}
