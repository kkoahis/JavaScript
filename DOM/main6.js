// DOM EVENTS
// 1. Attribute events
// 2. Assigning events using element node

var h1Element = document.querySelectorAll("h1")

for(var i = 0; i < h1Element.length; i++){
   h1Element[i].onclick = function(e){
      console.log(e.target)
   }
}
