// Co the dinh nghia key va value cua object trong mot object literal
// Co the dinh nghia phuong thuc trong mot object literal
// Co the dinh nghia key cho object duoi dang bien
var name = 'JavaScript';
var price = 1000;

var course = {
   name: name,
   price: price,
}
// 1 va 2
var courseNew = {
   name,
   price,
   getName(){
      return this.name;
   }
}

console.log(course);
console.log(courseNew.getName());

// 3.
var fieldName = 'name';
var fieldPrice = 'price';

const Course = {
      [fieldName]: 'JavaScript',
      [fieldPrice]: 1000,
}

console.log(Course);