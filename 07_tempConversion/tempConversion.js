const ftoc = function(temperature) {
  let celsius = 0;
  celsius = (temperature - 32) * (5 / 9);
  return celsius;
};

const ctof = function() {

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
