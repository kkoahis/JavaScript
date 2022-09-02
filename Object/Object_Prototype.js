/*
   Object Prototype - khuôn của đối tượng

   1. Prototyoe là gì?
      --> Khởi tạo phương thức hoặc thuộc tính bên ngoài Constructor
   
   2. Sử dụng khi nào 
      --> nếu tạo function getClassName ngay bên trong hàm thì mỗi lần new User thì nó sẽ cứ tạo ra hàm getClassName (tạo 1000 đối tượng thì nó tạo hàm getClassName 1000 lần -> tốn tài nguyên)
      --> nếu tạo function getClassName bằng prototype thì 1000 User sẽ được kế thừa từ mỗi 1 cái function getClassName mà thôi (có thể console.log() ra để kiểm tra hàm tạo ngay bên trong)
      ==> dù 2 cách đều cho ra 1 kết quả như nhau nhưng mà dùng prototype vào đúng trường hợp thì sẽ rất tiện, tiết kiệm tài nguyên

*/

// Constructor function
function User(firstName, lastName, avatar) {
   this.firstName = firstName;
   this.lastName = lastName;
   this.avatar = avatar;

   this.getName = function() {
      return `${this.firstName} ${this.lastName}`;
   }
}

User.prototype.className = '20TCLC_NHAT1';   // giúp thêm được thuộc tính ở ngoài hàm tạo Constructor
User.prototype.getClassName = function () {  // giúp thêm được phương thức ở ngoài hàm tạo Constructor
   return this.className;
};

var author = new User('Nguyễn', 'Khoa', 'Avatar');
var user = new User('Bae', 'Koaa', 'Avatar');


console.log(author.className);
console.log(user.className);
console.log(author.getClassName());
console.log(user.getClassName());
console.log(author);
console.log(user);





