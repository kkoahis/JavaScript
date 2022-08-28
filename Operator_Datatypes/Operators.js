
/*
   Giới thiệu về toán tử trong JavaScript
   1. Toán tử số học - Arithmetic
   2. Toán tử gán - Assignment
   3. Toán tử so sánh - Comparision
   4. Toán tử logic - Logical
*/

// 1. Toán tử số học
var a = 4;
var b = 2;
var c = a ** b; //Phép ** là phép lũy thừa

console.log("1. Toán tử số học " + c);


// 2. Toán tử gán
var a2 = 1;
a2 += 2;

console.log("2. Toán tử gán " + a2);



// 2. Toán tử gán chuỗi (String operator)
var firstName = "Van";
firstName += " Nguyễn"
var lastName = "Khoa";

console.log(firstName + " " + lastName + " Đẹp Trai Pro Max");


// 3. Toán tử so sánh (Comparision)
var a3 = "Nguyễn Văn Khoa";
var b3 = "Nguyễn Văn Khoa đẹp trai";

if(a3 == b3){
   console.log("Điều kiện đúng!");
}
else{
   console.log("Điều kiện sai!");
}


// 3. Toán tử boolean
var n = 3;
var m = 4;
var isSuccess = a < b;

console.log("n > m là: " + isSuccess);

// 3. Toán tử so sánh
/*
   0
   false
   '' or ""
   undefinded
   NaN
   null
   
   ---> 6 dữ liệu trên convert sang bolean là false còn lại tất cả là true 
*/



// 4. Toán tử logic (logical operator)
/*
   1. &&
   2. ||
   3. !
*/
var a4 = 1;
var b4 = 2;
var c4 = 3;

if(!(a < 0 )){
   console.log("4. Điều kiện !(a < 0) là đúng");
}

