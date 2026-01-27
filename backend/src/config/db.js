import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const MongoURL = process.env.MONGO_URI;
const connectDB = async () =>{
    try {
        await mongoose.connect(MongoURL)
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection failed:", error);
    }
}

export default connectDB;