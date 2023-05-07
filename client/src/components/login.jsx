import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import {useState} from "react";

function Login () {
    const baseURL = "https://localhost:5000";
    const [emailData,setEmailData] = useState("");
    const [passData,setPassData] = useState("");
    
    function formSubmit(e) {
        e.preventDefault();
        let userData = {
            email : emailData,
            password : passData
        }
        const res = formCheck(userData);
        if(res){
        fetch(`${baseURL}/users/login`,{
           method:"POST",
           headers:{
               "Content-Type":"application/json"
           },
           body: JSON.stringify(userData)
        })
        .then((res) => {
           return res.json();
        })
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
           console.log(err.message);
        })
    }
    else{
       alert("Some Fields Are Missing");
    }

    }
    function formCheck(obj) {
        let check = false;
        if(obj.email != "" && obj.password != ""){
            check = true;
        }
        return check;
    }
    return <form id="login" onSubmit={(e) => {
        formSubmit(e);
    }} className={styles.loginForm}>
                <h4>LOG IN</h4>
                <p>Please enter your email and password below to access your account</p>
                <input id="logemail" type="email" value={emailData} onChange={(e) => setEmailData(e.target.value)} placeholder="Please enter your E-mail" />
                <input id="logpass" type="password" value={passData} onChange={(e) => setPassData(e.target.value)} placeholder="Please enter your Password" />
                <p>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
                <div>
                <Link style={{ fontWeight: "600", textDecoration: "underline" }} to={"/signup"}>Create New Account!</Link>
                <input type="submit" value="Log In" />
                </div>
            </form>
}

export default Login;