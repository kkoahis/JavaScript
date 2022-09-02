// Object thường lưu trữ thông tin của 1 đối tượng cụ thể 

var classRoom = 'study room';

var myInfo = {
   name: 'Van Khoa', // thuộc tính - property
   age: 20, // thuộc tính - property
   address: 'Hoa An 21 - Da Nang',  //thuộc tính - property
   [classRoom]: 'B101', // đây là 1 trong những cách tạo ra key-value bằng cách đặt biến 
   getName: function() {   // vì đây là function nên gọi nó là phương thức chứ không gọi là key-values (thuộc tính  - methods)
      return this.name;
   },
   getAge: function() {
      return this.age;
   }
};

myInfo.email = 'khoakun27@gmail.com';  // thêm 1 key-value cho myObject
myInfo['my-phone'] = '0966804640';  // thêm 1 key-value nhưng tên key ngoài cách đặt tên thông thường
console.log(myInfo);

// cách lấy giá trị của key
console.log(myInfo.name);  
console.log(myInfo['address']);
console.log(myInfo['lmao']);  // nếu không có key đó thì sẽ đưa ra giá trị undefined
console.log(myInfo.getName());   // gọi function trong Object myInfo
console.log(myInfo);

// cách xóa 1 key-value trong Object
delete myInfo[classRoom];
delete myInfo.age;
console.log(myInfo);


