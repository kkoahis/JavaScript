// DOM EVENTS

// 1. preventDefault(): loai bo hanh vi mac dinh cua trinh duyet
// 2. stopPropagation(): ngan chan su kien lan luot duoc chay tren cac the cha

var aElement = document.links;

for (var i = 0; i < aElement.length; ++i) {
   aElement[i].onclick = function (event) {
      if (!event.target.href.startsWith("http://fb.com")) {
         event.preventDefault();
      }
   }
}
/////////////////////////////////////////
var ulElement = document.querySelector("ul");

ulElement.onmousedown = function (event) {
   event.preventDefault()
}

ulElement.onclick = function (event) {
   console.log(event.target);
}
/////////////////////////////////////////
document.querySelector("div").onclick = function (event) {
   console.log("DIV")
}

document.querySelector("button").onclick = function (event) {
   event.stopPropagation();
   console.log("click me")
}