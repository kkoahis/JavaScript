// forEach, find, filter, some, every, reduce
var Course = ["JavaScript", "PHP", "RUBY"];

// Cách duyệt mảng tối ưu
// for (var index in Course) {
//   console.log(Course[index]);
// }

// forEach
Array.prototype.forEach2 = function (callback) {
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      callback(this[index], index, this);
    }
  }
};

Course.forEach2(function (course, index, array) {
  console.log(course, index, array);
});
