// map(): chỉnh sửa hoặc thay đổi phần tử của 1 array
// reduce(): khi muốn nhận về giá trị duy nhất sau khi tính toán và xử lí trên phần tử Array

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

/////////////////////////////////////////////////////////
//                      MAP
////////////////////////////////////////////////////////
function courseHandler(course, index) {
  return {
    idNew: course.id,
    nameNew: `Khóa học: ${course.name}`,
    coinsNew: course.coins,
    coinText: `Giá: ${course.coins}`,
    index: index,
    originArray: course,
  };
}
var editedCourses = Courses.map(courseHandler);
console.log(editedCourses);

/////////////////////////////////////////////////////////
//                      REDUCE
////////////////////////////////////////////////////////

// accumulator: biến lưu trữ, lần chạy đầu tiên nó được gán giá trị là đối số truyền vào từ hàm reduce (ở đây là số 0)
function coinHandler(accumulator, currentValue, currentIndex, originArray) {
  var total = accumulator + currentValue.coins;
  //   console.table({
  //     "Biến lưu trữ: ": accumulator,
  //     "Giá khóa học: ": currentValue.coins,
  //     "Tích trữ được: ": total,
  //   });
  //   console.log("accumulator: " + accumulator);
  //   console.log(currentValue);
  return total;
}

var totalCoins = Courses.reduce(coinHandler, 0); // 0 chính là giá trị khởi tạo, có thể là số, chữ, mảng, object...
console.log("Tổng tiền: " + totalCoins);
