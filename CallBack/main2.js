var Course = ["JavaScript", "HTML", "PHP", "CSS"];

Array.prototype.map2 = function (callback) {
  var output = [];
  var arrayLength = this.length;
  for (var i = 0; i < arrayLength; i++) {
    var result = callback(this[i]);
    //  console.log("2");
    output.push(result);
  }
  return output;
};

var htmls = Course.map2(function (course) {
  //   console.log("1");
  return `<h2>${course}</h2>`;
});
console.log(htmls.join("\n"));

// var htmls = Course.map(function (course) {
//   return `<h2>${course}</h2>`;
// });
// console.log(htmls.join("\n"));
