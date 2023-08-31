import { TitleContainer } from "./TitleElements";

export default function Title({ column, tasks, theme }) {
  const { color, title } = column;
  const { length } = tasks;

  return (
    <TitleContainer color={color} theme={theme}>
      {title} ({length})
    </TitleContainer>
  );
}
