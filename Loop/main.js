/*
   Vòng lặp - Loop

   1. for - Lặp với điều kiện đúng
   2. for/in - Lặp qua key của đối tượng
   3. for/of - Lặp qua value của đối tượng
   4. while - Lặp khi điều kiện đúng
   5. do/while - Lặp ít nhất 1 lần, sau đó lặp khi điều kiện đúng
*/

var myInfo = {
  name: "VanKhoa",
  age: 20,
  addresss: "Hoa An - Cam Le - Da Nang",
};

var language = ["JavaScript", "PHP", "HTML", "CSS"];

// for/in
// lấy key ra dưới dạng String vì đang là Object
for (var key in myInfo) {
  console.log(key);
  console.log(myInfo[key]);
}

// lấy key ra dưới dạng số vì đang là mảng
for (var key in language) {
  console.log(key);
  console.log(language[key]);
}

// for/of
for (var key of language) {
  console.log(key);
}

console.log(Object.keys(myInfo)); // tạo ra mảng từ Object
for (var key of Object.keys(myInfo)) {
  console.log(key);
}

// while
var i = 0;
while (i < 30) {
  i++;
  console.log(i);
}

// do-while từ lần thứ 2 mới kiểm tra điều kiện lặp
var i = 0;
do {
  i++;
  console.log(i);
} while (i < 10);
