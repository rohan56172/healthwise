import User from "../models/User.js";
import Goal from "../models/Goal.js";

// @desc    Get list of all patients
// @route   GET /api/provider/patients
// @access  Private (Provider only)
export const getPatients = async (req, res) => {
  try {
    // Find all users with role "patient"
    // .select("-password") excludes the password field from the result
    const patients = await User.find({ role: "patient" }).select("-password");
    
    res.status(200).json(patients);
  } catch (err) {
    res.status(500).json({ message: "Error fetching patients: " + err.message });
  }
};

// @desc    Get specific patient's compliance/goals
// @route   GET /api/provider/compliance/:id
// @access  Private (Provider only)
export const getPatientCompliance = async (req, res) => {
  try {
    const patientId = req.params.id;

    // Optional: Check if patient exists first
    const patient = await User.findById(patientId);
    if (!patient) {
      return res.status(404).json({ message: "Patient not found" });
    }

    // Fetch goals for this patient to calculate compliance
    const goals = await Goal.find({ userId: patientId }).sort({ date: -1 });
    
    res.status(200).json(goals);
  } catch (err) {
    res.status(500).json({ message: "Error fetching compliance data: " + err.message });
  }
};