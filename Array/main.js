/*
   Mảng trong JS  - Array in JS
   1. Tạo mảng
      - Cách tạo
      - Sử dụng cách nào? Tại sao?
      - Kiểm tra datatypes
   2. Truy xuất mảng
      - Độ dài mảng
      - Lấy phần tử theo index
*/

// 1. Tạo mảng
var languages = [
   'JavaScript',
   'Ruby',
   'C++',
   'C#',
   null,
   NaN,
   27022002,
   function() {
   },
   {} // cái này là Object
];
console.log(languages);
console.log(typeof languages);   // kiểu dữ liệu của Array là Object
console.log(Array.isArray(languages)); // Array.isArray dùng để check Array

// 2. Truy xuất mảng
console.log(languages.length);
console.log(languages[3]);
