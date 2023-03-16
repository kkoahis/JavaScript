// Destructuring: phan ra~
// Old school

/**
 * tom lai la: 
 *    Rest dùng để nén lại các phần tử còn lại để tạo thành [] or {}
 * và Rest thường dùng với Destructoring như ví dụ dưới
 *    còn Spread thì như là giải nén, nó sẽ xóa [] hoặc {} và chỉ còn lại những phần tử bên trong
 */

var array = ['javascript', 'php', 'ruby'];
var a = array[0];
var b = array[1];
var c = array[2];
console.log(a, b, c);

// New school (distructuring)
var [d, , f] = array;
console.log(d, f);

// Rest: lay ra phan con lai~
// Khi su dung voi destructuring thi moi la toan tu rest
var [g, ...rest] = array;
console.log(g, rest);


var coures = {
   name: 'javascript',
   price: 1000,
   image: 'image.png',
   children: {
      name: 'Reactjs'
   }
};

var { name, price } = coures;
var { name, ...rest } = coures;
var { name, children: { name } } = coures;
var {name, description = 'Khong co mo ta'} = coures;

console.log(name, price); // javascript 1000
console.log(rest); // {price: 1000, image: "image.png", children: {…}}
console.log(name); // Reactjs
console.log(description); // Khong co mo ta

console.log('-------------------');

function logger({name, price, ...rest}){
   console.log("day la name: ", name);
   console.log("day la price : ", price);
   console.log("day la rest : ", rest);
}

logger({
   name: 'javascript',
   price: 1000,
   image: 'image.png',
   description: 'Day la khoa JS co ban'
})