const express = require("express");

const tasksController = require("../controllers/tasks.controller");

const tasksRouter = express.Router();

tasksRouter.post("/new-task", tasksController.createNewTask);
tasksRouter.get("/", tasksController.getAllTasks);

module.exports = tasksRouter;
