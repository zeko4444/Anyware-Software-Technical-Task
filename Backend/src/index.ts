import dotenv from "dotenv";
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import dbConnection from "./config/database";
import announcmentRouter from "./routes/announcementtRoute";
import quizRouter from "./routes/quizRoute";
import ApiError from "./utils/apiError";

dotenv.config();
//Connection with db
dbConnection();

//Express app
const app = express();

//Middlewares
app.use(express.json());
app.use(cors());

//Mount routes
app.use("/announcement", announcmentRouter);
app.use("/quiz", quizRouter);
app.all("*", (req: Request, res: Response, next: NextFunction) => {
  next(new ApiError("can’t find this route", 404));
});

// Global Error Handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  res.status(statusCode).json({
    status: err.status,
    message: message,
    stack: err.stack,
  });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`app runnig in : ${PORT}`);
});
