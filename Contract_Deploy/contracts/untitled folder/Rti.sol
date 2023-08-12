// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract RTI{
    uint public request_id;
    address payable public getter = payable(0x5B38Da6a701c568545dCfcB03FcB875f56beddC4);
    receive() external payable{}
    enum gender{
        Male,
        Female,
        Others
    }
    struct Applier{
        uint request_no;
        string Email_id;
        string Mobile_no;
        string Name;
        gender Gender;        
        string Address;
        bool Below_Bpl;
        string Organisation;
        string Text_For_Application;
    }

    function apply_rti(string memory _Email_id,
    string memory _Mobile_no, string memory _Name,gender _Gender,string memory _Address
    ,bool _Below_Bpl,string memory _Organisation,string memory _Text_For_Application) public {
        Applier memory requester;
        requester.request_no=request_id++;
        requester.Email_id=_Email_id;
        requester.Mobile_no=_Mobile_no;
        requester.Name=_Name;
        requester.Gender=_Gender;
        requester.Address=_Address;
        requester.Below_Bpl=_Below_Bpl;
        requester.Organisation=_Organisation;
        requester.Text_For_Application=_Text_For_Application;

        

        RTI_Cost();



    }
    function checkbal() public view returns(uint){
        return address(this).balance;
    }
    function RTI_Cost() public{
        getter.transfer(1000000000000000000);
    }



}