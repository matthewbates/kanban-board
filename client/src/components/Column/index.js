import { Fragment, useState } from "react";

import { Droppable } from "react-beautiful-dnd";

import { ColumnContainer, ColumnItems } from "./ColumnElements";

import NewTask from "../NewTask";
import Task from "../Task";
import Title from "../Title";

export default function Column({
  setInitialData,
  droppableId,
  column,
  tasks,
  theme,
}) {
  const [inputType, setInputType] = useState("button");
  const [newTask, setNewTask] = useState("");

  return (
    <ColumnContainer theme={theme}>
      <Title column={column} tasks={tasks} theme={theme} />
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
              theme={theme}
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
