/*
   Array methods: 
      forEach(): duyệt qua từng phần tử của mảng
      every(): kiểm tra tất cả phần tử của mảng phải thõa mản điều gì đó trả về boolean
      some(): ngược lại đối với every, chỉ cần 1 phần tử trong mảng thỏa mãn điều kiện 
      find(): tìm kiếm và trả về đúng 1 đối tượng
      filter(): tìm kiếm và trả về tất cả đối tượng
      map(): chỉnh sửa hoặc thay đổi phần tử của 1 array
      reduce(): khi muốn nhận về giá trị duy nhất sau khi tính toán và xử lí trên phần tử Array
*/

var Courses = [
  {
    id: 1,
    name: "JavaScript",
    coins: 300,
  },
  {
    id: 2,
    name: "Java",
    coins: 200,
  },
  {
    id: 3,
    name: "HTML",
    coins: 0,
  },
  {
    id: 4,
    name: "CSS",
    coins: 0,
  },
  {
    id: 5,
    name: "ReactJS",
    coins: 500,
  },
  {
    id: 6,
    name: "NodeJS",
    coins: 500,
  },
  {
    id: 7,
    name: "RUBY",
    coins: 10,
  },
  {
    id: 8,
    name: "RUBY",
    coins: 10000,
  },
];

Courses.forEach(function (course, index) {
  console.log(index, course);
});

var isFree = Courses.every(function (course, index) {
  console.log(index);
  return course.coins === 0;
  // kiểm tra tất cả phần tử, nếu có ít nhất 1 phần tử không đáp ứng được thì trả về false
  // kiểm tra điều kiện nếu gặp false thì lập tức ngừng lại
});
console.log(isFree);

var isFree = Courses.some(function (course, index) {
  console.log(index);
  return course.coins === 0;
  // kiểm tra tất cả phần tử, nếu có ít nhất 1 phần tử đáp ứng được thì trả về true
  // kiểm tra điều kiện nếu gặp true thì lập tức ngừng lại
});
console.log(isFree);

var courseRuby = Courses.find(function (course, index) {
  console.log(index);
  return course.name === "RUBY";
});
console.log(courseRuby);

var courseRuby = Courses.filter(function (course, index) {
  console.log(index);
  return course.name === "RUBY";
});
console.log(courseRuby);
