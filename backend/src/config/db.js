import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const MongoURL = process.env.MONGO_URI;
const connectDB = async () =>{
    try {
        if (!MongoURL) {
          throw new Error("MONGO_URI is not set in .env");
        }

        await mongoose.connect(MongoURL)
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection failed:", error);
        process.exit(1);
    }
}

export default connectDB;
