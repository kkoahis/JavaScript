/**
 * 1. Elements
 * 2. Attributes
 * 3. Text
 */

// innerHTML, outerHTML
var boxElement = document.querySelector('.box');
console.log(boxElement);

// innerText chi set duoc Text, innerHTML set duoc ca HTML
// boxElement.innerText = "<h1>hello</h1>";
boxElement.innerHTML = "<h1>New Heading</h1>";
console.log(document.querySelector("h1").innerText)
console.log(boxElement.innerHTML)

console.log("--------------------")

var boxElementOuter = document.querySelector('.box-outter');
boxElementOuter.outerHTML = "<span>hello</span>"
console.log(boxElementOuter.innerHTML);