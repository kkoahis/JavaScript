// Callback: là hàm (function) được truyền qua đối số khi gọi hàm khác

// 1. Là hàm
// 2. Được truyền qua đối số
// 3. Được gọi lại (trong hàm nhận đối số)

function myFunction(param) {
  if (typeof param === "function") {
    console.log("2");
    param("Khoa dep trai");
  } else {
    console.log("Kiem tra lai tham so cua ham myFunction!");
  }
}

function myCallBack(Value) {
  console.log("Value: ", Value);
  console.log("1");
}

myFunction(myCallBack); // OK
myFunction(43); // Error
