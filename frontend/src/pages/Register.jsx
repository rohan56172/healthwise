import { useState } from "react";
import api from "../api/axios";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import { FaUserMd, FaUserInjured, FaHome } from "react-icons/fa"; // Import Icons

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "patient" // Default role
  });
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loadingToast = toast.loading("Creating account...");
    
    try {
      await api.post("/auth/register", formData);
      toast.dismiss(loadingToast);
      toast.success("Account created! Please login.");
      navigate("/login");
    } catch (err) {
      toast.dismiss(loadingToast);
      toast.error(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div style={{ 
      minHeight: "100vh", 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center", 
      background: "#f4f7fa",
      padding: "20px",
      position: "relative" 
    }}>
      
      {/* === NEW HOME BUTTON === */}
      <Link to="/" style={{
        position: "absolute",
        top: "30px",
        left: "30px",
        textDecoration: "none",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        background: "white",
        padding: "10px 20px",
        borderRadius: "30px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
        color: "#636e72",
        fontWeight: "600",
        transition: "transform 0.2s"
      }}>
        <FaHome size={18} /> Home
      </Link>

      <div className="card" style={{ width: "100%", maxWidth: "450px", padding: "40px" }}>
        
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <h2 style={{ color: "#00c853", margin: "0 0 10px 0" }}>Join HealthWise</h2>
          <p style={{ color: "#636e72", margin: 0 }}>Create your new account</p>
        </div>

        <form onSubmit={handleSubmit}>
          
          {/* Role Selection */}
          <div className="input-group">
            <label style={{ marginBottom: "12px" }}>I am a...</label>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px" }}>
              <div 
                onClick={() => setFormData({ ...formData, role: "patient" })}
                style={{
                  border: formData.role === "patient" ? "2px solid #00c853" : "2px solid #edf2f7",
                  background: formData.role === "patient" ? "#e8f5e9" : "white",
                  borderRadius: "16px",
                  padding: "15px",
                  cursor: "pointer",
                  textAlign: "center",
                  transition: "all 0.2s"
                }}
              >
                <FaUserInjured size={24} color={formData.role === "patient" ? "#00c853" : "#b2bec3"} />
                <div style={{ fontWeight: "600", marginTop: "8px", color: formData.role === "patient" ? "#00c853" : "#636e72" }}>
                  Patient
                </div>
              </div>

              <div 
                onClick={() => setFormData({ ...formData, role: "provider" })}
                style={{
                  border: formData.role === "provider" ? "2px solid #2979ff" : "2px solid #edf2f7",
                  background: formData.role === "provider" ? "#e3f2fd" : "white",
                  borderRadius: "16px",
                  padding: "15px",
                  cursor: "pointer",
                  textAlign: "center",
                  transition: "all 0.2s"
                }}
              >
                <FaUserMd size={24} color={formData.role === "provider" ? "#2979ff" : "#b2bec3"} />
                <div style={{ fontWeight: "600", marginTop: "8px", color: formData.role === "provider" ? "#2979ff" : "#636e72" }}>
                  Provider
                </div>
              </div>
            </div>
          </div>

          {/* Form Inputs */}
          <div className="input-group">
            <label>Full Name</label>
            <input 
              className="input-field" 
              placeholder="e.g. John Doe" 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})} 
              required 
            />
          </div>

          <div className="input-group">
            <label>Email Address</label>
            <input 
              className="input-field" 
              type="email" 
              placeholder="name@example.com" 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})} 
              required 
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input 
              className="input-field" 
              type="password" 
              placeholder="Create a strong password" 
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})} 
              required 
            />
          </div>

          <button type="submit" className="btn btn-primary" style={{ marginTop: "10px" }}>
            Create Account
          </button>
        </form>

        <p style={{ textAlign: "center", marginTop: "25px", color: "#636e72" }}>
          Already have an account? <Link to="/login" style={{ color: "#00c853", fontWeight: "bold", textDecoration: "none" }}>Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;