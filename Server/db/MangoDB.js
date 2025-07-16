// import mangoose from 'mongoose';

// const connectToMongoDB=async()=>{
//     try{
//         await mongoose.connect("mongodb://localhost:27017/note-app");
//         console.log('Connected to MongoDB');
//         }
//         catch(error){
//             console.log('Error connecting to MongoDB:',error);
//             }
// }

import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: process.env.DB_NAME,
    });
    console.log("✅ MongoDB connected successfully");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1); // Stop the app if DB connection fails
  }
};

export default connectToMongoDB;
