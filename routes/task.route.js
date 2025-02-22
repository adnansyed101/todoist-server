import express from "express";
import {
  createTask,
  getAllUserTask,
  updateTask,
} from "../controller/task.controller.js";

const router = express.Router();

// Create a Task
router.get("/", getAllUserTask);

// Update Task
router.put("/:taskId", updateTask);

// Create a Task
router.post("/", createTask);

export default router;
