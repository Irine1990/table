import React from "react";
import { API } from "./global";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useParams } from "react-router-dom";


function Update() {

  const { id } = useParams()

  const [input, setInput] = useState({
    Id: 'id',
    Username: '',
    Email: '',
    Address: '',
    City: '',
    Zipcode: '',
    PhoneNumber: '',
    Website: '',
    CompanyName: '',


  })

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${API}`+ id)
      .then(res => setInput(res.data))
      .catch(err => console.log(err))
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`${API}`+ id, input)
      .then(res => {
        alert("User posted successfully")
        navigate('/')
      })

  }
  return (
    <div className="container" id="form" >
      <h2>Create the new user</h2>
      <form onSubmit={handleSubmit}>
        <div><input type="number" class="form-control" name="Id" placeholder="Enter the Id" value={input.Id}
          onChange={(e) => setInput({ ...input, Id: e.target.value })}></input></div><br></br>
        <div><input type="text" class="form-control" name="Username" placeholder="Enter the Username" value={input.Username}
          onChange={(e) => setInput({ ...input, Username: e.target.value })}></input></div><br></br>
        <div><input type="email" class="form-control" name="Email" placeholder="Enter the Email" value={input.Email}
          onChange={(e) => setInput({ ...input, Email: e.target.value })}></input></div><br></br>
        <div><input type="text" class="form-control" name="Address" placeholder="Enter the Address" value={input.Address}
          onChange={(e) => setInput({ ...input, Address: e.target.value })}></input></div><br></br>
        <div><input type="text" class="form-control" name="City" placeholder="Enter the City" value={input.City}
          onChange={(e) => setInput({ ...input, City: e.target.value })}></input></div><br></br>
        <div><input type="number" class="form-control" name="Zipcode" placeholder="Enter the Zipcode " value={input.Zipcode}
          onChange={(e) => setInput({ ...input, Zipcode: e.target.value })}></input></div><br></br>
        <div><input type="number" class="form-control" name="PhoneNumber" placeholder="Enter the PhoneNumber" value={input.PhoneNumber}
          onChange={(e) => setInput({ ...input, PhoneNumber: e.target.value })}></input></div><br></br>
        <div><input type="text" class="form-control" name="Website" placeholder="Enter the Website" value={input.Website}
          onChange={(e) => setInput({ ...input, Website: e.target.value })}></input></div><br></br>
        <div><input type="text" class="form-control" name="CompanyName" placeholder="Enter the CompanyName " value={input.CompanyName}
          onChange={(e) => setInput({ ...input, CompanyName: e.target.value })}></input></div><br></br>
        <button className="sub">Update</button>
      </form>

    </div>
  )
}

export default Update;