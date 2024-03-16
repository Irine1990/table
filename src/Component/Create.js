import React from "react";
import { useState } from "react";
import { API } from "./global";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Create() {



  const [input, setInput] = useState({
    Id: '',
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

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${API}`, input)
      .then(res => {
        alert("User posted successfully")
        navigate('/')
      })

  }

  return (
    <div className="container" id="form" >
      <h2>Create the new user</h2>
      <form onSubmit={handleSubmit}>
        <div><input type="number" class="form-control" name="Id" placeholder="Enter the Id"
          onChange={(e) => setInput({ ...input, Id: e.target.value })}></input></div><br></br>
        <div><input type="text" class="form-control" name="Username" placeholder="Enter the Username"
          onChange={(e) => setInput({ ...input, Username: e.target.value })}></input></div><br></br>
        <div><input type="email" class="form-control" name="Email" placeholder="Enter the Email"
          onChange={(e) => setInput({ ...input, Email: e.target.value })}></input></div><br></br>
        <div><input type="text" class="form-control" name="Address" placeholder="Enter the Address"
          onChange={(e) => setInput({ ...input, Address: e.target.value })}></input></div><br></br>
        <div><input type="text" class="form-control" name="City" placeholder="Enter the City"
          onChange={(e) => setInput({ ...input, City: e.target.value })}></input></div><br></br>
        <div><input type="number" class="form-control" name="Zipcode" placeholder="Enter the Zipcode "
          onChange={(e) => setInput({ ...input, Zipcode: e.target.value })}></input></div><br></br>
        <div><input type="number" class="form-control" name="PhoneNumber" placeholder="Enter the PhoneNumber"
          onChange={(e) => setInput({ ...input, PhoneNumber: e.target.value })}></input></div><br></br>
        <div><input type="text" class="form-control" name="Website" placeholder="Enter the Website"
          onChange={(e) => setInput({ ...input, Website: e.target.value })}></input></div><br></br>
        <div><input type="text" class="form-control" name="CompanyName" placeholder="Enter the CompanyName "
          onChange={(e) => setInput({ ...input, CompanyName: e.target.value })}></input></div><br></br>
        <button className="sub">SUBMIT</button>
      </form>

    </div>
  )
}

export default Create;