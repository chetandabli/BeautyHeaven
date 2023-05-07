import React from 'react';
import { useState, useEffect } from "react";
import CSS from "./Services.module.css";
import {
  useNavigate
} from "react-router-dom";
// import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';

function Services() {
  const [slotData, setSlotData] = useState([]);
  let navigate = useNavigate();
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
      setSlotData(data.beautyslot)
    }

    fetchSlotData()
  }, []);
  // const ControlledPopup = (id) => {
  //   const [open, setOpen] = useState(false);
  //   const closeModal = () => setOpen(false);
  //   console.log(id, "inside function")
  //   return (
  //     <div>
  //       <button type="button" className="button" onClick={() => setOpen(o => !o)}>
  //         Controlled Popup
  //       </button>
  //       <Popup open={open} closeOnDocumentClick onClose={closeModal}>
  //         <div className="modal">
  //           <a className="close" onClick={closeModal}>
  //             &times;
  //           </a>
  //           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae magni
  //           omnis delectus nemo, maxime molestiae dolorem numquam mollitia, voluptate
  //           ea, accusamus excepturi deleniti ratione sapiente! Laudantium, aperiam
  //           doloribus. Odit, aut.
  //         </div>
  //       </Popup>
  //     </div>
  //   );
  // };

  const bookSlot = async(id)=>{
    let x = await fetch(`http://localhost:5000/users/bookingSlots/${id}`, {
      method: "PUT",
      headers: {
        "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imhya3UwMDJAZ21haWwuY29tIiwidXNlcm5hbWUiOiJjaGV0YW5kYWJsaSIsImlhdCI6MTY4MzM4OTgzMiwiZXhwIjoxNjgzOTk0NjMyfQ.7vHAeAF3xMiehbgNCGGExEvk09QTVYK6RCRP4WPZpoc"
      }
    });
    x = await x.json();
    console.log(x.message);
    console.log(x);
if(x.message == "Add slot successfull"){
  navigate("/dashboard");
}
  }
  return (
    <>
        <h1 style={{fontSize: "4rem", fontWeight: "bold", textAlign: "center", color: "#372415", paddingTop: "70px", margin: "0"}}>Professional Services</h1>
        
        <div className={CSS.mainContainer}>
        {slotData?.map((el)=>{
          return (
            <div className={CSS.card} key={el.id} style={{borderTop: "7px solid #AD9551"}}><p className={CSS.title}>{el.beautyType}</p><p className={CSS.professionalName} style={{color: "rgb(133, 136, 138)"}}>{el.professionalName}</p><p className={CSS.time} style={{color: "blue"}}>{el.bookingTime}</p><hr style={{color: "rgb(237, 237, 237)"}}></hr>
            {/* {console.log(index)} */}
            <button style={{backgroundColor: "#AD9551", border: "none", padding: "5px 15px", cursor: "pointer", marginLeft: "10px", marginBottom: "10px"}} onClick={()=>{
              // console.log(el.id)
              // ControlledPopup(el.id)
              bookSlot(el.id)
            }}>Book</button>
            </div>
          )
        })}

        </div>
    </>
  )
}

export default Services