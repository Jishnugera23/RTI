// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract Emit_Grades{
    event Transcript(string Name,string  Userid,string hash);
    address private owner;
    constructor(){
        owner=msg.sender;
    }
    modifier isOwner(){
        require(owner==msg.sender,"Sender is not the Owner");
        _;
    }
    function setData(string memory _name,string memory _userid,string memory _hash) public isOwner {
        emit Transcript(_name,_userid,_hash);

    }
}