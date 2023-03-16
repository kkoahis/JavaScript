// Let & Const duoc sinh ra de thay the cho var trong ES5

// 1. Var / Let, Const: Scope, Hoisting
// 2. Counst / Var, Let: Assignment

// Khi dinh nghia bien va khong gan lai thi dung const
// Khi dinh nghia bien va gan lai thi dung let

// Code block: if else, loop, {}, ...
{
   var a = 1;
   let b = 2;
   const c = 3;
   {
      {
         console.log(b, "trong block"); // ReferenceError: b is not defined
         console.log(c, "trong block"); // ReferenceError: c is not defined
      }
   }
}
console.log(a); // 1
// console.log(b, "ngoai block"); // ReferenceError: b is not defined
// console.log(c, "ngoai block"); // ReferenceError: c is not defined

// Assignment
var a = 1;
let b = 1;
// const c = 1; // SyntaxError: Missing initializer in const declaration

a = 2;
b = 2;
c = 2; // TypeError: Assignment to constant variable.

console.log(a, "hosting a")
console.log(b, "hosting b")
// console.log(c, "hosting c")