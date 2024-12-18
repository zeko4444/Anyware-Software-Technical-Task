"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteQuiz = exports.updateQuiz = exports.getSpecificQuiz = exports.getAllQuizes = exports.createQuiz = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const apiError_1 = __importDefault(require("../utils/apiError"));
const quizModel_1 = __importDefault(require("../models/quizModel"));
// create a new quiz
exports.createQuiz = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, questions, course, topic, dueTo } = req.body;
    const quiz = yield quizModel_1.default.create({
        title,
        questions,
        course,
        topic,
        dueTo,
    });
    res.status(201).json({ data: quiz });
}));
// get all quizes
exports.getAllQuizes = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const quizes = yield quizModel_1.default.find();
    res.status(200).json({ data: quizes });
}));
// get specific quiz by id
exports.getSpecificQuiz = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const quiz = yield quizModel_1.default.findById(id);
    if (!quiz) {
        return next(new apiError_1.default("this quiz not valid", 404));
    }
    res.status(200).json({ data: quiz });
}));
// update quiz by id
exports.updateQuiz = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { title, questions, course, topic, dueTo } = req.body;
    const quiz = yield quizModel_1.default.findByIdAndUpdate(id, { title, questions, course, topic, dueTo }, { new: true });
    if (!quiz) {
        return next(new apiError_1.default("this quiz not valid", 404));
    }
    res.status(200).json({ data: quiz });
}));
// delete quiz by id
exports.deleteQuiz = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const quiz = yield quizModel_1.default.findByIdAndDelete(id);
    if (!quiz) {
        return next(new apiError_1.default("this quiz not valid", 404));
    }
    res.status(200).send("deleted");
}));
