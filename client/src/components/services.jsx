import React from 'react';
import { useState, useEffect } from "react";

function Services() {
  const [slotData, setSlotData] = useState([]);

  useEffect(() => {
    async function fetchSlotData(){
      let data = await fetch("http://localhost:5000/users/availableSlots", {
        method: "GET",
        headers: {
          "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imhya3UwMDJAZ21haWwuY29tIiwidXNlcm5hbWUiOiJjaGV0YW5kYWJsaSIsImlhdCI6MTY4MzM4OTgzMiwiZXhwIjoxNjgzOTk0NjMyfQ.7vHAeAF3xMiehbgNCGGExEvk09QTVYK6RCRP4WPZpoc"
        }
      });
      data = await data.json();
      console.log(data.beautyslot)
    }

    fetchSlotData()
  }, []);
  
  return (
    <>
        <h1 style={{fontSize: "4rem", fontWeight: "bold", textAlign: "center", color: "#372415", paddingTop: "70px", margin: "0"}}>Professional Services</h1>
    </>
  )
}

export default Services