// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract Filing_contract{
    event file(string indexed Name ,string indexed Ministry ,string Public_Authority,string Text);
    address private owner;
    constructor(){
        owner=msg.sender;
    }
    modifier isOwner(){
        require(msg.sender == owner, "Caller is not owner");
        _;
    }
    function setData(string memory _Name,string memory _Ministry,string memory _Public_Authority,string memory _Text)public isOwner {
        emit file(_Name,_Ministry,_Public_Authority,_Text);
    }
}