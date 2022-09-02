
// Đối tượng DATE

var date = new Date();
var month = date.getMonth() + 1; // 0-11 tháng 1 được in ra là 0 còn tháng 12 được in ra là 11 =)))
var day = date.getDate();
var year = date.getFullYear();

console.log(date);
console.log(day);
console.log(month);  
console.log(year);
console.log(`${day}-${month}-${year}`);
