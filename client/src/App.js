import "./App.css";

import { useState } from "react";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./utils/globalStyles";
import { lightTheme, darkTheme } from "./utils/constants";

import KanbanBoard from "./components/KanbanBoard";
import Navbar from "./components/Navbar";

import { toggleTheme } from "./utils/helpers";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Navbar toggle={toggleTheme} theme={theme} setTheme={setTheme} />
      <KanbanBoard theme={theme} />
    </ThemeProvider>
  );
}

export default App;
