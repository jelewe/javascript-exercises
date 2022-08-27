const removeFromArray = function(myArray,removeVariable) {
    let resultArray = myArray.filter(removeV);

    function removeV(item) {
        return item !== removeVariable;
    }
    return resultArray;
};

 //   Array.from(myArray);
 //   myArray.pop(removeVariable);
 //   return myArray;




// Do not edit below this line
module.exports = removeFromArray;
