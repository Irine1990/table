import React, { useEffect } from "react";
import axios from "axios";
import { API } from "./global";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



function Home() {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(`${API}`)
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, [])

    const navigate = useNavigate();
    return (

        <div className="container">
            <h1>LIST OF USERS</h1>
            <Link to="/Create" className="btn btn-success">Create</Link>

            <table className="table table-success table-striped" border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>Zipcode</th>
                        <th>Phone</th>
                        <th>website</th>
                        <th>Company Name</th>
                        <th>Actions Required</th>

                    </tr>
                </thead>
                <tbody>

                    {data.map((item, i) => (
                        <tr key={i}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>{item.address.street}</td>
                            <td>{item.address.city}</td>
                            <td>{item.address.zipcode}</td>
                            <td>{item.phone}</td>
                            <td>{item.website}</td>
                            <td>{item.company.name}</td>
                            <td>
                                <Link className="text-decoration-none btn btn-sm btn-success" to={`/Update/${item.id}`}>Update</Link>

                                <button onClick={e => handleDelete(item.id)}>Delete</button>
                            </td>




                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    )


    function handleDelete() {
        const confirm = window.confirm("Would u like to delete");
        if (confirm) {
            axios.delete(`${API}  + id`)
                .then(res =>
                    alert("User deleted successfully"))
            navigate('/')
        }
    }
}

export default Home;