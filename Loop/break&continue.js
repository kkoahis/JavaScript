// break
console.log("BREAK");
for (var i = 0; i < 10; i++) {
  console.log(i);
  if (i >= 5) {
    break;
  }
}

// continue
console.log("CONTINUE");
for (var i = 0; i < 10; i++) {
  if (i % 2 !== 0) {
    continue; // bỏ qua những dòng code sau line 14 --> không in ra các số trong if()
  } else {
    console.log(i);
  }
}
