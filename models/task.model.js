import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxLength: 50,
    },
    description: {
      type: String,
      required: true,
      maxLength: 200,
    },
    status: {
      type: String,
      required: true,
      enum: ["To Do", "In Progress", "Done"],
    },
    position: {
      type: Number,
      required: true,
    },
    fireId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Task = mongoose.model("Task", taskSchema);

export default Task;
