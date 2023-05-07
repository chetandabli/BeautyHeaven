import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Logo from "../assets/navbar_logo.png";
import "./Footer.module.css"
import CSS from "./Navbar.module.css"

function Navbar() {
  const location = useLocation();
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

  const isHome = location.pathname === "/";
  const isServices = location.pathname === "/services";
  const isDashboard = location.pathname === "/dashboard";

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
                    localStorage.removeItem("username");
                    setUsername(false);
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
