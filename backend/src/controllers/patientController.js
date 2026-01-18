import Goal from "../models/Goal.js";
import User from "../models/User.js";

// @desc    Get patient dashboard data (Goals & History)
// @route   GET /api/patient/dashboard
// @access  Private (Patient only)
export const getPatientDashboard = async (req, res) => {
  try {
    // req.user.id comes from the 'auth' middleware
    const goals = await Goal.find({ userId: req.user.id }).sort({ date: -1 });
    res.status(200).json(goals);
  } catch (err) {
    res.status(500).json({ message: "Error fetching dashboard data: " + err.message });
  }
};

// @desc    Create a new daily goal/wellness log
// @route   POST /api/patient/goal
// @access  Private (Patient only)
export const createPatientGoal = async (req, res) => {
  try {
    const goal = await Goal.create({
      userId: req.user.id,
      ...req.body // spreads date, metrics (steps, sleep), etc.
    });
    res.status(201).json(goal);
  } catch (err) {
    res.status(500).json({ message: "Error creating goal: " + err.message });
  }
};

// @desc    Get patient profile details
// @route   GET /api/patient/profile
// @access  Private (Patient only)
export const getPatientProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password"); // Exclude password
    
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Return just the profile object (age, medical history etc) or the whole user
    res.status(200).json(user.profile || {}); 
  } catch (err) {
    res.status(500).json({ message: "Error fetching profile: " + err.message });
  }
};