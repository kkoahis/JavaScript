// Spread: thuong dung de hop nhat 2 mang hoac 2 object


var array1 = ['JavaScript', 'Ruby', 'Python'];
var array2 = ['C#', 'Java', 'PHP', 'C++'];
// [...array1, ...array2] no se bo dau [] cua array1 va array2 va chi con lai nhung phan tu ben trong [] ma thoi
var array3 = [...array2, ...array1];

console.log(array3); // ["JavaScript,Ruby,PythonC#,Java,PHP,C++"]

var object1 = {
   name: 'JavaScript',
}

var object2 = {
   price: 1000,
}

var object3 = {
   ...object1,
   ...object2,
}
console.log(object3); // {name: "JavaScript", price: 1000}

// Spread: thuong dung de truyen tham so cho ham
var array_ = ['JavaScript', 'Ruby', 'Python'];

function logger(...Rest){
   for(var i = 0; i < Rest.length; i++){
      console.log(Rest[i]);
   }
}

logger(...array_); // JavaScript, Ruby, Python