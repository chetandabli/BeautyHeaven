import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Logo from "../assets/navbar_logo.png";
import "./Footer.module.css"

function Navbar() {
  const [username, setUsername] = useState(
    localStorage.getItem("username") || false
  );

  useEffect(() => {
    const handleStorageChange = () => {
      setUsername(localStorage.getItem("username"));
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#EAE3DB",
        justifyContent: "space-between",
        height: "60px",
        width: "100%",
        position: "fixed",
        padding: "5px 0px"
      }}
    >
      <div>
        <Link to="/">
          <img src={Logo} alt="beauty heaven" style={{ cursor: "pointer", height: "100%", marginLeft: "20px"}} />
        </Link>
      </div>
      <div style={{
        display: "flex",
        alignItems: "center",
      }}>
        <ul
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          <li style={{ marginRight: "30px" }}>
            <Link to="/" style={{ color: "#372415", cursor: "pointer", textDecoration: "none" }}>
              Home
            </Link>
          </li>
          <li style={{ marginRight: "30px" }}>
            <Link
              to="/services"
              style={{ color: "#372415", cursor: "pointer", textDecoration: "none" }}
            >
              Services
            </Link>
          </li>
          {username ? (
            <>
              <li style={{ marginRight: "30px" }}>
                <Link
                  to="/dashboard"
                  style={{ color: "#372415", cursor: "pointer" , textDecoration: "none"}}
                >
                {username}
                </Link>
              </li>
              <li style={{
                marginRight: "20px"
              }}>
                <button
                  onClick={() => {
                    localStorage.removeItem("username");
                    setUsername(false);
                  }}
                  style={{
                    backgroundColor: "#AD9551",
                    color: "#fff",
                    border: "none",
                    padding: "10px 20px",
                    cursor: "pointer",
                    borderRadius: "5px"
                  }}
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li style={{ marginRight: "20px" }}>
              <Link
                to="login"
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                <button
                  style={{
                    backgroundColor: "#AD9551",
                    color: "#fff",
                    border: "none",
                    padding: "10px 20px",
                    cursor: "pointer",
                    borderRadius: "5px"
                  }}
                >
                  Login
                </button>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
