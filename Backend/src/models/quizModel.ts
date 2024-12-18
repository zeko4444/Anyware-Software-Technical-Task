import mongoose, { Schema } from "mongoose";
import { Model } from "mongoose";

interface IQuestion {
  question: string;
  choices: string[];
  answer: string;
}

interface IQuiz {
  title: string;
  course: string;
  topic: string;
  dueTo: Date;
  questions: IQuestion[];
}

const questionSchema: Schema<IQuestion> = new mongoose.Schema({
  question: { type: String, required: true },
  choices: { type: [String], required: true },
  answer: { type: String, required: true },
});

const quizSchema: Schema<IQuiz> = new mongoose.Schema(
  {
    title: { type: String, required: true },
    course: { type: String, required: true },
    topic: { type: String, required: true },
    dueTo: { type: Date, required: true },
    questions: [questionSchema],
  },
  { timestamps: true }
);

const quizModel: Model<IQuiz> = mongoose.model("quiz", quizSchema);
export default quizModel;
