import { Outlet, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { FaUsers, FaSignOutAlt } from "react-icons/fa";

const ProviderLayout = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div style={{ display: "flex" }}>
      {/* Provider Sidebar */}
      <div style={{
        width: "260px",
        height: "100vh",
        background: "#2d3436", // Dark theme for providers to distinguish
        color: "white",
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        left: 0,
        top: 0
      }}>
        <div style={{ padding: "30px" }}>
          <h2 style={{ color: "#00c853", margin: 0 }}>HealthWise <span style={{fontSize:"0.8rem", color:"#fff"}}>Pro</span></h2>
        </div>

        <nav style={{ flex: 1, padding: "0 15px" }}>
          <div style={{
            display: "flex", alignItems: "center", padding: "16px 20px",
            background: "rgba(255,255,255,0.1)", borderRadius: "16px",
            color: "white", fontWeight: "600"
          }}>
            <FaUsers style={{ marginRight: "15px" }} />
            Patients List
          </div>
        </nav>

        <div style={{ padding: "20px" }}>
          <button 
            onClick={handleLogout}
            style={{
              width: "100%", display: "flex", alignItems: "center",
              padding: "14px 20px", background: "#d63031", color: "white",
              border: "none", borderRadius: "16px", cursor: "pointer", fontWeight: "600"
            }}
          >
            <FaSignOutAlt style={{ marginRight: "10px" }} /> Logout
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{ marginLeft: "260px", padding: "40px", width: "100%", minHeight: "100vh", background: "#f4f7fa" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default ProviderLayout;