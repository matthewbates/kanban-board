import { useState, useEffect } from "react";

import { DragDropContext } from "react-beautiful-dnd";
import axios from "axios";

import { KanbanBoardContainer } from "./KanbanBoardElements";

import Column from "../Column";

import { data } from "../../utils/data";
import { onDragEnd } from "../../utils/helpers";

export default function KanbanBoard() {
  const [initialData, setInitialData] = useState(data);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("http://localhost:8000/tasks");
        if (response.status === 200) {
          const fetchedTasks = response.data.tasks;
          setInitialData((prevData) => {
            const updatedColumns = { ...prevData.columns };
            fetchedTasks.forEach((task) => {
              const columnId = task.status;
              if (updatedColumns[columnId]) {
                updatedColumns[columnId].taskIds.push(task.id);
              }
            });
            const updatedTasks = { ...prevData.tasks };
            fetchedTasks.forEach((task) => {
              updatedTasks[task.id] = {
                id: task.id,
                content: task.content,
              };
            });
            return {
              ...prevData,
              tasks: updatedTasks,
              columns: updatedColumns,
            };
          });
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchTasks();
  }, []);

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
            />
          );
        })}
      </DragDropContext>
    </KanbanBoardContainer>
  );
}
