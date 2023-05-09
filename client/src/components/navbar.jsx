import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Logo from "../assets/navbar_logo.png";
import "./Footer.module.css"
import CSS from "./Navbar.module.css"
import { useNavigate } from "react-router-dom";

function Navbar() {
  const baseURL = "http://localhost:5000";
  const location = useLocation();
  const [username, setUsername] = useState(
    localStorage.getItem("username") || localStorage.getItem("usernamePro") || false
  );
  const navigate = useNavigate();

  useEffect(() => {
    const handleStorageChange = () => {
      setUsername(localStorage.getItem("username") || localStorage.getItem("usernamePro"));
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const isHome = location.pathname === "/";
  const isServices = location.pathname === "/services";
  const isDashboard = location.pathname === "/dashboard";
  const isProfessional  = location.pathname === "/professional";

  return (
    <div className={CSS["navbar-container"]}>
      <div>
        <Link to="/">
          <img src={Logo} alt="beauty heaven" className={CSS.logo} />
        </Link>
      </div>
      <div className={CSS["nav-links"]}>
        <ul>
          <li>
            <Link to="/" className={isHome? CSS["active-link"] : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/services" className={isServices? CSS["active-link"] : ""}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/professional" className={isProfessional? CSS["active-link"] : ""}>
              Join us
            </Link>
          </li>
          {username ? (
            <>
              <li>
                <Link to="/dashboard" className={isDashboard? CSS["active-link"] : ""}>
                  {username}
                </Link>
              </li>
              <li>
                <button
                  onClick={() => {
                    const loginCheck = localStorage.getItem("token");
                    if(loginCheck){
                      fetch(`${baseURL}/users/logout`,{
                        method : "GET",
                        headers : {
                          authorization : loginCheck
                        }
                      })
                      .then((res) => {
                        return res.json();
                      })
                      .then((data) => {
                        if(data){
                          localStorage.removeItem("username");
                          setUsername(false);
                          alert("Logout Successfull");
                          navigate("/");
                        }
                        else{
                          alert("Something went wrong");
                        }
                      })
                      .catch((err) => {
                        console.log(err.message);
                      })
                    }
                    else{
                      alert("Please login first");
                    }
                  }}
                  className={CSS["login-btn"]}
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login">
                <button className={CSS["login-btn"]}>Login</button>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
    
  );
}

export default Navbar;
