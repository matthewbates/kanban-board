import { useState, useEffect } from "react";

import { DragDropContext } from "react-beautiful-dnd";

import { KanbanBoardContainer } from "./KanbanBoardElements";

import Column from "../Column";

import { initialData } from "../../utils/data";

export default function KanbanBoard() {
  const onDragEnd = (result) => {
    console.log(result);
    const { source, destination, draggableId } = result;
    if (!destination) return;
  };

  return (
    <KanbanBoardContainer>
      <DragDropContext onDragEnd={onDragEnd}>
        {initialData.columnOrder.map((columnId) => {
          const column = initialData.columns[columnId];
          const tasks = column.taskIds?.map(
            (taskId) => initialData.tasks[taskId]
          );
          return (
            <Column
              key={column.id}
              droppableId={column.id}
              column={column}
              tasks={tasks}
            />
          );
        })}
      </DragDropContext>
    </KanbanBoardContainer>
  );
}
