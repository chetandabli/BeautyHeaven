import React, { useState } from 'react';

function BeautySlotsForm() {
  const baseURL = "http://localhost:5000";
  const [beautyType, setBeautyType] = useState('');
  const [bookingTime, setBookingTime] = useState('');

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
    </>
  );
}

export default BeautySlotsForm
