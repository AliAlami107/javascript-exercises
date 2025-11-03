/*  The goal is to reverse a string
    1. get a string, start a loop from it's last index
    2. loop down for each character and add it to a new string variable
    3. then return the new string var


*/

const reverseString = function(string) {
    //check for empty string
    if(string === '') {
        return '';
    }

    let new_string = "";

    for(let i = string.length -1; i >= 0; i--) {
        new_string += string[i];
    }
    return new_string;
};

// Do not edit below this line
module.exports = reverseString;
