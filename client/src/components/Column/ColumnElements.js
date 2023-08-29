import { styled } from "styled-components";

export const ColumnContainer = styled.div`
  margin: 0.5em;
  border: 1px solid lightgray;
  border-radius: 0.5em;
  padding: 0.5em;
  width: 225px;
`;

export const ColumnTitle = styled.div`
  padding: 0.5em;
  border-bottom: ${({ color }) => `2px solid ${color}`};
  font-family: "Open Sans";
`;

export const ColumnItems = styled.div`
  padding: 0.5em;
  font-family: "Raleway";
  min-height: 50px;
  flex-grow: 1;
`;
