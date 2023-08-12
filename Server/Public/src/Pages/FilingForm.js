import React, { useState } from 'react';
import "./FilingForm.css"
import logo from './CS_log.png';
import axios from 'axios';
// const axios =require("axios");

const file_rti_contract=async (_name,_text,_public_authority,_ministry,_card_code)=>{
  const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(walletAddress, walletAbi, signer);

  await contract.setData(_name,_text,_public_authority,_ministry);
}
const file_rti_central= async(_name,_text,_public_authority,_ministry,_card_code)=>{
  await axios.post('/rti/create',{
    ministry:_ministry,
    public_authority:_public_authority,
    text:_text,
    card_code:_card_code
  })
.then(response => {
  console.log('Data:', response.data);
})
.catch(error => {
  console.error('Error:', error);
});
return true;
}

//Address to make the object Contract
const { ethers } = require("ethers");
const walletAddress = "0xD79f397a8735296e1602fe7eC29643CF4313ba02";
const walletAbi=[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"Name","type":"string"},{"indexed":false,"internalType":"string","name":"Ministry","type":"string"},{"indexed":false,"internalType":"string","name":"Public_Authority","type":"string"},{"indexed":false,"internalType":"string","name":"Text","type":"string"}],"name":"file","type":"event"},{"inputs":[{"internalType":"string","name":"_Name","type":"string"},{"internalType":"string","name":"_Ministry","type":"string"},{"internalType":"string","name":"_Public_Authority","type":"string"},{"internalType":"string","name":"_Text","type":"string"}],"name":"setData","outputs":[],"stateMutability":"nonpayable","type":"function"}];

//File RTI That will call function from the contract
const File_rti = async (_name,_text,_public_authority,_ministry,_card_code) => {
    try{
      
      const p=await file_rti_central(_name,_text,_ministry,_public_authority,_card_code);
      const q=await file_rti_contract(_name,_text,_ministry,_public_authority,_card_code);
      console.log("p:",p);
      console.log("q",q);
    }
    catch(error){
      console.log(error)
    }
   
    // if(p ){
    
    // console.log(q);
    // console.log(p);
    // if(q){
    //   alert("Both are filed Sucessfully");
    // }
    // else{
    //   alert("Failed to file in Smart Contract");
    // }
    // }
    // alert("Failed to file in Both");
    
};

function MyForm() {
  const [formData, setFormData] = useState({
    Name: '',
    Text: '',
    Public_Authority: '',
    Ministry: '',
    Card_Code:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // alert("hello");
    File_rti(formData.Name,formData.Text,formData.Ministry,formData.Public_Authority,formData.Card_Code);
  };

 
//Form Page that will be loaded to file the RTI
  return (
    <div>
        <img src={logo} className="App-logo" alt="logo" />
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="Name" value={formData.name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Text:
          <input type="text" name="Text" value={formData.text} onChange={handleChange} />
        </label>
        <br />
        <label>
          Public_Authority:
          <input type="text" name="Public_Authority" value={formData.Public_Authority} onChange={handleChange} />
        </label>
        <br />
        <label>
          Ministry:
          <input type="text" name="Ministry" value={formData.Ministry} onChange={handleChange} />
        </label>
        <br />
        <label>
          Card_Code:
          <input type="text" name="Card_Code" value={formData.Card_Code} onChange={handleChange} />
        </label>
        <br />
        <button type="submit" >Submit</button>
      </form>
    </div>
   
  );
}

export default MyForm;
