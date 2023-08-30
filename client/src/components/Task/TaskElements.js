import styled from "styled-components";

export const TaskContainer = styled.div`
  padding: 1em;
  border: 1px solid lightgray;
  border-radius: 0.5em;
  margin-bottom: 0.5em;
  background: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
`;

export const TaskWrapper = styled.div`
  max-width: 90%;
  font-size: 0.9em;
`;

export const DotsWrapper = styled.div`
  display: ${({ isHovered }) => (isHovered === true ? "flex" : "none")};
  cursor: pointer;
`;
