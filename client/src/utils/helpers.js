// allows the user to drag a <Task /> inside the current <Column /> / to another <Column />
export const onDragEnd = (result, initialData, setInitialData) => {
  const { source, destination, draggableId } = result;

  if (!destination) {
    return;
  }
  if (
    source.droppableId === destination.droppableId &&
    source.index === destination.index
  ) {
    return;
  }
  // "column-1", "column-2", etc.
  const start = initialData.columns[source.droppableId];
  const finish = initialData.columns[destination.droppableId];

  // if you're rearranging a task in the same column
  if (start === finish) {
    // returns an array of the newly-arranged taskIds array
    const newTaskIds = Array.from(start.taskIds);
    // deletes the index of the task being rearragned
    newTaskIds.splice(source.index, 1);
    // adds the task to its new position in the array
    newTaskIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...start,
      taskIds: newTaskIds,
    };
    setInitialData({
      ...initialData,
      columns: {
        ...initialData.columns,
        [newColumn.id]: newColumn,
      },
    });
    return;
  }
  // move from one list to another
  const startTaskIds = Array.from(start.taskIds);
  startTaskIds.splice(source.index, 1);
  const newStart = {
    ...start,
    taskIds: startTaskIds,
  };
  const finishTaskIds = Array.from(finish.taskIds);
  finishTaskIds.splice(destination.index, 0, draggableId);
  const newFinish = {
    ...finish,
    taskIds: finishTaskIds,
  };
  setInitialData({
    ...initialData,
    columns: {
      ...initialData.columns,
      [newStart.id]: newStart,
      [newFinish.id]: newFinish,
    },
  });
  console.log(newStart, newFinish);
};

// handles the switch between <button> and <input />
export const toggleInputType = (inputType, setInputType) => {
  setInputType(inputType === "button" ? "text" : "button");
};

// toggles <Sidebar />
export const toggleSidebar = (isOpen, setIsOpen) => {
  setIsOpen(!isOpen);
};
