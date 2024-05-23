import mongoose, { Document, Model, Types } from "mongoose";
import { ITimestamps } from "src/types/types";

export interface IChatDocument extends ITimestamps, Document {
  participants: Types.ObjectId[];
  messages: Types.ObjectId[];
}

const chatSchema = new mongoose.Schema<IChatDocument>(
  {
    participants: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    messages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Chat: Model<IChatDocument> =
  mongoose.models?.Chat || mongoose.model("Chat", chatSchema);

export default Chat;
