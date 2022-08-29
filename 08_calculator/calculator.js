const add = function(num1,num2) {
  let result = num1 + num2;
  return result;
};

const subtract = function(num1,num2) {
  let result = num1 - num2;
  return result;	
};

const sum = function(array) {
	let sum = 0;
  if (array.length === 0) {
    return 0;
    } else if (array.length === 1) {
      return array[0];
    } else {
      for(i = 0; i < array.length; i++) {
      let addend = array[i];
      sum += addend;
      }
    }
 return sum;
};

const multiply = function(array) {
  let product = 1;
  for (i=0; i < array.length; i++) {
    let multiplier = array[i];
    product *= multiplier;
  }
return product;
};

const power = function() {
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
