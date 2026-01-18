import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ 
        marginLeft: "260px", 
        padding: "40px", 
        width: "100%", 
        minHeight: "100vh",
        background: "#f4f7fa" 
      }}>
        {/* Only the content inside Outlet changes when you click links */}
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;