var courseApi = "http://localhost:3000/course"

function start() {
   getCourses(renderCourse);
   // getCoursesVer2();
   handleCreateForm();
}

start();

/**
 * function 
 */
function getCourses(callback) {
   fetch(courseApi)
      .then(function (response) {
         return response.json();
      })
      .then(callback)
      .catch(function (error) {
         console.log('Có lỗi xảy ra, hãy kiểm tra lại API: ', error);
      })
}

function createCourse(data, callback) {
   var options = {
      method: 'POST',
      headers: {
         "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify(data),
   };
   fetch(courseApi, options)
      .then(function (response) {
         return response.json();
      })
      .then(callback)
}


function handleDeleteCourse(id){
   var ids = JSON.stringify(id);
   var options = {
      method: 'DELETE',
      headers: {
         'Content-Type': 'application/json'
      }
   };
   fetch(courseApi + '/' + ids, options)
      .then(function (response) {
         return response.json();
      })

      .catch(function (error) {
         console.log('Có lỗi xảy ra, hãy kiểm tra lại: ', error);
      })
}

// function getCoursesVer2() {
//    fetch(courseApi)
//       .then(function (response) {
//          return response.json();
//       })
// }

function renderCourse(courses) {
   var listCourseBlock = document.querySelector('#list-courses');
   var htmls = courses.map(function (course) {
      return `
         <li class="course-item-${course.id}">
            <h4>${course.name}</h4>
            <p>${course.description}</p>
            <button class="btn btn-danger" onclick="handleDeleteCourse(${course.id})">Delete</button>
         </li>
      `;
   });
   listCourseBlock.innerHTML = htmls.join('');
}

function handleCreateForm() {
   var creatBtn = document.querySelector('#create');
   creatBtn.onclick = function () {
      var name = document.querySelector('input[name="name"]').value;
      var description = document.querySelector('input[name="description"]').value;
      // console.log(name, description);
      var formData = {
         name: name,
         description: description
      }
      createCourse(formData, function () {
         getCourses(renderCourse);
      });
   }
}
