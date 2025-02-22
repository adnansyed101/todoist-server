import express from "express";
import {
  createTask,
  getAllUserTask,
  updateTaskStatus,
} from "../controller/task.controller.js";

const router = express.Router();

// Create a Task
router.get("/", getAllUserTask);

// Update Task
router.patch("/:taskId", updateTaskStatus);

// Create a Task
router.post("/", createTask);

export default router;
