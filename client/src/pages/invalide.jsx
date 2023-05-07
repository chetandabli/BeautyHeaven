import React from "react";
import { Link } from 'react-router-dom';
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function InvalidePage() {
  return (
    <>
    <Navbar/>
<div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
      <h1 style={{ fontSize: "6rem", fontWeight: "bold", textAlign: "center", color: "#372415", marginBottom: "0px"}}>404</h1>
      <h2 style={{ fontSize: "4rem", fontWeight: "bold", textAlign: "center", color: "#372415", marginTop: "0px" }}>Page Not Found</h2>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <button style={{
          padding: "1rem 2rem", fontSize: "1.5rem", fontWeight: "bold", backgroundColor: "#AD9551", color: "#FFFFFF", border: "none", borderRadius: "5px", cursor: "pointer"
        }}>Home Page</button>
      </Link>
    </div>
    <Footer/>
    </>
    
  );
}

export default InvalidePage;
