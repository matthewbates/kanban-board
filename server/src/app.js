const bodyParser = require("body-parser");
const express = require("express");
const morgan = require("morgan");

const tasksRouter = require("./routes/tasks.router");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("dev"));

app.use("/tasks", tasksRouter);

module.exports = app;
