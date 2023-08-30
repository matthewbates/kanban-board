import { useState } from "react";

import { NavbarContainer, BurgerWrapper } from "./NavbarElements";

import Burger from "../Burger";
import Sidebar from "../Sidebar";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavbarContainer $isOpen={isOpen}>
      <BurgerWrapper>
        <Burger isOpen={isOpen} setIsOpen={setIsOpen} />
      </BurgerWrapper>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </NavbarContainer>
  );
}
