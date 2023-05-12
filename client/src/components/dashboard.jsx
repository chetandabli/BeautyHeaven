import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CSS from "./Dashboard.module.css"

function Dashboard() {
  const [userData, setUserData] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    async function fetchSlotData() {
        let data = await fetch("https://beauty-heaven.onrender.com/users/particularslots", {
          method: "GET",
          headers: {
            authorization: localStorage.getItem("token"),
          },
        });
        data = await data.json();
  
        if (data.message === "Not Authorized") {
          navigate("/login");
        }
        setUserData(data.beautyslot);
        console.log(data.beautyslot);
      }

    fetchSlotData();
  }, []);

  return (
    <div className={CSS.main}>
      <div style={{ marginRight: "30px"}}>
        <h2>Overview</h2>
        <p>Email: {userData[0]?.userEmail || "example@email.com"}</p>
        <p>Name: {userData[0]?.userName || localStorage.getItem("username") || "Tony"}</p>
        <p>Total Booked Meetings: {userData?.length || 0}</p>
      </div>
      <div className={CSS.mainContainer}>
        {userData?.map((el, index)=>{
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
              <button style={{margin: "0 0 10px 15px", padding: "5px 15px", backgroundColor: el.progress ? "green" : "red", border: "none"}}>{el.progress ? "Confirmed" : "Pending"}</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Dashboard;
