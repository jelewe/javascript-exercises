const palindromes = function (string) {
    string = string.toLowerCase().trim();
    string = string.replaceAll("!", "");
    string = string.replaceAll(",", "");
    string = string.replaceAll(".", "");
    string = string.replaceAll(" ", "");
    let splitString = string.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    return joinArray === string;
    
};

// Do not edit below this line
module.exports = palindromes;
