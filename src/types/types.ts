import { DefaultSession } from "next-auth";

export interface ITimestamps {
    createdAt: Date;
	updatedAt: Date;
}

export enum Providers {
    Google = "google",
    GitHub = "github",
}

// export interface Session {
//     user: {
//       _id: string;
//     } & DefaultSession["user"];
//   }