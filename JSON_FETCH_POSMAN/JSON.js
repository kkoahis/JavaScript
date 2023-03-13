/**
   1. JSON: JavaScript Object Notation
   - Là một dạng dữ liệu (chuỗi) 
   - JSON: Number, String, Boolean, Array, Object, Null, Array
   - Mã hóa - Stringify: JSON.stringify() từ javascript sang JSON
   - Giải mã - Parse: JSON.parse() từ JSON sang javascript

 */

console.log("-------------Parse-----------------")
var json = '["Javascript", "PHP", "Java", "Python", "C++"]';
var json1 = '{"name":"Nguyen Van Khoa", "age": 18, "address": "Ha Noi"}';
var jsonString = '"day la 1 chuoi"'
var jsonNumber = '27022002'

console.log(JSON.parse(json));
console.log(JSON.parse(json1));
console.log(JSON.parse(jsonString));
console.log(JSON.parse(jsonNumber));
console.log("-------------Stringify-----------------")
console.log(JSON.stringify({
   name: 'Nguyen Van Khoa',
   age: 18,
   address: 'Ha Noi'
}))


