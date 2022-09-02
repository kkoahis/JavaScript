
// Object Constructor - Xây dựng đối tượng

function User(firstName, lastName, avatar) {
   this.firstName = firstName;
   this.lastName = lastName;
   this.avatar = avatar;

   this.getName = function() {
      return `${this.firstName} ${this.lastName}`;
   }
}

var author = new User('Nguyễn', 'Khoa', 'Avatar');
var user = new User('Bae', 'Koaa', 'Avatar');

author.title = 'Học ngay JavaScript đi nào!!';
user.comment = 'Khóa học hay quá thầy Khoa Nguyễn ạ, em vô cùng cảm ơn thầy đã tạo ra khóa học này!! 🥰';

console.log(author);
console.log(user);
console.log(author.getName());
console.log(user.getName());



