import { Squash as Hamburger } from "hamburger-react";

import { BurgerContainer } from "./BurgerElements";

import { toggleSidebar } from "../../utils/helpers";

export default function Burger({ isOpen, setIsOpen }) {
  return (
    <BurgerContainer $isOpen={isOpen}>
      <Hamburger
        size={24}
        toggled={isOpen}
        toggle={() => toggleSidebar(isOpen, setIsOpen)}
      />
    </BurgerContainer>
  );
}
