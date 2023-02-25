var headingElement = document.querySelector("h1")
headingElement.setAttribute("class", "heading")
console.log(headingElement)

headingElement.setAttribute("data", "text-data")

// headingElement.getAttribute("class")
console.log(headingElement.getAttribute("class"))
console.log(headingElement.getAttribute("data"))

// TextContent: la nhung thu that su trong HTMl va no se bo qua the element node de lay thong tin ben trong, InnerText la nhung gi chung ta nhin thay
var headingText = document.querySelector(".heading-test")
console.log(headingText.textContent)   //getter
headingText.textContent = "lmao change text content"  //setter
