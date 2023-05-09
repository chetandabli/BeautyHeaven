import React from "react";import { Link, Outlet } from 'react-router-dom';
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function ProfessionalPage() {
  return (
    <>
    <Navbar/>
    <Outlet />
    <Footer/>
    </>
  );
}

export default ProfessionalPage;