// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract Supply{
   
    event pro(uint id,string name,string details, string[] raw_hash,string location);
    function setData(uint _id,string memory _name,string memory _details, string[] memory _raw_hash,string memory _location) public{
        emit pro(_id,_name,_details,_raw_hash,_location);
    }
}



