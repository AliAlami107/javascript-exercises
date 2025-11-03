/*
The goal is to add string x(num) times
using loops.
    1. we have a string that we want to check and modify
    2. if num is less than 2 we can just return the original string
    3 . if num is greater than 2 we have to add string num times to the string
    4. find the last index of the string and add string again until num times

*/


const repeatString = function(string, num) {
    let temp = "";

    if(num < 0) {
        return "ERROR";
    }
    if(num < 1) {
        return temp;
    }
    for (let i = 0; i < num; i++) {
        temp += string;
    }
    return temp;
};

// Do not edit below this line
module.exports = repeatString;
