// ClassList Property
// 1. Add ( hem 1 class vao 1 element)
// 2. Remove ( xoa 1 class cua 1 element)
// 3. Toggle ( kiem tra neu co class thi xoa class, neu khong co thi them class)
// 4. Contains ( kiem tra 1 class co ton tai trong 1 element hay khong)

var boxElement = document.querySelector(".box");
console.log(boxElement.classList)

boxElement.classList.add("red", "bold", "lmao");

console.log(boxElement.classList.contains("red"));

// setTimeout(() => {
//    boxElement.classList.remove("red");
// }, 3000);

setInterval(() => {
   boxElement.classList.toggle("red");
}, 1000);