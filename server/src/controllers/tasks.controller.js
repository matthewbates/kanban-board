const mongoose = require("mongoose");

const Task = require("../models/tasks.model");

const createNewTask = (req, res, next) => {
  const task = new Task({
    _id: new mongoose.Types.ObjectId(),
    content: req.body.content,
  });
  return task
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "Task created successfully",
        result: {
          _id: result._id,
          content: result.content,
        },
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};

const getAllTasks = (req, res, next) => {
  const taskId = req.params.taskId;

  Task.find({ task: taskId })
    .exec()
    .then((docs) => {
      const response = {
        tasks: docs.map((task) => {
          return {
            id: task._id,
            content: task.content,
          };
        }),
      };
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};

module.exports = { createNewTask, getAllTasks };
