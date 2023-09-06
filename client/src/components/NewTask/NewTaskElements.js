import styled from "styled-components";

export const NewTaskBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0.99em;
  border: 1px solid lightgray;
  border-radius: 0.5em;
  margin-bottom: 0.5em;
  background: #ffffff;
  width: 100%;
  font-family: "Open Sans";
  color: #3a8def;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

export const NewTaskWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
  padding: 0.75em;
  border: 1px solid lightgray;
  border-radius: 0.5em;
  margin-bottom: 0.5em;
  background: #ffffff;
  color: #3a8def;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

export const NewTaskInput = styled.input`
  border: none;
  outline: none;
  font-family: "Open Sans";
  width: 100%;
`;

export const ArrowWrapper = styled.div`
  display: flex;
  margin: auto;
  gap: 0.25em;
`;
