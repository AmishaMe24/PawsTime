import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useContext, useState } from "react";
import { useEffect } from "react";

// pages & components
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import LoginForm from "./components/Login&SignUp/LoginForm";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
