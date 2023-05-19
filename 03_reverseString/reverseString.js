const reverseString = function(string) {

    let tempString = "";

    for(let i = string.length-1; i >= 0; i--) {
        tempString += string.charAt(i);
    }

    return tempString
    
};

// Do not edit below this line
module.exports = reverseString;
