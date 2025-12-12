import express from "express";
import { forgotPassword, resetPassword } from "../controllers/authController.js";

const router = express.Router();

// Password reset endpoints
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);

export default router;
