/*
   Array methods
   1. toString --> biến Array thành String
   2. Join  --> biến Array thành String, có thêm dấu ngăn cách ở giữa các phần tử
   3. Pop --> xóa phần tử cuối ra khỏi mảng và trả về phần tử đã xóa
   4. Push  --> thêm phần tử vào cuối mảng, trả về độ dài của mảng
   5. Shift --> ngược lại với pop, tức là xóa phần tử đầu ra khỏi mảng và trả về phần tử đã xóa
   6. Unshift  --> ngược lại với Push, tức là thêm phần tử vào đầu mảng rồi trả về độ dài của mảng
   7. splicing --> xóa, cắt, chèn phần tử vào mảng
   8. Concat   --> nối Array với nhau
   9. Slicing  --> cắt toàn bộ element hoặc là cắt 1 vài element trong mảng
*/

var languages = [
   'JavaScript',
   'Ruby',
   'HTML',
   'CSS',
];
console.log(languages);

// 1. toString
console.log(languages.toString());

// 2. Join
console.log(languages.join(' - '));

// 3. Pop
console.log(languages.pop()); // nếu không còn phần tử nào để xóa thì sẽ trả về giá trị undefined
console.log(languages);

// 4. Push
console.log(languages.push('C# - Winform', 'Java'));  // .push trả về độ dài mới sau khi thêm của Array 
console.log(languages);

// 5. Shift
console.log(languages.shift());
console.log(languages);

// 6. Unshift
console.log(languages.unshift('C++'));
console.log(languages);

// 7. Splicing
var languages = [
   'JavaScript',
   'Ruby',
   'HTML',
   'CSS',
];
console.log(languages);
languages.splice(2, 1, 'lmao'); 
// 2: đặt con trỏ tại index thứ 2, 1: xóa 1 phần tử tính từ index đặt con trỏ trước đó, 'lmao' là replace vị trí đó
// languages.splice(2, 0, 'lmao'); 
// nếu thay 1 thành 0 tức là không xóa phần tử nào và thay vào đó là chèn phần tử 'lmao' vào vị trí con trỏ trong mảng
console.log(languages);

// 8. Concat
var languages = [
   'JavaScript',
   'Ruby',
   'HTML',
   'CSS',
];

var languages_speak = [
   'English',
   'VietNamese',
   'American',
   'japanese'
];
console.log(languages.concat(languages_speak));

// 9. Slicing
console.log(languages.slice(1, 3));
// 1: vị trí bắt đầu cắt, 3: vị trí kết thúc cắt
console.log(languages_speak.slice(0));
// copy Array luôn
console.log(languages.slice(-2, -1));
// phần tử cuối là -1, -2 là phần tử kế cuối, -3 là phần tử kế của 'kế cuối' --> cắt ra phần tử
