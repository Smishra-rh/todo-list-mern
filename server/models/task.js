import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
  title: { type: String, required: true },
});

const Task = mongoose.model("Task", taskSchema);

export default Task;
