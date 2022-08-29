/*
   Các loại funtion:
  
   1. Declaration function --> Bắt buộc đặt tên cho function, có thể gọi hàm trước khi định nghĩa hàm (hosting)
   2. Expression function --> Có thể đặt tên cho function hoặc là không, không thể gọi hàm trước khi định nghĩa hàm
   3. Arrow function
 */

// Khi định nghĩa như thế này được gọi là declaration function
function showMess() {
   console.log('Declaration function');
}

// Khi đặt biến và gán cho nó là 1 function được gọi là Expression function
var showMess_2 = function ExpressioFunc() {
   console.log('Expression function');
}

// Call back cũng là 1 Expression function
setTimeout(function ExpressioFunc() {

});

// Cũng là Expression function
var myObject = {
   myFunction: function ExpressioFunc() {

   }
}
