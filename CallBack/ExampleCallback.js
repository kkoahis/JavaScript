// console.log('hello')

let people = [
  {
    Name: "Duc Anh",
    Age: 21,
    Coin: 200,
  },
  {
    Name: "Hoang Anh",
    Age: 11,
    Coin: 300,
  },
  {
    Name: "Van Bach",
    Age: 21,
    Coin: 400,
  },
  {
    Name: "Quan Le",
    Age: 21,
    Coin: 500,
  },
  {
    Name: "Nhat Anh",
    Age: 80,
    Coin: 600,
  },
  {
    Name: "Nhat Anh",
    Age: 18,
    Coin: 600,
  },
];

// var htmls = people.filter(function (human) {
//   return human.Age > 18;
// });
// console.log(htmls);

Array.prototype.filter2 = function (callback) {
  var arrayLength = this.length;
  var output = [];
  for (var i = 0; i < arrayLength; i++) {
    var result = callback(this[i]);
    if (this[i].Age > 18) {
      // console.log(this[i]);
      output.push(result);
    }
  }
  return output;
};

// var html2 = people.filter2(function (human) {
//   return human.Name;
// });
// console.log(html2);
/////////////////////////////////////////////////////////////////////////
Array.prototype.forEach2 = function (callback) {
  var arrayLength = this.length;
  var output = [];
  for (var i = 0; i < arrayLength; i++) {
    var result = callback(this[i]);
    output.push(result);
  }
  return output;
};

// people.forEach(function (human) {
//   console.log(human);
// });

// people.forEach2(function (human) {
//   console.log(human);
// });
/////////////////////////////////////////////////////////////////////////
// var courseRuby = people.find(function (course, index) {
//   return course.Name === "Nhat Anh";
// });
// console.log(courseRuby);

Array.prototype.find2 = function (callback) {
  var arrayLength = this.length;
  var output = [];
  for (var i = 0; i < arrayLength; i++) {
    var result = callback(this[i]);
    if (this[i].Name === "Nhat Anh") {
      output.push(result);
      break;
    }
  }
  return output;
};

// var courseRuby = people.find2(function (course) {
//   return course.Age;
// });
// console.log(courseRuby);
