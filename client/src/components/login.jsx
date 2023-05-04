import styles from "./Login.module.css";
import { Link } from "react-router-dom";

function Login () {
    return <form id="login" className={styles.loginForm}>
                <h4>LOG IN</h4>
                <p>Please enter your email and password below to access your account</p>
                <input id="logemail" type="email" placeholder="Please enter your E-mail" />
                <input id="logpass" type="password" placeholder="Please enter your Password" />
                <p>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
                <div>
                <Link style={{ fontWeight: "600", textDecoration: "underline" }} to={"/signup"}>Create New Account!</Link>
                <input type="submit" value="Log In" />
                </div>
            </form>
}

export default Login;