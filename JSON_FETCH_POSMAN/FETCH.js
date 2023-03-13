// Fetch: dung cho viec lay du lieu tu server\

var postAPI = 'https://jsonplaceholder.typicode.com/posts'
fetch(postAPI)
   .then(function (response) {
      return response.json();
      // JSON.parse(response) JSON -> JS
   })
   .then(function (posts) {
      var htmls = posts.map(function (post) {
         return `<li>
            <h2>${post.title}</h2>
            <p>${post.body}</p>
         </li>`
      })
      var html = htmls.join('')
      document.getElementById('post-block').innerHTML = html
   })
