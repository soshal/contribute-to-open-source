const _check = (x, y) => {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw new TypeError('Both arguments must be numbers');
  }
};

exports.add = (x, y) => {
  _check(x, y);
  return x + y;
};

exports.subtract = (x, y) => {
  _check(x, y);
  return x - y;
};

exports.multiply = (x, y) => {
  _check(x, y);
  return x * y;
};

exports.divide = (x, y) => {
  _check(x, y);
  if (y === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return x / y;
};
