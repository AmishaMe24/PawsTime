import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useContext, useState } from "react";
import { useEffect } from "react";

// pages & components
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import LoginForm from "./components/Login&SignUp/LoginForm";
import SignUp from "./components/Login&SignUp/SignUp";
import Dashboard from "./components/Dashboard/Dashboard";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path = "/dashboard" element = {<Dashboard />} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
