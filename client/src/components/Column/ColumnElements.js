import { styled } from "styled-components";

export const ColumnContainer = styled.div`
  margin: 0.5em;
  border-radius: 0.5em;
  background: ${({ theme }) => theme === "dark" && "hsl(233, 8%, 19%)"};
  padding: 0.5em;
  width: 100%;
  max-width: 300px;
  box-shadow: ${({ theme }) =>
    theme === "light"
      ? "rgba(0, 0, 0, 0.16) 0px 1px 4px"
      : "0 -2px 10px rgba(0, 0, 0, 1)"};
`;

export const ColumnItems = styled.div`
  padding: 0.5em;
  font-family: "Open Sans";
  min-height: 100px;
  flex-grow: 1;
`;
