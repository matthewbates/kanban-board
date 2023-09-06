import styled from "styled-components";

export const PopoverContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  flex-direction: column;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 350px;
  width: 175px;
  background: #f1f2f2;
  border-radius: 0.5em;
  z-index: 999;
`;

export const PopoverWrapper = styled.div`
  margin-top: 0.5em;
`;

export const PopoverSelect = styled.select`
  font-family: "Open Sans";
`;

export const PopoverOption = styled.option``;
