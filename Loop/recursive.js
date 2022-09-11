var array = ["a", "b", "c", "d", "a", "b", "c"];

console.log([...new Set(array)]);

// Bài 1:
function countDown(number) {
  if (number > 0) {
    console.log(number);
    return countDown(number - 1);
  }
  return number;
}

countDown(10);

// Bài 2:
function loop(start, end, callback) {
  if (start < end) {
    callback(start);
    return loop(start + 1, end, callback);
  }
}

var arrayLanguage = ["JavaScript", "RUBY", "HTML", "CSS"];

loop(0, arrayLanguage.length, function (index) {
  console.log("index: " + index);
});
