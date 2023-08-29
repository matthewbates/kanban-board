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
`;
