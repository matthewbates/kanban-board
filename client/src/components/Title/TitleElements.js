import styled from "styled-components";

export const TitleContainer = styled.div`
  padding: 0.5em;
  border-bottom: ${({ color }) => `2px solid ${color}`};
  font-family: "Raleway";
  margin-bottom: 0.5em;
  color: ${({ theme }) => (theme === "dark" ? "#ffffff" : "#000000")};
  opacity: 87%;
`;
