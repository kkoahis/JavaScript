// HTML DOM

// Có 3 thành phần chính 
/**
 * 1. Element: ID. class, tag, CSS selector, HTML colection
 * 2. Attributes
 * 3. Text
 */

// NODE 

// ----------------------------------------------------------------
// GET ELEMENT METHODS
var headingNode = document.getElementById("heading")
console.log({
   element: headingNode
})

var headingNodes = document.getElementsByClassName("heading-class")
console.log(headingNodes)

var headingNodeTagName = document.getElementsByTagName("h1")
console.log(headingNodeTagName)

var headingNodeCSSselector = document.querySelector('.heading-class')
console.log(headingNodeCSSselector)

var heading2CSSselector = document.querySelector('.box .heading-2:first-child')
var heading2CSSselector1 = document.querySelector('.box .heading-2:nth-child(2)')

console.log(heading2CSSselector)
console.log(heading2CSSselector1)
console.log("------------------------------------------------------")

// ----------------------------------------------------------------
// DOM ATTRIBUTES
var attributes = document.querySelector("h1")
attributes.title = "Title"
console.log(attributes) // setter: la gan vao attribute
// show source code ra thi khong co


