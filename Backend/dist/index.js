"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const database_1 = __importDefault(require("./config/database"));
const announcementtRoute_1 = __importDefault(require("./routes/announcementtRoute"));
const quizRoute_1 = __importDefault(require("./routes/quizRoute"));
const apiError_1 = __importDefault(require("./utils/apiError"));
dotenv_1.default.config();
//Connection with db
(0, database_1.default)();
//Express app
const app = (0, express_1.default)();
//Middlewares
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//Mount routes
app.use("/announcement", announcementtRoute_1.default);
app.use("/quiz", quizRoute_1.default);
app.all("*", (req, res, next) => {
    next(new apiError_1.default("can’t find this route", 404));
});
// Global Error Handler
app.use((err, req, res, next) => {
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
