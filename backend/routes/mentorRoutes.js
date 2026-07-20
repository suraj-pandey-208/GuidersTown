import express from "express";
import {
  createMentor,
  getAllMentors,
  getSingleMentor,
} from "../controllers/mentorController.js";

const router = express.Router();

router.post("/", createMentor);

router.get("/", getAllMentors);

router.get("/:id", getSingleMentor);

export default router;