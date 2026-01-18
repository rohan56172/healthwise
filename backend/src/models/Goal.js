import mongoose from "mongoose";

const goalSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  steps: Number,
  sleep: Number,
  date: { type: Date, default: Date.now }
});

export default mongoose.model("Goal", goalSchema);
