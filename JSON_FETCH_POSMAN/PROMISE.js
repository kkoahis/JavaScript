/**
   2. Promise: là một đối tượng giúp xử lý bất đồng bộ, giúp thay thế cho callback hell
   - sync: đồng bộ
   - async: bất đồng bộ (setTimeout, ajax, fetch, XMLHttprequest, readFile,   writeFile,setInterval, callback ...)
   - Pain: callback hell (callback hell, pyramid of doom)
   - Lý thuyết, cách hoạt động
   - thực hành, ví dụ
 */

// 1. Pending: trạng thái ban đầu, nếu không resolve() hoặc reject() thì vẫn ở trạng thái này và dẫn đến rò rỉ bộ nhớ
// 2. Fulfilled: trạng thái thành công
// 3. Rejected: trạng thái thất bại
var promise = new Promise(
  // Executor
  function (resolve, reject) { //thanh cong, that bai
    // Logic
    // Thanh cong -> resolve()
    // That bai -> reject()

    // fake call API
    resolve([
      {
        id: 1,
        name: 'Javascript'
      }
    ]);
    reject("co loi xay ra, khong the lay du lieu tu server er");
  }
)
// chain: nối tiếp các promise


// Khi resolve() -> then()
promise
  .then(function () {
    return new Promise(function (resolve) {
      setTimeout(function () {
        resolve([1,2,3])
      }, 3000)
    });
  })
  .then(function (data) {
    console.log(data)
    return 2
  })
  // Khi reject() -> catch()
  .catch(function (error) {
    console.log(error)
  })
  // Khi resolve() hoac reject() -> finally()
  .finally(function () {
    console.log('Done')
  })