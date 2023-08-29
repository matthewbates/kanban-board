import { Draggable } from "react-beautiful-dnd";

import { TaskContainer } from "./TaskElements";

export default function Task({ content, draggableId, index }) {
  return (
    <Draggable draggableId={draggableId} index={index}>
      {(provided) => (
        <TaskContainer
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {content}
        </TaskContainer>
      )}
    </Draggable>
  );
}
