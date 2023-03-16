// ?. dung khi khong thuc su chac chan key do co ton tai hay khong
const obj = {
   name: "Alice",
   cat: {
      name: "Dinah",
      cat2: {
         name: "Dinah2",
         cat3: {
            name: "Dinah3"
         }
      }
   }
}

// old way
if (obj && obj.cat && obj.cat.cat2 && obj.cat.cat2.cat3) {
   console.log(obj.cat.cat2.cat3.name);
}

// new way: neu cam thay nghi ngo rang obj hoac obj.cat hoac obj.cat.cat2 hoac obj.cat.cat2.cat3 co the la undefined thi dung ?. de kiem tra
if (obj?.cat?.cat2?.cat3) {
   console.log(obj.cat.cat2.cat3.name);
}