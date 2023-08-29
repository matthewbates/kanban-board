import { useRef } from "react";

import { SidebarContainer } from "./SidebarElements";

import { useClickOutside } from "../../utils/hooks";

export default function Sidebar({ isOpen, setIsOpen }) {
  const sidebarRef = useRef(null);

  useClickOutside(sidebarRef, () => {
    setIsOpen(false);
  });

  return (
    <SidebarContainer $isOpen={isOpen} ref={sidebarRef}></SidebarContainer>
  );
}
