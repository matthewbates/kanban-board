import { Squeeze as Hamburger } from "hamburger-react";

import { BurgerContainer } from "./BurgerElements";

import { toggleSidebar } from "../../utils/helpers";

export default function Burger({ isOpen, setIsOpen }) {
  return (
    <BurgerContainer $isOpen={isOpen}>
      <Hamburger
        toggled={isOpen}
        toggle={() => toggleSidebar(isOpen, setIsOpen)}
      />
    </BurgerContainer>
  );
}
