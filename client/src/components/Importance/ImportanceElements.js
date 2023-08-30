import styled from "styled-components";

export const PopoverContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 200px;
  width: 200px;
  background: #f1f2f2;
`;

export const PopoverSelect = styled.select`
  width: 75%;
  font-family: "Open Sans";
  font-size: 1em;
`;

export const PopoverOption = styled.option``;
