// allows the user to drag a <Task /> inside the current <Column /> / to another <Column />
export const onDragEnd = (result, initialData, setInitialData) => {
  const { source, destination, draggableId } = result;

  if (!destination) return;
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
  saveTasksToLocalStorage(initialData);
};

// handles the switch between <button> and <input />
export const toggleInputType = (inputType, setInputType) => {
  setInputType(inputType === "button" ? "text" : "button");
};

// toggles <Sidebar />
export const toggleSidebar = (isOpen, setIsOpen) => {
  setIsOpen(!isOpen);
};

// allows the user to use return/enter to submit a new task
export const handleKeyPress = (e, postTask, setInputType) => {
  if (e.target.value === "") setInputType("button");
  if (e.key === "Enter") {
    e.preventDefault();
    postTask();
  }
};

// toggles the theme from light to dark
export const toggleTheme = (theme, setTheme) => {
  theme === "light" ? setTheme("dark") : setTheme("light");
};

// toggles the hover state in <Task />
export const toggleHover = (isHovered, setIsHovered) => {
  setIsHovered(!isHovered);
};

// toggles the popover state in <Task />
export const togglePopover = (showPopover, setShowPopover) => {
  setShowPopover(!showPopover);
};

// saves tasks to localStorage
export const saveTasksToLocalStorage = (tasks) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

// gets tasks from localStorage
export const getTasksFromLocalStorage = () => {
  const tasks = localStorage.getItem("tasks");
  return tasks ? JSON.parse(tasks) : null;
};
