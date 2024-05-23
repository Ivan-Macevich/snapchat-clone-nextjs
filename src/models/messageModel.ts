import mongoose, { Document, Model, PopulatedDoc, Schema, Types } from "mongoose";
import { IUserDocument } from "./userModel";
import { ITimestamps } from "src/types/types";

export interface IMessageDocument extends ITimestamps, Document{
	sender: Types.ObjectId | PopulatedDoc<IUserDocument>;
	receiver: Types.ObjectId | PopulatedDoc<IUserDocument>;
	content: string;
	messageType: "text" | "image";
	opened: boolean;
}


const messageSchema = new Schema<IMessageDocument>(
	{
		sender: { type: Schema.Types.ObjectId, ref: "User", required: true },
		receiver: { type: Schema.Types.ObjectId, ref: "User", required: true },
		content: { type: String, required: true },
		messageType: { type: String, required: true, enum: ["text", "image"] },
		opened: { type: Boolean, default: false },
	},
	{ timestamps: true }
);

const Message: Model<IMessageDocument> = mongoose.models?.Message || mongoose.model("Message", messageSchema);

export default Message;