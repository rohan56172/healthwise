import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import toast from "react-hot-toast";
import { FaUserCircle, FaChevronRight, FaSyncAlt } from "react-icons/fa";

const ProviderDashboard = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Function to fetch data
  const fetchPatients = async () => {
    setLoading(true);
    try {
      const { data } = await api.get("/provider/patients");
      setPatients(data);
      // Optional: Success toast if manually triggered
      // toast.success("Patient list updated"); 
    } catch (err) {
      toast.error("Failed to load patients");
    } finally {
      setLoading(false);
    }
  };

  // Initial Load
  useEffect(() => {
    fetchPatients();
  }, []);

  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
      
      {/* Header with Refresh Button */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px" }}>
        <h1 style={{ margin: 0 }}>Patient Directory</h1>
        <button 
          onClick={fetchPatients} 
          className="btn btn-secondary"
          style={{ width: "auto", padding: "10px 15px", display: "flex", alignItems: "center", gap: "8px", fontSize: "0.9rem" }}
        >
          <FaSyncAlt className={loading ? "spin" : ""} /> Refresh List
        </button>
      </div>

      <div className="stats-grid">
        {patients.map((patient) => (
          <div 
            key={patient._id} 
            className="card"
            onClick={() => navigate(`/provider/patient/${patient._id}`)}
            style={{ cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <div style={{ 
                width: "50px", height: "50px", borderRadius: "50%", 
                background: "#e3f2fd", color: "#2979ff", 
                display: "flex", alignItems: "center", justifyContent: "center" 
              }}>
                <FaUserCircle size={28} />
              </div>
              <div>
                <h3 style={{ margin: "0 0 5px 0", fontSize: "1.1rem" }}>{patient.name}</h3>
                <p style={{ margin: 0, color: "#636e72", fontSize: "0.9rem" }}>{patient.email}</p>
              </div>
            </div>
            <FaChevronRight color="#b2bec3" />
          </div>
        ))}

        {patients.length === 0 && !loading && (
          <div className="card" style={{ gridColumn: "1 / -1", textAlign: "center", padding: "40px" }}>
            <p style={{ color: "#636e72", fontSize: "1.1rem" }}>No patients registered yet.</p>
          </div>
        )}
      </div>
      
      {/* Animation for the refresh icon */}
      <style>{`
        .spin { animation: spin 1s linear infinite; }
        @keyframes spin { 100% { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
};

export default ProviderDashboard;