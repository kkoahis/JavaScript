// function sleep(ms) {
//    return new Promise(function (resolve) {
//       setTimeout(resolve, ms)
//    });
// }

// sleep(1000)
//    .then(function () {
//       console.log(1)
//       return sleep(1000)
//    })
//    .then(function () {
//       console.log(2)
//       // return new Promise(function (resolve, reject) {
//       //    reject('Error')
//       // });
//       return sleep(1000)
//    })
//    .then(function () {
//       console.log(3)
//       return sleep(1000)
//    })
//    .catch(function (err) {
//       console.log(err)
//    })


// 3. Promise.all: dung de chay nhieu promise cung luc va tra ve ket qua cua tat ca cac promise, do mat thoi gian chay tung cai
var promise1 = new Promise(function (resolve, reject) {
   setTimeout(function () {
      resolve([1])
   }, 2000)
})

var promise2 = new Promise(function (resolve, reject) {
   setTimeout(function () {
      resolve([2, 3])
   }, 5000)
})

var promise3 = new Promise(function (resolve, reject) {
   reject('Error')
})
// vi chay song song nen doi 5s de ket qua tra ve
Promise.all([promise1, promise2, promise3])
   .then(function (result) {
      var result1 = result[0]
      var result2 = result[1]
      
      console.log(result1.concat(result2))
   })
   .catch(function (err) {
      console.log(err)
   })