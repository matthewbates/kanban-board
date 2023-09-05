import styled from "styled-components";

export const TitleContainer = styled.div`
  padding: 0.5em;
  border-bottom: ${({ color, theme }) =>
    theme === "light" ? `2px solid ${color}` : "2px solid #f1f2f2"};
  font-family: "Raleway";
  margin-bottom: 0.5em;
  color: ${({ theme }) => (theme === "dark" ? "#ffffff" : "#000000")};
  opacity: ${({ theme }) => theme === "dark" && "90%"};
`;
