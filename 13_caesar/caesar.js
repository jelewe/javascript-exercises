//const negShift = function(num) {
 //   if (num > 0) {
 //       num = num;
 //   } else {
  //      num += 26;
 //   }
 //   return num;
//}

const caesar = function(string,shift) {
    var newString = "";
     for (i = 0; i < string.length; i++) {
            let ascii = string[i].charCodeAt();
             if (ascii >= 32 && ascii <= 46) { //keeps spacing and punctuation
                newString += String.fromCharCode(ascii);
            } else if (ascii >= 65 && ascii <= 90) { //uppercase
             ((ascii + shift) <= 90) ? newString +=  String.fromCharCode((ascii + shift)) : newString +=  String.fromCharCode((ascii + shift) % 90 + 64);
         } else {
                ((ascii + shift) <= 122 ) ? newString +=  String.fromCharCode((ascii + shift)) : newString +=  String.fromCharCode((ascii + shift) % 122 + 96);
         }
    }
return newString;

};

// Do not edit below this line
module.exports = caesar;
