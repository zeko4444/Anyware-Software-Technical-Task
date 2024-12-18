"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const quizService_1 = require("../services/quizService");
const router = express_1.default.Router();
router.post("/", quizService_1.createQuiz);
router.get("/", quizService_1.getAllQuizes);
router.get("/:id", quizService_1.getSpecificQuiz);
router.put("/:id", quizService_1.updateQuiz);
router.delete("/:id", quizService_1.deleteQuiz);
exports.default = router;
