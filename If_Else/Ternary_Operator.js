// Toán tử 3 ngôi - Ternary Operator

var course = {
  name: "JavaScript",
  price: 0,
  //   price: 260,
};

/*
if(course.price > 0) {
   console.log(`${course.price} Coins`);
} else {
   console.log('Free');
}
*/

// đoạn code if else ở trên tương ướng với toán tử 3 ngôi sau
var result = course.price > 0 ? `${course.price} coins` : "Free";
// Phù hợp cho những đoạn code if-else ngắn, không quá phức tạp

console.log(result);
