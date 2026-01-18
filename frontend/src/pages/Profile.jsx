import { useEffect, useState } from "react";
import api from "../api/axios";
import toast from "react-hot-toast";
import { FaUserEdit, FaSave, FaTimes, FaCamera } from "react-icons/fa";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    allergies: "",
    medications: "",
    password: ""
  });

  // 1. Fetch Profile on Load (GET /patient/profile)
  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      // Correct endpoint for fetching data
      const { data } = await api.get("/patient/profile");
      setProfile(data);
      // Initialize form data
      setFormData({
        name: data.name,
        allergies: data.profile?.allergies || "",
        medications: data.profile?.medications || "",
        password: ""
      });
      setLoading(false);
    } catch (err) {
      toast.error("Failed to load profile");
      setLoading(false);
    }
  };

  // 2. Handle Input Changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 3. Submit Updates (PUT /patient/profileUpdate)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const loadToast = toast.loading("Updating profile...");

    try {
      // UPDATED ENDPOINT HERE:
      const { data } = await api.put("/patient/profileUpdate", {
        name: formData.name,
        allergies: formData.allergies,
        medications: formData.medications,
        ...(formData.password && { password: formData.password }) // Only send password if typed
      });

      // Update local state with new data
      setProfile({
        ...profile,
        name: data.user.name,
        profile: data.user.profile
      });
      
      setIsEditing(false);
      setFormData({ ...formData, password: "" }); // Clear password field
      toast.dismiss(loadToast);
      toast.success("Profile updated successfully!");
    } catch (err) {
      toast.dismiss(loadToast);
      toast.error(err.response?.data?.message || "Update failed");
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div style={{ maxWidth: "900px" }}>
      
      {/* Header with Edit Toggle */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px" }}>
        <h1 style={{ margin: 0 }}>My Profile</h1>
        {!isEditing ? (
          <button 
            onClick={() => setIsEditing(true)} 
            className="btn btn-secondary" 
            style={{ width: "auto", display: "flex", alignItems: "center", gap: "8px", padding: "10px 20px" }}
          >
            <FaUserEdit /> Edit Profile
          </button>
        ) : (
          <button 
            onClick={() => { setIsEditing(false); fetchProfile(); }} // Cancel reverts changes
            className="btn" 
            style={{ width: "auto", display: "flex", alignItems: "center", gap: "8px", padding: "10px 20px", background: "#ffebee", color: "#d32f2f" }}
          >
            <FaTimes /> Cancel
          </button>
        )}
      </div>
      
      <div className="card" style={{ display: "flex", gap: "40px", alignItems: "flex-start", flexWrap: "wrap" }}>
        
        {/* Left Column: Avatar */}
        <div style={{ textAlign: "center", minWidth: "150px" }}>
          <div style={{ 
            width: "150px", height: "150px", borderRadius: "50%", 
            background: "#00c853", display: "flex", alignItems: "center", 
            justifyContent: "center", color: "white", fontSize: "60px", fontWeight: "bold",
            margin: "0 auto 15px auto", position: "relative"
          }}>
            {profile.name.charAt(0).toUpperCase()}
            {isEditing && (
              <div style={{
                position: "absolute", bottom: "5px", right: "5px",
                background: "white", borderRadius: "50%", padding: "8px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.2)", cursor: "pointer"
              }}>
                <FaCamera color="#636e72" size={16} />
              </div>
            )}
          </div>
          <div style={{ color: "#636e72", fontWeight: "500" }}>{profile.role.toUpperCase()}</div>
        </div>

        {/* Right Column: Details or Form */}
        <div style={{ flex: 1, width: "100%" }}>
          
          {!isEditing ? (
            // ============ VIEW MODE ============
            <div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "25px", marginBottom: "30px" }}>
                <div>
                  <label style={labelStyle}>FULL NAME</label>
                  <div style={valueStyle}>{profile.name}</div>
                </div>
                <div>
                  <label style={labelStyle}>EMAIL</label>
                  <div style={valueStyle}>{profile.email}</div>
                </div>
              </div>

              <h3 style={{ borderBottom: "1px solid #eee", paddingBottom: "10px", color: "#2d3436" }}>Medical Information</h3>
              
              <div style={{ marginTop: "20px" }}>
                <label style={labelStyle}>ALLERGIES</label>
                <div style={{ ...boxStyle, background: "#fff3cd", color: "#856404" }}>
                  {profile.profile?.allergies || "No allergies recorded."}
                </div>
              </div>

              <div style={{ marginTop: "20px" }}>
                <label style={labelStyle}>CURRENT MEDICATIONS</label>
                <div style={{ ...boxStyle, background: "#d1ecf1", color: "#0c5460" }}>
                  {profile.profile?.medications || "No medications recorded."}
                </div>
              </div>
            </div>
          ) : (
            // ============ EDIT MODE ============
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <label>Full Name</label>
                <input 
                  name="name"
                  className="input-field" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>

              <div className="input-group">
                <label>Email (Read Only)</label>
                <input 
                  className="input-field" 
                  value={profile.email} 
                  disabled 
                  style={{ background: "#f0f0f0", color: "#888" }}
                />
              </div>

              <div className="input-group">
                <label>Change Password (Optional)</label>
                <input 
                  name="password"
                  type="password"
                  className="input-field" 
                  placeholder="Leave blank to keep current password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>

              <h3 style={{ marginTop: "30px", marginBottom: "15px" }}>Medical Details</h3>

              <div className="input-group">
                <label>Allergies</label>
                <textarea 
                  name="allergies"
                  className="input-field" 
                  rows="3"
                  placeholder="List any allergies..."
                  value={formData.allergies}
                  onChange={handleChange}
                  style={{ resize: "vertical" }}
                />
              </div>

              <div className="input-group">
                <label>Current Medications</label>
                <textarea 
                  name="medications"
                  className="input-field" 
                  rows="3"
                  placeholder="List current medications..."
                  value={formData.medications}
                  onChange={handleChange}
                  style={{ resize: "vertical" }}
                />
              </div>

              <div style={{ display: "flex", gap: "15px", marginTop: "20px" }}>
                <button type="submit" className="btn btn-primary" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
                  <FaSave /> Save Changes
                </button>
              </div>
            </form>
          )}

        </div>
      </div>
    </div>
  );
};

// Styles for View Mode
const labelStyle = { fontSize: "0.85rem", color: "#b2bec3", fontWeight: "bold", letterSpacing: "0.5px", marginBottom: "5px", display: "block" };
const valueStyle = { fontSize: "1.1rem", color: "#2d3436", fontWeight: "500" };
const boxStyle = { padding: "15px", borderRadius: "12px", fontSize: "1rem", lineHeight: "1.5" };

export default Profile;