// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Counter {
    
    uint public counter;

    constructor(uint x) {
        counter = x;
    }
    
    function count() public {
        counter = counter + 1;
    }
    
    function add(uint x) public returns(uint){
        counter = counter + x;
        return counter;
    }
}