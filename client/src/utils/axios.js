import axios from "axios";

export const getTasks = async (setInitialData) => {
  try {
    const response = await axios.get("http://localhost:8000/tasks");
    if (response.status === 200) {
      const fetchedTasks = response.data.tasks;
      setInitialData((prevData) => {
        const updatedColumns = { ...prevData.columns };
        // fetchedTasks.forEach((task) => {
        //   const columnId = task.status;
        //   console.log(columnId);
        //   if (updatedColumns[columnId]) {
        //     updatedColumns[columnId].taskIds.push(task.id);
        //   }
        // });
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

export const postTask = async (column, newTask, setNewTask, setInitialData) => {
  try {
    const response = await axios.post("http://localhost:8000/tasks/new-task", {
      id: column.id,
      content: newTask,
    });
    if (response.status === 201) {
      const newTask = {
        id: response.data.result._id,
        content: response.data.result.content,
      };
      setInitialData((prevData) => {
        const updatedColumns = { ...prevData.columns };
        updatedColumns[column.id].taskIds.push(newTask.id);
        const updatedTasks = {
          ...prevData.tasks,
          [newTask.id]: newTask,
        };
        return {
          ...prevData,
          tasks: updatedTasks,
          columns: updatedColumns,
        };
      });
      setNewTask("");
    }
  } catch (error) {
    console.log(error);
  }
};
