import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import CSS from "./Addslot.module.css";

function BeautySlotsForm() {
  const baseURL = "https://beauty-heaven.onrender.com";
  const [beautyType, setBeautyType] = useState("");
  const [bookingTime, setBookingTime] = useState("");
  const [slotData, setSlotData] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    async function fetchSlotData() {
      try {
        let data = await fetch(
          "https://beauty-heaven.onrender.com/professions/bookedSlots",
          {
            method: "GET",
            headers: {
              authorization: localStorage.getItem("tokenPro"),
            },
          }
        );
        data = await data.json();
        console.log(data);

        if (data.message === "Not Authorized") {
          navigate("/professional/login");
        }
        setSlotData(data.beautyslot);
      } catch (error) {
        console.log(error);
      }
    }

    fetchSlotData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("tokenPro");
      let obj = { beautyType: beautyType, bookingTime: bookingTime };
      let res = await fetch(`${baseURL}/professions/createBeautySlots`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: token,
        },
        body: JSON.stringify(obj),
      });
      res = await res.json();
      Swal.fire(res.message);
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  async function updateStatus(id, x) {
    console.log(x)
    try {
      const token = localStorage.getItem("tokenPro");
      let res = await fetch(`${baseURL}/professions/updateslot/${id}/${x}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          authorization: token,
        }
      });
      res = await res.json();
      if(res.message === "Confirmed" || res.message === "Rejected"){
        return true
      }
      return false
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div style={{ padding: "24px" }}></div>
      <h1 style={{ textAlign: "center", borderTop: "5px solid #3085d6" }}>
        Add Slot
      </h1>
      <form onSubmit={handleSubmit} style={{ paddingLeft: "40px" }}>
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
      <hr style={{ border: "2px solid #3085d6" }} />
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
              <p>
                status:{" "}
                {el.progress ? "Confirmed" : el.status ? "pending" : (!el.progress && !el.status && !el.userName)? "Not Booked" : "Rejected"}
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
                    title: "Do you want to update?",
                    showDenyButton: true,
                    showCancelButton: true,
                    confirmButtonText: "Confirm Booking",
                    denyButtonText: `Cancel Booking`,
                  }).then((result) => {
                    if (result.isConfirmed) {
                      let x = updateStatus(el.id, "true");
                      if (x) {
                        Swal.fire("Saved!", "", "success");
                      } else {
                        Swal.fire({
                          icon: "error",
                          title: "Oops...",
                          text: "Something went wrong!",
                        });
                      }
                    } else if (result.isDenied) {
                      let y = updateStatus(el.id, "false");
                      if (y) {
                        Swal.fire("Booking Rejected!", "", "info");
                      } else {
                        Swal.fire({
                          icon: "error",
                          title: "Oops...",
                          text: "Something went wrong!",
                        });
                      }
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

export default BeautySlotsForm;
