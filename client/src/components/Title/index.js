import { TitleContainer } from "./TitleElements";

export default function Title({ column, tasks }) {
  const { color, title } = column;
  const { length } = tasks;

  return (
    <TitleContainer color={color}>
      {title} ({length})
    </TitleContainer>
  );
}
