import express from "express";
import {
  createTask,
  getAllUserTask,
  updateTaskPosition,
} from "../controller/task.controller.js";

const router = express.Router();

// Create a Task
router.get("/", getAllUserTask);

// Update Task
router.put("/:taskId", updateTaskPosition);

// Create a Task
router.post("/", createTask);

export default router;
