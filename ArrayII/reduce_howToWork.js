Array.prototype.reduce2 = function (callback, result) {
  let i = 0;
  if (arguments.length < 2) {
    i = 1;
    result = this[0];
  }
  for (; i < this.length; i++) {
    result = callback(result, this[i], i, this);
  }
  return result;
};

const number = [1, 2, 3, 4, 5];

const result = number.reduce(function (total, current) {
  return total + current;
}, 10);

const result2 = number.reduce2(function (total, current) {
  return total + current;
}, 10);

console.log(result);
console.log(result2);
