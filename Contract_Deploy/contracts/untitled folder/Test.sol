// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract Test{
    struct Student{
        uint roll_no;
        string name;
        string email;
    }

    function setValues(uint _roll_no,string memory _name,string memory _email) public pure{
        Student memory student;
        student=Student(_roll_no,_name,_email);
    }
}