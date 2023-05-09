import React, { useState, useEffect } from "react";
import CSS from "./Services.module.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Services() {
  const [slotData, setSlotData] = useState([]);
  const [i, setI] = useState(0);
  let navigate = useNavigate();
  useEffect(() => {
    async function fetchSlotData() {
      let data = await fetch("http://localhost:5000/users/availableSlots", {
        method: "GET",
        headers: {
          authorization: localStorage.getItem("token"),
        },
      });
      data = await data.json();
      console.log(data);

      if (data.message === "Not Authorized") {
        navigate("/login");
      }
      setSlotData(data.beautyslot);
    }

    fetchSlotData();
  }, [i]);

  const bookSlot = async (id) => {
    let x = await fetch(`http://localhost:5000/users/bookingSlots/${id}`, {
      method: "PUT",
      headers: {
        authorization: localStorage.getItem("token"),
      },
    });
    x = await x.json();
    return x
  };
  return (
    <>
      <h1
        style={{
          fontSize: "4rem",
          fontWeight: "bold",
          textAlign: "center",
          color: "#372415",
          paddingTop: "70px",
          margin: "0",
        }}
      >
        Professional Services
      </h1>

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
                {el.professionalName}
              </p>
              <p className={CSS.time} style={{ color: "blue" }}>
                {el.bookingTime}
              </p>
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
                    title: "Are you sure?",
                    text: "You won't be able cancel this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, book it!",
                  }).then( async (result) => {
                    if (result.isConfirmed) {
                      let x = await bookSlot(el.id)
                      if(x.message === "Add slot successfull"){
                        Swal.fire(
                        "Booked!",
                        "Your slot has been booked and waiting for confirmation!",
                        "success"
                      )
                      navigate("/dashboard")
                      }else{
                        Swal.fire(
                        "Booking failed!",
                        "Your slot is not booked and please try again!",
                        "error"
                      )
                      setI(i)
                      }
                      
                    }
                  });
                }}
              >
                Book
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Services;
