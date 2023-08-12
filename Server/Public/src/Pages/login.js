import React, { useState } from 'react';
import "./FilingForm.css"
import logo from './CS_log.png';
import axios from 'axios';
// const axios =require("axios");


const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const login= async (_email,_password)=>{
        axios.post('/authority/login',{
            email:_email,
            password:_password
        })
.then(response=>{
  console.log(response.ok)
  if (response.status=='200' ){ //Still don't know why response.ok is not working properly here.
    // window.location.href="/"; 
    console.log('Yes');
    // console.log(response.data,response.status);
    console.log(response.data.authentication_token);
    localStorage.setItem('token',response.data.authentication_token);

    // or <Redrect to="/thankyou" /> if you are using react-router
  }
  else{
    console.log("No");
    console.log(response.data,response.status)
  }
})
.catch(error=>{
    console.error("Error:",error)
})
}


function Myform(){
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formData, setFormData] = useState({
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
       const result= await login(formData.Name,formData.Email,formData.Password);
        if(result){
            setFormSubmitted(true);
            await sleep(1000);
            setFormSubmitted(false);
        }
      };

    return (
        <div>
        <img src={logo} className='App-logo' alt="logo" />
        <h1>It is a Login Page</h1>
        <form onSubmit={handleSubmit}>
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