// 1. Template literals
const courseName = 'JavaScript';
const desCourse = 'This is a course about ' + courseName;
const desCourse2 = `This is a course about ${courseName}, template string noi suy voi \${}`;

console.log(desCourse, "-> normal string");
console.log(desCourse2, "-> template string");

// 2. Multi-line strings
const line = 'line 1 \nline 2'
const MultiLine = `line1
line2
line3`

console.log(line);
console.log(MultiLine);