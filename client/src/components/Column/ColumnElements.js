import { styled } from "styled-components";

export const ColumnContainer = styled.div`
  margin: 0.5em;
  border: 1px solid lightgray;
  border-radius: 0.5em;
  padding: 0.5em;
  width: 100%;
  max-width: 300px;
`;

export const ColumnTitle = styled.div`
  padding: 0.5em;
  border-bottom: ${({ color }) => `2px solid ${color}`};
  font-family: "Raleway";
  margin-bottom: 0.5em;
`;

export const ColumnItems = styled.div`
  padding: 0.5em;
  font-family: "Open Sans";
  min-height: 100px;
  max-height: 250px;
  overflow: scroll;
  flex-grow: 1;
`;
