import express from "express";
import { auth, roleCheck } from "../middlewares/auth.js";
import { 
  getPatientDashboard, 
  createPatientGoal, 
  getPatientProfile 
} from "../controllers/patientController.js";

const router = express.Router();

// Apply middleware to specific routes
// You can also router.use(auth, roleCheck("patient")) if ALL routes here are for patients

router.get("/dashboard", auth, roleCheck("patient"), getPatientDashboard);
router.post("/goal", auth, roleCheck("patient"), createPatientGoal);
router.get("/profile", auth, roleCheck("patient"), getPatientProfile);

export default router;