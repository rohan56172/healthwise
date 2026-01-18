import { useState } from "react";
import api from "../api/axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { FaSave, FaWalking, FaBed } from "react-icons/fa";

const WellnessGoals = () => {
  const [formData, setFormData] = useState({ steps: "", sleep: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loadingToast = toast.loading("Saving your activity...");

    try {
      // 1. Send data to backend (Database)
      await api.post("/patient/goal", {
        steps: Number(formData.steps), // Ensure these are sent as numbers
        sleep: Number(formData.sleep)
      });
      
      toast.dismiss(loadingToast);
      toast.success("Activity updated successfully!");
      
      // Clear form
      setFormData({ steps: "", sleep: "" });

      // 2. Redirect to Dashboard immediately to see changes
      navigate("/dashboard");

    } catch (err) {
      toast.dismiss(loadingToast);
      console.error(err);
      toast.error("Failed to save. Check console for details.");
    }
  };

  return (
    <div style={{ maxWidth: "600px" }}>
      <h1 style={{ marginBottom: "30px" }}>Log Daily Activity</h1>
      
      <div className="card">
        <div style={{ marginBottom: "20px", paddingBottom: "20px", borderBottom: "1px solid #eee" }}>
          <h3 style={{ margin: "0 0 10px 0", color: "#2d3436" }}>New Entry</h3>
          <p style={{ color: "#636e72", margin: 0 }}>
            Enter your stats for today. This will update your dashboard immediately.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Steps Input */}
          <div className="input-group">
            <label style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <FaWalking color="#00c853" /> Steps Walked
            </label>
            <input 
              type="number" 
              className="input-field"
              placeholder="e.g. 5000"
              value={formData.steps}
              onChange={(e) => setFormData({...formData, steps: e.target.value})}
              required
              min="0"
            />
          </div>

          {/* Sleep Input */}
          <div className="input-group">
            <label style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <FaBed color="#7c4dff" /> Hours of Sleep
            </label>
            <input 
              type="number" 
              className="input-field"
              placeholder="e.g. 7.5"
              step="0.1" 
              value={formData.sleep}
              onChange={(e) => setFormData({...formData, sleep: e.target.value})}
              required
              min="0"
            />
          </div>

          <button type="submit" className="btn btn-primary" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginTop: "15px" }}>
            <FaSave /> Save & Update Dashboard
          </button>
        </form>
      </div>
    </div>
  );
};

export default WellnessGoals;