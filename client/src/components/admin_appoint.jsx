import {useState,useEffect} from "react";


function AdminAppointment () {
    const baseURL = "https://beauty-heaven.onrender.com";
    const [appointData,setAppointData] = useState(null);

    useEffect(() => {
        fetch(`${baseURL}/admin/appointments`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data);
            setAppointData(data.appointment);
            console.log(appointData);
        })
        .catch((err) => {
            console.log(err.message);
        })
    },[])

    
    return <div>
        <h3>All Appointments</h3>
        <div>
            <table>
                <thead>
                    <th>ID</th>
                    <th>Type</th>
                    <th>Time</th>
                    <th>User Name</th>
                    <th>User Email</th>
                    <th>Professional Name</th>
                    <th>Professional Email</th>
                </thead>
                <tbody id="prof_tbody">
                    {appointData?.map((element) => {
                        return <tr>
                            <td>{element.id}</td>
                            <td>{element.beautyType}</td>
                            <td>{element.bookingTime}</td>
                            <td>{element.userName}</td>
                            <td>{element.userEmail}</td>
                            <td>{element.professionalName}</td>
                            <td>{element.professionalEmail}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    </div>
}

export default AdminAppointment;