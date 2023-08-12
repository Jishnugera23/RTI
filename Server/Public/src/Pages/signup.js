import React, { useState } from 'react';
import "./FilingForm.css"
import logo from './CS_log.png';
import axios from 'axios';
// const axios =require("axios");


const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const signup= async (_name,_email,_password)=>{
        axios.post('/authority/signup',{
            name:_name,
            email:_email,
            password:_password

        })
.then(response=>{
    console.log('Data:',response.data)
})
.catch(error=>{
    console.error("Error:",error)
})
}


function Myform(){
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        Name: '',
        Email: '',
        Password: ''
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
       const result= await signup(formData.Name,formData.Email,formData.Password);
        if(result){
            setFormSubmitted(true);
            await sleep(1000);
            setFormSubmitted(false);
        }
      };

    return (
        <div>
        <img src={logo} className='App-logo' alt="logo" />
        <h1>It is a Signup Page</h1>
        <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="Name" value={formData.Name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="text" name="Email" value={formData.Email} onChange={handleChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="text" name="Password" value={formData.Password} onChange={handleChange} />
        </label>
        <br />
        <button type="submit" > {formSubmitted ? 'Form Submitted!' : 'Submit'}</button>
       
      </form>
        </div>
        
    );

    
}
export default Myform;