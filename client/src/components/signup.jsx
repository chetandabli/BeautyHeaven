import styles from "./Signup.module.css";
import { Link } from "react-router-dom";

function Signup () {
    return <form id="signup" className={styles.signupForm}>
                <div>
                    <h4>SIGNUP</h4>
                    <p>**All fields are required</p>
                </div>
                <p>Please sign-up below to create an account</p>
                <input type="text" id="name" placeholder="Enter Full Name" />
                <div>
                    <h5>Gender :</h5>
                    <div>
                        <input type="radio" name="gender" value="Male" />
                        <p>Male</p>
                    </div>
                    <div>
                        <input type="radio" name="gender" value="Female" />
                        <p>Female</p>
                    </div>
                </div>
                <input type="email" id="email" placeholder="Enter your E-mail" />
                <input type="number" id="num" placeholder="Enter Contact Number" />
                <input type="password" id="pass" placeholder="Choose a strong password" />
                <input type="submit" value="SIGNUP" />
                <Link to={"/login"}><button>Login</button></Link>
            </form>
}

export default Signup;