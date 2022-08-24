var fullName = "Nguyen Van Khoa";
var age = 26;

// alert(fullName);
// alert(age);

console.log(fullName);
console.warn(fullName);
console.error(fullName);

confirm("Bạn đã đủ 18 tuổi chưa?"); 
prompt("Hãy điền số điện thoại vào đây");

setTimeout(function(){
   alert("Thong bao ve setTimeout");
}, 3000);

setInterval(function() {
   console.log("Thong bao ve setInterval" + Math.random());
}, 3000);


