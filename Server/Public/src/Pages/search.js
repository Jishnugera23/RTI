import React, { useState } from 'react';
import "./FilingForm.css"
import logo from './CS_log.png';
import axios from 'axios';
// const axios =require("axios");


function Myform(){
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        Authority_Name : ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        axios.get(`rti/list?authority=${formData.Authority_Name}`)
        .then(response=>{
            console.log("Data:" ,response.data);
        })
      };

    return (
        <div>
        <img src={logo} className='App-logo' alt="logo" />
        <h1> Submit the Authority Named for RTI Search  </h1>
        <form onSubmit={handleSubmit}>
        <label>
          Autority Name:
          <input type="text" name="Authority_Name" value={formData.Authority_Name} onChange={handleChange} />
        </label>
        <br />
        <button type="submit" > {formSubmitted ? 'Form Submitted!' : 'Submit'}</button>
       
      </form>
        </div>
        
    );

    
}
export default Myform;