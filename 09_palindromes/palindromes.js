const palindromes = function (string) {

    let cleanRegex = /[\W]/g;
    let tempString = string;
    let cleanString = tempString.replaceAll(cleanRegex, "");
    let reverseString = "";

    for(let i = cleanString.length-1; i >= 0; i--) {
        reverseString += cleanString.charAt(i);
    }

    if(reverseString.toLowerCase() === cleanString.toLowerCase()){
        return true;
    }else{
        return false;
    }

};

palindromes('A car, a man, a maraca.');

// Do not edit below this line
module.exports = palindromes;
