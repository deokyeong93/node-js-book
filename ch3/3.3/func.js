const { odd, even } = require('./var');

function checkOddOrEven(num) {
  const isOdd = num % 2;

  if (isOdd) {
    return odd;
  }
  return even;
}

module.exports = checkOddOrEven;
