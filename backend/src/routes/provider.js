import express from "express";
import { auth, roleCheck } from "../middlewares/auth.js";
import { 
  getPatients, 
  getPatientCompliance 
} from "../controllers/providerController.js";

const router = express.Router();

// Apply middleware to protect these routes
router.get("/patients", auth, roleCheck("provider"), getPatients);
router.get("/compliance/:id", auth, roleCheck("provider"), getPatientCompliance);

export default router;