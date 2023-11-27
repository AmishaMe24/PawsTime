import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useContext, useState } from "react";
import { useEffect } from "react";

// pages & components


import Header from "./components/Header/Header";
import LoginForm from "./components/Login&SignUp/LoginForm";
import SignUp from "./components/Login&SignUp/SignUp";
import Home from "./components/HomePage/Home/Home";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/Home" element={<Home />} />
          {/* <Route path = "/dashboard" element = {<Dashboard />} /> */}
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
