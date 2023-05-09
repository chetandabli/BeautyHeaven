import React from "react";import { Link, Outlet } from 'react-router-dom';
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Dashboard_prof from "../components/dashboard_prof";

function ProfessionalPage() {
  return (
    <>
    <Navbar/>
    <Outlet />
    <Dashboard_prof/>
    <Footer/>
    </>
  );
}

export default ProfessionalPage;