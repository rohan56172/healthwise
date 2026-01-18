# HealthWise (Wellness & Preventive Care Portal) -- (Hackathon MVP)

## 📌 Project Overview
A secure, scalable Healthcare Wellness and Preventive Care Portal designed to bridge the gap between patients and healthcare providers. This MVP focuses on preventive care compliance, personalized wellness tracking, and security measures.

## 🚀 Key Features
* **Role-Based Authentication:** Secure login for Patients and Healthcare Providers (JWT-based).
* **Patient Dashboard:**
    * Daily Wellness Goal Tracking (Steps, Sleep, Active Calories).
    * Preventive Care Reminders (e.g., Annual Blood Test).
    * "Health Tip of the Day" widget.
* **Provider Dashboard:**
    * List of assigned patients.
    * Compliance monitoring (Goal Met / Missed Checkup).
* **Public Health Page:** General health information accessible without login.
* **Security & Compliance:**
    * Data Encryption & Secure Session Management.
    * Audit Logging for user actions & Consent mechanisms.

## 🛠 Tech Stack
* **Frontend:** Next.js, TailwindCSS.
* **Backend:** Node.js, Express.js.
* **Database:** MongoDB (Mongoose).

## 📂 Project Structure

```text
root/
├── frontend/                  # React Application (Vite)
│   ├── src/
│   │   ├── api/               # Axios configuration & Global Error Interceptors
│   │   ├── components/        # Reusable UI (Sidebar, Layouts, Cards)
│   │   ├── context/           # AuthContext (Login/Logout logic)
│   │   ├── pages/             # App Screens
│   │   │   ├── Dashboard.jsx        # Main Patient View
│   │   │   ├── ProviderDashboard.jsx # Main Provider View
│   │   │   ├── PatientDetails.jsx   # Provider's Patient View
│   │   │   ├── WellnessGoals.jsx    # Data Entry Form
│   │   │   ├── Login.jsx / Register.jsx
│   │   │   ├── AccessDenied.jsx     # Security Guard Page
│   │   │   └── ServerError.jsx      # Global Error Page
│   │   ├── App.jsx            # Routing & ProtectedRoute Guards
│   │   └── main.jsx           # Entry Point
│   └── package.json           # Frontend Dependencies
│
├── backend/                   # Node.js API Server
│   ├── src/
│   │   ├── config/            # DB Connection (dbConnect.js)
│   │   ├── controllers/       # Business Logic (auth, patient, provider)
│   │   ├── middleware/        # auth.js (Verify Token & Check Role)
│   │   ├── models/            # Mongoose Models (User.js, Goal.js)
│   │   ├── routes/            # API Routes (auth.js, patient.js, provider.js)
│   │   └── app.js             # Express App Configuration & CORS
│   ├── .env                   # Environment Variables (Secrets)
│   └── package.json           # Backend Dependencies

🤝 Contributors
[Parasa Sai Rohan]

[Vaibhav] 

[Vamshi] 

