import { Droppable } from "react-beautiful-dnd";

import Task from "../Task";

import { ColumnContainer, ColumnTitle, ColumnItems } from "./ColumnElements";

export default function Column({ column, droppableId, tasks }) {
  console.log(tasks);
  return (
    <ColumnContainer>
      <ColumnTitle color={column.color}>
        {column.title} ({tasks.length})
      </ColumnTitle>
      <Droppable droppableId={droppableId}>
        {(provided, snapshot) => (
          <ColumnItems ref={provided.innerRef} {...provided.droppableProps}>
            {tasks.map(({ id, content }, index) => (
              <Task key={id} draggableId={id} index={index} content={content} />
            ))}
            {provided.placeholder}
          </ColumnItems>
        )}
      </Droppable>
    </ColumnContainer>
  );
}
