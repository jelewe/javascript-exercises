//const removeFromArray = function(myArray,removeVariable) {
 //   let resultArray = myArray.filter(removeV);
 //   function removeV(item) {
 //       return item !== removeVariable;
 //   }
 //   return resultArray;
//};
    // the one above returns first test pass

    const removeFromArray = function(firstArray,...toRemove) {
        let modifiedArray = [...firstArray];
        for (let i = 0; i < toRemove.length; i++) {
            if (modifiedArray.includes(toRemove[i])) {
                modifiedArray.splice(modifiedArray.indexOf(toRemove[i]), 1)
            }    
        }
        return modifiedArray;
    };





// Do not edit below this line
module.exports = removeFromArray;
