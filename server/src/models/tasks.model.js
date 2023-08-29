const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  content: { type: String, require: true },
});

module.exports = mongoose.model("Task", taskSchema);
