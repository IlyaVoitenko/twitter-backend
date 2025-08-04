import mongoose, { Schema, model, Document } from "mongoose";
import handleMongooseError from "../helper/handleMongooseError.js";
import Joi from "joi";

export interface ITwitterUser extends Document {
  name: string;
  email: string;
  username: string;
  image?: string;
  bio?: string;
  website?: string;
  createdAt: Date;
  isVerified: boolean;
  followers: mongoose.Types.ObjectId[];
  following: mongoose.Types.ObjectId[];
  tweets: mongoose.Types.ObjectId[];
  provider?: string;
}

export const twitterUserSchema = new Schema<ITwitterUser>({
  name: { type: String, required: true },
  email: { type: String, unique: true, sparse: true },
  username: { type: String, unique: true, required: true },
  image: { type: String },
  bio: { type: String, default: "" },
  website: { type: String, default: "" },
  createdAt: { type: Date, default: Date.now },
  isVerified: { type: Boolean, default: false },
  followers: [{ type: Schema.Types.ObjectId, ref: "User" }],
  following: [{ type: Schema.Types.ObjectId, ref: "User" }],
  tweets: [{ type: Schema.Types.ObjectId, ref: "Tweet" }],
  provider: { type: String },
});
export const createTwitterAccount = Joi.object({
  name: { type: String, required: true },
  email: { type: String, unique: true, sparse: true },
  username: { type: String, unique: true, required: true },
  image: { type: String },
  bio: { type: String, default: "" },
  website: { type: String, default: "" },
});
twitterUserSchema.post("save", handleMongooseError);

export const TwitterUser = model("user", twitterUserSchema);
