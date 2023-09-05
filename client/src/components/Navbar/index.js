import { useState } from "react";

import { NavbarContainer, BurgerWrapper, ThemeWrapper } from "./NavbarElements";

import Burger from "../Burger";
import Sidebar from "../Sidebar";
import Toggle from "../Toggle";

export default function Navbar({ toggle, theme, setTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  // toggles the state of <Sidebar />
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarContainer $isOpen={isOpen}>
      <BurgerWrapper>
        <Burger isOpen={isOpen} setIsOpen={setIsOpen} />
      </BurgerWrapper>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <ThemeWrapper>
        <Toggle toggle={toggle} theme={theme} setTheme={setTheme} />
      </ThemeWrapper>
    </NavbarContainer>
  );
}
