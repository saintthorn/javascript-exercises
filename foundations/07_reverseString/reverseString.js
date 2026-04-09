const reverseString = function (str) {
  result = "";
  let length = str.length;
  for (let i = 0; i <= length - 1; i++) {
    str.trim();
    result = result + str.slice(-1);
    str = str.slice(0, -1);
  }
  return result;
};

reverseString("Hello World!");

// Do not edit below this line
module.exports = reverseString;
