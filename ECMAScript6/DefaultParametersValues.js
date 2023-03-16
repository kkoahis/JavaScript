function logger(log) {
   // day la mot cach de kiem tra xem log co ton tai hay khong, nhung ma la dung cach cu
   if (typeof log === "undefined") {
      log = "No Log";
   }
   else {
      console.log(log);
   }
}

// cach moi de kiem tra xem log co ton tai hay khong
// neu khong ton tai thi se gan gia tri mac dinh la "Log"
// cac gai tri khong bac buoc phai dat thi minh se dung default value
function loggerNew(log, type="log") {
   console[type](log);
}

logger("Hello World");
loggerNew("lmao");
loggerNew("asdasd", "error");