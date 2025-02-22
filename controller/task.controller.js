import mongoose from "mongoose";
import Task from "../models/task.model.js";

export const createTask = async (req, res) => {
  const task = req.body;

  if (
    !task.title ||
    !task.description ||
    !task.status ||
    !task.position ||
    !task.fireId
  ) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all fields" });
  }

  const newTask = new Task(task);

  try {
    await newTask.save();
    res.status(201).json(newTask);
  } catch (err) {
    console.log("Error in creating task: " + err.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const getAllUserTask = async (req, res) => {
  const { fireId } = req.query;

  try {
    const tasks = await Task.find({ fireId });
    res.status(201).json(tasks);
  } catch (err) {
    console.log("Error in fetching task: " + err.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const updateTaskPosition = async (req, res) => {
  const { taskId } = req.params;
  const { status, position } = req.body;

  if (!mongoose.Types.ObjectId.isValid(taskId)) {
    return res.status(500).json({ success: false, message: "Invalid Task Id" });
  }

  const updated = {
    $set: { status, position },
  };

  try {
    const updatedTask = await Task.findByIdAndUpdate(taskId, updated, {
      new: true,
    });
    res.status(200).json(updatedTask);
  } catch (error) {
    console.log("Error in updating task: " + err.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
