import mongoose, { Document, Model } from "mongoose";
import { ITimestamps } from "src/types/types";

export interface IUserDocument extends ITimestamps, Document{
	username: string;
	fullName: string;
	email: string;
	avatar?: string;
}

const userSchema = new mongoose.Schema<IUserDocument>(
	{
		username: {
			type: String,
			required: true,
			unique: true,
		},
		fullName: {
			type: String,
			required: false,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		avatar: {
			type: String,
			default: "",
		},
	},
	{
		timestamps: true,
	}
);

const User: Model<IUserDocument> = mongoose.models?.User || mongoose.model("User", userSchema);

export default User;