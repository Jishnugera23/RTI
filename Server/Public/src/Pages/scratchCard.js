import React, { useState,useEffect } from 'react';
import "./FilingForm.css"
import logo from './CS_log.png';
import axios from 'axios';
// const axios =require("axios");


function  Scratch_Card() {
    // const generate_card=async ()=>{
    //     await axios.get("scratchCard/create")
    //     .then(response => {
    //         console.log('Data:', response.data);
    //     })
    //     .catch(error => {
    //         console.error('Error:', error);
    //     });
    // }
    const [data, setData] = useState(null);
    useEffect(() => {
        const apiUrl = 'scratchCard/create';
    
        axios.get(apiUrl)
          .then(response => setData(response.data))
          .catch(error => console.error('Error fetching data:', error));
      }, []);
    return (
        <div>
        <img src={logo} className='App-logo' alt="logo" />
        <h1>It is a SratchCard Generation Page</h1>
        {/* {data && (
                <p>API Response: {JSON.stringify(data)}</p>
            )} */}
        {data && data.message}  {/*When using only data.message it is showing object is null then why is it changing when we just check if data is not null? */}
        </div>
        
    );

    
}
export default Scratch_Card;