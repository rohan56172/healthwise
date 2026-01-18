// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import { AuthProvider, AuthContext } from "./context/AuthContext";
// import { useContext } from "react";

// // Import Pages
// import LandingPage from "./pages/LandingPage";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Dashboard from "./pages/Dashboard";
// import Profile from "./pages/Profile";
// import WellnessGoals from "./pages/WellnessGoals";
// import Messages from "./pages/Messages";

// // Import Layout
// import Layout from "./components/Layout";

// // Protected Route Component
// const ProtectedRoute = ({ children }) => {
//   const { user, loading } = useContext(AuthContext);
  
//   // While checking auth status, show nothing or a spinner
//   if (loading) return <div></div>; 
  
//   // If user exists, show content. If not, redirect to Login
//   return user ? children : <Navigate to="/login" />;
// };

// function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <Routes>
//           {/* Public Routes */}
//           <Route path="/" element={<LandingPage />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />

//           {/* Protected Routes (Wrapped in Layout with Sidebar) */}
//           <Route path="/dashboard" element={
//             <ProtectedRoute>
//               <Layout />
//             </ProtectedRoute>
//           }>
//             {/* These routes render INSIDE the Layout's <Outlet /> */}
//             <Route index element={<Dashboard />} />
//             <Route path="profile" element={<Profile />} />
//             <Route path="goals" element={<WellnessGoals />} />
//             <Route path="messages" element={<Messages />} />
//           </Route>

//         </Routes>
//       </Router>
//     </AuthProvider>
//   );
// }

// export default App;
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, AuthContext } from "./context/AuthContext";
import { useContext } from "react";

// Pages
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
// Patient Pages
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import WellnessGoals from "./pages/WellnessGoals";
import Messages from "./pages/Messages";
import Layout from "./components/Layout";
// Provider Pages (NEW)
import ProviderDashboard from "./pages/ProviderDashboard";
import PatientDetails from "./pages/PatientDetails";
import ProviderLayout from "./components/ProviderLayout";

// Route Guard
const ProtectedRoute = ({ children, allowedRole }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) return <div></div>;
  if (!user) return <Navigate to="/login" />;
  
  // Optional: Check specific role if provided
  if (allowedRole && user.role !== allowedRole) {
    return <Navigate to="/" />; // Redirect unauthorized access
  }
  
  return children;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* PATIENT ROUTES */}
          <Route path="/dashboard" element={
            <ProtectedRoute allowedRole="patient">
              <Layout />
            </ProtectedRoute>
          }>
            <Route index element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />
            <Route path="goals" element={<WellnessGoals />} />
            <Route path="messages" element={<Messages />} />
          </Route>

          {/* PROVIDER ROUTES (NEW) */}
          <Route path="/provider" element={
            <ProtectedRoute allowedRole="provider">
              <ProviderLayout />
            </ProtectedRoute>
          }>
            <Route index element={<ProviderDashboard />} />
            <Route path="patient/:id" element={<PatientDetails />} />
          </Route>

        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;