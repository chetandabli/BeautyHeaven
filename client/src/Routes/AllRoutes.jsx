import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/home";
import LoginPage from "../pages/login";
import SignupPage from "../pages/signup";
import InvalidePage from "../pages/invalide";
import ServicesPage from "../pages/services";
import DashboardPage from "../pages/dashboard";
import ProfessionalPage from "../pages/professional";
import ProfessionalSingupPage from "../pages/signupprof";
import ProfessionalLoginPage from "../pages/loginpro";
import ProfessionalDashboardPage from "../pages/dashboard_prof";
import AdminDash from "../pages/admin_dash";

export default function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
        <Route path="/signup" element={<SignupPage />}></Route>
        <Route path="/services" element={<ServicesPage />}></Route>
        <Route path="/professional" element={<ProfessionalPage />}>
          <Route path="signup" element={<ProfessionalSingupPage/>}></Route>
          <Route path="login" element={<ProfessionalLoginPage/>}></Route>
          <Route path="dashboard" element={<ProfessionalDashboardPage />}></Route>
        </Route>
        <Route path="/dashboard" element={<DashboardPage />}></Route>
        <Route path="/adminDash" element={<AdminDash />}></Route>
        <Route path="*" element={<InvalidePage />} />
      </Routes>
    </div>
  );
}