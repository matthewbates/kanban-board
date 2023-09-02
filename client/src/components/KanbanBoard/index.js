import { useState, useEffect } from "react";

import { DragDropContext } from "react-beautiful-dnd";
import axios from "axios";

import { KanbanBoardContainer } from "./KanbanBoardElements";

import Column from "../Column";

import { data } from "../../utils/data";
import { onDragEnd } from "../../utils/helpers";
import { getTasks } from "../../utils/axios";

export default function KanbanBoard({ theme }) {
  const [initialData, setInitialData] = useState(data);

  useEffect(() => {
    // const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    // if (storedTasks) {
    //   setInitialData(storedTasks);
    // }
    // getTasks(setInitialData);
  }, []);

  console.log(localStorage);

  return (
    <KanbanBoardContainer>
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, initialData, setInitialData)}
      >
        {initialData.columnOrder.map((columnId) => {
          const column = initialData.columns[columnId];
          const tasks = column.taskIds?.map(
            (taskId) => initialData.tasks[taskId]
          );

          return (
            <Column
              key={column.id}
              setInitialData={setInitialData}
              droppableId={column.id}
              column={column}
              tasks={tasks}
              theme={theme}
            />
          );
        })}
      </DragDropContext>
    </KanbanBoardContainer>
  );
}
