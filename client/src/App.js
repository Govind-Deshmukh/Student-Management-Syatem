import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginContainer from "./webComponents/LoginContainer";
import AdminHome from "./adminPage/AdminHome";
import AdminLogin from "./AdminLogin";
import AddStudent from "./adminPage/AddStudent";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/adminLogin" element={<AdminLogin />} />
          <Route path="/adminDashboard" element={<AdminHome />} />
          <Route path="/" element={<LoginContainer />} />
          <Route path="/RegisterStudent" element={<AddStudent />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
