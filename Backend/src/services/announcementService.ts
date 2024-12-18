import { NextFunction, Request, Response } from "express";
import asyncHandler from "express-async-handler";
import announcementModel from "../models/announcementModel";
import ApiError from "../utils/apiError";

// create a new announcement
export const addAnnouncement = asyncHandler(
  async (req: Request, res: Response) => {
    const { title, content } = req.body;
    const announcement = await announcementModel.create({ title, content });
    res.status(201).json({ data: announcement });
  }
);

// get all announcements
export const getAllAnnouncements = asyncHandler(
  async (req: Request, res: Response) => {
    const announcements = await announcementModel.find();
    res.status(200).json({ data: announcements });
  }
);

// get specific announcement by id
export const getSpecificAnnouncement = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const announcement = await announcementModel.findById(id);
    if (!announcement) {
      return next(new ApiError("this announcement not valid", 404));
    }
    res.status(200).json({ data: announcement });
  }
);

// update announcement by id
export const updateAnnouncement = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const { title, content } = req.body;

    const announcement = await announcementModel.findByIdAndUpdate(
      id,
      { title, content },
      { new: true }
    );

    if (!announcement) {
      return next(new ApiError("this announcement not valid", 404));
    }
    res.status(200).json({ data: announcement });
  }
);

// delete announcement by id
export const deleteAnnouncement = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const announcement = await announcementModel.findByIdAndDelete(id);

    if (!announcement) {
      return next(new ApiError("this announcement not valid", 404));
    }
    res.status(200).send("deleted");
  }
);
