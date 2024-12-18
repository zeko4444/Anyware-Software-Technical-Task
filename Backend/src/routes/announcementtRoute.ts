import express from "express";
import {
  addAnnouncement,
  deleteAnnouncement,
  getAllAnnouncements,
  getSpecificAnnouncement,
  updateAnnouncement,
} from "../services/announcementService";

const router = express.Router();

router.post("/", addAnnouncement);
router.get("/", getAllAnnouncements);
router.get("/:id", getSpecificAnnouncement);
router.put("/:id", updateAnnouncement);
router.delete("/:id", deleteAnnouncement);

export default router;
