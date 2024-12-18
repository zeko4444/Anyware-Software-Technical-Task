import express from "express";
import {
  createQuiz,
  deleteQuiz,
  getAllQuizes,
  getSpecificQuiz,
  updateQuiz,
} from "../services/quizService";

const router = express.Router();

router.post("/", createQuiz);
router.get("/", getAllQuizes);
router.get("/:id", getSpecificQuiz);
router.put("/:id", updateQuiz);
router.delete("/:id", deleteQuiz);

export default router;
