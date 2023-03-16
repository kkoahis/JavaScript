// dung de dinh nghia cac ham xu ly chuoi template (template literals)
function highlight([first, ...strings], ...values){
   console.log(first);
   console.log(strings);
   console.log(values);
   console.log("====================================")
   return values.reduce(
      (acc, curr) => 
      [...acc, `<span>${curr}</span>`, strings.shift()],
      [first]
   ).join('');
}

var brand = "F8";
var type = "Javascript";

const html = highlight`Hoc lap trinh ${type} tai ${brand}!`;
console.log(html);
