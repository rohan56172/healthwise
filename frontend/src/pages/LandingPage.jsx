import { Link } from "react-router-dom";
import { 
  FaHeartbeat, FaArrowRight, FaStethoscope, FaPills, 
  FaVial, FaUserMd, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt 
} from "react-icons/fa";

const LandingPage = () => {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      
      {/* ================= NAVBAR ================= */}
      <nav style={{ 
        background: "white", 
        padding: "0 40px", 
        height: "80px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <div style={{ maxWidth: "1200px", width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }} onClick={() => window.scrollTo(0,0)}>
            <FaHeartbeat size={30} color="#00c853" />
            <h2 style={{ margin: 0, color: "#2d3436", fontSize: "24px" }}>HealthWise</h2>
          </div>

          {/* Nav Links (Scroll Anchors) */}
          <div style={{ display: "flex", gap: "40px" }} className="nav-links">
            <a href="#home" style={navLinkStyle}>Home</a>
            <a href="#topics" style={navLinkStyle}>Health Topics</a>
            <a href="#services" style={navLinkStyle}>Services</a>
            <a href="#contact" style={navLinkStyle}>Contact</a>
          </div>

          {/* Login Button */}
          <Link to="/login" className="btn btn-primary" style={{ width: "auto", padding: "12px 30px", textDecoration: "none" }}>
            Login Portal
          </Link>
        </div>
      </nav>

      {/* ================= HOME HERO SECTION ================= */}
      <section id="home" style={{ background: "#f4f7fa", padding: "80px 20px", textAlign: "center" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "3.5rem", marginBottom: "20px", color: "#2d3436", lineHeight: "1.2" }}>
            Your Journey to <br/><span style={{ color: "#00c853" }}>Better Health</span> Starts Here
          </h1>
          <p style={{ fontSize: "1.2rem", color: "#636e72", marginBottom: "40px", lineHeight: "1.6" }}>
            Connect with top healthcare providers, track your daily wellness, and get personalized health insights—all in one secure portal.
          </p>
          <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
            <Link to="/register" className="btn btn-primary" style={{ width: "auto", padding: "15px 40px", textDecoration: "none" }}>Get Started</Link>
            <a href="#services" className="btn" style={{ width: "auto", padding: "15px 40px", background: "white", color: "#2d3436", border: "1px solid #e0e0e0", textDecoration: "none" }}>Learn More</a>
          </div>
        </div>
      </section>

      {/* ================= HEALTH TOPICS SECTION ================= */}
      <section id="topics" style={{ background: "white", padding: "100px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ marginBottom: "60px", textAlign: "center" }}>
            <h2 style={{ fontSize: "2.5rem", marginBottom: "15px", color: "#2d3436" }}>Latest Health Insights</h2>
            <p style={{ color: "#636e72", maxWidth: "600px", margin: "0 auto" }}>Stay informed with the latest medical guidelines and wellness tips.</p>
          </div>

          <div className="stats-grid">
            {/* Card 1 */}
            <div className="card" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
              <div style={{ marginBottom: "20px", padding: "15px", background: "#e8f5e9", borderRadius: "12px", width: "fit-content" }}>
                <FaVial size={24} color="#00c853" />
              </div>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "15px", color: "#2d3436" }}>COVID-19 Updates</h3>
              <p style={{ color: "#636e72", lineHeight: "1.6", flex: 1 }}>
                Stay informed about the latest COVID-19 guidelines, booster shots, and safety measures for your community.
              </p>
              <button style={textBtnStyle}>Read Article <FaArrowRight size={12} /></button>
            </div>

            {/* Card 2 */}
            <div className="card" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
              <div style={{ marginBottom: "20px", padding: "15px", background: "#e3f2fd", borderRadius: "12px", width: "fit-content" }}>
                <FaUserMd size={24} color="#2979ff" />
              </div>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "15px", color: "#2d3436" }}>Seasonal Flu</h3>
              <p style={{ color: "#636e72", lineHeight: "1.6", flex: 1 }}>
                Learn about steps you can take to prevent the seasonal flu and find the nearest location to get vaccinated.
              </p>
              <button style={textBtnStyle}>Read Article <FaArrowRight size={12} /></button>
            </div>

            {/* Card 3 */}
            <div className="card" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
              <div style={{ marginBottom: "20px", padding: "15px", background: "#f3e5f5", borderRadius: "12px", width: "fit-content" }}>
                <FaHeartbeat size={24} color="#7c4dff" />
              </div>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "15px", color: "#2d3436" }}>Mental Health</h3>
              <p style={{ color: "#636e72", lineHeight: "1.6", flex: 1 }}>
                Explore resources, support groups, and professional advice for maintaining good mental health and balance.
              </p>
              <button style={textBtnStyle}>Read Article <FaArrowRight size={12} /></button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section id="services" style={{ background: "#f4f7fa", padding: "100px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ marginBottom: "60px", textAlign: "center" }}>
            <h2 style={{ fontSize: "2.5rem", marginBottom: "15px", color: "#2d3436" }}>Our Services</h2>
            <p style={{ color: "#636e72", maxWidth: "600px", margin: "0 auto" }}>Comprehensive healthcare solutions tailored to your needs.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "30px" }}>
            {/* Service 1 */}
            <div className="card" style={{ textAlign: "center", padding: "40px 20px" }}>
              <FaStethoscope size={40} color="#00c853" style={{ marginBottom: "20px" }} />
              <h3 style={{ marginBottom: "10px" }}>Teleconsultation</h3>
              <p style={{ color: "#636e72" }}>Connect with doctors remotely for quick advice and prescriptions.</p>
            </div>

            {/* Service 2 */}
            <div className="card" style={{ textAlign: "center", padding: "40px 20px" }}>
              <FaPills size={40} color="#2979ff" style={{ marginBottom: "20px" }} />
              <h3 style={{ marginBottom: "10px" }}>Pharmacy</h3>
              <p style={{ color: "#636e72" }}>Order medicines online and get them delivered to your doorstep.</p>
            </div>

            {/* Service 3 */}
            <div className="card" style={{ textAlign: "center", padding: "40px 20px" }}>
              <FaVial size={40} color="#ff9100" style={{ marginBottom: "20px" }} />
              <h3 style={{ marginBottom: "10px" }}>Lab Tests</h3>
              <p style={{ color: "#636e72" }}>Book diagnostic tests and get reports directly in your dashboard.</p>
            </div>

            {/* Service 4 */}
            <div className="card" style={{ textAlign: "center", padding: "40px 20px" }}>
              <FaHeartbeat size={40} color="#ff5252" style={{ marginBottom: "20px" }} />
              <h3 style={{ marginBottom: "10px" }}>Chronic Care</h3>
              <p style={{ color: "#636e72" }}>Continuous monitoring and support for long-term health conditions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section id="contact" style={{ background: "#2d3436", color: "white", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "60px" }}>
          
          {/* Contact Info */}
          <div>
            <h2 style={{ fontSize: "2.5rem", marginBottom: "20px", color: "#fff" }}>Get in Touch</h2>
            <p style={{ color: "#b2bec3", marginBottom: "40px", lineHeight: "1.6" }}>
              Have questions or need assistance? Our support team is here to help you 24/7.
            </p>
            
            <div style={{ display: "flex", gap: "15px", marginBottom: "20px", alignItems: "center" }}>
              <div style={{ background: "rgba(255,255,255,0.1)", padding: "10px", borderRadius: "50%" }}>
                <FaPhoneAlt color="#00c853" />
              </div>
              <div>
                <div style={{ fontSize: "0.9rem", color: "#b2bec3" }}>Call Us</div>
                <div style={{ fontSize: "1.1rem", fontWeight: "bold" }}>+1 (555) 123-4567</div>
              </div>
            </div>

            <div style={{ display: "flex", gap: "15px", marginBottom: "20px", alignItems: "center" }}>
              <div style={{ background: "rgba(255,255,255,0.1)", padding: "10px", borderRadius: "50%" }}>
                <FaEnvelope color="#2979ff" />
              </div>
              <div>
                <div style={{ fontSize: "0.9rem", color: "#b2bec3" }}>Email Us</div>
                <div style={{ fontSize: "1.1rem", fontWeight: "bold" }}>support@healthwise.com</div>
              </div>
            </div>

            <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
              <div style={{ background: "rgba(255,255,255,0.1)", padding: "10px", borderRadius: "50%" }}>
                <FaMapMarkerAlt color="#ff5252" />
              </div>
              <div>
                <div style={{ fontSize: "0.9rem", color: "#b2bec3" }}>Visit Us</div>
                <div style={{ fontSize: "1.1rem", fontWeight: "bold" }}>123 Wellness Ave, Health City</div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div style={{ background: "white", padding: "40px", borderRadius: "24px", color: "#2d3436" }}>
            <h3 style={{ marginBottom: "20px", marginTop: 0 }}>Send us a message</h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <div style={{ marginBottom: "15px" }}>
                <label style={{ display: "block", marginBottom: "5px", fontSize: "0.9rem", color: "#636e72" }}>Your Name</label>
                <input type="text" className="input-field" placeholder="John Doe" style={{ background: "#f4f7fa" }} />
              </div>
              <div style={{ marginBottom: "15px" }}>
                <label style={{ display: "block", marginBottom: "5px", fontSize: "0.9rem", color: "#636e72" }}>Email Address</label>
                <input type="email" className="input-field" placeholder="john@example.com" style={{ background: "#f4f7fa" }} />
              </div>
              <div style={{ marginBottom: "20px" }}>
                <label style={{ display: "block", marginBottom: "5px", fontSize: "0.9rem", color: "#636e72" }}>Message</label>
                <textarea className="input-field" rows="4" placeholder="How can we help?" style={{ background: "#f4f7fa", resize: "none" }}></textarea>
              </div>
              <button className="btn btn-primary">Send Message</button>
            </form>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "#222", color: "#636e72", padding: "20px", textAlign: "center", borderTop: "1px solid #333" }}>
        <p>&copy; 2026 HealthWise Inc. All rights reserved.</p>
      </footer>

    </div>
  );
};

// Styles
const navLinkStyle = {
  textDecoration: "none",
  color: "#636e72",
  fontWeight: "500",
  fontSize: "16px",
  cursor: "pointer",
  transition: "color 0.2s ease"
};

const textBtnStyle = {
  background: "none",
  border: "none",
  color: "#00c853",
  fontWeight: "600",
  fontSize: "1rem",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  gap: "8px",
  marginTop: "20px",
  padding: 0
};

export default LandingPage;