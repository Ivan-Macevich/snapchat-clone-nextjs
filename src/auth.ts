import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { connectToMongoDB } from "./lib/db";
import User from "./models/userModel";
import google from "next-auth/providers/google";
import { signInGitHub, signInGoogle } from "./lib/actions";
import { Providers } from "./types/types";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
    google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  secret: process.env.AUTH_SECRET,
  callbacks: {
    async session({ session }) {
      try {
        await connectToMongoDB();
        if (session.user) {
          const user = await User.findOne({ email: session.user.email });
          if (user) {
            session.user._id = user._id as string;
            return session;
          } else {
            throw new Error("User not found");
          }
        } else {
          throw new Error("Invalid session");
        }
      } catch (error) {
        console.log(error);
        throw new Error("Invalid session");
      }
    },
    async signIn({ account, profile }) {
      try {
        await connectToMongoDB();

        if (account?.provider == Providers.GitHub) {
          return await signInGitHub(account, profile);
        }

        if (account?.provider === Providers.Google) {
          return await signInGoogle(account, profile);
        }

        return false;
      } catch (err) {
        return false;
      }
    },
  },
});
