function logger(log){
   console.log('Hello, ', log);
}
logger('World');

const sum = (a, b) => ({a: a, b: b, sum: a + b})
console.log(sum(1, 2));

const logger2 = log => console.log('Hello, ', log);
logger2('World');

const courses = {
   name: 'JavaScript',
   getName: function(){
      return this.name;
   }
}
console.log(courses.getName());

// ngoai ra Arrow function khong the lam ham constructor
