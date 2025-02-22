import express from "express";
import {
  createTask,
  deleteTask,
  getAllUserTask,
  getSingleTask,
  updateTaskStatus,
} from "../controller/task.controller.js";

const router = express.Router();

// Create a Task
router.get("/", getAllUserTask);

// Get a Single Task
router.get("/:taskId", getSingleTask);

// Create a Task
router.delete("/:taskId", deleteTask);

// Update Task Status
router.patch("/:taskId", updateTaskStatus);

// Create a Task
router.post("/", createTask);

export default router;
