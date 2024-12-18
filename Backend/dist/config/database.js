"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dbConnection = () => {
    const db_uri = process.env.DB_URI;
    if (!db_uri) {
        throw new Error("DB_URI is not defined in the environment variables.");
    }
    mongoose_1.default
        .connect(db_uri)
        .then((conn) => {
        console.log(`Database connected : ${conn.connection.host}`);
    })
        .catch((err) => {
        console.log(`Database error : ${err.message}`);
        process.exit(1);
    });
};
exports.default = dbConnection;
