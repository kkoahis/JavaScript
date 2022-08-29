/*
   CHUỖI TRONG JAVASCRIPT

   1. Tạo chuỗi
      - Cách tạo chuỗi
      - Nên dùng cách nào? Lí do?
      - Kiểm tra datatype
   2. Một số case sử dụng backslash (\)
   3. Xem độ dài chuỗi
   4. Chú ý độ dài khi viết code 
   5. Templete string ES6
 */

var fullName = 'Nguyen Van Khoa';   // * cách 1 tạo chuỗi --> datatype là String
var lastName = new String('Khoa \'dep trai\'');  // cách 2 tạo chuỗi --> datatype là Object
var backslash = 'Đây là dấu \\';

console.log(backslash);
console.log(fullName.length);

// Templete String ES6
console.log(`Tôi là: ${fullName} ${lastName}`); // giá trị đưa vào ${} phải là giá trị String, nếu không phải String thì nó sẽ tự động convert sang String