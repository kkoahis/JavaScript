// JSON server: fake REST API
var courseAPI = "http://localhost:3000/course";

fetch(courseAPI)
   .then(function (response) {
      return response.json();
   })
   .then(function (data) {
      console.log(data);
   })