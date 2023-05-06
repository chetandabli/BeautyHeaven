import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/home";
import LoginPage from "../pages/login";
import SignupPage from "../pages/signup";
import InvalidePage from "../pages/invalide";
import ServicesPage from "../pages/services";

export default function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
        <Route path="/signup" element={<SignupPage />}></Route>
        <Route path="/services" element={<ServicesPage />}></Route>
        <Route path="*" element={<InvalidePage />} />
      </Routes>
    </div>
  );
}