import React from 'react';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard_prof() {
    const [isLogged, setIsLogged] = useState(localStorage.getItem("tokenPro") || false);
    let navigate = useNavigate();
    useEffect(() => {
        if (!isLogged) {
          navigate("/professional/login");
        }
      }, [isLogged, navigate]);
    
  return (
    <div>Dashboard_prof</div>
  )
}

export default Dashboard_prof