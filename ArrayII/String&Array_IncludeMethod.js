// Include Method
console.log(Array.prototype.includes);
console.log(String.prototype.includes);

var title = "Responsive web design";

console.log(title.includes("web")); // trong chuỗi title chứ chữ web nên trả về true
console.log(title.includes("Responsive", 2)); //sau chữ s không tìm được chữ Responsive nào cả nên trả về là false

console.log("------------------------------------------------");

var Course = ["JavaScript", "PHP", "HTML & CSS"];
console.log(Course.includes("PHP", 1)); // tìm tự vị trí thứ 1 tức là ngay ở PHP
console.log(Course.includes("PHP", -3)); // tìm ở vị trí thứ -3 tức là độ dài mảng (3) + -3 = 0
