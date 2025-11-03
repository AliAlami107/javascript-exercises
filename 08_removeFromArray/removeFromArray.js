const removeFromArray = function(array, ...item) {
    return array.filter(element => !item.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;
