var users = [
   {
      id: 1,
      name: "John"
   },
   {
      id: 2,
      name: "Pete"
   },
   {
      id: 3,
      name: "Mary"
   },
   {
      id: 4,
      name: "Tom"
   }
]

var comment = [
   {
      postId: 1,
      content: "awesome post",
      user_id: 1
   },
   {
      postId: 2,
      content: "it was ok",
      user_id: 2
   },
   {
      postId: 3,
      content: "so so",
      user_id: 3
   },
]

// 1. lay ra tat ca cac comment
// 2. lay ra tat ca cac user_id, tu user_id lay ra user tuong ung
// FAKE API
function getComments() {
   return new Promise(function (resolve, reject) {
      setTimeout(function () {
         resolve(comment)
      }, 1000)
   })
}

function getsUsersbyIDs(userIDs) {
   return new Promise(function (resolve, reject) {
      setTimeout(function () {
         var result = users.filter(function (user) { // filter tra ve 1 mang moi
            return userIDs.includes(user.id) // tra ve true neu user.id nam trong userIDs
         })
         resolve(result) // tra ve mang user
      }, 1000)
   })
}

// getsUsersbyIDs([1, 2])
//    .then(function (users) {
//       console.log(users)
//    })

getComments()
   .then(function (comments) {
      var usersID = comments.map(function (comment) { // map tra ve 1 mang moi
         // console.log(comment.user_id)
         return comment.user_id // tra ve user_id cua comment
      })

      console.log(usersID) // [1, 2, 3]
      return getsUsersbyIDs(usersID)
         .then(function (users) {
            return {
               users: users,
               comments: comments
            }
         })
      })
   .then(function (data) {
      // console.log(data)
      var commentBlock = document.getElementById('comment-block')
      var html = ''
      data.comments.forEach(function (comment) {
         var user = data.users.find(function (user) {
            return user.id === comment.user_id
         })
         html += `<li>${user.name} ----> ${comment.content}</li>`
      })

      commentBlock.innerHTML = html
   })