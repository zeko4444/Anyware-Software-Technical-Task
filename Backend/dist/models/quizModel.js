"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const questionSchema = new mongoose_1.default.Schema({
    question: { type: String, required: true },
    choices: { type: [String], required: true },
    answer: { type: String, required: true },
});
const quizSchema = new mongoose_1.default.Schema({
    title: { type: String, required: true },
    course: { type: String, required: true },
    topic: { type: String, required: true },
    dueTo: { type: Date, required: true },
    questions: [questionSchema],
}, { timestamps: true });
const quizModel = mongoose_1.default.model("quiz", quizSchema);
exports.default = quizModel;
