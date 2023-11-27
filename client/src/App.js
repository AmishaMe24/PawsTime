import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import React, { createContext } from "react";
import { useAuthContext } from "./hooks/useAuthContext.js";

// pages & components
import Home from "./components/HomePage/Home/Home";
import Header from "./components/Header/Header";
import LoginForm from "./components/Login&SignUp/LoginForm";
import Appointment from "./components/AppointmentPage/Appointment/Appointment";
import Dashboard from './components/DashboardPage/Dashboard/Dashboard';
import AppointmentsByDate from "./components/DashboardPage/AppointmentsByDate/AppointmentsByDate.js";
import PatientsList from "./components/DashboardPage/PatientsList/PatientsList.js";
import PrescriptionsList from "./components/DashboardPage/PrescriptionsList/PrescriptionsList.js";
import AddDoctor from "./components/DashboardPage/AddDoctor/AddDoctor.js";
import Footer from "./components/SharedFolders/Footer/Footer.js";
// import ContactUs from "./components/HomePage/ContactUs/ContactUs.js";

export const UserContext = createContext();

function App() {
  const { user } = useAuthContext();

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
          <Route path="/login" element={!user ? <LoginForm /> : <Navigate to="/" />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/dashboard" element={<AppointmentsByDate></AppointmentsByDate>}/>
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
