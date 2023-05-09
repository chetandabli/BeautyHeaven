import {useState,useEffect} from "react";


function AdminProf () {
    const baseURL = "http://localhost:5000";
    const [profData,setProfData] = useState(null);

    useEffect(() => {
        fetch(`${baseURL}/admin/professionals`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data);
            setProfData(data.professionalList);
        })
        .catch((err) => {
            console.log(err.message);
        })
    },[])

    
    return <div>
        <h3>All Professionals</h3>
        <div>
            <table>
                <thead>
                    <th>Professional ID</th>
                    <th>Professional Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                </thead>
                <tbody id="prof_tbody">
                    { profData?.map((element) => {
                        return <tr>
                            <td>{element.id}</td>
                            <td>{element.professionalName}</td>
                            <td>{element.email}</td>
                            <td>{element.phoneNumber}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    </div>
}

export default AdminProf;