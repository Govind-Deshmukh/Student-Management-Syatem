import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginContainer from "./webComponents/LoginContainer";
import AdminHome from "./adminPage/AdminDashboard";
import AdminLogin from "./AdminLogin";
import AddStudent from "./adminPage/AddStudent";
import AddTeacher from "./adminPage/AddTeacher";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/adminLogin" element={<AdminLogin />} />
          <Route path="/adminDashboard" element={<AdminHome />} />
          <Route path="/" element={<LoginContainer />} />
          <Route path="/RegisterStudent" element={<AddStudent />} />
          <Route path="/RegisterTeacher" element={<AddTeacher />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
