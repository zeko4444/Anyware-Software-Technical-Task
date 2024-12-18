"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const announcementService_1 = require("../services/announcementService");
const router = express_1.default.Router();
router.post("/", announcementService_1.addAnnouncement);
router.get("/", announcementService_1.getAllAnnouncements);
router.get("/:id", announcementService_1.getSpecificAnnouncement);
router.put("/:id", announcementService_1.updateAnnouncement);
router.delete("/:id", announcementService_1.deleteAnnouncement);
exports.default = router;
