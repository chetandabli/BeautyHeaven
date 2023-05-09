import Dashboard from "../components/dashboard";
import React from "react";
import { Link } from 'react-router-dom';
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function DashboardPage() {
  return (
    <>
    <Navbar/>
    <Dashboard/>
    <Footer/>
    </>
  );
}

export default DashboardPage;
