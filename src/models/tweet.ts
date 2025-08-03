import mongoose, { Schema, model, Document } from "mongoose";

export interface ITweet extends Document {
  content: string;
  author: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
  likes: mongoose.Types.ObjectId[];
  replies: mongoose.Types.ObjectId[];
  retweetFrom?: mongoose.Types.ObjectId;
  images?: { url: string; public_id?: string }[];
  isDeleted: boolean;
  views: number;
  isPinned: boolean;
  hashtags: string[];
  mentions: mongoose.Types.ObjectId[];
}
export const tweetSchema = new Schema<ITweet>(
  {
    content: {
      type: String,
      required: true,
      maxlength: 280,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    likes: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    replies: [
      {
        type: Schema.Types.ObjectId,
        ref: "Tweet",
      },
    ],
    retweetFrom: {
      type: Schema.Types.ObjectId,
      ref: "Tweet",
      default: null,
    },
    images: [
      {
        url: { type: String, required: true },
        public_id: String,
      },
    ],
    isDeleted: {
      type: Boolean,
      default: false,
    },
    views: {
      type: Number,
      default: 0,
    },
    isPinned: {
      type: Boolean,
      default: false,
    },
    hashtags: [
      {
        type: String,
      },
    ],
    mentions: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { versionKey: false, timestamps: true }
);

export const Tweet = model("tweet", tweetSchema);
