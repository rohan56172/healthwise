import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import api from "../api/axios";
import { FaWalking, FaBed, FaFire, FaSyncAlt } from "react-icons/fa";
import toast from "react-hot-toast";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  
  // Default state is 0 to prevent "undefined" errors
  const [today, setToday] = useState({ steps: 0, sleep: 0 });
  const [loading, setLoading] = useState(true);

  // Function to fetch data from Backend
  const fetchDashboard = async () => {
    setLoading(true);
    try {
      const { data } = await api.get("/patient/dashboard");
      
      console.log("Fetched Data:", data); 

      // UPDATED LOGIC:
      // Check if we received an object with 'steps' or 'sleep'
      if (data && (data.steps !== undefined || data.sleep !== undefined)) {
        setToday(data); // Use the data directly (it's already the object)
      } else if (Array.isArray(data) && data.length > 0) {
        // Fallback: In case it IS an array, take the first item
        setToday(data[0]);
      } else {
        setToday({ steps: 0, sleep: 0 });
      }
    } catch (err) {
      console.error(err);
      toast.error("Could not sync dashboard data");
    } finally {
      setLoading(false);
    }
  };

  // Run this function immediately when the page loads
  useEffect(() => {
    fetchDashboard();
  }, []);

  // Calculate Metrics based on Steps
  const calories = (today.steps * 0.04).toFixed(0); // Approx 0.04 kcal per step
  const activeTime = (today.steps * 0.008).toFixed(0); // Approx 1 min per 130 steps

  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
      
      {/* Header */}
      <header style={{ marginBottom: "40px", display: "flex", justifyContent: "space-between", alignItems: "end" }}>
        <div>
          <h1 style={{ margin: 0, fontSize: "2rem" }}>Hello, {user?.name} 👋</h1>
          <p style={{ color: "#636e72", marginTop: "5px" }}>Here is your daily activity summary.</p>
        </div>
        <button 
          onClick={fetchDashboard} 
          className="btn btn-secondary" 
          style={{ width: "auto", padding: "10px 15px", display: "flex", alignItems: "center", gap: "8px", fontSize: "0.9rem" }}
        >
          <FaSyncAlt className={loading ? "spin" : ""} /> Refresh
        </button>
      </header>

      <div className="stats-grid">
        
        {/* Steps Card */}
        <div className="card">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
            <h3 style={{ margin: 0 }}>Steps</h3>
            <div style={{ background: "#e8f5e9", padding: "10px", borderRadius: "50%" }}>
              <FaWalking size={20} color="#00c853" />
            </div>
          </div>
          {loading ? <p>Syncing...</p> : (
            <>
              <h2 style={{ fontSize: "3rem", margin: "0" }}>
                {today.steps} 
                <span style={{ fontSize: "1rem", color: "#636e72", marginLeft: "5px" }}>/ 6000</span>
              </h2>
              <div style={{ width: "100%", height: "8px", background: "#edf2f7", borderRadius: "4px", marginTop: "15px" }}>
                <div style={{ 
                  width: `${Math.min((today.steps / 6000) * 100, 100)}%`, 
                  height: "100%", 
                  background: "#00c853", 
                  borderRadius: "4px", 
                  transition: "width 1s ease" 
                }}></div>
              </div>
            </>
          )}
        </div>

        {/* Sleep Card */}
        <div className="card">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
            <h3 style={{ margin: 0 }}>Sleep</h3>
            <div style={{ background: "#ede7f6", padding: "10px", borderRadius: "50%" }}>
              <FaBed size={20} color="#7c4dff" />
            </div>
          </div>
          {loading ? <p>Syncing...</p> : (
            <>
              <h2 style={{ fontSize: "3rem", margin: "0" }}>
                {today.sleep}
                <span style={{ fontSize: "1rem", color: "#636e72" }}> hrs</span>
              </h2>
              <p style={{ color: "#636e72", fontSize: "0.9rem" }}>Deep sleep duration</p>
            </>
          )}
        </div>

        {/* Calories / Active Time Card */}
        <div className="card">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
            <h3 style={{ margin: 0 }}>Burned</h3>
            <div style={{ background: "#fff3e0", padding: "10px", borderRadius: "50%" }}>
              <FaFire size={20} color="#ff9100" />
            </div>
          </div>
          {loading ? <p>Syncing...</p> : (
            <>
              <h2 style={{ fontSize: "3rem", margin: "0" }}>
                {calories}
                <span style={{ fontSize: "1rem", color: "#636e72" }}> kcal</span>
              </h2>
              <p style={{ color: "#636e72", fontSize: "0.9rem" }}>~ {activeTime} mins active</p>
            </>
          )}
        </div>

      </div>

      {/* Animation Styles */}
      <style>{`
        .spin { animation: spin 1s linear infinite; }
        @keyframes spin { 100% { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
};

export default Dashboard;