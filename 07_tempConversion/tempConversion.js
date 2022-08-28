const ftoc = function(temperature) {
  let celsius = 0;
  celsius = (temperature - 32) * (5 / 9);
  let result = celsius.toFixed(1);
  result = Number(result);
  return result;
};

const ctof = function() {

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
