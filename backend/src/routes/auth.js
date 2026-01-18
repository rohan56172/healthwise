import express from "express";
import { 
  registerUser, 
  loginUser, 
  logoutUser, 
  verifyUser
} from "../controllers/authController.js";
import { auth } from "../middlewares/auth.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.get("/verify", auth, verifyUser);

export default router;