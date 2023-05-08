import styles from "./Signup.module.css";
import { Link } from "react-router-dom";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

function Signup () {
    const baseURL = "https://localhost:5000";
    const [nameData,setNameData] = useState("");
    const [emailData, setEmailData] = useState("");
    const [numData,setNumData] = useState("");
    const [passData,setPassData] = useState("");
    const navigate = useNavigate();

    function formSubmit(e) {
        e.preventDefault();
        const userData = {
            username:nameData,
            email:emailData,
            phoneNumber:numData,
            password:passData
         }
         const res = formCheck(userData);
         if(res){
            fetch(`${baseURL}/users/register`,{
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
                 if(data.message === "registration successfull"){
                    alert(data.message);
                    navigate("/login");
                 }
                 else{
                    alert("Something went wrong, Registration Failed");
                 }
             })
             .catch((err) => {
                console.log(err);
             })
         }
         else{
            alert("Some Fields Are Missing");
         }
    }

    function formCheck(obj) {
        let check = false;
        if(obj.username != "" && obj.email != "" && obj.phoneNumber != "" && obj.password != ""){
        check = true;
    }
    return check;
    }

    return <form id="signup" onSubmit={(e) => {
        formSubmit(e);
    }} className={styles.signupForm}>
                <div>
                    <h4>SIGNUP</h4>
                    <p>**All fields are required</p>
                </div>
                <p>Please sign-up below to create an account</p>
                <input type="text" id="name" value={nameData} onChange={(e) => setNameData(e.target.value)} placeholder="Enter Full Name" />
                <input type="email" id="email" value={emailData} onChange={(e) => setEmailData(e.target.value)} placeholder="Enter your E-mail" />
                <input type="number" id="num" value={numData} onChange={(e) => setNumData(e.target.value)} placeholder="Enter Contact Number" />
                <input type="password" id="pass" value={passData} onChange={(e) => setPassData(e.target.value)} placeholder="Choose a strong password" />
                <input type="submit" value="SIGNUP" />
                <Link to={"/login"}><button>Login</button></Link>
            </form>
}

export default Signup;