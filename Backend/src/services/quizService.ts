import { NextFunction, Request, Response } from "express";
import asyncHandler from "express-async-handler";
import ApiError from "../utils/apiError";
import quizModel from "../models/quizModel";

// create a new quiz
export const createQuiz = asyncHandler(async (req: Request, res: Response) => {
  const { title, questions, course, topic, dueTo } = req.body;
  const quiz = await quizModel.create({
    title,
    questions,
    course,
    topic,
    dueTo,
  });
  res.status(201).json({ data: quiz });
});

// get all quizes
export const getAllQuizes = asyncHandler(
  async (req: Request, res: Response) => {
    const quizes = await quizModel.find();
    res.status(200).json({ data: quizes });
  }
);

// get specific quiz by id
export const getSpecificQuiz = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const quiz = await quizModel.findById(id);
    if (!quiz) {
      return next(new ApiError("this quiz not valid", 404));
    }
    res.status(200).json({ data: quiz });
  }
);

// update quiz by id
export const updateQuiz = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const { title, questions, course, topic, dueTo } = req.body;

    const quiz = await quizModel.findByIdAndUpdate(
      id,
      { title, questions, course, topic, dueTo },
      { new: true }
    );

    if (!quiz) {
      return next(new ApiError("this quiz not valid", 404));
    }
    res.status(200).json({ data: quiz });
  }
);

// delete quiz by id
export const deleteQuiz = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const quiz = await quizModel.findByIdAndDelete(id);

    if (!quiz) {
      return next(new ApiError("this quiz not valid", 404));
    }
    res.status(200).send("deleted");
  }
);
