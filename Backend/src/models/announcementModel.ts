import mongoose, { Model, Schema } from "mongoose";

interface IAnnouncement {
  title: string;
  content: string;
  createdAt?: Date; // Added by the `timestamps` option
  updatedAt?: Date; // Added by the `timestamps` option
}

const announcementSchema: Schema<IAnnouncement> = new mongoose.Schema(
  {
    title: String,
    content: { type: String, required: true },
  },
  { timestamps: true }
);

const announcementModel: Model<IAnnouncement> = mongoose.model(
  "Announcement",
  announcementSchema
);
export default announcementModel;
