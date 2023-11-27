import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import React, { } from "react";
import { useAuthContext } from "./hooks/useAuthContext.js";

// pages & components


import Header from "./components/Header/Header";
import LoginForm from "./components/Login&SignUp/LoginForm";

import SignUp from "./components/Login&SignUp/SignUp";
import Home from "./components/HomePage/Home/Home";


function App() {
  const { user } = useAuthContext();

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
