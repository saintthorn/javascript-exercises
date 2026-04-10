const removeFromArray = function (arr, opt1, opt2, opt3, opt4) {
  const optional = [opt1, opt2, opt3, opt4];

  return arr.filter((item) => !optional.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
