import styles from "./loginpage.module.css";
import Signup from "../components/signup";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function SignupPage() {
   return <>
   <Navbar/>
        <div className={styles.mainDiv}>
            <Signup />
        </div>
        <Footer/>
    </>
}

export default SignupPage;