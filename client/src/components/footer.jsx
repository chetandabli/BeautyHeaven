import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerSection}>
        <h3>Beauty Heaven</h3>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
        </ul>
      </div>
      <div className={styles.footerSection}>
        <h3>Follow Us</h3>
        <ul className={styles.socialLinks}>
          <li>
            <a href="https://www.facebook.com">
              <i className="fab fa-facebook">Facebook</i>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com">
              <i className="fab fa-twitter">Twitter</i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com">
              <i className="fab fa-instagram">Instagram</i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;


