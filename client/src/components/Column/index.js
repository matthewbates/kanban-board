import { Fragment, useState } from "react";

import { Droppable } from "react-beautiful-dnd";
import axios from "axios";

import { ColumnContainer, ColumnItems } from "./ColumnElements";

import NewTask from "../NewTask";
import Task from "../Task";
import Title from "../Title";

export default function Column({ setInitialData, droppableId, column, tasks }) {
  const [inputType, setInputType] = useState("button");
  const [newTask, setNewTask] = useState("");

  // const postTask = async () => {
  //   try {
  //     const response = await axios.post(
  //       "http://localhost:8000/tasks/new-task",
  //       {
  //         id: column.id,
  //         content: newTask,
  //       }
  //     );
  //     if (response.status === 201) {
  //       const newTask = {
  //         id: response.data.result._id,
  //         content: response.data.result.content,
  //       };
  //       setInitialData((prevData) => {
  //         const updatedColumns = { ...prevData.columns };
  //         updatedColumns[column.id].taskIds.push(newTask.id);
  //         const updatedTasks = {
  //           ...prevData.tasks,
  //           [newTask.id]: newTask,
  //         };
  //         return {
  //           ...prevData,
  //           tasks: updatedTasks,
  //           columns: updatedColumns,
  //         };
  //       });
  //       setNewTask("");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <ColumnContainer>
      <Title column={column} tasks={tasks} />
      <Droppable droppableId={droppableId}>
        {(provided) => (
          <ColumnItems ref={provided.innerRef} {...provided.droppableProps}>
            <NewTask
              newTask={newTask}
              setNewTask={setNewTask}
              inputType={inputType}
              setInputType={setInputType}
              column={column}
              setInitialData={setInitialData}
              // postTask={postTask}
            />
            {tasks.map(({ id, content }, index) => (
              <Fragment key={id}>
                <Task draggableId={id} index={index} content={content} />
              </Fragment>
            ))}
            {provided.placeholder}
          </ColumnItems>
        )}
      </Droppable>
    </ColumnContainer>
  );
}
