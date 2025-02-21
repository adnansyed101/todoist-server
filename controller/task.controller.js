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
