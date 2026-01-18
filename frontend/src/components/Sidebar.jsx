import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { FaThLarge, FaUser, FaBullseye, FaEnvelope, FaSignOutAlt } from "react-icons/fa";

const Sidebar = () => {
  const { logout } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { path: "/dashboard", name: "Dashboard", icon: <FaThLarge /> },
    { path: "/dashboard/profile", name: "My Profile", icon: <FaUser /> },
    { path: "/dashboard/goals", name: "Wellness Goals", icon: <FaBullseye /> },
    { path: "/dashboard/messages", name: "Messages", icon: <FaEnvelope /> },
  ];

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const isActive = (path) => {
    // Exact match for dashboard, startswith for sub-routes if needed
    return path === "/dashboard" 
      ? location.pathname === "/dashboard" 
      : location.pathname.startsWith(path);
  };

  return (
    <div style={{
      width: "260px",
      height: "100vh",
      background: "#fff",
      borderRight: "1px solid #f0f0f0",
      display: "flex",
      flexDirection: "column",
      position: "fixed",
      left: 0,
      top: 0,
      zIndex: 100
    }}>
      <div style={{ padding: "40px 30px" }}>
        <h2 style={{ color: "#00c853", margin: 0, fontSize: "24px" }}>HealthWise</h2>
      </div>

      <nav style={{ flex: 1, padding: "0 15px" }}>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {menuItems.map((item) => (
            <li key={item.path} style={{ marginBottom: "8px" }}>
              <Link 
                to={item.path} 
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "16px 20px",
                  textDecoration: "none",
                  color: isActive(item.path) ? "#00c853" : "#636e72",
                  background: isActive(item.path) ? "#e8f5e9" : "transparent",
                  borderRadius: "16px",
                  fontWeight: isActive(item.path) ? "600" : "500",
                  transition: "all 0.2s"
                }}
              >
                <span style={{ marginRight: "15px", fontSize: "1.2rem" }}>{item.icon}</span>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div style={{ padding: "20px" }}>
        <button 
          onClick={handleLogout}
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            padding: "14px 20px",
            background: "#ffebee",
            color: "#d32f2f",
            border: "none",
            borderRadius: "16px",
            cursor: "pointer",
            fontWeight: "600"
          }}
        >
          <FaSignOutAlt style={{ marginRight: "10px" }} />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;