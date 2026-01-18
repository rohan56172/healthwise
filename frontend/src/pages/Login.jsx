import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import { FaHome } from "react-icons/fa"; // Import Home Icon

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loadingToast = toast.loading("Signing in...");
    try {
      const data = await login(email, password); // capture the returned data
      toast.dismiss(loadingToast);
      toast.success("Welcome back!");
      
      // ROLE BASED REDIRECT
      if (data.user.role === "provider") {
        navigate("/provider");
      } else {
        navigate("/dashboard");
      }
    } catch (err) {
      toast.dismiss(loadingToast);
      toast.error(err.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#f4f7fa", position: "relative" }}>
      
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
      
      <div className="card" style={{ width: "100%", maxWidth: "400px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "30px", color: "#00c853" }}>HealthWise</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input type="email" className="input-field" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" className="input-field" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit" className="btn btn-primary">Sign In</button>
        </form>
        <p style={{ textAlign: "center", marginTop: "20px", color: "#636e72" }}>
          New here? <Link to="/register" style={{ color: "#00c853", fontWeight: "bold", textDecoration: "none" }}>Create Account</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;