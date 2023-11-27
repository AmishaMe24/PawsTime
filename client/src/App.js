import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import React, { createContext, useState } from "react";
import { useAuthContext } from "./hooks/useAuthContext.js";

// pages & components
import Home from "./components/HomePage/Home/Home";
import Header from "./components/Header/Header";
import LoginForm from "./components/Login&SignUp/LoginForm";
import Appointment from "./components/AppointmentPage/Appointment/Appointment";

export const UserContext = createContext();

function App() {
  const { user } = useAuthContext();
  const [appointment, setAppointment] = useState({});

  return (
    <UserContext.Provider value={{ appointment, setAppointment}}>
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
            <Route path="/login" element={!user ? <LoginForm /> : <Navigate to="/" />} />
            <Route path="/appointment" element={<Appointment></Appointment>} />
            <Route path="*" element={<div>Page Not Found</div>} />
          </Routes>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
