// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract TestNetwork{
    uint hello=1;
    struct Student{
        uint roll_no;
        string name;
        string email;
    }
    event rti(uint serial_no, string rti_text, string name,string address_home);
        

    // function setValues(uint _roll_no,string memory _name,string memory _email) public pure{
    //     Student memory student;
    //     student=Student(_roll_no,_name,_email);
    // }
    function setData(uint _serial_no, string memory _rti_text, string memory _name, string memory _address_home) public{
        emit rti(_serial_no,_rti_text,_name,_address_home);
    }
}