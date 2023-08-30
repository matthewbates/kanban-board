import styled from "styled-components";

export const SidebarContainer = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  left: ${({ $isOpen }) => ($isOpen ? "0" : "-100%")};
  height: 100vh;
  background: rgba(0, 0, 0, 0.75);
  transition: 0.3s ease;
  width: 50%;
  z-index: 998;

  @media screen and (min-width: 820px) {
    width: 40%;
  }

  @media screen and (min-width: 1200px) {
    width: 30%;
  }

  @media screen and (min-width: 1500px) {
    width: 25%;
  }
`;
