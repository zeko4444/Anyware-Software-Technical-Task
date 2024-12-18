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
exports.deleteAnnouncement = exports.updateAnnouncement = exports.getSpecificAnnouncement = exports.getAllAnnouncements = exports.addAnnouncement = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const announcementModel_1 = __importDefault(require("../models/announcementModel"));
const apiError_1 = __importDefault(require("../utils/apiError"));
// create a new announcement
exports.addAnnouncement = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, content } = req.body;
    const announcement = yield announcementModel_1.default.create({ title, content });
    res.status(201).json({ data: announcement });
}));
// get all announcements
exports.getAllAnnouncements = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const announcements = yield announcementModel_1.default.find();
    res.status(200).json({ data: announcements });
}));
// get specific announcement by id
exports.getSpecificAnnouncement = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const announcement = yield announcementModel_1.default.findById(id);
    if (!announcement) {
        return next(new apiError_1.default("this announcement not valid", 404));
    }
    res.status(200).json({ data: announcement });
}));
// update announcement by id
exports.updateAnnouncement = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { title, content } = req.body;
    const announcement = yield announcementModel_1.default.findByIdAndUpdate(id, { title, content }, { new: true });
    if (!announcement) {
        return next(new apiError_1.default("this announcement not valid", 404));
    }
    res.status(200).json({ data: announcement });
}));
// delete announcement by id
exports.deleteAnnouncement = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const announcement = yield announcementModel_1.default.findByIdAndDelete(id);
    if (!announcement) {
        return next(new apiError_1.default("this announcement not valid", 404));
    }
    res.status(200).send("deleted");
}));
