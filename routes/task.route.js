import express from "express";
import { createTask } from "../controller/task.controller.js";

const router = express.Router();

// Create a Task
router.post("/", createTask);

export default router;
