//Hiểu hơn về câu điều kiện và phép so sánh 
/*Các giá trị trả về false:
   0
   false
   '' hoặc là ""
   undefinded
   null
   NaN
*/

var a = 1;
var b = 2;

var result = 'A' && 'B' && NaN && 'C';   // Toán tử && sẽ lấy ngay các giá trị false nếu có trong câu
var result2 = 'A' && 'B' && 'C'; // Nếu không có các giá trị false nó sẽ lấy giá trị cuối

var rs = 'A' || false || 'C' || 'D' || 'E';   // Toán tử || sẽ lấy ngay sau các giá trị false các giá trị true, nếu giá trị đầu là giá trị true thì lấy luôn
var rs2 = 'A' || 'B' || 'C'; // Nếu không có các giá trị false nó sẽ lấy giá trị đầu tiên true

console.log('result', result);
console.log('result2' ,result2);
console.log('rs', rs);
console.log('rs2', rs2);

if(result){
   console.log('Điều kiện đúng');
}
else{
   console.log('Điều kiện sai');
}

/////////////////////////////////////////////////////////
if(rs){
   console.log('Điều kiện đúng');
}
else{
   console.log('Điều kiện sai');
}
