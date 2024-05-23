import mongoose, { Connection } from "mongoose";

let cachedConnection: Connection | null = null;
export async function connectToMongoDB() {
  if (cachedConnection) {
    return cachedConnection;
  }
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI as string);
    cachedConnection = conn.connection;
    console.log("Connected to MongoDB");
  } catch (err) {
    throw err;
  }
}
