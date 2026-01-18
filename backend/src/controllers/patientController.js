import Goal from "../models/Goal.js";
import User from "../models/User.js";

// @desc    Get patient dashboard data (Goals & History)
// @route   GET /api/patient/dashboard
// @access  Private (Patient only)
export const getPatientDashboard = async (req, res) => {
  try {
    // req.user.id comes from the 'auth' middleware
    const goals = await Goal.findOne({ userId: req.user.id }).sort({ date: -1 });
    res.status(200).json(goals);
  } catch (err) {
    res.status(500).json({ message: "Error fetching dashboard data: " + err.message });
  }
};

// @desc    Create a new daily goal/wellness log
// @route   POST /api/patient/goal
// @access  Private (Patient only)
export const updatePatientGoal = async (req, res) => {
  try {
    const goal = await Goal.findOneAndUpdate(
      { userId: req.user.id },
      { $set: req.body },
      { new: true, upsert: true }
    );

    res.status(200).json(goal);
  } catch (err) {
    res.status(500).json({ message: "Error updating goal: " + err.message });
  }
};



// @desc    Get patient profile details
// @route   GET /api/patient/profile
// @access  Private (Patient only)
export const getPatientProfile = async (req, res) => {
  try {
    // Fetch user by ID and exclude password
    const user = await User.findById(req.user.id).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Return profile along with basic info
    res.status(200).json({
      name: user.name,
      email: user.email,
      role: user.role,
      profile: user.profile
    });
  } catch (err) {
    res.status(500).json({ message: "Error fetching profile: " + err.message });
  }
};



export const profileUpdate = async (req, res) => {
  try {
    if (req.body.role) {
      return res.status(403).json({ message: "Role cannot be updated" });
    }

    const user = await User.findById(req.user.id).select("+password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (req.body.name) {
      user.name = req.body.name.trim();
    }

    if (req.body.password) {
      user.password = await bcrypt.hash(req.body.password, 10);
    }

    user.profile.allergies = req.body.allergies;
    user.profile.medications = req.body.medications;

    await user.save();

    res.status(200).json({
      message: "Profile updated successfully",
      user: {
        name: user.name,
        role: user.role,
        profile: user.profile
      }
    });
  } catch (err) {
    res.status(500).json({ message: "Error updating profile: " + err.message });
  }
};


