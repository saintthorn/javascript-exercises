const convertToCelsius = function (fah) {
  let result = (fah - 32) / (9 / 5);
  if (result === 0) {
    return result;
  }
  result = Number(result.toFixed(1));
  return result;
};

const convertToFahrenheit = function (cel) {
  let result = cel * (9 / 5) + 32;
  if (result === 0) {
    return result;
  }
  result = Number(result.toFixed(1));
  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
