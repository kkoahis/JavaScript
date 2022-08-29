/*
   1. Tham số
      - Định nghĩa?
      - Kiểu dữ liệu? --> có thể truyền không giới hạn kiểu dữ liệu vào hàm kể cả số, mảng, Object, String...
      - Tính private?
      - 1 tham số?
      - Nhiều tham số?

   2. Truyền tham số
      - 1 tham số
      - Nhiều tham só

   3. Argument?
      - Đối tượng Argument
      - Giới thiệu vòng for of
*/

function writeLog(massage) {  // message ở đây được gọi là tham số
   console.log(massage);   // message ở đây được gọi là tham số
}

writeLog('lmao lmao');  // lmao lmao ở đây được gọi là đối số 
writeLog(123);
writeLog(['Java Scrpit', 'PHP', 'C#']);
writeLog();

function LoopOf() {
   var myString = '';
   for(var param of arguments) {
      myString += param + ' - ';
   }
   console.log(myString);
}

LoopOf('Loop1', 'Loop2', 'Loop3');
//////////////////////////////////////////////////////////////////
/*
   return trong hàm - JavaScript cơ bản
 */
function CongSo(a, b) {
   return a + b;
   //a + b; Có thể test rằng nếu không có return thì sẽ trả về Undefinded
}

var result = CongSo(2, 5);
console.log(result);
