import React, { useState } from 'react';
import "./FilingForm.css"
import axios from 'axios';
// const axios =require("axios");




function get_list(){
    axios.get('/rti/list?authority=IIT Mandi')
    return (
        <div>
        {/* <img src={logo} className='App-logo' alt="logo" /> */}
        <h1>This is a get list section</h1>
        </div>
        
    );

    
}
export default get_list;