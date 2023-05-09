import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import CSS from "./Addslot.module.css"

function BeautySlotsForm() {
  const baseURL = "http://localhost:5000";
  const [beautyType, setBeautyType] = useState('');
  const [bookingTime, setBookingTime] = useState('');
  const [slotData, setSlotData] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    async function fetchSlotData() {
      try {
        let data = await fetch("http://localhost:5000/professions/bookedSlots", {
        method: "GET",
        headers: {
          authorization: localStorage.getItem("tokenPro"),
        },
      });
      data = await data.json();
      console.log(data);

      // if (data.message === "Not Authorized") {
      //   navigate("/professional/login");
      // }
      setSlotData(data.beautyslot);
      } catch (error) {
        console.log(error)
      }
    }

    fetchSlotData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('tokenPro');
      let obj = { "beautyType":beautyType, "bookingTime":bookingTime }
      let res = await fetch(
        `${baseURL}/professions/createBeautySlots`,
        {
          method: "POST",
          headers: {
            "Content-Type":"application/json",
            authorization: token,
          },
          body: JSON.stringify(obj),
        }
      );
      res = await res.json();
      console.log(res)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <div style={{padding: "24px"}}></div>
    <h1 style={{textAlign: "center", borderTop: "5px solid #3085d6"}}>Add Slot</h1>
          <form onSubmit={handleSubmit} style={{paddingLeft: "40px"}}>
      <div>
        <label htmlFor="beautyType">Beauty Type:</label>
        <select
          name="beautyType"
          id="beautyType"
          value={beautyType}
          onChange={(e) => setBeautyType(e.target.value)}
        >
          <option value="">--Select Beauty Type--</option>
          <option value="Haircuts and styling">Haircuts and styling</option>
          <option value="Hair coloring and highlights">
            Hair coloring and highlights
          </option>
          <option value="Hair treatments">Hair treatments</option>
          <option value="Facials">Facials</option>
          <option value="Waxing">Waxing</option>
          <option value="Manicures and pedicures">
            Manicures and pedicures
          </option>
          <option value="Makeup application and lessons">
            Makeup application and lessons
          </option>
          <option value="Eyebrow shaping and tinting">
            Eyebrow shaping and tinting
          </option>
          <option value="Eyelash extensions and lifts">
            Eyelash extensions and lifts
          </option>
          <option value="Massages and body treatments">
            Massages and body treatments
          </option>
        </select>
      </div>
      <div>
        <label htmlFor="bookingTime">Booking Time:</label>
        <input
          type="text"
          id="bookingTime"
          name="bookingTime"
          value={bookingTime}
          onChange={(e) => setBookingTime(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
    <hr style={{border: "2px solid #3085d6"}} />
    <div className={CSS.mainContainer}>
        {slotData?.map((el) => {
          return (
            <div
              className={CSS.card}
              key={el.id}
              style={{ borderTop: "7px solid #AD9551" }}
            >
              <p className={CSS.title}>{el.beautyType}</p>
              <p
                className={CSS.professionalName}
                style={{ color: "rgb(133, 136, 138)" }}
              >
                {el.userName}
              </p>
              <p className={CSS.time} style={{ color: "blue" }}>
                {el.bookingTime}
              </p>
              <p>status: {el.progress? "Confirmed" : el.status? "pending" : "Rejected"}</p>
              <hr style={{ color: "rgb(237, 237, 237)" }}></hr>
              <button
                style={{
                  backgroundColor: "#AD9551",
                  border: "none",
                  padding: "5px 15px",
                  cursor: "pointer",
                  marginLeft: "10px",
                  marginBottom: "10px",
                }}
                onClick={() => {
                  Swal.fire({
                    title: "Confirm or Cancel",
                    text: "You won't be able undone this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Confirm Meeting!",
                  }).then( async (result) => {
                    if (result.isConfirmed) {
                      // let x = await bookSlot(el.id)
                      // if(x.message === "Add slot successfull"){
                      //   Swal.fire(
                      //   "Booked!",
                      //   "Your slot has been booked and waiting for confirmation!",
                      //   "success"
                      // )
                      // navigate("/dashboard")
                      // }else{
                      //   Swal.fire(
                      //   "Booking failed!",
                      //   "Your slot is not booked and please try again!",
                      //   "error"
                      // )
                      // }
                      
                    }
                  });
                }}
              >
                Update Status
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default BeautySlotsForm
