import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api/axios";
import { FaArrowLeft, FaWalking, FaBed } from "react-icons/fa";
import toast from "react-hot-toast";

const PatientDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [goals, setGoals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCompliance = async () => {
      try {
        const { data } = await api.get(`/provider/compliance/${id}`);
        setGoals(data);
      } catch (err) {
        toast.error("Could not fetch patient data");
      } finally {
        setLoading(false);
      }
    };
    fetchCompliance();
  }, [id]);

  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
      <button 
        onClick={() => navigate("/provider")} 
        style={{ 
          background: "none", border: "none", cursor: "pointer", 
          display: "flex", alignItems: "center", gap: "10px", 
          color: "#636e72", marginBottom: "20px", fontSize: "1rem" 
        }}
      >
        <FaArrowLeft /> Back to List
      </button>

      <h1 style={{ marginBottom: "30px" }}>Patient History</h1>

      {loading ? <p>Loading...</p> : (
        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          {goals.length > 0 ? (
            goals.map((goal) => (
              <div key={goal._id} className="card" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <h4 style={{ margin: "0 0 5px 0", color: "#2d3436" }}>
                    {new Date(goal.date).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                  </h4>
                  <p style={{ margin: 0, color: "#636e72", fontSize: "0.9rem" }}>
                    Daily Log
                  </p>
                </div>
                
                <div style={{ display: "flex", gap: "30px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <FaWalking color="#00c853" />
                    <span style={{ fontWeight: "bold" }}>{goal.steps}</span> steps
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <FaBed color="#7c4dff" />
                    <span style={{ fontWeight: "bold" }}>{goal.sleep}</span> hrs
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="card" style={{ textAlign: "center", padding: "40px" }}>
              <p style={{ color: "#636e72" }}>No activity logs found for this patient.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PatientDetails;