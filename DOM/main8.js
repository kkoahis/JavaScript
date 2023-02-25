// 1. Xu li nhieu viec khi 1 event xay ra
// 2. Lang nghe/ huy bo su kien

// DOM Event: khi chung ta muon lang nghe su kien ma khong muon go bo su kien cu
var btnElement = document.getElementById("btn");

btnElement.onclick = function () {
   console.log("viec 1")
   console.log("viec 2")
   alert("Hello");
}
setTimeout(() => {
   btnElement.onclick = function () { };
}, 3000);

// EVENET LISTENER: khi chung ta muon lang nghe su kien va huy bo su kien cu
var btnElementEL = document.getElementById("btn-el");

function viec1() {
   console.log("viec 1")
}

function viec2() {
   console.log("viec 2")
}

btnElementEL.addEventListener("click", viec1);
btnElementEL.addEventListener("click", viec2);

setTimeout(() => {
   btnElementEL.removeEventListener("click", viec1);
}, 3000);