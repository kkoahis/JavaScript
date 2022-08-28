/*
   Kiểu dữ liệu trong JavaScript:
   1. Dữ liệu nguyên thủy - Primitive Data
      - Number
      - String 
      - Boolean
      - Undefinded
      - Null
      - Symbol

   2. Dữ liệu phức tạp - Complex Data
      - Function
      - Object
*/

// Number type
var a = 1;
var b = 2;
var c = 2702;
console.log(typeof a ); // Các check thử biến thuộc kiểu dữ liệu gì
// * Chú ý kết quả trả về của hàm typeof luôn luôn là kiểu chuỗi String

// String type
var fullName = 'Nguyễn "Văn" Khoa';
console.log(fullName);

// Boolean type
var isSuccess = true;

// Underfinded type
var age;
console.log(age + ' Đây là Undefinded tpe');

// Null
var isNull = null;
console.log(isNull + ' Đây là biến Null');

// Symbol
var id = Symbol('id'); //unique: giống khóa chính, ít khi dùng đến nó
var id2 = Symbol('id');

console.log(id === id2);
 

// Function
var myFunction = function(){
   alert('Hi. Xin chao` cac ban.');
}

myFunction();  // Gọi hàm function ra


// Object types 
// Lưu dữ liệu tương tác với JavaScript
var myObject = {
   name: 'Van Khoa', //key - value
   age: 20,
   address: '31 - Hoa An 21 - Phuong Hoa An - Quan Cam Le - TP Da Nang',
   myFunction: function(){

   }
};
console.log('myObject is: ', myObject);

// Object types 
// Dùng để định nghĩa nhanh danh sách gì đó
var myArray = [
   'JavaScript',
   'PHP',
   'RUBY',
   'Python',
   'C++'
];
console.log(myArray);
