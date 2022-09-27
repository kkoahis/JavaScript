// Flat - "làm phẳng" mảng từ Depth Array - "Mảng sâu"
var DepthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

var flatArray = DepthArray.reduce(function (flatOutput, depthItem) {
  return flatOutput.concat(depthItem);
}, []);
console.log(flatArray);

// Lấy ra các khóa học và đưa vào mảng mới
var topics = [
  {
    topic: "Front End",
    Course: [
      {
        id: 1,
        title: "HTML, CSS PRO MAX",
      },
      {
        id: 2,
        title: "JAVA SCRIPT PRO",
      },
    ],
  },
  {
    topic: "Back End",
    Course: [
      {
        id: 1,
        title: "PHP PRO MAX",
      },
      {
        id: 2,
        title: "NODE JS PRO MAX",
      },
    ],
  },
];

var NewCourse = topics.reduce(function (course, topic) {
  return course.concat(topic.Course);
}, []);  
console.log(NewCourse);
