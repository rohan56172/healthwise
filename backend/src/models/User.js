import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true
    },

    password: {
      type: String,
      required: true,
      select: false
    },

    role: {
      type: String,
      enum: ["patient", "provider"],
      default: "patient"
    },

    profile: {
      allergies: {
        type: String,
        trim: true
      },
      medications: {
        type: String,
        trim: true
      }
    }
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
