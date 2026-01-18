import mongoose from "mongoose";
const dbConnect=async()=>{
    try {
        await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("Database connected successfully");
    } catch (error) {
        console.log("Database connection failed", error);
    }
}
export default dbConnect;