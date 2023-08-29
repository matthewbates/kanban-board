import { useEffect, useRef } from "react";

import { SidebarContainer } from "./SidebarElements";

import { useClickOutside } from "../../utils/hooks";

export default function Sidebar({ isOpen, setIsOpen }) {
  const sidebarRef = useRef(null);

  useClickOutside(sidebarRef, () => {
    setIsOpen(false);
  });

  useEffect(() => {
    const handleResize = (e) => {
      if (e.target.innerWidth > 820) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <SidebarContainer $isOpen={isOpen} ref={sidebarRef}></SidebarContainer>
  );
}
