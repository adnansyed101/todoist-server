import express from "express";
import { createUser } from "../controller/user.controller.js";

const router = express.Router();

// Create a user
router.post("/:fireId", createUser);

export default router;
