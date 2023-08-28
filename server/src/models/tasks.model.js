const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  content: { type: String, required: true },
});

module.exports = mongoose.model("Task", taskSchema);
