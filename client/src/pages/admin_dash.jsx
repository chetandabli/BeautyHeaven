import styles from "./adminDash.module.css";
import AdminProf from "../components/admin_prof";
import AdminAppointment from "../components/admin_appoint";

function AdminDash() {
   return <>
        <h2 className={styles.head}>Beauty Heaven</h2>
        <h2 className={styles.head}>Admin Dashboard</h2>
        <div className={styles.tableDiv}><AdminProf /></div>
        <div className={styles.tableDiv}><AdminAppointment /></div>
    </>
}

export default AdminDash;