/*
   Kiểu số (Number) trong JavaScript

   1. Tạo giá trị Number
      - Các cách tạo 
      - Dùng cách nào? Tại sao?
      - Kiểm tra datatypes

   2. Làm việc với Number
      - To String
      - To Fixed dùng trong trường hợp làm tròn số thập phân
*/

// 1. Cách tạo giá trị Number
var age = 20;
var PI = 3.1416;
var lmao = new Number(123);   // không nên sử dụng cách này vì datatype là Object
console.log(age);
console.log(typeof lmao);

var result = 20 / 'ABC';   // ra kết quả là NaN vì kết quả không hợp lệ với phép chia này 
console.log(isNaN(result)); 

// 2. Làm việc với Number 
console.log(typeof age.toString());
console.log(PI.toFixed());
console.log(PI.toFixed(1));
console.log(PI.toFixed(2));
console.log(PI.toFixed(3));
console.log(PI.toFixed(4));

// 3. Function check Number 
function isNumber(value) {
   return typeof value === 'number' && !isNaN(value) 
}

// Expected results:
console.log(isNumber(999)); // true
console.log(isNumber('abc')); // false
console.log(isNumber('100')); // false

console.log(isNumber(NaN)); // false
console.log(isNumber(100 / 'abc')); // false

