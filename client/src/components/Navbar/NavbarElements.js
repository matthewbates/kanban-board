import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  width: 100%;
  background: gray;
  margin-bottom: 0.5em;
  border-bottom: 1px solid #000000;
`;

export const BurgerWrapper = styled.div`
  display: flex;
  margin-right: auto;
`;

export const ThemeWrapper = styled.div`
  margin-right: 0.5em;
`;

export const ThemeBtn = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 1.25em;
  margin-top: 0.25em;
  color: #ffffff;
`;
