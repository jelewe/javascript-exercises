const ftoc = function(temperature) {
  let celsius = 0;
  celsius = (temperature - 32) * (5 / 9);
  let result = celsius.toFixed(1);
  result = Number(result);
  return result;
};

const ctof = function(temparature) {
  let F = 0;
  F = (temparature * (9 / 5)) + 32;
  let result = F.toFixed(1);
  result = Number(result);
  return result;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
