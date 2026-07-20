import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";

import {
  signUp,
  login,
  logout,
  getMe,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/signup", signUp);

router.post("/login", login);

router.post("/logout", logout);

router.get("/me", authMiddleware, getMe);

export default router;