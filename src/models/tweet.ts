import { Schema, model } from "mongoose";

export const tweetSchema = new Schema(
  {},
  { versionKey: false, timestamps: true }
);

export const Tweet = model("tweet", tweetSchema);
