import express from "express";
import { createTask, getAllUserTask } from "../controller/task.controller.js";

const router = express.Router();

// Create a Task
router.get("/", getAllUserTask);

// Create a Task
router.post("/", createTask);

export default router;
