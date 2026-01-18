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
├── frontend/               # Next.js Frontend Application
│   ├── src/
│   │   ├── app/            # App Router (Pages & Layouts)
│   │   ├── components/     # UI Components (Dashboard, Tables)
│   │   └── lib/            # API services & Utilities
│   └── public/             # Static assets
├── backend/                # Node.js/Express Backend API
│   ├── src/
│   │   ├── config/         # DB Connection
│   │   ├── controllers/    # Request logic
│   │   ├── models/         # MongoDB Schemas
│   │   ├── routes/         # API Endpoints
│   │   └── middleware/     # Auth & Logging logic
│   └── index.js            # Server entry point
├── README.md               # Project Documentation
└── .gitignore              # Ignored files
