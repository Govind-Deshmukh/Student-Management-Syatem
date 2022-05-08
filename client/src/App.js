import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginContainer from "./webComponents/LoginContainer";
import AdminHome from "./adminPage/AdminHome";
import AdminLogin from "./AdminLogin";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/adminLogin" element={<AdminLogin />} />
          <Route path="/adminDashboard" element={<AdminHome />} />
          <Route path="/" element={<LoginContainer />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
