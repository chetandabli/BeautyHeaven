import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

function LoginPro () {
    const baseURL = "http://localhost:5000";
    const [emailData,setEmailData] = useState("");
    const [passData,setPassData] = useState("");
    const navigate = useNavigate();
    
    function formSubmit(e) {
        e.preventDefault();
        let userData = {
            email : emailData,
            password : passData
        }
        const res = formCheck(userData);
        if(res){
        fetch(`${baseURL}/professions/login`,{
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
            if(data.Access_Token){
                const userDetails = {
                    username : data.username,
                    token : data.Access_Token
                }
                localStorage.setItem("usernamePro",userDetails.username);
                localStorage.setItem("tokenPro",userDetails.token);
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
                      .catch((err) => {
                        console.log(err);
                      })
                    }
                localStorage.removeItem("username")
                localStorage.removeItem("token")
                alert("Login Success");
                navigate("/professional");
            }
            else{
                console.log(data)
                alert("Invalid Credentials !!");
            }
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
    return <>
    <div style={{padding: "80px"}}></div>
        <form id="login" onSubmit={(e) => {
        formSubmit(e);
    }} className={styles.loginForm}>
                <h4>LOG IN</h4>
                <p>Please enter your email and password below to access your account</p>
                <input id="logemail" type="email" value={emailData} onChange={(e) => setEmailData(e.target.value)} placeholder="Please enter your E-mail" />
                <input id="logpass" type="password" value={passData} onChange={(e) => setPassData(e.target.value)} placeholder="Please enter your Password" />
                <p>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
                <div>
                <Link to={"/professional/signup"}><p style={{ fontWeight: "600", textDecoration: "underline" }}>Create New Account!</p></Link>
                <input type="submit" value="Log In" />
                </div>
            </form>
            <div style={{padding: "50px"}}></div>
    </>
}

export default LoginPro;