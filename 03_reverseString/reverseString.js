const reverseString = function(string) {
    let splitString = string.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    return joinArray;
}

reverseString("Hello!")

// get last letter from string
// store in variable R
// get last -1 letter from string, store in variable R
// get last -2 letter from string, store in variable R
// repeat until no more letters
// print R

reverseString("Hello World")
// Do not edit below this line
module.exports = reverseString;
