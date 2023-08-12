// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;


contract Fine{

    function collect_fine(uint filing_date,uint reply_date, address payable recipient)external payable {
        uint diff=reply_date-filing_date;
        require(diff >= 2592000+86400, "days should be greater than 30");
        recipient.transfer(diff);
        // if(diff>2592000){
        //     uint days=(diff-2592000)%86400;
            
        // }

    }

}