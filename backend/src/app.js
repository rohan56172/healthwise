
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";



import authRoutes from "./routes/auth.js";
import patientRoutes from "./routes/patient.js";
import providerRoutes from "./routes/provider.js";

dotenv.config();
const app = express();
const PORT=process.env.PORT||5000;

app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:5173", 
  credentials: true                
}));
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/patient", patientRoutes);
app.use("/api/provider", providerRoutes);

 
const dbConnect=async()=>{
    try {
        await mongoose.connect(process.env.CONNECTION_STRING)
  .then(() => app.listen(PORT, () => console.log("Server running")))
  .catch(err => console.log(err));
    } catch (error) {
        console.log("Database connection failed", error);
    }
}
dbConnect();