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

  @media screen and (min-width: 820px) {
    display: none;
  }
`;
