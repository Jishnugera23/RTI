// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract Reply_contract{
    event reply(string Filing_Txn,string response);
    address private owner;
    constructor(){
        owner=msg.sender;
    }
    modifier isOwner(){
        require(msg.sender == owner, "Caller is not owner");
        _;
    }
    function setData(string memory _Filing_Txn,string memory _Response)public isOwner {
        emit reply(_Filing_Txn,_Response);
    }
}