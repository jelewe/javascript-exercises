const palindromes = function (string) {
 string = string.toLowerCase().trim().split("").join("").replace(/\W|\s/g,"");
    let reverseString = string.split("").reverse().join("").replace(/\W|\s/g,"");
    return reverseString === string;
    
};

// Do not edit below this line
module.exports = palindromes;
