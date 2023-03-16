// la cach viet khac cua constructor function

// Cach viet cu
// function Course(name, price) {
//    this.name = name;
//    this.price = price;
// }

// Cache viet moi
class Course {
   constructor(name, price) {
      this.name = name;
      this.price = price;
   }

   // cach viet method
   getName() {
      return this.name;
   }

   getPrice() {
      return this.price;
   }

   run() {
      const isSucess = false;
      if (isSucess) {
         return 'Course is running';
      } else {
         return 'Course is not running';
      }
   }
}

const phpCourse = new Course('PHP', 1000);
const jsCourse = new Course('PHP', 1200);

console.log(phpCourse);
console.log(jsCourse);