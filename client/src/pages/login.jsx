import styles from "./loginpage.module.css";
import Login from "../components/login";
import Signup from "../components/signup";

function LoginPage() {
   return <>
        <div className={styles.mainDiv}>
            <Login />
            <Signup />
        </div>
    </>
}

export default LoginPage;