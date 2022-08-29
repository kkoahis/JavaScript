
// LÀM VIỆC VỚI CHUỖI
// keywords: JavaSrcipt String methods

var myString = 'Cùng học JavaScript basic nào!! JavaScript JavaScript JavaScript-lmao!!';
var myString_Trim = '    1  Xin chao cac ban, toi ten la Khoa 1   ';

// 1. Length
// console.log(myString.length);

// 2. Find index
// Đếm từ 0 -> kí tự đó
/*
console.log(myString.indexOf('JavaScript', 19)); // 19 là bắt đầu đếm từ vị trí só 19 trở đi
console.log(myString.lastIndexOf('JavaScript'));   // tìm vị trí cuối cùng của kí tự cần tìm
*/

// 3. Cut String
/*
console.log(myString.slice());
console.log(myString.slice(9, 20));
console.log(myString.slice(9));
console.log(myString.slice(-17, -2));  // cắt ngược từ phía sau chuỗi  
*/

// 4. Replace
/*
console.log(myString.replace('JavaScript', 'JS'));
console.log(myString.replace(/JavaScript/g, 'JS')); // sử dụng biểu thức chính quy để ghi đè tất cả chữ JavaScript thành JS
*/

// 5. Convert to uper case
// console.log(myString.toUpperCase());

// 6. Convert to lower case
// console.log(myString.toLowerCase());

// 7. Trim dùng để xử lí dữ liệu người dùng nhập vào trong form, có thể dùng để loại bỏ những khoảng trắng ở 2 đầu String
/*
console.log(myString_Trim);
console.log(myString_Trim.trim());
 */

// 8. Split tìm ra điểm chung để cắt ra thành Array
/*
var language = 'JavaScript, PHP, RUBY, C#';
console.log(language.split('')); // không có điểm chung để tách ra thành Array nên là tách ra thành từng kí tự riêng
console.log(language.split(', '));  // lấy điểm chung là ,_
*/

// 9. Get a character by index lấy ra 1 ký tự bởi 1 vị trí cho trước
/*
var myString_GetIndex = 'Baesooyaaa__';
console.log(typeof myString_GetIndex.charAt(10000)); // nếu vị trí không có trong chuỗi thì nó sẽ trả về chuỗi rỗng '' và có thể dùng typeof để kiểm tra datatype và nó là String
console.log(myString_GetIndex.charAt(3)); // bắt đầu từ vị trí số 0 là chữ 'B', 1 là chữ 'a', 2 là chữ 'e', 3 là chữ 's'
console.log(myString_GetIndex[100]); // có thể dùng [] để trả về kí tự thứ index. Nếu như kí tự thứ index không có trong chuõi thì datatype sẽ trả về undefinded thay cho String như charAt() 
*/

