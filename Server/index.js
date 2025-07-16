import express from "express";
import cors from "cors";
import connectToMongoDB from "../Server/db/MangoDB.js";
import authRouter from "./routes/auth.js";
const app = express();
// Middlewares
app.use(cors());
app.use(express.json());
// Routes
app.use("/api/auth", authRouter);
// Start server and connect DB
const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  try {
    await connectToMongoDB(); //  ensure MongoDB connects before using routes
    console.log(`Server is running on port ${PORT}`);
  } catch (err) {
    console.error("MongoDB connection failed:", err.message);
  }
});
