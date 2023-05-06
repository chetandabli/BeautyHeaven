import React from "react";
import { Link } from 'react-router-dom';
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function HomePage() {
  return (
    <>
    <Navbar/>
<div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
      <h1 style={{ fontSize: "6rem", fontWeight: "bold", textAlign: "center", color: "#372415" }}>Beauty Heaven</h1>
      <Link to="/services" style={{ textDecoration: 'none' }}>
        <button style={{
          padding: "1rem 2rem", fontSize: "1.5rem", fontWeight: "bold", backgroundColor: "#AD9551", color: "#FFFFFF", border: "none", borderRadius: "5px", cursor: "pointer"
        }}>BOOK APPOINTMENT</button>
      </Link>
    </div>
    <Footer/>
    </>
    
  );
}

export default HomePage;
