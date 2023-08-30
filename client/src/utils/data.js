export const data = {
  // taskId
  tasks: {
    // "task-1": {
    //   id: "task-1",
    //   content: "This is task 1",
    // },
    // "task-2": {
    //   id: "task-2",
    //   content: "This is task 2",
    // },
    // "task-3": {
    //   id: "task-3",
    //   content: "This is task 3",
    // },
    // "task-4": {
    //   id: "task-4",
    //   content: "This is task 4",
    // },
  },
  // columnId
  columns: {
    "column-1": {
      id: "column-1",
      title: "To Do",
      color: "purple",
      taskIds: [],
    },
    "column-2": {
      id: "column-2",
      title: "In Progress",
      color: "blue",
      taskIds: [],
    },
    "column-3": {
      id: "column-3",
      title: "Completed",
      color: "green",
      taskIds: [],
    },
    "column-4": {
      id: "column-4",
      title: "On Hold",
      color: "yellow",
      taskIds: [],
    },
    "column-5": {
      id: "column-5",
      title: "Cancelled",
      color: "red",
      taskIds: [],
    },
  },
  columnOrder: ["column-1", "column-2", "column-3", "column-4", "column-5"],
};
