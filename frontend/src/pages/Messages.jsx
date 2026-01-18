import { FaInbox } from "react-icons/fa";

const Messages = () => {
  return (
    <div style={{ maxWidth: "800px" }}>
      <h1 style={{ marginBottom: "30px" }}>Messages</h1>
      <div className="card" style={{ textAlign: "center", padding: "80px 20px" }}>
        <FaInbox size={50} color="#cbd5e0" style={{ marginBottom: "20px" }} />
        <h3 style={{ margin: "0 0 10px 0" }}>No new messages</h3>
        <p style={{ color: "#636e72" }}>Updates from your healthcare provider will appear here.</p>
      </div>
    </div>
  );
};

export default Messages;