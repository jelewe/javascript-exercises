const repeatString = function(str, num) {
 //   let repeatedString ="";
//while (num > 0) {
   // repeatedString += str;
   // num--;
//}
 //   return repeatedString
//}

//repeatString('hey',3);

if (num > 0 ) {
    return str.repeat(num)
} else if (num == 0) {
    return "" 
} else {
    return "ERROR"
}
}

repeatString('hey',3)

// Do not edit below this line
module.exports = repeatString;
